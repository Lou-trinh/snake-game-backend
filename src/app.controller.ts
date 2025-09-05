import { Controller, Post, Body, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Post('submit-score')
    async submitScore(@Body() body: { score: number, name: string }) {
        await this.appService.saveScore(body.score, body.name);
        return { message: 'Điểm số đã được lưu thành công!' };
    }

    @Get('leaderboard')
    async getLeaderboard(): Promise<any[]> {
        return this.appService.getLeaderboard();
    }
}