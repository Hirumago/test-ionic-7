import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  // constructor() { }

  test(): Promise<boolean>  {
    return new Promise((resolve,  reject) =>  {
        // console.log('service - 1 - DEMARRAGE APP')
        console.log('DEMARRAGE APP')
        resolve(true)
    })
  }
}
