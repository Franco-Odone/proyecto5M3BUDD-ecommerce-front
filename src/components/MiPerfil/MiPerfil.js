import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const MiPerfil = () => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    !auth._id && navigate("/cart-checkout");
  }, [auth._id, navigate]);

  return <p>MiPerfil</p>;
};

export { MiPerfil };
