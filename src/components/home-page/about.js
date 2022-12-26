import Image from "next/image";
import Link from "next/link";

function About() {
  const subTitle = `text-[18px] leading-[32px] text-secondary uppercase`;
  const aboutImage = `flex justify-end relative sm:before:bg-pattern-1 sm:before:absolute sm:before:h-[336px] sm:before:w-[336px] sm:before:top-[75px] sm:before:left-[85px]`;

  return (
    <div id="about" className="about-area md:pt-[150px] pt-[50px]">
      <div className="container max-lg:max-w-full fixed-lg:pr-0">
        <div className="lg:grid lg:grid-cols-2 max-md:flex max-md:flex-col-reverse">
          <div className="about-content max-md:pt-10">
            <span className={subTitle}>Hakkımızda</span>
            <h3 className="text-secondary text-2xl mb-12 mt-4">
              Klassmed Medikal olarak, 2011 yılında ithalat ürünleri ile
              başlayan ticari hayatımıza 2012 yılından itibaren kendi
              ürünlerimizi üreterek devam etmekteyiz.
            </h3>
            <Link href="/about">
              <a className="boxed-btn text-[18px] leading-[30px]">Hakkımızda</a>
            </Link>
          </div>
          <div className={aboutImage}>
            <Image
              src="/images/about/1.jpg"
              alt="Service Image"
              width={390}
              height={760}
              quality={70}
              layout="fixed"
              objectFit="cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
