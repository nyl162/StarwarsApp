import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { SwapiRequestService } from '../services/swapi-request.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  detail : any;
  title: string = this.activatedRoute.snapshot.params.CatID;
  imageURL: string;
  preURL:string;
  constructor( private DetailL: SwapiRequestService, private activatedRoute:ActivatedRoute, private router: Router ) { }

  ngOnInit() {
    console.log(this.activatedRoute.snapshot.params.CatID);
    if(this.activatedRoute.snapshot.params.CatID == "people"){
      this.preURL = "characters"
    }else{
      this.preURL = this.activatedRoute.snapshot.params.CatID
    }
    this.imageURL = `https://starwars-visualguide.com/assets/img/${this.preURL}/${this.activatedRoute.snapshot.params.detailID}.jpg`;
    this.DetailL.detailsinItem(this.activatedRoute.snapshot.params.CatID,this.activatedRoute.snapshot.params.detailID)
      .subscribe( (data:any) =>{ 






        //this.detail = data;
    });
    
  }

  
  goBack(){
    console.log(this.activatedRoute.snapshot)
    this.router.navigate(['/item',this.activatedRoute.snapshot.params.CatID]);
  }


}
