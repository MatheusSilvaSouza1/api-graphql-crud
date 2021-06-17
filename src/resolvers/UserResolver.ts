import { Arg, Mutation, Query, Resolver } from "type-graphql";
import User from "../entities/User";
import UserInputType from "../types/UserInputType";
import { DeleteResult, getRepository } from "typeorm";

@Resolver()
export default class UserResolver {

    @Query(() => [User], { nullable: true })
    async users(): Promise<Array<User>> {
        return await getRepository(User).find()
    }

    @Query(() => User, { nullable: true })
    async user(@Arg("id") id: string): Promise<User | Error> {
        try {
            const repository = getRepository(User)
            const exists = await repository.findOne({ where: { id: id } })
            if (!exists) {
                throw new Error("Usuario nao encontrado!");
            }
            return exists
        } catch (error) {
            console.error(error);
            return error
        }
    }

    @Mutation(() => User, { nullable: true })
    async createUser(@Arg("data") data: UserInputType): Promise<User | Error> {
        try {
            const repository = getRepository(User)
            const newUser = repository.create(data)
            const exists = await repository.findOne({ where: { cpf: data.cpf } })
            if (exists) {
                throw new Error("Usuario já cadastrado!");
            }
            return await repository.save(newUser)
        } catch (error) {
            console.error(error);
            return error
        }
    }

    @Mutation(() => User, { nullable: true })
    async updateUser(
        @Arg("id") id: string,
        @Arg("data") data: UserInputType
    ): Promise<User | Error> {
        try {
            const repository = getRepository(User)
            const user = repository.create({ id, ...data })
            const exists = await repository.findOne({ where: { id: id } })
            if (!exists) {
                throw new Error("Usuario nao encontrado!");
            }
            return await repository.save(user)
        } catch (error) {
            console.error(error);
            return error
        }
    }

    @Mutation(() => String)
    async delete(
        @Arg("id") id: string
    ): Promise<String | Error> {
        try {
            const repository = getRepository(User)
            const exists = await repository.findOne({ where: { id: id } })
            if (!exists) {
                throw new Error("User not found!");
            }
            await repository.remove(exists)
            return `Usuario ${exists.name} foi deletado!`
        } catch (error) {
            console.error(error);
            return error
        }
    }

}