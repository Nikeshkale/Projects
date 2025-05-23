import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authguardGuard: CanActivateFn = () => {
  
  const authService = inject(AuthService);

  if (authService.isAuthenticated()) {
    return true;
  } else {
    return false;
  }


};
