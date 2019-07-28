package com.vivero.modelos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class Configuracion {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer Id = 1;
	// Ventilación y drenaje Activados/Desactivados
	@Column(name = "vent", nullable = false)
	private Boolean vent = false;
	@Column(name = "inund", nullable = false)
	private Boolean inund = false;
	
	// Valores de referencia
	@Column(name = "temp_max", nullable = false)
	private float temp_max = 30;
	@Column(name = "temp_min", nullable = false)
	private float temp_min = 15;
	@Column(name = "hum_max", nullable = false)
	private int hum_max = 60;
	@Column(name = "hum_min", nullable = false)
	private int hum_min = 45;
	@Column(name = "luz_max", nullable = false)
	private int luz_max = 700;
	@Column(name = "luz_min", nullable = false)
	private int luz_min = 400;
	@Column(name = "co2_max", nullable = false)
	private int co2_max = 1000;
	@Column(name = "co2_min", nullable = false)
	private int co2_min = 200;
	
	public Configuracion() {};
	
	//Metodos
	public Boolean getVent() {
		return vent;
	}
	public void setVent(Boolean vent) {
		this.vent = vent;
	}
	public Boolean getInund() {
		return inund;
	}
	public void setInund(Boolean inund) {
		this.inund = inund;
	}
	public float getTemp_max() {
		return temp_max;
	}
	public void setTemp_max(float temp_max) {
		this.temp_max = temp_max;
	}
	public float getTemp_min() {
		return temp_min;
	}
	public void setTemp_min(float temp_min) {
		this.temp_min = temp_min;
	}
	public int getHum_max() {
		return hum_max;
	}
	public void setHum_max(int hum_max) {
		this.hum_max = hum_max;
	}
	public int getHum_min() {
		return hum_min;
	}
	public void setHum_min(int hum_min) {
		this.hum_min = hum_min;
	}
	public int getLuz_max() {
		return luz_max;
	}
	public void setLuz_max(int luz_max) {
		this.luz_max = luz_max;
	}
	public int getLuz_min() {
		return luz_min;
	}
	public void setLuz_min(int luz_min) {
		this.luz_min = luz_min;
	}
	public int getCo2_max() {
		return co2_max;
	}
	public void setCo2_max(int co2_max) {
		this.co2_max = co2_max;
	}
	public int getCo2_min() {
		return co2_min;
	}
	public void setCo2_min(int co2_min) {
		this.co2_min = co2_min;
	}
	
}
