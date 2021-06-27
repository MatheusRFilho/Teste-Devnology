import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateHistory1624787716247 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'history',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'vehicle_id',
            type: 'uuid',
          },
          {
            name: 'date',
            type: 'timestamp',
          },
          {
            name: 'value',
            type: 'number',
          },
          {
            name: 'type',
            type: 'varchar',
          },
          {
            name: 'commision',
            type: 'value',
            isNullable: true,
          },
        ],
        foreignKeys: [
          {
            name: 'FKVehicles',
            referencedTableName: 'vehicles',
            referencedColumnNames: ['id'],
            columnNames: ['vehicle_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
