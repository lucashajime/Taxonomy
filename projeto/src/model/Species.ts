import Genus from "./Genus";

export default class Species extends Genus {
    constructor (
        cellType: 'Prokaryote' | 'Eukaryote',
        nutrition: 'Autotroph' | 'Heterotroph',
        symmetry: 'Bilateral' | 'Radial' | 'Assymetrical',
        skeletalSystem: 'Vertebrate' | 'Invertebrate',
        locommotion: 'Aquatic' | 'Aerial' | 'Terrestrial',
        reproduction: 'Viviparous' | 'Oviparous' | 'Ovoviviparous',
        morphologicalTraits: string,
        public scientificName: string,
        public habitat: string
    ) {
        super (cellType, nutrition, symmetry, skeletalSystem, locommotion, reproduction, morphologicalTraits);
    }
}