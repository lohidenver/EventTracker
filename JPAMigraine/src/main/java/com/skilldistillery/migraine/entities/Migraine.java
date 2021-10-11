package com.skilldistillery.migraine.entities;

import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "migraine")
public class Migraine {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private int intensity;
	@Column(name="migraine_start_date")
	private String migraineStartDate;
	@Column(name="migraine_end_date")
	private String migraineEndDate;
	@Column(name = "migraine_trigger")
	private String migraineTrigger;
	@Column(name = "type_of_treatment")
	private String typeOfTreatment;
		
	
	public Migraine() {
		super();
	}
	
	
	
	
	public Migraine(int id, int intensity, String migraineStartDate, String migraineEndDate, String migraineTrigger,
			String typeOfTreatment) {
		super();
		this.id = id;
		this.intensity = intensity;
		this.migraineStartDate = migraineStartDate;
		this.migraineEndDate = migraineEndDate;
		this.migraineTrigger = migraineTrigger;
		this.typeOfTreatment = typeOfTreatment;
	}




	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getIntensity() {
		return intensity;
	}
	public void setIntensity(int intensity) {
		this.intensity = intensity;
	}
	public String getMigraineStartDate() {
		return migraineStartDate;
	}
	public void setMigraineStartDate(String migraineStartDate) {
		this.migraineStartDate = migraineStartDate;
	}
	public String getMigraineEndDate() {
		return migraineEndDate;
	}
	public void setMigraineEndDate(String migraineEndDate) {
		this.migraineEndDate = migraineEndDate;
	}
	public String getMigraineTrigger() {
		return migraineTrigger;
	}
	public void setMigraineTrigger(String migraineTrigger) {
		this.migraineTrigger = migraineTrigger;
	}
	public String getTypeOfTreatment() {
		return typeOfTreatment;
	}
	public void setTypeOfTreatment(String typeOfTreatment) {
		this.typeOfTreatment = typeOfTreatment;
	}
	@Override
	public int hashCode() {
		return Objects.hash(id);
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Migraine other = (Migraine) obj;
		return id == other.id;
	}
	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("Migraine [id=");
		builder.append(id);
		builder.append(", intensity=");
		builder.append(intensity);
		builder.append(", migraineStartDate=");
		builder.append(migraineStartDate);
		builder.append(", migraineEndDate=");
		builder.append(migraineEndDate);
		builder.append(", migraineTrigger=");
		builder.append(migraineTrigger);
		builder.append(", typeOfTreatment=");
		builder.append(typeOfTreatment);
		builder.append("]");
		return builder.toString();
	}

	
	
}
