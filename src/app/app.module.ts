import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{RouterModule,Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './admin/login/login.component';
import { LoginClientComponent } from './client/login-client/login-client.component';
import { LoginFactoryComponent } from './factory/login-factory/login-factory.component';
import { LoginDestrComponent } from './destri/login-destr/login-destr.component';
import { RegisterClientComponent } from './client/register-client/register-client.component';
import { RegisterFactoryComponent } from './factory/register-factory/register-factory.component';
import { PageClientComponent } from './client/page-client/page-client.component';
import { ConntactComponent } from './client/conntact/conntact.component';
import { DetailComponent } from './client/detail/detail.component';
import { CommComponent } from './client/comm/comm.component';
import { CommendeComponent } from './client/commende/commende.component';
import { GategorieComponent } from './client/gategorie/gategorie.component';
import { PageAdminComponent } from './admin/page-admin/page-admin.component';
import {  AjouterFactoryComponent } from './admin/factory/ajouter-factory.component';
import { AjouterDistrComponent } from './admin/DIST/ajouter-distr.component';
import { ModifierAdminComponent } from './admin/modifier-admin/modifier-admin.component';
import { AjouterProduitComponent } from './admin/produit/ajouter-produit.component';
import { SuppProduitComponent } from './admin/acceptecommende/supp-produit.component';
import { ProfilComponent } from './client/profil/profil.component';
import { PageDestComponent } from './destri/page-dest/page-dest.component';
import { TestComponent } from './test/test.component';
import { PageFactoryComponent } from './factory/page-factory/page-factory.component';
import { SuppFactoryComponent } from './factory/supp-factory/supp-factory.component';
import { PiemantComponent } from './client/piemant/piemant.component';
import { ThanksComponent } from './client/thanks/thanks.component';
import{HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
//import { TestComponent } from './test/test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeletComponent } from './Dist/delet/delet.component';

import{MatButtonModule} from '@angular/material/button';
import{MatDividerModule} from '@angular/material/divider';
import{MatSelectModule} from '@angular/material/select';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule} from '@angular/material/form-field';
import{ MatInputModule} from '@angular/material/input';
 import { AuthInterceptorService } from './_services/auth-interceptor.service';
import { SingninComponent } from './singnin/singnin.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
const appRoutes:Routes=[
 {
  path:'',component:TestComponent},
  { path:'',component:TestComponent},
   {path:'page/client/:id',component:PageClientComponent
 }]

@NgModule({
  declarations: [
   
    AppComponent,
    LoginComponent,
    LoginClientComponent,
    LoginFactoryComponent,
    LoginDestrComponent,
    RegisterClientComponent,
    RegisterFactoryComponent,
    PageClientComponent,
    ConntactComponent,
    DetailComponent,
    CommComponent,
    CommendeComponent,
    GategorieComponent,
    PageAdminComponent,
    AjouterFactoryComponent,
    AjouterDistrComponent,

    ModifierAdminComponent,
    AjouterProduitComponent,
    SuppProduitComponent,
    ProfilComponent,
    PageDestComponent,
    TestComponent,
    PageFactoryComponent,
    SuppFactoryComponent,
    PiemantComponent,
    ThanksComponent,
    NavbarComponent,
    DeletComponent,
    SingninComponent,
   
   
    
  ],
  imports: [
   
    Ng2SearchPipeModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
   ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    MatButtonModule,
    MatDividerModule,
    MatSelectModule,
    BrowserAnimationsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
   AppRoutingModule,
  ],
  exports: [MatFormFieldModule, MatInputModule, MatSelectModule],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
