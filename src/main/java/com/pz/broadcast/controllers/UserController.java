package com.pz.broadcast.controllers;


import com.pz.broadcast.dtos.FileData;
import com.pz.broadcast.logic.Files;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping(value = "/user")
public class UserController {
    @Autowired
    protected Files files;

    @RequestMapping(value = "/file", method = RequestMethod.GET)
    public List<FileData> getAllFiles() {
        try {
            return files.getAllFiles();
        } catch (Exception e){
            return null;
        }
    }

    @RequestMapping(value = "/file/{id}", method = RequestMethod.GET)
    public FileData getOneFile(@PathVariable long id) {
        try {
            return files.getOneFile(id);
        } catch (Exception e){
            return null;
        }
    }

    @RequestMapping(value = "/test", method = RequestMethod.GET)
    public String test() {
        try {
            BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
            String temp = bCryptPasswordEncoder.encode("globaladmin");
            String temp2 = bCryptPasswordEncoder.encode("groupadmin");
            return temp + " <br> " + temp2;
        } catch (Exception e){
            String test = e.getMessage();
            return null;
        }
    }
}
