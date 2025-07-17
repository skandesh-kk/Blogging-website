"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatepostInput = exports.createpostInput = exports.signinInput = exports.signupInput = void 0;
const zod_1 = __importDefault(require("zod"));
exports.signupInput = zod_1.default.object({
    email: zod_1.default.string().email(),
    password: zod_1.default.string(),
    name: zod_1.default.string().optional()
});
//for also using in frontend 
//typeinference in zod 
//FE developer need not come here and see types they can just use types
//whatever bpoth modules need ,they need not talk to each other whatever both needs
// -extract into separate modules and independently deploy in npm wehich both of them can use 
// - MONOREPOS
exports.signinInput = zod_1.default.object({
    email: zod_1.default.string().email(),
    password: zod_1.default.string()
});
exports.createpostInput = zod_1.default.object({
    title: zod_1.default.string(),
    content: zod_1.default.string(),
});
exports.updatepostInput = zod_1.default.object({
    title: zod_1.default.string(),
    content: zod_1.default.string(),
    id: zod_1.default.string()
});
