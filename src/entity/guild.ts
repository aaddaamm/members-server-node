import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { User } from "./user";
import { Group } from "./group";
import { Post } from "./post";

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

  @ManyToOne((type) => Group, (group) => group.guild)
  groups: boolean;

  @ManyToMany((type) => User, (user) => user.guilds)
  users: User[];

  @OneToMany((type) => Post, (post) => post.entity)
  posts: Post[];
}
