

export interface postService {
  idService: number;
    Name_Service: string;
    Description_Service: string;
    Prix_du_service: number;
    
    image:Blob;
    
  //        <img *ngIf="serviceUpdate.image_du_service?.url" [src]="serviceUpdate.image_du_service.url" alt="">
  

    nbre_place: number;
    heure_depart: number;

}