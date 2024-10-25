import { Link } from "react-router-dom";
import Header from "../../componant/layout/Header";

export default function Contracts() {
  return (
    <div>
      <Header first={"Home"} second={"contract"} />
      <Link to={"/contract/addContract"}>Add Contract</Link>
    </div>
  );
}
