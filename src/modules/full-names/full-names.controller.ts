
    import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
    import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
    import { FullNameService } from './full-names.service';
    import { CreateFullNameDto } from './dto/create-full-names.dto';
    import { UpdateFullNameDto } from './dto/update-full-names.dto';
    import { ResponseFullNameDto } from './dto/response-full-names.dto';
    
    @ApiTags('FullName')
    @Controller('full-name')
    export class FullNameController {
      constructor(private readonly fullNameService: FullNameService) {}
    
      @Post()
      @ApiOkResponse({ type: ResponseFullNameDto })
      create(@Body() createFullNameDto: CreateFullNameDto) {
        return this.fullNameService.create(createFullNameDto);
      }
    
      @Get()
      @ApiOkResponse({ type: [ResponseFullNameDto] })
      findAll() {
        return this.fullNameService.findAll();
      }
    
      @Get(':id')
      @ApiOkResponse({ type: ResponseFullNameDto })
      findOne(@Param('id') id: string) {
        return this.fullNameService.findOne(id);
      }
    
      @Patch(':id')
      @ApiOkResponse({ type: ResponseFullNameDto })
      update(@Param('id') id: string, @Body() updateFullNameDto: UpdateFullNameDto) {
        return this.fullNameService.update(id, updateFullNameDto);
      }
    
      @Delete(':id')
      @ApiOkResponse()
      remove(@Param('id') id: string) {
        return this.fullNameService.remove(id);
      }
    }
      