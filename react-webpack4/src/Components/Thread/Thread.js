import { useNavigate } from "react-router-dom";

export default function Thread() {
  const history = useNavigate();
  const buttonHandler = () => {
    history.push("/home");
  };
  return (
    <section>
      <h1>Welcome to the Thread component</h1>
      <p>This is the Thread component</p>
      <button onClick={buttonHandler}>Home</button>
    </section>
  );
}