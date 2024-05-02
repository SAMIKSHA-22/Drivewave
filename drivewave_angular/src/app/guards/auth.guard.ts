import { inject, runInInjectionContext } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

export const authGuard: CanActivateFn = (route, state) => {
  if(inject(LoginService).getRole().toUpperCase() == 'ADMIN') {
    return true;
  } else {
  inject(Router).navigate(['login']);
  return false;
  }

};
  


