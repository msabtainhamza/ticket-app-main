import { transactions } from "@/constants/transactions";
const HistoryTable = () => {
  return (
    <div className="overflow-x-auto  md:mt-5 mt-2 no-scrollbar">
      <table className="min-w-full divide-y divide-[#494949] ">
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
          {transactions.slice(0, 3).map((transaction) => (
            <tr key={transaction.id} className="text-white font-normal">
              <td className="py-2 whitespace-nowrap md:text-sm text-xs">
                {transaction.name}
              </td>
              <td className="px-6 py-2 whitespace-nowrap text-center md:text-sm text-xs ">
                {transaction.type}
              </td>
              <td className="px-6 py-2 whitespace-nowrap text-center text-[#83EC52] md:text-sm text-xs ">
                ${transaction.amount}
              </td>
              <td className="px-6 py-2 whitespace-nowrap text-right md:text-sm text-xs ">
                {transaction.account}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistoryTable;
