import { Component, OnInit } from '@angular/core';
import { Logger } from './logger.service';
import { HttpClient } from '@angular/common/http';



@Component({ selector: 'get-request', templateUrl: 'product-list.component.html' })
export class ImgDataService implements OnInit {
  totalAngularPackages: any;

  constructor(
    private logger: Logger,
    private client: HttpClient
  ) { }

  img = [{ "url": "1.jpg", "width": "4240", "height": "2832" }, { "url": "2.jpg", "width": "4240", "height": "2832" }]

  ngOnInit() {
    this.client.get<any>('https://api.npms.io/v2/search?q=scope:angular').subscribe(data => {
      this.totalAngularPackages = data.total;
    })
  }

  success() { return "Successful"; }

  getDataList() {
    return "Data List returned";
  }

}
