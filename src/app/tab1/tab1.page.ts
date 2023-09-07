import { Component } from '@angular/core'
import { AlertController, IonicModule, IonicSafeString } from '@ionic/angular'
import { ExploreContainerComponent } from '../explore-container/explore-container.component'
import { SignalComponent } from '../component/signal/signal.component'

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss'],
    standalone: true,
    imports: [IonicModule, ExploreContainerComponent, SignalComponent]
})
export class Tab1Page {
    constructor(private alertController: AlertController) {}

    // pour le html il faut ajouter une configuration dans le main.ts
    async alertBox() {
        const alert = await this.alertController.create({
            header: 'Titre',
            subHeader: 'Sous titre',
            animated: true,
            message: new IonicSafeString(
                'Description de l\'alert box' +
                    '<ion-progress-bar type="indeterminate"></ion-progress-bar>'
            ),
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        console.log('canceled')
                    }
                },
                {
                    text: 'OK',
                    role: 'confirm',
                    handler: () => {
                        console.log('confirm')
                    }
                }
            ]
        })

        await alert.present()
    }
}
