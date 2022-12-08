import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    emeList=new FormArray([
      new FormGroup({
        name:new FormControl('',Validators.required),
        number:new FormControl('',Validators.required)  
      })
  ])
  form=new FormGroup({
      student:new FormGroup({
        Name:new FormGroup({
          firstName:new FormControl('',[Validators.required,Validators.minLength(3)]),
          middleName:new FormControl('',[Validators.required,Validators.minLength(3)]),
          lastName:new FormControl('', [Validators.required,Validators.minLength(3)])
        }),
        personalDetails:new FormGroup({
          dob:new FormControl('',Validators.required),
          birthPlace:new FormControl('',Validators.required),
          firstLang:new FormControl('',Validators.required)
        }),
        adress:new FormGroup({
          city:new FormControl('',Validators.required),
          state:new FormControl('',Validators.required),
          pinCode:new FormControl('',Validators.required)
        }),
      }),
      father:new FormGroup({
        Name:new FormGroup({
          firstName:new FormControl('',Validators.required),
          middleName:new FormControl('',Validators.required),
          lastName:new FormControl('',Validators.required)
        }),
        email:new FormControl('',Validators.required),
        education:new FormControl('',Validators.required),
        desgnation:new FormControl('',Validators.required),
        profession:new FormControl('',Validators.required),
        mobile:new FormControl('',Validators.required)
      }),
      mother:new FormGroup({
        Name:new FormGroup({
          firstName:new FormControl('',Validators.required),
          middleName:new FormControl('',Validators.required),
          lastName:new FormControl('',Validators.required)
        }),
        email:new FormControl('',Validators.required),
        education:new FormControl('',Validators.required),
        desgnation:new FormControl('',Validators.required),
        profession:new FormControl('',Validators.required),
        mobile:new FormControl('',Validators.required)
      }),
      EmergencyList:new FormGroup({
        emeList:this.emeList
      })
  })
  title = 'angular-app';


  addEme(){
    this.emeList.push(
      new FormGroup({
        name:new FormControl('',Validators.required),
        number:new FormControl('',Validators.required)  
      })
    )
  }

  removeEme(){
    this.emeList.removeAt(this.emeList.length-1)
  }

  get studFname(){
    return this.form.controls.student.controls.Name.controls.firstName;
  }

  get studMname(){
    return this.form.controls.student.controls.Name.controls.middleName;
  }

  get studLname(){
    return this.form.controls.student.controls.Name.controls.lastName;
  }

  get studDate(){
    return this.form.controls.student.controls.personalDetails.controls.dob;
  }

  get studBirthPlace(){
    return this.form.controls.student.controls.personalDetails.controls.birthPlace;
  }

  get studFirstLang(){
    return this.form.controls.student.controls.personalDetails.controls.firstLang;
  }
  get studCity(){
    return this.form.controls.student.controls.adress.controls.city;
  }
  get studState(){
    return this.form.controls.student.controls.adress.controls.state;
  }
  get studPincode(){
    return this.form.controls.student.controls.adress.controls.pinCode;
  }
  get fatherFname(){
    return this.form.controls.father.controls.Name.controls.firstName;
  }
  get fatherMname(){
    return this.form.controls.father.controls.Name.controls.middleName;
  }
  get fatherLname(){
    return this.form.controls.father.controls.Name.controls.lastName;
  }
  get fatherEmail(){
    return this.form.controls.father.controls.email;
  }
  get fatherEducation(){
    return this.form.controls.father.controls.education;
  }
  get fatherProfession(){
    return this.form.controls.father.controls.profession;
  }
  get fatherDesgnation(){
    return this.form.controls.father.controls.desgnation;
  }
  get fatherMobile(){
    return this.form.controls.father.controls.mobile;
  }


  get motherFname(){
    return this.form.controls.mother.controls.Name.controls.firstName;
  }
  get motherMname(){
    return this.form.controls.mother.controls.Name.controls.middleName;
  }
  get motherLname(){
    return this.form.controls.mother.controls.Name.controls.lastName;
  }
  get motherEmail(){
    return this.form.controls.mother.controls.email;
  }
  get motherEducation(){
    return this.form.controls.mother.controls.education;
  }
  get motherProfession(){
    return this.form.controls.mother.controls.profession;
  }
  get motherDesgnation(){
    return this.form.controls.mother.controls.desgnation;
  }
  get motherMobile(){
    return this.form.controls.mother.controls.mobile;
  }


  onSubmit(){
    console.log(this.studFname.errors);
  }
}
