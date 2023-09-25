import { Injectable } from '@angular/core'
import { Service4Service } from '../service-4/service-4.service'
import { from } from 'rxjs'

@Injectable({
    providedIn: 'root'
})
export class Service2Service {
    array: Array<number>;

    constructor(private service4: Service4Service) {
        this.array = []
    }

    test(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            console.log('Migration de données')

            for (let i = 0; i < 5; i++) {
                from(this.service4.test(i)).subscribe({
                    next(x) {
                        console.log('Migration de données - avis ' + i + ' - got value ' + x)
                    },
                    error(err) {
                        console.error('Migration de données - avis ' + i + ' - something wrong occurred: ' + err)
                    },
                    complete() {
                        console.log('Migration de données - avis ' + i + ' - done')
                    }
                })
            }
            resolve(true)
        })
    }
}
