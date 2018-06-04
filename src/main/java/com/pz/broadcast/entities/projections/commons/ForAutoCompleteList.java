package com.pz.broadcast.entities.projections.commons;

import com.pz.broadcast.entities.Role;
import com.pz.broadcast.entities.UserGroup;
import org.springframework.data.rest.core.config.Projection;

@Projection(name = "autocomplete", types = {UserGroup.class, Role.class})
public interface ForAutoCompleteList {
    Long getId();
    String getName();
}
