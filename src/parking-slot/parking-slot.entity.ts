import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { ParkingSlotType } from '../dtos/parking-slot-type.dto';
import { ParkingFloor } from '../parking-floor/parking-floor.entity';
import { Ticket } from 'src/ticket/ticket.entity';

@Entity()
export class ParkingSlot {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 10 })
    name: string

    @Column({
        name:'slot_type',
        type: 'enum',
        enum: ParkingSlotType,
        default: ParkingSlotType.FourWheeler
    })
    slotType!: ParkingSlotType

    @ManyToOne(type => ParkingFloor, parkingFloor => parkingFloor.parkingSlot)
    @JoinColumn({ name: 'parking_floor_id' })
    parkingFloor: ParkingFloor

    @OneToMany(type => Ticket, ticket => ticket.parkingSlot)
    tickets: Ticket[]

    @CreateDateColumn({ name: 'created_datetime', type: 'timestamp with time zone', default: () => 'CURRENT_TIMESTAMP' })
    createdDateTime: string;

    @UpdateDateColumn({ name: 'updated_datetime', type: 'timestamp with time zone', default: () => 'CURRENT_TIMESTAMP' })
    updatedDateTime: string
}