import { NgModule, ViewChildren } from '@angular/core';
import { TestComponentRenderer } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';
import { AjouterDistrComponent } from './admin/DIST/ajouter-distr.component';
import {  AjouterFactoryComponent} from './admin/factory/ajouter-factory.component';
import { AjouterProduitComponent } from './admin/produit/ajouter-produit.component';
import { LoginComponent } from './admin/login/login.component';
import { ModifierAdminComponent } from './admin/modifier-admin/modifier-admin.component';
import { PageAdminComponent } from './admin/page-admin/page-admin.component';
import { SuppProduitComponent } from './admin/acceptecommende/supp-produit.component';
import { CommComponent } from './client/comm/comm.component';
import { CommendeComponent } from './client/commende/commende.component';
import { ConntactComponent } from './client/conntact/conntact.component';
import { DetailComponent } from './client/detail/detail.component';
import { GategorieComponent } from './client/gategorie/gategorie.component';
import { LoginClientComponent } from './client/login-client/login-client.component';
import { PageClientComponent } from './client/page-client/page-client.component';
import { RegisterClientComponent } from './client/register-client/register-client.component';
import { LoginDestrComponent } from './destri/login-destr/login-destr.component';
import { PageDestComponent } from './destri/page-dest/page-dest.component';
import { LoginFactoryComponent } from './factory/login-factory/login-factory.component';
import { RegisterFactoryComponent } from './factory/register-factory/register-factory.component';
import { TestComponent } from './test/test.component';
import { PageFactoryComponent } from './factory/page-factory/page-factory.component';
import { SuppFactoryComponent } from './factory/supp-factory/supp-factory.component';
import { PiemantComponent } from './client/piemant/piemant.component';
import { ThanksComponent } from './client/thanks/thanks.component';
import { ProfilComponent } from './client/profil/profil.component';
import { DeletComponent } from './admin/DIST/delet/delet.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ChComponent } from './test/ch/ch.component';
import { CommendeComponents } from './admin/commende/commende.component';

const routes: Routes = [
  { path: 'login/admin', component: LoginComponent },
  { path: 'login/client', component: LoginClientComponent },
  { path: 'login/factory', component: LoginFactoryComponent },
  { path: 'login/dist', component: LoginDestrComponent },
  { path: 'register/client', component: RegisterClientComponent },
  { path: 'register/factory/:id', component: RegisterFactoryComponent },
  { path: 'page/client', component: PageClientComponent },
  { path: 'conn/client', component: ConntactComponent },
  { path: 'client/detail/:id', component: DetailComponent },
  { path: 'comm', component: CommComponent },
  { path: 'client/panier', component: CommendeComponent },
  { path: 'client/gategorie/:id', component: GategorieComponent },
  { path: 'admin/page', component: PageAdminComponent },
  { path: 'admin/ajouterfactory', component:  AjouterFactoryComponent},
  { path: 'admin/ajouterdist', component:  AjouterDistrComponent},
 
  { path: 'admin/modadmin', component:  ModifierAdminComponent},
  { path: 'admin/ajouterproduit', component:  AjouterProduitComponent},
  { path: 'admin/commande', component:  SuppProduitComponent},
  { path: 'dest/page', component:  PageDestComponent},
  { path: 'comm', component:  CommComponent},
  { path: 'test', component:  TestComponent},
  { path: 'factory_page', component:  PageFactoryComponent},
  { path: 'factory_supp', component:  SuppFactoryComponent},
  { path: 'client/piement', component:  PiemantComponent},
  { path: 'client/Ok{id}', component:  ThanksComponent},
  { path: 'hh', component:  ProfilComponent},
  { path: 'admin/Gategorie', component:  DeletComponent},
  { path: 'ddd', component:  NavbarComponent},
  { path: 'mm', component:  ChComponent},
  { path: 'm2', component:  DeletComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
