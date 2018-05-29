package com.pz.broadcast.dtos;

import lombok.Value;

import java.util.List;

@Value
public class FileData {
    Long id;
    String name;
    String link;
    String fileHash;
    List<UserGroupData> groups;
}
