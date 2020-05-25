import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { CocktailsService } from 'src/app/services/cocktails.service';

@Component({
  selector: 'app-cocktails-page',
  templateUrl: './cocktails-page.component.html',
  styleUrls: ['./cocktails-page.component.scss']
})
export class CocktailsPageComponent implements OnInit {
  public form: FormGroup;
  public categories = [];
  public cocktails = [];

  constructor(
    private formBuilder: FormBuilder,
    private cocktailsService: CocktailsService
  ) {
  }

  ngOnInit(): void {
    this.createForm();
    this.getHeaders();
    this.getCoctailsList();
  }

  getHeaders(): void {
    this.cocktailsService.getHeaderFilter().subscribe(res => {
      this.categories = res.drinks;
      this.addCheckboxes();
    });
  }

  getCoctailsList(): void {
    this.cocktailsService.getStart().subscribe(res => {
      this.cocktails = res.drinks;
    });
  }

  filterByType(): void {
    const selectedDrink = this.form.value.drinks
      .map((v, i) => v ? this.categories[i].strCategory : null)
      .filter(v => v !== null);
      
    this.cocktailsService.getSomeFilterUniversal(selectedDrink).subscribe(res => {
      this.cocktails = res.drinks;
    });
  }

  private createForm(): void {
    this.form = this.formBuilder.group({
      drinks: new FormArray([])
    });
  }

  private addCheckboxes(): void {
    this.categories.forEach((checkedBox, index) => {
      const control = new FormControl(index === 0);
      (this.form.controls.drinks as FormArray).push(control);
    });
  }
}
