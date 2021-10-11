package com.skilldistillery.migraine.services;

import java.util.List;

import com.skilldistillery.migraine.entities.Migraine;

public interface MigraineService {
	List<Migraine> allMigraines();

	//List<Migraines> allMigrainesWithinAnIntensityRange(int low, int high);

	Migraine create(Migraine migraine);

	Migraine findById(int id);

	Boolean deleteById(Integer id);

	Migraine updateMigraine(Integer id, Migraine migraine);

	List<Migraine> findByMigraineTrigger(String keyword);

}
