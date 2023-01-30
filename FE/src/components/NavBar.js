const NavBar = ({ navText, leftChild, rightChild }) => {
  return (
    <div className="navbar">
      <div className="nav_btn_left">{leftChild}</div>
      <div className="nav_btn_center">{navText}</div>
      <div className="nav_btn_right">{rightChild}</div>
    </div>
  );
};
export default NavBar;