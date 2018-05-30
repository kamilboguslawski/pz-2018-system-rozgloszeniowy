package com.pz.broadcast.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Value;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserData {
    Long id;
    String login;
    String password;
    String email;
    List<RoleData> roles;
    List<UserGroupData> groups;
    List<DeviceData> devices;
}


