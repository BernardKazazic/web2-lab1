import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Competition } from "./competition";

@Entity()
export class Competitor {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    name!: string

    @ManyToOne(() => Competition, (competition) => competition.competitors)
    competition!: Competition
}