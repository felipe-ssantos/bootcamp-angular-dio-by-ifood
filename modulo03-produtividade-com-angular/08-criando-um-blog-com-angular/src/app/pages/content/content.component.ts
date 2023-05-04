import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/data.fake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  /*
  Content populated dynamically
  by JSON 'dataFake'
  via "setValuesToComponents" function
  */
  photoCover: string = '';
  contentTitle: string = '';
  contentDescription: string ='';

  //Accept string and null
  private id: string | null = '0';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => (this.id = value.get('id')));

    this.setValuesToComponents(this.id)
  }

    //Function configure value in components. Argument is string or null.
  setValuesToComponents(id: string | null) {
    //capturing zero position in 'id' array
    const result = dataFake.filter((article) => article.id== id)[0];

    /* if it finds the result and
    it is different from empty,
    it collects the component's properties
    and passes it to the function. */
    this.contentTitle = result.title
    this.contentDescription = result.description
    this.photoCover = result.photoCover
  }

}
