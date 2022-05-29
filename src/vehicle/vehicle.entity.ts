import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany } from 'typeorm';
import { VehicleType } from '../dtos/vehicle-type.dto';
import { Ticket } from '../ticket/ticket.entity';

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

    @OneToMany(type => Ticket, ticket => ticket.parkingSlot)
    tickets: Ticket[]

    @CreateDateColumn({ name: 'created_datetime', type: 'timestamp with time zone', default: () => 'CURRENT_TIMESTAMP' })
    createdDateTime: string;
}