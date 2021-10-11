package com.skilldistillery.migraine.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.migraine.entities.Migraine;

public interface MigraineRepository extends JpaRepository<Migraine, Integer> {
	List<Migraine> findByMigraineTrigger( String keyword);
	List<Migraine> findByIntensityBetween(int low, int high);
}
