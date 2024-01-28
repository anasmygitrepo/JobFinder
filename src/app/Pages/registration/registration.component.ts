import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BaseDto } from 'src/app/Models/BaseDto';
import { PhoneNumberFormat } from 'projects/ngxs-intl-tel-input/src/public_api';
import { JobService } from 'src/app/Service/job.service';
import { CountryISO } from 'projects/ngxs-intl-tel-input/src/lib/enums/country-iso.enum';
import { SearchCountryField } from 'projects/ngxs-intl-tel-input/src/lib/enums/search-country-field.enum';
import { IDropdownSettings } from 'ng-multiselect-dropdown';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  Countrychange:boolean=false

  Stats:BaseDto[]
  Countrys:BaseDto[]
  Degree:BaseDto[]
  Employers:BaseDto[]
  HighestDegree:BaseDto[]
  years:BaseDto[]
  Months:BaseDto[]
  Desigantion:BaseDto[]
  Currency:BaseDto[]
  CountryCode:BaseDto[]
  Religions:BaseDto[]
  Universitys:BaseDto[]
  Visa:BaseDto[]
  Nationality:BaseDto[]
  Days:BaseDto[]
  States:BaseDto[]
  Skills:BaseDto[]=[];
  FieldOfStudy:BaseDto[];
  selectedItems:BaseDto [];
  dropdownSettings:IDropdownSettings={}

  //RegisterForm: FormGroup;
  NextButtonclicked: boolean=true;
  IsFresher:boolean=false
  constructor(private service:JobService,private FB: FormBuilder) { }



  ngOnInit(): void {
    
    this.dropdownSettings= {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

    this.Stats=this.service.State
    this.Countrys=this.service.Countrys
    this.Degree=this.service.Degree
    this.Currency=this.service.Currency
    this.Desigantion=this.service.Deignation
    this.Employers=this.service.Employer
    this.HighestDegree=this.service.HigestEducation
    this.Months=this.service.Months
    this.years=this.service.Yeras
    this.CountryCode=this.service.CountryCode
    this.Religions=this.service.Religion
    this.Visa=this.service.Visa
    this.Nationality=this.service.Nationality
    this.Universitys=this.service.University
    this.Skills=this.service.Skills
    this.Days=this.service.Days
    this.States=this.service.Stats
    this.FieldOfStudy=this.service.fieldOfstudy

   

  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }


  

  separateDialCode = false;
	SearchCountryField = SearchCountryField;
	CountryISO = CountryISO;
	PhoneNumberFormat = PhoneNumberFormat;
	preferredCountries: CountryISO[] = [
		CountryISO.UnitedStates,
		CountryISO.UnitedKingdom,
	];
	// phoneForm = new FormGroup({
	// 	phone: new FormControl(undefined, [Validators.required]),
	// });

	changePreferredCountries() {
		this.preferredCountries = [CountryISO.India, CountryISO.Canada];
	}
  ChangeCounry(){
    this.Countrychange=true
  }

  totalSteps: number = 8;
  currentStep: number = 1;


  nextStep() {
    
    if (this.currentStep < this.totalSteps) {
      this.currentStep++;
      console.log(this.currentStep)
    }
    
  }
  Back(){
    if (this.currentStep < this.totalSteps) {
      this.currentStep--;
      console.log(this.currentStep)
    }
    
  }
  CurrentStatus:number
  ExpFresh(){
    this.currentStep=this.CurrentStatus
  }

  resetForm() {
    this.currentStep = 1;
    
  }

  // CreateRegistrationForm() {
  //   this.RegisterForm = this.FB.group({
  //       ProfessionalDetails: this.FB.group({
  //       Designation: [null,Validators.required],
  //       Employer: [null, Validators.required],
  //       ExpMonth: [null, Validators.required],
  //       ExpYear: [null, Validators.required],
  //       Location: [null, Validators.required],
  //       Skills: [null, Validators.required],
  //     }),
  //     PersonalDetails: this.FB.group({
  //       Fullname: [null, Validators.required],
  //       Location: [null, Validators.required],
  //       Nationality: [null, Validators.required],
  //     }),
  //     EducationalDetails: this.FB.group({
  //       HighestEducation: [null,Validators.required],
  //       PassingYear: [null,Validators.required],
        
  //     }),
  //   });

  // }


  // get ProfessionalInfo() {
  //   return this.RegisterForm.controls['ProfessionalDetails'] as FormGroup;
  // }
  // get PersonalInfo() {
  //   return this.RegisterForm.controls['PersonalDetails'] as FormGroup;
  // }
  // get EducationalInfo() {
  //   return this.RegisterForm.controls['EducationalDetails'] as FormGroup;
  // }

  //  // BasicInfoGroup.....controlls....................................
  //  get GetDesigantion() {
  //   return this.ProfessionalInfo.controls['Designation'] as FormControl;
  // }
  // get GetSkills() {
  //   return this.ProfessionalInfo.controls['Skills'] as FormControl;
  // }
  // get GetEmployer() {
  //   return this.ProfessionalInfo.controls['Employer'] as FormControl;
  // }
  // get GetExpMonth() {
  //   return this.ProfessionalInfo.controls['ExpMonth'] as FormControl;
  // }
  // get GetExpYear() {
  //   return this.ProfessionalInfo.controls['ExpYear'] as FormControl;
  // }
  // get GetLocation() {
  //   return this.ProfessionalInfo.controls['Location'] as FormControl;
  // }

  // //PriceInfo..group..controlls................................................................
  // get GetFullname() {
  //   return this.PersonalInfo.controls['Fullname'] as FormControl;
  // }
  // get GetAdress() {
  //   return this.PersonalInfo.controls['Location'] as FormControl;
  // }
  // get GetNationality() {
  //   return this.PersonalInfo.controls['Nationality'] as FormControl;
  // }

  // //  Educational Details.............................................................

  // get GetHigestEducation() {
  //   return this.EducationalInfo.controls['HighestEducation'] as FormControl;
  // }
  // get GetPassingYear() {
  //   return this.EducationalInfo.controls['PassingYear'] as FormControl;
  // }
}
