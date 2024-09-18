import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

import { SendEmailDto } from '../../dtos/email/send-email.dto';

import { SendEmailUseCase } from 'src/data/usecases/email/send-email.usecase';
import { FindEmailByIdUseCase } from 'src/data/usecases/email/find-email-by-id.usecase';
import { FindAllEmailsUseCase } from 'src/data/usecases/email/find-all-emails.usecase';
import { DeleteEmailUseCase } from 'src/data/usecases/email/delete-email.usecase';

@Controller('email')
export class EmailController {
  constructor(
    private readonly sendEmailUseCase: SendEmailUseCase,
    private readonly findEmailByIdUseCase: FindEmailByIdUseCase,
    private readonly findAllEmailsUseCase: FindAllEmailsUseCase,
    private readonly deleteEmailUseCase: DeleteEmailUseCase
  ) {}

  @Post()
  create(@Body() sendEmailDto: SendEmailDto) {
    return this.sendEmailUseCase.send(sendEmailDto);
  }

  @Get()
  findAll() {
    return this.findAllEmailsUseCase.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.findEmailByIdUseCase.findById(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deleteEmailUseCase.delete(+id);
  }
}
