import { Routes } from '@angular/router';
import { SimcardListComponent } from './components/simcard-list/simcard-list.component';
import { SimcardFormComponent } from './components/simcard-form/simcard-form.component';

export const routes: Routes = [
    { path: '', redirectTo: 'simcards', pathMatch: 'full' },
    { path: 'simcards', component: SimcardListComponent },
    { path: 'simcards/new', component: SimcardFormComponent },
    { path: 'simcards/:id', component: SimcardFormComponent },
];
