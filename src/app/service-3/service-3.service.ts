import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service3Service {

  constructor() { }

  test(): Promise<boolean>  {
    return new Promise((resolve,  reject) =>  {
        console.log('Chargement de version')
        resolve(true)
    })
  }
}
