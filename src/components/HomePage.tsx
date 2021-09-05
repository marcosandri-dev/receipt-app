import * as React from 'react';
import { useEffect, useState } from 'react';
import logo from '../logo.svg';
import { fetchReceipts } from '../services/recepit.service';
import { Receipt } from '../models/Receipt';
import ReceiptList from './ReceiptList';

export interface HomePageProps {

}

const HomePage: React.FC<HomePageProps> = () => {
  const [receipts, setReceipts] = useState<Receipt[]>([]);

  useEffect(() => {
    fetchReceipts().then((data: Receipt[] | any) => { // Workaround for the timeout (TO FIX)
      setReceipts(data);
    });
  }, []);

  return (
    <>
      <h1 className="text-center">Your Receipts</h1>
      <hr />
      {receipts.length === 0 ? (
        <img src={logo} className="App-logo" alt="logo" />
      ) : <ReceiptList receipts={receipts} />}
    </>
  );
};

export default HomePage;
