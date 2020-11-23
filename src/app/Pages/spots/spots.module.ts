import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpotDetailComponent } from './spot-detail/spot-detail.component';
import { SpotListComponent } from './spot-list/spot-list.component';
import { RouterModule } from '@angular/router';
import { routes } from './spots.routing';
import { SpotService } from 'src/app/Shared/Services/spot.service';


@NgModule({
  declarations: [SpotDetailComponent, SpotListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [SpotService]
})
export class SpotsModule { }
