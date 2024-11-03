import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExampleComponent as ngOnChangesExampleComponet } from './components/onChanges/example/example.component';
import { ExampleComponent as ngOnInitExampleComponent } from './components/ngOnInit/example/example.component';
import { ExampleComponent as ngDoCheckExampleComponent } from './components/ngDoCheck/example/example.component';
import { ExampleComponent as ngAfterContentInitExampleComponent } from "./components/ngAfterContentInit/example/example.component";
import { ParentComponent as AfterContentCheckedExample } from "./components/ngAfterContentChecked/parent/parent.component";
import { ExampleComponent as ngAfterViewInitExampleComponent } from './components/ngAfterViewInit/example/example.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,
    ngOnChangesExampleComponet,
    ngOnInitExampleComponent,
    ngDoCheckExampleComponent,
    ngAfterContentInitExampleComponent,
    AfterContentCheckedExample,
    ngAfterViewInitExampleComponent
  ],
})
export class AppComponent {
  title = 'angular-component-lifecycles';
}
