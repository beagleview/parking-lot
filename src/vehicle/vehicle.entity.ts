import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
import { VehicleType } from '../dtos/vehicle-type.dto';

@Entity()
export class Vehicle {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 })
    tag: string;

    @Column({
        type: 'enum',
        enum: VehicleType
    })
    type: VehicleType

    @CreateDateColumn({ name: 'created_datetime', type: 'timestamp with time zone', default: () => 'CURRENT_TIMESTAMP' })
    createdDateTime: string;
}