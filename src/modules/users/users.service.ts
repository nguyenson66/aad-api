import {
  Injectable,
  NotFoundException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUsersDto } from './dto/create-users.dto';
import { UpdateUsersDto } from './dto/update-users.dto';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { UsersEntity } from './entities/users.entity';
import { CheckUserExistDto } from './dto/check-user.dto';
import { ECommonError } from 'src/common/constants/common.constants';
import { ICheckUserExist } from './interface/checkUserExist.interface';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly usersRepository: Repository<UsersEntity>,
  ) {}

  async hashPassword(password: string) {
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    return {
      salt,
      hashPassword,
    };
  }

  async findUserLogin(emailOrPhone: string) {
    const user = await this.usersRepository.findOne({
      where: [
        {
          email: emailOrPhone,
        },
        {
          phone: emailOrPhone,
        },
      ],
    });
    if (!user) throw new HttpException('message', HttpStatus.NOT_FOUND);

    return user;
  }

  async findOneByEmailOrPhone(email: string, phone: string) {
    return this.usersRepository.findOne({
      where: [
        {
          email,
        },
        {
          phone,
        },
      ],
    });
  }

  async create(createUsersDto: CreateUsersDto) {
    const { email, phone } = createUsersDto;
    const checkUsers = await this.findOneByEmailOrPhone(email, phone);
    if (checkUsers) {
      throw new HttpException('', HttpStatus.CONFLICT);
    }
    const hashPassword = await this.hashPassword(createUsersDto.password);

    return this.usersRepository.save({
      ...createUsersDto,
      salt: hashPassword.salt,
      password: hashPassword.hashPassword,
    });
  }

  findAll() {
    return this.usersRepository.find();
  }

  async findOne(id: string) {
    const checkUsers = await this.usersRepository.findOneBy({ id });
    if (!checkUsers) {
      throw new NotFoundException();
    } else {
      return checkUsers;
    }
  }

  async update(id: string, updateUsersDto: UpdateUsersDto) {
    const checkUsers = await this.usersRepository.findOneBy({ id });
    if (!checkUsers) {
      throw new NotFoundException();
    } else {
      return this.usersRepository.update(id, updateUsersDto);
    }
  }

  async remove(id: string) {
    const checkUsers = await this.usersRepository.findOneBy({ id });
    if (!checkUsers) {
      throw new NotFoundException();
    } else {
      return this.usersRepository.delete(id);
    }
  }

  async checkUserExist(
    checkUserExistDto: CheckUserExistDto,
  ): Promise<ICheckUserExist> {
    const { email, phone } = checkUserExistDto;

    if (!email && !phone) {
      throw new HttpException(
        ECommonError.EMAIL_OR_PHONE_REQUIRED,
        HttpStatus.BAD_REQUEST,
      );
    }
    const user = await this.usersRepository.findOne({
      where: [{ email }, { phone }],
    });

    return user ? { isExist: true } : { isExist: false };
  }
}
