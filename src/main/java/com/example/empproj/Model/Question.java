package com.example.empproj.Model;

import org.springframework.data.annotation.Id;

public class Question {

   @Id
    private String id;
    private String idx;
    private String username;

     
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getIdx() {
    	return idx;
    }
    public void getIdx1(String idx) {
    	this.idx=idx;
    }
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
