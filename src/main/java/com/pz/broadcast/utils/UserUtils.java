package com.pz.broadcast.utils;

import com.pz.broadcast.dtos.RoleData;
import com.pz.broadcast.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class UserUtils {

    private final UserRepository userRepository;

    @Autowired
    public UserUtils(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


    public List<RoleData> getUserRoles(){
        final Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        final String email = auth.getName();
        final List<Map<String,Object>> userList =  userRepository.findUserRoles(email);

        if (userList == null)
            return null;

        List<RoleData> roleDataList = new ArrayList<>();
        for (Map<String,Object> item : userList) {
            RoleData role = new RoleData();
            role.setName(item.get("role").toString());
            role.setDescription(item.get("description").toString());
            roleDataList.add(role);
        }

        return roleDataList;
    }
}
