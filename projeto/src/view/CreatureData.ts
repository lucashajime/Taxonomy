export interface CreatureData {
    cellType: 'Prokaryote' | 'Eukaryote',
    nutrition: 'Autotroph' | 'Heterotroph',
    symmetry: 'Bilateral' | 'Radial' | 'Assymetrical',
    skeletalSystem: 'Vertebrate' | 'Invertebrate',
    locommotion: 'Aquatic' | 'Aerial' | 'Terrestrial',
    reproduction: 'Viviparous' | 'Oviparous' | 'Ovoviviparous',
    morphologicalTraits: string,
    scientificName: string,
    habitat: string
}