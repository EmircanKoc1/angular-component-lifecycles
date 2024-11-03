import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'on-changes-example',
  standalone: true,
  imports: [],
  templateUrl: './example.component.html',
  styleUrl: './example.component.scss'
})
export class ExampleComponent
  implements OnChanges {

  @Input() data!: string;
  message?: string;

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnchanges function executed");
    console.log(changes);
    this.message = this.data ?? "data not entered";
    

  }

}
