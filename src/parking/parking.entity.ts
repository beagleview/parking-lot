import { ParkingFloor } from "src/parking-floor/parking-floor.entity";
import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, OneToMany } from "typeorm";

@Entity()
export class Parking {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 })
    name: string;

    @Column("text")
    description: string

    @OneToMany(type => ParkingFloor, ParkingFloor => ParkingFloor.parking)
    parking_floors: ParkingFloor[]

    @CreateDateColumn({ type: "timestamp with time zone", default: () => "CURRENT_TIMESTAMP" })
    createdDatetime: string;

    @UpdateDateColumn({ type: "timestamp with time zone", default: () => "CURRENT_TIMESTAMP" })
    updatedDate: string
}