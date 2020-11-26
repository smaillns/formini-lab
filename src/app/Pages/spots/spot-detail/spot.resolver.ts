import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { SpotService } from 'src/app/Shared/Services/spot.service';
import { Spot } from '../../../Shared/Models/Spot'



@Injectable({
    providedIn: 'root'
})
export class SpotResolver implements Resolve<Spot>{

    constructor(private spotService: SpotService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        return this.spotService.getById(1);
    }
}