"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Phylum_1 = __importDefault(require("./Phylum"));
class Class extends Phylum_1.default {
    constructor(cellType, nutrition, symmetry, skeletalSystem) {
        super(cellType, nutrition, symmetry);
        this.skeletalSystem = skeletalSystem;
    }
}
exports.default = Class;
