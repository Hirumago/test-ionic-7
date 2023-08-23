import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { CapacitorUpdater } from '@capgo/capacitor-updater'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class AppComponent {
  updateStatus: unknown

  public environmentInjector = inject(EnvironmentInjector);

  constructor() {
    CapacitorUpdater.notifyAppReady()

    this.launchUpdate()
  }

  launchUpdate() {
    console.log('debut maj')
    this.updateStatus = this.update()
    console.log('fin maj')
  }

  async update() {
    const version = await CapacitorUpdater.download({
      url: 'https://s3.pub1.infomaniak.cloud/object/v1/AUTH_243b21ae9d604e209d4eaf6651930df1/storage/1.1/dist.zip',
      version: '1.0'
    })
    await CapacitorUpdater.set(version); // sets the new version, and reloads the app
  }
}
