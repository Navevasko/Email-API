import { Controller, Get, Post, Body, Param, Delete, HttpStatus, HttpCode, Query, Patch } from '@nestjs/common';

import { SendEmailDto } from '../../dtos/email/send-email.dto';

import { SendEmailUseCase } from 'src/data/usecases/email/send-email.usecase';
import { FindEmailByIdUseCase } from 'src/data/usecases/email/find-email-by-id.usecase';
import { FindAllEmailsUseCase } from 'src/data/usecases/email/find-all-emails.usecase';
import { DeleteEmailUseCase } from 'src/data/usecases/email/delete-email.usecase';
import { FavoriteEmailUseCase } from '@data/usecases/email/favorite-email.usecase';
import { FindAllReceivedEmailsUseCase } from '@data/usecases/email/find-all-received-email.usecase';

@Controller('emails')
export class EmailController {
  constructor(
    private readonly sendEmailUseCase: SendEmailUseCase,
    private readonly findEmailByIdUseCase: FindEmailByIdUseCase,
    private readonly findAllEmailsUseCase: FindAllEmailsUseCase,
    private readonly deleteEmailUseCase: DeleteEmailUseCase,
    private readonly favoriteEmailUsecase: FavoriteEmailUseCase,
    private readonly favoriteReceivedEmailUsecase: FindAllReceivedEmailsUseCase
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() sendEmailDto: SendEmailDto) {
    return this.sendEmailUseCase.execute(sendEmailDto);
  }

  @Get()
  findAll(@Query('userId') userId: string) {
    return this.findAllEmailsUseCase.execute(userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.findEmailByIdUseCase.execute(id);
  }

  @Get('/received/:id')
  findReceived(@Param('id') id: string, @Query('isFavorited') isFavorited: string) {
    const isFavoritedBool = isFavorited === 'true';
    return this.favoriteReceivedEmailUsecase.execute(id, isFavoritedBool);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.deleteEmailUseCase.execute(id);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  async favorite(@Param('id') id: string, @Body('isFavorited') isFavorited: boolean) {
    await this.favoriteEmailUsecase.execute(id, isFavorited);
  }
}
