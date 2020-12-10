import './App.css';
import ExpenseTracker from './components/ExpenseTracker';
import { TransactionProvider } from './global/TransactionsContext';

function App() {
  return (
    <TransactionProvider>
      <ExpenseTracker />
    </TransactionProvider>
  );
}

export default App;
