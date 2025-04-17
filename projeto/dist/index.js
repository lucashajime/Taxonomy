"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TaxonomyControl_1 = __importDefault(require("./controller/TaxonomyControl"));
const TaxonomyView_1 = __importDefault(require("./view/TaxonomyView"));
const lionData = {
    cellType: 'Eukaryote',
    nutrition: 'Heterotroph',
    symmetry: 'Bilateral',
    skeletalSystem: 'Vertebrate',
    locommotion: 'Terrestrial',
    reproduction: 'Viviparous',
    morphologicalTraits: 'Retractable claws, mane',
    scientificName: 'Panthera leo',
    habitat: 'Savanna'
};
const taxonomyController = new TaxonomyControl_1.default();
const taxonomyViewer = new TaxonomyView_1.default();
try {
    const lion = taxonomyController.createSpecies(lionData);
    taxonomyViewer.showSpecies(lion);
}
catch (error) {
    console.error("Error:");
}
