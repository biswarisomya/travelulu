import Header from "@/app/Header/Header";
import Main from "@/app/HomePage/Main/Main";
import TravelData from "@/app/HomePage/TravelData/TravelData";
import ToolList from "@/app/HomePage/ToolList/ToolList";
import PhotoGallery from "@/app/HomePage/PhotoGallery/PhotoGallery";
import PlanningAhead from "@/app/HomePage/PlanningAhead/PlanningAhead";
import Testimonials from "@/app/HomePage/Testimonials/Testimonials";
import ContactBox from "@/app/HomePage/ContactBox/ContactBox";
import Footer from "@/app/Footer/Footer";

const Homepage = () => {
  return (
    <>
      <Header />
      <Main />
      <TravelData />
      <ToolList />
      <PhotoGallery />
      <PlanningAhead />
      <Testimonials />
      <ContactBox />
      <Footer />
    </>
  );
};

export default Homepage;
