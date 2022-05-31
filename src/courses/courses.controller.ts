import { Controller, Get } from '@nestjs/common';

@Controller('courses')
export class CoursesController {

@Get()
  findall() {
    return 'A lista de todos os cursos';
}
}
