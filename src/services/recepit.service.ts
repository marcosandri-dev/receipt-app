import { Receipt } from '../models/Receipt';

/* eslint-disable arrow-body-style */
export const fetchReceipts = () => {
  return fetch('./Receipts.json', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data: Receipt[]) => new Promise((resolve) => {
      setTimeout(() => { // mimics the API call delay
        resolve(data);
      }, 2000);
    }));
};

export const saveReceipt = () => {
  // This does nothing
};
