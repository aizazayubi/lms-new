import { PartialType } from '@nestjs/mapped-types';
import { CreateCourseDto } from './create_course.dto';

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
export class UpdateCourseDto extends PartialType(CreateCourseDto) {}
