import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Guild } from "./guild";
import { Group } from "./group";

@Entity()
export class Post {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  title: string;

  @Column()
  message: string;

  @ManyToOne((type) => Guild || Group, ({ posts }) => posts)
  entity: Guild;
}
