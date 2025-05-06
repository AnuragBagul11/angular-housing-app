import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { Housinglocation } from '../housinglocation';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms'; 
@Component({
  selector: 'app-details',
  imports: [CommonModule,ReactiveFormsModule],
  standalone:true,
  templateUrl:'./details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: Housinglocation | undefined;

  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
  }
  applyForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  submitApplication() {
    if (this.applyForm.valid) {
      console.log('Application submitted:', this.applyForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

}
