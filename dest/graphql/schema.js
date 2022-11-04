"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const graphql_1 = require("graphql");
const Queries_1 = require("./Queries");
const rootQuery = new graphql_1.GraphQLObjectType({
    name: 'rootQuery',
    fields: {
        getAllTodos: Queries_1.getAllTodos
    }
});
exports.schema = new graphql_1.GraphQLSchema({
    query: rootQuery
});
