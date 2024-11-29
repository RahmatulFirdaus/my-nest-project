import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class TrashEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;
}