import { Component, OnInit } from '@angular/core';
import { Registros } from 'src/registros';
import { HttpServiceService } from 'src/http-service.service';
import { ChartOptions } from 'chart.js';


@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  private registros: Array<Registros>;
  regCargados: Promise <boolean>;
  
  constructor(private service: HttpServiceService) { 
    this.showDataRegistros(); 
  }

  async showDataRegistros() {
    await this.service.getDataRegistros()
      .subscribe((data_registros: Array<Registros>) =>{ 
        this.registros = data_registros;
        this.regCargados = Promise.resolve(true);
      });
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
  
  public barChartLabels: any[] = [this.registros[0].localTime , '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: String = 'bar';
  public barChartLegend = true;

  public barChartData: any[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];
  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    const data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
      console.log(this.registros[0].localTime);
    this.barChartData[0].data = data;
  }

  public async returnLocalTime(i: number){
    this.showDataRegistros();
    return this.registros[i].localTime;
  }

  async ngOnInit() {
    this.showDataRegistros()
  }  
}
