import * as AiIcons from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="footer-area md:pt-[120px] pt-[60px]">
      <div className="footer-top">
        <div className="custom-container">
          <div className="lm:grid xl:grid-cols-5 lm:grid-cols-12 xl:gap-x-[30px] gap-[30px]">
            <div className="max-lg:col-span-12">
              <div className="footer-logo">
                <Image
                  src="/images/logo/footer-logo.png"
                  alt="Logo"
                  width={195}
                  height={70}
                />
              </div>
            </div>
            <div className="fixed-lg:col-span-3 fixed-md:col-span-4 fixed-lm:col-span-6 max-sm:pt-[35px]">
              <div className="footer-widget-item">
                <h2 className="title">İletişim</h2>
                <ul className="contact-info mt-[25px]">
                  <li>
                    <Link href="mailto:klassmed@gmail.com">
                      <a className="hover:text-black transition-all">
                        klassmed@gmail.com
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="custom-container">
          <div className="inner-container border-[#dfdfdf] border-t md:mt-[95px] mt-[50px] py-9">
            <div className="md:grid md:grid-cols-12 flex flex-col">
              <div className="md:col-span-4 max-lm:order-last max-lm:pt-[10px]">
                <div className="copyright flex-wrap md:justify-start justify-center md:mb-0 mb-[10px]">
                  © 2022 <span className="mx-1">KLASSMEDLAZER</span>
                  Made with © by
                  <div className="text-[#f53400] mx-1">
                    <AiIcons.AiFillHeart />
                  </div>
                  <Link href="https://sarpisik.com/">
                    <a target="_blank">
                      <span> Sarp ISIK</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
