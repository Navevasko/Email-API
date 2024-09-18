import { IsString, IsOptional, IsBoolean, IsInt, IsDateString, IsEnum, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

enum Priority {
  NORMAL = 'NORMAL'
}

enum EmailType {
  FROM = 'DE',
  TO = 'TO',
  CC = 'CC',
  BCC = 'BCC'
}

class EmailUserDto {
  @IsEnum(EmailType)
  type: EmailType;

  @IsBoolean()
  isFavorited: boolean;

  @IsInt()
  idUser: number;
}

export class SendEmailDto {
  @IsInt()
  @IsOptional()
  id?: number;

  @IsString()
  emailRemente: string;

  @IsString()
  nomeRemetente: string;

  @IsString()
  assunto: string;

  @IsString()
  body: string;

  @IsDateString()
  @Type(() => Date)
  dataEnvio: Date;

  @IsEnum(Priority)
  prioridade: Priority;

  @IsString()
  idMessageResponse: string;

  @IsEnum(EmailType)
  type: EmailType;

  @IsDateString()
  @IsOptional()
  @Type(() => Date)
  dataRecebimento?: Date;

  @IsBoolean()
  statusLeitura: boolean;

  @IsString()
  boxFolder: string;

  @IsString()
  para: string;

  @IsString()
  cc: string;

  @IsString()
  bcc: string;

  @ValidateNested()
  @Type(() => EmailUserDto)
  emailUser: EmailUserDto;

  @IsInt()
  to: number;
}
