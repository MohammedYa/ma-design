import { Component, OnInit } from '@angular/core';
declare var $ :any
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  ngOnInit(): void {
    let currnetLeft=-91;
    
    let Left=-230;


    $("#list").click(function(){
      $("#list").hide(1000);
      $("#sections").animate({"left":currnetLeft},1000);
     
    })
    $("#close").click(function(){  
      $("#sections").animate({"left":Left },1000);

      $("#list").show(1000);

    })

    $(window).resize(function() {
      let windowsize = $(window).width();
      if(windowsize>=390&&windowsize<750){
        $(".links").css({"left":Left });

       
      }
      else  if (windowsize >=991&&windowsize<=1200 ) {
          $(".links").css({"left":180 });

      }
      else  if (windowsize >=768&&windowsize<=990 ) {
          $(".links").css({"left":95 });

      }
      else  if (windowsize >=1201 ) {
        $(".links").css({"left":180 });

    }
   

        
        
      
     }); 


    
  }
}
