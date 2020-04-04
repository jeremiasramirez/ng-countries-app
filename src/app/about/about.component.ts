import { Component } from '@angular/core';
import { timer }from 'rxjs'
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent   {
  public spinner = {
    off: true
  }
  constructor() {
    timer(500).subscribe(timing=>this.spinner.off = false)
  }



}
