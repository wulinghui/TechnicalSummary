/**
 * @copyright 2014
 * @version 1.0
 */

package ys.manufacture.framework.controller;

/**
 * Class Description:
 */

import java.io.InputStream;
import java.io.OutputStream;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.csource.common.MyException;

import ys.manufacture.framework.common.util.Assert;
import ys.manufacture.framework.common.util.FastDfsUtil;

@WebServlet(urlPatterns = "/fs/filedownload", displayName = "File download by fastDfs")
public class FastDfsFileDownLoadServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws javax.servlet.ServletException, java.io.IOException {
		String encoding = "GBK";
		if ( Assert.notEmpty( request.getCharacterEncoding() ) ) {
			encoding = request.getCharacterEncoding();
		}
		request.setCharacterEncoding(encoding);
		response.setContentType("text/html; charset=utf-8");

		String fnamei = request.getParameter("filename");
		String groupName = request.getParameter("groupName");


		response.setContentType("application/x-msdownload");


		response.setHeader("Content-Disposition", "attachment;filename="
				+ fnamei );
		try(InputStream buff = FastDfsUtil.downFile(groupName, fnamei) ;OutputStream output = response.getOutputStream(); ){
			
			byte[] buffer = new byte[1024];
	        int n = 0;
	        while (-1 != (n = buff.read(buffer))) {
	        	output.write(buffer, 0, n);
	        }
			
			output.flush();
		}catch (MyException e) {
			throw new RuntimeException("filedownload error", e);
		}
	}
}
