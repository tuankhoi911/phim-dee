import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './client.component';

const routes: Routes = [
    {
        path: '',
        component: ClientComponent,
        children: [
            {
                path: '',
                loadChildren: "../../routes/home/home.module#HomeModule"
            },
            // {
            //     path: 'about-me',
            //     loadChildren: "../../routes/about-me/about-me.module#AboutMeModule"
            // },
            // {
            //     path: 'place',
            //     loadChildren: "../../routes/place/place.module#PlaceModule"
            // }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClientRoutingModule { }
