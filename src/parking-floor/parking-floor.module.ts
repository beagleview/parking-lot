import { Module } from '@nestjs/common';
import { ParkingFloorService } from './parking-floor.service';

@Module({
  providers: [ParkingFloorService],
  exports:[ParkingFloorService]
})
export class ParkingFloorModule {}
