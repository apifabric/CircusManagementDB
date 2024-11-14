import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerformerActAssociationHomeComponent } from './home/PerformerActAssociation-home.component';
import { PerformerActAssociationNewComponent } from './new/PerformerActAssociation-new.component';
import { PerformerActAssociationDetailComponent } from './detail/PerformerActAssociation-detail.component';

const routes: Routes = [
  {path: '', component: PerformerActAssociationHomeComponent},
  { path: 'new', component: PerformerActAssociationNewComponent },
  { path: ':id', component: PerformerActAssociationDetailComponent,
    data: {
      oPermission: {
        permissionId: 'PerformerActAssociation-detail-permissions'
      }
    }
  }
];

export const PERFORMERACTASSOCIATION_MODULE_DECLARATIONS = [
    PerformerActAssociationHomeComponent,
    PerformerActAssociationNewComponent,
    PerformerActAssociationDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerformerActAssociationRoutingModule { }