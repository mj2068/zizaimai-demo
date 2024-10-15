import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import IconArrowLeft from "~icons/mdi/arrow-left";

const BackButton: React.FC = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Button
      onClick={handleGoBack}
      icon={<IconArrowLeft style={{ fontSize: "1.2rem" }} />}
    ></Button>
  );
};

export default BackButton;
