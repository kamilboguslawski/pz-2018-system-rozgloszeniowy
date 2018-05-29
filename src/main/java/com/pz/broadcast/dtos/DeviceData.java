package com.pz.broadcast.dtos;

import lombok.Value;

@Value
public class DeviceData {
    Long id;
    String name;
    String pushToken;
    String IPAddress;
    UserData user;
}
