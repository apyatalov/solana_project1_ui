import {Component, OnInit} from '@angular/core';
import {SolanaService} from "../../services/solana";

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {

    constructor(private solanaService: SolanaService) {
    }

    ngOnInit(): void {
        // @ts-ignore
        this.solanaService.test().subscribe(x => {
            console.log(x);
        })
    }

}
