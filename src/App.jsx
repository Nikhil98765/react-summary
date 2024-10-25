import { useState } from "react";

import { PostsList } from "./components/PostsList.jsx";
import MainHeader from "./components/MainHeader.jsx";

function App() {

  const [modalIsVisible, setModalIsVisible] = useState(false);
  
  function hideModalHandler() {
    setModalIsVisible(false);
  }

  function showModalHandler() {
    setModalIsVisible(true);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler}></MainHeader>
      <main>
        <PostsList isPosting={modalIsVisible} onStopPosting={hideModalHandler}/>
      </main>
    </>
  );
}

export default App;
