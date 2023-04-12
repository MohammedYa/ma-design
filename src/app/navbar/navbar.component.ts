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
    let windowsize = $(window).width();



if (windowsize >390 &&windowsize<768) {
  $("#list").click(function(){
      $("#list").hide(1000);
      $("#sections").animate({"left":currnetLeft},1000);

    })
    $("#sections").click(function(){
      $("#list").show(1000);
      $(".links").animate({"left":Left },1000);

    })
}

    
  }
}
