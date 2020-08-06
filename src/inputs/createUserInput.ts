import { InputType, Field } from "type-graphql";

@InputType()
export default class CreateUserInput {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  mobile: string;

  @Field()
  email: string;

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

}