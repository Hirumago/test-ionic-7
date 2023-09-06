import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { AppLauncherService } from '../app-launcher/service/app-launcher.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent]
})
export class Tab2Page {
  appLaunched:boolean

  constructor(private appLauncherService: AppLauncherService) {
    this.appLaunched = false

    this.appLauncherService.launchApp().subscribe({
      error(err) {
        console.error('LaunchApp - something wrong occurred: ' + err);
      },
      complete() {
          console.log('LaunchApp - done')
      },
    })
  }

}
