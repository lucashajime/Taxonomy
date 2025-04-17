import TaxonomyControl from "./controller/TaxonomyControl";
import TaxonomyView from "./view/TaxonomyView";
import { CreatureData } from "./view/CreatureData";

const lionData: CreatureData = {
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

const taxonomyController = new TaxonomyControl();
const taxonomyViewer = new TaxonomyView();

try {
    const lion = taxonomyController.createSpecies(lionData);

    taxonomyViewer.showSpecies(lion);

} catch (error) {
    console.error("Error:");
}