package com.pz.broadcast.controllers;


import com.pz.broadcast.dtos.UserData;
import com.pz.broadcast.entities.User;
import com.pz.broadcast.repositories.UserRepository;
import com.pz.broadcast.requests.LoginRequest;
import com.pz.broadcast.response.LoginResponse;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;


@RestController
@RequestMapping(value = "/user")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ModelMapper modelMapper;

    @RequestMapping(value = "/register", method = RequestMethod.POST)
    @ResponseBody
    public UserData register(@RequestBody UserData user) {
        //UserData response;
//        response = dbClass.register(user);
        return user;
    }

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    @ResponseBody
    public LoginResponse login(@RequestBody LoginRequest credentials) {
        LoginResponse response = new LoginResponse();
//        response = dbClass.login(credentials);
        return response;
    }

    @RequestMapping(value = "/logout", method = RequestMethod.GET)
    @ResponseBody
    public UserData logout() {
//        int userId = session.getUserId();
//        response = dbClass.logout(userId);
        try {
            User user = userRepository.findUserByEmail("globaladmin@broadcast.com");
            UserData userData = modelMapper.map(user, UserData.class);
            Collection<User> temp = userRepository.findBy();
            List<UserData> userList = temp.stream().map(item -> modelMapper.map(item, UserData.class)).collect(Collectors.toList());
            return userData;
        } catch (Exception e){
            String test = e.getMessage();
            return null;
        }
    }
}
