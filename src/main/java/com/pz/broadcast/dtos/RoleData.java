package com.pz.broadcast.dtos;

import lombok.Value;

import java.util.List;

@Value
public class RoleData {
    Long id;
    String name;
    String description;
    List<UserData> users;
}
