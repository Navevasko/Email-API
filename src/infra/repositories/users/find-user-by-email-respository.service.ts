import { Inject, Injectable } from '@nestjs/common';
import type { User } from '@prisma/client';
import { PrismaService } from '@main/config/prisma/prisma.service';

@Injectable()
export class FindOneUserByEmailRepository {
  @Inject(PrismaService)
  private prisma: PrismaService;

  async execute(email: string) {
    return await this.prisma.user.findFirst({
      where: { email }
    });
  }
}
