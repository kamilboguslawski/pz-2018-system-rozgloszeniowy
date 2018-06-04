package com.pz.broadcast.repositories;

import com.pz.broadcast.entities.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.Repository;

import java.util.List;
import java.util.Map;

public interface UserRepository extends Repository<User, Long>, PagingAndSortingRepository<User, Long> {
    User findUserByEmail(String email);

    @Query("SELECT r.name as role, r.description as description FROM User u JOIN u.roles r WHERE u.email = ?1")
    List<Map<String, Object>> findUserRoles(String email);
}
