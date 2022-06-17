import { Component, OnInit } from '@angular/core';
import { ThaistasksService } from '../thaistasks.service';

@Component({
  selector: 'app-thaistasks',
  templateUrl: './thaistasks.component.html',
  styleUrls: ['./thaistasks.component.css']
})
export class ThaistasksComponent implements OnInit {

  constructor(public tasks: ThaistasksService) { }

  ngOnInit() {
  }

}