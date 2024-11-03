import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'do-check-example',
  standalone: true,
  imports: [],
  templateUrl: './example.component.html',
  styleUrl: './example.component.scss'
})
export class ExampleComponent
  implements DoCheck {
 
  number: number = 0;

  incrementNumber() {
    this.number++;
  }

  ngDoCheck(): void {
    console.log(this.number);
  }

}
