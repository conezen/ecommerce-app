import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Administrator {
    @PrimaryGeneratedColumn({name: 'administrator_id', type: 'int', unsigned: true})
    administratorId: number;

    @Column({type: 'varchar', length: '255', unique: true})
    username: string;

    @Column({name: 'password_hash', type: 'varchar', length: '255'})
    password: string;
}