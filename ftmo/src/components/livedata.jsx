import Data from "../constants/data";
import PropTypes from 'prop-types';


const Livedata = ({data}) => {
  return (
    <div className="flex flex-col  bg-[#ffffff]">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-[#ffffff]">
                <tr>
                  {Data.foreHead.map((i) => (
                    <th
                      key={i.id}
                      scope="col"
                      className="text-sm px-6 py-8 text-center  font-medium text-[#0781fe] uppercase tracking-wider"
                    >
                      {i.head} 
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 text-center">
                {data.map((i) => (
                  <tr key={i.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium bg-[#ffffff] text-[#262729] mx-[30px] tracking-wider my-[20px] font-poppins">
                        {i.Pair}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap bg-[#f8f8f9]">
                      <div className="text-sm font-medium  text-[#262729] mx-[30px] tracking-wider my-[20px] font-poppins">
                        {i.p1}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap bg-[#ffffff] tracking-wider">
                      <div className="text-sm font-medium  text-[#262729] mx-[30px] tracking-wider my-[20px] font-poppins">
                        {i.p2}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap bg-[#f8f8f9] tracking-wider">
                      <div className="text-sm font-medium  text-[#262729] mx-[30px] tracking-wider my-[20px] font-poppins">
                        {i.p3}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap bg-[#ffffff] tracking-wider">
                      <div className="text-sm font-medium text-[#262729] mx-[30px] tracking-wider my-[20px] font-poppins">
                        {i.comm}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap bg-[#f8f8f9] tracking-wider">
                      <div className="text-sm font-medium  text-[#262729] mx-[30px] tracking-wider my-[20px] font-poppins">
                        {i.cost}
                      </div>
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
Livedata.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      Pair: PropTypes.string.isRequired,
      p1: PropTypes.string.isRequired,
      p2: PropTypes.string.isRequired,
      p3: PropTypes.string.isRequired,
      comm: PropTypes.string.isRequired,
      cost: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Livedata;
