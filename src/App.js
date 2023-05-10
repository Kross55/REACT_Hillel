import React from "react";
import './App.css';
import WeatherSection from "./Components/WeatherSection";
import FormSection from "./Components/FormSection";
import Footer from "./Components/Footer";

function App() {
  //const isLoading = true;

  return (
    <div>   
      <FormSection />
      <WeatherSection />
      <Footer />    
    </div>
  );
}

export default App;
