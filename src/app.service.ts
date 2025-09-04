import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Score } from './score.entity';

@Injectable()
export class AppService {
    constructor(
        @InjectRepository(Score)
        private scoreRepository: Repository<Score>,
    ) {}

    async saveScore(score: number) {
        const newScore = this.scoreRepository.create({
            score,
            time: new Date(),
        });
        await this.scoreRepository.save(newScore);
    }

    async getLeaderboard() {
        return this.scoreRepository.find({
            order: { id: 'DESC' },
            take: 10,
        });
    }
}