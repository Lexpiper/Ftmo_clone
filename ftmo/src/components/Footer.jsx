import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="mb-6">
            <h3 className="text-xl mb-2">FTMO</h3>
            <p className="mb-2">support@ftmo.com</p>
            <p className="mb-2">+44 20 3322 2983</p>
            <p className="mb-2">WhatsApp</p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl mb-2">Contact Options</h3>
            <p className="mb-2">Privacy Policy</p>
            <p className="mb-2">Cookies</p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl mb-2">About us</h3>
            <ul>
              <li className="mb-2">Evaluation Process</li>
              <li className="mb-2">Trading Objectives</li>
              <li className="mb-2">Why our FTMO Challenge?</li>
              <li className="mb-2">Testimonials</li>
              <li className="mb-2">Scaling Plan</li>
              <li className="mb-2">Partners</li>
              <li className="mb-2">Affiliate Programme</li>
              <li className="mb-2">Terms & Conditions</li>
              <li className="mb-2">Careers</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl mb-2">Trading</h3>
            <ul>
              <li className="mb-2">Calendar</li>
              <li className="mb-2">Fantastic Modern Prop Trading Firm</li>
              <li className="mb-2">Shop</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center items-center mt-8">
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-white">
              <FaFacebook className="text-2xl" />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <FaTwitter className="text-2xl" />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <FaInstagram className="text-2xl" />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <FaYoutube className="text-2xl" />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <FaTiktok className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
