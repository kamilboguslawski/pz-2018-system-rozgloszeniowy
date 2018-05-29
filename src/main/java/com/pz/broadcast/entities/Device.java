package com.pz.broadcast.entities;

import javax.persistence.*;

@Entity
public class Device {

    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String pushToken;
    private String IPAddress;
    @ManyToOne
    private User user;


    protected Device() {
    }

    public Device(String name, String pushToken, String IPAddress) {
        this.name = name;
        this.pushToken = pushToken;
        this.IPAddress = IPAddress;
    }


    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPushToken() {
        return pushToken;
    }

    public void setPushToken(String pushToken) {
        this.pushToken = pushToken;
    }

    public String getIPAddress() {
        return IPAddress;
    }

    public void setIPAddress(String IPAddress) {
        this.IPAddress = IPAddress;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @Override
    public String toString() {
        return "Device{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", pushToken='" + pushToken + '\'' +
                ", IPAddress='" + IPAddress + '\'' +
                '}';
    }

}
