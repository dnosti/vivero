package com.vivero.modelos;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Sensores {
	//valores medidos por los sensores
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	private Float temperatura;
	private int humedad;
	private int luz;
	private int co2;
	
	public Sensores( ) {};
	
	public Sensores(float temp, int hum, int luz, int co2) {
		this.temperatura = temp;
		this.humedad = hum;
		this.luz = luz;
		this.co2 = co2;
	};
	
	public float getTemperatura() {
		return temperatura;
	}
	public void setTemperatura(float temperatura) {
		this.temperatura = temperatura;
	}
	public int getHumedad() {
		return humedad;
	}
	public void setHumedad(int humedad) {
		this.humedad = humedad;
	}
	public int getLuz() {
		return luz;
	}
	public void setLuz(int luz) {
		this.luz = luz;
	}
	public int getCo2() {
		return co2;
	}
	public void setCo2(int co2) {
		this.co2 = co2;
	}
	
}
