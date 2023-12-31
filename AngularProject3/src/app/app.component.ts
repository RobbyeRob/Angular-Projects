import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'RobbyeRob - Angular Projects';
  description = 'Where the Rubber meets the road.  Using description variable to put data here.'
  totalAngularPackages: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // Simple GET request with response type <any>
    this.http.get<any>('https://api.npms.io/v2/search?q=scope:angular').subscribe(data => {
      this.totalAngularPackages = data.total;
    })
  }
}
