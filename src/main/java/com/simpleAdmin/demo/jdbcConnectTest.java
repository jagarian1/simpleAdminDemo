package com.simpleAdmin.demo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
 
public class jdbcConnectTest {
    public static void main(String[] args) throws ClassNotFoundException {
        Class.forName("org.postgresql.Driver");  
        
        String     connurl  = "jdbc:postgresql://127.0.0.1:5432/mqtt"; //PostgreSQL 14.2, compiled by Visual C++ build 1914, 64-bit
        String     user     = "postgres";
        String     password = "rkddkwl72";
 
        try (Connection connection = DriverManager.getConnection(connurl, user, password);) {
              Statement stmt = connection.createStatement();
              //ResultSet rs = stmt.executeQuery("SELECT VERSION() AS version");
              ResultSet rs = stmt.executeQuery("SELECT * FROM public.employee WHERE 1=1 ");
 
              while (rs.next()) {
//                  String version = rs.getString("version");
                  String employeeid = rs.getString("employeeid");
                  String lastname = rs.getString("lastname");
                  String firstname = rs.getString("firstname");
                  String title = rs.getString("title");
                  String reportsto = rs.getString("reportsto");
                  String birthdate = rs.getString("birthdate");
                                   
                  System.out.println(rs.getString(1));                  
                  System.out.println(rs.getString(2));                  
                  System.out.println(rs.getString(3));                  
                  System.out.println(rs.getString(4));                  
                  System.out.println(rs.getString(5));                  
                  System.out.println(rs.getString(6));                  
              }           
            rs.close();
            stmt.close();
            connection.close();
        }
        catch (SQLException e) {
            e.printStackTrace();
        }
    }
}