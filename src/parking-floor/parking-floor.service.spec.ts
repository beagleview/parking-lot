import { Test, TestingModule } from '@nestjs/testing';
import { ParkingFloorService } from './parking-floor.service';

describe('ParkingFloorService', () => {
  let service: ParkingFloorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParkingFloorService],
    }).compile();

    service = module.get<ParkingFloorService>(ParkingFloorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
