import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const BackButton: React.FC = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Button
      onClick={handleGoBack}
      icon={<span className="material-icons">arrow_back</span>}
    >
      Back
    </Button>
  );
};

export default BackButton;
