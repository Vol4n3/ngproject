import {inject, TestBed} from '@angular/core/testing';

import {AuthService} from './auth.service';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService]
    });
  });
  it('should be able to connect', inject([AuthService], (done, auth: AuthService) => {
    auth.connect({
      email: 'cohen-selmon@osmos-group.com',
      password: 'Osmos2014'
    }).then(() => {
      done();
    }).catch(() => {
      done("error");
    });
  }));
});
