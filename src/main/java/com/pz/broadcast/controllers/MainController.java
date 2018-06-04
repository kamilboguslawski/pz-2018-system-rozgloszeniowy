package com.pz.broadcast.controllers;


import com.pz.broadcast.dtos.RoleData;
import com.pz.broadcast.dtos.UserData;
import com.pz.broadcast.logic.Registration;
import com.pz.broadcast.logic.UserUtils;
import com.pz.broadcast.requests.LoginRequest;
import com.pz.broadcast.response.LoginResponse;
import com.pz.broadcast.validators.RegisterValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;


@RestController
public class MainController {
    @Autowired
    Registration registration;

    @Autowired
    UserUtils userUtils;

    @RequestMapping(value = "/hello", method = {RequestMethod.GET, RequestMethod.POST})
    public String helloWorld() {
        return "Hello World";
    }

    @RequestMapping(value = "/", method = {RequestMethod.GET, RequestMethod.POST}, produces = "application/json")
    public String def(HttpServletRequest request, HttpServletResponse response) {
        try {
            response.sendRedirect("/home");
        } catch (Exception e) {
            return "Hello World";
        }
        return "Home";
    }

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public LoginResponse login(@RequestBody LoginRequest credentials) {
        LoginResponse response = new LoginResponse();
//        response = dbClass.login(credentials);
        return response;
    }

    @RequestMapping(value = "/logout", method = RequestMethod.GET)
    public String logout(HttpServletRequest request, HttpServletResponse response) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth != null){
            new SecurityContextLogoutHandler().logout(request, response, auth);
        }
        try {
            response.sendRedirect("/hello");
            return "redirect:/hello";
        } catch (Exception e) {
            return "fail to redirect";
        }
    }

    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public String register(@RequestBody UserData user) {
        RegisterValidator registerValidator = new RegisterValidator();
        if (!registerValidator.userValidate(user))
            return null;
        else {
            UserData savedUser = registration.registerUser(user);
            if (savedUser == null)
                return "Registration failed";
        }
        return "Registration successful";
    }

    @RequestMapping(value = "/isLogged", method = RequestMethod.GET)
    public boolean isLogged(HttpServletRequest request, HttpServletResponse response) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth == null)
            return false;
        String name = auth.getName();
        if (name != null && !name.equals("anonymousUser"))
            return true;
        return false;
    }

    @RequestMapping(value = "/getRoles", method = RequestMethod.GET)
    public List<RoleData> getRoles(HttpServletRequest request, HttpServletResponse response) {
        return userUtils.getUserRoles();
    }
}
