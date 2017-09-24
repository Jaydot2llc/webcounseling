import { TestBed, inject } from '@angular/core/testing';

import { RtcserviceService } from './rtcservice.service';

describe('RtcserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RtcserviceService]
    });
  });

  it('should be created', inject([RtcserviceService], (service: RtcserviceService) => {
    expect(service).toBeTruthy();
  }));
});
