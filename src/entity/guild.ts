import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Guild {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  description: string;

  @Column()
  subGroups: boolean;
}