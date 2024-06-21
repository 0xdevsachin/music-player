import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";

import { HeaderStyle } from "./header.style";

const Header = ({
  handleMenuClick,
  isOpen,
}: {
  handleMenuClick: () => void;
  isOpen: boolean;
}) => {
  return (
    <>
      <HeaderStyle>
        <img
          src="/spotify_logo.png"
          style={{ objectFit: "contain" }}
          alt="spotify-logo"
        />
        <div onClick={handleMenuClick}>
          {isOpen ? <IoCloseSharp /> : <IoMenu />}
        </div>
      </HeaderStyle>
    </>
  );
};

export default Header;
