package com.pz.broadcast.repositories;

import com.pz.broadcast.entities.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.Repository;

import java.util.Collection;

public interface UserRepository extends Repository<User, Long>, PagingAndSortingRepository<User, Long> {
    User findUserByEmail(String email);

    @Query("select u.login, u.password from User u")
    Collection<User> findBy();
}
