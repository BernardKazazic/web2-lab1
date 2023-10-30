import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm"
import { Competition } from './competition'
import { Match } from './match'


@Entity()
export class Round {
    @PrimaryGeneratedColumn()
    id!: number

    @ManyToOne(() => Competition, (competition) => competition.rounds, { onDelete: 'CASCADE' })
    competition!: Competition

    @OneToMany(() => Match, (match) => match.round)
    matches!: Match[]
}