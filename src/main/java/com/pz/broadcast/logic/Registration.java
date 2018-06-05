package com.pz.broadcast.logic;

import com.pz.broadcast.dtos.UserData;
import com.pz.broadcast.entities.Role;
import com.pz.broadcast.entities.User;
import com.pz.broadcast.repositories.RoleRepository;
import com.pz.broadcast.repositories.UserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class Registration {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final ModelMapper modelMapper;


    @Autowired
    public Registration(UserRepository userRepository, RoleRepository roleRepository, ModelMapper modelMapper) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.modelMapper = modelMapper;
    }

    public UserData registerUser(UserData user) {
        try {
            User temp = userRepository.findUserByEmail(user.getEmail());
            if (temp == null) {
                User userEntity = modelMapper.map(user, User.class);
                if (userEntity != null) {
                    Role userRole = roleRepository.findFirstByName("USER");
                    List<Role> listRole = new ArrayList<>();
                    listRole.add(userRole);
                    userEntity.setRoles(listRole);
                    userEntity = userRepository.save(userEntity);
                    user = modelMapper.map(userEntity, UserData.class);
                } else {
                    user = null;
                }
            } else {
                user = null;
            }
            return user;
        } catch (Exception e) {
            return null;
        }
    }
}
