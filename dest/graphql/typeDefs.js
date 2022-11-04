"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoType = void 0;
const graphql_1 = require("graphql");
exports.todoType = new graphql_1.GraphQLObjectType({
    name: 'todo',
    fields: () => ({
        id: { type: graphql_1.GraphQLID },
        description: { type: graphql_1.GraphQLString }
    })
});
