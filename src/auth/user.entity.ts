import * as bcrypt from 'bcrypt';
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { Trip } from './trip.entity';

@Entity()
@Unique(['username'])
@Unique(['email'])
@Unique(['phoneNumber'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ nullable: true })
  public username: string;

  @Column()
  public email: string;

  @Column({ nullable: true })
  public phoneNumber: string;

  @Column()
  public password: string;

  @Column()
  public firstName: string;

  @Column()
  public lastName: string;

  @Column('date')
  public dateOfBirth: Date;

  @Column({ nullable: true })
  public gender: string;

  @Column()
  public country: string;

  @Column({ nullable: true })
  public city: string;

  @Column({ nullable: true })
  public homeAddress: string;

  @Column()
  public salt: string;

  @OneToMany(type => Trip, trip => trip.user, { eager: true })
  public trips: Trip[];

  public async validatePassword(password: string): Promise<boolean> {
    const hash: string = await bcrypt.hash(password, this.salt);

    return (hash === this.password);
  }
}
