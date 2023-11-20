package com.ben.dust.repository;

import java.util.List;

import com.ben.dust.model.Simcard;
import com.ben.dust.model.Status;
import org.springframework.data.jpa.repository.JpaRepository;



public interface SimcardRepository extends JpaRepository<Simcard, String> {
    List<Simcard> findByStatus(Status status);
}