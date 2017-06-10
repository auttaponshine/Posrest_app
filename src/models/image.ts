export class Image { 
		constructor(
        public id: number,
        public fileName: string,
        public productId: number,
        public created_at: string,
        public updated_at: string,
    ) {}
}