import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/productModel';
import { ProductService } from 'src/app/services/productService/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  products: Array<Product> = [];
  constructor(public productsService: ProductService) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts() {
    this.productsService.getProducts().subscribe({
      next: (data) => { 
        this.products= data as Array<Product>
      },
      error: (error) => console.log(error)
    })
  }

  public saveProduct() {
    
    // 1- leer los datos del formulario
    // 2- construir un objeto para mandar a la BD
    // 3- Mandar ese objeto al endpoint
    const { _id, ...productSinId} = this.productsService.selectedProduct;
    this.productsService.createProduct(productSinId).subscribe(
      {
        next: () => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            text: `Producto creado correctamente`,
            showConfirmButton: true,
          });
          // Limpiar que?
          this.productsService.selectedProduct = new Product;
          this.getProducts();
        },
        error: () => {
          Swal.fire({
            position: 'center',
            icon: 'error',
            text: `Producto no creado`,
            showConfirmButton: true,
          });
        },
    }
    )
  }

}
