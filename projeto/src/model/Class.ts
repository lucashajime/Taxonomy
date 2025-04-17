import Phylum from "./Phylum";

export default class Class extends Phylum {
    constructor (
        cellType: 'Prokaryote' | 'Eukaryote',
        nutrition: 'Autotroph' | 'Heterotroph',
        symmetry: 'Bilateral' | 'Radial' | 'Assymetrical',
        public skeletalSystem: 'Vertebrate' | 'Invertebrate'
    ) {
        super (cellType, nutrition, symmetry);
    }
}