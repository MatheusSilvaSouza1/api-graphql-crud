import { Arg, Mutation, Query, Resolver } from "type-graphql";
import User from "../entities/User";
import UserInputType from "../types/UserInputType";

@Resolver()
export default class UserResolver {

    @Query(() => [User], { nullable: true })
    users(): Array<User> {
        return []
    }

    @Mutation(() => User)
    createUser(@Arg("data") data: UserInputType): User {
        return data
    }
    
}