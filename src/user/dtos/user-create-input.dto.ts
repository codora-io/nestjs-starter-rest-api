import { IsNotEmpty, IsString } from 'class-validator';

import { ROLE } from '../../auth/constants/role.constant';

export class CreateUserInput {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  roles: ROLE[];
}
