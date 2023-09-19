import React from "react";

export default function Table({ searchQuery, beneficiaries }) {
  const filteredBeneficiaries = beneficiaries.filter((beneficiary) => {
    const regex = new RegExp(searchQuery, "i");
    return (
      regex.test(beneficiary.firstName) || regex.test(beneficiary.lastName)
    );
  });

  return (
    <table className="Table w-full h-[159px] bg-neutral-700 rounded border border-zinc-600">
      <thead>
        <tr className="Row self-stretch bg-white bg-opacity-0">
          <th className="Cell w-[120px] self-stretch bg-white bg-opacity-5 border-l border-t border-zinc-600">
            <div className="Content self-stretch px-3 py-2.5">
              <div className="Text grow shrink basis-0 text-white text-xs font-semibold leading-none">
                First Name
              </div>
            </div>
          </th>
          <th className="Cell w-[120px] self-stretch bg-white bg-opacity-5 border-l border-t border-zinc-600">
            <div className="Content self-stretch px-3 py-2.5">
              <div className="Text grow shrink basis-0 text-white text-xs font-semibold leading-none">
                Last Name
              </div>
            </div>
          </th>
          <th className="Cell w-[120px] self-stretch bg-white bg-opacity-5 border-l border-t border-zinc-600">
            <div className="Content self-stretch px-3 py-2.5">
              <div className="Text grow shrink basis-0 text-white text-xs font-semibold leading-none">
                Last Purchase
              </div>
            </div>
          </th>
          <th className="Cell w-[120px] self-stretch bg-white bg-opacity-5 border-l border-t border-zinc-600">
            <div className="Content self-stretch px-3 py-2.5">
              <div className="Text grow shrink basis-0 text-white text-xs font-semibold leading-none">
                Balance
              </div>
            </div>
          </th>
          <th className="Cell w-[120px] self-stretch bg-white bg-opacity-5 border-l border-t border-zinc-600">
            <div className="Content self-stretch px-3 py-2.5">
              <div className="Text grow shrink basis-0 text-white text-xs font-semibold leading-none">
                Date
              </div>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        {filteredBeneficiaries.map((beneficiary, index) => (
          <tr key={index} className="Row self-stretch bg-white bg-opacity-0">
            <td className="Cell w-[120px] self-stretch bg-white bg-opacity-0 border-l border-t border-zinc-600">
              <div className="Content self-stretch px-3 py-2.5">
                <div className="Text grow shrink basis-0 text-white text-xs font-normal leading-none">
                  {beneficiary.firstName}
                </div>
              </div>
            </td>
            <td className="Cell w-[120px] self-stretch bg-white bg-opacity-0 border-l border-t border-zinc-600">
              <div className="Content self-stretch px-3 py-2.5">
                <div className="Text grow shrink basis-0 text-white text-xs font-normal leading-none">
                  {beneficiary.lastName}
                </div>
              </div>
            </td>
            <td className="Cell w-[120px] self-stretch bg-white bg-opacity-0 border-l border-t border-zinc-600">
              <div className="Content self-stretch px-3 py-2.5">
                <div className="Text grow shrink basis-0 text-white text-xs font-normal leading-none">
                  {beneficiary.lastPurchase}
                </div>
              </div>
            </td>
            <td className="Cell w-[120px] self-stretch bg-white bg-opacity-0 border-l border-t border-zinc-600">
              <div className="Content self-stretch px-3 py-2.5">
                <div className="Text grow shrink basis-0 text-white text-xs font-normal leading-none">
                  {beneficiary.balance}
                </div>
              </div>
            </td>
            <td className="Cell w-[120px] self-stretch bg-white bg-opacity-0 border-l border-t border-zinc-600">
              <div className="Content self-stretch px-3 py-2.5">
                <div className="Text grow shrink basis-0 text-white text-xs font-normal leading-none">
                  {beneficiary.date}
                </div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
