"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Class_1 = __importDefault(require("./Class"));
class Order extends Class_1.default {
    constructor(cellType, nutrition, symmetry, skeletalSystem, locommotion) {
        super(cellType, nutrition, symmetry, skeletalSystem);
        this.locommotion = locommotion;
    }
}
exports.default = Order;
