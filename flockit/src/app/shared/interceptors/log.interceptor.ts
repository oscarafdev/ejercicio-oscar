import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {finalize, tap} from "rxjs/operators";
import {LoggingService} from "../services/logging.service";

@Injectable()
export class LogInterceptor implements HttpInterceptor {
  constructor(private _loggingService: LoggingService) {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      finalize(() => {
        console.log(req);
        this._loggingService.log('Nuevo request: ' + req.url);
      })
    );
  }

}
