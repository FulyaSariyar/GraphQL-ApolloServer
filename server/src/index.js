import {gql} from 'apollo-server'


const typeDefs = gql`
union SearchResult =Book | Author;  
type Book{id:Id!
     title:String! 
     description: String!
      numberOfSold: Int
       price:Float!
        isNew:Boolean
    }
type Author {
            id: ID!
            name: String!
            age:Int!
        }
        ` 
module.export = typeDefs;