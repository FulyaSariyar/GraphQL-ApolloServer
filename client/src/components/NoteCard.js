import React from "react";

const NoteCard = ({NOTES}) => {
  const {id,title,description,author} = NOTES;
  return (
    <div classname="card m-2 cursor-pointer border border-purple-400 rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200">
      <div classname="m-4">
        <h2 classname="text-lg mb-2 text-purple-900">{title}</h2>
        <p classname="font-light font-mono text-sm text-indigo-600 hover:text-gray-900 transition-all duration-200">
         {description}
        </p>
      </div>
    </div>
  );
};

export default NoteCard;
