import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateTodoTable1764427171786 implements MigrationInterface {
    name = 'UpdateTodoTable1764427171786'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todos" ALTER COLUMN "dueOn" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todos" ALTER COLUMN "dueOn" SET NOT NULL`);
    }

}
