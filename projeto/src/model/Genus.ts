import Family from "./Family";

export default class Genus extends Family {
    constructor (
        cellType: 'Prokaryote' | 'Eukaryote',
        nutrition: 'Autotroph' | 'Heterotroph',
        symmetry: 'Bilateral' | 'Radial' | 'Assymetrical',
        skeletalSystem: 'Vertebrate' | 'Invertebrate',
        locommotion: 'Aquatic' | 'Aerial' | 'Terrestrial',
        reproduction: 'Viviparous' | 'Oviparous' | 'Ovoviviparous',
        public morphologicalTraits: string
    ) {
        super (cellType, nutrition, symmetry, skeletalSystem, locommotion, reproduction);
    }
}