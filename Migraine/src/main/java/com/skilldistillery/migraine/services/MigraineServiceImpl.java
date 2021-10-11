package com.skilldistillery.migraine.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.migraine.entities.Migraine;
import com.skilldistillery.migraine.repositories.MigraineRepository;

@Service
public class MigraineServiceImpl implements MigraineService {
	
	@Autowired
	private MigraineRepository repo;

	@Override
	public List<Migraine> allMigraines() {
		return repo.findAll();
	}

	@Override
	public Migraine create(Migraine migraine) {
		return repo.saveAndFlush(migraine);
	}

	@Override
	public Migraine findById(int id) {
		try {
			return repo.findById(id).get();
		} catch (Exception e) {
			return null;
		}
	}

	@Override
	public Boolean deleteById(Integer id) {
		Boolean deleted = true;
		Optional<Migraine> toDelete = repo.findById(id);
		repo.deleteById(id);
		deleted = repo.existsById(toDelete.get().getId());
		return deleted;
	}

	@Override
	public Migraine updateMigraine(Integer id, Migraine migraine) {
		migraine.setId(id);
		repo.saveAndFlush(migraine);
		return migraine;
	}

	@Override
	public List<Migraine> findByMigraineTrigger(String keyword) {
		return repo.findByMigraineTrigger(keyword);
	}

	@Override
	public List<Migraine> allMigrainesWithinAnIntensityRange(int low, int high) {
		List<Migraine> migraines = repo.findByIntensityBetween(low, high);
		return migraines;
	}

}
