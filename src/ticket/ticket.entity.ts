import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn, UpdateDateColumn } from 'typeorm';
import { ParkingSlot } from '../parking-slot/parking-slot.entity';
import { Vehicle } from '../vehicle/vehicle.entity';

@Entity()
export class Ticket{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'entry_time', nullable: true})
    entryTime: string;

    @Column({name: 'exit_time', nullable: true})
    exitTime: string;

    @ManyToOne(type => ParkingSlot, parkingSlot=> parkingSlot)
    @JoinColumn({ name: 'parking_slot_id' })
    parkingSlot: ParkingSlot

    @ManyToOne(type => Vehicle, vehicle=> vehicle)
    @JoinColumn({ name: 'vehicle_id' })
    vehicle: Vehicle

    @CreateDateColumn({ name: 'created_datetime', type: 'timestamp with time zone', default: () => 'CURRENT_TIMESTAMP' })
    createdDateTime: string;

    @UpdateDateColumn({ name: 'updated_datetime', type: 'timestamp with time zone', default: () => 'CURRENT_TIMESTAMP' })
    updatedDateTime: string
}