import SearchFormSide from "@/app/hotels/SearchFormSide/SearchFormSide";
import Properties from "@/app/hotels/Properties/Properties";

const MainPage = () => {
  return (
    <div className="flex">
      <SearchFormSide />
      <Properties />
    </div>
  );
};
export default MainPage;
