import { Component, OnInit } from '@angular/core';
import { ThaistasksService } from '../thaistasks.service';

@Component({
  selector: 'app-thaishome',
  templateUrl: './thaishome.component.html',
  styleUrls: ['./thaishome.component.css']
})
export class ThaishomeComponent implements OnInit {

  constructor(public tasks: ThaistasksService) { }

  ngOnInit() {
  }

}