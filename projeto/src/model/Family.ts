import Order from "./Order";

export default class Family extends Order {
    constructor (
        cellType: 'Prokaryote' | 'Eukaryote',
        nutrition: 'Autotroph' | 'Heterotroph',
        symmetry: 'Bilateral' | 'Radial' | 'Assymetrical',
        skeletalSystem: 'Vertebrate' | 'Invertebrate',
        locommotion: 'Aquatic' | 'Aerial' | 'Terrestrial',
        public reproduction: 'Viviparous' | 'Oviparous' | 'Ovoviviparous' 
    ) {
        super (cellType, nutrition, symmetry, skeletalSystem, locommotion);
    }
}