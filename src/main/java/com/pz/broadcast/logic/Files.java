package com.pz.broadcast.logic;

import com.pz.broadcast.dtos.FileData;
import com.pz.broadcast.entities.File;
import com.pz.broadcast.entities.User;
import com.pz.broadcast.entities.UserGroup;
import com.pz.broadcast.repositories.FileRepository;
import com.pz.broadcast.repositories.UserGroupRepository;
import com.pz.broadcast.repositories.UserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class Files {
    @Autowired
    protected FileRepository fileRepository;

    @Autowired
    protected UserGroupRepository userGroupRepository;

    @Autowired
    protected UserRepository userRepository;

    @Autowired
    ModelMapper modelMapper;

    public List<FileData> getAllFiles(){
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String name = auth.getName();
        User user = userRepository.findUserByEmail(name);
        Collection<UserGroup> userGroups =  userGroupRepository.findAllByUsersContains(user);
        if (userGroups == null)
            return null;
        Collection<File> fileCollection = fileRepository.findAllByGroupsContains(userGroups);

        if (fileCollection == null || fileCollection.size() < 1)
            return null;
        List<FileData> listFile = fileCollection.stream().map(item -> modelMapper.map(item, FileData.class)).collect(Collectors.toList());
        return listFile;
    }

    public FileData getOneFile(long id){
        File file = fileRepository.findById(id);
        if (file == null)
            return null;
        FileData fileData = modelMapper.map(file, FileData.class);
        return fileData;
    }
}
