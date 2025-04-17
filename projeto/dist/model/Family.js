"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Order_1 = __importDefault(require("./Order"));
class Family extends Order_1.default {
    constructor(cellType, nutrition, symmetry, skeletalSystem, locommotion, reproduction) {
        super(cellType, nutrition, symmetry, skeletalSystem, locommotion);
        this.reproduction = reproduction;
    }
}
exports.default = Family;
