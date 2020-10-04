import {Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

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
}
