package com.pz.broadcast.controllers;


import com.pz.broadcast.dtos.FileData;
import com.pz.broadcast.services.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping(value = "/user")
public class UserController {

    private final FileService fileService;

    @Autowired
    public UserController(FileService fileService) {
        this.fileService = fileService;
    }


    @RequestMapping(value = "/file", method = RequestMethod.GET)
    public List<FileData> getFiles() {
        try {
            return fileService.getAllFiles();
        } catch (Exception e) {
            return null;
        }
    }

    @RequestMapping(value = "/file/{id}", method = RequestMethod.GET)
    public FileData getFile(@PathVariable long id) {
        try {
            return fileService.getOneFile(id);
        } catch (Exception e) {
            return null;
        }
    }

}
