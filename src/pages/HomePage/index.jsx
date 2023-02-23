import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Courses } from "../../Sections/Courses";
import { Home } from "../../Sections/Home";

export const HomePage = () => {
  return (
    <>
      <Header />
      <Home />
      <Courses/>
      <Footer/>
    </>
  );
};
