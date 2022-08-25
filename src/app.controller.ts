import { Controller, Get } from '@nestjs/common';
import { Administrator } from 'entities/administrator.entity';
import { AppService } from './app.service';
import { AdministratorService } from './services/administrator/administrator.service';

@Controller()
export class AppController {
	constructor(private readonly appService: AppService, private adminstratorService: AdministratorService) { }

	@Get()
	getHello(): string {
		return this.appService.getHello();
	}

	@Get('api/administrator')
	getAllAdmins(): Promise<Administrator[]> {
		return this.adminstratorService.getAll();
	}

	@Get('api/administrator/:id')
	getAdminById(id: number): Promise<Administrator> {
		return this.adminstratorService.getById(2);
	}
}
