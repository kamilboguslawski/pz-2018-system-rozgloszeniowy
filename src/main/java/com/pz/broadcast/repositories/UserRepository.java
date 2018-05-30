package com.pz.broadcast.repositories;

import com.pz.broadcast.dtos.UserData;
import com.pz.broadcast.entities.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.Repository;

import java.util.Collection;

public interface UserRepository extends Repository<User, Long>, CrudRepository<User, Long>{
    User findUserByEmail(String email);
    <T> Collection<T> findUserByEmail(String email, Class<T> type);
    @Query("select u.login, u.password from User u")
    Collection<User> findBy();
}
