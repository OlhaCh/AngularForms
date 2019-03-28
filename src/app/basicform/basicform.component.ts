import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicform',
  templateUrl: './basicform.component.html',
  styleUrls: ['./basicform.component.css']
})
export class BasicformComponent implements OnInit {
languages = ['English', 'Spanish', 'Other'];
  constructor() { }

  ngOnInit() {
  }

}
