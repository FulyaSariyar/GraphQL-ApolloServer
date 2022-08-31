const {ApolloServer} = require('apollo-server');
const typeDefs = require ('./schema')

const server = new ApolloServer({
    typeDefs : typeDefs
})

server.listen().then(() => {
    console.log('Server is running on port 4000, Query at: https://studio.apollographql.com/dev')
});
