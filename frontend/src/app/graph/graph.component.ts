import { Component, OnInit } from '@angular/core';
import { Registros } from 'src/registros';
import { HttpServiceService } from 'src/http-service.service';
import { ChartOptions } from 'chart.js';


@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent {

  registros: Array<Registros>;
  
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
    { data: [], label: 'Temperatura', backgroundColor: 'rgba(255, 0, 0, 0.7)', borderColor: '#bb0000', 
    hoverBackgroundColor: 'rgba(255, 0, 0, 0.7)', hoverBorderColor: '#bb0000' }
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
      data_registros[5].localTime, data_registros[4].localTime, data_registros[3].localTime, 
      data_registros[2].localTime, data_registros[1].localTime, data_registros[0].localTime], 
      this.barChartData[0].data = [data_registros[9].temperatura, data_registros[8].temperatura, 
      data_registros[7].temperatura, data_registros[6].temperatura, data_registros[5].temperatura, 
      data_registros[4].temperatura, data_registros[3].temperatura, data_registros[2].temperatura, 
      data_registros[1].temperatura, data_registros[0].temperatura]));

  }
  ngOnInit() {
    this.showDataRegistros();
  }  
}
