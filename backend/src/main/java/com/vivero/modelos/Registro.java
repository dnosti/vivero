package com.vivero.modelos;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Entity;
import javax.persistence.Id;

import java.time.LocalDate;
import java.time.LocalTime;

import javax.persistence.Column;


@Entity
public class Registro {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer Id;
	
	private Boolean ventilacion;
	private Boolean inundacion;
	private float temperatura;
	private int humedad;
	private int luz;
	private int co2;
	@Column(name = "time", columnDefinition = "TIME")
	private LocalTime localTime;
	@Column(name = "date", columnDefinition = "DATE")
	private LocalDate localDate;

	public Registro() {}
	
//	public Registro(Sensores sensores, Configuracion conf, LocalDate localDate, LocalTime localTime) {
//		this.ventilacion = conf.getVent();
//		this.inundacion = conf.getInund();
//		this.temperatura = sensores.getTemperatura();
//		this.humedad = sensores.getHumedad();
//		this.luz = sensores.getLuz();
//		this.co2 = sensores.getCo2();
//		this.localDate = localDate;
//		this.localTime = localTime;
//	}
//	
	public void setId(Integer id) {
		Id = id;
	}

	public LocalTime getLocalTime() {
		return localTime;
	}

	public void setLocalTime(LocalTime localTime) {
		this.localTime = localTime;
	}

	public LocalDate getLocalDate() {
		return localDate;
	}

	public void setLocalDate(LocalDate localDate) {
		this.localDate = localDate;
	}

	public Boolean getVentilacion() {
		return ventilacion;
	}
	
	public void setVentilacion(Boolean ventilacion) {
		this.ventilacion = ventilacion;
	}
	
	public Boolean getInundacion() {
		return inundacion;
	}
	
	public void setInundacion(Boolean inundacion) {
		this.inundacion = inundacion;
	}
	
	public Integer getId() {
		return Id;
	}
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
