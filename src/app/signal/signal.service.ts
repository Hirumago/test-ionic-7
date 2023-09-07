import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root'
})
export class SignalService {
    array: Array<number>;

    constructor() {
        this.array = [1, 7, 26, 33]
    }

    getArray(): Promise<Array<number>> {
        return new Promise((resolve, reject) => {
            resolve(this.array)
        })
    }
}
