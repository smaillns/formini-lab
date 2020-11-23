import { Injectable } from '@angular/core';
import { Spot } from '../Models/Spot'

const defaultSpot: Spot = {
    id: 1,
    name: 'Ruines romaines',
    images: ['assets/tipaza.jpg'],
    evaluation: 5,
    province: 'Tipaza',
    country: 'Algérie'
}

const spots: Spot[] = []



@Injectable({
    providedIn: 'root'
})
export class SpotService{

    getSpotById(id: number){
        //always return the default value
        return defaultSpot;
    }


    getAllSpots(){
        return spots;
    }

}