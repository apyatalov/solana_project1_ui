import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';



@Injectable({ providedIn: 'root' })
export class SolanaService {
    constructor(
        private router: Router,
        private http: HttpClient
    ) {
    }

    test(): any {
        return this.http.get(`https://www.google.com`);
    }


}
