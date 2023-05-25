import { Link } from "react-router-dom";
export const ModulesNav = () => {
  return (
    <div>
      <h1>This is what you want?</h1>
      <Link to={"/modules/buttons"}>Buttons</Link>
      <Link to={"/modules/Cards"}>Cards</Link>
      <Link to={"/modules/headers"}>Header</Link>
      <Link to={"/modules/footers"}>Footer</Link>
    </div>
  );
};
