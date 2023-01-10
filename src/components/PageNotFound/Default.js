import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Default = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, [navigate]);
};

export { Default };
