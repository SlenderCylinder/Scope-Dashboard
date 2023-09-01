import React from "react";

export default function Table({ beneficiaries }) {
  return (
    <table className="Table w-[480px] h-[159px] bg-neutral-700 rounded border border-zinc-600">
      <thead>
        <tr className="Row self-stretch bg-white bg-opacity-0">
          <th className="Cell w-[120px] self-stretch bg-white bg-opacity-5 border-l border-t border-zinc-600">
            <div className="Content self-stretch px-3 py-2.5">
              <div className="Text grow shrink basis-0 text-white text-xs font-semibold leading-none">
                B. First name
              </div>
            </div>
          </th>
          <th className="Cell w-[120px] self-stretch bg-white bg-opacity-5 border-l border-t border-zinc-600">
            <div className="Content self-stretch px-3 py-2.5">
              <div className="Text grow shrink basis-0 text-white text-xs font-semibold leading-none">
                B. Last name
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
                Date
              </div>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        {beneficiaries.map((beneficiary, index) => (
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
