import { Injectable } from '@angular/core';

@Injectable()
export class TimerService {
  private timer: any;
  private count = 0;

  constructor() { }
  start(ms: number){
    if(!this.timer){
      this.timer = setInterval(()=> {
        this.count++;
      }, ms);
    }
  }

stop(){
  if(this.timer){
    clearInterval(this.timer);
    this.timer=null;
    this.count = 0;
  }
}
getCount(){
  return this.count;
}
}