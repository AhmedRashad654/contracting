import PropTypes from "prop-types";
import { FaChevronRight } from "react-icons/fa6";
function Header({ first, second }) {
  return (
    <div className="flex items-center gap-2 py-4 px-12">
      <h1>{first}</h1>
      <FaChevronRight />
      <h1>{second}</h1>
    </div>
  );
}

Header.propTypes = {
  first: PropTypes.string,
  second: PropTypes.string,
};

export default Header;
