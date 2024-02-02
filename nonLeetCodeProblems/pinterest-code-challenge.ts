interface Transaction {
  payer: string;
  amount: number;
  payees: string[];
}
function getSuggestedPayments(transactions: Transaction[]) {
  // Create the balance
  const balance: Record<string, number> = {};
  // iterate over transactions
  // get amount paid and the target person
  // divide amount / targets
  // add it to the balance
  for (const transaction of transactions) {
    const individualAmount = transaction.amount / transaction.payees.length;
    transaction.payees.forEach((target) => {
      balance[target] = balance[target]
        ? balance[target] + individualAmount
        : individualAmount;
    });
    balance[transaction.payer] -= transaction.amount;
  }

  // who is with positive, who is with negative
  const positives: string[] = [];
  const negatives: string[] = [];

  Object.keys(balance).forEach((k) => {
    if (balance[k] > 0) {
      positives.push(k);
    }
    if (balance[k] < 0) {
      negatives.push(k);
    }
  });

  const result: Transaction[] = [];

  // create a new transaction set that balances the general money
  while (positives.length > 0 && negatives.length > 0) {
    const target = negatives[0];
    const payer = positives[0];
    const d = balance[target] + balance[payer];
    const amount = d > 0 ? Math.abs(balance[target]) : balance[payer];
    const t: Transaction = {
      payer,
      amount,
      payees: [target],
    };
    if (amount === balance[payer]) {
      positives.shift();
    }
    if (amount >= Math.abs(balance[target])) {
      negatives.shift();
    }
    result.push(t);
  }

  return result;
}

// Your previous Plain Text content is preserved below:

// Pad for Fernando Cornejo - Sr. Software Engineer, Web

// Expenses calculator

// A group of friends go on a trip. One of them buys plane tickets. Another friend pays for the hotel. A third friend pays for the rental car and gas, and so on. At the end of the trip, they want to settle up on their shared expenses.

// They have a list of transactions, where each transaction is composed of the original payer, the cost of this transaction and the receiver/s of the services paid by this transaction.

// Which payments can they do to settle up this operation?

// Text example:
// - Jane paid $4,000 for flight tickets for John, Jane, Alex, and Adam.
// - Alex paid $2,000 for hotel rooms for Alex, and Jane.

// To settle up:
// - Adam should pay $1,000 to Jane
// - John should pay $1,000 to Jane

// Write a function getSuggestedPayments that takes an array of transactions as argument and returns an array of transactions that settles up all debts between the group of friends.

// Code example:
// // should return
// [
//   { payer: 'John', amount: 1000, payees: [ 'Jane' ] },
//   { payer: 'Adam', amount: 1000, payees: [ 'Jane' ] }
// ]
console.log(
  getSuggestedPayments([
    {
      payer: "Jane",
      amount: 4000,
      payees: ["John", "Jane", "Alex", "Adam"],
    },
    { payer: "Alex", amount: 2000, payees: ["Jane", "Alex"] },
  ])
);
