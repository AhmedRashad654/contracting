import { Link, useNavigate } from "react-router-dom";
export default function Deduction() {
      const navigate = useNavigate();
  return (
    <div>
      <h1>Deduction</h1>
      <Link to={"/contract/addContract/addition"}>next</Link>
      <br />
      <button onClick={() => navigate(-1)}>back</button>
    </div>
  );
}
