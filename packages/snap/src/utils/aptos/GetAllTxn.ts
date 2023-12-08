import getAccount from './GetAccount';

const HOST = 'http://localhost:5500';

export async function getAllTxn() {
    const account = await getAccount();
    const txnHistory = await fetch(`${HOST}/getAllTxn`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ address: account.accountAddress.toString() }),
      }).then((res) => res.json());
      console.log('this is txnhistory', txnHistory);
      return txnHistory;
}