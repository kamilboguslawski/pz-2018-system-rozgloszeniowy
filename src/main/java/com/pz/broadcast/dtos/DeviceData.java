package com.pz.broadcast.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Value;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DeviceData {
    Long id;
    String name;
    String pushToken;
    String IPAddress;
    UserData user;
}
