import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { SwapiRequestService } from '../services/swapi-request.service';

@Component({
  selector: 'app-item-in-category',
  templateUrl: './item-in-category.component.html',
  styleUrls: ['./item-in-category.component.css']
})
export class ItemInCategoryComponent implements OnInit {

  itemList : string[] = [];

  constructor( private ItemL: SwapiRequestService, private activatedRoute:ActivatedRoute, private router: Router ) { }

  ngOnInit() {
    console.log(this.activatedRoute.snapshot.params.CategoryID);
    //console.log(this.activatedRoute.snapshot.url[0].path);
    this.ItemL.iteminCategory(this.activatedRoute.snapshot.params.CategoryID)
      .subscribe( (data:any) =>{ 
      data.results.forEach((item) => { 
       // this.CategoryList[index].url = item;
       ////////let temp: CategoryI = {category: item , url: item};
      // let temp:string = item;
       if(this.activatedRoute.snapshot.params.CategoryID ==="films") {
       this.itemList.push(item.title);
      }else{
       this.itemList.push(item.name);
      }
       //console.log(this.itemList[this.itemList.length=1])
       // this.CategoryList[index].category = item;
        
      });
    })
    //console.log(this.itemList);
  }

  selectedItem(dest){
    this.router.navigate(['/details',this.activatedRoute.snapshot.params.CategoryID, dest+1,]);//{source:this.activatedRoute.snapshot.params.CategoryID,dest: dest}]);
    console.log(dest+1);
  }

  goBack(){
    this.router.navigate(['/']);
  }

}
