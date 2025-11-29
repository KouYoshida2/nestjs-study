import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUserEntity1764428702157 implements MigrationInterface {
    name = 'CreateUserEntity1764428702157'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "todos" ADD "userId" uuid`);
        await queryRunner.query(`ALTER TABLE "todos" ADD CONSTRAINT "FK_4583be7753873b4ead956f040e3" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todos" DROP CONSTRAINT "FK_4583be7753873b4ead956f040e3"`);
        await queryRunner.query(`ALTER TABLE "todos" DROP COLUMN "userId"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
