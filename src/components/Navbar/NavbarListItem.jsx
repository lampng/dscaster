import React from 'react';
import { Collapse, Typography, IconButton, Menu, MenuHandler, MenuList, MenuItem } from '@material-tailwind/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { HashLink as Link } from 'react-router-hash-link';

function NavbarListItem({ ListMenuItems, Label, LabelDesc, href, div, ul, li }) {
    const res3xl= `3xl:px-[425px]`
    const res2xl= `2xl:px-[225px]`
    const resxl = `xl:px-[125px] xl:py-8`;
    const reslg = `lg:px-[5px]`
    const resmd = `md:px-[5px]`
    const ressm  = `sm:px-[5px]`

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const renderItems = ListMenuItems.map((item, key) => (
        <Link to={item.to} state={item.value} key={key} className="">
            <MenuItem className="hover:bg-white rounded-none p-0">
                {item.image ? (
                    <>
                        <div className="h-16">
                            <img src={item.image} alt="" className="m-auto select-none" />
                        </div>
                        <div className="text-center font-bold">
                            <Typography variant="h6">{item.title}</Typography>
                            <Typography variant="body2" className="text-xs font-medium text-blue-gray-500">
                                {item.description}
                            </Typography>
                        </div>
                    </>
                ) : (
                    <a className="flex items-center font-bold">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="size-1.5 mr-1 text-red-900"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                                clipRule="evenodd"
                            />
                        </svg>
                        {item.title}
                        <span className="text-xs font-medium text-blue-gray-500 pl-1">{item.description}</span>
                    </a>
                )}
            </MenuItem>
        </Link>
    ));
    return (
        <React.Fragment>
            <Menu
                open={isMenuOpen}
                handler={setIsMenuOpen}
                animate={{
                    mount: { x: 0, y: 0 },
                    unmount: { x: 0, y: 0 },
                }}
                allowHover={true}
            >
                <MenuHandler>
                    <Typography as="div" variant="small" className="font-medium">
                        <a
                            href={`/${href}`}
                            className="items-center text-center text-black hover:text-red-900"
                            selected={isMenuOpen || isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen((cur) => !cur)}
                        >
                            <Typography className=" opacity-80" variant="h5">
                                {Label}
                            </Typography>
                            <Typography variant="paragraph" className="text-xs text-black opacity-40 font-bold">
                                {LabelDesc}
                            </Typography>
                        </a>
                    </Typography>
                </MenuHandler>
                <MenuList className={`hidden !rounded-none w-screen lg:block mt-3.5 !select-none border-y border-y-red-900  ${res3xl} ${res2xl} ${resxl} ${reslg} ${resmd} ${ressm}`}>
                    <div className={`flex md:h-32 !rounded-none !select-none`}>
                        <div className="md:w-80 m-auto">
                            <Typography variant="h4" className="text-black opacity-80">
                                {Label}
                            </Typography>
                            <Typography className="!font-bold text-xs">{LabelDesc}</Typography>
                        </div>
                        <div class="md:h-16 md:ml-5 my-auto border-l-2 border-gray-300"></div>
                        <div className={`${div}`}>
                            <ul className={`${ul}`}>
                                <li className={`${li}`}>{renderItems}</li>
                            </ul>
                        </div>
                    </div>
                </MenuList>
            </Menu>
            <div className="block lg:hidden">
                <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
            </div>
        </React.Fragment>
    );
}

export default NavbarListItem;
