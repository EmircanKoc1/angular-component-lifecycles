import { AfterContentChecked, Component } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent
  implements AfterContentChecked {
  ngAfterContentChecked(): void {
    console.log("The AfterContentChecked was executed");
  }

}
