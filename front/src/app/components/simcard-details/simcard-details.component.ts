import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Simcard } from '../../models/simcard.model';

@Component({
  selector: 'app-simcard-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './simcard-details.component.html',
  styleUrl: './simcard-details.component.scss'
})
export class SimcardDetailsComponent implements OnInit {
  @Input() viewMode = false;

  @Input() currentSimcard: Simcard = {

  };

  constructor(
  ) { }

  ngOnInit(): void {

  }

}
