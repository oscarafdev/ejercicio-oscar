import { Component } from '@angular/core';
import {LoggingService, LogLevel} from "./shared/services/logging.service";
import {environment} from "../environments/environment";
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private logService: LoggingService) {}
  ngOnInit() {
    this.logService.level = LogLevel[environment.Logging.LogLevel];
  }
}
