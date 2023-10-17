import { Component } from '@angular/core';
import { GetApiService } from './get-api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular-project';
  constructor(private api: GetApiService) {

  }
  // ngOnInit() {
  //   this.api.apiCall().subscribe((data) => {
  //     console.warn("get api data", data);
  //     this.title = data['title']
  //   })
  // }

  newFunc() {
    console.log('click');
    this.api.apiCall().subscribe((data) => {
      // console.warn(data['data'][0]['country']);
      // this.title = data['title']
      let countryName = data['data']
      countryName.map((value:any) => {
        console.log(value.country)
      } )
    })
  }
}
