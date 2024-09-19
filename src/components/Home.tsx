import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { useUserAuth } from "@/context/UserAuthContext";
import auth from "@/firebase";

function Home() {
  const navigate = useNavigate();
  const { user, logOut } = useUserAuth();

  const handleLogOut = async (e) => {
    await logOut(auth);
    navigate("/");
  };

  return (
    <div className="p-4 box">
      <p>Hello, Welcome</p>
      <span className="email">{user.email}</span>
      <p></p>
      <div className="d-grid">
        <Button variant="primary" onClick={handleLogOut}>
          Logout
        </Button>
      </div>
    </div>
  );
}

export default Home;
