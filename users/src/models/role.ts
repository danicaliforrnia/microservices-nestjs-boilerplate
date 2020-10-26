import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {User} from "./user";

@Entity({
    name: 'role',
    schema: 'users'
})
export class Role {
    @PrimaryGeneratedColumn({
        name: 'rol_id'
    })
    id: number;

    @Column({
        name: 'rol_code',
        length: 15,
        type: 'varchar'
    })
    code: string;

    @Column({
        name: 'rol_name',
        length: 50,
        type: 'varchar'
    })
    name: string;

    @Column({
        name: 'rol_active',
        type: 'boolean'
    })
    isActive: boolean;

    @CreateDateColumn({
        name: 'rol_created_at'
    })
    createdAt: Date;

    @UpdateDateColumn({
        name: 'rol_updated_at'
    })
    updatedAt: Date;

    @DeleteDateColumn({
        name: 'rol_deleted_at'
    })
    deletedAt: Date;

    @OneToMany(() => User, (user: User) => user.role)
    public users: User[];
}
