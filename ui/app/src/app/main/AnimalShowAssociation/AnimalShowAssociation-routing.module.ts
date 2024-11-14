import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalShowAssociationHomeComponent } from './home/AnimalShowAssociation-home.component';
import { AnimalShowAssociationNewComponent } from './new/AnimalShowAssociation-new.component';
import { AnimalShowAssociationDetailComponent } from './detail/AnimalShowAssociation-detail.component';

const routes: Routes = [
  {path: '', component: AnimalShowAssociationHomeComponent},
  { path: 'new', component: AnimalShowAssociationNewComponent },
  { path: ':id', component: AnimalShowAssociationDetailComponent,
    data: {
      oPermission: {
        permissionId: 'AnimalShowAssociation-detail-permissions'
      }
    }
  }
];

export const ANIMALSHOWASSOCIATION_MODULE_DECLARATIONS = [
    AnimalShowAssociationHomeComponent,
    AnimalShowAssociationNewComponent,
    AnimalShowAssociationDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimalShowAssociationRoutingModule { }