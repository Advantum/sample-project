package com.medical.journal.model;

import javax.validation.constraints.NotNull;

public class User {

    private int id;
    @NotNull
    private String email;
    @NotNull
    private String password;
    private String firstname;
    private String lastname;


    public User() {
    }

    public User(int id, String email, String password, String firstname, String lastname) {
        this.id = id;
    	this.email = email;
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastname;
    }


    public long getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", firstname='" + firstname + '\'' +
                '}';
    }
}