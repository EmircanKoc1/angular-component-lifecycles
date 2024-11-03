import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'ng-after-view-init-example',
  standalone: true,
  imports: [],
  templateUrl: './example.component.html',
  styleUrl: './example.component.scss'
})
export class ExampleComponent
  implements AfterViewInit {
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2) { }

  @ViewChild("p", {
    static: true,
    read: ElementRef
  }) pElement!: ElementRef;

  ngAfterViewInit(): void {
    console.log("The ngAfterViewInit function was executed");
    this.renderer.setStyle(this.pElement.nativeElement, "backgroundColor", "red");
    this.renderer.setStyle(this.pElement.nativeElement, "color", "white");
  }

}
