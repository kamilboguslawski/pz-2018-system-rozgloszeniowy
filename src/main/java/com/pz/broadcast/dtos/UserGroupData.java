package com.pz.broadcast.dtos;

import lombok.Value;

import java.util.List;

@Value
public class UserGroupData {
    Long id;
    String name;
    String description;
    List<UserData> users;
    List<FileData> files;
}
