import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1765586674448 implements MigrationInterface {
    name = 'Migrations1765586674448'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todos" ADD "companyId" uuid`);
        await queryRunner.query(`ALTER TABLE "todos" ADD CONSTRAINT "FK_2fadcca59c6bd1bc9941c7e1d02" FOREIGN KEY ("companyId") REFERENCES "companies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todos" DROP CONSTRAINT "FK_2fadcca59c6bd1bc9941c7e1d02"`);
        await queryRunner.query(`ALTER TABLE "todos" DROP COLUMN "companyId"`);
    }

}
