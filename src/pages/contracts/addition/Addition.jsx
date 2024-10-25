import { Link, useNavigate } from "react-router-dom";

export default function Addition() {
      const navigate = useNavigate();
  return (
    <div>
      <h1>Addition</h1>
      <Link to={"/contract/addContract/summary"}>next</Link>
      <br />
      <button onClick={() => navigate(-1)}>back</button>
    </div>
  );
}
