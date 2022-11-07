import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUsersDto } from './dto/create-users.dto';
import { UpdateUsersDto } from './dto/update-users.dto';
import { ResponseUsersDto } from './dto/response-users.dto';
import { AuthGuard } from '@nestjs/passport';
import { scrawlConfig } from 'src/configs/configs.constants';
import { CheckUserExistDto } from './dto/check-user.dto';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('check-user-exist')
  checkUserExist(@Query() checkUserExistDto: CheckUserExistDto) {
    return this.usersService.checkUserExist(checkUserExistDto);
  }

  @Post('get-scrawl-key')
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  GetScrawlKey() {
    return this.usersService.hashPassword(scrawlConfig.scrawlKey);
  }

  @Post()
  @ApiOkResponse({ type: ResponseUsersDto })
  create(@Body() createUsersDto: CreateUsersDto) {
    return this.usersService.create(createUsersDto);
  }

  @Get()
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @ApiOkResponse({ type: [ResponseUsersDto] })
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @ApiOkResponse({ type: ResponseUsersDto })
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: ResponseUsersDto })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  update(@Param('id') id: string, @Body() updateUsersDto: UpdateUsersDto) {
    return this.usersService.update(id, updateUsersDto);
  }

  @Delete(':id')
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @ApiOkResponse()
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
