import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableUser1623889290838 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "user",
            columns: [
                {
                    name: 'id',
                    type: 'string',
                    isPrimary: true
                },
                {
                    name: 'name',
                    type: 'string'
                },
                {
                    name: 'email',
                    type: 'string'
                },
                {
                    name: 'phone',
                    type: 'string',
                    isNullable: true
                },
                {
                    name: 'cpf',
                    type: 'string'
                },
                {
                    name: 'nameMother',
                    type: 'string'
                },
                {
                    name: 'login',
                    type: 'string'
                },
                {
                    name: 'password',
                    type: 'string'
                },
                {
                    name: 'bithDate',
                    type: 'date'
                },
                {
                    name: 'inclusionDate',
                    type: 'date',
                    isNullable: true
                },
                {
                    name: 'updateDate',
                    type: 'date',
                    isNullable: true
                },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('user')
    }

}
