package com.simpleAdmin.demo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.logging.Level;
import java.util.logging.LogRecord;
//import java.util.logging.Logger;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


public class SimpleSelectEmployee {
	
	//public static Logger logger = Logger.getLogger(SimpleSelectEmployee.class.getName());
	private static Logger logger = LoggerFactory.getLogger(SimpleSelectEmployee.class);
	
	public static String url = "jdbc:postgresql://localhost:5432/mqtt";  //[PostgreSQL 14.2, compiled by Visual C++ build 1914, 64-bit]
	public static String user = "postgres";
	public static String password = "password";
	
	public static void main(String[] args) {

		Connection con = null;
		Statement st = null;
		ResultSet rs = null;

		try {
			con = DriverManager.getConnection(url, user, password);
			st = con.createStatement();
			//rs = st.executeQuery("SELECT VERSION() as version");
			rs = st.executeQuery("SELECT * from public.employee");
//			rs = st.executeQuery("SELECT * from public.\"" +"employee"+ "\" ");
			//String sql =         "select * from public.employee where uname = \""+user+"\" and upassword = \""+password+"\";";
			
			logger.debug("=====>{}", rs.toString() );
			//logger.log( Level.INFO, sql.toString() );
			if (rs.next()) {
				logger.debug("=====>{}", "["+rs.getString(1)+"]");
				logger.debug("=====>{}", "["+rs.getString(2)+"]");
				logger.debug("=====>{}", "["+rs.getString(3)+"]");
			}

		} catch (SQLException ex) {

			logger.debug( ex.getMessage(), ex);

		} finally {
			try {
				if (rs != null) {
					rs.close();
				}
				if (st != null) {
					st.close();
				}
				if (con != null) {
					con.close();
				}

			} catch (SQLException ex) {
//				
				logger.debug( ex.getMessage(), ex);
			}
		}
	}
}
