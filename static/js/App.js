import { useContext, useState, useEffect } from "react";
import { Box, useMediaQuery } from "@mui/material";
import Header from "./components/Header";
import FeatureSlider from "./pages/FeatureSlider";
import HeroSection1 from "./pages/HeroSection1";
import DebitCard from "./pages/DebitCard";
import Rewards from "./pages/Rewards";
import EcoSystem from "./pages/EcoSystem";
import RealWorld from "./pages/RealWorld";
import DetailCta from "./pages/DetailCta";
import GiveawayCta from "./pages/GiveawayCta";
import Faq from "./pages/Faq";
import Tokenomics from "./pages/Tokenomics";
import Contract from "./pages/Contract";
import Roadmap from "./pages/Roadmap";
import Team from "./pages/Team";
import Footer from "./pages/Footer";
import mbhomebg from "./Images/mbhomebg.svg";
import homebg from "./Images/homebg.png";
import background from "./Images/background.png";

function App() {
  const matches = useMediaQuery("(max-width:950px)");
  const matches1 = useMediaQuery("(min-width:1900px)");
  return (
    <>
     <Box position="relative" zIndex={1}>
    <img
          src={matches ? mbhomebg : homebg}
          width={matches1 ? "60%" : matches ? "240px" : "65.2%"}
          style={{
            right: "0%",
            top: "0%",
            position: "absolute",
            zIndex: 0,
          }}
          alt=""
        />
    <Header />
    {/* <HeroSection /> */}
    <HeroSection1 />
    <FeatureSlider />
    </Box>
    <Box
        sx={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          // backgroundAttachment: "fixed",
          // backgroundPosition: "100% 100%",
          backgroundPosition: "center bottom",
          marginTop: "64px",
          padding: 0,
        }}
      >
        {/* <Video /> */}
        <DebitCard />
        <Rewards />
         <EcoSystem />
        <RealWorld />
        <Tokenomics />
        <Contract />
        <Roadmap />
        <DetailCta />
        <GiveawayCta />
        <Faq />
        <Team />
        </Box>
      <Footer />
    </>
  );
}

export default App;
