import { Component, OnInit } from '@angular/core';
declare var $ :any
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
ngOnInit(): void {
  $(".Msg").hover(function () {
    $("#sendMsg").toggleClass("fa-paper-plane");
    $("#sendMsg").toggleClass("fa-brands fa-whatsapp ");
}); 
}
}
