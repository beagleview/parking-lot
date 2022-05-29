import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParkingSlot } from './parking-slot.entity';
import { ParkingSlotService } from './parking-slot.service';

@Module({
  imports:[TypeOrmModule.forFeature([ParkingSlot])],
  providers: [ParkingSlotService],
  exports:[ParkingSlotService]
})
export class ParkingSlotModule {}
