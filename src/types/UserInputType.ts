import { Field, InputType } from "type-graphql"

@InputType()
export default class UserInputType{

    @Field()
    name: string

    @Field()
    email: string

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
}