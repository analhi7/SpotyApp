import { TestBed } from '@angular/core/testing';

import { Spotify.Service.TsService } from './spotify.service.ts.service';

describe('Spotify.Service.TsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Spotify.Service.TsService = TestBed.get(Spotify.Service.TsService);
    expect(service).toBeTruthy();
  });
});
