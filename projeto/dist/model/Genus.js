"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Family_1 = __importDefault(require("./Family"));
class Genus extends Family_1.default {
    constructor(cellType, nutrition, symmetry, skeletalSystem, locommotion, reproduction, morphologicalTraits) {
        super(cellType, nutrition, symmetry, skeletalSystem, locommotion, reproduction);
        this.morphologicalTraits = morphologicalTraits;
    }
}
exports.default = Genus;
