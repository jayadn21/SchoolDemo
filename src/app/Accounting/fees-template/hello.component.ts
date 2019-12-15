import { Component, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'hello',
  template: `<h3>Hello {{name}}!</h3>`,
  styles: [`h3 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
}
