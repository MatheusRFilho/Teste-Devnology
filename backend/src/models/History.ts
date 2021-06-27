import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Vehicles } from './Vehicles';

@Entity('history')
class History {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  vehicle_id: string;

  @ManyToOne(() => Vehicles)
  @JoinColumn({ name: 'vehicle_id' })
  vehicle: Vehicles;

  @Column()
  date: Date;

  @Column()
  value: number;

  @Column()
  type: string;

  @Column()
  commision: number;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { History };
