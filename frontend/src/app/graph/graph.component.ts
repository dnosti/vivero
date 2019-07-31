import { Component, OnInit } from '@angular/core';
import { Registros } from 'src/registros';
import { HttpServiceService } from 'src/http-service.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  private registros: Array<Registros>;
  
  constructor(private service: HttpServiceService) {
    this.showDataRegistros();
  }

  public barChartOptions: any = {
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

  public barChartLabels = [this.registros[0].id, '2007', '2008', '2009', '2010', '2011', '2012'];
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
    this.barChartData[0].data = data;
  }

  showDataRegistros() {
    this.service.getDataRegistros()
      .subscribe((data_registros: Array<Registros>) => this.registros = data_registros)
  }

  ngOnInit() {
    this.showDataRegistros();
  }  
}
