import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Simcard } from '../../models/simcard.model';
import { SimcardService } from '../../services/simcard.service';
import { SimcardDetailsComponent } from '../simcard-details/simcard-details.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-simcard-list',
  standalone: true,
  imports: [CommonModule,SimcardDetailsComponent],
  templateUrl: './simcard-list.component.html',
  styleUrl: './simcard-list.component.scss'
})
export class SimcardListComponent implements OnInit {

  simcards?: Simcard[];
  currentSimcard: Simcard = {};
  currentIndex = -1;
  
  constructor(
    private simcardService: SimcardService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.retrieveSimcard();
  }

  retrieveSimcard(): void {
    this.simcardService.getAll()
      .subscribe({
        next: (data) => {
          this.simcards = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  refreshList(): void {
    this.retrieveSimcard();
    this.currentSimcard = {};
    this.currentIndex = -1;
  }

  setActiveSimcard(simcard: Simcard, index: number): void {
    this.currentSimcard = simcard;
    this.currentIndex = index;
  }

  newSimcard(): void{
    this.router.navigate(['/simcards/new'])
  }


  removeAllSimcards(): void {
    this.simcardService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  removeSimcard(id: string | undefined):void{
    this.simcardService.delete(id)
    .subscribe({
      next: (res) => {
        console.log(res);
        this.refreshList();
      },
      error: (e) => console.error(e)
    });
  }

  editSimcard(id: string | undefined):void{
    this.router.navigate(['/simcards',id])
  }
  
}
