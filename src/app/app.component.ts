import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExampleComponent as ngOnChangesExampleComponet } from './components/onChanges/example/example.component';
import { ExampleComponent as ngOnInitExampleComponent } from './components/ngOnInit/example/example.component';
import { ExampleComponent as ngDoCheckExampleComponent } from './components/ngDoCheck/example/example.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,
    ngOnChangesExampleComponet,
    ngOnInitExampleComponent,
    ngDoCheckExampleComponent
  ],
})
export class AppComponent {
  title = 'angular-component-lifecycles';
}
