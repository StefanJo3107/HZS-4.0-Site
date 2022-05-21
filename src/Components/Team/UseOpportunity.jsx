import React from "react";
import SectionTitle from "../Utilities/SectionTitle";
import "./UseOpportunity.scss";
// import CustomButton from "../Utilities/CustomButton";
// import { Link } from "react-router-dom";

const UseOpportunity = () => {
  return (
    <div className="use-opportunity">
      <div className="left">
        <SectionTitle>iskoristi priliku</SectionTitle>
        <div className="use-text">
          <p>
            Prijave za Hakaton su otvorene do 18. novembra. Spremi se da sa
            svojim timom pokažeš znanje, dobro se zabaviš i usput možda osvojiš
            i nagradu! Ne propusti šansu da učestvuješ na HZS-u 4.0!
          </p>
        </div>
      </div>
      {/* <div className="right">
                <Link to="/prijava">
                    <CustomButton variant="dark">Prijavi se</CustomButton>
                </Link>
            </div> */}
    </div>
  );
};

export default UseOpportunity;
