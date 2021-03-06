import { Field, ID, ObjectType } from "type-graphql"
import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity()
@ObjectType()
export default class User {

    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }

    @PrimaryColumn()
    @Field(() => ID)
    id?: string

    @Column()
    @Field()
    name: string

    @Column()
    @Field()
    email: string

    @Column()
    @Field()
    phone?: string

    @Column()
    @Field()
    cpf: string

    @Column()
    @Field()
    nameMother: string

    @Column()
    @Field()
    login: string

    @Column()
    @Field()
    password: string

    @Column()
    @Field()
    bithDate: Date

    @Column()
    @Field({ nullable: true })
    inclusionDate?: Date

    @Column()
    @Field({ nullable: true })
    updateDate?: Date

    @BeforeInsert()
    private registerInsert?(): void {
        this.inclusionDate = new Date();
    }

    @BeforeUpdate()
    private registerUpdate?(): void {
        this.updateDate = new Date();
    }

}