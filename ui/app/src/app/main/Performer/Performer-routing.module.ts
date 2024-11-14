import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerformerHomeComponent } from './home/Performer-home.component';
import { PerformerNewComponent } from './new/Performer-new.component';
import { PerformerDetailComponent } from './detail/Performer-detail.component';

const routes: Routes = [
  {path: '', component: PerformerHomeComponent},
  { path: 'new', component: PerformerNewComponent },
  { path: ':id', component: PerformerDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Performer-detail-permissions'
      }
    }
  },{
    path: ':performer_id/PerformerActAssociation', loadChildren: () => import('../PerformerActAssociation/PerformerActAssociation.module').then(m => m.PerformerActAssociationModule),
    data: {
        oPermission: {
            permissionId: 'PerformerActAssociation-detail-permissions'
        }
    }
}
];

export const PERFORMER_MODULE_DECLARATIONS = [
    PerformerHomeComponent,
    PerformerNewComponent,
    PerformerDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerformerRoutingModule { }