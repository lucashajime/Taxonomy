import Kingdom from "./Kingdom";

export default class Phylum extends Kingdom {
    constructor (
        cellType: 'Prokaryote' | 'Eukaryote',
        nutrition: 'Autotroph' | 'Heterotroph',
        public symmetry: 'Bilateral' | 'Radial' | 'Assymetrical'
    ) {
        super (cellType, nutrition);
    }
}