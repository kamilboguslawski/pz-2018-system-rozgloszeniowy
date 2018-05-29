package com.pz.broadcast.dtos;

import lombok.Value;

import java.util.Date;

@Value
public class LogData {
    Long id;
    String action;
    Date datetime;
    String comment;
    UserData user;
    FileData file;
}
