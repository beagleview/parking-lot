import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, ManyToOne, OneToMany } from "typeorm";
import { ParkingSlot } from "../parking-slot/parking-slot.entity";
import { Parking } from "../parking/parking.entity";

@Entity()
export class ParkingFloor {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 10 })
    name: string

    @ManyToOne(type => Parking, parking => parking.parking_floors)
    parking: Parking

    @OneToMany(type => ParkingSlot, parkingSlot=> parkingSlot.parking_floor)
    parking_slot: ParkingSlot

    @CreateDateColumn({ type: "timestamp with time zone", default: () => "CURRENT_TIMESTAMP" })
    created_datetime: string;

    @UpdateDateColumn({ type: "timestamp with time zone", default: () => "CURRENT_TIMESTAMP" })
    updated_datetime: string

}