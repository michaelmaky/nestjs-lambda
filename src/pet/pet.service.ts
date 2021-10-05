import { Injectable } from '@nestjs/common';
import { CreatePetDto, UpdatePetDto } from './dto';
import { Pet } from './entities';

@Injectable()
export class PetService {
  create(createPetDto: CreatePetDto) {
    return 'This action adds a new pet';
  }

  findAll() {
    return [new Pet('Dog'), new Pet('Cat')];
  }

  findOne(id: number) {
    return `This action returns a #${id} pet`;
  }

  update(id: number, updatePetDto: UpdatePetDto) {
    return `This action updates a #${id} pet`;
  }

  remove(id: number) {
    return `This action removes a #${id} pet`;
  }
}
