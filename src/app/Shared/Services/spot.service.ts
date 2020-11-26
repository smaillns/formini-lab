import { Injectable, Inject } from '@angular/core';
import { Spot } from '../Models/Spot'
import { AbstractService } from './abstract-service.service';
import { HttpClient } from '@angular/common/http';
import {APP_CONFIG, AppConfig} from '../config';


@Injectable({
    providedIn: 'root'
})
export class SpotService extends AbstractService<Spot, number>{

    url: string;

    constructor(http: HttpClient, @Inject(APP_CONFIG) config: AppConfig) {
        super(http);
        this.url = config.apiEndpoint.concat('/spots');
    }

}