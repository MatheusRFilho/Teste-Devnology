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
  year_of_fabrication: number;

  @Column()
  isAvailable: boolean;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Vehicles };
