import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";



@Entity()

export class Cloth {
    @PrimaryGeneratedColumn({
        type: 'bigint',
        name: 'cloth_id',
    })
    id: number;


    @Column(
        {
            name: 'cloth_type',
            nullable: false,
        }


    )
    clothtype: string

    @Column({
        name: 'description',
        nullable: false
    })
    description: string



    @Column({
        name: 'price',
        nullable: false
    })
    price: number

    @Column({
        name: 'origin',
        nullable: true,
        default: ""
    })
    origin: string


    @Column({
        name: "profile_url",
        nullable: true,
    })
    profile_url: string
}
