import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Score } from './score.entity'; // Đảm bảo entity này tồn tại và đúng đường dẫn

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Score)
    private scoresRepository: Repository<Score>,
  ) {}

  async saveScore(points: number): Promise<void> {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const newScore = this.scoresRepository.create({ points });
      await this.scoresRepository.save(newScore);
      console.log(`Score saved: ${points}`);
    } catch (error) {
      // Xử lý lỗi một cách an toàn
      console.error(
        'Failed to save score:',
        error instanceof Error ? error.message : error,
      );
    }
  }

  async getLeaderboard(): Promise<Score[]> {
    return this.scoresRepository.find({
      order: { id: 'DESC' }, // Sắp xếp giảm dần theo ID để lấy điểm mới nhất
      take: 10, // Giới hạn 10 kết quả
    });
  }
}
