package com.pz.broadcast.dtos;

import lombok.Value;

import java.util.List;

@Value
public class UserData {
    Long id;
    String login;
    String password;
    String email;
    List<RoleData> roles;
    List<UserGroupData> groups;
    List<DeviceData> devices;
}
