"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Species_1 = __importDefault(require("../model/Species"));
class TaxonomyControl {
    createSpecies(dados) {
        if (!dados.scientificName.indexOf(' ')) {
            throw new Error('Nome científico inválido. Use o formato "Gênero Espécie".');
        }
        return new Species_1.default(dados.cellType, dados.nutrition, dados.symmetry, dados.skeletalSystem, dados.locommotion, dados.reproduction, dados.morphologicalTraits, dados.scientificName, dados.habitat);
    }
}
exports.default = TaxonomyControl;
