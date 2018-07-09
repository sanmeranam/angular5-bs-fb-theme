import { TestBed, inject } from '@angular/core/testing';

import { FireConnectService } from './fire-connect.service';

describe('FireConnectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FireConnectService]
    });
  });

  it('should be created', inject([FireConnectService], (service: FireConnectService) => {
    expect(service).toBeTruthy();
  }));
});
