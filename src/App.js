import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import AllRoutes from "./Routes/AllRoutes";
import "./Styles/Header.css";
import "./Styles/Footer.css";
import "./Styles/Cart.css";
import "./Styles/cartCard.css";

function App() {
  return (
    <div className="App">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
