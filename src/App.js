import React from 'react';
import ColorContextProvider from './ColorContext';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import BookContextProvider, { BookContext } from './contexts/BookContext';
import Div from './Div';
import DivContextProvider from './DivContext';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar/>
        <BookList />
        <BookForm />
      </BookContextProvider>

      {/* PRACTISE */}
      {/* <DivContextProvider>
        <ColorContextProvider>
          <Div />
        </ColorContextProvider>
      </DivContextProvider> */}
    </div>
  );
}

export default App;
