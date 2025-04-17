import Class from "./Class";

export default class Order extends Class {
    constructor (
        cellType: 'Prokaryote' | 'Eukaryote',
        nutrition: 'Autotroph' | 'Heterotroph',
        symmetry: 'Bilateral' | 'Radial' | 'Assymetrical',
        skeletalSystem: 'Vertebrate' | 'Invertebrate',
        public locommotion: 'Aquatic' | 'Aerial' | 'Terrestrial'
    ) {
        super (cellType, nutrition, symmetry, skeletalSystem);
    }
}