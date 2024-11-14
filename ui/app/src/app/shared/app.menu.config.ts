import { MenuRootItem } from 'ontimize-web-ngx';

import { ActCardComponent } from './Act-card/Act-card.component';

import { AnimalCardComponent } from './Animal-card/Animal-card.component';

import { AnimalShowAssociationCardComponent } from './AnimalShowAssociation-card/AnimalShowAssociation-card.component';

import { CaretakerCardComponent } from './Caretaker-card/Caretaker-card.component';

import { CaretakerAnimalAssociationCardComponent } from './CaretakerAnimalAssociation-card/CaretakerAnimalAssociation-card.component';

import { CircuCardComponent } from './Circu-card/Circu-card.component';

import { EquipmentCardComponent } from './Equipment-card/Equipment-card.component';

import { PerformerCardComponent } from './Performer-card/Performer-card.component';

import { PerformerActAssociationCardComponent } from './PerformerActAssociation-card/PerformerActAssociation-card.component';

import { ShowCardComponent } from './Show-card/Show-card.component';

import { ShowEquipmentAssociationCardComponent } from './ShowEquipmentAssociation-card/ShowEquipmentAssociation-card.component';

import { TicketCardComponent } from './Ticket-card/Ticket-card.component';


export const MENU_CONFIG: MenuRootItem[] = [
    { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
    
    {
    id: 'data', name: ' data', icon: 'remove_red_eye', opened: true,
    items: [
    
        { id: 'Act', name: 'ACT', icon: 'view_list', route: '/main/Act' }
    
        ,{ id: 'Animal', name: 'ANIMAL', icon: 'view_list', route: '/main/Animal' }
    
        ,{ id: 'AnimalShowAssociation', name: 'ANIMALSHOWASSOCIATION', icon: 'view_list', route: '/main/AnimalShowAssociation' }
    
        ,{ id: 'Caretaker', name: 'CARETAKER', icon: 'view_list', route: '/main/Caretaker' }
    
        ,{ id: 'CaretakerAnimalAssociation', name: 'CARETAKERANIMALASSOCIATION', icon: 'view_list', route: '/main/CaretakerAnimalAssociation' }
    
        ,{ id: 'Circu', name: 'CIRCU', icon: 'view_list', route: '/main/Circu' }
    
        ,{ id: 'Equipment', name: 'EQUIPMENT', icon: 'view_list', route: '/main/Equipment' }
    
        ,{ id: 'Performer', name: 'PERFORMER', icon: 'view_list', route: '/main/Performer' }
    
        ,{ id: 'PerformerActAssociation', name: 'PERFORMERACTASSOCIATION', icon: 'view_list', route: '/main/PerformerActAssociation' }
    
        ,{ id: 'Show', name: 'SHOW', icon: 'view_list', route: '/main/Show' }
    
        ,{ id: 'ShowEquipmentAssociation', name: 'SHOWEQUIPMENTASSOCIATION', icon: 'view_list', route: '/main/ShowEquipmentAssociation' }
    
        ,{ id: 'Ticket', name: 'TICKET', icon: 'view_list', route: '/main/Ticket' }
    
    ] 
},
    
    { id: 'settings', name: 'Settings', icon: 'settings', route: '/main/settings'}
    ,{ id: 'about', name: 'About', icon: 'info', route: '/main/about'}
    ,{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [

    ActCardComponent

    ,AnimalCardComponent

    ,AnimalShowAssociationCardComponent

    ,CaretakerCardComponent

    ,CaretakerAnimalAssociationCardComponent

    ,CircuCardComponent

    ,EquipmentCardComponent

    ,PerformerCardComponent

    ,PerformerActAssociationCardComponent

    ,ShowCardComponent

    ,ShowEquipmentAssociationCardComponent

    ,TicketCardComponent

];