import {createContext, useReducer} from 'react';
import TransactionReducer from './TransactionReducer';

const initialTransactions = [
    { desc: "Cash", amount: 190 },
    { desc: "Book", amount: 1002 },
    { desc: "Camera", amount: 10 },
  ];

export const TransactionsContext = createContext(initialTransactions)

export function TransactionProvider({children}) {
  const [state, dispatch] = useReducer(TransactionReducer, initialTransactions)
  function AddTransaction(transObj) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: {
        desc : transObj.desc,
        amount : transObj.amount,
      },
    })
  }

  return(
    <TransactionsContext.Provider value={{
      Transations : state,
      AddTransaction
    }}>
      {children}
    </TransactionsContext.Provider>
  )
}