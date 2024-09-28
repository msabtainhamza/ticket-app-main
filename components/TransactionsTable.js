import { transactions } from "@/constants/transactions";
const TransactionTable = () => {
  return (
    <div className="overflow-x-auto bg-[#151515] p-5 rounded-xl mt-5 no-scrollbar">
      <table className="min-w-full divide-y divide-[#494949] bg-[#151515]">
        <thead className="text-[#494949] font-medium">
          <tr>
            <th className=" py-2 text-left text-xs  tracking-wider">Name</th>
            <th className="px-6 py-2 text-center text-xs font-medium tracking-wider">
              Type
            </th>
            <th className="px-6 py-2 text-center text-xs font-medium tracking-wider">
              Amount
            </th>
            <th className=" px-6 py-2 text-right text-xs  tracking-wider">
              Account
            </th>
          </tr>
        </thead>
        <tbody className="">
          {transactions.map((transaction) => (
            <tr key={transaction.id} className="text-white font-normal">
              <td className="py-2 whitespace-nowrap text-sm">
                {transaction.name}
              </td>
              <td className="px-6 py-2 whitespace-nowrap text-center text-sm ">
                {transaction.type}
              </td>
              <td className="px-6 py-2 whitespace-nowrap text-center text-[#83EC52] text-sm ">
                ${transaction.amount}
              </td>
              <td className="px-6 py-2 whitespace-nowrap text-right text-sm ">
                {transaction.account}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
