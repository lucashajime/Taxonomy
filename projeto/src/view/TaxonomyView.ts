import Species from "../model/Species";

export default class TaxonomyView {
    public showSpecies(species: Species): void {
        console.log(`Scientific name: ${species.scientificName}`);
        console.log(`Habitat: ${species.habitat}`);
    }
}