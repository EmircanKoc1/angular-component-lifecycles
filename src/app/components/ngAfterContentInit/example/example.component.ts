import { AfterContentInit, Component } from '@angular/core';

@Component({
  selector: 'after-content-init-example',
  standalone: true,
  imports: [],
  templateUrl: './example.component.html',
  styleUrl: './example.component.scss'
})
export class ExampleComponent
  implements AfterContentInit {

  ngAfterContentInit(): void {
    console.log("The ngAfterContentInit function was executed");
  }

}
