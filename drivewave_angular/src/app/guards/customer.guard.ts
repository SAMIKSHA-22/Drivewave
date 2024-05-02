import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

export const customerGuard: CanActivateFn = (route, state) => {
  if(inject(LoginService).getRole().toUpperCase() == 'CUSTOMER') {
    return true;
  } else {
  inject(Router).navigate(['login']);
  return false;
  }
};
