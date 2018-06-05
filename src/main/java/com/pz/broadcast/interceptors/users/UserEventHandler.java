package com.pz.broadcast.interceptors.users;

import com.pz.broadcast.entities.User;
import org.springframework.data.rest.core.annotation.HandleBeforeCreate;
import org.springframework.data.rest.core.annotation.HandleBeforeSave;
import org.springframework.data.rest.core.annotation.RepositoryEventHandler;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

@Component
@RepositoryEventHandler(User.class)
public class UserEventHandler {

    private final BCryptPasswordEncoder bCryptPasswordEncoder;


    public UserEventHandler() {
        this.bCryptPasswordEncoder = new BCryptPasswordEncoder();
    }

    @HandleBeforeCreate
    public void handleUserCreate(User user) {
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
    }

    @HandleBeforeSave
    public void handleUserUpdate(User user) {
        if (user.getPassword() != null && !user.getPassword().equals("")) {
            user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        }
    }
}
