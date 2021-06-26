import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('vehicles')
class Vehicles {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  model: string;

  @Column()
  brand: string;

  @Column()
  color: string;

  @Column()
  plate: string;

  @Column()
  chassi: string;

  @Column()
  buy_value: number;

  @Column()
  year_of_fabrication: number;

  @Column()
  buy_date: Date;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Vehicles };
