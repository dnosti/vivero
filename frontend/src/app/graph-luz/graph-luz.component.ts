import { Component, OnInit } from '@angular/core';
import { Registros } from 'src/registros';
import { HttpServiceService } from 'src/http-service.service';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-graph-luz',
  templateUrl: './graph-luz.component.html',
  styleUrls: ['./graph-luz.component.css']
})
export class GraphLuzComponent implements OnInit {

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
    { data: [], label: 'Luz', backgroundColor: 'rgba(255, 255, 1, 0.7)', borderColor: '#ffec00', 
    hoverBackgroundColor: '(255, 255, 1, 0.8)', hoverBorderColor: '#ffec00'  }
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
      this.barChartData[0].data = [data_registros[9].luz, data_registros[8].luz, 
      data_registros[7].luz, data_registros[6].luz, data_registros[5].luz, 
      data_registros[4].luz, data_registros[3].luz, data_registros[2].luz, 
      data_registros[1].luz, data_registros[0].luz]));

  }
  ngOnInit() {
    this.showDataRegistros();
  }  
}
