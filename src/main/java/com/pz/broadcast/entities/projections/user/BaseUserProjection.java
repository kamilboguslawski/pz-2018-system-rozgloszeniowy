package com.pz.broadcast.entities.projections.user;

import com.pz.broadcast.entities.User;
import org.springframework.data.rest.core.config.Projection;

import java.util.List;

@Projection(name = "baseUserProjection", types = {User.class})
public interface BaseUserProjection {
    Long getId();
    String getEmail();
    String getLogin();
    List<UserGroup> getGroups();
    List<Role> getRoles();
    List<Device> getDevices();

    interface Role {
        Long getId();
        String getName();
    }

    interface UserGroup {
        Long getId();
        String getName();
    }

    interface Device {
        Long getId();
        String getName();
    }
}
