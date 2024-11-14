import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaretakerHomeComponent } from './home/Caretaker-home.component';
import { CaretakerNewComponent } from './new/Caretaker-new.component';
import { CaretakerDetailComponent } from './detail/Caretaker-detail.component';

const routes: Routes = [
  {path: '', component: CaretakerHomeComponent},
  { path: 'new', component: CaretakerNewComponent },
  { path: ':id', component: CaretakerDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Caretaker-detail-permissions'
      }
    }
  },{
    path: ':caretaker_id/CaretakerAnimalAssociation', loadChildren: () => import('../CaretakerAnimalAssociation/CaretakerAnimalAssociation.module').then(m => m.CaretakerAnimalAssociationModule),
    data: {
        oPermission: {
            permissionId: 'CaretakerAnimalAssociation-detail-permissions'
        }
    }
}
];

export const CARETAKER_MODULE_DECLARATIONS = [
    CaretakerHomeComponent,
    CaretakerNewComponent,
    CaretakerDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaretakerRoutingModule { }