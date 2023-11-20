import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimcardService } from '../../services/simcard.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Simcard } from '../../models/simcard.model';
import { FormsModule } from '@angular/forms';
import { SimcardStatus } from '../../enums/status';

@Component({
  selector: 'app-simcard-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './simcard-form.component.html',
  styleUrl: './simcard-form.component.scss'
})
export class SimcardFormComponent {



  currentSimcard: Simcard = {}
  message = '';
  eSimcardStatus = SimcardStatus;

  isUpdate : boolean = false;

  constructor(
    private simcardService: SimcardService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    var id = this.route.snapshot.params["id"]

    console.log(id)
    if(id){
      this.isUpdate = true;
      this.getSimcard(id);
    }else{
      this.isUpdate = false;
    }
  }

  getSimcard(id: string): void {
    this.simcardService.get(id)
      .subscribe({
        next: (data) => {
          this.currentSimcard = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updateSimcard(): void {
    this.message = '';

    if(this.isUpdate){
      this.simcardService.update(this.currentSimcard.iccid, this.currentSimcard)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This simcard was updated successfully!';
        },
        error: (e) => console.error(e)
      });
    }else{

      this.simcardService.create(this.currentSimcard)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This simcard was created successfully!';

          this.router.navigate(['/simcards',this.currentSimcard.iccid],)
        },
        error: (e) => console.error(e)
      });



    }


  }

  /*
    deleteTutorial(): void {
      this.tutorialService.delete(this.currentTutorial.id)
        .subscribe({
          next: (res) => {
            console.log(res);
            this.router.navigate(['/tutorials']);
          },
          error: (e) => console.error(e)
        });
    }
    */
}
