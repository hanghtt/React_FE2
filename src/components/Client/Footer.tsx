import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import imft from "../../image/icons_payment 1.png";

const Footer = () => {
  return (
    <>
      <div className="bg-gradient-to-br from-[#fff] to-[#DCEED9] pb-20 pt-10">
        <div className="max-w-[1200px] mx-auto px-4">
          <h1 className="text-3xl font-bold font-baloo text-[#505F4E] text-center md:text-left">
            Đăng ký ngay * <br />_ Bản tin người dùng
          </h1>
          <div className="mt-4 flex flex-col md:flex-row items-center">
            <p className="text-[#555555] text-center md:text-left md:ml-10">
              Nhận cập nhật hàng tuần về chúng tôi sản phẩm trên <br /> email
              của bạn, không có thư rác đảm bảo <br />
              chúng tôi hứa
              <span role="img" aria-label="peace">
                ✌️
              </span>
            </p>
            <div className="mt-4 flex justify-center md:justify-start md:ml-auto">
              {/* <div className="relative flex items-center w-full md:w-auto">
                <span className="absolute left-5 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>

                </span>
                <input
                  type="email"
                  placeholder="youremail123@gmail.com"
                  className="w-full md:w-96 pr-20 py-3 pl-10  border rounded-md focus:outline-none focus:ring-2"
                />
                <Link
                  to={`/register`}
                  className="bg-[#656C66] absolute px-4 right-0 mt-10 py-2 rounded-md"
                >
                  Đăng ký
                </Link>
              </div> */}
              <div className="relative flex items-center w-full">
                <span className="absolute left-5 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>

                </span>
                <input
                  type="email"
                  placeholder="emailcuaban@gmail.com"
                  className="w-full pr-64 py-3 pl-14 focus:outline-none focus:ring-2 "
                />
                <Link to={`/register`} className='bg-[#656C66] top-7 right-32 p-4 pl-8 w-45 relative text-white'>ĐĂNG KÝ</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-[#053D29] p-4 py-10">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-20">
          <div className="flex-1 mb-6 md:mb-0">
            <p className="text-white">
              Khách hàng rất quan trọng, khách hàng sẽ được tuân theo nhưng điều
              tương tự cũng xảy ra cùng lúc với lao động và với một số nỗi đau
              lớn
            </p>
            <div className="flex items-center space-x-4 mt-6">
              <a href="#" className="text-white hover:text-gray-900">
                <FaInstagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-gray-900">
                <FaFacebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-gray-900">
                <FaYoutube className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-gray-900">
                <FaTwitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="flex-1 text-white">
            <h4 className="font-semibold">Xung quanh</h4>
            <ul className="mt-3">
              <li className="mt-3">Liên hệ chúng tôi</li>
              <li className="mt-3">Về chúng tôi </li>
              <li className="mt-3">Sự nghiệp</li>
              <li className="mt-3">Thông tin công ty</li>
            </ul>
          </div>
          <div className="flex-1 text-white">
            <h4 className="font-semibold">Giúp đỡ</h4>
            <ul className="mt-3">
              <li className="mt-3">Nhà sản xuất của chúng tôi </li>
              <li className="mt-3">Sự chi trả</li>
              <li className="mt-3">Lô hàng</li>
              <li className="mt-3">Hủy & Trả hàng</li>
              <li className="mt-3"> Báo cáo một sự vi phạm</li>
            </ul>
          </div>
          <div className="flex-1 text-white">
            <h4 className="font-semibold">Chính trị</h4>
            <ul className="mt-3">
              <li className="mt-3">Đảm bảo hoàn trả</li>
              <li className="mt-3">Điều khoản sử dụng</li>
              <li className="mt-3">Bảo vệ</li>
              <li className="mt-3">Sự riêng tư</li>
              <li className="mt-3">Thư mục trang</li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="bg-[#062F21] p-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-white mb-4 md:mb-0">2024 copyright hangdev</p>
        <img src={imft} alt="Payment Methods" className="mb-4 md:mb-0" />
        <p className="text-white cursor-pointer">Cuộn lên đầu trang</p>
      </div>
    </>
  );
};

export default Footer;
