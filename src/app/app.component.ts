import { Component,Input,OnInit} from '@angular/core';
import { PostService } from './_services/post.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  posts:any;
  service: any;
  
 
 
  

  constructor() { }
  ngOnInit(): void {
    this.service.getPosts()
        .subscribe((response: any) => {
          this.posts = response;
        });

    
    
}
}
