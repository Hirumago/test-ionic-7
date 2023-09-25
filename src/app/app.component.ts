import { Component, EnvironmentInjector, inject } from '@angular/core'
import { IonicModule } from '@ionic/angular'
import { CommonModule } from '@angular/common'
import { CapacitorUpdater } from '@capgo/capacitor-updater'
import { Storage } from '@ionic/storage-angular'
import { TestBed } from '@angular/core/testing'
import { Observable, Subscriber, forkJoin, from } from 'rxjs'

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
    standalone: true,
    imports: [IonicModule, CommonModule]
})
export class AppComponent {
    updateStatus: unknown;
    appVersion: string;
    result: Array<unknown>;

    observable = new Observable((subscriber) => {
        console.log('start observable')
        subscriber.next(1)
        subscriber.next(2)
        subscriber.next(3)
        console.log('stop observable')
    });

    public environmentInjector = inject(EnvironmentInjector);

    constructor(private storage: Storage) {
        CapacitorUpdater.notifyAppReady()

        this.appVersion = '0.0'
        this.result = []

        this.storage.create().then(() => {
            this.getAppVersion()

            this.testAsync()
            // this.testPromiseAll()
            // this.testForkJoin()
            // this.test().subscribe(() => {
            //   console.log('TEST')
            // })
        })

        // const test1 = from(this.testTimeout())
        // const test2 = from(this.testTimeout(true))
        // const test3 = from(this.testTimeout())

        // this.observable.subscribe({
        //   next(x) {
        //     console.log(x)
        //   }
        // })
    }

    getAppVersion() {
        this.storage.get('appVersion').then((res) => {
            this.appVersion = res
            if (res !== null && res != '1.1') {
                this.updateStatus = this.update()
            }
        })
    }

    async update() {
        const version = await CapacitorUpdater.download({
            url: 'https://s3.pub1.infomaniak.cloud/object/v1/AUTH_243b21ae9d604e209d4eaf6651930df1/storage/1.1/dist.zip',
            version: '1.1'
        })
        this.storage.set('appVersion', '1.1')
        await CapacitorUpdater.set(version) // sets the new version, and reloads the app
    }

    async testAsync() {
        // const test = await this.testTimeout()
        const test = from(this.testTimeout()).subscribe(() => console.log('terminé 1'))
        const test2 = await this.testTimeout(true).catch((e) => {
            console.log('test2 error')
            console.log(e)
        })
        const test3 = from(this.testTimeout()).subscribe(() => console.log('terminé 3'))
    }

    testPromiseAll() {
        Promise.all([
            this.testTimeout(),
            this.storage.get('test'),
            this.storage.get('appVersion'),
            this.testTimeout(true)
        ])
            .then((value) => console.log(value))
            .catch((reason) => {
                console.error(reason)
            })
    }

    testTimeout(test: boolean = false) {
        return new Promise((resolve, reject) => {
            if (test === true) {
                reject(false)
                // reject(new Error('Permission denied!'));
            }
            resolve(true)
        })
    }

    testForkJoin() {
        forkJoin({
            requestOne: this.testTimeout(),
            requestTwo: this.testTimeout(true),
            requestThree: this.testTimeout()
        }).subscribe(({ requestOne, requestTwo, requestThree }) => {
            console.log(requestOne)
            console.log(requestTwo)
            console.log(requestThree)
        })
    }

    // test(val: boolean) : Observable<> {
    //   setTimeout(() => {

    //     if (test === true) {
    //         reject(new Error('Permission denied!'));
    //         return;
    //     }

    //     resolve('Ici');

    // }, 2000);
    // }

    // test(): Observable<void> {
    //   const result: Array<unknown> = []
    //   const observable1 = from(this.testTimeout())
    //   const observable2 = from(this.testTimeout(true))
    //   const observable3 = from(this.testTimeout())

    //   observable1.subscribe((res) => {
    //     console.log('observable1')
    //     console.log(res)
    //     this.result.push(res)
    //   })

    //   observable2.subscribe((res) => {
    //     console.log('observable2')
    //     console.log(res)
    //     this.result.push(res)
    //   })

    //   observable3.subscribe((res) => {
    //     console.log('observable3')
    //     console.log(res)
    //     this.result.push(res)
    //   })
    // }
}
