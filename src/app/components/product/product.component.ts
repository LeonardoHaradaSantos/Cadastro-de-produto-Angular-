import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from '../../interfaces/Category';
import { Product } from '../../interfaces/Product';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {

  @Input()
  categories : Category [] = [];

  @Input()
  product : Product = {} as Product;

  @Output()
  saveEmitter = new EventEmitter();

  constructor() {}

  ngOnInit(): void{
  }

  save(){
    this.saveEmitter.emit();
  }
}
