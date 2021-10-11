package com.skilldistillery.migraine;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.skilldistillery.migraine.repositories.MigraineRepository;

@SpringBootTest
class MigraineApplicationTests {

	@Autowired
	MigraineRepository repo;
	
	@Test
	public void contextLoads() {
		assertEquals( "stress", repo.findById(1).get().getMigraineTrigger().toString());
		
	}

}
