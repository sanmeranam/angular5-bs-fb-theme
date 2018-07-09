import { FireConnectService } from './../services/fire-connect.service';
import { Component, OnInit } from '@angular/core';
import { Test } from '../models/test';
import { AngularFireDatabase } from 'angularfire2/database'; 
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.less']
})
export class SampleComponent implements OnInit {
  coursesObservable: Observable<any[]>;

  constructor(private fireConnect: FireConnectService,private db: AngularFireDatabase) { }

  ngOnInit() {
    this.coursesObservable = this.getCourses('/cources');
  }

  getCourses(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }

  onClick() {

    this.fireConnect.getData();

    var test = new Test();
    test.name = "Santanu";
    test.age = 30;
    this.fireConnect.insert(test);
  }

  onAction() {

  }
}
