import { Test, TestingModule } from '@nestjs/testing';

import { TripsService } from './trips.service';

// tslint:disable-next-line: typedef
describe('TripsService', () => {
  let service: TripsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TripsService],
    }).compile();

    service = module.get<TripsService>(TripsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
