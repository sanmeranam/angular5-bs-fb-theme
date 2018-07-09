import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { Test } from '../models/test';

@Injectable()
export class FireConnectService {

  testList: AngularFireList<any>;
  selectedItem: Test = new Test();

  constructor(private firebase: AngularFireDatabase) { }

  getData() {
    this.testList = this.firebase.list('/apps');
    return this.testList;
  }

  insert(test: Test) {
    this.testList.push({
      name: test.name,
      age: test.age
    });
  }

}
