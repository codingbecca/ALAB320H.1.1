import "./Homepage.css"

import EmployeeList from "./EmployeeList";
import Header from "./Header";
import SearchBar from "./SearchBar";
import Learner from "./Learner";

export default function Homepage() {
  return (
    <div className="homepage">
      <Header />
      <SearchBar />
      <div>
      <EmployeeList />

      </div>
      {/* <Learner /> */}
    </div>
  );
}
