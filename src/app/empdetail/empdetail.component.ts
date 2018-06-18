import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { EmpDetailService } from '../_services/empdetail.service';

@Component({
  selector: 'app-table',
  templateUrl: './empdetail.component.html',
  styleUrls: ['./empdetail.component.css']
})
export class EmpDetailComponent implements OnInit {

  characters: Observable<any[]>;
  columns: string[];

  constructor(private atService: EmpDetailService) {
  }

  ngOnInit() {
    this.columns = this.atService.getColumns();
    this.characters = this.atService.getCharacters();
  }

}