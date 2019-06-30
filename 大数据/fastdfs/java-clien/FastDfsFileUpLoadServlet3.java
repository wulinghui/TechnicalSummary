/**
 * @copyright 2014
 * @version 1.0
 */

package ys.manufacture.framework.controller;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.util.Objects;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.io.FileUtils;

import ys.manufacture.framework.common.util.FastDfsUtil;

import com.wk.logging.Log;
import com.wk.logging.LogFactory;

/**
 * Class Description:
 */
/**
 * 使用场景:  解析表单上传文件servlert
 * <p>
 * 如何使用:  只需要重写uploadIOstore和endForward2个方法就行了。
 * <pre>
@Override
protected boolean uploadIOstore(String fileFormName, String fileRealName,byte[] fullBytes,int lineCount ,boolean isNotLastLine ,String line,BufferedReader reqbuf,HttpServletRequest request, HttpServletResponse response) throws Exception {
		
		// 本地io
		FileOutputStream openInputStream = null;
		if( lineCount == 0  ){
			openInputStream = FileUtils.openOutputStream(new File("/text.txt"));
			openInputStream.write(fullBytes);
			request.setAttribute(this.DFS_FLAG_OF_QS, reselt);
		}else{
			openInputStream = (FileOutputStream) request.getAttribute(DFS_FLAG_OF_QS);
			openInputStream.write(fullBytes);
		}
		
		return isNotLastLine;
	}
 * </pre>
 * <p>
 * 注意事项: 不能获得流的大小。
 * <ol>
 * 	<li> 无 </li>
 * </ol>
 *<p>
 * 待补充项: 
 * <ol>
 * 	<li> 无 </li>
 * </ol>
 * @Classname: FastDfsFileUpLoadServlet3.java
 * @Description: 
 * @author wulinghui
 * @Version: 1.0.0
 */
@WebServlet(urlPatterns = "/fs3/fileupload", displayName = "File upload fastDfs")
public class FastDfsFileUpLoadServlet3 extends HttpServlet {
	private static final Log logger = LogFactory.getLog();
	public static final String DFS_FLAG_OF_QS = "fastDfs_upload_appender_file_falg";
	private static final long serialVersionUID = -9180492361051068968L;
	
	@Override
	public final void doPost(HttpServletRequest request, HttpServletResponse response) {
		
		try {    
			response.setContentType("text/html;charset=UTF-8");

			String fileFormName = ""; // 上传的文件再表单中的名称

			String fileRealName = ""; // 上传文件的真实名字
			
			String contentType = request.getContentType();
			int lineCount = 0;
			int pos = -1;

			int pos2 = -1; // position2
			pos = contentType.indexOf("boundary=");
			 
			if (pos == -1) return;
				
			pos += "boundary=".length();
				
			// 得到结束分界符
			String boundary = "--" + contentType.substring(pos);
			
			final  String lastboundary = boundary + "--"; // 解析出分界符
			
			boolean ioFalg = false;
			// 得到请求消息的数据输入流
			
			try (final BufferedReader reqbuf = new BufferedReader(
					new InputStreamReader(request.getInputStream()))) {
				
				// 设置循环标志
				
				boolean flag = true;
				String s = null;
				while (flag) {

					s = getLine(reqbuf);;
					
//					if( Assert.isEmpty(s)  ) break;
					//退出，不然死循环。
					if( isEnd(lastboundary, s)  ) break;
					
					//
					pos = s.indexOf("filename=");

					if (pos != -1) {

						// 如果是文件数据的头，先存储这一行，用于在字节数组中定位

						// 先解析出文件名

						pos = s.indexOf("name=");

						pos += "name=".length() + 1; // 1表示后面的"的占位

						pos2 = s.indexOf("filename=");

						String s1 = s.substring(pos, pos2 - 3); // 3表示";加上一个空格

						fileFormName = s1;

						pos2 += "filename=".length() + 1; // 1表示后面的"的占位

						s = s.substring(pos2);

						int l = s.length();

						s = s.substring(0, l - 1);

						pos2 = s.lastIndexOf("\\"); // 对于IE浏览器的设置

						s = s.substring(pos2 + 1);

						fileRealName = s;

						// 往下读2行。
						getLine(reqbuf);
						getLine(reqbuf);
						// 准备读上传流
						ioFalg = true;
						
					}else if( ioFalg ){
						//结尾了
						if(isEndOfForm(boundary,s) || isEnd(lastboundary,s)){
							ioFalg=false;
						}
						//补足最后换行符
						byte[] fullBytes = getLineFullByte(s);
						// 下移用户
						ioFalg = uploadIOstore(fileFormName,fileRealName,fullBytes ,lineCount ,ioFalg ,s,reqbuf,request,response);
						//计数赋值
						lineCount = ioFalg ? lineCount+1 : 0;
					}else{
						continue;
					}
				}
			}
			//最后跳转。
			endForward(request,response);
			
		} catch (Exception e) {
			logger.error("fileupload error", e);
			throw new RuntimeException("fileupload error", e);
		}
	}

	protected void endForward(HttpServletRequest request, HttpServletResponse response) throws IOException {
		// TODO 展示页面。
		try(PrintWriter out = response.getWriter()){
			String[] result = (String[]) request.getAttribute(DFS_FLAG_OF_QS);
			out.print("{group_name : "+result[0]+", appender_filename :"+result[1] +"}");
			out.flush();
		}
	}

	/**
	 * <p>
	 * 注意事项: 
	 * <ol>
	 * 	<li>一定要看<b>See Also: </b>下相关链接。</li>
	 * </ol>
	 * @param fileFormName 上传的文件在表单中的名称 name="file"
	 * @param fileRealName 上传文件的真实名字 test.txt
	 * @param fullBytes    每一行的数据,只需要把这byte追加到指定位置就行了。(已把换行给填补上了)
	 * @param lineCount    表单第几行。
	 * @param isNotLastLine     当前是否不是最后一行。true 不是最后一行，false 最后一行。
	 * @param line         每一行的字符串数据，没有换行符
	 * @param reqbuf       包装了request.getInputStream()的，也是控制主程序读入流的。<br/>
	 *                     一般不建议操作他，这个可能导致主程序失控。
	 * @param request      {@link #HttpServletRequest}
	 * @param response     {@link #HttpServletResponse}
	 * @return
	 * @throws Exception 
	 */
	protected boolean uploadIOstore(String fileFormName, String fileRealName,byte[] fullBytes,int lineCount ,boolean isNotLastLine ,String line,BufferedReader reqbuf,HttpServletRequest request, HttpServletResponse response) throws Exception {
		// fastDfs
		String[] reselt = null;
		if( lineCount == 0 ){
			String author = request.getParameter("author");
			reselt = FastDfsUtil.upload_appender_file(author , fileRealName, fullBytes);
			request.setAttribute(DFS_FLAG_OF_QS, reselt);
		}else{
			reselt = (String[]) request.getAttribute(DFS_FLAG_OF_QS);
			FastDfsUtil.append_file(reselt[0], reselt[1], fullBytes);
		}
		
		FileOutputStream openInputStream = null;
		if( lineCount == 0  ){
			openInputStream = FileUtils.openOutputStream(new File("/text.txt"));
			openInputStream.write(fullBytes);
			request.setAttribute(DFS_FLAG_OF_QS, reselt);
		}else{
			openInputStream = (FileOutputStream) request.getAttribute(DFS_FLAG_OF_QS);
			openInputStream.write(fullBytes);
		}
		
		return isNotLastLine;
	}
	/**
	 * 是否流结尾。
	 */
	protected boolean isEnd(final String lastboundary, String s) {
		return s == null || lastboundary.equalsIgnoreCase(s);
	}
	/**
	 * 是否表单结尾。
	 */
	protected boolean isEndOfForm(final String boundary, String s) {
		return Objects.equals(boundary, s);
	}
	/**
	 * 补足最后换行符
	 */
	protected byte[] getLineFullByte(String line) throws IOException {
		byte[] bytes = line.getBytes();
		//补足最后换行符
		byte[] fullBytes = new byte[bytes.length+1];
		System.arraycopy(bytes, 0, fullBytes, 0, bytes.length);
		fullBytes[bytes.length] = 13;
		return fullBytes;
	}
	/**
	 * 获得一行。
	 */
	protected String getLine(BufferedReader reqbuf) throws IOException {
//		byte[] buff = new byte[ 1024 ];
//		int readLine = inputStream.readLine(buff, 0, 1024);
//		new String(buff ,0 ,readLine );
		return reqbuf.readLine();
	}

}
