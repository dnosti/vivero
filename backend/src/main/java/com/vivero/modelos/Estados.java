package com.vivero.modelos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Estados {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer Id;
	@Column(name = "tempanormal", nullable = false)
	private Boolean tempAnormal;
	@Column(name = "humedadanormal", nullable = false)
	private Boolean humedadAnormal;
	@Column(name = "luzanormal", nullable = false)
	private Boolean luzAnormal;
	@Column(name = "co2anormal", nullable = false)
	private Boolean co2Anormal;
	
	public Estados() {}
	
	public Integer getId() {
		return Id;
	}
	public void setId(Integer id) {
		Id = id;
	}
	public Boolean getTempAnormal() {
		return tempAnormal;
	}
	public void setTempAnormal(float tempMin, float tempMax, Float Temp) {
		if(tempMin > Temp || tempMax < Temp)
			this.tempAnormal = true;
		else 
			this.tempAnormal = false;
	}
	public Boolean getHumedadAnormal() {
		return humedadAnormal;
	}
	public void setHumedadAnormal(int humMin, int humMax, int hum) {
		if (humMin > hum || humMax > hum)
			this.humedadAnormal = true;
		else 
			this.humedadAnormal = false;
	}
	public Boolean getLuzAnormal() {
		return luzAnormal;
	}
	public void setLuzAnormal(int luzMin, int luzMax, int luz) {
		if(luzMin > luz || luzMax < luz)
			this.luzAnormal = true;
		else 
			this.luzAnormal = false;
	}
	public Boolean getCo2Anormal() {
		return co2Anormal;
	}
	public void setCo2Anormal(int co2Min, int co2Max, int co2) {
		if (co2Min > co2 || co2Max > co2)
			this.co2Anormal = true;
		else 
			this.co2Anormal = false;
	}

}
