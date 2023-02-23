import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Courses } from "../../sections/Courses";
import { Home } from "../../sections/Home";

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
