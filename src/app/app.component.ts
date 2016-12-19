import { Component } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Subject } from 'rxjs/Subject';

import '../../public/css/styles.css';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private limit: Subject<number> = new Subject<number>();

  constructor(af: AngularFire) {
    af.database.list(`musica-43ba7`, {
      query: {
        limitToFirst: this.limit
      }
    }).subscribe((val) => console.log(val));

    this.limit.next(1);

    setTimeout(() => {
      this.limit.next(2);
    }, 2000);

    setTimeout(() => {
      this.limit.next(3);
    }, 4000);

    let random = Math.floor(Math.random() * 10);
    setTimeout(() => {
      af.database.object(`test/lol`).set(random);
    }, 6000);
  }

}
