import Image from "next/image";
import Link from "next/link";

function About() {
  const aboutImage = `flex justify-end relative sm:before:bg-pattern-1 sm:before:absolute sm:before:h-[336px] sm:before:w-[336px] sm:before:top-[75px] sm:before:left-[85px]`;

  return (
    <div id="about" className="about-area md:pt-[150px] pt-[50px]">
      <div className="container max-lg:max-w-full fixed-lg:pr-0">
        <div className="lg:grid lg:grid-cols-2 max-md:flex max-md:flex-col-reverse">
          <div className="about-content max-md:pt-10">
            <h3 className="text-secondary text-2xl mb-12 mt-4">
              <b> HAKKIMIZDA:</b> <br />
              Klassmed Medikal olarak, 2011 yılında ithalat ürünleri ile
              başlayan ticari hayatımıza 2012 yılından itibaren kendi
              ürünlerimizi üreterek devam etmekteyiz.
            </h3>
            <h3 className="text-secondary text-2xl mb-12 mt-4">
              <b>MİSYONUMUZ:</b> <br /> Ürün ve hizmet kalitemizi sürekli
              geliştirerek müşteri talep ve beklentilerini en üst seviyede
              karşılayarak, güçlü bir iletişim ile tüketicimizle aramızda
              duygusal bir bağ oluşturmak suretiyle müşteri sadakatini sağlamak,
              müşteri portföyümüzü büyüterek tercih edilen bir firma olmak,
              rekabet gücümüzü ve kârlılığımızı arttırmak.
            </h3>
            <h3 className="text-secondary text-2xl mb-12 mt-4">
              <b> VİZYONUMUZ:</b> <br /> Firmamızın ulusal pazarda etkinliğini
              ve verimliliğini arttırmak amacıyla kendi uzmanlık alanımızda
              kendi yöntemlerini sürekli geliştiren, sektörün öncülüğünü yapan,
              Türkiye´nin güvenilir ve saygın bir kuruluşu olmak.
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
