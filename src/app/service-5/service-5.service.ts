import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service5Service {

  constructor() { }

  test(nb: number): Promise<boolean>  {
    return new Promise((resolve,  reject) =>  {
        if (nb === 2) {
          console.log('Migration de données - avis ' + nb + ' - error - service 5')
          reject(false)
        }
        resolve(true)
    })
  }
}
