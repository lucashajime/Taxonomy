"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Genus_1 = __importDefault(require("./Genus"));
class Species extends Genus_1.default {
    constructor(cellType, nutrition, symmetry, skeletalSystem, locommotion, reproduction, morphologicalTraits, scientificName, habitat) {
        super(cellType, nutrition, symmetry, skeletalSystem, locommotion, reproduction, morphologicalTraits);
        this.scientificName = scientificName;
        this.habitat = habitat;
    }
}
exports.default = Species;
