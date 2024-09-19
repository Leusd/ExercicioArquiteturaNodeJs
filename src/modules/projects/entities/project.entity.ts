import { Task } from "../../tasks/entities/task.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';
@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ name: "name", nullable: false })
  name: string;
  @Column({ name: "description", nullable: false })
  description: string;
  @OneToMany(() => Task, (task) => task.project)
  tasks: Task[];
  @ManyToOne(() => User, (user) => user.projects)
  @JoinColumn()
  user: User;
}