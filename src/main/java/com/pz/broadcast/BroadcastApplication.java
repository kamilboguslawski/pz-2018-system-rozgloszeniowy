package com.pz.broadcast;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.annotation.ImportResource;

@SpringBootApplication()
@ImportResource("classpath:broadcast-database-data.xml")
public class BroadcastApplication {
	public static void main(String[] args) {
		SpringApplication.run(BroadcastApplication.class, args);
	}
}
