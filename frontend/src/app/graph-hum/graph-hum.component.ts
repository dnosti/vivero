import { Component, OnInit } from '@angular/core';
import { Registros } from 'src/registros';
import { HttpServiceService } from 'src/http-service.service';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-graph-hum',
  templateUrl: './graph-hum.component.html',
  styleUrls: ['./graph-hum.component.css']
})
export class GraphHumComponent implements OnInit {


  registros: Array<Registros>   ;

  
  constructor(private service: HttpServiceService) { 
  }

  

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: any[];
  public barChartType: String = 'bar';
  public barChartLegend = true;

  public barChartData: any = [
    { data: [], label: 'Temperatura' }
  ];
  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  showDataRegistros() {
    this.service.getDataRegistros()
      .subscribe((data_registros: Array<Registros>) => (this.barChartLabels = [data_registros[9].localTime, 
      data_registros[8].localTime, data_registros[7].localTime, data_registros[6].localTime, 
      data_registros[5].localTime, data_registros[5].localTime, data_registros[4].localTime, 
      data_registros[3].localTime, data_registros[2].localTime, data_registros[1].localTime, 
      data_registros[0].localTime], this.barChartData[0].data = [data_registros[9].humedad, data_registros[8].humedad, 
      data_registros[7].humedad, data_registros[6].humedad, data_registros[5].humedad, 
      data_registros[4].humedad, data_registros[3].humedad, data_registros[2].humedad, 
      data_registros[1].humedad, data_registros[0].humedad]));

  }
  ngOnInit() {
    this.showDataRegistros();
  }  
}
