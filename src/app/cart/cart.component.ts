import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  id!: any;

  cTh1!:string;
  cTh2!:string;
  cTh3!:string;
  cTh4!:string;
  cBtn1!:string;
  cBtn2!:string;
  cBtn3!:string;
  h1!:string;
  h5!:string;
  h501!:string;

  constructor(private activatedRoute: ActivatedRoute,) { }
  ngOnInit(): void {

    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    this.cTh1 = "Produit";
    this.cTh2 = "Prix";
    this.cTh3 = "Quantité";
    this.cTh4 = "Sous-Total";
    this.cBtn1 = "Appliquer le code Promo";
    this.cBtn2 = "Mettre à jour le Panier";
    this.cBtn3 = "Valider la commande";
    this.h1 = "Total Panier";
    this.h5 = "Sous-Total";
    this.h501 = "Total";
  }

}
