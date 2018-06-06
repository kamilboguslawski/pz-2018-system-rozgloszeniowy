package com.pz.broadcast.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class ReactController {

    @GetMapping("/**{path:(?!.*.js|.*.css|.*.jpg).*$}**")
    public String react() {
        return "index";
    }

}
