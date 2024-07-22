import { Tab, TabPanel, Tabs, TabsHeader, TabsBody, Typography } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Breadcrumd from '../../components/Breadcrumb';
import Quick from '../../components/Quick';

function TabProduct({ paramsId, dfTab, site, siteDesc, href, data }) {
    const navigate = useNavigate();
    const params = useParams(); // Sử dụng useParams để lấy paramsId từ URL

    const paramValue = params[paramsId];
    const [activeTab, setActiveTab] = useState(paramValue || dfTab);
    const [dataBody, setDataBody] = useState({});

    const handleTabChange = (value) => {
        setActiveTab(value);
        navigate(`/${href}/${value}`, { state: { value } });
    };

    useEffect(() => {
        if (paramValue) {
            setActiveTab(paramValue);
        }
    }, [paramValue]);

    useEffect(() => {
        const activeItem = data.find((item) => item.value === activeTab);
        if (activeItem) {
            setDataBody(activeItem);
        }
    }, [activeTab]);

    return (
        <div className={`w-full`}>
            {/* //! Top Body */}
            <div className="flex w-full justify-between">
                {/* //!RESPONSIVE */}
                <div className=" bg-[#4A4F5A] text-center w-[211px] h-44 content-center md:hidden sm:hidden 3xl:block 2xl:block xl:block lg:block 3xl:w-[211px] 2xl:w-[208px] 2xl:h-40 xl:w-[208px] lg:w-[205px]">
                    <div className="w-full">
                        <Typography variant="h4" color="white">
                            {site}
                        </Typography>
                        <Typography className="text-[11px] tracking-tighter text-gray-500">{site}</Typography>
                    </div>
                </div>
                {/* //!RESPONSIVE */}
                <div className="w-4/5  2xl:w-4/5 xl:w-4/5 lg:w-4/5 sm:w-full md:w-full">
                    <div className="bg-[url('/src/assets/Product/subVisual_1.jpg')] bg-auto sm:mx-0 bg-center bg-no-repeat p-0 border-b-2 border-[gray] mx-12 3xl:mx-12 3xl:px-0 2xl:px-0 xl:px-0 lg:px-0 2xl:mx-11 xl:mx-12 lg:mx-10 md:px-8">
                        {data.map((item) => (
                            <Tabs
                                key={item.value}
                                value={item.value}
                                className={activeTab === item.value ? 'justify-start pt-16 mb-[14px]' : 'hidden'}
                            >
                                <Typography variant="h2">회사소개</Typography>
                                <Breadcrumd Site={site} Item={item.label} />
                            </Tabs>
                        ))}
                    </div>
                </div>
            </div>
            {/* //! Middle Body */}
            <Tabs value={activeTab} orientation="vertical">
                <TabsHeader
                    className="rounded-none bg-transparent p-0 shadow-none h-max bg-gray-900 bg-opacity-5 3xl:w-[13.2rem] 2xl:w-[13rem] xl:w-[208px] lg:w-[205px] md:w-[150px] sm:w-[150px]"
                    indicatorProps={{
                        className: 'bg-transparent shadow-none rounded-none',
                    }}
                >
                    {data.map((item) => (
                        <Tab key={item.value} value={item.value} className="md:pl-0 p-0 m-0">
                            {/* //!RESPONSIVE */}
                            <div className="relative 3xl:w-[13.2rem] 2xl:w-[13rem] xl:w-[208px] lg:w-[205px] md:w-[150px] sm:w-[150px]">
                                <div
                                    onClick={() => handleTabChange(item.value)}
                                    className={
                                        activeTab === item.value
                                            ? 'bg-red-900 text-white justify-start content-center text-start w-full h-[3rem] px-4'
                                            : 'justify-start text-start w-full h-[3rem] px-4 content-center'
                                    }
                                >
                                    <div className="w-max">
                                        <div className="text-[15px] leading-none font-bold">{item.label}</div>
                                        <div
                                            className={
                                                activeTab === item.value
                                                    ? 'text-[11px] leading-none font-medium text-white'
                                                    : 'text-[11px] leading-none font-medium text-gray-500'
                                            }
                                        >
                                            {item.labelDesc}
                                        </div>
                                    </div>
                                </div>
                                {activeTab === item.value && (
                                    <div className="absolute top-[0.44rem] end-[-1.05rem] w-[2.12rem] h-[2.12rem] bg-red-900 transform rotate-45"></div>
                                )}
                            </div>
                        </Tab>
                    ))}
                    {/* //! DOWNLOAD - SEARCH - COMPANY */}
                    <ul className="w-[13rem] px-3 *:py-1 py-14">
                        <Quick image={'/src/assets/quick/quick04.png'} text1={'카달로그 다운'} text3={'바로가기'} />
                        <Quick image={'/src/assets/quick/quick02.png'} text1={'온라인 견적문의'} text3={'바로가기'} />
                        <Quick image={'/src/assets/quick/quick03.png'} text1={'찾아오시는길'} text3={'바로가기'} />
                    </ul>
                </TabsHeader>
                {activeTab === dataBody?.value && (
                    <TabPanel value={dataBody?.value} className="p-0 px-16 py-6 pt-0 3xl:px-16 2xl:px-24">
                        {activeTab === dataBody?.value && dataBody?.content}
                    </TabPanel>
                )}
            </Tabs>
        </div>
    );
}

export default TabProduct;
