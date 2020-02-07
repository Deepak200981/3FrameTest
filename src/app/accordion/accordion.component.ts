import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AccrodionData } from '../accordionData.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  private dataContent: any;
  constructor(private accrodionData: AccrodionData) { }

  ngOnInit() {
    this.accrodionData.getData().subscribe(
      (data: Response) => {
        this.dataContent = data.json().data;
        console.log(this.dataContent);
      }
    );
  }

  displayDetails(i) {
    this.dataContent[i].isDisplay = !this.dataContent[i].isDisplay;
  }

}
