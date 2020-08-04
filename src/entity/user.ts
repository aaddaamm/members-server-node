import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryColumn()
  id!: number;

  @Column()
  firstName!: string;

  @Column()
  lastName!: string;

  @Column()
  street?: string;

  @Column()
  street2?: string;

  @Column()
  city?: string;

  @Column()
  state?: string;

  @Column()
  zipCode?: string;

  @Column()
  description?: string;

  @Column()
  mobile!: string;

  @Column()
  email!: string;

  @Column()
  birthday?: string;

  @Column()
  picture?: string;
}