import React from "react";

export default function ExpenseTracker() {
  const transactions = [
    { desc: "Cash", amount: 190 },
    { desc: "Book", amount: 100 },
    { desc: "Camera", amount: 10 },
  ];
  const date = Date();
  console.log(date);
  return (
    <div className="container shadow">
      <h2 className="text-center">Expense Tracker App</h2>
      <h4 className=" pad-15px text-color">
        Your Balance <br />
        <span className="font-size-30px darkcyan">$260.00</span>
      </h4>
      <p className="text-color text-center font-size-12px">{date}</p>
      <div className="flex space-around bg-white shadow">
        <h5 className="text-color">
          Income <br />
          <span className="font-size-20px darkgreen">$500.00</span>
        </h5>
        <h5 className="text-color">
          Expense <br />
          <span className="font-size-20px darkred">$300.00</span>
        </h5>
      </div>
      <h4 className="pad-bottom-7px hr text-color">Add new description</h4>
      <form action="">
        <label className="text-color">Enter description or Text</label>
        <br />
        <input
          className="width-100 pad-7px border-none bg-darkgray out-line-darkcyan darkcyan"
          type="text"
          required
        />
        <br />
        <label className="text-color ">Enter amount</label>
        <br />
        <input
          className="width-100 pad-7px border-none bg-darkgray out-line-darkcyan darkcyan "
          type="number"
          required
        />
        <div className="flex space-around pad-15px">
          <div>
            <input type="radio" className="curser-pointer"/>
            <label htmlFor="" className="darkgreen">
              Income
            </label>
          </div>
          <div>
            <input type="radio" className="curser-pointer"/>
            <label htmlFor="" className="darkred">
              Expense
            </label>
          </div>
        </div>
        <input
          className="pad-7px width-100 shadow bg-darkblue color-white curser-pointer border-none outline-none"
          type="button"
          value="Add Transaction"
        />
      </form>
      <h4 className="pad-bottom-7px hr text-color">History</h4>
      <ul className="list-style-none">
        {transactions.map((trans, ind) => {
          return (
            <li
              key={ind}
              className="flex space-between pad-7px shadow bg-white margin-bottom-10px income-border"
            >
              <span>{trans.desc}</span>
              <span>${trans.amount}</span>
            </li>
          );
        })}
      </ul>
      <p className="text-center text-color">End</p>
    </div>
  );
}
