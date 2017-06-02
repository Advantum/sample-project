package com.medical.journal.controller;

import com.medical.journal.model.User;
import com.medical.journal.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@org.springframework.web.bind.annotation.RestController
@RequestMapping("api")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @RequestMapping(
            value = "/users",
            method = RequestMethod.GET)
    public ResponseEntity<?> getAllUsers() {
        return new ResponseEntity<>(userService.getUsers(), HttpStatus.OK);
    }

    @RequestMapping(
    		value = "/registration",
    		method = RequestMethod.POST)
    public User createUser(@RequestBody User user){
    	userService.createUser(user);
    	return user;
    }

//    @RequestMapping(
//            value = "/user/{email}",
//            method = RequestMethod.GET)
//    public ResponseEntity<?> getUserByEmail(@PathVariable String email) {
//        return new ResponseEntity<>(userService.findUserByEmail(email), HttpStatus.OK);
//    }

}
