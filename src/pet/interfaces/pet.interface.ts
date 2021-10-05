import { Pet } from '../entities/pet.entity';

export interface IPet extends Pet {
  //   /**
  //    * unique ID for document
  //    */
  //   _id: string;

  /**
   * name for pet
   */
  name: string;
}
