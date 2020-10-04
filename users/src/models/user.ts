import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity, JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {Role} from "./role";

@Entity({
    name: 'user',
    schema: 'users'
})
export class User {
    @PrimaryGeneratedColumn({
        name: 'usr_id'
    })
    id: number;

    @Column({
        name: 'usr_username',
        length: 50,
        type: 'varchar'
    })
    username: string;

    @Column({
        name: 'usr_first_name',
        length: 50,
        type: 'varchar'
    })
    firstName: string;

    @Column({
        name: 'usr_last_name',
        length: 50,
        type: 'varchar'
    })
    lastName: string;

    @Column({
        name: 'usr_password',
        length: 60,
        type: 'varchar'
    })
    password: string;

    @ManyToOne(() => Role, {
        lazy: true,
        nullable: false
    })
    @JoinColumn({
        name: 'rol_id'
    })
    role: Role;

    @Column({
        name: 'usr_active',
        type: 'boolean'
    })
    isActive: boolean;

    @CreateDateColumn({
        name: 'usr_created_at'
    })
    createdAt: Date;

    @UpdateDateColumn({
        name: 'usr_updated_at'
    })
    updatedAt: Date;

    @DeleteDateColumn({
        name: 'usr_deleted_at'
    })
    deletedAt: Date;
}
