import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActHomeComponent } from './home/Act-home.component';
import { ActNewComponent } from './new/Act-new.component';
import { ActDetailComponent } from './detail/Act-detail.component';

const routes: Routes = [
  {path: '', component: ActHomeComponent},
  { path: 'new', component: ActNewComponent },
  { path: ':id', component: ActDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Act-detail-permissions'
      }
    }
  },{
    path: ':act_id/PerformerActAssociation', loadChildren: () => import('../PerformerActAssociation/PerformerActAssociation.module').then(m => m.PerformerActAssociationModule),
    data: {
        oPermission: {
            permissionId: 'PerformerActAssociation-detail-permissions'
        }
    }
}
];

export const ACT_MODULE_DECLARATIONS = [
    ActHomeComponent,
    ActNewComponent,
    ActDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActRoutingModule { }