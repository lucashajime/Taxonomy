"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Domain_1 = __importDefault(require("./Domain"));
class Kingdom extends Domain_1.default {
    constructor(cellType, nutrition) {
        super(cellType);
        this.nutrition = nutrition;
    }
}
exports.default = Kingdom;
