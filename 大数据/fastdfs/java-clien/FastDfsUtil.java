package ys.manufacture.framework.common.util;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;

import org.csource.common.MyException;
import org.csource.common.NameValuePair;
import org.csource.fastdfs.ClientGlobal;
import org.csource.fastdfs.StorageClient;
import org.csource.fastdfs.TrackerClient;
import org.csource.fastdfs.TrackerServer;
import org.csource.fastdfs.UploadCallback;

import com.wk.logging.Log;
import com.wk.logging.LogFactory;

public class FastDfsUtil {
	private static final Log logger = LogFactory.getLog();
	
	static {
		try {
			ClientGlobal.initByTrackers(CfgTool.getProjectPropterty("fastDfs.trackerServer"));
//			String filePath = new ClassPathResource("fdfs_client.conf").getFile().getAbsolutePath();;
//			ClientGlobal.init(filePath);
		} catch (Exception e) {
			logger.error("FastDFS Client Init Fail!",e);
		}
	}
	
	private FastDfsUtil(){}
	/**上传文件。
	 * <p>
	 * 注意事项: 
	 * <ol>
	 * 	<li> name的不带后缀的。</li>
	 *  <li> 文件不可修改 </li>
	 * </ol>
	 * @param author 上传的作者
	 * @param name   文件名，带后缀
	 * @param content 内容
     * @return 2 elements string array if success:<br>
     * <ul><li>results[0]: the group name to store the file</li></ul>
     * <ul><li>results[1]: the new created filename</li></ul>
     * return null if fail
	 * @throws IOException
	 * @throws MyException
	 */
	public static String[] upload(String author ,String name , byte[] content  ) throws IOException, MyException {
		logger.info("File Name: " + name + "File Length:" + content.length);
		String ext = StringUtil.lastPart(name);
		NameValuePair[] meta_list = new NameValuePair[2];
		meta_list[0] = new NameValuePair("author",  author );
		meta_list[1] = new NameValuePair("fileName", name);   
		
		long startTime = System.currentTimeMillis();
		String[] uploadResults = null;
		StorageClient storageClient=null;
		storageClient = getTrackerClient();
		
		uploadResults = storageClient.upload_file( content , ext , meta_list);
		
		
		logger.info("upload_file time used:" + (System.currentTimeMillis() - startTime) + " ms");
		//校验
		Assert.assertNotEmpty(uploadResults, "upload file fail, error code:"+ storageClient.getErrorCode());
		
		String groupName = uploadResults[0];
		String remoteFileName = uploadResults[1];

		logger.info("upload file successfully!!!" + "group_name:" + groupName + ", remoteFileName:" + " " + remoteFileName);
		return uploadResults;
	}
	
	/**
	 * <p>
	 * 注意事项: 
	 * <ol>
	 * 	<li>一定要看<b>See Also: </b>下相关链接。</li>
	 * </ol>
	 * @see #UploadCallback
	 * @see #upload(String, String, byte[])
	 * @param author
	 * @param name
	 * @param us
	 * @param fileLength
	 * @return
	 * @throws IOException
	 * @throws MyException
	 */
	public static String[] upload(String author ,String name , UploadCallback  us, long fileLength ) throws IOException, MyException {
		logger.info("author:"+author+"File Name: " + name + "File Length:" + fileLength);
		String ext = StringUtil.lastPart(name); 
		NameValuePair[] meta_list = new NameValuePair[3];
		meta_list[0] = new NameValuePair("author",  author );
		meta_list[1] = new NameValuePair("fileName", name);   
		meta_list[2] = new NameValuePair("fileLength", String.valueOf(fileLength));
		
		long startTime = System.currentTimeMillis();
		String[] uploadResults = new String[0];
		StorageClient storageClient=null;
		storageClient = getTrackerClient();
		
		uploadResults = storageClient.upload_file(null, fileLength, us, ext, meta_list);

		logger.info("upload_file time used:" + (System.currentTimeMillis() - startTime) + " ms");
		//校验
		Assert.assertNotEmpty(uploadResults, "upload file fail, error code:"+ storageClient.getErrorCode());
		
		String groupName = uploadResults[0];
		String remoteFileName = uploadResults[1];

		logger.info("upload file successfully!!!" + "group_name:" + groupName + ", remoteFileName:" + " " + remoteFileName);
		return uploadResults;
	}
	/**往可以追加的文件里面追加byte[]内容
	 * <p>
	 * 注意事项: 
	 * <ol>
	 * 	<li>一定要看<b>See Also: </b>下相关链接。</li>
	 *  <li>可以追加的文件</li>
	 * </ol>
	 * @see org.csource.fastdfs.StorageClient#append_file(String, String, byte[])
	 * @param group_name
	 * @param appender_filename
	 * @param file_buff1
	 * @return
	 * @throws IOException
	 * @throws MyException
	 */
	public static int append_file(String group_name, String appender_filename,
			byte[] file_buff1) throws IOException, MyException {
		StorageClient storageClient = null;
		storageClient = getTrackerClient();
		return storageClient.append_file(group_name, appender_filename,
				file_buff1);
	}
	/** 和upload一样，唯一区别是，该文件可写。
	 * <p>
	 * 注意事项: 
	 * <ol>
	 * 	<li>一定要看<b>See Also: </b>下相关链接。</li>
	 *  <li>该文件可写。</li>
	 * </ol>
	 * @see #upload(String, String, byte[])
	 * @param author
	 * @param name
	 * @param content
	 * @return
	 * @throws IOException
	 * @throws MyException
	 */
	public static String[] upload_appender_file(String author , String name , byte[] content) throws IOException, MyException {

		logger.info("File Name: " + name + "File Length:" + content.length);
		String ext = StringUtil.lastPart(name);
		NameValuePair[] meta_list = new NameValuePair[2];
		meta_list[0] = new NameValuePair("author",  author );
		meta_list[1] = new NameValuePair("fileName", name);   
		long startTime = System.currentTimeMillis();
		String[] uploadResults = null;
		StorageClient storageClient=null;
		storageClient = getTrackerClient();
		
		uploadResults = storageClient.upload_appender_file( content , ext , meta_list);
		
		logger.info("upload_file time used:" + (System.currentTimeMillis() - startTime) + " ms");
		//校验
		Assert.assertNotEmpty(uploadResults, "upload file fail, error code:"+ storageClient.getErrorCode());
		
		String groupName = uploadResults[0];
		String remoteFileName = uploadResults[1];

		logger.info("upload file successfully!!!" + "group_name:" + groupName + ", remoteFileName:" + " " + remoteFileName);
		return uploadResults;
	}

	/**下载文件
	 * <p>
	 * 注意事项: 
	 * <ol>
	 * 	<li> 注意关闭流 </li>
	 * </ol>
	 * @param groupName  组名
	 * @param remoteFileName 文件名
	 * @return io流。
	 * @throws IOException
	 * @throws MyException
	 */
	public static InputStream downFile(String groupName, String remoteFileName) throws IOException, MyException {
			StorageClient storageClient = getTrackerClient();
			byte[] fileByte = storageClient.download_file(groupName, remoteFileName);
			InputStream ins = new ByteArrayInputStream(fileByte);
			return ins;
	} 
	

	private static StorageClient getTrackerClient() throws IOException {
		TrackerServer trackerServer = getTrackerServer();
		StorageClient storageClient = new StorageClient(trackerServer, null);
		return  storageClient;
	}
	//加锁 ， 加pool的操作。
	private static synchronized TrackerServer getTrackerServer() throws IOException {
		TrackerClient trackerClient = new TrackerClient();
		TrackerServer trackerServer = trackerClient.getConnection();
		return  trackerServer;
//		return  POOL.borrowObject();
	}
//	// 默认5的活动时间。
//	private final static ObjectPool<PoolableStorageDFS> POOL = 
//			new FixedObjectPool<>("fastDfsUtil",new PoolableStorageDFSCreator(),5);
	
	
	
	
	/*
	//获得文件信息
	public static FileInfo getFileInfo(String groupName, String remoteFileName) throws IOException, MyException {
		StorageClient storageClient = getTrackerClient();
		return storageClient.get_file_info(groupName, remoteFileName);
	}
	// 删除文件
	public static int deleteFile(String groupName, String remoteFileName)
			throws Exception {
		StorageClient storageClient = getTrackerClient();
		int i = storageClient.delete_file(groupName, remoteFileName);
		logger.info("delete file successfully!!!" + i);
		return i;
	}
    
    // 获得某一组的连接
	public static StorageServer[] getStoreStorages(String groupName)
			throws IOException {
		TrackerClient trackerClient = new TrackerClient();
		TrackerServer trackerServer = trackerClient.getConnection();
		return trackerClient.getStoreStorages(trackerServer, groupName);
	}
	
	// 获得所有服务器文件的信息，正常是相同的。
	public static ServerInfo[] getFetchStorages(String groupName,
												String remoteFileName) throws IOException {
		TrackerClient trackerClient = new TrackerClient();
		TrackerServer trackerServer = trackerClient.getConnection();
		return trackerClient.getFetchStorages(trackerServer, groupName, remoteFileName);
	}
    // 获得访问的url
	public static String getTrackerUrl() throws IOException {
		return "http://"+getTrackerServer().getInetSocketAddress().getHostString()+":"+ClientGlobal.getG_tracker_http_port()+"/";
	}
	 */
	
	/* public static void main(String[] args) throws Exception {
		
//		InputStream inputStream = FileUtils.openInputStream(new File("C:\\Users\\Administrator\\Desktop\\test.txt"));
//		StorageClient storageClient = getTrackerClient();
//		NameValuePair[] meta_list = new NameValuePair[0];
//		int fileLength = 0;
//		byte[] file_buff = new byte[10];
//		 
//		meta_list[0] = new NameValuePair("author",  "admin" );
//		meta_list[1] = new NameValuePair("fileName", "test.txt");   
//		String[] upload_appender_file = null;
//        while (-1 != (fileLength = inputStream.read(file_buff))) {
//        	byte[] file_buff1 = new byte[fileLength];
//        	System.arraycopy(file_buff, 0, file_buff1, 0, fileLength);
//        	if( upload_appender_file == null ){
//        		upload_appender_file = storageClient.upload_appender_file(file_buff1 , "txt", meta_list);
//        	}else{
//        		int append_file = storageClient.append_file(upload_appender_file[0], upload_appender_file[1], file_buff1);
//        		System.out.println("append_file="+append_file); 
//        	}
//        	printGropAndName(upload_appender_file[0], upload_appender_file[1]);
//        }
		
		// 下载
//		System.out.println("=========================");     
//		String groupName =  "group1";//upload_appender_file[0];
//		String remoteFileName = "M00/00/00/rBHPUl0BzSaEIicrAAAAAES3UEc01.html";// upload_appender_file[1];
//		printGropAndName(groupName, remoteFileName);
//		InputStream downFile = downFile(groupName, remoteFileName);
//		byte[] byteArray = IOUtils.toByteArray(downFile);
//		System.out.println( new String(byteArray ) );
//		System.out.println("=========================");
		
		
		// io-upload
//		long file_siz = 15;        
//		InputStream inputStream = FileUtils.openInputStream(new File("C:\\Users\\Administrator\\Desktop\\test.txt"));
//		String[] upload = FastDfsUtil.upload("admin", "test.txt",
//				new UploadStream(inputStream , file_siz ),
//				file_siz); 
//		System.out.println("======================\n");
//		System.out.println("group_name=" + upload[0] + " remoteFileName=" +  upload[1]);
	}

	
	protected static void printGropAndName(String groupName,
			String remoteFileName) {
		System.out.println("groupName="+groupName+"remoteFileName="+remoteFileName);
	}
	 */
}