import { Field, ID, ObjectType } from "type-graphql"
import { v4 as uuid } from 'uuid'

@ObjectType()
export default class User {

    constructor(){
        if (!this.id) {
            this.id = uuid()
        }
    }

    @Field(() => ID)
    id?: string

    @Field()
    name: string

    @Field()
    email?: string

    @Field()
    phone?: string

    @Field()
    cpf: string

    @Field()
    nameMother: string

    @Field()
    login: string

    @Field()
    password: string

    @Field()
    bithDate: Date

    @Field()
    inclusionDate: Date

    @Field()
    updateDate: Date

}