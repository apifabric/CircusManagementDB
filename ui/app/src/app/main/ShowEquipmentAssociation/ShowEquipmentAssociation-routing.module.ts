import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowEquipmentAssociationHomeComponent } from './home/ShowEquipmentAssociation-home.component';
import { ShowEquipmentAssociationNewComponent } from './new/ShowEquipmentAssociation-new.component';
import { ShowEquipmentAssociationDetailComponent } from './detail/ShowEquipmentAssociation-detail.component';

const routes: Routes = [
  {path: '', component: ShowEquipmentAssociationHomeComponent},
  { path: 'new', component: ShowEquipmentAssociationNewComponent },
  { path: ':id', component: ShowEquipmentAssociationDetailComponent,
    data: {
      oPermission: {
        permissionId: 'ShowEquipmentAssociation-detail-permissions'
      }
    }
  }
];

export const SHOWEQUIPMENTASSOCIATION_MODULE_DECLARATIONS = [
    ShowEquipmentAssociationHomeComponent,
    ShowEquipmentAssociationNewComponent,
    ShowEquipmentAssociationDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowEquipmentAssociationRoutingModule { }