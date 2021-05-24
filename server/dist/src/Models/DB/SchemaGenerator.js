"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemaGenerator = void 0;
const SchemaGenerator = (sequelize, schemaName, schemaForm) => (sequelize.define(schemaName, schemaForm));
exports.SchemaGenerator = SchemaGenerator;
