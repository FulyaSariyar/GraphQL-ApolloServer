import {gql} from 'apollo-server'
//Schema
const typeDefs = gql 
' type Query # Notes for homepage {notes:[Note!]!} type AuthorX {id:ID! name:String! age:Int! photo: String} type Note{id:ID! title:String! description: String! aouthor:Author!}'


module.export = typeDefs;