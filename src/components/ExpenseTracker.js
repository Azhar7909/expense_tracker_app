import React from "react";

export default function ExpenseTracker() {
  return (
    <div className="container shadow">
      <h2 className="text-center">Expense Tracker App</h2>
      <h4 className=" pad-15px">
        Your Balance <br />
        <span className="font-size-30px">$260.00</span>
      </h4>
      <div className="flex space-around bg-white shadow">
        <h5>
          Income <br />
          <span className="font-size-20px">$500.00</span>
        </h5>
        <h5>
          Expense <br />
          <span className="font-size-20px">$300.00</span>
        </h5>
      </div>
      <h4 className="pad-bottom-7px hr">Add new description</h4>
      <form action="">
        <label>Enter description or Text</label>
        <br />
        <input
          className="width-100 pad-7px border-none bg-darkgray out-line-darkcyan"
          type="text"
          required
        />
        <br />
        <label>Enter amount</label>
        <br />
        <input
          className="width-100 pad-7px border-none bg-darkgray out-line-darkcyan"
          type="text"
          required
        />
        <div className="flex space-around pad-15px">
          <div>
            <input type="radio" />
            <label htmlFor="">Income</label>
          </div>
          <div>
            <input type="radio" />
            <label htmlFor="">Expense</label>
          </div>
        </div>
        <input
          className="pad-7px width-100 shadow"
          type="button"
          value="Add Transaction"
        />
      </form>
      <h4 className="pad-bottom-7px hr">History</h4>
      <ul className="list-style-none">
          <li className="flex space-between pad-7px shadow bg-white margin-bottom-10px">
              <span>description</span>
              <span>amount</span>
          </li>
          <li className="flex space-between pad-7px shadow bg-white margin-bottom-10px">
              <span>description</span>
              <span>amount</span>
          </li>
      </ul>
    </div>
  );
}
