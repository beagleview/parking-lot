import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, OneToMany } from 'typeorm';
import { ParkingFloor } from '../parking-floor/parking-floor.entity';

@Entity()
export class Parking {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 })
    name: string;

    @Column('text', { nullable: true, })
    description: string

    @OneToMany(type => ParkingFloor, ParkingFloor => ParkingFloor.parking)
    parkingFloors: ParkingFloor[]

    @CreateDateColumn({ name: 'created_datetime', type: 'timestamp with time zone', default: () => 'CURRENT_TIMESTAMP' })
    createdDateTime: string;

    @UpdateDateColumn({ name: 'updated_datetime', type: 'timestamp with time zone', default: () => 'CURRENT_TIMESTAMP' })
    updatedDateTime: string
}