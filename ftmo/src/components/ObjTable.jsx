import { RiArrowDropDownLine } from "react-icons/ri";
import styles from "../constants/data";

const ObjTable = () => {
  const headers = [
    { id: 1, h1: "step1" },
    { id: 2, h2: "step2" },
    { id: 3, h3: "step3" },
  ];
  return (
    <div className="flex flex-col ">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  ></th>
                  {headers.map((head) => (
                    <th
                      key={head.id}
                      scope="col"
                      className="px-6 py-3  text-lg font-poppins font-semibold text-center text-gray-500 uppercase tracking-wider"
                    >
                      Step 1
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 text-center">
                {styles.Table.map((tab) => (
                  <tr key={tab.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 flex items-center h-10 w-10 tracking-wide">
                          <span>
                            <RiArrowDropDownLine className="text-lg cursor-pointer" />
                          </span>
                          {tab.title}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 flex flex-col justify-center py-4 whitespace-nowrap tracking-wider">
                      <div className="text-lg font-semibold font-poppins">
                        {tab.step1}
                      </div>
                      <div className="text-base ">{tab.add}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap bg-[#f8f8f9] tracking-wider">
                      <div className="px-2 flex flex-col justify-center  text-xs leading-5 font-semibold rounded-full text-[#02c7b4]">
                        <span className="text-lg font-seminold font-poppins">
                          {tab.step2}
                        </span>
                        <span className="text-base">{tab.add2}</span>
                      </div>
                    </td>
                    <td className="tracking-wider px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-500 font-poppins">
                      {tab.step3}
                    </td>
                  </tr>
                ))}
                {/* Additional rows go here */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ObjTable;
