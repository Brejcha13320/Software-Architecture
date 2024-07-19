package com.example.Client.Server.Architecture;

import com.example.Client.Server.Architecture.client.Client;
import com.example.Client.Server.Architecture.server.Server;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.io.IOException;

@SpringBootApplication
public class ClientServerArchitectureApplication {

	public static void main(String[] args) {
		SpringApplication.run(ClientServerArchitectureApplication.class, args);

		//Start the server
		new Thread(() -> {
			try {
				Server server = new Server();
				server.start(6666);
			} catch (IOException e){
				e.printStackTrace();
			}
		}).start();

		//Give the server a moment to start
		try{
			Thread.sleep(1000);
		} catch (InterruptedException e){
			e.printStackTrace();
		}

		//Start the client
		Client client = new Client();
		try{
			client.startConnection("127.0.0.1", 6666);
			String response = client.sendMessage("hello server");
			System.out.println("Server response: " + response);

			response = client.sendMessage("bye");
			System.out.println("Server response: " + response);

			client.stopConnection();
		} catch (IOException e){
			e.printStackTrace();
		}

	}

}
