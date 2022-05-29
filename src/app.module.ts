import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { readFile } from 'fs/promises';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ParkingModule } from './parking/parking.module';
import { ParkingSlotModule } from './parking-slot/parking-slot.module';
import { TicketModule } from './ticket/ticket.module';
import { ParkingFloorModule } from './parking-floor/parking-floor.module';
import { VehicleModule } from './vehicle/vehicle.module';
import { Parking } from './parking/parking.entity';
import { ParkingFloor } from './parking-floor/parking-floor.entity';
import { ParkingSlot } from './parking-slot/parking-slot.entity';
import { Vehicle } from './vehicle/vehicle.entity';
import { Ticket } from './ticket/ticket.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          type: 'postgres',
          host: config.get<string>('DB_HOST'),
          database: config.get<string>('DB_NAME'),
          port: Number(config.get<string>('DB_PORT')),
          username: config.get<string>('DB_USERNAME'),
          password: config.get<string>('DB_PASSWORD'),
          entities: [Parking, ParkingFloor, ParkingSlot, Vehicle, Ticket],
          ssl: {
            rejectUnauthorized: false,
            ca: readFile('cert/pg-db.crt').toString(),
          },
          synchronize: true,
        };
      }
    }),
    ParkingModule, ParkingSlotModule, TicketModule, ParkingFloorModule, VehicleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
