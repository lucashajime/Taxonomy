"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Kingdom_1 = __importDefault(require("./Kingdom"));
class Phylum extends Kingdom_1.default {
    constructor(cellType, nutrition, symmetry) {
        super(cellType, nutrition);
        this.symmetry = symmetry;
    }
}
exports.default = Phylum;
