import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { ParkingSlot } from '../parking-slot/parking-slot.entity';
import { Parking } from '../parking/parking.entity';

@Entity()
export class ParkingFloor {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 10 })
    name: string

    @ManyToOne(type => Parking, parking => parking.parkingFloors)
    @JoinColumn({ name: 'parking_id' })
    parking: Parking

    @OneToMany(type => ParkingSlot, parkingSlot => parkingSlot.parkingFloor)
    parkingSlots: ParkingSlot[]

    @CreateDateColumn({ name: 'created_datetime', type: 'timestamp with time zone', default: () => 'CURRENT_TIMESTAMP' })
    createdDateTime: string;

    @UpdateDateColumn({ name: 'updated_datetime', type: 'timestamp with time zone', default: () => 'CURRENT_TIMESTAMP' })
    updatedDateTime: string

}