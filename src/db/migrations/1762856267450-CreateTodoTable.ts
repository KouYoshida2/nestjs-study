import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTodoTable1762856267450 implements MigrationInterface {
    name = 'CreateTodoTable1762856267450'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."todos_status_enum" AS ENUM('completed', 'inprogress', 'todo')`);
        await queryRunner.query(`CREATE TABLE "todos" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character NOT NULL, "status" "public"."todos_status_enum" NOT NULL, "dueOn" date NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_ca8cafd59ca6faaf67995344225" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "todos"`);
        await queryRunner.query(`DROP TYPE "public"."todos_status_enum"`);
    }

}
