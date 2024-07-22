import React from 'react';
import { Collapse, Typography, IconButton } from '@material-tailwind/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import {
    IntroductionListMenuItems,
    DataListMenuItems,
    ProductListMenuItems,
    CustomerListMenuItems,
} from '/src/constants/index.jsx';
import NavbarListItem from './NavbarListItem';

function NavList({ isFlex }) {
    // ! introduciton
    const introducitonLabel = '회사소개';
    const introducitonLabelDesc = 'Company Introduction';

    // ! data
    const dataLabel = '캐스터자료실';
    const dataLabelDesc = 'Caster Data';

    // ! product
    const productLabel = '제품소개';
    const productLabelDesc = 'PRODUCTS';

    // ! customer
    const customerLabel = '고객센터';
    const customerLabelDesc = 'Customer Center';
    return (
        <div className={`mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:p-1 justify-between xl:ml-44  ${isFlex ? 'flex' : ''}`}>
            <NavbarListItem
                ListMenuItems={IntroductionListMenuItems}
                Label={dataLabel}
                LabelDesc={introducitonLabelDesc}
                href="introduction"
                div="w-full content-center"
                ul="outline-none outline-0 pl-28 pr-20"
                li="flex flex-wrap justify-between gap-3"
            />
            <NavbarListItem
                ListMenuItems={DataListMenuItems}
                Label={introducitonLabel}
                LabelDesc={dataLabelDesc}
                href="data"
                div="w-full"
                ul="outline-none outline-0 pl-28"
                li="flex flex-wrap justify-start gap-3"
            />
            <NavbarListItem
                ListMenuItems={ProductListMenuItems}
                Label={productLabel}
                LabelDesc={productLabelDesc}
                href="product"
                div="w-full"
                ul="outline-none outline-0 pr-16"
                li="flex flex-wrap justify-start gap-2 pl-11"
            />
            <NavbarListItem
                ListMenuItems={CustomerListMenuItems}
                Label={customerLabel}
                LabelDesc={customerLabelDesc}
                href="customer"
                div="w-full"
                ul="outline-none outline-0 pr-16"
                li="flex flex-wrap justify-end gap-3"
            />
        </div>
    );
}
function Header() {
    const [openNav, setOpenNav] = React.useState(false);
    const [isFlex, setIsFlex] = React.useState(window.innerWidth >= 960);
    const res3xl = `3xl:px-[425px]`;
    const res2xl = `2xl:px-[225px]`;
    const resxl = `xl:px-[125px]`;
    const reslg = `lg:px-[5px]`;
    const resmd = `md:px-[5px]`;
    const ressm = `sm:px-[0px]`;
    React.useEffect(() => {
        const handleResize = () => {
            setIsFlex(window.innerWidth >= 960);
            if (window.innerWidth >= 960) {
                setOpenNav(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="w-full">
            <header className={`w-full bg-red-900 h-8 ${ressm} ${resmd} ${reslg} ${resxl} ${res2xl} ${res3xl}`}>
                <div className="flex font-medium text-xs text-white justify-end  py-2">
                    <a href="/" className="px-2 tracking-tighter opacity-85 text-center">
                        HOME
                    </a>
                    <Typography className="content-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-2.5 rotate-90 mr-0"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                        </svg>
                    </Typography>
                    <a href="#" className="px-2 tracking-tighter opacity-85">
                        SITEMAP
                    </a>
                    <Typography className="content-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-2.5 rotate-90 mr-0"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                        </svg>
                    </Typography>
                </div>
            </header>
            <div className={`rounded-none shadow-none px-0 ${ressm} ${resmd} ${reslg} ${resxl} ${res2xl} ${res3xl}`}>
                <div
                    className={`flex items-center justify-between text-blue-gray-900`}
                >
                    <a href="/" className="mr-4 w-[23rem]">
                        <img className="select-none" src="/src/assets/Navbar/logo.jpg" alt="" />
                    </a>
                    <div className="hidden lg:block py-4 w-full">
                        <NavList isFlex={isFlex} />
                    </div>
                    <IconButton
                        variant="text"
                        color="blue-gray"
                        className="lg:hidden"
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                        ) : (
                            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                        )}
                    </IconButton>
                </div>
                <Collapse open={openNav}>
                    <NavList />
                </Collapse>
            </div>
        </div>
    );
}

export default Header;
