import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root'
})
export class Service1Service {
    // constructor() { }

    test(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            resolve(true)
        })
    }
}
