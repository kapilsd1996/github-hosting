import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.barChart()
    this.lineChart()
  }
  xLabels:any = [];
  BarChartData:any = [];
  LineChartData:any = [];
  yData:any = [];
  arr:any = []
  async getData(){
    //var n = 160;
    //this.arr = Array.from({length: n}, (item, index) => index);
    //this.xLabels.push(this.arr)
    const response = await fetch('assets/smallCSV1.csv')
    const data = await response.text();
    //console.log('fetch data',data)
    const table = data.split('\n')
    console.log('Rows', table)
    ///this.xLabels.push(table[0])
    ///this.yData.push(table[1])
    ///console.log('y data:', this.yData)
    ///console.log('y data:', this.yData.length)

    table.forEach(row => {
      const columns = row.split(',')
      console.log('element', columns)
      const yData = columns
      this.yData.push(yData)
    });

    console.log('y data:', this.yData)
    console.log('y data:', this.yData.length)
    console.log('Data Got!!')
  };

  async lineChart(){
    await this.getData();
    console.log('Drawing chart line!')
    const myChart = new Chart('lineChart' , {
      type: 'line',
      data: {
        //labels: ['Black', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        labels: this.yData[0],
        //labels: this.xLabels,
        datasets: [{
        label: 'My First Dataset',
        data: this.yData[1],
        //data: [12, 19, 3, 5, 2, 3],
        //fill: false,
        borderColor: 'rgb(75, 192, 192)',
        //tension: 0.1
  }]
      }
    }
    )
  }
  async barChart(){
    await this.getData();
    const myChart = new Chart('myChart', {
      type: 'bar',
      data: {
          //labels: this.xLabels,
          labels: this.yData[0],
          datasets: [{
              label: '# of Votes',
              data: this.yData[1],
              backgroundColor: [
                  'rgba(17, 19, 16, 0.8)',
              ],
              borderColor: [
                  'rgba(17, 19, 16, 0.8)',
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
  }
}
