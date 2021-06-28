import { useEffect } from 'react';
import api from '../../config/api';

const Home = () => {
  useEffect(() => {
    Test();
  }, []);

  const Test = async () => {
    try {
      const { data } = await api.get('available-to-sell');
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return <h1>Home</h1>;
};

export default Home;
