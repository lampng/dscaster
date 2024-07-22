import React, { useState, useEffect } from 'react';
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel, Typography } from '@material-tailwind/react';
import { useMediaQuery } from 'react-responsive';

function ProductIntroduction() {
    const [activeTab, setActiveTab] = React.useState('Light-Duty');
    const data = [
        // #1
        {
            label: '경하중용캐스터',
            labelDesc: 'Light-Duty Caster',
            value: 'Light-Duty',
            desc: {
                Usage: '용도(Usage)',
                usa_desc1: '소형조립가구 (Quick-Assembly Furniture)',
                usa_desc2: '진열장 (Show Case)',
                usa_desc3: '각종 사무기기 (Business Machine)',
                usa_desc4: '경량물 운반기구 (Light Conveyance Equipment)',
                usa_desc5: '각종 의료장비 (Medical Instrument)',
                Option: '선택사양(Option)',
                opt_desc1: '크롬도금 (Chrome Plated)',
                opt_desc2: '착색도금 (Metal Coloring)',
                opt_desc3: '분체도장 (Powder Coating)',
                img: '/src/assets/RewviewProduct/proImg01.jpg',
            },
        },
        // #2
        {
            label: '중간하중용 캐스터',
            labelDesc: 'Medium-Duty Caster',
            value: 'Medium-Duty',
            desc: {
                Usage: '용도(Usage)',
                usa_desc1: '대형마트의 운반기구 (Conveyance equipment for big mart)',
                usa_desc2: '롤컨테이너 (Roll container)',
                usa_desc3: '각종 산업용, 공업용 운반기구(Conveyance equipment for industrial uses)',
                Option: '선택사양(Option)',
                opt_desc1: '착색도금 (Metal Coloring)',
                opt_desc2: '분체도장 (Powder Coating)',
                img: '/src/assets/RewviewProduct/proImg02.jpg',
            },
        },
        // #3
        {
            label: '중하중용 캐스터',
            labelDesc: 'Heavy-Duty Caster',
            value: 'Heavy-Duty',
            desc: {
                Usage: '용도(Usage)',
                usa_desc1: '각종 중량물 운반기구 (Conveyance equipments for heavy products)',
                usa_desc2: '고하중물 취급업체에 적합 (Suitable for companies dealing in heavy load)',
                usa_desc3: '자동차 부품 운반구 (conveyance equipments for parts of an automobile)',
                Option: '선택사양(Option)',
                opt_desc1: '착색도금 (Metal Coloring)',
                opt_desc2: '분체도장 (Powder Coating)',
                img: '/src/assets/RewviewProduct/proImg03.jpg',
            },
        },
        // #4
        {
            label: '스테인리스 캐스터',
            labelDesc: 'Super Heavy-Duty Caster',
            value: 'Super-Heavy-Duty',
            desc: {
                Usage: '용도(Usage)',
                usa_desc1: '각종 중량물 운반기구 (Conveyance equipments for heavy products)',
                usa_desc2: '고하중물 취급업체에 적합 (Suitable for companies dealing in heavy load)',
                usa_desc3: '자동차 부품 운반구 (conveyance equipments for parts of an automobile)',
                Option: '선택사양(Option)',
                opt_desc1: '착색도금 (Metal Coloring)',
                opt_desc2: '분체도장 (Powder Coating)',
                img: '/src/assets/RewviewProduct/proImg04.jpg',
            },
        },
        // #5
        {
            label: '고하중용 캐스터',
            labelDesc: 'Stainless Steel Caster',
            value: 'Stainless-Steel',
            desc: {
                Usage: '용도(Usage)',
                usa_desc1: '병원용 장비 (Hospital Instrument)',
                usa_desc2: '제약회사 (Pharmaceutical Equipment)',
                usa_desc3: '식당, 급식소 (Food Service Equipment)',
                Option: '선택사양(Option)',
                opt_desc1: '무소음 그리스 사용 (No noise grease used)',
                img: '/src/assets/RewviewProduct/proImg05.jpg',
            },
        },
        // #6
        {
            label: '내열성/내한성 캐스터',
            labelDesc: 'Heat-Resisting/Low Temperature Caster',
            value: 'Heat-Resisting-Low-Temperature',
            desc: {
                Usage: '용도(Usage)',
                usa_desc1: '제과 및 제빵 기계 (Bakery Applications)',
                usa_desc2: '버섯농장 (Mushroom Plantation)',
                usa_desc3: '세라믹 제조업체 (Ceramic Manufacturing Company)',
                usa_desc4: '유리 제조업체 (Glass Manufacturing Company)',
                Option: '선택사양(Option)',
                opt_desc1: '고온, 저온에 강한 특수 그리스 사용 (Special grease used) -35°C ~ +250°C',
                img: '/src/assets/RewviewProduct/proImg06.jpg',
            },
        },
        // #7
        {
            label: '의료용 캐스터',
            labelDesc: 'Medical Equipment Caster',
            value: 'Medical-Equipment',
            desc: {
                Usage: '용도(Usage)',
                usa_desc1: '의료용 기구 (Medical Instrument)',
                usa_desc2: '병원용 침대 (Hospital Bed)',
                usa_desc3: '진열장 (Showcase)',
                Option: '선택사양(Option)',
                opt_desc1: '아연도금 (Zinc Plated)',
                opt_desc2: '착색도금 (Metal Coloring)',
                opt_desc3: '분체도장 (Powder Coating)',
                Feature: '특징(Feature)',
                fea_desc1: '무소음 그리스 사용 (No noise grease used)',
                img: '/src/assets/RewviewProduct/proImg07.jpg',
            },
        },
        // #8
        {
            label: '저소음 캐스터',
            labelDesc: 'Low Noise Caster',
            value: 'Low-Noise',
            desc: {
                Usage: '용도(Usage)',
                usa_desc1: '학교, 도서관 (School, Library)',
                usa_desc2: '병원용 기기 (Hospital Equipment)',
                usa_desc3: '연구소 (Laboratory)',
                Option: '선택사양(Option)',
                opt_desc1: '크롬도금 (Chrome Plated)',
                opt_desc2: '착색도금 (Metal Coloring)',
                opt_desc3: '분체도장 (Powder Coating)',
                Feature: '특징(Feature)',
                fea_desc1: '무소음 그리스 사용 (No noise grease used)',
                img: '/src/assets/RewviewProduct/proImg08.jpg',
            },
        },
        // #9
        {
            label: '특수 목적용 캐스터',
            labelDesc: 'Special Caster',
            value: 'Special',
            desc: {
                Usage: '용도(Usage)',
                usa_desc1: '무대기기',
                usa_desc2: '건축설비',
                Option: '선택사양(Option)',
                opt_desc1: '크롬도금 (Chrome Plated)',
                opt_desc2: '착색도금 (Metal Coloring)',
                opt_desc3: '분체도장 (Powder Coating)',
                img: '/src/assets/RewviewProduct/proImg09.jpg',
            },
        },
        // #10
        {
            label: '높낮이조절 캐스터',
            labelDesc: 'Leveling Caster',
            value: 'Leveling-Caster',
            desc: {
                Usage: '용도(Usage)',
                usa_desc1: '기계장비 (Machine Equipment)',
                usa_desc2: '의료장비 (Medical Device)',
                usa_desc3: '통신장비 (Signal Equipment)',
                img: '/src/assets/RewviewProduct/proImg10.jpg',
            },
        },
        // #11
        {
            label: '높낮이 조절자',
            labelDesc: 'Leveling Foot',
            value: 'Leveling-Foot',
            desc: {
                Usage: '용도(Usage)',
                usa_desc1: '기계장비 (Machine Equipment)',
                usa_desc2: '의료장비 (Medical Device)',
                usa_desc3: '통신장비 (Signal Equipment)',
                Option: '선택사양(Option)',
                opt_desc1: '니켈도금(NI)',
                opt_desc2: '스테인레스(Stainless)',
                opt_desc3: '특수사양은 주문 제작',
                img: '/src/assets/RewviewProduct/proImg12.jpg',
            },
        },
        // #12
        {
            label: '운반 기구',
            labelDesc: 'Trolley',
            value: 'Trolley',
            desc: {
                Usage: '용도(Usage)',
                usa_desc1: '식당 카트 (Restaurant Cart)',
                usa_desc2: '산업용 카트 (Industrial Cart)',
                img: '/src/assets/RewviewProduct/proImg14.jpg',
            },
        },
    ];
    const res3xl = `3xl:pl-[425px]`;
    const res2xl = `2xl:pl-[225px]`;
    const resxl = `xl:pl-[125px]`;
    const reslg = `lg:pl-[5px]`;
    const resmd = `md:pl-[5px]`;
    const ressm = `sm:pl-[0px]`;

    return (
        <Tabs value={activeTab} orientation="vertical">
            <div>
                <div
                    className={`pl-[425px] pt-3 bg-gray-900 bg-opacity-70 p-0 text-center text-white font-bold ${res3xl} ${res2xl} ${resxl} ${reslg} ${resmd} ${ressm}`}
                >
                    <div className="w-auto relative p-1">
                        <div className="absolute top-0 left-[calc(50%-45px)] transform w-4 h-1 bg-red-900"></div>
                        <div className="absolute top-0 left-[calc(50%-45px)] transform w-1 h-1/3 bg-red-900"></div>

                        <Typography variant="h6">제품소개</Typography>
                    </div>
                </div>
                <TabsHeader
                    className={`pl-[425px] rounded-none bg-transparent py-3 shadow-none h-max bg-gray-900 bg-opacity-70 ${res3xl} ${res2xl} ${resxl} ${reslg} ${resmd} ${ressm}`}
                    indicatorProps={{
                        className: 'bg-transparent shadow-none rounded-none',
                    }}
                >
                    {data.map(({ label, labelDesc, value }) => {
                        const isValue = activeTab === value;
                        let classesLabel = '';
                        let classesLabelDesc = '';

                        if (isValue) {
                            classesLabel = 'bg-red-900 !font-bold text-gray-300 h-6 text-base justify-start max-w-fit';
                            classesLabelDesc =
                                'bg-gray-800 bg-opacity-70 !font-bold text-gray-500 h-6 text-xs justify-start';
                        } else {
                            classesLabel =
                                'bg-transparent text-gray-300 !font-bold h-6 text-base justify-start max-w-fit';
                            classesLabelDesc = 'text-gray-500 !font-bold text-xs h-6 md:justify-start';
                        }
                        return (
                            <Tab key={value} value={value} className="p-0">
                                <div className="flex w-[27rem] md:w-[13rem] sm:w-[10rem] 2xl:w-[27rem] xl:w-[27rem] lg:w-[27rem]">
                                    <Tab onClick={() => setActiveTab(value)} className={`${classesLabel} md:max-w-full sm:max-w-full sm:text-sm 2xl:max-w-fit xl:max-w-fit lg:max-w-fit `}>
                                        {label}
                                    </Tab>
                                    <Tab
                                        onClick={() => setActiveTab(value)}
                                        className={`${classesLabelDesc} 2xl:block 2xl:text-start xl:block xl:text-start lg:block lg:text-start md:hidden sm:hidden`}
                                    >
                                        {labelDesc}
                                    </Tab>
                                    <Tab
                                        onClick={() => setActiveTab(value)}
                                        className={activeTab === value ? 'p-0 w-auto pl-2.5 ' : 'text my-auto hidden'}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="size-5 text-gray-200 rotate-180 absolute left-[0.5px] select-none cursor-default ]"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </Tab>
                                </div>
                            </Tab>
                        );
                    })}
                </TabsHeader>
            </div>
            <TabsBody className="">
                {data.map(({ value, desc }) => (
                    <TabPanel key={value} value={value} className="relative bg-gray-200 h-full">
                        <div className="w-full flex">
                            <div className="w-auto">
                                <div>
                                    {desc.Usage && (
                                        <div>
                                            <Typography variant="h6" color="black">
                                                {desc.Usage}
                                            </Typography>
                                            <ul className="list-disc *:ml-5 *:text-sm">
                                                {desc.usa_desc1 && <li>{desc.usa_desc1}</li>}
                                                {desc.usa_desc2 && <li>{desc.usa_desc2}</li>}
                                                {desc.usa_desc3 && <li>{desc.usa_desc3}</li>}
                                                {desc.usa_desc4 && <li>{desc.usa_desc4}</li>}
                                                {desc.usa_desc5 && <li>{desc.usa_desc5}</li>}
                                            </ul>
                                        </div>
                                    )}
                                    {desc.Option && (
                                        <div className="pt-3">
                                            <Typography variant="h6" color="black">
                                                {desc.Option}
                                            </Typography>
                                            <ul className="list-disc *:ml-5 *:text-sm">
                                                {desc.opt_desc1 && <li>{desc.opt_desc1}</li>}
                                                {desc.opt_desc2 && <li>{desc.opt_desc2}</li>}
                                                {desc.opt_desc3 && <li>{desc.opt_desc3}</li>}
                                            </ul>
                                        </div>
                                    )}
                                    {desc.Feature && (
                                        <div className="pt-3">
                                            <Typography variant="h6" color="black">
                                                {desc.Feature}
                                            </Typography>
                                            <ul className="list-disc *:ml-5 *:text-sm">
                                                {desc.fea_desc1 && <li>{desc.fea_desc1}</li>}
                                                {desc.fea_desc2 && <li>{desc.fea_desc2}</li>}
                                                {desc.fea_desc3 && <li>{desc.fea_desc3}</li>}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="w-1/2">
                                <img
                                    className="absolute w-max object-cover object-center select-none"
                                    src={desc.img}
                                    alt="nature image"
                                />
                            </div>
                        </div>
                    </TabPanel>
                ))}
            </TabsBody>
        </Tabs>
    );
}

export default ProductIntroduction;
