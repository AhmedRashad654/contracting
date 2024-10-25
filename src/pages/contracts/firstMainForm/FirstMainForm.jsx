import { Link,  useNavigate } from "react-router-dom";

export default function FirstMainForm() {
  const navigate = useNavigate()
  return (
    <div>
      <h1>FirstMainForm</h1>
      <Link to={"/contract/addContract/BOQ"}>next</Link>
      <br />
      <button onClick={() => navigate(-1)}>back</button>
    </div>
  );
}
