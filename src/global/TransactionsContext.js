import {createContext, useReducer} from 'react';
import TransactionReducer from './TransactionReducer';


export const TransactionsContext = createContext("Initial Data is Empty")

export function TransactionProvider({children}) {
  const [state, dispatch] = useReducer(TransactionReducer, [])
  function AddTransaction(transObj) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: {
        desc : transObj.desc,
        amount : transObj.amount,
        tracking: transObj.tracking
      },
    })
  }

  return(
    <TransactionsContext.Provider value={{
      Transactions : state,
      AddTransaction
    }}>
      {children}
    </TransactionsContext.Provider>
  )
}