import { Component, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { itemCategories } from '../../../assets/config/itemCategory';

@Component({
  selector: 'app-items',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css',
})
export class ItemsComponent {
  itemForm!: FormGroup;
  categoryOptions = itemCategories;
  taxPercentage: Number = 0;

  private readonly fb = inject(FormBuilder);

  ngOnInit() {
    this.itemForm = this.fb.group({
      itemName: ['', Validators.required],
      itemPriceWithoutTax: ['', [Validators.required, Validators.min(0)]],
      itemPriceWithTax: [{ value: '', disabled: true }, Validators.required],
      taxPercentage: ['', [Validators.required, Validators.min(0)]],
      category: ['', Validators.required],
      image: [null],
    });

    // Recalculate the price with tax whenever the item price without tax changes
    this.itemForm.get('taxPercentage')?.valueChanges.subscribe((value) => {
      const priceWithoutTax = value || 0;
      const priceWithTax =
        this.itemForm.get('itemPriceWithoutTax')?.value * (1 + value / 100); // Assuming a 10% tax rate
      this.itemForm
        ?.get('itemPriceWithTax')
        ?.setValue(priceWithTax.toFixed(2), { emitEvent: false });
    });
  }

  onSubmit() {
    if (this.itemForm?.valid) {
      console.log(this.itemForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

  onImageChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.itemForm?.patchValue({
        image: file,
      });
    }
  }
}
