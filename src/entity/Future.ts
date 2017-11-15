import {Injectable} from '@angular/core';

@Injectable()
export class Future {
  private _date: string;        // 日期
  private _dayTime: string;     // 白天天气
  private _night: string;       // 晚上天气
  private _temperature: string; // 温度
  private _week: string;        // 星期
  private _wind: string;        // 风向

  get date(): string {
    return this._date;
  }

  set date(value: string) {
    this._date = value;
  }

  get dayTime(): string {
    return this._dayTime;
  }

  set dayTime(value: string) {
    this._dayTime = value;
  }

  get night(): string {
    return this._night;
  }

  set night(value: string) {
    this._night = value;
  }

  get temperature(): string {
    return this._temperature;
  }

  set temperature(value: string) {
    this._temperature = value;
  }

  get week(): string {
    return this._week;
  }

  set week(value: string) {
    this._week = value;
  }

  get wind(): string {
    return this._wind;
  }

  set wind(value: string) {
    this._wind = value;
  }
}
