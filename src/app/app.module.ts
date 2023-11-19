import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './angular-material/material/material.module';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './dashboard/home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CursoListaComponent } from './dashboard/curso/curso-lista/curso-lista.component';
import { CursoDetalleComponent } from './dashboard/curso/curso-detalle/curso-detalle.component';
import { ProductoListaComponent } from './dashboard/producto/producto-lista/producto-lista.component';
import { ProductoDetalleComponent } from './dashboard/producto/producto-detalle/producto-detalle.component';
import { CategoriaListaComponent } from './dashboard/categoria/categoria-lista/categoria-lista.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    PageNotFoundComponent,
    CursoListaComponent,
    CursoDetalleComponent,
    ProductoListaComponent,
    ProductoDetalleComponent,
    CategoriaListaComponent
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      {
        path: 'dashboard', component: DashboardComponent,
        children: [
          { path: 'home', component: HomeComponent },
          { path: 'curso', component: CursoListaComponent },
          { path: 'curso/:id', component: CursoDetalleComponent },
          { path: 'producto', component: ProductoListaComponent },
          { path: 'producto:/id', component: ProductoDetalleComponent },
          { path: 'categoria', component: CategoriaListaComponent }
        ]
      },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
