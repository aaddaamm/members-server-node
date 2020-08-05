import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";

import { Guild } from "./guild";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName!: string;

  @Column()
  mobile: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  street: string;

  @Column({ nullable: true })
  street2: string;

  @Column({ nullable: true })
  city: string;

  @Column({ nullable: true })
  state: string;

  @Column({ nullable: true })
  zipCode: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  birthday: string;

  @Column({ nullable: true })
  picture: string;

  @ManyToMany((type) => Guild, (guild) => guild.users)
  @JoinTable()
  guilds: Guild[];
}
