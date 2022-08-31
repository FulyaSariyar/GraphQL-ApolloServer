import {gql} from 'apollo-server'


const typeDefs = gql`
type Query{
    # Notes for homepage
    notes:[Note!]!
}
   "Author Description"
   type Author {
    id:ID!
    "The name of the author"
    name:String!
    "The age of the author"
    age:Int!
    "The photo URL of the author"
    photo:String
   }

   "Notes Description"
   type Note{
    id:ID!
      "The title of the note"
    title:String!
    "The description of the note"
    description:String!
   }
        ` 
module.export = typeDefs;