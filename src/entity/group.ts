import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Guild } from "./guild";
import { Post } from "./post";

@Entity()
export class Group {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  description: string;

  @ManyToOne( type => Guild, guild => guild.groups)
  guild: Guild;

  @OneToMany( type => Post, post => post.entity)
  posts: Post[];
}