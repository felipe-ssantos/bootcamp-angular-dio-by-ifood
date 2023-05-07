import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  //http://localhost:4200/portfolio/{1}
  constructor(
    private activeRoute: ActivatedRoute,
    private navegador: Router
    ) {
    this.activeRoute.params.subscribe(
      res => console.log(res)
    )

    this.activeRoute.firstChild?.params.subscribe(
      res => console.log(res)
    )

    //http://localhost:4200/portfolio/1?{name=fulano&token=123}
    this.activeRoute.queryParams.subscribe(
      res =>console.log(res)
    )
  }

  ngOnInit(): void {
    // setInterval(()=>{
    //   this.navegador.navigate(['/'])
    // }, 5000)
  }

}
