import SearchFormSide from "@/app/hotels/SearchFormSide/SearchFormSide";
import Properties from "@/app/hotels/Properties/Properties";

const MainPage = () => {
  return (
    <div className="flex mobile:flex-col">
      <SearchFormSide />
      <Properties />
    </div>
  );
};
export default MainPage;
