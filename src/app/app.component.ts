import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetDataService } from './getData.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GetDataService]
})
export class AppComponent implements OnInit {
  data: any = [];
  days: Number = 2;
  stageone: any = [];
  haveId: any = [];
  mySet = new Set();
  twoSet = new Set();
  constructor(private http: HttpClient, private Ajax: GetDataService) { }
  async initData(x) {
    let data = await this.getSome(x);
    console.log('這裡是initData');
    for (let i = 0; i < data.ret.length; i++) {
      if (data.ret.league_id !== null) {
        this.stageone.push(data.ret[i])
      }
    }
    console.log(this.stageone);
    this.data = this.stageone;
    return this.data;
  }
  getSome(x) {
    let data = this.Ajax.getMore(x).toPromise();
    console.log('這裡是getSome');
    return data;
  }
  async hello() {
    let data;
    for (let i = 1; i <= this.days; i++) {
      data = await this.initData(i);
    }
    console.log("這裡是HELLO");
    console.log(data);
  }
  ngOnInit() {
    this.hello();
    console.log('這裡是ngOnInit');
    //   let aa = [
    //     { src: "1", name: "1", age: "3" },
    //     { src: "145", name: "2", age: "254" },
    //     { src: "142", name: "2", age: "68768" },
    //     { src: "457", name: "6", age: "576" },
    //     { src: "687", name: "2", age: "6276" },
    //     { src: "43", name: "2", age: "4968" },
    //     { src: "6561", name: "7", age: "6876" },
    //     { src: "45654", name: "2", age: "464" },
    //     { src: "786", name: "2", age: "867" }
    //   ]
    //   let bb: any = [];
    //   let cc: any = [];
    //   let dd: any = [];

    //   setInterval(() => {
    //     bb = aa.filter(json => {
    //       return !this.mySet.has(json.name) ? this.mySet.add(json.name) : false
    //     })
    //     bb.push(aa);
    //     cc = [].concat.apply([], bb);
    //     let set = new Set();
    //     dd = cc.filter(json => {
    //       return !set.has(json.name) ? set.add(json.name) : false
    //     })
    //     console.log(dd);
    //   }, 1000);
    // }
    /*
    haveID = dd
    stageone = aa
    */


  }
}