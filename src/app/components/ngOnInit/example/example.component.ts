import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'on-init-example',
  standalone: true,
  imports: [],
  templateUrl: './example.component.html',
  styleUrl: './example.component.scss'
})
export class ExampleComponent
  implements OnInit {

  message!: string;

  ngOnInit(): void {
    console.log("The ngOnInit function was executed.");
    this.message = "First Value";
  }

}
