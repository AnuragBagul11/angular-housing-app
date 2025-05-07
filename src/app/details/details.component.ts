import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { Housinglocation } from '../housinglocation';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: Housinglocation | undefined;
  applyForm: FormGroup;
  constructor() {
    const housingLocationId = Number(this.route.snapshot.paramMap.get('id'));
    if (!isNaN(housingLocationId)) {
      this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
    }
    this.applyForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }
  submitApplication(event: Event) {
    event.preventDefault();
    if (this.applyForm.valid && this.housingLocation) {
      console.log('Application submitted:', this.applyForm.value);
      alert(`Application submitted successfully for ${this.housingLocation.name}`);
      this.applyForm.reset();
    } else {
      alert('Please fill out the form correctly.');
      console.log('Form is invalid');
    }
  }
}
