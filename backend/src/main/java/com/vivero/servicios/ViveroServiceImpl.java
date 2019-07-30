package com.vivero.servicios;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.scheduling.annotation.Async;

import com.vivero.modelos.Configuracion;
import com.vivero.modelos.Registro;
import com.vivero.modelos.Sensores;
import com.vivero.repositories.ConfigRepository;
import com.vivero.repositories.RegistroRepository;
import com.vivero.repositories.ViveroRepository;

@Service
public class ViveroServiceImpl implements ViveroService{

	@Autowired
	private ViveroRepository repo;
	@Autowired
	private ConfigRepository repConf;
	@Autowired
	private RegistroRepository repoRec;
	
	@Override
	public List<Sensores> obtenerDatos() {
		return repo.findAll();
	}
	
	@Override
	public void modificarConf(Configuracion conf) {
		Configuracion aux = repConf.findById(1).orElse(null);
		aux.setVent(conf.getVent());
		aux.setInund(conf.getInund());
		aux.setTemp_max(conf.getTemp_max());
		aux.setTemp_min(conf.getTemp_min());
		aux.setHum_max(conf.getHum_max());
		aux.setHum_min(conf.getHum_min());
		aux.setLuz_max(conf.getLuz_max());
		aux.setLuz_min(conf.getLuz_min());
		aux.setCo2_max(conf.getCo2_max());
		aux.setCo2_min(conf.getCo2_min());
		
		repConf.save(conf);
	}
	
	@Async
	@Override
	public void sensorRefresh() throws InterruptedException {
		
		Sensores sens = new Sensores();
		while(true) {
			Registro reg = new Registro();
			try {
				InputStream fis = new FileInputStream("/home/lisandro/Documentos/IPS/Taller IV/vivero/vivero/backend/src/main/resources/sensores.txt");
				BufferedReader br = new BufferedReader(new InputStreamReader(fis));
				
				try {
					sens.setTemperatura(Float.parseFloat(br.readLine()));
					sens.setHumedad(Integer.parseInt(br.readLine()));
					sens.setLuz(Integer.parseInt(br.readLine()));
					sens.setCo2(Integer.parseInt(br.readLine()));
					reg.setVentilacion(repConf.findById(1).orElse(null).getVent());
					reg.setInundacion(repConf.findById(1).orElse(null).getInund());
					reg.setTemperatura(sens.getTemperatura());
					reg.setHumedad(sens.getHumedad());
					reg.setLuz(sens.getLuz());
					reg.setCo2(sens.getCo2());
					reg.setLocalDate(LocalDate.now());
					reg.setLocalTime(LocalTime.now());
					repoRec.save(reg);	
					
				} catch (IOException e) {
					e.printStackTrace();
				}
				
				br.close();
				
			} catch (FileNotFoundException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
			
			
			Thread.sleep(10000);
			
		}
	}

	@Override
	public Configuracion obtenerConf() {
		return repConf.findById(1).orElse(null);
	}
	
	@Override
	public List<Registro> getInfoRecords(){
		return repoRec.findAll();
	}

	@Override
	public void setSensores(Sensores sensores) {
		Sensores aux = repo.findById(1).orElse(null);	
		aux.setTemperatura(sensores.getTemperatura());
		aux.setHumedad(sensores.getHumedad());
		aux.setLuz(sensores.getLuz());
		aux.setCo2(sensores.getCo2());
		
		repo.save(aux);
	}
	
	
}
