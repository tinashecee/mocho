import { TestBed, inject } from '@angular/core/testing';

import { VidService } from './vid.service';

describe('VidService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VidService]
    });
  });

  it('should be created', inject([VidService], (service: VidService) => {
    expect(service).toBeTruthy();
  }));
});
