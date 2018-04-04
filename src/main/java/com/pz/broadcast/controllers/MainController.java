package com.pz.broadcast.controllers;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller
public class MainController {

    @RequestMapping(value = "/hello", method = RequestMethod.GET)
    @ResponseBody
    public String helloWorld() {
        return "Hello World";
    }
}
