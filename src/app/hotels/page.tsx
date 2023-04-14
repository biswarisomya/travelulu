import Header from "@/app/Header/Header";
import Footer from "@/app/Footer/Footer";
import ContactBox from "@/app/HomePage/ContactBox/ContactBox";
import SearchFormTop from "@/app/hotels/SearchFormTop/SearchFormTop";
import SearchFormSide from "@/app/hotels/SearchFormSide/SearchFormSide";
import Properties from "@/app/hotels/Properties/Properties";
import MainPage from "@/app/hotels/MainPage/MainPage";
import Notice from "@/app/hotels/Notice/Notice";
import Warning from "@/app/hotels/Warning/Warning";

const Page = () => {
  return (
    <div>
      <SearchFormTop />
      <MainPage />
      <Notice />
      <Warning />
      <ContactBox />
    </div>
  );
};

export default Page;
