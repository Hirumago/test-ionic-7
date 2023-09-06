import { TestBed } from '@angular/core/testing';

import { AppLauncherService } from './app-launcher.service';

describe('AppLauncherServiceService', () => {
  let service: AppLauncherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppLauncherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
