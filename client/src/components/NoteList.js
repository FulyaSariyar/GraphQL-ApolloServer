import React from "react";
import NoteCard from "./NoteCard";
import Loading from "./Loading";
import {gql} from "@apollo/client"
import { useQuery } from "@apollo/client";

const NOTES = gql`
 query getNotes{
  notes{
    id
    description
    title
    author{
      id
      name
      age
      photo
    }
    }
  }
 ` ;
const NoteList = () => {
  const{loading, error, data}= useQuery(NOTES)
  if(loading) return <loading></loading>
  if(error) return `Error:${error.message}`
  return (
    <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {data ?.NOTES?.map(notw=>(
      <NoteCard key={NOTES.id}note ={NOTES} />
      ))}
     
    </div>
  );
};

export default NoteList;
