import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private coursesRepository: Repository<Course>,
  ) {}

  create(course: Partial<Course>) {
    const newCourse = this.coursesRepository.create(course);
    return this.coursesRepository.save(newCourse);
  }

  findAll() {
    return this.coursesRepository.find();
  }

  findOne(id: number) {
    return this.coursesRepository.findOne({ where: { id } });
  }

  async update(id: number, course: Partial<Course>) {
    await this.coursesRepository.update(id, course);
    return this.findOne(id);
  }

  async remove(id: number) {
    const course = await this.findOne(id);
    if (!course) return null;
    await this.coursesRepository.delete(id);
    return course;
  }
}
