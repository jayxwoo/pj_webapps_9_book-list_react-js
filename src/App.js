import Header from "./components/Header";
import Home from "./components/Home";
import BookContextProvider from "./contexts/BookContext";


function App() {
  return (
    <div className="app">
      <BookContextProvider>
        <Header />
        <Home />
      </BookContextProvider>
    </div>
  );
}

export default App;
