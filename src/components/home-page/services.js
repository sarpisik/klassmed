import Image from 'next/image';

function Services() {
    return (
        <div className='service-area md:pt-160 pt-[60px] relative before:bg-pattern-1 before:absolute before:h-[336px] before:w-[336px] before:top-[170px] before:left-[-168px]'>
            <div className='container max-w-full lg:pl-[70px] lg:pr-0'>
                <div className='lg:grid lg:grid-cols-12 flex flex-col-reverse'>
                    <div className='lg:col-span-4 xl:mr-[140px] lg:mr-[40px] max-md:pt-[50px]'>
                        <div className='service-content xl:w-[490px] w-full ml-auto'>
                            <h2 className='title text-black lm:text-[42px] lm:leading-[50px] text-[32px] mb-[60px]'>
                                En çok satanlar listesinde <br /> 1 numara.
                            </h2>
                        </div>
                    </div>
                    <div className='lg:col-span-8'>
                        <div className='service-image flex justify-end w-full h-[729px] relative'>
                            <Image
                                src='/images/service/1.jpg'
                                alt='Service Image'
                                quality={70}
                                layout='fill'
                                objectFit='cover'
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
