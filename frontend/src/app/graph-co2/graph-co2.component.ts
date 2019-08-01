import { Component, OnInit } from '@angular/core';
import { Registros } from 'src/registros';
import { HttpServiceService } from 'src/http-service.service';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-graph-co2',
  templateUrl: './graph-co2.component.html',
  styleUrls: ['./graph-co2.component.css']
})
export class GraphCo2Component implements OnInit {
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
      { data: [], label: 'CO2' }
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
        data_registros[0].localTime], this.barChartData[0].data = [data_registros[9].co2, data_registros[8].co2, 
        data_registros[7].co2, data_registros[6].co2, data_registros[5].co2, 
        data_registros[4].co2, data_registros[3].co2, data_registros[2].co2, 
        data_registros[1].co2, data_registros[0].co2]));
  
    }
    ngOnInit() {
      this.showDataRegistros();
    }  
}

