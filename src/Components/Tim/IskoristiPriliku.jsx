import React from "react";
import SectionTitle from "../Utilities/SectionTitle";
import CustomButton from "../Utilities/CustomButton";
import { Link } from "react-router-dom";

const IskoristiPriliku = () => {
  return (
    <div className="iskoristi-priliku">
      <div className="iskoristi-priliku-tekst">
        <SectionTitle color="white" underline="green">
          iskoristi priliku
        </SectionTitle>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          consequatur atque amet perferendis in facere, autem a eius ullam
          repudiandae, assumenda enim! Cum mollitia laudantium dicta iste illum
          architecto vel.
        </p>
      </div>
      <div className="iskoristi-priliku-button">
        <Link to="/prijava">
          <CustomButton variant="tamna">Prijavi se</CustomButton>
        </Link>
      </div>
    </div>
  );
};

export default IskoristiPriliku;
