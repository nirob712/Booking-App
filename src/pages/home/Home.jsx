import Header from "../../components/header/Header";
import NavBar from "../../components/navbar/NavBar";
import "./home.css";
const Home = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <div className="homeContainer"></div>
    </div>
  );
};

export default Home;
