import ContactBox from "@/app/HomePage/ContactBox/ContactBox";
import SearchFormTop from "@/app/hotels/SearchFormTop/SearchFormTop";
import MainPage from "@/app/hotels/MainPage/MainPage";
import Notice from "@/app/hotels/Notice/Notice";
import Warning from "@/app/hotels/Warning/Warning";

const Page = () => {
  return (
    <>
      <SearchFormTop />
      <MainPage />
      <Notice />
      <Warning />
      <ContactBox />
    </>
  );
};

export default Page;
