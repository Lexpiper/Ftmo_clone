import PropTypes from "prop-types";
import { useState } from "react";
const Livetable = () => {
    const [tab, settab] = useState(1);
   const [selected, setselected] = useState(1)
    const TabHeader = ({id, img, text}) => {
        return(
            <div 
                onClick={() => {
                    settab(id)
                    setselected(id)
                }}
                className={selected == id ? "flex h-[80px] cursor-pointer bg-blue-500 items-center justify-center" : "flex hover:bg-gray-900 h-[80px] cursor-pointer bg-gray-800 items-center justify-center "}> 
                <div className="w-[30px] h-[30px] border-[2px] border-[#fff] rounded-full items-center flex justify-center">
                    <img src={img} alt="" className=""/>
                </div>
                <div className="px-3 text-white font-semibold">
                    {text[0].toUpperCase() + text.substring(1)}
                </div>
            </div>
        )
    }

    TabHeader.propTypes = {
        id: PropTypes.number,
        img: PropTypes.string,
        text: PropTypes.string,
      };

    const data = [{
        id: 1,
        img: "",
        text: "forex"
    }, 
    {
        id: 2,
        img: "",
        text: "indices"
    },{
        id: 3,
        img: "",
        text: "crypto"
    },{
        id: 4,
        img: "",
        text: "commodities"
    },{
        id: 5,
        img: "",
        text: "custom"
    }]

  return (
    <div className="w-[90%] mx-auto overflow-hidden rounded-md">
        <div className="grid grid-cols-5">
            {data.map(({id, img, text}, i) => <TabHeader id={id} img={img} text={text} key={i} />) }
        </div>
        <div className="">
            {tab ==  1 && 
                <div className="">
                    Forex table
                </div>
            }

            {tab ==  2 && 
                <div className="">
                    Indices table
                </div>
            }
            {tab ==  3 && 
                <div className="">
                    Crypto table
                </div>
            }
            {tab ==  4 && 
                <div className="">
                    Commodities table
                </div>
            }
        </div>
    </div>
  )
}

export default Livetable