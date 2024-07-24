import { Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

function Quick({ image, text1, text2, text3 }) {
    const rs3xl = '3xl:w-[88px] 3xl:h-[88px]'
    const rs2xl = '2xl:w-[77px] 2xl:h-[77px]'
    const rslg = 'lg:w-[44px] lg:h-[44px]'
    const rsmd = 'md:w-[44px] md:h-[44px]'
    const rssm = 'sm:w-[44px] sm:h-[44px]'
    return (
        <li className="">
            <Link className="flex items-center justify-start">
                <img src={image} alt="" className={`select-none ${rs3xl} ${rs2xl} ${rslg} ${rsmd} ${rssm}`} />
                <div className="px-2 2xl:block xl:block lg:block lg:content-center">
                    <Typography className="!leading-none opacity-70 text-[17px] font-bold 2xl:block xl:block lg:hidden md:hidden sm:hidden">{text1}</Typography>
                    <Typography className="py-1 !text-gray-600 font-bold text-sm 2xl:block xl:block lg:block  md:hidden sm:hidden">{text2}</Typography>
                    <div className="flex items-center ">
                        <Typography variant="paragraph" className="!leading-none !text-gray-700 font-bold text-sm">
                            {text3}
                        </Typography>

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3 md:hidden sm:hidden">
                            <path
                                fillRule="evenodd"
                                d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                </div>
            </Link>
        </li>
    );
}

export default Quick;
