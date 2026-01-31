import { useNavigate } from "react-router-dom";
import helpers from "../services";

const Home = () => {
  const navigate = useNavigate();

  const newBinHandler = async () => {
    const binPath = await helpers.createBin();
    navigate(`/display/${binPath}`);
  };

  return (
    <>
      <div className="home-page">
        <h1>Request Bin</h1>
        <button className="copy_style" onClick={newBinHandler}>
          Create a bin
        </button>
      </div>
    </>
  );
};

export default Home;
