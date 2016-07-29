import {bootstrap} from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component'
import {enableProdMode} from '@angular/core';
import {provideForms, disableDeprecatedForms} from '@angular/forms';
import {appRouterProviders} from "./app.routes";
import {AuthGuard} from "./services/auth-guard.service";
import {AuthService} from "./services/auth.service";

enableProdMode();

bootstrap(AppComponent, [disableDeprecatedForms(), provideForms(), appRouterProviders, AuthGuard, AuthService]);