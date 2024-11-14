import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalHomeComponent } from './home/Animal-home.component';
import { AnimalNewComponent } from './new/Animal-new.component';
import { AnimalDetailComponent } from './detail/Animal-detail.component';

const routes: Routes = [
  {path: '', component: AnimalHomeComponent},
  { path: 'new', component: AnimalNewComponent },
  { path: ':id', component: AnimalDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Animal-detail-permissions'
      }
    }
  },{
    path: ':animal_id/AnimalShowAssociation', loadChildren: () => import('../AnimalShowAssociation/AnimalShowAssociation.module').then(m => m.AnimalShowAssociationModule),
    data: {
        oPermission: {
            permissionId: 'AnimalShowAssociation-detail-permissions'
        }
    }
},{
    path: ':animal_id/CaretakerAnimalAssociation', loadChildren: () => import('../CaretakerAnimalAssociation/CaretakerAnimalAssociation.module').then(m => m.CaretakerAnimalAssociationModule),
    data: {
        oPermission: {
            permissionId: 'CaretakerAnimalAssociation-detail-permissions'
        }
    }
}
];

export const ANIMAL_MODULE_DECLARATIONS = [
    AnimalHomeComponent,
    AnimalNewComponent,
    AnimalDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimalRoutingModule { }