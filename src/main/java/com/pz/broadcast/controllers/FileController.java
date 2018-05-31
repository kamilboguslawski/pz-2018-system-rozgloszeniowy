package com.pz.broadcast.controllers;

import com.pz.broadcast.services.file.StorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
public class FileController {

    @Autowired
    private StorageService storageService;

    @PostMapping("/uploadFile")
    public String handleFileUpload(@RequestParam("file") MultipartFile file, RedirectAttributes redirectAttributes) {
        storageService.store(file);
        redirectAttributes.addFlashAttribute(
                "message",
                String.format("File - %s - has been successfully uploaded.", file.getOriginalFilename())
        );

        return "";
    }
}
