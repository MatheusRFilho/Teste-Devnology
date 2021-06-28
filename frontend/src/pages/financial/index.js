import NavBar from '../../globalComponents/NavBar/Navbar';
import FinancialItem from '../../globalComponents/Financial';

const Financial = () => {
  return (
    <>
      <NavBar activeItem={'financial'}></NavBar>
      <FinancialItem />
    </>
  );
};

export default Financial;
