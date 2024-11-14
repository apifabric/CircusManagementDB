import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
      
    
        { path: 'Act', loadChildren: () => import('./Act/Act.module').then(m => m.ActModule) },
    
        { path: 'Animal', loadChildren: () => import('./Animal/Animal.module').then(m => m.AnimalModule) },
    
        { path: 'AnimalShowAssociation', loadChildren: () => import('./AnimalShowAssociation/AnimalShowAssociation.module').then(m => m.AnimalShowAssociationModule) },
    
        { path: 'Caretaker', loadChildren: () => import('./Caretaker/Caretaker.module').then(m => m.CaretakerModule) },
    
        { path: 'CaretakerAnimalAssociation', loadChildren: () => import('./CaretakerAnimalAssociation/CaretakerAnimalAssociation.module').then(m => m.CaretakerAnimalAssociationModule) },
    
        { path: 'Circu', loadChildren: () => import('./Circu/Circu.module').then(m => m.CircuModule) },
    
        { path: 'Equipment', loadChildren: () => import('./Equipment/Equipment.module').then(m => m.EquipmentModule) },
    
        { path: 'Performer', loadChildren: () => import('./Performer/Performer.module').then(m => m.PerformerModule) },
    
        { path: 'PerformerActAssociation', loadChildren: () => import('./PerformerActAssociation/PerformerActAssociation.module').then(m => m.PerformerActAssociationModule) },
    
        { path: 'Show', loadChildren: () => import('./Show/Show.module').then(m => m.ShowModule) },
    
        { path: 'ShowEquipmentAssociation', loadChildren: () => import('./ShowEquipmentAssociation/ShowEquipmentAssociation.module').then(m => m.ShowEquipmentAssociationModule) },
    
        { path: 'Ticket', loadChildren: () => import('./Ticket/Ticket.module').then(m => m.TicketModule) },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }