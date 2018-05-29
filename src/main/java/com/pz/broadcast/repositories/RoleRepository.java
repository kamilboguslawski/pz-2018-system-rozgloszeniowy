package com.pz.broadcast.repositories;

import com.pz.broadcast.entities.Role;
import org.springframework.data.repository.CrudRepository;

public interface RoleRepository extends CrudRepository<Role, Long> {
    Role findFirstByName(String name);
}
