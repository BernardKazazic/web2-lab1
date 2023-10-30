import { Entity, PrimaryGeneratedColumn, OneToOne, ManyToOne, JoinColumn } from 'typeorm';
import { Competitor } from './competitor'
import { Round } from './round';

@Entity()
export class Match {
    @PrimaryGeneratedColumn()
    id!: number

    @OneToOne(() => Competitor)
    @JoinColumn()
    competitor1!: Competitor

    @OneToOne(() => Competitor)
    @JoinColumn()
    competitor2!: Competitor

    @OneToOne(() => Competitor)
    @JoinColumn()
    winner!: Competitor | null

    @ManyToOne(() => Round, (round) => round.matches)
    round!: Round
}