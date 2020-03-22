import { Component, OnInit } from '@angular/core';
import { SuppliersService } from '../services/suppliers.service';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {

  public suppliers: any;
  public errorMessage: any;

  constructor(private supplierService: SuppliersService) { }

  ngOnInit() {
    this.supplierService.getSuppliers()
    .subscribe(data => {
      this.suppliers = data;
    }, err => {
      console.log('err.error.message : ' + err.error.message);
      this.errorMessage = err.error.message;
    });
  }

}
