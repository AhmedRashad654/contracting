import PropTypes from "prop-types";
import { FaChevronLeft } from "react-icons/fa6";
function Header({ first, second }) {
  return (
    <div className="flex items-center gap-2">
      <h1>{first}</h1>
      <FaChevronLeft />
      <h1>{second}</h1>
    </div>
  );
}

Header.propTypes = {
  first: PropTypes.string,
  second: PropTypes.string,
};

export default Header;
