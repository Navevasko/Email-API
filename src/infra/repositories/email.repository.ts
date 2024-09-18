import { Injectable } from '@nestjs/common';
import { PrismaService } from './../../main/config/prisma/prisma.service';
import { SendEmailDto } from 'src/presentation/dtos/email/send-email.dto';

@Injectable()
export class EmailRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createEmailDto: SendEmailDto) {
    return await this.prisma.email.create({
      data: { ...createEmailDto }
    });
  }

  async findAll() {
    return await this.prisma.email.findMany();
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
}
