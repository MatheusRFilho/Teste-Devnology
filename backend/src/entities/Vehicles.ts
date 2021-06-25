import { Entity, PrimaryColumn, Column } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('vehicles')
class Vehicles {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  brand: string;

  @Column()
  model: string;

  @Column()
  plate: string;

  @Column()
  chassi: string;

  @Column()
  color: string;

  @Column()
  buy_value: string;

  @Column()
  buy_date: Date;

  @Column()
  year_fabrication: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Vehicles };
