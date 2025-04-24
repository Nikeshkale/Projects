import { Component } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-a',
  standalone: true,
  imports: [],
  templateUrl: './a.component.html',
  styleUrl: './a.component.scss',
})
export class AComponent {
  constructor(public counterSerive: CounterService) {}

  // getCount() {
  //   return this.counterSerive.getCounter();
  // }

  // incrementCount() {
  //   return this.counterSerive.increseCounter();
  // }
}
