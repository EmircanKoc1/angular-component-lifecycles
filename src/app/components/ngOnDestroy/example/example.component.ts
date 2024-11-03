import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'ng-on-destroy-example',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './example.component.html',
  styleUrl: './example.component.scss'
})
export class ExampleComponent {
  
  isActiveChildComponent: boolean = true;

  destroyChildComponent() {
    console.log("destroyChildComponent method was executed ");

    this.isActiveChildComponent = !this.isActiveChildComponent;
  }

}
