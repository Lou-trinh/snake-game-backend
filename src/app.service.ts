import { Injectable } from '@nestjs/common';

interface Score {
    id: number;
    score: number;
    time: Date;
}

@Injectable()
export class AppService {
    private scores: Score[] = [];
    private nextId = 1;

    async saveScore(score: number) {
        this.scores.push({
            id: this.nextId++,
            score,
            time: new Date(),
        });
    }

    async getLeaderboard() {
        return this.scores
            .sort((a, b) => b.id - a.id) // Sort by id in descending order (newest first)
            .slice(0, 10); // Take top 10
    }
}