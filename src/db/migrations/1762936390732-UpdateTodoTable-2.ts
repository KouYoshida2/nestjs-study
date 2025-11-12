import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateTodoTable21762936390732 implements MigrationInterface {
    name = 'UpdateTodoTable21762936390732'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todos" ADD "deleted_at" TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todos" DROP COLUMN "deleted_at"`);
    }

}
