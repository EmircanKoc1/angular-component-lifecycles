import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExampleComponent as ngOnChangesExampleComponet } from './components/onChanges/example/example.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,
    ngOnChangesExampleComponet
  ],
})
export class AppComponent {
  title = 'angular-component-lifecycles';
}
