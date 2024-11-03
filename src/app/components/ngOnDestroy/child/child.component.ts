import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent
  implements OnDestroy {
  ngOnDestroy(): void {
    console.log("ngOnDestroy method was executed");
  }

}
