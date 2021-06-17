import { Arg, Mutation, Query, Resolver } from "type-graphql";
import User from "../entities/User";
import UserInputType from "../types/UserInputType";
import { v4 as uuid } from 'uuid'

@Resolver()
export default class UserResolver {

    @Query(() => [User], { nullable: true })
    users(): Array<User> {
        return [
            {
                id: "fdc788d6-07c8-4f1e-98ca-a4c325ad6ce1",
                name: "Matheus",
                email: "matheus.souza@gmail.com",
                phone: "81 9 8557-8523",
                cpf: "111.222.333-44",
                nameMother: "Maria",
                login: "matheus",
                password: "12345",
                bithDate: new Date("1998-11-18")
            }
        ]
    }

    @Mutation(() => User, { nullable: true })
    createUser(@Arg("data") data: UserInputType): User {
        const newUser = { ...data, id: uuid() }
        return newUser
    }

}