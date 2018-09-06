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

  title: string = this.activatedRoute.snapshot.params.CatID;
  imageURL: string;
  //preData:any;
  postData:any;
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
    //this.DetailL.iteminCategory(this.activatedRoute.snapshot.params.CatID)
      .subscribe( (data:any) =>{ 
       this.postData = data;//.results[+this.activatedRoute.snapshot.params.detailID-1];
        //console.log(data.results);
    },
    /*
    () => {
      console.log(this.preData);
      this.preData.forEach((x) => {
        
      console.log(x);
      });
    }*/
    );
    
  }

  
  goBack(){
    console.log(this.activatedRoute.snapshot)
    this.router.navigate(['/item',this.activatedRoute.snapshot.params.CatID]);
  }


}
