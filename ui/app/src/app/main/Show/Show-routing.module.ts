import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowHomeComponent } from './home/Show-home.component';
import { ShowNewComponent } from './new/Show-new.component';
import { ShowDetailComponent } from './detail/Show-detail.component';

const routes: Routes = [
  {path: '', component: ShowHomeComponent},
  { path: 'new', component: ShowNewComponent },
  { path: ':id', component: ShowDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Show-detail-permissions'
      }
    }
  },{
    path: ':show_id/AnimalShowAssociation', loadChildren: () => import('../AnimalShowAssociation/AnimalShowAssociation.module').then(m => m.AnimalShowAssociationModule),
    data: {
        oPermission: {
            permissionId: 'AnimalShowAssociation-detail-permissions'
        }
    }
},{
    path: ':show_id/ShowEquipmentAssociation', loadChildren: () => import('../ShowEquipmentAssociation/ShowEquipmentAssociation.module').then(m => m.ShowEquipmentAssociationModule),
    data: {
        oPermission: {
            permissionId: 'ShowEquipmentAssociation-detail-permissions'
        }
    }
},{
    path: ':show_id/Ticket', loadChildren: () => import('../Ticket/Ticket.module').then(m => m.TicketModule),
    data: {
        oPermission: {
            permissionId: 'Ticket-detail-permissions'
        }
    }
}
];

export const SHOW_MODULE_DECLARATIONS = [
    ShowHomeComponent,
    ShowNewComponent,
    ShowDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowRoutingModule { }