import { Controller, Get } from '@nestjs/common';

@Controller('index')
export class IndexController {
    @Get()
    findall(): string {
        return 'Welcome to the best API!';
    }
}
