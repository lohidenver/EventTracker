package com.skilldistillery.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import com.skilldistillery.migraine.entities.Migraine;

class MigraineTest {

	private static EntityManagerFactory emf;
	private EntityManager em;
	private Migraine migraine;
	
	
	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("JPAMigraine");
		
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		migraine = em.find(Migraine.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		migraine=null;
		
	}

	@Test
	void test_intitalSetup() {
		assertNotNull(migraine);
		assertEquals("stress", migraine.getMigraineTrigger());
	}

}
