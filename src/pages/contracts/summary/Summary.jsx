import { useNavigate } from "react-router-dom";

export default function Summary() {
      const navigate = useNavigate();
  return (
    <div>
      <h1>Summary</h1><br />
      <button onClick={() => navigate(-1)}>back</button>
    </div>
  );
}
