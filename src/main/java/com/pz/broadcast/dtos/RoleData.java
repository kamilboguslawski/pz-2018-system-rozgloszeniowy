package com.pz.broadcast.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Value;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RoleData {
    public RoleData(String name) {
        this.name = name;
    }

    Long id;
    String name;
    String description;
    List<UserData> users;
}


