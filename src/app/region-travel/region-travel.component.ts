import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-region-travel',
  templateUrl: './region-travel.component.html',
  styleUrls: ['./region-travel.component.scss']
})
export class RegionTravelComponent implements OnInit {
  /* Region travel */
  th!: string;
  th2!: string;
  th3!: string;
  th4!: string;
  th5!: string;
  th6!: string;
  td1!: string;
  td2!: string;
  td3!: string;
  td4!: string;
  td5!: string;
  td6!: string;
  td7!: string;
  td8!: string;
  td9!: string;
  td10!: string; td11!: string; td12!: string; td13!: string;
  td15!: string; td16!: string; td17!: string;

  td20!: string;
  td22!: string; td23!: string; td24!: string; td25!: string; td26!: string;

  td29!: string; td30!: string; td31!: string;



  td36!: string;
  td38!: string;



  td43!: string;





  td50!: string;


  td54!: string;

  td57!: string; td58!: string; td59!: string;
  td61!: string; td62!: string;
  td64!: string; td65!: string;


  td69!: string;
  td71!: string; td72!: string; td73!: string;
  td75!: string; td76!: string;
  td78!: string;
  td80!: string;

  td83!: string;
  td85!: string;
  td87!: string;



  td92!: string;
  td94!: string;



  td99!: string;

  td102!: string;
  td103!: string;


  td106!: string;

  td108!: string;

  td110!: string;


  td113!: string;

  td116!: string;




  td120!: string;

  td122!: string;

  td124!: string;


  td127!: string;






  td134!: string;
  td135!: string;
  td136!: string;
  td137!: string;
  td138!: string;
  td139!: string;

  td141!: string;

  td143!: string;




  td148!: string;



  td152!: string;


  td155!: string;


  td158!: string;



  td162!: string;
  td163!: string;


  td166!: string;



  td170!: string;






  td177!: string;
  td178!: string;


  td181!: string;
  td182!: string;

  td184!: string;
  td185!: string;

  td187!: string;
  td188!: string;


  td191!: string;
  td192!: string;

  td194!: string;
  td195!: string;


  td198!: string;
  td199!: string;

  td201!: string;

  td203!: string;






  ngOnInit(): void {
    this.th = "Destination";
    this.th2 = "Lieu de départ";
    this.th3 = "Tarif";
    this.th4 = "Fréquence";
    this.th5 = "Heure de départ";
    this.th6 = "Contact";

    this.td1 = "Bakel";
    this.td2 = "stade Léopold Sédar Senghor";
    this.td3 = "10 000 FCFA";
    this.td4 = "Tous les jours";
    this.td5 = "15h";
    this.td6 = "77 777 15 53 - Niokolo Transport";
    this.td7 = "Acheter";

    this.td8 = "Banjul (Gambie)";
    this.td9 = "Terminus Dakar Dem Dikk des Parcelles Assainies	";
    this.td10 = "8 000 FCFA	";
    this.td11 = "Tous les lundis, mercredis et vendredis";
    this.td12 = "7h";
    this.td13 = "77 761 10 67";


    this.td15 = "Dagana";
    this.td16 = "Terminus Liberté 6";
    this.td17 = "7 000 FCFA	";


    this.td20 = "78 589 70 48 - Sénégal Dem Dikk";
    this.td22 = "Dahra";
    this.td23 = "Terminus Liberté 5";
    this.td24 = "5 000 FCFA";
    this.td25 = "Tous les jours";
    this.td26 = "8h";
    this.td29 = "Diaobé";
    this.td30 = "Terminus Liberté 5";
    this.td31 = "9 000 FCFA";
    this.td36 = "Diourbel";
    this.td38 = "3 000 FCFA";
    this.td43 = "Fatick";
    this.td50 = "Joal";
    this.td54 = "00h";
    this.td57 = "Kaolack";
    this.td58 = "HLM Grand Yoff";
    this.td59 = "2 000 F CFA	",
    this.td61 = "11h";
    this.td62 = "77 668 68 73	";
    this.td64 = "Kayar";
    this.td65 = "Beaux Maraîchers";



    this.td69 = "77 519 71 41 - Seyoon Transport";


    this.td71 = "Kédougou";
    this.td72 = "Rond-point Sipres VDN";
    this.td73 = "14 000 FCFA";

    this.td75 = "16h";
    this.td76 = "Salam Transports 77 874 81 38";


    this.td78 = "Kolda";

    this.td80 = "9 000 FCFA	";


    this.td83 = "776378266 et 776378267";
    this.td85 = "Linguère";

    this.td87 = "3 500 FCFA";
    this.td92 = "Louga";

    this.td94 = "2 500 FCFA	";
    this.td99 = "Matam";
    this.td102 = "Tous les mercredis";
    this.td103 = "6h";

    this.td106 = "Mbour";

    this.td108 = "1 000 FCFA	";

    this.td11 = "9h";
    this.td113 = "Mbacké";
    this.td116 = "Tous les jeudis et samedis";
    this.td120 = "Mécké";
    this.td122 = "1 500 FCFA";
    this.td124 = "9h";
    this.td127 = "Ndangane";
    this.td134 = "Ourossogui";
    this.td135 = "Croisement Cambérène";
    this.td136 = "8 000 FCFA";
    this.td137 = "Mercredi, Vendredi, Dimanche";
    this.td138 = "16h";
    this.td139 = "77 535 10 95 – 77 023 39 39 - Niokoloko transports";
    this.td141 = "Podor";
    this.td143 = "6 000 FCFA";
    this.td148 = "Richard-Toll";
    this.td152 = "7h";
    this.td155 = "Rosso";
    this.td158 = "Tous les mercredis et vendredis";
    this.td162 = "Saint-Louis";
    this.td163 = "Rond-point Liberté 6, Arrêt clando voie immeuble Ferdinand Coly";
    this.td166 = "8h 30";
    this.td170 = "Thiès";
    this.td177 = "Tambacounda";
    this.td178 = "Centenaire derrière la DHS";
    this.td181 = "15h";
    this.td182 = "77 777 15 53 Niokoloko Transport";
    this.td184 = "Tivaouane";
    this.td185 = "Liberté 5";
    this.td187 = "Du lundi au samedi";
    this.td188 = "15 h – 17h";
    this.td191 = "Touba";
    this.td192 = "Rond-Point SIPRES";
    this.td194 = "Tous les jours sauf le mercredi";
    this.td195 = "16h";
    this.td198 = "Ziguinchor";
    this.td199 = "Central Park (Avenue Malick Sy), Tilene central";
    this.td201 = "Tous les mardis et vendredis";
    this.td203 = "776378266 , 776378267 Cap Skirring voyage";



  }

}
