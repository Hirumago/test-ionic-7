import { Injectable } from '@angular/core'
import { Service5Service } from '../service-5/service-5.service'
import { from } from 'rxjs'

@Injectable({
    providedIn: 'root'
})
export class Service4Service {
    constructor(private service5: Service5Service) {}

    test(nb: number): Promise<number> {
        console.log()
        return new Promise((resolve, reject) => {
            console.log('Migration de données - avis ' + nb)
            if (nb === 2 || nb === 3) {
                from(this.service5.test(nb)).subscribe({
                    error(err) {
                        console.error(
                            'Migration de données - avis ' + nb + ' - error - something wrong occurred: ' + err
                        )
                    }
                    // complete() {
                    //     console.log('Migration de données - avis ' + nb + ' - done')
                    // },
                })
                reject(null)
            }
            resolve(nb)
        })
    }
}
