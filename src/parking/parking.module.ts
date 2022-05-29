import { Module } from '@nestjs/common';
import { ParkingService } from './parking.service';
import { ParkingController } from './parking.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Parking } from './parking.entity';
import { ParkingFloorModule } from 'src/parking-floor/parking-floor.module';

@Module({
  imports:[TypeOrmModule.forFeature([Parking]), ParkingFloorModule],
  providers: [ParkingService],
  controllers: [ParkingController],
})
export class ParkingModule {}
