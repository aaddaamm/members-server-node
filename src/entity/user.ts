import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";

import { Guild } from "./guild";

@Entity()
@ObjectType()
export class User extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field(() => String)
  @Column()
  firstName: string;

  @Field(() => String)
  @Column()
  lastName: string;

  @Field(() => String)
  @Column()
  mobile: string;

  @Field(() => String)
  @Column()
  email: string;

  @Field(() => String)
  @Column({ nullable: true })
  street: string;

  @Field(() => String)
  @Column({ nullable: true })
  street2: string;

  @Field(() => String)
  @Column({ nullable: true })
  city: string;

  @Field(() => String)
  @Column({ nullable: true })
  state: string;

  @Field(() => String)
  @Column({ nullable: true })
  zipCode: string;

  @Field(() => String)
  @Column({ nullable: true })
  description: string;

  @Field(() => String)
  @Column({ nullable: true })
  birthday: string;

  @Field(() => String)
  @Column({ nullable: true })
  picture: string;

  // @Field(() => [Guild])
  // @ManyToMany((type) => Guild, (guild) => guild.users)
  // @JoinTable()
  // guilds: Guild[];
}
