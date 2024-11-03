import { AfterViewChecked, AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'ng-after-view-checked-example',
  standalone: true,
  imports: [],
  templateUrl: './example.component.html',
  styleUrl: './example.component.scss'
})
export class ExampleComponent
  implements AfterViewChecked ,AfterViewInit {
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit method was executed");
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked method was executed");

  }
  number: number = 0;

  incrementNumber() {
    this.number++;
  }

}
