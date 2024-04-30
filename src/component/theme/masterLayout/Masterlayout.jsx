import { memo } from "react";
import Header from "../header/Header";

// eslint-disable-next-line react/prop-types
const Masterlayout = ({ children, ...props }) => { 
  return (
    <div {...props}>
        <Header />
        {children}
    </div>
  );
};

export default memo(Masterlayout);

