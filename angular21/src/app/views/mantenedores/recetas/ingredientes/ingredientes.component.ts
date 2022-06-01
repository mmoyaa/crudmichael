import { Component, OnInit , VERSION} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PlatosService } from 'src/app/services/platos/platos.service';
import { platos } from 'src/app/models/platos';
import { recetas} from 'src/app/models/recetas';
import { RecetasService } from 'src/app/services/recetas/recetas.service';
import { ReactiveFormsModule } from '@angular/forms'
import { ThisReceiver } from '@angular/compiler';
import { Products } from 'src/app/models/producto';
import { ProductService } from 'src/app/services/product/product.service'




@Component({
  selector: 'app-ingredientes',
  templateUrl: './ingredientes.component.html',
  styleUrls: ['./ingredientes.component.css']
})
export class IngredientesComponent implements OnInit {
  [x: string]: any;

muestrarecetas: recetas [] = [];
muestraproductos: Products[] = [];
muestraplatos: platos[] = [];





              
           
                
  constructor(recetasService: RecetasService) { }

 
  ngOnInit(): void {
    this.getrecetas()
  }

  getrecetas()
  {
        this['recetasService'].getrecetas().subscribe((data:any) => {
          this.muestrarecetas = <any>data;
          console.log(this.muestrarecetas)
  
        })
    }

 
}
