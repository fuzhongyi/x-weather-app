import {Injectable} from '@angular/core';
import {Future} from './Future';

@Injectable()
export class Weather {
  private _city: string;	                // 城市
  private _airCondition: string = "0";    // 空气指数
  private _coldIndex: string = "0";       // 感冒指数
  private _updateTime: string;	          // 更新时间
  private _date: string;	                // 日期
  private _distrct: string;	              // 区县
  private _dressingIndex: string = "——";	// 穿衣指数
  private _humidity: string = "——";	      // 湿度
  private _pollutionIndex: string = "—";  // 空气质量指数
  private _province: string;	            // 省份
  private _sunset: string;	              // 日落时间
  private _sunrise: string;	              // 日出时间
  private _temperature: string = "0";	    // 温度
  private _time: string = "——";           // 时间
  private _washIndex: string;	            // 洗车指数
  private _weather: string;               // 天气
  private _week: string;                  // 星期
  private _wind: string = "__";           // 风向
  private _exerciseIndex: string = "——";	// 运动指数
  private _dayTime: string;	              // 白天天气
  private _night: string;	                // 晚上天气
  private _future: Future[];              // 未来


  get city(): string {
    return this._city;
  }

  set city(value: string) {
    this._city = value;
  }

  get airCondition(): string {
    return this._airCondition;
  }

  set airCondition(value: string) {
    this._airCondition = value;
  }

  get coldIndex(): string {
    return this._coldIndex;
  }

  set coldIndex(value: string) {
    this._coldIndex = value;
  }

  get updateTime(): string {
    return this._updateTime;
  }

  set updateTime(value: string) {
    this._updateTime = value;
  }

  get date(): string {
    return this._date;
  }

  set date(value: string) {
    this._date = value;
  }

  get distrct(): string {
    return this._distrct;
  }

  set distrct(value: string) {
    this._distrct = value;
  }

  get dressingIndex(): string {
    return this._dressingIndex;
  }

  set dressingIndex(value: string) {
    this._dressingIndex = value;
  }

  get humidity(): string {
    return this._humidity;
  }

  set humidity(value: string) {
    this._humidity = value;
  }

  get pollutionIndex(): string {
    return this._pollutionIndex;
  }

  set pollutionIndex(value: string) {
    this._pollutionIndex = value;
  }

  get province(): string {
    return this._province;
  }

  set province(value: string) {
    this._province = value;
  }

  get sunset(): string {
    return this._sunset;
  }

  set sunset(value: string) {
    this._sunset = value;
  }

  get sunrise(): string {
    return this._sunrise;
  }

  set sunrise(value: string) {
    this._sunrise = value;
  }

  get temperature(): string {
    return this._temperature;
  }

  set temperature(value: string) {
    this._temperature = value;
  }

  get time(): string {
    return this._time;
  }

  set time(value: string) {
    this._time = value;
  }

  get washIndex(): string {
    return this._washIndex;
  }

  set washIndex(value: string) {
    this._washIndex = value;
  }

  get weather(): string {
    return this._weather;
  }

  set weather(value: string) {
    this._weather = value;
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

  get exerciseIndex(): string {
    return this._exerciseIndex;
  }

  set exerciseIndex(value: string) {
    this._exerciseIndex = value;
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

  get future(): Future[] {
    return this._future;
  }

  set future(value: Future[]) {
    this._future = value;
  }
}
