import "./App.css";
import Demo from "./components/Demo";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Demo />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
