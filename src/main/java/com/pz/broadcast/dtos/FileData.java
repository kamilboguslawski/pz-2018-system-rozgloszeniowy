package com.pz.broadcast.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Value;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FileData {
    Long id;
    String name;
    String link;
    String fileHash;
    List<UserGroupData> groups;
}
