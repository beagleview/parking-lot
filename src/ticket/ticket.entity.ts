import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ParkingSlot } from '../parking-slot/parking-slot.entity';
import { Vehicle } from '../vehicle/vehicle.entity';

@Entity()
export class Ticket{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    entry_time: string;

    @Column()
    exit_time: string;

    @ManyToOne(type => ParkingSlot, parkingSlot=> parkingSlot)
    @JoinColumn({ name: 'parking_slot_id' })
    parkingSlot: ParkingSlot

    @ManyToOne(type => Vehicle, vehicle=> vehicle)
    @JoinColumn({ name: 'vehicle_id' })
    vehicle: Vehicle

    @CreateDateColumn({ name: 'created_datetime', type: 'timestamp with time zone', default: () => 'CURRENT_TIMESTAMP' })
    createdDateTime: string;
}