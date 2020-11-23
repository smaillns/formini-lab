import { Routes } from '@angular/router';
import { SpotDetailComponent } from './spot-detail/spot-detail.component';
import { SpotResolver } from './spot-detail/spot.resolver';
import { SpotListComponent } from './spot-list/spot-list.component';


export const routes: Routes = [
    {path: 'category/:name/:id', component: SpotListComponent},
    {
        path: 'show/:id', 
        component: SpotDetailComponent,
        resolve: {detail: SpotResolver} 
    }
]
