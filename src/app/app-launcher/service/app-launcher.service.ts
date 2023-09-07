import { Injectable } from '@angular/core';
import { Service1Service } from '../../service-1/service-1.service';
import { Service2Service } from 'src/app/service-2/service-2.service';
import { Service3Service } from 'src/app/service-3/service-3.service';
import { Observable, catchError, concatMap, from, map, of } from 'rxjs';

// var a;
// const b;
// let c;
// d;
// *

@Injectable({
  providedIn: 'root'
})
export class AppLauncherService {

  constructor(private service1: Service1Service, private service2: Service2Service, private service3: Service3Service) {}

  launchApp(): Observable<void> {
    return from(this.service1.test()).pipe(
      concatMap((success) => {
        if (success) {
          return from(this.service2.test()).pipe(
            map(result => {
              console.log('Migration de données : '  + result)
            })
          )
        } else {
          return of(null)
        }
      }),
      concatMap(() => from(this.service3.test()).pipe(
        map(result => {
          console.log('Chargement de version : '  + result)
        })
      ))
    )
  }
}
