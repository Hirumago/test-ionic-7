import { Component, OnInit, signal } from '@angular/core';
import { SignalService } from '../../signal/signal.service';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signal',
  templateUrl: './signal.component.html',
  styleUrls: ['./signal.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],

})
export class SignalComponent  implements OnInit {
  test = signal<Array<number>>([])

  constructor(private signalService: SignalService) { }

  ngOnInit() {
    
  }

  launchTest() {
    this.test.set([])

    this.signalService.getArray().then(res => {
      this.test.set(res)
    })
  }

}
