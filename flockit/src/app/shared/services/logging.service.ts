import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  level: LogLevel = LogLevel.All;

  constructor(private firestore: AngularFirestore) {}

  debug(msg: string, rawdata?: any, ...optionalParams: any[]) {
    this.writeToLog(msg, rawdata, LogLevel.Debug, optionalParams);
  }

  info(msg: string, rawdata?: any, ...optionalParams: any[]) {
    this.writeToLog(msg, rawdata, LogLevel.Info, optionalParams);
  }

  warn(msg: string, rawdata?: any, ...optionalParams: any[]) {
    this.writeToLog(msg, rawdata, LogLevel.Warn, optionalParams);
  }

  error(msg: string, rawdata: any, ...optionalParams: any[]) {
    this.writeToLog(msg, rawdata, LogLevel.Error, optionalParams);
  }

  fatal(msg: string, rawdata: any, ...optionalParams: any[]) {
    this.writeToLog(msg, rawdata, LogLevel.Fatal, optionalParams);
  }

  log(msg: string, rawdata?: any, ...optionalParams: any[]) {
    this.writeToLog(msg, rawdata, LogLevel.All, optionalParams);
  }

  setlogLevel(level: LogLevel) {
    this.level = level;
  }

  private writeToLog(
    msg: string,
    rawdata: Error,
    level: LogLevel,
    params: any[]
  ) {
    console.log('Log');
    if (this.shouldLog(level)) {
      let value: Ilogger = {} as Ilogger;

      value.LogDate = JSON.stringify(new Date());
      value.LogLevel = LogLevel[level];
      value.Message = msg;
      if (rawdata) {
        value.RawData = rawdata.stack;
      }
      if (params.length) {
        value.OptionalParams = JSON.stringify(params).toString();
      }

      if (environment.Logging.IsFirebase) {
        this.LogToFireBase(value);
      }

      // Log the value
      console.log(value);
    }
  }

  private shouldLog(level: LogLevel): boolean {
    let ret: boolean = false;
    if (
      (level >= this.level && level !== LogLevel.Off) ||
      this.level === LogLevel.All
    ) {
      ret = true;
    }
    return ret;
  }

  private LogToFireBase(val: Ilogger) {
    this.firestore.collection("logging").add({ ...val });
  }

  getAllLogs() {
    return this.firestore.collection("logging").snapshotChanges();
  }
}


export interface Ilogger {
  loggerId: string;
  LogDate: string;
  LogLevel: string;
  Message: string;
  OptionalParams: any;
  RawData: any;
}

export enum LogLevel {
  All = 0,
  Debug = 1,
  Info = 2,
  Warn = 3,
  Error = 4,
  Fatal = 5,
  Off = 6,
}
