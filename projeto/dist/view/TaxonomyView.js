"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TaxonomyView {
    showSpecies(species) {
        console.log(`Scientific name: ${species.scientificName}`);
        console.log(`Habitat: ${species.habitat}`);
    }
}
exports.default = TaxonomyView;
