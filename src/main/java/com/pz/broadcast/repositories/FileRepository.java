package com.pz.broadcast.repositories;

import com.pz.broadcast.entities.File;
import org.springframework.data.repository.CrudRepository;

public interface FileRepository extends CrudRepository<File, Long> {
}
