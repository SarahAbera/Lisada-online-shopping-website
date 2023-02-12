import { Role } from "src/RBAC/role.enum";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class User {
    @PrimaryGeneratedColumn({
        type: 'bigint',
        name: 'user_id',
    })
    id: number;


    @Column({
        name: 'user_name',
        nullable: false,
        unique: true,

    })
    username: string;

    @Column({
        name: 'email_address',
        nullable: false,


    })
    email: string;

    @Column({
        name: 'password',
        nullable: false,

    })
    password: string;


    @Column({
        type : 'enum',
        enum : Role,
        default : Role.User

    })

    roles : Role;
}



