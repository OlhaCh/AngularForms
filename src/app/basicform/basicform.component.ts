import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
@Component({
  selector: 'app-basicform',
  templateUrl: './basicform.component.html',
  styleUrls: ['./basicform.component.css']
})
export class BasicformComponent implements OnInit {
languages = ['English', 'Spanish', 'Other'];
  model = new Employee('IvanBaraban', 'Klapan', true, 'w2', 'English');
constructor() { }

  ngOnInit() {
  }
  firstNameToUpperCase(value: string) {
    if (value.length > 0) {
      this.model.firstName = value.charAt(0).toUpperCase() + value.slice(1);
    }
  }

}
