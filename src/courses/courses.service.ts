import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from './entities/course.entity';
import { CreateCourseDto } from './dto/create_course.dto';
import { UpdateCourseDto } from './dto/update_course.dto';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private readonly coursesRepository: Repository<Course>,
  ) {}

  create(dto: CreateCourseDto) {
    const course = this.coursesRepository.create(dto);
    return this.coursesRepository.save(course);
  }

  findAll() {
    return this.coursesRepository.find();
  }

  findOne(id: number) {
    return this.coursesRepository.findOne({ where: { id } });
  }

  async update(id: number, dto: UpdateCourseDto) {
    await this.coursesRepository.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number) {
    const course = await this.findOne(id);
    if (!course) return null;
    await this.coursesRepository.delete(id);
    return course;
  }
}
