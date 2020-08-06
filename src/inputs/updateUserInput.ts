import { InputType, Field } from "type-graphql";
import { Guild } from "../entity/guild";

@InputType()
export default class UpdateUserInput {
  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field({ nullable: true })
  mobile?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  street?: string;

  @Field({ nullable: true })
  street2?: string;

  @Field({ nullable: true })
  city?: string;

  @Field({ nullable: true })
  state?: string;

  @Field({ nullable: true })
  zipCode?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  birthday?: string;

  @Field({ nullable: true })
  picture?: string;

  // @Field(type => Guild, { nullable: true })
  // guilds?: Guild[];
}
