import { Image } from './image';

export class Product {
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public price: number,
        public grade: string,
        public sweet: string,
        public created_at: string,
        public updated_at: string,
        public image?: Image
    ) {}
}
