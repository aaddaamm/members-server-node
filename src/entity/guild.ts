import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";

import { User } from "./user";
import { Group } from "./group";
import { Post } from "./post";

@Entity()
@ObjectType()
export class Guild {
  @Field(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field(() => String)
  @Column()
  name: string;

  @Field(() => String)
  @Column()
  type: string;

  @Field(() => String)
  @Column()
  description: string;

  @Field(() => [Group])
  @OneToMany((type) => Group, (group) => group.guild)
  groups: Group[];

  // @Field(() => [User])
  // @ManyToMany((type) => User, (user) => user.guilds)
  // users: User[];

  @Field(() => [Post])
  @OneToMany((type) => Post, (post) => post.entity)
  posts: Post[];
}
