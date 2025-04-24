import { Component } from '@angular/core';
import { CounterService } from '../../services/counter.service';
import { B2Component } from '../b2/b2.component';

@Component({
  selector: 'app-b1',
  standalone: true,
  imports: [B2Component],
  providers:[CounterService],  // sepated the path   2 alag path create krta hai
  templateUrl: './b1.component.html',
  styleUrl: './b1.component.scss'
})
export class B1Component {
  // constructor(private counterService: CounterService) {}
  constructor(public counterService: CounterService) {}
}
