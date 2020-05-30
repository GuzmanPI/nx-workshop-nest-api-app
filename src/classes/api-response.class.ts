import { HttpStatus } from '@nestjs/common';

export class ApiResponse {
  readonly copyRight: string;
  statusCode: HttpStatus;
  data: any;

  constructor(statusCode: HttpStatus, data?: any) {
    this.copyRight = 'Data provided by Angular Mastery ©';
    this.statusCode = statusCode;
    this.data = data;
  }
}
