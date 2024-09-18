import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../main/config/prisma/prisma.service';
import { SendEmailDto } from 'src/presentation/dtos/email/send-email.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class EmailRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createEmailDto: SendEmailDto) {
    const payload: Prisma.EmailCreateInput = {
      ...createEmailDto,
      from: {
        connect: {
          id: createEmailDto.to
        }
      }
    };

    return await this.prisma.email.create({
      data: payload
    });
  }

  async findAll(userId: number) {
    const where: Prisma.EmailWhereInput = userId ? { idUser: userId } : {};

    return await this.prisma.email.findMany({
      where
    });
  }

  async findOne(id: number) {
    return await this.prisma.email.findUnique({
      where: { id }
    });
  }

  async remove(id: number) {
    return await this.prisma.email.delete({
      where: { id }
    });
  }

  async favorite(id: number, isFavorited: boolean) {
    return await this.prisma.email_User.update({
      where: { id: id },
      data: { isFavorited: isFavorited }
    });
  }

  async findAllReceived(userId: number) {
    const where: Prisma.Email_UserWhereInput = { user: { id: userId } };

    return await this.prisma.email_User.findMany({
      where,
      include: {
        email: true
      }
    });
  }
}
