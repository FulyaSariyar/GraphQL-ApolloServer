import React from "react";
import Layout from "./components/Layout";
import NoteList from "./components/NoteList";







const App = () => {
  
 
  return (
    <Layout>
  <NoteList notes ={NoteList.data}></NoteList>
      <NoteList />
    </Layout>
  );
};

export default App;
