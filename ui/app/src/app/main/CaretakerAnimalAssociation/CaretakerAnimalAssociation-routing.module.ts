import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaretakerAnimalAssociationHomeComponent } from './home/CaretakerAnimalAssociation-home.component';
import { CaretakerAnimalAssociationNewComponent } from './new/CaretakerAnimalAssociation-new.component';
import { CaretakerAnimalAssociationDetailComponent } from './detail/CaretakerAnimalAssociation-detail.component';

const routes: Routes = [
  {path: '', component: CaretakerAnimalAssociationHomeComponent},
  { path: 'new', component: CaretakerAnimalAssociationNewComponent },
  { path: ':id', component: CaretakerAnimalAssociationDetailComponent,
    data: {
      oPermission: {
        permissionId: 'CaretakerAnimalAssociation-detail-permissions'
      }
    }
  }
];

export const CARETAKERANIMALASSOCIATION_MODULE_DECLARATIONS = [
    CaretakerAnimalAssociationHomeComponent,
    CaretakerAnimalAssociationNewComponent,
    CaretakerAnimalAssociationDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaretakerAnimalAssociationRoutingModule { }