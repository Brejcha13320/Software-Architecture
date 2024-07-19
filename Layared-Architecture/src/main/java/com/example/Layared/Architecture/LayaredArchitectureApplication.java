package com.example.Layared.Architecture;

import com.example.Layared.Architecture.controller.UserController;
import com.example.Layared.Architecture.model.User;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class LayaredArchitectureApplication {

	public static void main(String[] args) {
		SpringApplication.run(LayaredArchitectureApplication.class, args);

		UserController userController = new UserController();

		//Create a new user
		User newUser = new User("1", "John Doe", "john.doe@example.com");
		userController.saveUser(newUser);

		//Retrieve the user
		User retrievedUser = userController.getUserById("1");
		System.out.println("RetrievedUser: " + retrievedUser.getName() + ", " + retrievedUser.getEmail());
	}

}
