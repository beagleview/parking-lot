import { ParkingSlotType } from '../dtos/parking-slot-type.dto';
import { ParkingFloor } from '../parking-floor/parking-floor.entity';
import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class ParkingSlot {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 10 })
    name: string

    @Column({
        type: 'enum',
        enum: ParkingSlotType,
    })
    slot_type: ParkingSlotType

    @ManyToOne(type => ParkingFloor, parkingFloor => parkingFloor.parkingSlot)
    @JoinColumn({ name: 'parking_floor_id' })
    parkingFloor: ParkingFloor

    @CreateDateColumn({ name: 'created_datetime', type: 'timestamp with time zone', default: () => 'CURRENT_TIMESTAMP' })
    createdDateTime: string;

    @UpdateDateColumn({ name: 'updated_datetime', type: 'timestamp with time zone', default: () => 'CURRENT_TIMESTAMP' })
    updatedDateTime: string
}