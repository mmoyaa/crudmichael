import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';
import { AdminComponent } from './views/admin/admin.component';
import { CocinaComponent } from './views/cocina/cocina.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { LoginComponent } from './views/login/login.component';
import { MesasComponent } from './views/mantenedores/mesas/mesas.component';
import { OfertasComponent } from './views/mantenedores/ofertas/ofertas.component';
import { ProductosComponent } from './views/mantenedores/productos/productos.component';
import { ProveedoresComponent } from './views/mantenedores/proveedores/proveedores.component';
import { UsuariosComponent } from './views/mantenedores/usuarios/usuarios.component';
import { RecetasComponent } from './views/mantenedores/recetas/recetas.component';
import { PlatosComponent } from './views/mantenedores/platos/platos.component';
import { IngredientesComponent } from './views/mantenedores/recetas/ingredientes/ingredientes.component'

const appRoutes: Routes= [
    {path:'',component:LoginComponent},
    {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard]},
    {path:'admin',component:AdminComponent, canActivate:[AuthGuard,RoleGuard],data:{expectedRole:1}},
    {path:'cocina',component:CocinaComponent,canActivate:[AuthGuard]},
    {path:'usuarios',component:UsuariosComponent,canActivate:[AuthGuard]},
    {path:'productos',component:ProductosComponent,canActivate:[AuthGuard]},
    {path:'proveedores',component:ProveedoresComponent,canActivate:[AuthGuard]},
    {path:'mesas',component:MesasComponent,canActivate:[AuthGuard]},
    {path:'ofertas',component:OfertasComponent,canActivate:[AuthGuard]},
    {path:'recetas',component:RecetasComponent,canActivate:[AuthGuard]},
    {path:'platos',component:PlatosComponent,canActivate:[AuthGuard]},
    {path:'ingredientes',component:IngredientesComponent,canActivate:[AuthGuard]},
]   

export const appRoutingProviders:any [] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes)