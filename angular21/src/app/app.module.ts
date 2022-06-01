import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { appRoutingProviders, routing } from  './app.routing';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './views/admin/admin.component';
import { CocinaComponent } from './views/cocina/cocina.component';
import { NavbarComponent } from './views/navbar/navbar.component';
import { UsuariosComponent } from './views/mantenedores/usuarios/usuarios.component';
import { ProductosComponent } from './views/mantenedores/productos/productos.component';
import { ModalComponent } from './views/common/modal/modal.component';
import { ProveedoresComponent } from './views/mantenedores/proveedores/proveedores.component';
import { MesasComponent } from './views/mantenedores/mesas/mesas.component';
import { OfertasComponent } from './views/mantenedores/ofertas/ofertas.component';
import { RecetasComponent } from './views/mantenedores/recetas/recetas.component';
import { BuscarComponent } from './views/buscar/buscar.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PlatosComponent } from './views/mantenedores/platos/platos.component';
import { IngredientesComponent } from './views/mantenedores/recetas/ingredientes/ingredientes.component';
import { RecetaproductoComponent } from './views/mantenedores/recetaproducto/recetaproducto.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AdminComponent,
    CocinaComponent,
    NavbarComponent,
    UsuariosComponent,
    ProductosComponent,
    ModalComponent,
    ProveedoresComponent,
    MesasComponent,
    OfertasComponent,
    RecetasComponent,
    BuscarComponent,
    PlatosComponent,
    IngredientesComponent,
    RecetaproductoComponent,
    
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule
    
  ],
  providers: [appRoutingProviders,
  JwtHelperService,
  {provide:JWT_OPTIONS,useValue:JWT_OPTIONS}],
  bootstrap: [AppComponent]
})
export class AppModule { }
