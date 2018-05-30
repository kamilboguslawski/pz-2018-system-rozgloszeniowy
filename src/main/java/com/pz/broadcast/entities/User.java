package com.pz.broadcast.entities;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
public class User {

    @Id
    @GeneratedValue
    private Long id;
    private String login;
    private String password;
    private String email;
    @ManyToMany
    private List<Role> roles;
    @ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    private List<UserGroup> groups;
    @OneToMany(
            mappedBy = "user",
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    private List<Device> devices;


    protected User() {}

    public User(String login, String password, String email) {
        this.login = login;
        this.password = password;
        this.email = email;
    }

}
