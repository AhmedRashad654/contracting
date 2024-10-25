import { Link, useNavigate } from "react-router-dom";

export default function BOQ() {
    const navigate = useNavigate()
  return (
    <div>
      <h1>BOQ</h1>
      <Link to={"/contract/addContract/deduction"}>next</Link>
      <br />
      <button onClick={() => navigate(-1)}>back</button>
    </div>
  );
}
