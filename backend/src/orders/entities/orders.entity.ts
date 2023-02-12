

import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()


export class Orders {
    @PrimaryGeneratedColumn({
        type: 'bigint',
        name: 'order_id',
    })
    id: number;

    

    @Column({
        name: 'cloth_id',
        nullable: false
    })
    cloth_id: number
    

    @Column({
        name: 'user_id',
        nullable: false
    })
    user_id: number



   

}

