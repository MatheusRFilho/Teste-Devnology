import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateVehicles1624720542284 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'vehicles',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'model',
            type: 'varchar',
          },
          {
            name: 'brand',
            type: 'varchar',
          },
          {
            name: 'year_of_fabrication',
            type: 'number',
          },
          {
            name: 'plate',
            type: 'varchar',
          },
          {
            name: 'color',
            type: 'varchar',
          },
          {
            name: 'chassi',
            type: 'varchar',
          },
          {
            name: 'buy_date',
            type: 'timestamp',
          },
          {
            name: 'buy_value',
            type: 'number',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('vehicles');
  }
}
