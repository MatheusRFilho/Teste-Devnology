import { useEffect, useState } from 'react';
import api from '../../config/api';
import moment from 'moment';

import NavBar from '../../globalComponents/NavBar/Navbar';

const Financial = () => {
  const [today, setToday] = useState(moment().format('MM/YYYY'));

  const [type, setType] = useState('');
  const [totalBuy, setTotalBuy] = useState('');
  const [totalSell, setTotalSell] = useState('');
  const [value, setValUe] = useState('');
  const [commission, setCommission] = useState('');

  useEffect(() => {
    getInjuryProfit();
  }, [today]);

  const getInjuryProfit = async () => {
    try {
      const { data } = await api.get(`history/${today}`);
      setType(data.type);
      setCommission(data.commission);
      setTotalBuy(data.totalBuy);
      setTotalSell(data.totalSell);
      setValUe(data.value);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <NavBar activeItem={'financial'}></NavBar>
    </>
  );
};

export default Financial;
