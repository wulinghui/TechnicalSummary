/**
 * @copyright 2014
 * @version 1.0
 */

package ys.manufacture.framework.controller;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.PrintWriter;

import javax.servlet.ServletInputStream;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.csource.fastdfs.UploadCallback;

import ys.manufacture.framework.common.util.FastDfsUtil;

/**
 * Class Description:
 */
@WebServlet(urlPatterns = "/fs/fileupload", displayName = "File upload fastDfs")
public class FastDfsFileUpLoadServlet extends HttpServlet {

	private static final long serialVersionUID = -9180492361051068968L;

	@Override
	public void doPost(HttpServletRequest request, HttpServletResponse response) {
		String author = request.getParameter("author");
		try {    
			response.setContentType("text/html;charset=UTF-8");

			String fileFormName = ""; // 上传的文件再表单中的名称

			String fileRealName = ""; // 上传文件的真实名字
			
			String contentType = request.getContentType();
			
			int pos = -1;

			int pos2 = -1; // position2
			 pos = contentType.indexOf("boundary=");
			 
			if (pos == -1) return;
				
			pos += "boundary=".length();
				
			// 得到结束分界符
			final  String lastboundary = "--" + contentType.substring(pos) + "--"; // 解析出分界符
			

			// 得到请求消息的数据输入流
			ServletInputStream inputStream = request.getInputStream();
			
			try (final BufferedReader reqbuf = new BufferedReader(
					new InputStreamReader(inputStream))) {
				
				// 设置循环标志
				
				boolean flag = true;

				while (flag) {

					String s = getLine(reqbuf);
					
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
						// 接下来，就交给Fast传输了。
						if (fileRealName.length() != 0) {
							// url :
							// /fs/uploade?file_size=10000020&file_size=122222222
							// file_size和name='file' 对应。
							Long file_siz = Long.valueOf(request
									.getParameter(fileFormName + "_size"));

							String[] upload = FastDfsUtil.upload(author, fileRealName,
									new UploadCallback(){
								
								
								//这个api的回调接口，需要注意的地方:
								// 1. 必须设置fileSiz,根据他来管理流
								// 2. fileSiz的大小必须和out.write写入的长度必须一样， 不然:Read timed out 或者 nullException
								// 3. fileSize > count nullException    fileSize < count -- Read timed out 
								  public int send(OutputStream out) throws IOException {
									  long fileSize = file_siz;  //size of the uploaded file
									  byte[] bytes = null;
									  int count = 0;
									  do{      
										  String readLine = reqbuf.readLine();
										  
//										  if( readLine == null  || lastboundary.equals(readLine) ) break;
										  if( isEnd(lastboundary, readLine)  ) break;
										  
										  bytes = readLine.getBytes();   
										  out.write(  bytes );
										  
										  count += bytes.length;
										  fileSize -= (bytes.length+1); 
										  
										  if( fileSize > 0 ){
											  out.write( 13 );    //换行符号。
											  count++;
											  
										  // 最后一行是换行
										  }else if( fileSize == 0 ){
											  out.write( 13 );    //换行符号。
											  count++; 
											  break;
											  
										  }else{
											  break;
										  }
									  }while(true);  
									  // check
									  if( count != fileSize){
										  
									  }
									  return 0;        
								  }

							}, file_siz);
						}
						// 继续循环，继续上传。
					}
				}
			}
			// TODO 展示页面。
			try(PrintWriter out = response.getWriter()){
				out.print("ok");
				out.flush();
			}
			
		} catch (Exception e) {
			e.printStackTrace();     
			throw new RuntimeException("fileupload error", e);
		}
	}

	protected boolean isEnd(final String lastboundary, String s) {
		return s == null || lastboundary.equalsIgnoreCase(s);
	}

	protected String getLine(BufferedReader reqbuf) throws IOException {
//		byte[] buff = new byte[ 1024 ];
//		int readLine = inputStream.readLine(buff, 0, 1024);
//		new String(buff ,0 ,readLine );
		return reqbuf.readLine();
	}


}
