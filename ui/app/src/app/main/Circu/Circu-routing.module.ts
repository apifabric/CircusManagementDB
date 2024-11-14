import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CircuHomeComponent } from './home/Circu-home.component';
import { CircuNewComponent } from './new/Circu-new.component';
import { CircuDetailComponent } from './detail/Circu-detail.component';

const routes: Routes = [
  {path: '', component: CircuHomeComponent},
  { path: 'new', component: CircuNewComponent },
  { path: ':id', component: CircuDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Circu-detail-permissions'
      }
    }
  },{
    path: ':circus_id/Show', loadChildren: () => import('../Show/Show.module').then(m => m.ShowModule),
    data: {
        oPermission: {
            permissionId: 'Show-detail-permissions'
        }
    }
}
];

export const CIRCU_MODULE_DECLARATIONS = [
    CircuHomeComponent,
    CircuNewComponent,
    CircuDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CircuRoutingModule { }