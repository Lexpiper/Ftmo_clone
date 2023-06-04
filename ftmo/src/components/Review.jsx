import Feedback from "./Feedback";

const Review = () => {
  // Sample review data
  const reviews = [
    {
      title: "Impressive performance",
      description:
        "The trading prop firm consistently delivers impressive performance. Their strategies are well-researched and yield great results.",
      rating: 5,
      author: "David Johnson",
    },
    {
      title: "Knowledgeable team",
      description:
        "The team at the trading prop firm is highly knowledgeable and experienced. They provide valuable insights and guidance for successful trading.",
      rating: 4,
      author: "Emily Thompson",
    },
    {
      title: "Excellent training program",
      description:
        "The trading prop firm offers an excellent training program for aspiring traders. They provide comprehensive education and mentorship to enhance trading skills.",
      rating: 4,
      author: "Michael Anderson",
    },
    {
      title: "Transparent and trustworthy",
      description:
        "I appreciate the transparency and trustworthiness of this trading prop firm. They maintain open communication and have a solid track record of integrity.",
      rating: 5,
      author: "Sarah Lewis",
    },
    {
      title: "Outstanding support",
      description:
        "The support provided by the trading prop firm is outstanding. They are always available to assist with any trading-related queries and provide timely responses.",
      rating: 4,
      author: "Daniel Carter",
    },
    {
      title: "Profitable trading opportunities",
      description:
        "This trading prop firm consistently presents profitable trading opportunities. Their market analysis is thorough, and they help traders capitalize on market trends.",
      rating: 5,
      author: "Olivia Walker",
    },
    {
      title: "Professional environment",
      description:
        "The trading prop firm maintains a professional and conducive environment for traders. The infrastructure and resources provided contribute to optimal trading performance.",
      rating: 4,
      author: "William Turner",
    },
    {
      title: "Efficient risk management",
      description:
        "This trading prop firm excels in risk management. They implement effective risk control measures, ensuring traders can navigate volatile markets with confidence.",
      rating: 5,
      author: "Sophia Mitchell",
    },
  ];

  return (
    <div className="w-full h-full py-20 px-20">
      <div className="text-center text-[#262729] text-[1.875rem] font-poppins font-normal tracking-wider mb-10">
        Feedback from our Traders
      </div>
      <div className="">
        <Feedback reviews={reviews} />
      </div>
    </div>
  );
};

export default Review;
