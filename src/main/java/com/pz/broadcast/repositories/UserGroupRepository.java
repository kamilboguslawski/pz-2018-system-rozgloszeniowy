package com.pz.broadcast.repositories;

import com.pz.broadcast.entities.User;
import com.pz.broadcast.entities.UserGroup;
import org.springframework.data.repository.CrudRepository;

import java.util.Collection;

public interface UserGroupRepository extends CrudRepository<UserGroup, Long> {
    Collection<UserGroup> findAllByUsersContains(User user);
}
