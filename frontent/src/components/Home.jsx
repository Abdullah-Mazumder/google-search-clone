import React, { useState } from "react";
import Header from "./Header";
import Helmet from "react-helmet";
import InputField from "./InputField";
import Button from "./Button";
import Footer from "./Footer";

const Home = ({ history }) => {
  const [searchTerm, setSerchTerm] = useState("");
  const search = (e) => {
    e.preventDefault();
    if (searchTerm) {
      history.push("/search?q=" + searchTerm);
    }
  };
  const handleEnterKeyPress = (e) => {
    if (searchTerm && e.key.toLowerCase() === "enter") {
      history.push("/search?q=" + searchTerm);
    }
  };
  return (
    <>
      <Helmet>
        <title>Google</title>
      </Helmet>
      <div className="main-container">
        <Header />
        <div className="main_content">
          <div className="container">
            <img src="http://localhost:3000/google.png" alt="google" />
            <InputField
              searchTerm={searchTerm}
              setSerchTerm={setSerchTerm}
              handleEnterKeyPress={handleEnterKeyPress}
            />
            <div className="buttons">
              <Button onClick={search} text={"Google Search"} />
              <Button text={"I'm Feeling Lucky"} />
            </div>
            <div className="text">
              <p>Google offered in: Bangla</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
