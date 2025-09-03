import { Controller, Post, Body, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('submit-score')
  async submitScore(@Body() body: { points: number }) {
    await this.appService.saveScore(body.points);
    return { message: 'Điểm số đã được lưu thành công!' };
  }

  @Get('leaderboard')
  async getLeaderboard() {
    return this.appService.getLeaderboard();
  }
}
