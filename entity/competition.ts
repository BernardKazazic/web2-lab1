import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm"
import { Competitor } from './competitor';
import { Round } from './round';

@Entity()
export class Competition {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    userId!: string

    @Column()
    win!: number

    @Column()
    draw!: number

    @Column()
    lose!: number

    @OneToMany(() => Competitor, (competitor) => competitor.competition)
    competitors!: Competitor[]

    @OneToMany(() => Round, (round) => round.competition)
    rounds!: Round[]
}