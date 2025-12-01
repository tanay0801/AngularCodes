import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-trainer',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './trainer.html',
  styleUrls: ['./trainer.css']
})
export class TrainerComponent {
  Skills = [
    { id: 101, name: "C" },
    { id: 102, name: "C++" },
    { id: 103, name: "Java" },
    { id: 104, name: "SQL" },
    { id: 105, name: "Springboot" }
  ];

  trainer: FormGroup;
  msg: string = " ";

  constructor(private formBuilder: FormBuilder, private client: HttpClient) {
    this.trainer = this.formBuilder.group({
      firstName: new FormControl(),
      lastName: new FormControl(),
      knownSkills: new FormArray([])
    });

    this.Skills.forEach(() => {
      this.getKnownSkills().push(new FormControl(false));
    });
  }

  getKnownSkills(): FormArray {
    return this.trainer.get('knownSkills') as FormArray;
  }

  save() {
    const selectedSkills: any[] = [];
    for (let i = 0; i < this.getKnownSkills().length; i++) {
      if (this.getKnownSkills().at(i).value) {
        selectedSkills.push({
          id : this.Skills[i].id,
          name :this.Skills[i].name
                          });
      }
    }
    
    this.trainer.value.knownSkills = selectedSkills;
    console.log(this.trainer.value);
    this.client.post<any>('http://localhost:7070/trainer/save', this.trainer.value).subscribe(
      r1 => {
        this.msg = r1.message;
      }
    )
  }
}
