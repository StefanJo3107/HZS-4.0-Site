import React from "react";
import SectionTitle from "../Utilities/SectionTitle";
import "./IskoristiPriliku.scss";
import CustomButton from "../Utilities/CustomButton";
import { Link } from "react-router-dom";

const IskoristiPriliku = () => {
  return (
    <div className="iskoristi-priliku">
      <div className="left">
        <SectionTitle>iskoristi priliku</SectionTitle>
        <div className="iskoristi-tekst">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ullam
            exercitationem deserunt doloremque ducimus ex dicta adipisci sed,
            cupiditate quia ea architecto maiores illum ipsum delectus tempora
            veritatis dolore magni minima aut? Consequatur similique voluptas
            labore porro nisi laborum ex rem maxime repellendus, molestiae,
            recusandae reiciendis doloribus quam nostrum aspernatur.
          </p>
        </div>
      </div>
      <div className="right">
        <Link to="/prijava">
          <CustomButton variant="tamna">Prijavi se</CustomButton>
        </Link>
      </div>
    </div>
  );
};

export default IskoristiPriliku;
