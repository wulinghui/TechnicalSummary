/**
 * @copyright 2014
 * @version 1.0
 */

package ys.manufacture.framework.controller;

import java.io.BufferedReader;
import java.io.ByteArrayInputStream;
import java.io.DataInputStream;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.io.StringReader;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.io.output.ByteArrayOutputStream;

import ys.manufacture.framework.common.util.FastDfsUtil;

/**
 * Class Description:
 */
@WebServlet(urlPatterns = "/fs/fileupload", displayName = "File upload fastDfs")
public class FastDfsFileUpLoadServlet extends HttpServlet {

	private static final long serialVersionUID = -9180492361051068968L;

	@Override
	public void doPost(HttpServletRequest request, HttpServletResponse response) {

		try {
			response.setContentType("text/html;charset=UTF-8");

			final int NONE = 0; // 状态码，表示没有特殊操作

			final int DATAHEADER = 1; // 表示下一行要读到报头信息

			final int FILEDATA = 2; // 表示下面要读的是上传文件和二进制数据

			final int FIELDDATA = 3; // 表示下面要读到表单域的文本值
			// 请求消息实体的总长度(请求消息中除消息头之外的数据长度)

			int totalbytes = request.getContentLength();

			// 容纳请求消息实体的字节数组

//			byte[] dataOrigin = new byte[totalbytes];

			// 对于post多个文件的表单，b作为原始数据的副本提供提取文件数据的操作

			byte[] b = new byte[totalbytes];

			// 请求消息类型

			String contentType = request.getContentType();

			String fieldname = ""; // 表单域的名称

			String fieldvalue = ""; // 表单域的值

			String fileFormName = ""; // 上传的文件再表单中的名称

			String fileRealName = ""; // 上传文件的真实名字

			String boundary = ""; // 分界符字符串

			String lastboundary = ""; // 结束分界符字符串

			int fileSize = 0; // 文件长度

			// 容纳表单域的名称/值的哈希表

			Map<String, String> formfieldsTable = new HashMap<>();

			// 容纳文件域的名称/文件名的哈希表

			Map<String, FileItem> filenameTable = new HashMap<>();

			// 在消息头类型中找到分界符的定义

			int pos = contentType.indexOf("boundary=");

			int pos2; // position2

			if (pos != -1) {

				pos += "boundary=".length();

				boundary = "--" + contentType.substring(pos); // 解析出分界符

				lastboundary = boundary + "--"; // 得到结束分界符

			}

			int state = NONE; // 起始状态为NONE

			// 得到请求消息的数据输入流
//			try (DataInputStream in = new DataInputStream(
//					request.getInputStream())) {
//				in.readFully(dataOrigin); // 根据长度，将消息实体的内容读入字节数组dataOrigin中
//			}
//			String reqcontent = new String(dataOrigin); // 从字节数组中得到表示实体的字符串
//			BufferedReader reqbuf1 = new BufferedReader(new InputStreamReader(request.getInputStream()));
			// 从字符串中得到输出缓冲流
//			try (BufferedReader reqbuf = new BufferedReader(new StringReader(
//					reqcontent))) {
			
			
			try (BufferedReader reqbuf = new BufferedReader(new InputStreamReader(request.getInputStream()))) {

				// 设置循环标志

				boolean flag = true;

				// int i = 0;

				while (flag == true) {

					String s = reqbuf.readLine();

					if (s == lastboundary || s == null)

						break;

					switch (state) {

					case NONE:

						if (s.startsWith(boundary)) {

							// 如果读到分界符，则表示下一行一个头信息

							state = DATAHEADER;

							// i += 1;

						}

						break;

					case DATAHEADER:

						pos = s.indexOf("filename=");

						// 先判断出这是一个文本表单域的头信息，还是一个上传文件的头信息

						if (pos == -1) {

							// 如果是文本表单域的头信息，解析出表单域的名称

							pos = s.indexOf("name=");

							pos += "name=".length() + 1; // 1表示后面的"的占位

							s = s.substring(pos);

							int l = s.length();

							s = s.substring(0, l - 1); // 应该是"

							fieldname = s; // 表单域的名称放入fieldname


							state = FIELDDATA; // 设置状态码，准备读取表单域的值

						} else {

							// 如果是文件数据的头，先存储这一行，用于在字节数组中定位

							String temp = s;

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



							if (fileRealName.length() != 0) { // 确定有文件被上传

								// 下面这一部分从字节数组中取出文件的数据

								b = dataOrigin; // 复制原始数据以便提取文件

								pos = byteIndexOf(b, temp, 0); // 定位行

								// 定位下一行，2 表示一个回车和一个换行占两个字节

								b = subBytes(b, pos + temp.getBytes().length
										+ 2,

								b.length);

								// 再读一行信息，是这一部分数据的Content-type

								s = reqbuf.readLine();
								FileItem fileItem = new FileItem();
								try (ByteArrayOutputStream fileout = new ByteArrayOutputStream()) {

									// 字节数组再往下一行，4表示两回车换行占4个字节，本行的回车换行2个字节，Content-type的下

									// 一行是回车换行表示的空行，占2个字节

									// 得到文件数据的起始位置

									b = subBytes(b, s.getBytes().length + 4,
											b.length);

									pos = byteIndexOf(b, boundary, 0); // 定位文件数据的结尾

									b = subBytes(b, 0, pos - 1); // 取得文件数据

									fileout.write(b, 0, b.length - 1); // 将文件数据存盘

									byte[] byteArray = fileout.toByteArray();

									fileItem.setContent(byteArray);
									
									
//									String author = request.getParameter("author"); // 从url里面获得: /fs/fileupload?author=admin
//
//									String[] upload = FastDfsUtil.upload(author, fileRealName,
//											byteArray); // 利用FastUtil上传到fast服务器上面去。
									//用于下载的2个标识。
//									out.print("group_name=" + upload[0] + " remoteFileName=" +  upload[1]);
								}

								fileSize = b.length - 1; // 文件长度存入fileSize

								
								
								fileItem.setFile_real_name(fileRealName);
								
								filenameTable.put(fileFormName, fileItem);

								state = FILEDATA;

							}

						}

						break;

					case FIELDDATA:

						// 读取表单域的值

						s = reqbuf.readLine();

						fieldvalue = s; // 存入fieldvalue


						formfieldsTable.put(fieldname, fieldvalue);

						state = NONE;

						break;

					case FILEDATA:

						// 如果是文件数据不进行分析，直接读过去

						while ((!s.startsWith(boundary))

						&& (!s.startsWith(lastboundary))) {

							s = reqbuf.readLine();

							if (s.startsWith(boundary)) {

								state = DATAHEADER;

							} else {

								break;

							}

						}

						break;

					}
				}
			}
			// 下移
			handler(filenameTable,formfieldsTable,request,response);
			
		}catch (Exception e) {
			throw new RuntimeException("fileupload error", e);
		}

	}

	/**子类可以重写，
	 * <p>
	 * 注意事项: 
	 * <ol>
	 * 	<li> 无 </li>
	 * </ol>
	 * @param filenameTable 上传文件的内容
	 * @param formfieldsTable 表单其他的属性
	 * @param request 
	 * @param response
	 * @throws Exception
	 */
	protected void handler(Map<String, FileItem> filenameTable,
			Map<String, String> formfieldsTable, HttpServletRequest request , HttpServletResponse response) throws Exception {
		PrintWriter out = response.getWriter();
		
		String author = request.getParameter("author"); // 从url里面获得: /fs/fileupload?author=admin
		
		for (FileItem element : filenameTable.values()) {
			// 利用FastUtil上传到fast服务器上面去。
			String[] upload = FastDfsUtil.upload(author, element.getFile_real_name(),
					element.getContent()); 
			//用于下载的2个标识。
			out.print("group_name=" + upload[0] + " remoteFileName=" +  upload[1]);
		}
		out.flush();
	}

	private static int byteIndexOf(byte[] b, String s, int start) {

		return byteIndexOf(b, s.getBytes(), start);

	}

	private static int byteIndexOf(byte[] b, byte[] s, int start) {

		int i;

		if (s.length == 0) {

			return 0;

		}

		int max = b.length - s.length;

		if (max < 0) {

			return -1;

		}

		if (start > max) {

			return -1;

		}

		if (start < 0) {

			start = 0;

		}

		// 在b中找到s的第一个元素

		search: for (i = start; i <= max; i++) {

			if (b[i] == s[0]) {

				// 找到了s中的第一个元素后，比较剩余的部分是否相等

				int k = 1;

				while (k < s.length) {

					if (b[k + i] != s[k]) {

						continue search;

					}

					k++;

				}

				return i;

			}

		}

		return -1;

	}

	private static byte[] subBytes(byte[] b, int from, int end) {

		byte[] result = new byte[end - from];

		System.arraycopy(b, from, result, 0, end - from);

		return result;

	}
	protected class FileItem {
		private String file_real_name;
		private byte[] content;
		public String getFile_real_name() {
			return file_real_name;
		}
		public void setFile_real_name(String file_real_name) {
			this.file_real_name = file_real_name;
		}
		public byte[] getContent() {
			return content;
		}
		public void setContent(byte[] content) {
			this.content = content;
		}
	}
}
