package com.example.Layared.Architecture.service;

import com.example.Layared.Architecture.model.User;
import com.example.Layared.Architecture.repository.UserRepository;

public class UserService {
    private UserRepository userRepository;

    public UserService(){
        this.userRepository = new UserRepository();
    }

    public User getUserById(String id){
        return userRepository.getUserById(id);
    }

    public void saveUser(User user){
        userRepository.saveUser(user);
    }

}
