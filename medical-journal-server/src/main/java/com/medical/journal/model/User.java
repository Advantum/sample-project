package com.medical.journal.model;
import javax.validation.constraints.NotNull;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 * The User model
 * @author linux-dev
 *
 */
@Document(collection="user")
public class User {
	@Id
    private String id;
    @NotNull
    private String email;
    @NotNull
    //@JsonIgnore
    private String password;
    private String firstname;
    private String lastname;
    private String role;
    private String[] subscriptions;


    public User() {
    }

    public User(String email, String password, String firstname, String lastname, String role, String[] subscriptions) {
        this.id = email;
    	this.email = email;
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastname;
        this.role = role;
        this.subscriptions = subscriptions;
    }


    public String getId() {
        return id;
    }

    public void setId(String id) {
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
    
    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
    
    public void setSubscriptions(String[] subscriptions) {
    	this.subscriptions = subscriptions;
    }
    
    public String[] getSubscriptions(){
    	return this.subscriptions;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", firstname='" + firstname + '\'' +
                ", role='" + role + '\'' +
                '}';
    }
}