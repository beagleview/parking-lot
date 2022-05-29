import { ParkingSlotType } from "src/dtos/parking-slot-type.dto";
import { ParkingFloor } from "src/parking-floor/parking-floor.entity";
import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, ManyToOne } from "typeorm";

@Entity()
export class ParkingSlot {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 10 })
    name: string

    @Column({
        type: "enum",
        enum: ParkingSlotType,
    })
    slot_type: ParkingSlotType

    @ManyToOne(type => ParkingFloor, parkingFloor => parkingFloor.parking_slot)
    parking_floor: ParkingFloor

    @CreateDateColumn({ type: "timestamp with time zone", default: () => "CURRENT_TIMESTAMP" })
    created_datetime: string;

    @UpdateDateColumn({ type: "timestamp with time zone", default: () => "CURRENT_TIMESTAMP" })
    updated_datetime: string
}