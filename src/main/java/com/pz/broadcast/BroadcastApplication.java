package com.pz.broadcast;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.ImportResource;

@SpringBootApplication(exclude = {SecurityAutoConfiguration.class})
@ImportResource("classpath:broadcast-database-data.xml")
@ComponentScan({
        "com.pz.broadcast.config",
        "com.pz.broadcast.controllers",
        "com.pz.broadcast.logic",
        "com.pz.broadcast.interceptors"
})
public class BroadcastApplication {
    public static void main(String[] args) {
        SpringApplication.run(BroadcastApplication.class, args);
    }
}
