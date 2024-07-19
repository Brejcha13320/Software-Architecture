package com.example.Layared.Architecture.controller;

import com.example.Layared.Architecture.model.User;
import com.example.Layared.Architecture.service.UserService;

public class UserController {

    private UserService userService;

    public UserController(){
        this.userService = new UserService();
    }

    public User getUserById(String id){
        return userService.getUserById(id);
    }

    public void saveUser(User user){
        userService.saveUser(user);
    }

}
