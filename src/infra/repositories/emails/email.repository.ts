import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../main/config/prisma/prisma.service';
import { SendEmailDto } from 'src/presentation/dtos/email/send-email.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class EmailRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createEmailDto: any) {
    return await this.prisma.email.create({
      data: createEmailDto
    });
  }

  async findLast(idFromUser: string) {
    return await this.prisma.email.findFirst({
      where: {
        idFromUser: idFromUser
      },
      orderBy: {
        created_at: 'desc'
      }
    });
  }

  async findAll(userId: string) {
    const where: Prisma.EmailWhereInput = userId ? { idFromUser: userId } : {};

    return await this.prisma.email.findMany({
      where
    });
  }

  async findOne(id: string) {
    return await this.prisma.email.findUnique({
      where: { id }
    });
  }

  async remove(id: string) {
    return await this.prisma.email.delete({
      where: { id }
    });
  }

  async favorite(id: string, isFavorited: boolean) {
    return await this.prisma.email.update({
      where: { id: id },
      data: { isFavorited: isFavorited }
    });
  }

  async findAllReceived(userId: string, isFavorited?: boolean) {
    const where: any = { idToUser: userId };

    if (isFavorited !== undefined) {
      where.isFavorited = isFavorited;
    }

    return await this.prisma.email.findMany({
      where
    });
  }
}
