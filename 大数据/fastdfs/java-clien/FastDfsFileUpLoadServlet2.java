/**
 * @copyright 2014
 * @version 1.0
 */

package ys.manufacture.framework.controller;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;

import javax.servlet.ServletContext;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;

import org.csource.fastdfs.UploadStream;

import ys.manufacture.framework.common.util.FastDfsUtil;

/**
 * Class Description:
 */
@WebServlet(urlPatterns = "/fs1/fileupload", displayName = "File upload fastDfs")
@MultipartConfig
public class FastDfsFileUpLoadServlet1 extends HttpServlet {

	private static final long serialVersionUID = -9180492361051068968L;

	@Override
	public void doPost(HttpServletRequest request, HttpServletResponse response) {
		String author = request.getParameter("author");
		// url: http://127.0.0.1:3509/cmes/fs1/fileupload?author=admin
		try {
			Part part=request.getPart("file");
			
			String name = part.getName();
			System.out.println("name="+name);
			long size = part.getSize();
			System.out.println("size="+size);
			InputStream inputStream = part.getInputStream();
			System.out.println("inputStream="+inputStream);
			String[] upload = FastDfsUtil.upload(author,name, new UploadStream(inputStream,size),size);
			System.out.println( "0:"+ upload[0]+"1:"+ upload[1]); 
			
			Object attribute = this.getServletContext().getAttribute(
                    ServletContext.TEMPDIR);
			System.out.println("attribute="+attribute);    
		} catch (Exception e1) {
			e1.printStackTrace();
		}
	}  

}
