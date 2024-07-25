// ! Introduction
import Message from '/src/pages/introduction/tabItem/Message';
import History from '/src/pages/introduction/tabItem/History';
import Certification from '/src/pages/introduction/tabItem/Certification';
import Location from '/src/pages/introduction/tabItem/Location';
// ! DATA
import CasterNomenclature from '/src/pages/data/tabItem/CasterNomenclature';
import PlateNomenclature from '/src/pages/data/tabItem/PlateNomenclature';
import LoadCapacity from '/src/pages/data/tabItem/LoadCapacity';
import CasterNumberingSystem from '/src/pages/data/tabItem/CasterNumberingSystem';
import Usage from '/src/pages/data/tabItem/Usage';
// ! Product
import TabItem from '/src/pages/product/tabItem/index'

// ! Introduction
export const IntroductionListMenuItems = [
    {
        image: '../Navbar/top2m1_01.png',
        title: '회사개요',
        description: 'Message',
        to: '/introduction/message',
        value: 'Message',
    },
    {
        image: '../Navbar/top2m1_02.png',
        title: '회사연혁',
        description: 'History',
        to: '/introduction/history',
        value: 'History',
    },
    {
        image: '../Navbar/top2m1_03.png',
        title: '품질인증',
        description: 'Quality Certification',
        to: '/introduction/certification',
        value: 'Certification',
    },
    {
        image: '../Navbar/top2m1_04.png',
        title: '찾아오시는길',
        description: 'Location',
        to: '/introduction/location',
        value: 'Location',
    },
];
export const TabIntroduction = [
    {
        label: '회사개요',
        labelDesc: 'Message',
        value: 'message',
        content: <Message />,
    },
    {
        label: '회사연혁',
        labelDesc: 'History',
        value: 'history',
        content: <History />,
    },
    {
        label: '품질인증',
        labelDesc: 'Quality Certification',
        value: 'certification',
        content: <Certification />,
    },
    {
        label: '찾아오시는길',
        labelDesc: 'Location',
        value: 'location',
        content: <Location />,
    },
];
// ! Data
export const DataListMenuItems = [
    {
        title: '캐스터용어',
        description: 'Caster Nomenclature',
        to: '/caster-data/Casternomenclature',
        value: 'Casternomenclature',
    },
    {
        title: '플레이트용어',
        description: 'Plate Nomenclature',
        to: '/caster-data/Platenomenclature',
        value: 'Platenomenclature',
    },
    {
        title: '허용하중계산법 ',
        description: 'Load Capacity',
        to: '/caster-data/Loadcapacity',
        value: 'Loadcapacity',
    },
    {
        title: '표기방법및용어',
        description: 'Caster Numbering System',
        to: '/caster-data/Casternumberingsystem',
        value: 'Casternumberingsystem',
    },
    {
        title: '주의사항',
        description: 'Usage',
        to: '/caster-data/Usage',
        value: 'Usage',
    },
];
export const TabData = [
    {
        label: '캐스터용어',
        labelDesc: 'Caster Nomenclature',
        value: 'Casternomenclature',
        content: <CasterNomenclature />,
    },
    {
        label: '플레이트용어',
        labelDesc: 'Plate Nomenclature',
        value: 'Platenomenclature',
        content: <PlateNomenclature />,
    },
    {
        label: '품질인증',
        labelDesc: 'Load Capacity',
        value: 'Loadcapacity',
        content: <LoadCapacity />,
    },
    {
        label: '표기방법및용어',
        labelDesc: 'Caster Numbering System',
        value: 'Casternumberingsystem',
        content: <CasterNumberingSystem />,
    },
    {
        label: '주의사항',
        labelDesc: 'Usage',
        value: 'Usage',
        content: <Usage />,
    },
];
export const CasterNumberingSystem_Data = [
    {
        image: '../CasterData/wheels_01.jpg',
        CS: 'S R',
        CS_des_eng: 'Soft Rubber',
        CS_des_kor: '연질고무',
    },
    {
        image: '../CasterData/wheels_02.jpg',
        CS: 'EPU',
        CS_des_eng: 'Elastic Poly Urethane',
        CS_des_kor: '액상우레탄 휠+볼베어링',
    },
    {
        image: '../CasterData/wheels_03.jpg',
        CS: 'SRB',
        CS_des_eng: 'Soft Rubber with Ball bearing',
        CS_des_kor: '연질고무+베어링',
    },
    {
        image: '../CasterData/wheels_04.jpg',
        CS: 'PCB',
        CS_des_eng: 'Poly Vinyl Chloride insert',
        CS_des_kor: 'PVC-베어링타입',
    },
    {
        image: '../CasterData/wheels_05.jpg',
        CS: 'LDP',
        CS_des_eng: 'Light Duty Plastic',
        CS_des_kor: '경량용 플라스틱',
    },
    {
        image: '../CasterData/wheels_06.jpg',
        CS: 'PUA',
        CS_des_eng: 'Poly Urethane tread Alum core',
        CS_des_kor: '우레탄휠 알루미늄 코어',
    },
    {
        image: '../CasterData/wheels_07.jpg',
        CS: 'HDP',
        CS_des_eng: 'Heavy Duty Plastic',
        CS_des_kor: '중량용 플라스틱',
    },
    {
        image: '../CasterData/wheels_08.jpg',
        CS: 'PUF',
        CS_des_eng: 'Poly Urethane tread Plastic core',
        CS_des_kor: '폴리우레탄 플라스틱 타입',
    },
    {
        image: '../CasterData/wheels_09.jpg',
        CS: 'PUB',
        CS_des_eng: 'Poly Urethane with Ball bearing',
        CS_des_kor: '폴리우레탄+볼베어링',
    },
    {
        image: '../CasterData/wheels_10.jpg',
        CS: 'PUI',
        CS_des_eng: 'Poly Urethane tread Iron core',
        CS_des_kor: '주물 고무타입',
    },
    {
        image: '../CasterData/wheels_11.jpg',
        CS: 'PUN',
        CS_des_eng: 'Poly Urethane with Nylon bearing',
        CS_des_kor: '폴리우레탄+나일론베어링',
    },
    {
        image: '../CasterData/wheels_12.jpg',
        CS: 'NYL',
        CS_des_eng: 'Nylon',
        CS_des_kor: '나일론',
    },
    {
        image: '../CasterData/wheels_13.jpg',
        CS: 'PVB',
        CS_des_eng: 'Poly Vinyl chloride with Ball bearing',
        CS_des_kor: 'PVC+볼베어링',
    },
    {
        image: '../CasterData/wheels_14.jpg',
        CS: 'NGM',
        CS_des_eng: 'Nylon Glass Mineral',
        CS_des_kor: '경량용 내열성',
    },
    {
        image: '../CasterData/wheels_15.jpg',
        CS: 'PVN',
        CS_des_eng: 'Poly Vinyl chloride with Nylon bearing',
        CS_des_kor: 'PVC+나일론베어링',
    },
    {
        image: '../CasterData/wheels_16.jpg',
        CS: 'PHN',
        CS_des_eng: 'Phenolic Caster',
        CS_des_kor: '중량용 내열성',
    },
    {
        image: '../CasterData/wheels_17.jpg',
        CS: 'PVP',
        CS_des_eng: 'Poly Vinyl chloride tread PI',
        CS_des_kor: 'PVC+적용',
    },
    {
        image: '../CasterData/wheels_18.jpg',
        CS: 'VGC',
        CS_des_eng: 'V Grooved Caster',
        CS_des_kor: 'V형 윤활',
    },
    {
        image: '../CasterData/wheels_19.jpg',
        CS: 'MRB',
        CS_des_eng: 'Thermoplastic Rubber with Ball bearing',
        CS_des_kor: '열가소성 고무 타일',
    },
    {
        image: '../CasterData/wheels_20.jpg',
        CS: 'UGC',
        CS_des_eng: 'U Grooved Caster',
        CS_des_kor: 'U형 윤활',
    },
    {
        image: '../CasterData/wheels_21.jpg',
        CS: 'MRP',
        CS_des_eng: 'Thermoplastic Rubber tread',
        CS_des_kor: '열가소성 고무 타일',
    },
    {
        image: '../CasterData/wheels_22.jpg',
        CS: 'P T',
        CS_des_eng: 'Pneumatic Tire',
        CS_des_kor: '에어 내기',
    },
    {
        image: '../CasterData/wheels_23.jpg',
        CS: 'ELA',
        CS_des_eng: 'Elastomer tread Plastic core',
        CS_des_kor: '쿠션용 플라스틱 코어',
    },
    {
        image: '../CasterData/wheels_24.jpg',
        CS: 'F P',
        CS_des_eng: 'Foam Poly urethane',
        CS_des_kor: '발포우레탄 타이어',
    },
    {
        image: '../CasterData/wheels_25.jpg',
        CS: 'ELP',
        CS_des_eng: 'Elastomer tread Plastic core',
        CS_des_kor: '쿠션용 플라스틱 코어',
    },
    {
        image: '../CasterData/wheels_26.jpg',
        CS: 'MCN',
        CS_des_eng: 'Monocore Cast Nylon',
        CS_des_kor: 'MCL캐스터',
    },
    {
        image: '../CasterData/wheels_27.jpg',
        CS: 'NSR',
        CS_des_eng: 'Natural Soft Rubber tread',
        CS_des_kor: '천연 연질고무 트레드',
    },
];
// ! Product
export const ProductListMenuItems = [
    {
        title: '경하중용캐스터',
        description: 'Light-Duty Caster',
        value: 'Light-Duty',
        to: '/product/Light-Duty',
    },
    {
        title: '중간하중용 캐스터',
        description: 'Medium-Duty Caster',
        value: 'Medium-Duty',
        to: '/product/Medium-Duty',
    },
    {
        title: '중하중용 캐스터',
        description: 'Heavy-Duty Caster',
        value: 'Heavy-Duty',
        to: '/product/Heavy-Duty',
    },
    {
        title: '스테인리스 캐스터',
        description: 'Super Heavy-Duty Caster',
        value: 'Super-Heavy-Duty',
        to: '/product/Super-Heavy-Duty',
    },
    {
        title: '고하중용 캐스터',
        description: 'Stainless Steel Caster',
        value: 'StainlessiSteel',
        to: '/product/StainlessiSteel',
    },
    {
        title: '내열성/내한성 캐스터',
        description: 'Heat-Resisting/Low Temperature Caster',
        value: 'Heat-Resisting',
        to: '/product/Heat-Resisting',
    },
    {
        title: '의료용 캐스터',
        description: 'Medical Equipment Caster',
        value: 'Medical-Equipment',
        to: '/product/Medical-Equipment',
    },
    {
        title: '저소음 캐스터',
        description: 'Low Noise Caster',
        value: 'Low-Noise',
        to: '/product/Low-Noise',
    },
    {
        title: '특수 목적용 캐스터',
        description: 'Special Caster',
        value: 'Special-Caster',
        to: '/product/Special-Caster',
    },
    {
        title: '높낮이조절 캐스터',
        description: 'Leveling Caster',
        value: 'Leveling-Caster',
        to: '/product/Leveling-Caster',
    },
    {
        title: '높낮이 조절자',
        description: 'Leveling Foot',
        value: 'Leveling-Foot',
        to: '/product/Leveling-Foot',
    },
    {
        title: '운반 기구',
        description: 'Trolley',
        to: '/product/Trolley',
        value: 'Trolley',
    },
    {
        title: '기타',
        description: 'etc',
        to: '/product/etc',
        value: 'etc',
    },
];
// ! Light Duty Caster
const Light_Duty_Caster_DATA = [
    // ! 1
    {
        image: '../Product/LightDutyCaster/DS1010SERIES/160425105427_01.jpg',
        id: 'DS 1010 SERIES',
        des: {
            imageProduct: [
                {
                    image: '../Product/LightDutyCaster/DS1010SERIES/160425105427_01.jpg',
                    type: 'Model: DS 1010 LDP-S',
                },
                {
                    image: '../Product/LightDutyCaster/DS1010SERIES/160425105427_00.jpg',
                    type: 'Model: DS 1010 LDP-R',
                },
            ],
            CasterSpecification: {
                headers: [
                    { text: '제품명', unit: '(Model)' },
                    { text: 'Wheel Dia', unit: '(mm)', image: '../Product/WheelDia.jpg' },
                    { text: 'Tread Width', unit: '(mm)', image: '../Product/TreadWidth.jpg' },
                    { text: 'Wheel Material', image: '../Product/WheelMaterial.jpg' },
                    { text: 'Bearing', image: '../Product/Bearing.jpg' },
                    { text: 'Load Height', unit: '(mm)', image: '../Product/LoadHeight1.jpg' },
                    { text: 'Swivel Radius', unit: '(mm)', image: '../Product/SwivelRadius.jpg' },
                    { text: 'Load Capacity', unit: '(kg)', image: '../Product/LoadCapacity.jpg' },
                    { text: '박스당수량', unit: 'PCS' },
                ],
                rows: [['DS 1010 LDP', 25, 16, 'Poly Propylene', 'Plain', 37, 26, 10, 600]],
            },
            spec: [
                {
                    image: '../Product/LightDutyCaster/DS1010SERIES/160517020717_10.png',
                },
            ],
        },
    },
    // ! 2
    {
        image: '../Product/LightDutyCaster/DS1015SERIES/160425112145_02.jpg',
        id: 'DS 1015 SERIES',
        des: {
            imageProduct: [
                {
                    image: '../Product/LightDutyCaster/DS1015SERIES/160425112145_00.jpg',
                    type: 'Model: DS 1015 EPU-R',
                },
                {
                    image: '../Product/LightDutyCaster/DS1015SERIES/160425112145_01.jpg',
                    type: 'Model: DS 1015 EPU-S',
                },
                {
                    image: '../Product/LightDutyCaster/DS1015SERIES/160425112145_02.jpg',
                    type: 'Model: DS 1015 PVP(B)-S',
                },
                {
                    image: '../Product/LightDutyCaster/DS1015SERIES/160425112145_03.jpg',
                    type: 'Model: DS 1015 PVP(R)-R',
                },
                {
                    image: '../Product/LightDutyCaster/DS1015SERIES/160425112145_04.jpg',
                    type: 'Model: DS 1015 PVP(R)-S',
                },
            ],
            CasterSpecification: {
                headers: [
                    { text: '제품명', unit: '(Model)' },
                    { text: 'Wheel Dia', unit: '(mm)', image: '../Product/WheelDia.jpg' },
                    { text: 'Tread Width', unit: '(mm)', image: '../Product/TreadWidth.jpg' },
                    { text: 'Wheel Material', image: '../Product/WheelMaterial.jpg' },
                    { text: 'Bearing', image: '../Product/Bearing.jpg' },
                    { text: 'Load Height', unit: '(mm)', image: '../Product/LoadHeight1.jpg' },
                    { text: 'Swivel Radius', unit: '(mm)', image: '../Product/SwivelRadius.jpg' },
                    { text: 'Load Capacity', unit: '(kg)', image: '../Product/LoadCapacity.jpg' },
                    { text: '박스당수량', unit: 'PCS' },
                ],
                rows: [
                    ['DS 1015 PVP', 38, 20, 'Poly Vinyl Chloride', 'Plain', 50, 36, 20, 300],
                    ['DS 1015 EPU', 40, 17, 'Elastic Poly Urethane', '688ZZ', 50, 36, 20, 300],
                ],
            },
            spec: [
                {
                    image: '../Product/LightDutyCaster/DS1015SERIES/160517030901_10.png',
                },
            ],
        },
    },
    // ! 3
    {
        image: '../Product/LightDutyCaster/DS1020SERIES/160425030039_07.jpg',
        id: 'DS 1020 SERIES',
        des: {
            imageProduct: [
                {
                    image: '../Product/LightDutyCaster/DS1020SERIES/160425030039_00.jpg',
                    type: 'Model: DS 1020 LDP(B)-R',
                },
                {
                    image: '../Product/LightDutyCaster/DS1020SERIES/160425030039_01.jpg',
                    type: 'Model: DS 1020 LDP(B)-S',
                },
                {
                    image: '../Product/LightDutyCaster/DS1020SERIES/160425030039_02.jpg',
                    type: 'Model: DS 1020 LDP(R)-BK',
                },
                {
                    image: '../Product/LightDutyCaster/DS1020SERIES/160425030039_03.jpg',
                    type: 'Model: DS 1020 LDP(R)-R',
                },
                {
                    image: '../Product/LightDutyCaster/DS1020SERIES/160425030039_04.jpg',
                    type: 'Model: DS 1020 MRP-BK',
                },
                {
                    image: '../Product/LightDutyCaster/DS1020SERIES/160425030039_05.jpg',
                    type: 'Model: DS 1020 PUP(B)-R',
                },
                {
                    image: '../Product/LightDutyCaster/DS1020SERIES/160425030039_06.jpg',
                    type: 'Model: DS 1020 PUP(B)-S',
                },
                {
                    image: '../Product/LightDutyCaster/DS1020SERIES/160425030039_07.jpg',
                    type: 'Model: DS 1020 PUP(R)-BK',
                },
                {
                    image: '../Product/LightDutyCaster/DS1020SERIES/160425030039_08.jpg',
                    type: 'Model: DS 1020 PUP(R)-R',
                },
                {
                    image: '../Product/LightDutyCaster/DS1020SERIES/160425030039_09.jpg',
                    type: 'Model: DS 1020 PUP(R)-S',
                },
            ],
            CasterSpecification: {
                headers: [
                    { text: '제품명', unit: '(Model)' },
                    { text: 'Wheel Dia', unit: '(mm)', image: '../Product/WheelDia.jpg' },
                    { text: 'Tread Width', unit: '(mm)', image: '../Product/TreadWidth.jpg' },
                    { text: 'Wheel Material', image: '../Product/WheelMaterial.jpg' },
                    { text: 'Bearing', image: '../Product/Bearing.jpg' },
                    { text: 'Load Height', unit: '(mm)', image: '../Product/LoadHeight1.jpg' },
                    { text: 'Swivel Radius', unit: '(mm)', image: '../Product/SwivelRadius.jpg' },
                    { text: 'Load Capacity', unit: '(kg)', image: '../Product/LoadCapacity.jpg' },
                    { text: '박스당수량', unit: 'PCS' },
                ],
                rows: [
                    ['DS 1020 PUP', 50, 23, 'Poly Urethane', 'Plain', 68, 45, 35],
                    ['DS 1020 LDP', 50, 23, 'Poly Propylene', 'Plain', 68, 45, 40],
                    ['DS 1020 LDP', 50, 23, 'Mirage Rubber', 'Plain', 68, 45, 30],
                ],
                commonPCS: 'S-150 R-150 B/K-130',
            },
            spec: [
                {
                    image: '../Product/LightDutyCaster/DS1020SERIES/160517031010_10.png',
                },
            ],
        },
    },
    // ! 4
    {
        image: '../Product/LightDutyCaster/DS1120SERIES/160425030809_06.jpg',
        id: 'DS 1120 SERIES',
        des: {
            imageProduct: [
                {
                    image: '../Product/LightDutyCaster/DS1120SERIES/160425030809_00.jpg',
                    type: 'Model: DS 1120 EPU-BK',
                },
                {
                    image: '../Product/LightDutyCaster/DS1120SERIES/160425030809_01.jpg',
                    type: 'Model: DS 1120 EPU-BT',
                },
                {
                    image: '../Product/LightDutyCaster/DS1120SERIES/160425030809_02.jpg',
                    type: 'Model: DS 1120 LDP(B)-BT(1／2)',
                },
                {
                    image: '../Product/LightDutyCaster/DS1120SERIES/160425030809_03.jpg',
                    type: 'Model: DS 1120 LDP(R)-BK',
                },
                {
                    image: '../Product/LightDutyCaster/DS1120SERIES/160425030809_04.jpg',
                    type: 'Model: DS 1120 LDP(R)-BT(3／8)',
                },
                {
                    image: '../Product/LightDutyCaster/DS1120SERIES/160425030809_05.jpg',
                    type: 'Model: DS 1120 MRP-BK',
                },
                {
                    image: '../Product/LightDutyCaster/DS1120SERIES/160425030809_06.jpg',
                    type: 'Model: DS 1120 PUP(B)-BT BK(1／2)',
                },
                {
                    image: '../Product/LightDutyCaster/DS1120SERIES/160425030809_07.jpg',
                    type: 'Model: DS 1120 PUP(B)-BT BK(3／8)',
                },
                {
                    image: '../Product/LightDutyCaster/DS1120SERIES/160425030809_08.jpg',
                    type: 'Model: DS 1120 PUP(B)-BT(1／2)',
                },
                {
                    image: '../Product/LightDutyCaster/DS1120SERIES/160425030809_09.jpg',
                    type: 'Model:DS 1120 PUP(B)-S',
                },
                {
                    image: '../Product/LightDutyCaster/DS1120SERIES/160425030809_010.jpg',
                    type: 'Model: DS 1120 PUP(G)-BT BK(3／8)',
                },
                {
                    image: '../Product/LightDutyCaster/DS1120SERIES/160425030809_011.jpg',
                    type: 'Model: DS 1120 PUP(G)-S',
                },
                {
                    image: '../Product/LightDutyCaster/DS1120SERIES/160425030809_012.jpg',
                    type: 'Model:DS 1120 PUP(R)-BT BK(3／8)',
                },
                {
                    image: '../Product/LightDutyCaster/DS1120SERIES/160425030809_013.jpg',
                    type: 'Model:DS 1120 PUP(R)-S',
                },
            ],
            CasterSpecification: {
                headers: [
                    { text: '제품명', unit: '(Model)' },
                    { text: 'Wheel Dia', unit: '(mm)', image: '../Product/WheelDia.jpg' },
                    { text: 'Tread Width', unit: '(mm)', image: '../Product/TreadWidth.jpg' },
                    { text: 'Wheel Material', image: '../Product/WheelMaterial.jpg' },
                    { text: 'Bearing', image: '../Product/Bearing.jpg' },
                    { text: 'Load Height', unit: '(mm)', image: '../Product/LoadHeight1.jpg' },
                    { text: 'Load Height', unit: '(mm)', image: '../Product/LoadHeight2.jpg' },
                    { text: 'Swivel Radius', unit: '(mm)', image: '../Product/SwivelRadius.jpg' },
                    { text: 'Load Capacity', unit: '(kg)', image: '../Product/LoadCapacity.jpg' },
                    { text: '박스당수량', unit: 'PCS' },
                ],
                rows: [
                    ['DS 1120 PUP', 50, 21, 'Poly Urethane', 'Plain', 64, 77, 45, 40, 200],
                    // DS 1120 MRP	50	21	Mirage Rubber
                    ['DS 1120 PUP', 50, 21, 'Mirage Rubber', 'Plain', 64, 77, 45, 40, 200],
                    ['DS 1120 PUP', 50, 21, 'Poly Urethane', 'Plain', 64, 77, 45, 45, 200],
                    ['DS 1120 PUP', 50, 17, 'Elastic Poly Urethane', '688ZZ', 64, 77, 45, 40, 200],
                ],
                // commonPCS: 'S-150 R-150 B/K-130',
            },
            spec: [
                {
                    image: '../Product/LightDutyCaster/DS1120SERIES/160518113832_10.PNG.jpg',
                },
            ],
        },
    },
    // ! 5
    {
        image: '../Product/LightDutyCaster/DS1225SERIES/160425032837_06.jpg',
        id: 'DS 1225 SERIES',
        des: {
            imageProduct: [
                {
                    image: '../Product/LightDutyCaster/DS1225SERIES/160425032837_00.jpg',
                    type: 'Model: DS 1225 LDP-S',
                },
                {
                    image: '../Product/LightDutyCaster/DS1225SERIES/160425032837_01.jpg',
                    type: 'Model: DS 1225 MRB-BK',
                },
                {
                    image: '../Product/LightDutyCaster/DS1225SERIES/160425032837_02.jpg',
                    type: 'Model: DS 1225 PUB(B)-R',
                },
                {
                    image: '../Product/LightDutyCaster/DS1225SERIES/160425032837_03.jpg',
                    type: 'Model: DS 1225 PUB-S',
                },
                {
                    image: '../Product/LightDutyCaster/DS1225SERIES/160425032837_04.jpg',
                    type: 'Model: DS 1225 PUP-S',
                },
                {
                    image: '../Product/LightDutyCaster/DS1225SERIES/160425032837_05.jpg',
                    type: 'Model: DS 1225 PVB(G)-BT BK',
                },
                {
                    image: '../Product/LightDutyCaster/DS1225SERIES/160425032837_06.jpg',
                    type: 'Model: DS 1225 PVB-BK',
                },
                {
                    image: '../Product/LightDutyCaster/DS1225SERIES/160425032837_07.jpg',
                    type: 'Model: DS 1225 PVP(Pipe)-BT BK',
                },
                {
                    image: '../Product/LightDutyCaster/DS1225SERIES/160425032837_08.jpg',
                    type: 'Model: DS 1225 PVP(Plain)-BT',
                },
                {
                    image: '../Product/LightDutyCaster/DS1225SERIES/160425032837_09.jpg',
                    type: 'Model: DS 1225 SR-R',
                },
            ],
            CasterSpecification: {
                headers: [
                    { text: '제품명', unit: '(Model)' },
                    { text: 'Wheel Dia', unit: '(mm)', image: '../Product/WheelDia.jpg' },
                    { text: 'Tread Width', unit: '(mm)', image: '../Product/TreadWidth.jpg' },
                    { text: 'Wheel Material', image: '../Product/WheelMaterial.jpg' },
                    { text: 'Bearing', image: '../Product/Bearing.jpg' },
                    { text: 'Load Height', unit: '(mm)', image: '../Product/LoadHeight1.jpg' },
                    { text: 'Load Height', unit: '(mm)', image: '../Product/LoadHeight2.jpg' },
                    { text: 'Swivel Radius', unit: '(mm)', image: '../Product/SwivelRadius.jpg' },
                    { text: 'Load Capacity', unit: '(kg)', image: '../Product/LoadCapacity.jpg' },
                    { text: '박스당수량', unit: 'PCS' },
                ],
                rows: [
                    ['DS 1225 PUB', 63, 30, 'Poly Urethane', '608ZZ', 83, 88, 55, 60, 80],
                    ['DS 1225 PUP', 63, 30, 'Poly Urethane', 'Plain', 83, 88, 55, 50, 80],
                    ['DS 1225 PVB', 63, 30, 'Poly Vinyl Chloride', '608ZZ', 83, 88, 55, 55, 80],
                    ['DS 1225 PVP(P)', 63, 30, 'Poly Vinyl Chloride', 'Pipe', 83, 88, 55, 50, 80],
                    ['DS 1225 PVP', 63, 30, 'Poly Vinyl Chloride', 'Plain', 83, 88, 55, 45, 80],
                    ['DS 1225 S R', 63, 27, 'Soft Rubber', 'Plain', 83, 88, 55, 45, 80],
                    ['DS 1225 LDP', 63, 30, 'Poly Propylene', 'Plain', 83, 88, 55, 60, 80],
                    ['DS 1225 MRB', 63, 30, 'Mirage Rubber', '608ZZ', 83, 88, 55, 50, 80],
                    ['DS 1225 EPU', 63, 24, 'Elastic Poly Urethane', '608ZZ', 83, 88, 55, 60, 80],
                ],
                // commonPCS: 'S-150 R-150 B/K-130',
            },
            spec: [
                {
                    image: '../Product/LightDutyCaster/DS1225SERIES/160517040840_10.PNG.jpg',
                },
            ],
        },
    },
    // ! 6
    {
        image: '../Product/LightDutyCaster/DS1325SERIES/160425033324_04.jpg',
        id: 'DS 1325 SERIES',
        des: {
            imageProduct: [
                {
                    image: '../Product/LightDutyCaster/DS1325SERIES/160425033324_00.jpg',
                    type: 'Model: DS 1325 EPU-BK',
                },
                {
                    image: '../Product/LightDutyCaster/DS1325SERIES/160425033324_01.jpg',
                    type: 'Model: DS 1325 EPU-S',
                },
                {
                    image: '../Product/LightDutyCaster/DS1325SERIES/160425033324_02.jpg',
                    type: 'Model: DS 1325 MRB-BT BK',
                },
                {
                    image: '../Product/LightDutyCaster/DS1325SERIES/160425033324_03.jpg',
                    type: 'Model: DS 1325 MRB-BT',
                },
                {
                    image: '../Product/LightDutyCaster/DS1325SERIES/160425033324_04.jpg',
                    type: 'Model: DS 1325 MRB-S',
                },
                {
                    image: '../Product/LightDutyCaster/DS1325SERIES/160425033324_05.jpg',
                    type: 'Model: DS 1325 PUB-BK',
                },
                {
                    image: '../Product/LightDutyCaster/DS1325SERIES/160425033324_06.jpg',
                    type: 'Model: DS 1325 PUB-BT BK',
                },
                {
                    image: '../Product/LightDutyCaster/DS1325SERIES/160425033324_07.jpg',
                    type: 'Model: DS 1325 PUB-S',
                },
            ],
            CasterSpecification: {
                headers: [
                    { text: '제품명', unit: '(Model)' },
                    { text: 'Wheel Dia', unit: '(mm)', image: '../Product/WheelDia.jpg' },
                    { text: 'Tread Width', unit: '(mm)', image: '../Product/TreadWidth.jpg' },
                    { text: 'Wheel Material', image: '../Product/WheelMaterial.jpg' },
                    { text: 'Bearing', image: '../Product/Bearing.jpg' },
                    { text: 'Load Height', unit: '(mm)', image: '../Product/LoadHeight1.jpg' },
                    { text: 'Load Height', unit: '(mm)', image: '../Product/LoadHeight2.jpg' },
                    { text: 'Swivel Radius', unit: '(mm)', image: '../Product/SwivelRadius.jpg' },
                    { text: 'Load Capacity', unit: '(kg)', image: '../Product/LoadCapacity.jpg' },
                    { text: '박스당수량', unit: 'PCS' },
                ],
                rows: [
                    ['DS 1325 PUB', 61, 25, 'Poly Urethane', '628ZZ', 85, 92, 59, 70, 80],
                    ['DS 1325 MRB', 61, 25, 'Mirage Rubber', '628ZZ', 85, 92, 59, 60, 80],
                    ['DS 1325 EPU', 64, 24, 'Elastic Poly Urethane', '608ZZ', 87, 94, 61, 60, 80],
                ],
                // commonPCS: 'S-150 R-150 B/K-130',
            },
            spec: [
                {
                    image: '../Product/LightDutyCaster/DS1325SERIES/160517040923_10.PNG.jpg',
                },
            ],
        },
    },
    // ! 7
    {
        image: '../Product/LightDutyCaster/DS2030SERIES/160425033715_03.jpg',
        id: 'DS 2030 SERIES',
        des: {
            imageProduct: [
                {
                    image: '../Product/LightDutyCaster/DS2030SERIES/160425033715_00.jpg',
                    type: 'Model: DS 2030 EPU-R',
                },
                {
                    image: '../Product/LightDutyCaster/DS2030SERIES/160425033715_01.jpg',
                    type: 'Model: DS 2030 LDP(B)-BT',
                },
                {
                    image: '../Product/LightDutyCaster/DS2030SERIES/160425033715_02.jpg',
                    type: 'Model: DS 2030 LDP(R)-S',
                },
                {
                    image: '../Product/LightDutyCaster/DS2030SERIES/160425033715_03.jpg',
                    type: 'Model: DS 2030 MRB-BT BK',
                },
                {
                    image: '../Product/LightDutyCaster/DS2030SERIES/160425033715_04.jpg',
                    type: 'Model: DS 2030 MRB-S',
                },
                {
                    image: '../Product/LightDutyCaster/DS2030SERIES/160425033715_05.jpg',
                    type: 'Model: DS 2030 NYL-S',
                },
                {
                    image: '../Product/LightDutyCaster/DS2030SERIES/160425033715_06.jpg',
                    type: 'Model: DS 2030 PCB-BT',
                },
                {
                    image: '../Product/LightDutyCaster/DS2030SERIES/160425033715_07.jpg',
                    type: 'Model: DS 2030 PUB(B)-S',
                },
                {
                    image: '../Product/LightDutyCaster/DS2030SERIES/160425033715_08.jpg',
                    type: 'Model: DS 2030 PUB-BT',
                },
                {
                    image: '../Product/LightDutyCaster/DS2030SERIES/160425033715_09.jpg',
                    type: 'Model: DS 2030 PUP-BT BK(링형)',
                },
                {
                    image: '../Product/LightDutyCaster/DS2030SERIES/160425033715_010.jpg',
                    type: 'Model: DS 2030 PUP-BT',
                },
                {
                    image: '../Product/LightDutyCaster/DS2030SERIES/160425033715_011.jpg',
                    type: 'Model: DS 2030 PVP-BT',
                },
                {
                    image: '../Product/LightDutyCaster/DS2030SERIES/160425033715_012.jpg',
                    type: 'Model: DS 2030 SRB-BK',
                },
                {
                    image: '../Product/LightDutyCaster/DS2030SERIES/160425033715_013.jpg',
                    type: 'Model: DS 2030 SR-R',
                },
            ],
            CasterSpecification: {
                headers: [
                    { text: '제품명', unit: '(Model)' },
                    { text: 'Wheel Dia', unit: '(mm)', image: '../Product/WheelDia.jpg' },
                    { text: 'Tread Width', unit: '(mm)', image: '../Product/TreadWidth.jpg' },
                    { text: 'Wheel Material', image: '../Product/WheelMaterial.jpg' },
                    { text: 'Bearing', image: '../Product/Bearing.jpg' },
                    { text: 'Load Height', unit: '(mm)', image: '../Product/LoadHeight1.jpg' },
                    { text: 'Load Height', unit: '(mm)', image: '../Product/LoadHeight2.jpg' },
                    { text: 'Swivel Radius', unit: '(mm)', image: '../Product/SwivelRadius.jpg' },
                    { text: 'Load Capacity', unit: '(kg)', image: '../Product/LoadCapacity.jpg' },
                    { text: '박스당수량', unit: 'PCS' },
                ],
                rows: [
                    ['DS 2030 PUB', 75, 32, 'Poly Urethane', '6202ZZ', 105, 111, 73, 90, 40],
                    ['DS 2030 PUP', 75, 32, 'Poly Urethane', 'Plain', 105, 111, 73, 70, 40],
                    ['DS 2030 PVB', 75, 32, 'Poly Vinyl Chloride', '6202ZZ', 105, 111, 73, 80, 40],
                    ['DS 2030 ESR', 75, 32, 'Electrical Conductivity Rubber', '6200', 105, 111, 73, 70, 40],
                    ['DS 2030 PVP', 75, 32, 'Poly Vinyl Chloride', 'Plain', 105, 111, 73, 60, 40],
                    ['DS 2030 LDP', 75, 32, 'Poly Propylene', 'Plain', 105, 111, 73, 90, 40],
                    ['DS 2030 SR', 75, 32, 'Soft Rubber', 'Plain', 105, 111, 73, 60, 40],
                    ['DS 2030 SRB', 75, 32, 'Soft Rubber', '6200', 105, 111, 73, 70, 40],
                    ['DS 2030 MRB', 75, 32, 'Mirage Rubber', '6202ZZ', 105, 111, 73, 70, 40],
                    ['DS 2030 MRP', 75, 32, 'Mirage Rubber', 'Plain', 105, 111, 73, 50, 40],
                    ['DS 2030 ELP', 75, 32, 'Elastomer', 'Plain', 105, 111, 73, 50, 40],
                    ['DS 2030 NYL', 75, 32, 'Nylon', 'Plain', 105, 111, 73, 90, 40],
                    ['DS 2030 EPU', 75, 32, 'Elastic Poly Urethane', '6000ZZ', 105, 111, 73, 80, 40],
                ],
                // commonPCS: 'S-150 R-150 B/K-130',
            },
            spec: [
                {
                    image: '../Product/LightDutyCaster/DS2030SERIES/160517041019_10.PNG.jpg',
                },
            ],
        },
    },
    // ! 8
    {
        image: '../Product/LightDutyCaster/DS2040SERIES/160425034212_012.jpg',
        id: 'DS 2040 SERIES',
        des: {
            imageProduct: [
                {
                    image: '../Product/LightDutyCaster/DS2040SERIES/160425034212_00.jpg',
                    type: 'Model: DS 2040 EPU-S',
                },
                {
                    image: '../Product/LightDutyCaster/DS2040SERIES/160425034212_01.jpg',
                    type: 'Model: DS 2040 LDP-BK',
                },
                {
                    image: '../Product/LightDutyCaster/DS2040SERIES/160425034212_02.jpg',
                    type: 'Model: DS 2040 MRB-R',
                },
                {
                    image: '../Product/LightDutyCaster/DS2040SERIES/160425034212_03.jpg',
                    type: 'Model: DS 2040 MRB-S',
                },
                {
                    image: '../Product/LightDutyCaster/DS2040SERIES/160425034212_04.jpg',
                    type: 'Model: DS 2040 NYL-BT',
                },
                {
                    image: '../Product/LightDutyCaster/DS2040SERIES/160425034212_05.jpg',
                    type: 'Model: DS 2040 PCB-BK',
                },
                {
                    image: '../Product/LightDutyCaster/DS2040SERIES/160425034212_06.jpg',
                    type: 'Model: DS 2040 PUB-R',
                },
                {
                    image: '../Product/LightDutyCaster/DS2040SERIES/160425034212_07.jpg',
                    type: 'Model: DS 2040 PUP-BT BK(링형)',
                },
                {
                    image: '../Product/LightDutyCaster/DS2040SERIES/160425034212_08.jpg',
                    type: 'Model: DS 2040 PUP-BT(링형)',
                },
                {
                    image: '../Product/LightDutyCaster/DS2040SERIES/160425034212_09.jpg',
                    type: 'Model: DS 2040 PVB(G)-S',
                },
                {
                    image: '../Product/LightDutyCaster/DS2040SERIES/160425034212_010.jpg',
                    type: 'Model: DS 2040 PVBB-BT BK',
                },
                {
                    image: '../Product/LightDutyCaster/DS2040SERIES/160425034212_011.jpg',
                    type: 'Model: DS 2040 PVBB-S',
                },
                {
                    image: '../Product/LightDutyCaster/DS2040SERIES/160425034212_012.jpg',
                    type: 'Model: DS 2040 PVB-S',
                },
                {
                    image: '../Product/LightDutyCaster/DS2040SERIES/160425034212_013.jpg',
                    type: 'Model: DS 2040 PVP-R',
                },
            ],
            CasterSpecification: {
                headers: [
                    { text: '제품명', unit: '(Model)' },
                    { text: 'Wheel Dia', unit: '(mm)', image: '../Product/WheelDia.jpg' },
                    { text: 'Tread Width', unit: '(mm)', image: '../Product/TreadWidth.jpg' },
                    { text: 'Wheel Material', image: '../Product/WheelMaterial.jpg' },
                    { text: 'Bearing', image: '../Product/Bearing.jpg' },
                    { text: 'Load Height', unit: '(mm)', image: '../Product/LoadHeight1.jpg' },
                    { text: 'Load Height', unit: '(mm)', image: '../Product/LoadHeight2.jpg' },
                    { text: 'Swivel Radius', unit: '(mm)', image: '../Product/SwivelRadius.jpg' },
                    { text: 'Load Capacity', unit: '(kg)', image: '../Product/LoadCapacity.jpg' },
                    { text: '박스당수량', unit: 'PCS' },
                ],
                rows: [
                    ['DS 2040 PUB', 102, 32, 'Poly Urethane', '6200ZZ', 131, 137, 85, 100, 30],
                    ['DS 2040 PUP', 102, 32, 'Poly Urethane', 'Plain', 131, 137, 85, 80, 30],
                    ['DS 2040 PVB', 102, 32, 'Poly Vinyl Chloride', '6202ZZ', 131, 137, 85, 90, 30],
                    ['DS 2040 ESR', 102, 32, 'Electrical Conductivity Rubber', '6200', 131, 137, 85, 80, 30],
                    ['DS 2040 PVP', 102, 32, 'Poly Vinyl Chloride', 'Plain', 131, 137, 85, 70, 30],
                    ['DS 2040 LDP', 102, 32, 'Poly Propylene', 'Plain', 131, 137, 85, 100, 30],
                    ['DS 2040 SR', 102, 32, 'Soft Rubber', 'Plain', 131, 137, 85, 70, 30],
                    ['DS 2040 SRB', 102, 32, 'Soft Rubber', '6200', 131, 137, 85, 80, 30],
                    ['DS 2040 MRB', 102, 32, 'Mirage Rubber', '6202ZZ', 131, 137, 85, 80, 30],
                    ['DS 2040 MRP', 102, 32, 'Mirage Rubber', 'Plain', 131, 137, 85, 60, 30],
                    ['DS 2040 ELP', 102, 32, 'Elastomer', 'Plain', 131, 137, 85, 60, 30],
                    ['DS 2040 NYL', 102, 32, 'Nylon', 'Plain', 131, 137, 85, 100, 30],
                    ['DS 2040 EPU', 102, 32, 'Elastic Poly Urethane', '6000ZZ', 131, 137, 85, 90, 30],
                ],
                // commonPCS: 'S-150 R-150 B/K-130',
            },
            spec: [
                {
                    image: '../Product/LightDutyCaster/DS2040SERIES/160517041100_10.PNG.jpg',
                },
            ],
        },
    },
    // ! 9
    {
        image: '../Product/LightDutyCaster/DS2050SERIES/160425034531_00.jpg',
        id: 'DS 2050 SERIES',
        des: {
            imageProduct: [
                {
                    image: '../Product/LightDutyCaster/DS2050SERIES/160425034531_00.jpg',
                    type: 'Model: DS 2050 EPU-BK',
                },
                {
                    image: '../Product/LightDutyCaster/DS2050SERIES/160425034531_01.jpg',
                    type: 'Model: DS 2050 EPU-R',
                },
                {
                    image: '../Product/LightDutyCaster/DS2050SERIES/160425034531_02.jpg',
                    type: 'Model: DS 2050 LDP-BK',
                },
                {
                    image: '../Product/LightDutyCaster/DS2050SERIES/160425034531_03.jpg',
                    type: 'Model: DS 2050 MRB-R',
                },
                {
                    image: '../Product/LightDutyCaster/DS2050SERIES/160425034531_04.jpg',
                    type: 'Model: DS 2050 NYL-S',
                },
                {
                    image: '../Product/LightDutyCaster/DS2050SERIES/160425034531_05.jpg',
                    type: 'Model: DS 2050 PCB-BT BK',
                },
                {
                    image: '../Product/LightDutyCaster/DS2050SERIES/160425034531_06.jpg',
                    type: 'Model: DS 2050 PUP-BK',
                },
                {
                    image: '../Product/LightDutyCaster/DS2050SERIES/160425034531_07.jpg',
                    type: 'Model: DS 2050 PUP-BT BK(링형)',
                },
                {
                    image: '../Product/LightDutyCaster/DS2050SERIES/160425034531_08.jpg',
                    type: 'Model: DS 2050 PUP-BT(링형)',
                },
                {
                    image: '../Product/LightDutyCaster/DS2050SERIES/160425034531_09.jpg',
                    type: 'Model: DS 2050 PVB-S',
                },
                {
                    image: '../Product/LightDutyCaster/DS2050SERIES/160425034531_010.jpg',
                    type: 'Model: DS 2050 PVP-BK',
                },
                {
                    image: '../Product/LightDutyCaster/DS2050SERIES/160425034531_011.jpg',
                    type: 'Model: DS 2050 SRB-BT',
                },
                {
                    image: '../Product/LightDutyCaster/DS2050SERIES/160425034531_012.jpg',
                    type: 'Model: DS 2050 SR-R',
                },
            ],
            CasterSpecification: {
                headers: [
                    { text: '제품명', unit: '(Model)' },
                    { text: 'Wheel Dia', unit: '(mm)', image: '../Product/WheelDia.jpg' },
                    { text: 'Tread Width', unit: '(mm)', image: '../Product/TreadWidth.jpg' },
                    { text: 'Wheel Material', image: '../Product/WheelMaterial.jpg' },
                    { text: 'Bearing', image: '../Product/Bearing.jpg' },
                    { text: 'Load Height', unit: '(mm)', image: '../Product/LoadHeight1.jpg' },
                    { text: 'Load Height', unit: '(mm)', image: '../Product/LoadHeight2.jpg' },
                    { text: 'Swivel Radius', unit: '(mm)', image: '../Product/SwivelRadius.jpg' },
                    { text: 'Load Capacity', unit: '(kg)', image: '../Product/LoadCapacity.jpg' },
                    { text: '박스당수량', unit: 'PCS' },
                ],
                rows: [
                    ['DS 2050 PUB', 127, 32, 'Poly Urethane', '6202ZZ', 157, 163, 100, 110, 20],
                    ['DS 2050 PUP', 127, 32, 'Poly Urethane', 'Plain', 157, 163, 100, 90, 20],
                    ['DS 2050 PVB', 127, 32, 'Poly Vinyl Chloride', '6202ZZ', 157, 163, 100, 100, 20],
                    ['DS 2050 ESR', 127, 32, 'Electrical Conductivity Rubber', '6200', 157, 163, 100, 90, 20],
                    ['DS 2050 PVP', 127, 32, 'Poly Vinyl Chloride', 'Plain', 157, 163, 100, 80, 20],
                    ['DS 2050 LDP', 127, 32, 'Poly Propylene', 'Plain', 157, 163, 100, 110, 20],
                    ['DS 2050 SR', 127, 32, 'Soft Rubber', 'Plain', 157, 163, 100, 80, 20],
                    ['DS 2050 SRB', 127, 32, 'Soft Rubber', '6200', 157, 163, 100, 90, 20],
                    ['DS 2050 MRB', 127, 32, 'Mirage Rubber', '6202ZZ', 157, 163, 100, 90, 20],
                    ['DS 2050 MRP', 127, 32, 'Mirage Rubber', 'Plain', 157, 163, 100, 70, 20],
                    ['DS 2050 ELP', 127, 32, 'Elastomer', 'Plain', 157, 163, 100, 70, 20],
                    ['DS 2050 NYL', 127, 32, 'Nylon', 'Plain', 157, 163, 100, 110, 20],
                    ['DS 2050 EPU', 127, 32, 'Elastic Poly Urethane', '6000ZZ', 157, 163, 100, 100, 20],
                ],
                // commonPCS: 'S-150 R-150 B/K-130',
            },
            spec: [
                {
                    image: '../Product/LightDutyCaster/DS2050SERIES/160517041147_10.PNG.jpg',
                },
            ],
        },
    },
];
const Medium_Duty_Caster_DATA = [
    // ! 1
    {
        image: '../Product/MediumDutyCaster/DS30SERIES/160426103700_08.jpg',
        id: 'DS 30 SERIES',
        des: {
            imageProduct: [
                {
                    image: '../Product/MediumDutyCaster/DS30SERIES/160426103700_00.jpg',
                    type: 'Model: DS 3050 PUA-R',
                },
                {
                    image: '../Product/MediumDutyCaster/DS30SERIES/160426103700_01.jpg',
                    type: 'Model: DS 3050 PUP-BK',
                },
                {
                    image: '../Product/MediumDutyCaster/DS30SERIES/160426103700_02.jpg',
                    type: 'Model: DS 3060 LDP-R',
                },
                {
                    image: '../Product/MediumDutyCaster/DS30SERIES/160426103700_03.jpg',
                    type: 'Model: DS 3060 PUA-BK',
                },
                {
                    image: '../Product/MediumDutyCaster/DS30SERIES/160426103700_04.jpg',
                    type: 'Model: DS 3060 PUA-S',
                },
                {
                    image: '../Product/MediumDutyCaster/DS30SERIES/160426103700_05.jpg',
                    type: 'Model: DS 3060 PUB-R',
                },
                {
                    image: '../Product/MediumDutyCaster/DS30SERIES/160426103700_06.jpg',
                    type: 'Model: DS 3060 PUP-R',
                },
                {
                    image: '../Product/MediumDutyCaster/DS30SERIES/160426103700_07.jpg',
                    type: 'Model: DS 3060 PUP-S',
                },
                {
                    image: '../Product/MediumDutyCaster/DS30SERIES/160426103700_08.jpg',
                    type: 'Model: DS 3060 PVB-S',
                },
            ],
            CasterSpecification: {
                headers: [
                    { text: '제품명', unit: '(Model)' },
                    { text: 'Wheel Dia', unit: '(mm)', image: '../Product/WheelDia.jpg' },
                    { text: 'Tread Width', unit: '(mm)', image: '../Product/TreadWidth.jpg' },
                    { text: 'Wheel Material', image: '../Product/WheelMaterial.jpg' },
                    { text: 'Bearing', image: '../Product/Bearing.jpg' },
                    { text: 'Load Height', unit: '(mm)', image: '../Product/LoadHeight1.jpg' },
                    // { text: 'Load Height', unit: '(mm)', image: '../Product/LoadHeight2.jpg' },
                    { text: 'Swivel Radius', unit: '(mm)', image: '../Product/SwivelRadius.jpg' },
                    { text: 'Load Capacity', unit: '(kg)', image: '../Product/LoadCapacity.jpg' },
                    { text: '박스당수량', unit: 'PCS' },
                ],
                rows: [
                    ['DS 3040 PUB', 102, 40, 'Poly Urethane', '6902ZZ', 137, 81, 150, 16],
                    ['DS 3040 PUP', 102, 40, 'Poly Urethane', 'PIPE', 137, 81, 120, 16],
                    ['DS 3050 PUA', 125, 40, 'Poly Urethane', '6902ZZ', 166, 90, 180, 10],
                    ['DS 3050 PUB', 125, 40, 'Poly Urethane', '6902ZZ', 166, 90, 160, 10],
                    ['DS 3050 PUP', 125, 40, 'Poly Urethane', 'PIPE', 166, 90, 130, 10],
                    ['DS 3060 PUA', 150, 40, 'Poly Urethane', '6902ZZ', 187, 107, 200, 10],
                    ['DS 3060 PUB', 150, 40, 'Poly Urethane', '6902ZZ', 187, 107, 180, 10],
                    ['DS 3060 PUP', 150, 40, 'Poly Urethane', 'PIPE', 187, 107, 150, 10],
                    ['DS 3060 PVB', 150, 47, 'Poly Vinyl Chloride', 'ROLLER', 187, 107, 150, 10],
                    ['DS 3060 PVP', 150, 47, 'Poly Vinyl Chloride', 'PIPE', 187, 107, 120, 10],
                    ['DS 3060 LDP', 150, 47, 'Poly Propylene', 'PIPE', 187, 107, 200, 10],
                ],
                // commonPCS: 'S-150 R-150 B/K-130',
            },
            spec: [
                {
                    image: '../Product/MediumDutyCaster/DS30SERIES/160517041243_10.PNG.jpg',
                },
            ],
        },
    },
    // ! 2
    {
        image: '../Product/MediumDutyCaster/DS31SERIES/160426103742_04.jpg',
        id: 'DS 31 SERIES',
        des: {
            imageProduct: [
                {
                    image: '../Product/MediumDutyCaster/DS31SERIES/160426103742_00.jpg',
                    type: 'Model: DS 3140 PUP-BK',
                },
                {
                    image: '../Product/MediumDutyCaster/DS31SERIES/160426103742_01.jpg',
                    type: 'Model: DS 3140 PUP-S',
                },
                {
                    image: '../Product/MediumDutyCaster/DS31SERIES/160426103742_02.jpg',
                    type: 'Model: DS 3160 PUA-BK',
                },
                {
                    image: '../Product/MediumDutyCaster/DS31SERIES/160426103742_03.jpg',
                    type: 'Model: DS 3160 PUA-S',
                },
                {
                    image: '../Product/MediumDutyCaster/DS31SERIES/160426103742_04.jpg',
                    type: 'Model: DS 3160 PUB-BK',
                },
                {
                    image: '../Product/MediumDutyCaster/DS31SERIES/160426103742_05.jpg',
                    type: 'Model: DS 3160 PUB-S',
                },
                {
                    image: '../Product/MediumDutyCaster/DS31SERIES/160426103742_06.jpg',
                    type: 'Model: DS 3160 PUP(B)-BK',
                },
                {
                    image: '../Product/MediumDutyCaster/DS31SERIES/160426103742_07.jpg',
                    type: 'Model: DS 3160 PUP-BK',
                },
            ],
            CasterSpecification: {
                headers: [
                    { text: '제품명', unit: '(Model)' },
                    { text: 'Wheel Dia', unit: '(mm)', image: '../Product/WheelDia.jpg' },
                    { text: 'Tread Width', unit: '(mm)', image: '../Product/TreadWidth.jpg' },
                    { text: 'Wheel Material', image: '../Product/WheelMaterial.jpg' },
                    { text: 'Bearing', image: '../Product/Bearing.jpg' },
                    { text: 'Load Height', unit: '(mm)', image: '../Product/LoadHeight1.jpg' },
                    // { text: 'Load Height', unit: '(mm)', image: '../Product/LoadHeight2.jpg' },
                    { text: 'Swivel Radius', unit: '(mm)', image: '../Product/SwivelRadius.jpg' },
                    { text: 'Load Capacity', unit: '(kg)', image: '../Product/LoadCapacity.jpg' },
                    { text: '박스당수량', unit: 'PCS' },
                ],
                rows: [
                    ['DS 3140 PUB', 102, 40, 'Poly Urethane', '6902ZZ', 135, 89, 150, 16],
                    ['DS 3140 PUP', 102, 40, 'Poly Urethane', 'PIPE', 135, 89, 120, 16],
                    ['DS 3150 PUA', 125, 40, 'Poly Urethane', '6902ZZ', 160, 105, 180, 10],
                    ['DS 3150 PUB', 125, 40, 'Poly Urethane', '6902ZZ', 160, 105, 160, 10],
                    ['DS 3150 PUP', 125, 40, 'Poly Urethane', 'PIPE', 160, 105, 130, 10],
                    ['DS 3160 PUA', 150, 40, 'Poly Urethane', '6902ZZ', 182, 118, 200, 10],
                    ['DS 3160 PUB', 150, 40, 'Poly Urethane', '6902ZZ', 182, 118, 180, 10],
                    ['DS 3160 PUP', 150, 40, 'Poly Urethane', 'PIPE', 182, 118, 150, 10],
                ],
                // commonPCS: 'S-150 R-150 B/K-130',
            },
            spec: [
                {
                    image: '../Product/MediumDutyCaster/DS31SERIES/160517041326_10.PNG.jpg',
                },
            ],
        },
    },
    // ! 3
    {
        image: '../Product/MediumDutyCaster/DS32SERIES/160426103815_02.jpg',
        id: 'DS 32 SERIES',
        des: {
            imageProduct: [
                {
                    image: '../Product/MediumDutyCaster/DS32SERIES/160426103815_00.jpg',
                    type: 'Model: DS 3260 LDP-BK',
                },
                {
                    image: '../Product/MediumDutyCaster/DS32SERIES/160426103815_01.jpg',
                    type: 'Model: DS 3260 LDP-S',
                },
                {
                    image: '../Product/MediumDutyCaster/DS32SERIES/160426103815_02.jpg',
                    type: 'Model: DS 3260 PVP-BK',
                },
                {
                    image: '../Product/MediumDutyCaster/DS32SERIES/160426103815_03.jpg',
                    type: 'Model: DS 3260 PVP-S',
                },
            ],
            CasterSpecification: {
                headers: [
                    { text: '제품명', unit: '(Model)' },
                    { text: 'Wheel Dia', unit: '(mm)', image: '../Product/WheelDia.jpg' },
                    { text: 'Tread Width', unit: '(mm)', image: '../Product/TreadWidth.jpg' },
                    { text: 'Wheel Material', image: '../Product/WheelMaterial.jpg' },
                    { text: 'Bearing', image: '../Product/Bearing.jpg' },
                    { text: 'Load Height', unit: '(mm)', image: '../Product/LoadHeight1.jpg' },
                    // { text: 'Load Height', unit: '(mm)', image: '../Product/LoadHeight2.jpg' },
                    { text: 'Swivel Radius', unit: '(mm)', image: '../Product/SwivelRadius.jpg' },
                    { text: 'Load Capacity', unit: '(kg)', image: '../Product/LoadCapacity.jpg' },
                    { text: '박스당수량', unit: 'PCS' },
                ],
                rows: [
                    ['DS 3260 PVB', 150, 47, 'Poly Vinyl Chloride', 'ROLLER', 183, 116, 150, 10],
                    ['DS 3260 PVP', 150, 47, 'Poly Vinyl Chloride', 'PIPE', 183, 116, 120, 10],
                    ['DS 3260 LDP', 150, 47, 'Poly Propylene', 'PIPE', 183, 116, 150, 10],
                ],
                // commonPCS: 'S-150 R-150 B/K-130',
            },
            spec: [
                {
                    image: '../Product/MediumDutyCaster/DS32SERIES/160517041423_10.PNG.jpg',
                },
            ],
        },
    },
    // ! 4
    {
        image: '../Product/MediumDutyCaster/DS34SERIES/160426103850_04.jpg',
        id: 'DS 34 SERIES',
        des: {
            imageProduct: [
                {
                    image: '../Product/MediumDutyCaster/DS34SERIES/160426103850_00.jpg',
                    type: 'Model: DS 3450 PUB (I)-S',
                },
                {
                    image: '../Product/MediumDutyCaster/DS34SERIES/160426103850_01.jpg',
                    type: 'Model: DS 3460 PUB(G)-BK',
                },
                {
                    image: '../Product/MediumDutyCaster/DS34SERIES/160426103850_02.jpg',
                    type: 'Model: DS 3460 PUB(G)-R',
                },
                {
                    image: '../Product/MediumDutyCaster/DS34SERIES/160426103850_03.jpg',
                    type: 'Model: DS 3460 PUB(G)-S',
                },
                {
                    image: '../Product/MediumDutyCaster/DS34SERIES/160426103850_04.jpg',
                    type: 'Model: DS 3460 PUB-BK',
                },
                {
                    image: '../Product/MediumDutyCaster/DS34SERIES/160426103850_05.jpg',
                    type: 'Model: DS 3460 PUB-S',
                },
            ],
            CasterSpecification: {
                headers: [
                    { text: '제품명', unit: '(Model)' },
                    { text: 'Wheel Dia', unit: '(mm)', image: '../Product/WheelDia.jpg' },
                    { text: 'Tread Width', unit: '(mm)', image: '../Product/TreadWidth.jpg' },
                    { text: 'Wheel Material', image: '../Product/WheelMaterial.jpg' },
                    { text: 'Bearing', image: '../Product/Bearing.jpg' },
                    { text: 'Load Height', unit: '(mm)', image: '../Product/LoadHeight1.jpg' },
                    // { text: 'Load Height', unit: '(mm)', image: '../Product/LoadHeight2.jpg' },
                    { text: 'Swivel Radius', unit: '(mm)', image: '../Product/SwivelRadius.jpg' },
                    { text: 'Load Capacity', unit: '(kg)', image: '../Product/LoadCapacity.jpg' },
                    { text: '박스당수량', unit: 'PCS' },
                ],
                rows: [
                    ['DS 3440 PUB', 101, 38, 'Poly Urethane', '6003ZZ', 140, 78, 150, 16],
                    ['DS 3450 PUB', 126, 38, 'Poly Urethane', '6003ZZ', 164, 90, 170, 10],
                    ['DS 3460 PUB', 151, 38, 'Poly Urethane', '6003ZZ', 187, 110, 200, 10],
                ],
                // commonPCS: 'S-150 R-150 B/K-130',
            },
            spec: [
                {
                    image: '../Product/MediumDutyCaster/DS34SERIES/160517041457_10.PNG.jpg',
                },
            ],
        },
    },
];
const Heavy_Duty_Caster_DATA = [
    // ! 1
    {
        image: '../Product/HeavyDutyCaster/DS40SERIES/160426104409_05.jpg',
        id: 'DS 40 SERIES',
        des: {
            imageProduct: [
                {
                    image: '../Product/HeavyDutyCaster/DS40SERIES/160426104409_00.jpg',
                    type: 'Model: DS 4030 PUI-BK',
                },
                {
                    image: '../Product/HeavyDutyCaster/DS40SERIES/160426104409_01.jpg',
                    type: 'Model: DS 4030 PUI-R',
                },
                {
                    image: '../Product/HeavyDutyCaster/DS40SERIES/160426104409_02.jpg',
                    type: 'Model: DS 4030 PUI-S',
                },
                {
                    image: '../Product/HeavyDutyCaster/DS40SERIES/160426104409_03.jpg',
                    type: 'Model: DS 4060 PUI-BK',
                },
                {
                    image: '../Product/HeavyDutyCaster/DS40SERIES/160426104409_04.jpg',
                    type: 'Model: DS 4060 PUI-R',
                },
                {
                    image: '../Product/HeavyDutyCaster/DS40SERIES/160426104409_05.jpg',
                    type: 'Model: DS 4060 PUI-S',
                },
            ],
            CasterSpecification: {
                headers: [
                    { text: '제품명', unit: '(Model)' },
                    { text: 'Wheel Dia', unit: '(mm)', image: '../Product/WheelDia.jpg' },
                    { text: 'Tread Width', unit: '(mm)', image: '../Product/TreadWidth.jpg' },
                    { text: 'Wheel Material', image: '../Product/WheelMaterial.jpg' },
                    { text: 'Bearing', image: '../Product/Bearing.jpg' },
                    { text: 'Load Height', unit: '(mm)', image: '../Product/LoadHeight1.jpg' },
                    // { text: 'Load Height', unit: '(mm)', image: '../Product/LoadHeight2.jpg' },
                    { text: 'Swivel Radius', unit: '(mm)', image: '../Product/SwivelRadius.jpg' },
                    { text: 'Load Capacity', unit: '(kg)', image: '../Product/LoadCapacity.jpg' },
                    { text: '박스당수량', unit: 'PCS' },
                ],
                rows: [
                    ['DS 4030 PUI', 76, 33, 'Poly Urethane', 'Roller', 107, 56, 180, 25],
                    ['DS 4040 PUI', 100, 33, 'Poly Urethane', 'Roller', 137, 81, 200, 20],
                    ['DS 4041 PUI', 100, 46, 'Poly Urethane', 'Roller', 142, 87, 250, 'S,R-12 BK-8'],
                    ['DS 4050 PUI', 126, 40, 'Poly Urethane', 'Roller', 166, 110, 280, 10],
                    ['DS 4060 PUI', 151, 43, 'Poly Urethane', 'Roller', 187, 114, 300, 8],
                    ['DS 4080 PUI', 202, 47, 'Poly Urethane', 'Roller', 241, 149, 350, 'S,R-5 BK-4'],
                ],
                // commonPCS: 'S-150 R-150 B/K-130',
            },
            spec:[ {
                image: '../Product/HeavyDutyCaster/DS40SERIES/160517041536_10.PNG.jpg',
            }],
        },
    },
    // ! 2
    {
        image: '../Product/HeavyDutyCaster/DS41SERIES/160426104507_01.jpg',
        id: 'DS 41 SERIES',
        des: {
            imageProduct: [
                {
                    image: '../Product/HeavyDutyCaster/DS41SERIES/160426104507_00.jpg',
                    type: 'Model: DS 4140 MRB(B)-S',
                },
                {
                    image: '../Product/HeavyDutyCaster/DS41SERIES/160426104507_01.jpg',
                    type: 'Model: DS 4150 MRB-BK',
                },
                {
                    image: '../Product/HeavyDutyCaster/DS41SERIES/160426104507_02.jpg',
                    type: 'Model: DS 4150 MRB-S',
                },
                {
                    image: '../Product/HeavyDutyCaster/DS41SERIES/160426104507_03.jpg',
                    type: 'Model: DS 4150 PUB-BK',
                },
                {
                    image: '../Product/HeavyDutyCaster/DS41SERIES/160426104507_04.jpg',
                    type: 'Model: DS 4160 MRB-R',
                },
                {
                    image: '../Product/HeavyDutyCaster/DS41SERIES/160426104507_05.jpg',
                    type: 'Model: DS 4160 PUB-R',
                },
                {
                    image: '../Product/HeavyDutyCaster/DS41SERIES/160426104507_06.jpg',
                    type: 'Model: DS 4160 PUB-S',
                },
            ],
            CasterSpecification: {
                headers: [
                    { text: '제품명', unit: '(Model)' },
                    { text: 'Wheel Dia', unit: '(mm)', image: '../Product/WheelDia.jpg' },
                    { text: 'Tread Width', unit: '(mm)', image: '../Product/TreadWidth.jpg' },
                    { text: 'Wheel Material', image: '../Product/WheelMaterial.jpg' },
                    { text: 'Bearing', image: '../Product/Bearing.jpg' },
                    { text: 'Load Height', unit: '(mm)', image: '../Product/LoadHeight1.jpg' },
                    // { text: 'Load Height', unit: '(mm)', image: '../Product/LoadHeight2.jpg' },
                    { text: 'Swivel Radius', unit: '(mm)', image: '../Product/SwivelRadius.jpg' },
                    { text: 'Load Capacity', unit: '(kg)', image: '../Product/LoadCapacity.jpg' },
                    { text: '박스당수량', unit: 'PCS' },
                ],
                rows: [
                    ['DS 4140 PUB', 101, 50, 'Poly Urethane', '6003ZZ', 141, 74, 150, 15],
                    ['DS 4140 MRB', 101, 50, 'Mirage Rubber', '6003ZZ', 141, 74, 130, 15],
                    ['DS 4150 PUB', 127, 50, 'Poly Urethane', '6003ZZ', 164, 94, 180, 10],
                    ['DS 4150 MRB', 127, 50, 'Mirage Rubber', '6003ZZ', 164, 94, 150, 10],
                    ['DS 4160 PUB', 152, 50, 'Poly Urethane', '6003ZZ', 189, 111, 210, 10],
                    ['DS 4160 MRB', 152, 50, 'Mirage Rubber', '6003ZZ', 189, 111, 180, 10],
                    ['DS 4180 PUB', 200, 50, 'Poly Urethane', '6003ZZ', 241, 145, 250, 5],
                    ['DS 4180 MRB', 200, 50, 'Mirage Rubber', '6003ZZ', 241, 145, 220, 5],
                ],
                // commonPCS: 'S-150 R-150 B/K-130',
            },
            spec:[ {
                image: '../Product/HeavyDutyCaster/DS41SERIES/160517041630_10.PNG.jpg',
            }],
        },
    },
    // ! 3
    {
        image: '../Product/HeavyDutyCaster/DS42SERIES/160426104526_00.jpg',
        id: 'DS 42 SERIES',
        des: {
            imageProduct: [
                {
                    image: '../Product/HeavyDutyCaster/DS42SERIES/160426104526_00.jpg',
                    type: 'Model: DS 4260 PUI-S',
                },
                {
                    image: '../Product/HeavyDutyCaster/DS42SERIES/160426104526_01.jpg',
                    type: 'Model: DS 4280 PUI-R',
                },
                {
                    image: '../Product/HeavyDutyCaster/DS42SERIES/160426104526_02.jpg',
                    type: 'Model: DS 4280 PUI-S',
                },
            ],
            CasterSpecification: {
                headers: [
                    { text: '제품명', unit: '(Model)' },
                    { text: 'Wheel Dia', unit: '(mm)', image: '../Product/WheelDia.jpg' },
                    { text: 'Tread Width', unit: '(mm)', image: '../Product/TreadWidth.jpg' },
                    { text: 'Wheel Material', image: '../Product/WheelMaterial.jpg' },
                    { text: 'Bearing', image: '../Product/Bearing.jpg' },
                    { text: 'Load Height', unit: '(mm)', image: '../Product/LoadHeight1.jpg' },
                    // { text: 'Load Height', unit: '(mm)', image: '../Product/LoadHeight2.jpg' },
                    { text: 'Swivel Radius', unit: '(mm)', image: '../Product/SwivelRadius.jpg' },
                    { text: 'Load Capacity', unit: '(kg)', image: '../Product/LoadCapacity.jpg' },
                    { text: '박스당수량', unit: 'PCS' },
                ],
                rows: [
                    ['DS 4260 PUI', 152, 58, 'Poly Urethane', '6204ZZ', 190, 111, 500, 5],
                    ['DS 4280 PUI', 203, 58, 'Poly Urethane', '6204ZZ', 237, 144, 600, 4],
                    ['DS 4210 PUI', 253, 64, 'Poly Urethane', '6204ZZ', 292, 184, 750, 2],
                    ['DS 4212 PUI', 300, 64, 'Poly Urethane', '6204ZZ', 356, 224, 800, 1],
                ],
                // commonPCS: 'S-150 R-150 B/K-130',
            },
            spec: [{
                image: '../Product/HeavyDutyCaster/DS42SERIES/160517041727_10.PNG.jpg',
            }],
        },
    },
];
const Super_Heavy_Duty_Caster_DATA = [
    // ! 1
    {
        image: '../Product/SuperHeavyDutyCaster/DS43SERIES/160426104802_05.jpg',
        id: 'DS 43 SERIES',
        des: {
            imageProduct: [
                {
                    image: '../Product/SuperHeavyDutyCaster/DS43SERIES/160426104802_00.jpg',
                    type: 'Model: DS 4310 PUI-R',
                },
                {
                    image: '../Product/SuperHeavyDutyCaster/DS43SERIES/160426104802_01.jpg',
                    type: 'Model: DS 4310 PUI-S',
                },
                {
                    image: '../Product/SuperHeavyDutyCaster/DS43SERIES/160426104802_02.jpg',
                    type: 'Model: DS 4340 PUI-R',
                },
                {
                    image: '../Product/SuperHeavyDutyCaster/DS43SERIES/160426104802_03.jpg',
                    type: 'Model: DS 4340 PUI-S',
                },
                {
                    image: '../Product/SuperHeavyDutyCaster/DS43SERIES/160426104802_04.jpg',
                    type: 'Model: DS 4360 MCN-R',
                },
                {
                    image: '../Product/SuperHeavyDutyCaster/DS43SERIES/160426104802_05.jpg',
                    type: 'Model: DS 4360 PUI-BK',
                },
                {
                    image: '../Product/SuperHeavyDutyCaster/DS43SERIES/160426104802_06.jpg',
                    type: 'Model: DS 4360 PUI-R',
                },
                {
                    image: '../Product/SuperHeavyDutyCaster/DS43SERIES/160426104802_07.jpg',
                    type: 'Model: DS 4360 PUI-S',
                },
                {
                    image: '../Product/SuperHeavyDutyCaster/DS43SERIES/160426104802_08.jpg',
                    type: 'Model: DS 4380 MCN-S',
                },
            ],
            CasterSpecification: {
                headers: [
                    { text: '제품명', unit: '(Model)' },
                    { text: 'Wheel Dia', unit: '(mm)', image: '../Product/WheelDia.jpg' },
                    { text: 'Tread Width', unit: '(mm)', image: '../Product/TreadWidth.jpg' },
                    { text: 'Wheel Material', image: '../Product/WheelMaterial.jpg' },
                    { text: 'Bearing', image: '../Product/Bearing.jpg' },
                    { text: 'Load Height', unit: '(mm)', image: '../Product/LoadHeight1.jpg' },
                    // { text: 'Load Height', unit: '(mm)', image: '../Product/LoadHeight2.jpg' },
                    { text: 'Swivel Radius', unit: '(mm)', image: '../Product/SwivelRadius.jpg' },
                    { text: 'Load Capacity', unit: '(kg)', image: '../Product/LoadCapacity.jpg' },
                    { text: '박스당수량', unit: 'PCS' },
                ],
                rows: [
                    ['DS 4340 PUI', 100, 66, 'Poly Urethane', '6204ZZ', 147, 80, 680, 6],
                    ['DS 4340 MCN', 100, 66, 'Mc Nylon', '6204ZZ', 147, 80, 750, 6],
                    ['DS 4360 PUI', 150, 62, 'Poly Urethane', '6204ZZ', 190, 135, 680, 'S,R-6 BK-4'],
                    ['DS 4360 MCN', 150, 62, 'Mc Nylon', '6204ZZ', 190, 135, 750, 'S,R-6 BK-5'],
                    ['DS 4380 PUI', 203, 62, 'Poly Urethane', '6204ZZ', 257, 164, 720, 2],
                    ['DS 4380 MCN', 203, 62, 'Mc Nylon', '6204ZZ', 257, 164, 800, 2],
                    ['DS 4310 PUI', 253, 62, 'Poly Urethane', '6204ZZ', 301, 188, 900, 2],
                    ['DS 4310 MCN', 253, 62, 'Mc Nylon', '6204ZZ', 301, 188, 1000, 2],
                    ['DS 4312 PUI', 300, 62, 'Poly Urethane', '6204ZZ', 350, 223, 900, 1],
                    ['DS 4312 MCN', 300, 62, 'Mc Nylon', '6204ZZ', 350, 223, 1000, 1],
                ],
                // commonPCS: 'S-150 R-150 B/K-130',
            },
            spec:[ {
                image: '../Product/SuperHeavyDutyCaster/DS43SERIES/160517041822_10.PNG.jpg',
            }],
        },
    },
    // ! 2
    {
        image: '../Product/SuperHeavyDutyCaster/DS46SERIESMCNylon/160426104828_00.jpg',
        id: 'DS 46 SERIES (MC Nylon)',
        des: {
            imageProduct: [
                {
                    image: '../Product/SuperHeavyDutyCaster/DS46SERIESMCNylon/160426104828_00.jpg',
                    type: 'Model: DS 4660 MCN-R',
                },
                {
                    image: '../Product/SuperHeavyDutyCaster/DS46SERIESMCNylon/160426104828_01.jpg',
                    type: 'Model: DS 4660 MCN-S',
                },
            ],
            CasterSpecification: {
                headers: [
                    { text: '제품명', unit: '(Model)' },
                    { text: 'Wheel Dia', unit: '(mm)', image: '../Product/WheelDia.jpg' },
                    { text: 'Tread Width', unit: '(mm)', image: '../Product/TreadWidth.jpg' },
                    { text: 'Wheel Material', image: '../Product/WheelMaterial.jpg' },
                    { text: 'Bearing', image: '../Product/Bearing.jpg' },
                    { text: 'Load Height', unit: '(mm)', image: '../Product/LoadHeight1.jpg' },
                    // { text: 'Load Height', unit: '(mm)', image: '../Product/LoadHeight2.jpg' },
                    { text: 'Swivel Radius', unit: '(mm)', image: '../Product/SwivelRadius.jpg' },
                    { text: 'Load Capacity', unit: '(kg)', image: '../Product/LoadCapacity.jpg' },
                    { text: '박스당수량', unit: 'PCS' },
                ],
                rows: [
                    ['DS 4640 MCN', 100, 60, 'MC Nylon', '6204ZZ', 160, 90, 1000, 4],
                    ['DS 4650 MCN', 125, 60, 'MC Nylon', '6204ZZ', 185, 108, 1500, 4],
                    ['DS 4660 MCN', 150, 80, 'MC Nylon', '6205ZZ', 210, 125, 2000, 2],
                    ['DS 4680 MCN', 200, 80, 'MC Nylon', '6205ZZ', 260, 155, 2500, 2],
                    ['DS 4610 MCN', 250, 100, 'MC Nylon', '6206ZZ', 325, 185, 3000, 1],
                    ['DS 4612 MCN', 300, 100, 'MC Nylon', '6206ZZ', 375, 215, 3500, 1],
                ],
                // commonPCS: 'S-150 R-150 B/K-130',
            },
            spec: [{
                image: '../Product/SuperHeavyDutyCaster/DS46SERIESMCNylon/160517041917_10.PNG.jpg',
            }],
        },
    },
    // ! 3
    {
        image: '../Product/SuperHeavyDutyCaster/DS47SERIESMCNylonTwinWheel/160426104944_01.jpg',
        id: 'DS 47 SERIES (MC Nylon Twin Wheel)',
        des: {
            imageProduct: [
                {
                    image: '../Product/SuperHeavyDutyCaster/DS47SERIESMCNylonTwinWheel/160426104944_00.jpg',
                    type: 'Model: DS 4780 MCN-R',
                },
                {
                    image: '../Product/SuperHeavyDutyCaster/DS47SERIESMCNylonTwinWheel/160426104944_01.jpg',
                    type: 'Model: DS 4780 MCN-S',
                },
            ],
            CasterSpecification: {
                headers: [
                    { text: '제품명', unit: '(Model)' },
                    { text: 'Wheel Dia', unit: '(mm)', image: '../Product/WheelDia.jpg' },
                    { text: 'Tread Width', unit: '(mm)', image: '../Product/TreadWidth.jpg' },
                    { text: 'Wheel Material', image: '../Product/WheelMaterial.jpg' },
                    { text: 'Bearing', image: '../Product/Bearing.jpg' },
                    { text: 'Load Height', unit: '(mm)', image: '../Product/LoadHeight1.jpg' },
                    // { text: 'Load Height', unit: '(mm)', image: '../Product/LoadHeight2.jpg' },
                    { text: 'Swivel Radius', unit: '(mm)', image: '../Product/SwivelRadius.jpg' },
                    { text: 'Load Capacity', unit: '(kg)', image: '../Product/LoadCapacity.jpg' },
                    { text: '박스당수량', unit: 'PCS' },
                ],
                rows: [
                    ['DS 4740 MCN', 100, '38×2', 'MC Nylon', '6204ZZ', 160, 90, 2000, 4],
                    ['DS 4750 MCN', 125, '38×2', 'MC Nylon', '6204ZZ', 185, 108, 2500, 4],
                    ['DS 4760 MCN', 150, '53×2', 'MC Nylon', '6205ZZ', 220, 125, 4000, 2],
                    ['DS 4780 MCN', 200, '53×2', 'MC Nylon', '6205ZZ', 270, 155, 5000, 2],
                    ['DS 4710 MCN', 250, '68×2', 'MC Nylon', '6206ZZ', 340, 185, 6000, 1],
                    ['DS 4712 MCN', 300, '68×2', 'MC Nylon', '6206ZZ', 390, 215, 7000, 1],
                ],
                // commonPCS: 'S-150 R-150 B/K-130',
            },
            spec: [{
                image: '../Product/SuperHeavyDutyCaster/DS47SERIESMCNylonTwinWheel/160517042015_10.PNG.jpg',
            }],
        },
    },
];
const Stainless_Steel_Caster_DATA = [
    // ! 1
    {
        image: '../Product/StainlessSteelCaster/DS22SERIESLightDuty/160426105301_02.jpg',
        id: 'DS 22 SERIES 경량용 (Light-Duty)',
        des: {
            imageProduct: [
                {
                    image: '../Product/StainlessSteelCaster/DS22SERIESLightDuty/160426105301_00.jpg',
                    type: 'Model: DS 2230 ELP-BT',
                },
                {
                    image: '../Product/StainlessSteelCaster/DS22SERIESLightDuty/160426105301_01.jpg',
                    type: 'Model: DS 2230 NYL-R',
                },
                {
                    image: '../Product/StainlessSteelCaster/DS22SERIESLightDuty/160426105301_02.jpg',
                    type: 'Model: DS 2230 PUP-S',
                },
                {
                    image: '../Product/StainlessSteelCaster/DS22SERIESLightDuty/160426105301_03.jpg',
                    type: 'Model: DS 2240 ELP-BK',
                },
                {
                    image: '../Product/StainlessSteelCaster/DS22SERIESLightDuty/160426105301_04.jpg',
                    type: 'Model: DS 2240 ELP-S',
                },
                {
                    image: '../Product/StainlessSteelCaster/DS22SERIESLightDuty/160426105301_05.jpg',
                    type: 'Model: DS 2240 NYL-R',
                },
                {
                    image: '../Product/StainlessSteelCaster/DS22SERIESLightDuty/160426105301_06.jpg',
                    type: 'Model: DS 2240 PUP-BK',
                },
                {
                    image: '../Product/StainlessSteelCaster/DS22SERIESLightDuty/160426105301_07.jpg',
                    type: 'Model: DS 2250 ELP-BT BK',
                },
                {
                    image: '../Product/StainlessSteelCaster/DS22SERIESLightDuty/160426105301_08.jpg',
                    type: 'Model: DS 2250 ELP-BT',
                },
                {
                    image: '../Product/StainlessSteelCaster/DS22SERIESLightDuty/160426105301_09.jpg',
                    type: 'Model: DS 2250 NYL-BT',
                },
                {
                    image: '../Product/StainlessSteelCaster/DS22SERIESLightDuty/160426105301_010.jpg',
                    type: 'Model: DS 2250 NYL-S',
                },
                {
                    image: '../Product/StainlessSteelCaster/DS22SERIESLightDuty/160426105301_011.jpg',
                    type: 'Model: DS 2250 PUP-S',
                },
            ],
            CasterSpecification: {
                headers: [
                    { text: '제품명', unit: '(Model)' },
                    { text: 'Wheel Dia', unit: '(mm)', image: '../Product/WheelDia.jpg' },
                    { text: 'Tread Width', unit: '(mm)', image: '../Product/TreadWidth.jpg' },
                    { text: 'Wheel Material', image: '../Product/WheelMaterial.jpg' },
                    { text: 'Bearing', image: '../Product/Bearing.jpg' },
                    { text: 'Load Height', unit: '(mm)', image: '../Product/LoadHeight1.jpg' },
                    { text: 'Load Height', unit: '(mm)', image: '../Product/LoadHeight2.jpg' },
                    { text: 'Swivel Radius', unit: '(mm)', image: '../Product/SwivelRadius.jpg' },
                    { text: 'Load Capacity', unit: '(kg)', image: '../Product/LoadCapacity.jpg' },
                    { text: '박스당수량', unit: 'PCS' },
                ],
                rows: [
                    ['DS 2230 NYL', 76, 32, 'Nylon', 'Plain', 104, 110, 71, 90, 40],
                    ['DS 2230 PUP', 76, 32, 'Poly Urethane', 'Plain', 104, 110, 71, 70, 40],
                    ['DS 2230 ELP', 76, 32, 'Elastomer', 'Plain', 104, 110, 71, 50, 40],
                    ['DS 2230 MRP', 76, 32, 'Mirage Rubber', 'Plain', 104, 110, 71, 50, 40],
                    ['DS 2240 NYL', 102, 32, 'Nylon', 'Plain', 126, 132, 86, 100, 30],
                    ['DS 2240 PUP', 102, 32, 'Poly Urethane', 'Plain', 126, 132, 86, 80, 30],
                    ['DS 2240 ELP', 102, 32, 'Elastomer', 'Plain', 126, 132, 86, 60, 30],
                    ['DS 2240 MRP', 102, 32, 'Mirage Rubber', 'Plain', 126, 132, 86, 60, 30],
                    ['DS 2250 NYL', 127, 32, 'Nylon', 'Plain', 157, 163, 101, 110, 20],
                    ['DS 2250 PUP', 127, 32, 'Poly Urethane', 'Plain', 157, 163, 101, 90, 20],
                    ['DS 2250 ELP', 127, 32, 'Elastomer', 'Plain', 157, 163, 101, 70, 20],
                    ['DS 2250 MRP', 127, 32, 'Mirage Rubber', 'Plain', 157, 163, 101, 70, 20],
                ],
                // commonPCS: 'S-150 R-150 B/K-130',
            },
            spec: [{
                image: '../Product/StainlessSteelCaster/DS22SERIESLightDuty/160517042112_10.PNG.jpg',
            }],
        },
    },
    // ! 2
    {
        image: '../Product/StainlessSteelCaster/DS33SERIESHeavyDuty/160426105329_04.jpg',
        id: 'DS 33 SERIES 중량용 (Heavy-Duty)',
        des: {
            imageProduct: [
                {
                    image: '../Product/StainlessSteelCaster/DS33SERIESHeavyDuty/160426105329_00.jpg',
                    type: 'Model: DS 3340 MRB(B)-R',
                },
                {
                    image: '../Product/StainlessSteelCaster/DS33SERIESHeavyDuty/160426105329_01.jpg',
                    type: 'Model: DS 3350 ELA-S',
                },
                {
                    image: '../Product/StainlessSteelCaster/DS33SERIESHeavyDuty/160426105329_02.jpg',
                    type: 'Model: DS 3350 MRB-BK',
                },
                {
                    image: '../Product/StainlessSteelCaster/DS33SERIESHeavyDuty/160426105329_03.jpg',
                    type: 'Model: DS 3350 MRB-S',
                },
                {
                    image: '../Product/StainlessSteelCaster/DS33SERIESHeavyDuty/160426105329_04.jpg',
                    type: 'Model: DS 3350 NYL-S',
                },
                {
                    image: '../Product/StainlessSteelCaster/DS33SERIESHeavyDuty/160426105329_05.jpg',
                    type: 'Model: DS 3350 PUB(G)-BK',
                },
                {
                    image: '../Product/StainlessSteelCaster/DS33SERIESHeavyDuty/160426105329_06.jpg',
                    type: 'Model: DS 3350 PUB-BK',
                },
            ],
            CasterSpecification: {
                headers: [
                    { text: '제품명', unit: '(Model)' },
                    { text: 'Wheel Dia', unit: '(mm)', image: '../Product/WheelDia.jpg' },
                    { text: 'Tread Width', unit: '(mm)', image: '../Product/TreadWidth.jpg' },
                    { text: 'Wheel Material', image: '../Product/WheelMaterial.jpg' },
                    { text: 'Bearing', image: '../Product/Bearing.jpg' },
                    { text: 'Load Height', unit: '(mm)', image: '../Product/LoadHeight1.jpg' },
                    // { text: 'Load Height', unit: '(mm)', image: '../Product/LoadHeight2.jpg' },
                    { text: 'Swivel Radius', unit: '(mm)', image: '../Product/SwivelRadius.jpg' },
                    { text: 'Load Capacity', unit: '(kg)', image: '../Product/LoadCapacity.jpg' },
                    { text: '박스당수량', unit: 'PCS' },
                ],
                rows: [
                    ['DS 3340 NYL', 101, 50, 'Nylon', 'S6003ZZ', 140, 73, 230, 16],
                    ['DS 3340 PUB', 101, 50, 'Poly Urethane', 'S6003ZZ', 140, 73, 200, 16],
                    ['DS 3340 PUP', 101, 50, 'Poly Urethane', 'Plain', 140, 73, 170, 16],
                    ['DS 3340 MRB', 101, 50, 'Mirage Rubber', 'S6003ZZ', 140, 73, 150, 16],
                    ['DS 3340 MRP', 101, 50, 'Mirage Rubber', 'Plain', 140, 73, 120, 16],
                    ['DS 3340 ELA', 101, 50, 'Elastomer', 'S6003ZZ', 140, 73, 150, 16],
                    ['DS 3340 ELP', 101, 50, 'Elastomer', 'Plain', 140, 73, 120, 16],
                    ['DS 3350 NYL', 127, 50, 'Nylon', 'S6003ZZ', 164, 90, 250, 10],
                    ['DS 3350 PUB', 127, 50, 'Poly Urethane', 'S6003ZZ', 164, 90, 230, 10],
                    ['DS 3350 PUP', 127, 50, 'Poly Urethane', 'Plain', 164, 90, 200, 10],
                    ['DS 3350 MRB', 127, 50, 'Mirage Rubber', 'S6003ZZ', 164, 90, 180, 10],
                    ['DS 3350 MRP', 127, 50, 'Mirage Rubber', 'Plain', 164, 90, 150, 10],
                    ['DS 3350 ELA', 127, 50, 'Elastomer', 'S6003ZZ', 164, 90, 180, 10],
                    ['DS 3350 ELP', 127, 50, 'Elastomer', 'Plain', 164, 90, 150, 10],
                    ['DS 3360 NYL', 152, 50, 'Nylon', 'S6003ZZ', 189, 106, 280, 10],
                    ['DS 3360 PUB', 152, 50, 'Poly Urethane', 'S6003ZZ', 189, 106, 250, 10],
                    ['DS 3360 PUP', 152, 50, 'Poly Urethane', 'Plain', 189, 106, 220, 10],
                    ['DS 3360 MRB', 152, 50, 'Mirage Rubber', 'S6003ZZ', 189, 106, 200, 10],
                    ['DS 3360 MRP', 152, 50, 'Mirage Rubber', 'Plain', 189, 106, 170, 10],
                    ['DS 3360 ELA', 152, 50, 'Elastomer', 'S6003ZZ', 189, 106, 200, 10],
                    ['DS 3360 ELP', 152, 50, 'Elastomer', 'Plain', 189, 106, 170, 10],
                ],
                // commonPCS: 'S-150 R-150 B/K-130',
            },
            spec: [{
                image: '../Product/StainlessSteelCaster/DS33SERIESHeavyDuty/160517042148_10.PNG.jpg',
            }],
        },
    },
];
const Heat_ResistingLow_Temperature_Caster_DATA = [
    // ! 1
    {
        image: '../Product/HeatResistingLowTemperatureCaster/DS23SERIESLightDuty/160426105404_02.jpg',
        id: 'DS 23 SERIES 경량용 (Light-Duty)',
        des: {
            imageProduct: [
                {
                    image: '../Product/HeatResistingLowTemperatureCaster/DS23SERIESLightDuty/160426105404_00.jpg',
                    type: 'Model: DS 2340 NGM-BK',
                },
                {
                    image: '../Product/HeatResistingLowTemperatureCaster/DS23SERIESLightDuty/160426105404_01.jpg',
                    type: 'Model: DS 2340 NGM-R',
                },
                {
                    image: '../Product/HeatResistingLowTemperatureCaster/DS23SERIESLightDuty/160426105404_02.jpg',
                    type: 'Model: DS 2340 NGM-S',
                },
            ],
            CasterSpecification: {
                headers: [
                    { text: '제품명', unit: '(Model)' },
                    { text: 'Wheel Dia', unit: '(mm)', image: '../Product/WheelDia.jpg' },
                    { text: 'Tread Width', unit: '(mm)', image: '../Product/TreadWidth.jpg' },
                    { text: 'Wheel Material', image: '../Product/WheelMaterial.jpg' },
                    { text: 'Bearing', image: '../Product/Bearing.jpg' },
                    { text: 'Load Height', unit: '(mm)', image: '../Product/LoadHeight1.jpg' },
                    { text: 'Load Height', unit: '(mm)', image: '../Product/LoadHeight2.jpg' },
                    { text: 'Swivel Radius', unit: '(mm)', image: '../Product/SwivelRadius.jpg' },
                    { text: 'Load Capacity', unit: '(kg)', image: '../Product/LoadCapacity.jpg' },
                    { text: '허용온도' },
                    { text: '박스당수량', unit: 'PCS' },
                ],
                rows: [
                    ['DS 2330 NGM', 75, 32, 'Nylon Glass Mineral', 'Plain', 105, 111, 73, 50, '-35°C ~ +220°C', 40],
                    [
                        'DS 2340 NGM',
                        102,
                        32,
                        'Nylon Glass Mineral',
                        'Plain',
                        127,
                        133,
                        85,
                        60,
                        '-35°C ~ +220°C',
                        30,
                    ],
                    [
                        'DS 2350 NGM',
                        127,
                        32,
                        'Nylon Glass Mineral',
                        'Plain',
                        157,
                        163,
                        100,
                        70,
                        '-35°C ~ +220°C',
                        20,
                    ],
                ],
                // commonPCS: 'S-150 R-150 B/K-130',
            },
            spec: [
                {
                    image: '../Product/HeatResistingLowTemperatureCaster/DS23SERIESLightDuty/160517042243_10.PNG.jpg',
                },
            ],
            testReport: [
                {
                    image: '../Product/HeatResistingLowTemperatureCaster/DS23SERIESLightDuty/160426105404_20.jpg',
                },
                {
                    image: '../Product/HeatResistingLowTemperatureCaster/DS23SERIESLightDuty/160426105404_21.jpg',
                },
            ],
        },
    },
    // ! 2
    {
        image: '../Product/HeatResistingLowTemperatureCaster/DS23SERIESHeavyDuty/160426105424_00.jpg',
        id: 'DS 23 SERIES 중량용 (Heavy-Duty)',
        des: {
            imageProduct: [
                {
                    image: '../Product/HeatResistingLowTemperatureCaster/DS23SERIESHeavyDuty/160426105424_00.jpg',
                    type: 'Model: DS 2351 PHN-BK',
                },
                {
                    image: '../Product/HeatResistingLowTemperatureCaster/DS23SERIESHeavyDuty/160426105424_01.jpg',
                    type: 'Model: DS PHN-R',
                },
                {
                    image: '../Product/HeatResistingLowTemperatureCaster/DS23SERIESHeavyDuty/160426105424_02.jpg',
                    type: 'Model: DS PHN-S',
                },
            ],
            CasterSpecification: {
                headers: [
                    { text: '제품명', unit: '(Model)' },
                    { text: 'Wheel Dia', unit: '(mm)', image: '../Product/WheelDia.jpg' },
                    { text: 'Tread Width', unit: '(mm)', image: '../Product/TreadWidth.jpg' },
                    { text: 'Wheel Material', image: '../Product/WheelMaterial.jpg' },
                    { text: 'Bearing', image: '../Product/Bearing.jpg' },
                    { text: 'Load Height', unit: '(mm)', image: '../Product/LoadHeight1.jpg' },
                    // { text: 'Load Height', unit: '(mm)', image: '../Product/LoadHeight2.jpg' },
                    { text: 'Swivel Radius', unit: '(mm)', image: '../Product/SwivelRadius.jpg' },
                    { text: 'Load Capacity', unit: '(kg)', image: '../Product/LoadCapacity.jpg' },
                    { text: '허용온도' },
                    { text: '박스당수량', unit: 'PCS' },
                ],
                rows: [
                    ['DS 2341 PHN', 101, 50, 'Phenolic', 'Roller', 141, 74, 150, '-35°C ~ +150°C', 16],
                    ['DS 2351 PHN', 127, 50, 'Phenolic', 'Roller', 164, 94, 180, '-35°C ~ +150°C', 10],
                    ['DS 2361 PHN', 152, 50, 'Phenolic', 'Roller', 189, 111, 200, '-35°C ~ +150°C', 10],
                    ['DS 2381 PHN', 200, 50, 'Phenolic', 'Roller', 241, 145, 220, '-35°C ~ +150°C', 5],
                ],
                // commonPCS: 'S-150 R-150 B/K-130',
            },
            spec: [
                {
                    image: '../Product/HeatResistingLowTemperatureCaster/DS23SERIESHeavyDuty/160517042434_10.PNG.jpg',
                },
            ],
        },
    },
    // ! 3
    {
        image: '../Product/HeatResistingLowTemperatureCaster/DS27SERIESLightDuty/160426105447_02.jpg',
        id: 'DS 27 SERIES 스테인리스 경량용 (Stainless Light-Duty)',
        des: {
            imageProduct: [
                {
                    image: '../Product/HeatResistingLowTemperatureCaster/DS27SERIESLightDuty/160426105447_00.jpg',
                    type: 'Model: DS 2730 NGM-BT BK',
                },
                {
                    image: '../Product/HeatResistingLowTemperatureCaster/DS27SERIESLightDuty/160426105447_01.jpg',
                    type: 'Model: DS 2730 NGM-BT',
                },
                {
                    image: '../Product/HeatResistingLowTemperatureCaster/DS27SERIESLightDuty/160426105447_02.jpg',
                    type: 'Model: DS 2740 NGM-BK',
                },
                {
                    image: '../Product/HeatResistingLowTemperatureCaster/DS27SERIESLightDuty/160426105447_03.jpg',
                    type: 'Model: DS 2740 NGM-S',
                },
            ],
            CasterSpecification: {
                headers: [
                    { text: '제품명', unit: '(Model)' },
                    { text: 'Wheel Dia', unit: '(mm)', image: '../Product/WheelDia.jpg' },
                    { text: 'Tread Width', unit: '(mm)', image: '../Product/TreadWidth.jpg' },
                    { text: 'Wheel Material', image: '../Product/WheelMaterial.jpg' },
                    { text: 'Bearing', image: '../Product/Bearing.jpg' },
                    { text: 'Load Height', unit: '(mm)', image: '../Product/LoadHeight1.jpg' },
                    { text: 'Load Height', unit: '(mm)', image: '../Product/LoadHeight2.jpg' },
                    { text: 'Swivel Radius', unit: '(mm)', image: '../Product/SwivelRadius.jpg' },
                    { text: 'Load Capacity', unit: '(kg)', image: '../Product/LoadCapacity.jpg' },
                    { text: '허용온도' },
                    { text: '박스당수량', unit: 'PCS' },
                ],
                rows: [
                    ['DS 2730 NGM', 75, 32, 'Nylon Glass Mineral', 'Plain', 105, 111, 73, 50, '-35°C ~ +220°C', 40],
                    [
                        'DS 2740 NGM',
                        102,
                        32,
                        'Nylon Glass Mineral',
                        'Plain',
                        127,
                        133,
                        85,
                        60,
                        '-35°C ~ +220°C',
                        30,
                    ],
                    [
                        'DS 2750 NGM',
                        127,
                        32,
                        'Nylon Glass Mineral',
                        'Plain',
                        157,
                        163,
                        100,
                        70,
                        '-35°C ~ +220°C',
                        20,
                    ],
                ],
                // commonPCS: 'S-150 R-150 B/K-130',
            },
            spec: [
                {
                    image: '../Product/HeatResistingLowTemperatureCaster/DS27SERIESLightDuty/160517042509_10.PNG.jpg',
                },
            ],
        },
    },
    // ! 4
    {
        image: '../Product/HeatResistingLowTemperatureCaster/DS27SERIESHeavyDuty/160426105511_01.jpg',
        id: 'DS 27 SERIES 스테인리스 중량용 (Stainless Heavy-Duty)',
        des: {
            imageProduct: [
                {
                    image: '../Product/HeatResistingLowTemperatureCaster/DS27SERIESHeavyDuty/160426105511_00.jpg',
                    type: 'Model: DS 2751 PHN-BK',
                },
                {
                    image: '../Product/HeatResistingLowTemperatureCaster/DS27SERIESHeavyDuty/160426105511_01.jpg',
                    type: 'Model: DS 2751 PHN-R',
                },
                {
                    image: '../Product/HeatResistingLowTemperatureCaster/DS27SERIESHeavyDuty/160426105511_02.jpg',
                    type: 'Model: DS 2751 PHN-S',
                },
            ],
            CasterSpecification: {
                headers: [
                    { text: '제품명', unit: '(Model)' },
                    { text: 'Wheel Dia', unit: '(mm)', image: '../Product/WheelDia.jpg' },
                    { text: 'Tread Width', unit: '(mm)', image: '../Product/TreadWidth.jpg' },
                    { text: 'Wheel Material', image: '../Product/WheelMaterial.jpg' },
                    { text: 'Bearing', image: '../Product/Bearing.jpg' },
                    { text: 'Load Height', unit: '(mm)', image: '../Product/LoadHeight1.jpg' },
                    // { text: 'Load Height', unit: '(mm)', image: '../Product/LoadHeight2.jpg' },
                    { text: 'Swivel Radius', unit: '(mm)', image: '../Product/SwivelRadius.jpg' },
                    { text: 'Load Capacity', unit: '(kg)', image: '../Product/LoadCapacity.jpg' },
                    { text: '허용온도' },
                    { text: '박스당수량', unit: 'PCS' },
                ],
                rows: [
                    ['DS 2741 PHN', 101, 50, 'Phenolic', 'Roller', 141, 74, 150, '-35°C ~ +150°C', 16],
                    ['DS 2751 PHN', 127, 50, 'Phenolic', 'Roller', 164, 94, 180, '-35°C ~ +150°C', 10],
                    ['DS 2761 PHN', 150, 50, 'Phenolic', 'Roller', 189, 111, 200, '-35°C ~ +150°C', 10],
                ],
                // commonPCS: 'S-150 R-150 B/K-130',
            },
            spec: [
                {
                    image: '../Product/HeatResistingLowTemperatureCaster/DS27SERIESHeavyDuty/160517042538_10.PNG.jpg',
                },
            ],
        },
    },
];
const Medical_Equipment_Caster_DATA = [
    // ! 1
    {
        image: '../Product/MedicalEquipmentCaster/DS21SERIES_1/160426105549_07.jpg',
        id: 'DS 21 SERIES 무소음 플라스틱 캐스터 (Low Noise Plastic Caster)',
        des: {
            imageProduct: [
                {
                    image: '../Product/MedicalEquipmentCaster/DS21SERIES_1/160426105549_00.jpg',
                    type: 'Model: DS 2140 ELA-BK',
                },
                {
                    image: '../Product/MedicalEquipmentCaster/DS21SERIES_1/160426105549_01.jpg',
                    type: 'Model: DS 2140 MRB-BK',
                },
                {
                    image: '../Product/MedicalEquipmentCaster/DS21SERIES_1/160426105549_02.jpg',
                    type: 'Model: DS 2140 MRB-BT BK',
                },
                {
                    image: '../Product/MedicalEquipmentCaster/DS21SERIES_1/160426105549_03.jpg',
                    type: 'Model: DS 2140 MRB-S',
                },
                {
                    image: '../Product/MedicalEquipmentCaster/DS21SERIES_1/160426105549_04.jpg',
                    type: 'Model: DS 2150 ELA-BT BK',
                },
                {
                    image: '../Product/MedicalEquipmentCaster/DS21SERIES_1/160426105549_05.jpg',
                    type: 'Model: DS 2150 ELA-S',
                },
                {
                    image: '../Product/MedicalEquipmentCaster/DS21SERIES_1/160426105549_06.jpg',
                    type: 'Model: DS 2150 MRB-BK',
                },
                {
                    image: '../Product/MedicalEquipmentCaster/DS21SERIES_1/160426105549_07.jpg',
                    type: 'Model: DS 2150 MRB-BT BK(원주형)',
                },
                {
                    image: '../Product/MedicalEquipmentCaster/DS21SERIES_1/160426105549_08.jpg',
                    type: 'Model: DS 2150 MRB-BT',
                },
            ],
            CasterSpecification: {
                headers: [
                    { text: '제품명', unit: '(Model)' },
                    { text: 'Wheel Dia', unit: '(mm)', image: '../Product/WheelDia.jpg' },
                    { text: 'Tread Width', unit: '(mm)', image: '../Product/TreadWidth.jpg' },
                    { text: 'Wheel Material', image: '../Product/WheelMaterial.jpg' },
                    { text: 'Bearing', image: '../Product/Bearing.jpg' },
                    { text: 'Load Height', unit: '(mm)', image: '../Product/LoadHeight1.jpg' },
                    { text: 'Load Height', unit: '(mm)', image: '../Product/LoadHeight2.jpg' },
                    { text: 'Swivel Radius', unit: '(mm)', image: '../Product/SwivelRadius.jpg' },
                    { text: 'Load Capacity', unit: '(kg)', image: '../Product/LoadCapacity.jpg' },
                    { text: '박스당수량', unit: 'PCS' },
                ],
                rows: [
                    ['DS 2130 MRB', 77, 30, 'Mirage Rubber', '6202ZZ', 125, 125, 75, 70, 30],
                    ['DS 2130 ELA', 77, 30, 'Elastomer', '6202ZZ', 125, 125, 75, 70, 30],
                    ['DS 2140 MRB', 101, 30, 'Mirage Rubber', '6202ZZ', 150, 150, 86, 80, 22],
                    ['DS 2140 ELA', 101, 30, 'Elastomer', '6202ZZ', 150, 150, 86, 80, 22],
                    ['DS 2140 NSR', 101, 30, 'Natural Soft Rubber', '6202ZZ', 150, 150, 86, 80, 22],
                    ['DS 2150 MRB', 127, 32, 'Mirage Rubber', '6202ZZ', 175, 175, 99, 90, 16],
                    ['DS 2150 ELA', 127, 32, 'Elastomer', '6202ZZ', 175, 175, 99, 90, 16],
                    ['DS 2150 NSR', 127, 32, 'Natural Soft Rubber', '6202ZZ', 175, 175, 99, 90, 16],
                ],
                // commonPCS: 'S-150 R-150 B/K-130',
            },
            spec: [{
                image: '../Product/MedicalEquipmentCaster/DS21SERIES_1/160518113642_10.PNG.jpg',
            },]
        },
    },
    // ! 2
    {
        image: '../Product/MedicalEquipmentCaster/DS21SERIES_2/180308044315_00.png',
        id: 'DS 21 SERIES 중량용 무소음 플라스틱 캐스터 (Low Noise Plastic Heavy Duty Caster)',
        des: {
            imageProduct: [
                {
                    image: '../Product/MedicalEquipmentCaster/DS21SERIES_2/180308044315_00.png',
                    type: 'Model: DS 2151 MRB-S',
                },
                {
                    image: '../Product/MedicalEquipmentCaster/DS21SERIES_2/180308044315_01.png',
                    type: 'Model: DS 2151 MRB-BK',
                },
                {
                    image: '../Product/MedicalEquipmentCaster/DS21SERIES_2/180308044315_02.png',
                    type: 'Model: DS 2161 MRB-BT',
                },
                {
                    image: '../Product/MedicalEquipmentCaster/DS21SERIES_2/180308044315_03.png',
                    type: 'Model: DS 2161 MRB-BT BK',
                },
            ],
            CasterSpecification: {
                headers: [
                    { text: '제품명', unit: '(Model)' },
                    { text: 'Wheel Dia', unit: '(mm)', image: '../Product/WheelDia.jpg' },
                    { text: 'Tread Width', unit: '(mm)', image: '../Product/TreadWidth.jpg' },
                    { text: 'Wheel Material', image: '../Product/WheelMaterial.jpg' },
                    { text: 'Bearing', image: '../Product/Bearing.jpg' },
                    { text: 'Load Height', unit: '(mm)', image: '../Product/LoadHeight1.jpg' },
                    // { text: 'Load Height', unit: '(mm)', image: '../Product/LoadHeight2.jpg' },
                    { text: 'Swivel Radius', unit: '(mm)', image: '../Product/SwivelRadius.jpg' },
                    { text: 'Load Capacity', unit: '(kg)', image: '../Product/LoadCapacity.jpg' },
                    { text: '박스당수량', unit: 'PCS' },
                ],
                rows: [
                    ['DS 2151 MRB', 127, 40, 'Mirage Rubber', '6203ZZ', 178, 102, 180, 16],
                    ['DS 2161 MRB', 152, 40, 'Mirage Rubber', '6203ZZ', 203, 114, 200, 14],
                ],
                // commonPCS: 'S-150 R-150 B/K-130',
            },
            spec: [{
                image: '../Product/MedicalEquipmentCaster/DS21SERIES_2/180308042118_10.jpg',
            },]
        },
    },
    // ! 3
    {
        image: '../Product/MedicalEquipmentCaster/DS24SERIES/160426105652_00.jpg',
        id: 'DS 24 SERIES 원터치 제동용 (One-Touch Brake)',
        des: {
            imageProduct: [
                {
                    image: '../Product/MedicalEquipmentCaster/DS24SERIES/160426105652_00.jpg',
                    type: 'Model: DS 2425 MRB-BK',
                },
                {
                    image: '../Product/MedicalEquipmentCaster/DS24SERIES/160426105652_01.jpg',
                    type: 'Model: DS 2430 EPU-BT BK',
                },
                {
                    image: '../Product/MedicalEquipmentCaster/DS24SERIES/160426105652_02.jpg',
                    type: 'Model: DS 2430 MRB-BT BK',
                },
                {
                    image: '../Product/MedicalEquipmentCaster/DS24SERIES/160426105652_03.jpg',
                    type: 'Model: DS 2430 PCB-BK',
                },
                {
                    image: '../Product/MedicalEquipmentCaster/DS24SERIES/160426105652_04.jpg',
                    type: 'Model: DS 2430 PCB-R',
                },
                {
                    image: '../Product/MedicalEquipmentCaster/DS24SERIES/160426105652_05.jpg',
                    type: 'Model: DS 2440 ELA-BK',
                },
                {
                    image: '../Product/MedicalEquipmentCaster/DS24SERIES/160426105652_06.jpg',
                    type: 'Model: DS 2440 EPU-BK',
                },
                {
                    image: '../Product/MedicalEquipmentCaster/DS24SERIES/160426105652_07.jpg',
                    type: 'Model: DS 2440 EPU-S',
                },
                {
                    image: '../Product/MedicalEquipmentCaster/DS24SERIES/160426105652_08.jpg',
                    type: 'Model: DS 2440 PCB-BT BK',
                },
                {
                    image: '../Product/MedicalEquipmentCaster/DS24SERIES/160426105652_09.jpg',
                    type: 'Model: DS 2440 PCB-S',
                },
                {
                    image: '../Product/MedicalEquipmentCaster/DS24SERIES/160426105652_010.jpg',
                    type: 'Model: DS 2460 MRB-BK',
                },
            ],
            CasterSpecification: {
                headers: [
                    { text: '제품명', unit: '(Model)' },
                    { text: 'Wheel Dia', unit: '(mm)', image: '../Product/WheelDia.jpg' },
                    { text: 'Tread Width', unit: '(mm)', image: '../Product/TreadWidth.jpg' },
                    { text: 'Wheel Material', image: '../Product/WheelMaterial.jpg' },
                    { text: 'Bearing', image: '../Product/Bearing.jpg' },
                    { text: 'Load Height', unit: '(mm)', image: '../Product/LoadHeight1.jpg' },
                    { text: 'Load Height', unit: '(mm)', image: '../Product/LoadHeight2.jpg' },
                    // { text: 'Swivel Radius', unit: '(mm)', image: '../Product/SwivelRadius.jpg' },
                    { text: 'S', image: '../Product/SwivelRadius.jpg' },
                    { text: 'B/K', image: '../Product/SwivelRadius.jpg' },
                    { text: 'Load Capacity', unit: '(kg)', image: '../Product/LoadCapacity.jpg' },
                    { text: '박스당수량', unit: 'PCS' },
                ],
                rows: [
                    ['DS 2425 MRB', 63, 30, 'Mirage Rubber', '608ZZ', 100, 106, '·', 96, 60, 40],
                    ['DS 2430 MRB', 77, 30, 'Mirage Rubber', '608ZZ', 114, 120, 70, 96, 70, 32],
                    ['DS 2430 ELA', 77, 30, 'Elastomer', '608ZZ', 114, 120, 70, 96, 70, 32],
                    ['DS 2430 EPU', 77, 30, 'Elastic Poly Urethane', '608ZZ', 114, 120, 70, 96, 80, 32],
                    ['DS 2430 PCB', 77, 30, 'Poly Vinyl Chloride', '6202ZZ', 114, 120, 70, 96, 70, 32],
                    ['DS 2440 MRB', 101, 30, 'Mirage Rubber', '608ZZ', 138, 144, 82, 96, 80, 24],
                    ['DS 2440 ELA', 101, 30, 'Elastomer', '608ZZ', 138, 144, 82, 96, 80, 24],
                    ['DS 2440 EPU', 101, 30, 'Elastic Poly Urethane', '608ZZ', 138, 144, 82, 96, 90, 24],
                    ['DS 2440 PCB', 101, 30, 'Poly Vinyl Chloride', '6202ZZ', 138, 144, 82, 96, 80, 24],
                    ['DS 2450 MRB', 127, 32, 'Mirage Rubber', '608ZZ', 163, 169, 95, 96, 90, 20],
                    ['DS 2450 ELA', 127, 32, 'Elastomer', '608ZZ', 163, 169, 95, 96, 90, 20],
                    ['DS 2450 EPU', 127, 32, 'Elastic Poly Urethane', '608ZZ', 163, 169, 95, 96, 100, 20],
                    ['DS 2450 PCB', 127, 32, 'Poly Vinyl Chloride', '6202ZZ', 163, 169, 95, 96, 90, 20],
                    ['DS 2460 MRB', 152, 32, 'Mirage Rubber', '608ZZ', 191, 197, '·', 103, 100, 12],
                ],
                // commonPCS: 'S-150 R-150 B/K-130',
            },
            spec: [{
                image: '../Product/MedicalEquipmentCaster/DS24SERIES/160517042748_10.PNG.jpg',
            },]
        },
    },
    // ! 4
    {
        image: '../Product/MedicalEquipmentCaster/DS25SERIES/160426105727_06.jpg',
        id: 'DS 25 SERIES 이중 제동용(Dual Brake)',
        des: {
            imageProduct: [
                {
                    image: '../Product/MedicalEquipmentCaster/DS25SERIES/160426105727_00.jpg',
                    type: 'Model: DS 2530 EPU-BK',
                },
                {
                    image: '../Product/MedicalEquipmentCaster/DS25SERIES/160426105727_01.jpg',
                    type: 'Model: DS 2530 EPU-BT BK',
                },
                {
                    image: '../Product/MedicalEquipmentCaster/DS25SERIES/160426105727_02.jpg',
                    type: 'Model: DS 2530 PCB-BK',
                },
                {
                    image: '../Product/MedicalEquipmentCaster/DS25SERIES/160426105727_03.jpg',
                    type: 'Model: DS 2530 PCB-BT BK',
                },
                {
                    image: '../Product/MedicalEquipmentCaster/DS25SERIES/160426105727_04.jpg',
                    type: 'Model: DS 2540 ELA-BT BK',
                },
                {
                    image: '../Product/MedicalEquipmentCaster/DS25SERIES/160426105727_05.jpg',
                    type: 'Model: DS 2540 EPU-BT BK',
                },
                {
                    image: '../Product/MedicalEquipmentCaster/DS25SERIES/160426105727_06.jpg',
                    type: 'Model: DS 2540 MRB-BK',
                },
                {
                    image: '../Product/MedicalEquipmentCaster/DS25SERIES/160426105727_07.jpg',
                    type: 'Model: DS 2540 MRB-BT BK',
                },
                {
                    image: '../Product/MedicalEquipmentCaster/DS25SERIES/160426105727_08.jpg',
                    type: 'Model: DS 2550 EPU-BK',
                },
                {
                    image: '../Product/MedicalEquipmentCaster/DS25SERIES/160426105727_09.jpg',
                    type: 'Model: DS 2550 MRB(P)-BK',
                },
                {
                    image: '../Product/MedicalEquipmentCaster/DS25SERIES/160426105727_010.jpg',
                    type: 'Model: DS 2550 MRB-BT BK',
                },
            ],
            CasterSpecification: {
                headers: [
                    { text: '제품명', unit: '(Model)' },
                    { text: 'Wheel Dia', unit: '(mm)', image: '../Product/WheelDia.jpg' },
                    { text: 'Tread Width', unit: '(mm)', image: '../Product/TreadWidth.jpg' },
                    { text: 'Wheel Material', image: '../Product/WheelMaterial.jpg' },
                    { text: 'Bearing', image: '../Product/Bearing.jpg' },
                    { text: 'Load Height', unit: '(mm)', image: '../Product/LoadHeight1.jpg' },
                    { text: 'Load Height', unit: '(mm)', image: '../Product/LoadHeight2.jpg' },
                    // { text: 'Swivel Radius', unit: '(mm)', image: '../Product/SwivelRadius.jpg' },
                    { text: 'S', image: '../Product/SwivelRadius.jpg' },
                    { text: 'B/K', image: '../Product/SwivelRadius.jpg' },
                    { text: 'Load Capacity', unit: '(kg)', image: '../Product/LoadCapacity.jpg' },
                    { text: '박스당수량', unit: 'PCS' },
                ],
                rows: [
                    ['DS 2530 MRB', 77, 30, 'Mirage Rubber', '608ZZ', 114, 120, 70, 98, 70, 32],
                    ['DS 2530 ELA', 77, 30, 'Elastomer', '608ZZ', 114, 120, 70, 98, 70, 32],
                    ['DS 2530 EPU', 77, 30, 'Elastic Poly Urethane', '608ZZ', 114, 120, 70, 98, 70, 32],
                    ['DS 2530 PCB', 77, 30, 'Poly Vinyl Chloride', '6202ZZ', 114, 120, 70, 98, 70, 32],
                    ['DS 2540 MRB', 101, 30, 'Mirage Rubber', '608ZZ', 138, 144, 82, 98, 80, 24],
                    ['DS 2540 ELA', 101, 30, 'Elastomer', '608ZZ', 138, 144, 82, 98, 80, 24],
                    ['DS 2540 EPU', 101, 30, 'Elastic Poly Urethane', '608ZZ', 138, 144, 82, 98, 80, 24],
                    ['DS 2540 PCB', 101, 30, 'Poly Vinyl Chloride', '6202ZZ', 138, 144, 82, 98, 80, 24],
                    ['DS 2550 MRB', 127, 32, 'Mirage Rubber', '608ZZ', 163, 169, 95, 98, 90, 20],
                    ['DS 2550 ELA', 127, 32, 'Elastomer', '608ZZ', 163, 169, 95, 98, 90, 20],
                    ['DS 2550 EPU', 127, 32, 'Elastic Poly Urethane', '608ZZ', 163, 169, 95, 98, 100, 20],
                    ['DS 2550 PCB', 127, 32, 'Poly Vinyl Chloride', '6202ZZ', 163, 169, 95, 98, 90, 20],
                ],
                // commonPCS: 'S-150 R-150 B/K-130',
            },
            spec: [{
                image: '../Product/MedicalEquipmentCaster/DS25SERIES/160517042824_10.PNG.jpg',
            },]
        },
    },
    // ! 5
    {
        image: '../Product/MedicalEquipmentCaster/DS28SERIES/160426105754_03.jpg',
        id: 'DS 28 SERIES 보급형',
        des: {
            imageProduct: [
                {
                    image: '../Product/MedicalEquipmentCaster/DS28SERIES/160426105754_00.jpg',
                    type: 'Model: DS 2840 EPU-BK',
                },
                {
                    image: '../Product/MedicalEquipmentCaster/DS28SERIES/160426105754_01.jpg',
                    type: 'Model: DS 2840 EPU-BT BK',
                },
                {
                    image: '../Product/MedicalEquipmentCaster/DS28SERIES/160426105754_02.jpg',
                    type: 'Model: DS 2840 EPU-S',
                },
                {
                    image: '../Product/MedicalEquipmentCaster/DS28SERIES/160426105754_03.jpg',
                    type: 'Model: DS 2840 MRB-BK',
                },
                {
                    image: '../Product/MedicalEquipmentCaster/DS28SERIES/160426105754_04.jpg',
                    type: 'Model: DS 2840 MRB-BT BK',
                },
                {
                    image: '../Product/MedicalEquipmentCaster/DS28SERIES/160426105754_05.jpg',
                    type: 'Model: DS 2840 MRB-S',
                },
                {
                    image: '../Product/MedicalEquipmentCaster/DS28SERIES/160426105754_06.jpg',
                    type: 'Model: DS 2840 MRP-BK',
                },
            ],
            CasterSpecification: {
                headers: [
                    { text: '제품명', unit: '(Model)' },
                    { text: 'Wheel Dia', unit: '(mm)', image: '../Product/WheelDia.jpg' },
                    { text: 'Tread Width', unit: '(mm)', image: '../Product/TreadWidth.jpg' },
                    { text: 'Wheel Material', image: '../Product/WheelMaterial.jpg' },
                    { text: 'Bearing', image: '../Product/Bearing.jpg' },
                    { text: 'Load Height', unit: '(mm)', image: '../Product/LoadHeight1.jpg' },
                    { text: 'Load Height', unit: '(mm)', image: '../Product/LoadHeight2.jpg' },
                    { text: 'Swivel Radius', unit: '(mm)', image: '../Product/SwivelRadius.jpg' },
                    { text: 'Load Capacity', unit: '(kg)', image: '../Product/LoadCapacity.jpg' },
                    { text: '박스당수량', unit: 'PCS' },
                ],
                rows: [
                    ['DS 2840 MRB', 101, 25, 'Mirage Rubber', '6202ZZ', 132, 138, 79, 60, 30],
                    ['DS 2840 MRP', 101, 25, 'Mirage Rubber', 'Plain', 132, 138, 79, 40, 30],
                    ['DS 2840 EPU', 103, 25, 'Elastic Poly Urethane', '608ZZ', 133, 139, 80, 60, 30]
                ],
                // commonPCS: 'S-150 R-150 B/K-130',
            },
            spec: [{
                image: '../Product/MedicalEquipmentCaster/DS21SERIES_2/180308042118_10.jpg',
            },]
        },
    },
];
const LowNoise_Caster_DATA = [
    // ! 1
    {
        image: '../Product/LowNoiseCaster/DS26SERIESLD/160426105824_02.jpg',
        id: 'DS 26 SERIES 경량용 (Light-Duty)',
        des: {
            imageProduct: [
                {
                    image: '../Product/LowNoiseCaster/DS26SERIESLD/160426105824_00.jpg',
                    type: 'Model: DS 2630 EPU-BK',
                },
                {
                    image: '../Product/LowNoiseCaster/DS26SERIESLD/160426105824_01.jpg',
                    type: 'Model: DS 2630 EPU-BT BK',
                },
                {
                    image: '../Product/LowNoiseCaster/DS26SERIESLD/160426105824_02.jpg',
                    type: 'Model: DS 2640 ELA-BK',
                },
                {
                    image: '../Product/LowNoiseCaster/DS26SERIESLD/160426105824_03.jpg',
                    type: 'Model: DS 2640 ELA-BT BK',
                },
                {
                    image: '../Product/LowNoiseCaster/DS26SERIESLD/160426105824_04.jpg',
                    type: 'Model: DS 2640 ELA-R',
                },
                {
                    image: '../Product/LowNoiseCaster/DS26SERIESLD/160426105824_05.jpg',
                    type: 'Model: DS 2640 ELA-S',
                },
            ],
            CasterSpecification: {
                headers: [
                    { text: '제품명', unit: '(Model)' },
                    { text: 'Wheel Dia', unit: '(mm)', image: '../Product/WheelDia.jpg' },
                    { text: 'Tread Width', unit: '(mm)', image: '../Product/TreadWidth.jpg' },
                    { text: 'Wheel Material', image: '../Product/WheelMaterial.jpg' },
                    { text: 'Bearing', image: '../Product/Bearing.jpg' },
                    { text: 'Load Height', unit: '(mm)', image: '../Product/LoadHeight1.jpg' },
                    { text: 'Load Height', unit: '(mm)', image: '../Product/LoadHeight2.jpg' },
                    // { text: 'Swivel Radius', unit: '(mm)', image: '../Product/SwivelRadius.jpg' },
                    { text: 'S', image: '../Product/SwivelRadius.jpg' },
                    { text: 'B/K', image: '../Product/SwivelRadius.jpg' },
                    { text: 'Load Capacity', unit: '(kg)', image: '../Product/LoadCapacity.jpg' },
                    { text: '박스당수량', unit: 'PCS' },
                ],
                rows: [
                    ['DS 2630 ELA', 76, 25, 'Elastomer', '608ZZ', 113, 119, 68, 97, 60, 32],
                    ['DS 2630 EPU', 76, 25, 'Elastic Poly Urethane', '608ZZ', 113, 119, 68, 97, 70, 32],
                    ['DS 2640 ELA', 101, 25, 'Elastomer', '608ZZ', 138, 144, 81, 97, 70, 24],
                    ['DS 2640 EPU', 101, 25, 'Elastic Poly Urethane', '608ZZ', 138, 144, 81, 97, 80, 24],
                    ['DS 2650 ELA', 127, 25, 'Elastomer', '608ZZ', 163, 169, 97, 97, 80, 20],
                ],
                // commonPCS: 'S-150 R-150 B/K-130',
            },
            spec: [{
                image: '../Product/LowNoiseCaster/DS26SERIESLD/160517042922_10.PNG.jpg',
            },]
        },
    },
    // ! 2
    {
        image: '../Product/LowNoiseCaster/DS26SERIESHD/160426105841_00.jpg',
        id: 'DS 26 SERIES 중량용 (Heavy-Duty)',
        des: {
            imageProduct: [
                {
                    image: '../Product/LowNoiseCaster/DS26SERIESHD/160426105841_00.jpg',
                    type: 'Model: DS 2651 ELA-BK',
                },
                {
                    image: '../Product/LowNoiseCaster/DS26SERIESHD/160426105841_01.jpg',
                    type: 'Model: DS 2651 ELA-R',
                },
                {
                    image: '../Product/LowNoiseCaster/DS26SERIESHD/160426105841_02.jpg',
                    type: 'Model: DS 2651 ELA-S',
                },
            ],
            CasterSpecification: {
                headers: [
                    { text: '제품명', unit: '(Model)' },
                    { text: 'Wheel Dia', unit: '(mm)', image: '../Product/WheelDia.jpg' },
                    { text: 'Tread Width', unit: '(mm)', image: '../Product/TreadWidth.jpg' },
                    { text: 'Wheel Material', image: '../Product/WheelMaterial.jpg' },
                    { text: 'Bearing', image: '../Product/Bearing.jpg' },
                    { text: 'Load Height', unit: '(mm)', image: '../Product/LoadHeight1.jpg' },
                    // { text: 'Load Height', unit: '(mm)', image: '../Product/LoadHeight2.jpg' },
                    { text: 'Swivel Radius', unit: '(mm)', image: '../Product/SwivelRadius.jpg' },
                    // { text: 'S', image: '../Product/SwivelRadius.jpg' },
                    // { text: 'B/K', image: '../Product/SwivelRadius.jpg' },
                    { text: 'Load Capacity', unit: '(kg)', image: '../Product/LoadCapacity.jpg' },
                    { text: '박스당수량', unit: 'PCS' },
                ],
                rows: [
                    ['DS 2641 ELA', 101, 50, 'Elastomer', '6003ZZ', 141, 74, 150, 16],
                    ['DS 2651 ELA', 124, 51, 'Elastomer', '6003ZZ', 163, 92, 200, 10],
                    ['DS 2661 ELA', 152, 52, 'Elastomer', '6003ZZ', 190, 109, 250, 10]
                ],
                // commonPCS: 'S-150 R-150 B/K-130',
            },
            spec:[ {
                image: '../Product/LowNoiseCaster/DS26SERIESHD/160517042958_10.PNG.jpg',
            },]
        },
    },
];
const Special_Caster_DATA = [
    // ! 1
    {
        image: '../Product/SpecialCaster/ShockAbsorberCaster/160426105930_02.jpg',
        id: '완충용캐스터 Shock Absorber Caster',
        des: {
            imageProduct: [
                {
                    image: '../Product/SpecialCaster/ShockAbsorberCaster/160426105930_00.jpg',
                    type: 'Model: DS 4560 PUI-R',
                },
                {
                    image: '../Product/SpecialCaster/ShockAbsorberCaster/160426105930_01.jpg',
                    type: 'Model: DS 4560 PUI-S',
                },
                {
                    image: '../Product/SpecialCaster/ShockAbsorberCaster/160426105930_02.jpg',
                    type: 'Model: DS 4580 PUI-R',
                },
                {
                    image: '../Product/SpecialCaster/ShockAbsorberCaster/160426105930_03.jpg',
                    type: 'Model: DS 4580 PUI-S',
                },
            ],
            CasterSpecification: {
                headers: [
                    { text: '제품명', unit: '(Model)' },
                    { text: 'Wheel Dia', unit: '(mm)', image: '../Product/WheelDia.jpg' },
                    { text: 'Tread Width', unit: '(mm)', image: '../Product/TreadWidth.jpg' },
                    { text: 'Wheel Material', image: '../Product/WheelMaterial.jpg' },
                    { text: 'Bearing', image: '../Product/Bearing.jpg' },
                    { text: 'Load Height', unit: '(mm)', image: '../Product/LoadHeight1.jpg' },
                    // { text: 'Load Height', unit: '(mm)', image: '../Product/LoadHeight2.jpg' },
                    { text: 'Swivel Radius', unit: '(mm)', image: '../Product/SwivelRadius.jpg' },
                    { text: 'Load Capacity', unit: '(kg)', image: '../Product/LoadCapacity.jpg' },
                    { text: '박스당수량', unit: 'PCS' },
                ],
                rows: [
                    ['DS 4560 PUI', 152, 48, 'Poly Propylene', '6203ZZ', 200, 127, 380, 4],
                    ['DS 4580 PUI', 202, 49, 'Poly Propylene', '6203ZZ', 245, 179, 600, 2],
                ],
                // commonPCS: 'S-150 R-150 B/K-130',
            },
            spec: [
                {
                    image: '../Product/SpecialCaster/ShockAbsorberCaster/160426105930_10.jpg',
                },
                {
                    image: '../Product/SpecialCaster/ShockAbsorberCaster/160517043121_10.PNG.jpg',
                },
            ],
        },
    },
    // ! 2
    {
        image: '../Product/SpecialCaster/LadderScaffoldCaster/160426110010_06.jpg',
        id: '건축장비용 캐스터 Ladder Scaffold Caster',
        des: {
            imageProduct: [
                {
                    image: '../Product/SpecialCaster/LadderScaffoldCaster/160426110010_00.jpg',
                    type: 'Model: DS 5040 LDP-BK',
                },
                {
                    image: '../Product/SpecialCaster/LadderScaffoldCaster/160426110010_01.jpg',
                    type: 'Model: DS 5040 PVP-BK',
                },
                {
                    image: '../Product/SpecialCaster/LadderScaffoldCaster/160426110010_02.jpg',
                    type: 'Model: DS 5040 SR-BK',
                },
                {
                    image: '../Product/SpecialCaster/LadderScaffoldCaster/160426110010_03.jpg',
                    type: 'Model: DS 5050 LDP-BK',
                },
                {
                    image: '../Product/SpecialCaster/LadderScaffoldCaster/160426110010_04.jpg',
                    type: 'Model: DS 5050 PUI-BK',
                },
                {
                    image: '../Product/SpecialCaster/LadderScaffoldCaster/160426110010_05.jpg',
                    type: 'Model: DS 5050 PVP-BK',
                },
                {
                    image: '../Product/SpecialCaster/LadderScaffoldCaster/160426110010_06.jpg',
                    type: 'Model: DS 5050 SR-BK',
                },
                {
                    image: '../Product/SpecialCaster/LadderScaffoldCaster/160426110010_07.jpg',
                    type: 'Model: DS 5060 LDP-BK',
                },
                {
                    image: '../Product/SpecialCaster/LadderScaffoldCaster/160426110010_08.jpg',
                    type: 'Model: DS 5060 PUI-BK',
                },
                {
                    image: '../Product/SpecialCaster/LadderScaffoldCaster/160426110010_09.jpg',
                    type: 'Model: DS 5060 PVP-BK',
                },
                {
                    image: '../Product/SpecialCaster/LadderScaffoldCaster/160426110010_010.jpg',
                    type: 'Model: DS 5080 PUI-BK',
                },
            ],
            CasterSpecification: {
                headers: [
                    { text: '제품명', unit: '(Model)' },
                    { text: 'Wheel Dia', unit: '(mm)', image: '../Product/WheelDia.jpg' },
                    { text: 'Tread Width', unit: '(mm)', image: '../Product/TreadWidth.jpg' },
                    { text: 'Wheel Material', image: '../Product/WheelMaterial.jpg' },
                    { text: 'Bearing', image: '../Product/Bearing.jpg' },
                    { text: 'Load Height', unit: '(mm)', image: '../Product/LoadHeight1.jpg' },
                    // { text: 'Load Height', unit: '(mm)', image: '../Product/LoadHeight2.jpg' },
                    { text: 'Swivel Radius', unit: '(mm)', image: '../Product/SwivelRadius.jpg' },
                    { text: 'Load Capacity', unit: '(kg)', image: '../Product/LoadCapacity.jpg' },
                    { text: '박스당수량', unit: 'PCS' },
                ],
                rows: [
                    ['DS 5040 S R', 102, 32, 'Soft Rubber', 'Plain', 127, 85, 70, 25],
                    ['DS 5040 LDP', 102, 32, 'Poly Propylene', 'Plain', 127, 85, 100, 25],
                    ['DS 5040 PUI', 100, 33, 'Poly Urethane', 'Roller', 137, 81, 200, 16],
                    ['DS 5050 S R', 127, 32, 'Soft Rubber', 'Plain', 157, 100, 80, 20],
                    ['DS 5050 LDP', 127, 32, 'Poly Propylene', 'Plain', 157, 100, 110, 20],
                    ['DS 5050 PUI', 126, 40, 'Poly Urethane', 'Roller', 166, 110, 280, 10],
                    ['DS 5060 LDP', 150, 47, 'Poly Urethane', 'Pipe', 182, 118, 150, 12],
                    ['DS 5060 PVP', 150, 47, 'Poly Vinyl Chloride', 'Pipe', 182, 118, 120, 12],
                    ['DS 5060 PUI', 151, 43, 'Poly Urethane', 'Roller', 187, 114, 300, 8],
                    ['DS 5080 PUI', 202, 47, 'Poly Urethane', 'Roller', 241, 149, 350, 5],
                ],
                // commonPCS: 'S-150 R-150 B/K-130',
            },
            spec: [
                {
                    image: '../Product/SpecialCaster/LadderScaffoldCaster/160517043147_10.PNG.jpg',
                },
            ],
        },
    },
    // ! 3
    {
        image: '../Product/SpecialCaster/BusinessMachineCaster/160426110029_03.jpg',
        id: '전산기기용 캐스터 Business Machine Caster',
        des: {
            imageProduct: [
                {
                    image: '../Product/SpecialCaster/BusinessMachineCaster/160426110029_00.jpg',
                    type: 'Model: DS 6025 HDP-S',
                },
                {
                    image: '../Product/SpecialCaster/BusinessMachineCaster/160426110029_01.jpg',
                    type: 'Model: DS 6030 HDP-BK',
                },
                {
                    image: '../Product/SpecialCaster/BusinessMachineCaster/160426110029_02.jpg',
                    type: 'Model: DS 6030 HDP-BT',
                },
                {
                    image: '../Product/SpecialCaster/BusinessMachineCaster/160426110029_03.jpg',
                    type: 'Model: DS 6030 HDP-S',
                },
            ],
            CasterSpecification: {
                headers: [
                    { text: '제품명', unit: '(Model)' },
                    { text: 'Wheel Dia', unit: '(mm)', image: '../Product/WheelDia.jpg' },
                    { text: 'Tread Width', unit: '(mm)', image: '../Product/TreadWidth.jpg' },
                    { text: 'Wheel Material', image: '../Product/WheelMaterial.jpg' },
                    { text: 'Bearing', image: '../Product/Bearing.jpg' },
                    { text: 'Load Height', unit: '(mm)', image: '../Product/LoadHeight1.jpg' },
                    { text: 'Load Height', unit: '(mm)', image: '../Product/LoadHeight2.jpg' },
                    { text: 'Swivel Radius', unit: '(mm)', image: '../Product/SwivelRadius.jpg' },
                    { text: 'Load Capacity', unit: '(kg)', image: '../Product/LoadCapacity.jpg' },
                    { text: '박스당수량', unit: 'PCS' },
                ],
                rows: [
                    ['DS 6025 HDP', 63, 46, 'Poly Propylene', '6003ZZ', 92, 99, 44, 250, 30],
                    ['DS 6030 HDP', 76, 47, 'Poly Propylene', '6004ZZ', 105, 112, 51, 300, 30],
                ],
                // commonPCS: 'S-150 R-150 B/K-130',
            },
            spec: [
                {
                    image: '../Product/SpecialCaster/BusinessMachineCaster/160517043223_10.PNG.jpg',
                },
            ],
        },
    },
    // ! 4
    {
        image: '../Product/SpecialCaster/PneumaticTireFoamCaster/160426110049_02.jpg',
        id: '에어용/발포우레탄 캐스터 Pneumatic Tire / Foam Caster',
        des: {
            imageProduct: [
                {
                    image: '../Product/SpecialCaster/PneumaticTireFoamCaster/160426110049_00.jpg',
                    type: 'Model: DS 7010 YOKE-S',
                },
                {
                    image: '../Product/SpecialCaster/PneumaticTireFoamCaster/160426110049_01.jpg',
                    type: 'Model: DS 7012 FP-S',
                },
                {
                    image: '../Product/SpecialCaster/PneumaticTireFoamCaster/160426110049_02.jpg',
                    type: 'Model: DS 7080 PT',
                },
            ],
            CasterSpecification: {
                headers: [
                    { text: '제품명', unit: '(Model)' },
                    { text: 'Wheel Dia', unit: '(mm)', image: '../Product/WheelDia.jpg' },
                    // { text: 'Tread Width', unit: '(mm)', image: '../Product/TreadWidth.jpg' },
                    { text: 'Wheel Material', image: '../Product/WheelMaterial.jpg' },
                    { text: 'Bearing', image: '../Product/Bearing.jpg' },
                    { text: 'Load Height', unit: '(mm)', image: '../Product/LoadHeight1.jpg' },
                    // { text: 'Load Height', unit: '(mm)', image: '../Product/LoadHeight2.jpg' },
                    // { text: 'Swivel Radius', unit: '(mm)', image: '../Product/SwivelRadius.jpg' },
                    // { text: 'Load Capacity', unit: '(kg)', image: '../Product/LoadCapacity.jpg' },
                    { text: '박스당수량', unit: 'PCS' },
                ],
                rows: [
                    ['DS 7080 P T', 215, 'Pneumatic Tire', '6204', 259, 4],
                    ['DS 7080 S T', 215, 'Solid Rubber Tire', '6204', 259, 4],
                    ['DS 7080 F P', 215, 'Foam Poly Urethan', '6204', 259, 4],
                    ['DS 7010 P T', 260, 'Pneumatic Tire', '6204', 299, 4],
                    ['DS 7010 S T', 260, 'Solid Rubber Tire', '6204', 299, 4],
                    ['DS 7010 F P', 260, 'Foam Poly Urethan', '6204', 299, 4],
                    ['DS 7012 P T', 300, 'Pneumatic Tire', '6204', 334, 2],
                    ['DS 7012 S T', 300, 'Solid Rubber Tire', '6204', 334, 2],
                    ['DS 7012 F P', 300, 'Foam Poly Urethan', '6204', 334, 2],
                    ['DS 7013 P T', 360, 'Pneumatic Tire', '6204', null, null],
                    ['DS 7013 F P', 360, 'Foam Poly Urethan', '6204', null, null],
                ],
                // commonPCS: 'S-150 R-150 B/K-130',
            },
            spec: [
                {
                    image: '../Product/SpecialCaster/PneumaticTireFoamCaster/160517043248_10.PNG.jpg',
                },
            ],
        },
    },
    // ! 5
    {
        image: '../Product/SpecialCaster/TripleCaster/160426110138_00.jpg',
        id: '트리플 캐스터 Triple Caster',
        des: {
            imageProduct: [
                {
                    image: '../Product/SpecialCaster/TripleCaster/160426110138_00.jpg',
                    type: 'Model: DS 9025 HDP',
                },
                {
                    image: '../Product/SpecialCaster/TripleCaster/160426110138_01.jpg',
                    type: 'Model: DS 9025 PUB',
                },
                {
                    image: '../Product/SpecialCaster/TripleCaster/160426110138_02.jpg',
                    type: 'Model: DS 9030 HDP',
                },
                {
                    image: '../Product/SpecialCaster/TripleCaster/160426110138_03.jpg',
                    type: 'Model: DS 9030 PUB',
                },
            ],
            CasterSpecification: {
                headers: [
                    { text: '제품명', unit: '(Model)' },
                    { text: 'Wheel Dia', unit: '(mm)', image: '../Product/WheelDia.jpg' },
                    { text: 'Tread Width', unit: '(mm)', image: '../Product/TreadWidth.jpg' },
                    { text: 'Wheel Material', image: '../Product/WheelMaterial.jpg' },
                    { text: 'Bearing', image: '../Product/Bearing.jpg' },
                    { text: 'Load Height', unit: '(mm)', image: '../Product/LoadHeight1.jpg' },
                    // { text: 'Load Height', unit: '(mm)', image: '../Product/LoadHeight2.jpg' },
                    // { text: 'Swivel Radius', unit: '(mm)', image: '../Product/SwivelRadius.jpg' },
                    { text: 'Load Capacity', unit: '(kg)', image: '../Product/LoadCapacity.jpg' },
                    { text: '박스당수량', unit: 'PCS' },
                ],
                rows: [
                    ['DS 9025 PUB', 61, 25, 'Poly Urethane', '628ZZ', 116, 120, 1],
                    ['DS 9025 HDP', 63, 46, 'Poly Propylene', '6003ZZ', 121, 500, 1],
                    ['DS 9030 PUB', 75, 32, 'Poly Urethane', '6200', 138, 180, 1],
                    ['DS 9030 HDP', 76, 46, 'Poly Propylene', '6003ZZ', 138, 700, 1],
                ],
                // commonPCS: 'S-150 R-150 B/K-130',
            },
            spec: [
                {
                    image: '../Product/SpecialCaster/TripleCaster/160517043349_10.PNG.jpg',
                },
            ],
        },
    },
];
const Leveling_Caster_DATA = [
    // ! 1
    {
        image: '../Product/LevelingCaster/QM40_50/160426110209_00.jpg',
        id: 'Q-MASTER(QM40/50)',
        des: {
            imageProduct: [
                {
                    image: '../Product/LevelingCaster/QM40_50/160426110209_00.jpg',
                    type: 'Model: QM40 S QM40 F 우레탄 패드',
                },
            ],
            CasterSpecification: {
                headers: [
                    { text: '제품명', unit: '(Model)' },
                    { text: '개당허용중량', unit: '(LOAD/PC)' },
                    { text: '4개당허용중량', unit: '(LOAD/PCS)' },
                    { text: '자중', unit: '(NET WEIGHT)' },
                ],
                rows: [['QM40', '35KG', '100KG', '0.4KG']],
                // commonPCS: 'S-150 R-150 B/K-130',
            },
            spec: [
                {
                    image: '../Product/LevelingCaster/QM40_50/160517043416_10.png',
                },
            ],
        },
    },
    // ! 2
    {
        image: '../Product/LevelingCaster/QM60_300/160426110229_00.jpg',
        id: 'Q-MASTER(QM60/300)',
        des: {
            imageProduct: [
                {
                    image: '../Product/LevelingCaster/QM60_300/160426110229_00.jpg',
                    type: 'Model: 스테인레스 QM60S QM60F QM60B 우레탄패드',
                },
            ],
            CasterSpecification: {
                headers: [
                    { text: '제품명', unit: '(Model)' },
                    { text: '개당허용중량', unit: '(LOAD/PC)' },
                    { text: '4개당허용중량', unit: '(LOAD/PCS)' },
                    { text: '자중', unit: '(NET WEIGHT)' },
                ],
                rows: [
                    ['QM60 S', '170KG', '500KG', '0.63KG'],
                    ['QM60 F', '170KG', '500KG', '0.75KG'],
                ],
                // commonPCS: 'S-150 R-150 B/K-130',
            },
            spec: [
                {
                    image: '../Product/LevelingCaster/QM60_300/160517043454_10.png',
                },
            ],
        },
    },
    // ! 3
    {
        image: '../Product/LevelingCaster/QM80_600/160426110428_00.jpg',
        id: 'Q-MASTER(QM80/600)',
        des: {
            imageProduct: [
                {
                    image: '../Product/LevelingCaster/QM80_600/160426110428_00.jpg',
                    type: 'Model: 스테인레스 QM80S QM80F QM80B 우레탄패드img_-513',
                },
            ],
            CasterSpecification: {
                headers: [
                    { text: '제품명', unit: '(Model)' },
                    { text: '개당허용중량', unit: '(LOAD/PC)' },
                    { text: '4개당허용중량', unit: '(LOAD/PCS)' },
                    { text: '자중', unit: '(NET WEIGHT)' },
                ],
                rows: [
                    ['QM80 S', '330KG', '1,000KG', '1.3KG'],
                    ['QM80 F', '330KG', '1,000KG', '1.52KG'],
                ],
                // commonPCS: 'S-150 R-150 B/K-130',
            },
            spec: [
                {
                    image: '../Product/LevelingCaster/QM80_600/160517043522_10.png',
                },
            ],
        },
    },
    // ! 4
    {
        image: '../Product/LevelingCaster/QM100_1000/160426110518_00.jpg',
        id: 'Q-MASTER(QM100/1000)',
        des: {
            imageProduct: [
                {
                    image: '../Product/LevelingCaster/QM100_1000/160426110518_00.jpg',
                    type: 'Model: 스테인레스 QM100S QM100F QM100B 우레탄패드img_-517',
                },
            ],
            CasterSpecification: {
                headers: [
                    { text: '제품명', unit: '(Model)' },
                    { text: '개당허용중량', unit: '(LOAD/PC)' },
                    { text: '4개당허용중량', unit: '(LOAD/PCS)' },
                    { text: '자중', unit: '(NET WEIGHT)' },
                ],
                rows: [
                    ['QM100 S', '540KG', '1,600KG', '1.64KG'],
                    ['QM100 F', '540KG', '1,600KG', '1.89KG'],
                ],
                // commonPCS: 'S-150 R-150 B/K-130',
            },
            spec: [
                {
                    image: '../Product/LevelingCaster/QM100_1000/160517043554_10.png',
                },
            ],
        },
    },
    // ! 5
    {
        image: '../Product/LevelingCaster/QM120_1300/160426110541_00.jpg',
        id: 'Q-MASTER (QM120/1300) / (QM150/1800)',
        des: {
            imageProduct: [
                {
                    image: '../Product/LevelingCaster/QM120_1300/160426110541_00.jpg',
                    type: 'Model: QM120S QM120F 스테인레스',
                },
                {
                    image: '../Product/LevelingCaster/QM120_1300/160426110541_01.jpg',
                    type: 'Model: QM150F',
                },
            ],
            CasterSpecification: {
                headers: [
                    { text: '제품명', unit: '(Model)' },
                    { text: '개당허용중량', unit: '(LOAD/PC)' },
                    { text: '4개당허용중량', unit: '(LOAD/PCS)' },
                    { text: '자중', unit: '(NET WEIGHT)' },
                ],
                rows: [
                    ['QM120 S', '700KG', '2,000KG', '1.666KG'],
                    ['QM120 F', '700KG', '2,000KG', '2.026KG'],
                    ['QM150 F', '1,000KG', '3,000KG', '3.58KG'],
                ],
                // commonPCS: 'S-150 R-150 B/K-130',
            },
            spec: [
                {
                    image: '../Product/LevelingCaster/QM120_1300/160517043631_10.png',
                },
            ],
        },
    },
    // ! 6
    {
        image: '../Product/LevelingCaster/INCH_MASTER1/160426110607_00.jpg',
        id: 'INCH-MASTER(IM1.5˝/2.5˝)',
        des: {
            imageProduct: [
                {
                    image: '../Product/LevelingCaster/INCH_MASTER1/160426110607_00.jpg',
                    type: 'Model: IM1',
                },
                {
                    image: '../Product/LevelingCaster/INCH_MASTER1/160426110607_01.jpg',
                    type: 'Model: IM2',
                },
            ],
            CasterSpecification: {
                headers: [
                    { text: '제품명', unit: '(Model)' },
                    { text: '개당허용중량', unit: '(LOAD/PC)' },
                    { text: '4개당허용중량', unit: '(LOAD/PCS)' },
                ],
                rows: [
                    ['IM 1.5˝', '30KG', '90KG'],
                    ['IM 2.5˝', '70KG', '210KG'],
                ],
                // commonPCS: 'S-150 R-150 B/K-130',
            },
            spec: [
                {
                    image: '../Product/LevelingCaster/INCH_MASTER1/160517043707_10.png',
                },
            ],
        },
    },
    // ! 7
    {
        image: '../Product/LevelingCaster/INCH_MASTER2/160426110628_02.jpg',
        id: 'INCH-MASTER(IM3˝/4˝)',
        des: {
            imageProduct: [
                {
                    image: '../Product/LevelingCaster/INCH_MASTER2/160426110628_00.jpg',
                    type: 'Model: IM3 F',
                },
                {
                    image: '../Product/LevelingCaster/INCH_MASTER1/160426110607_01.jpg',
                    type: 'Model: IM3 S',
                },
                {
                    image: '../Product/LevelingCaster/INCH_MASTER2/160426110628_02.jpg',
                    type: 'Model: IM4 F',
                },
                {
                    image: '../Product/LevelingCaster/INCH_MASTER2/160426110628_03.jpg',
                    type: 'Model: IM4 S',
                },
            ],
            CasterSpecification: {
                headers: [
                    { text: '제품명', unit: '(Model)' },
                    { text: '개당허용중량', unit: '(LOAD/PC)' },
                    { text: '4개당허용중량', unit: '(LOAD/PCS)' },
                ],
                rows: [
                    ['IM 3˝', '80KG', '240KG'],
                    ['IM 4˝', '100KG', '300KG'],
                ],
                // commonPCS: 'S-150 R-150 B/K-130',
            },
            spec: [
                {
                    image: '../Product/LevelingCaster/INCH_MASTER2/160517043737_10.png',
                },
            ],
        },
    },
];
const Leveling_Foot_DATA = [
    // ! 1
    {
        image: '../Product/LevelingFoot/PSERIES/160426110656_00.jpg',
        id: 'P SERIES',
        des: {
            imageProduct: [
                {
                    image: '../Product/LevelingFoot/PSERIES/160426110656_00.jpg',
                    type: 'Model: P SERIES',
                },
            ],
            CasterSpecification: {
                headers: [
                    { text: 'MODEL'},
                    { text: 'L1'},
                    { text: 'L2'},
                    { text: 'H'},
                    { text: 'G'},
                    { text: 'Ф'},
                    { text: 'M', unit: '(m/m)'},
                    { text: '허용하중', unit: '(KG/4EA)'},
                    { text: 'BOLT&NUT'},
                    { text: '하부'},
                    { text: '하부패드'},
                    { text: '표면처리'},
                ],
                rows: [ 
                    ['P-6 PS-6', '40', '51', '4', '7', 'Ф27', 'M61.0', '100 100', 'SM10C SUS304', 'SPC(2T) SUS304(2T)', '니켈도금', '포리싱(PL)'],
                    ['P-6 PS-6', '40', '53', '4', '9', 'Ф37', 'M61.0', '100 100', 'SM10C SUS304', 'SPC(2.5T) SUS304(2.5T)', '니켈도금', '포리싱(PL)'],
                    ['P-8 PS-8', '40', '54', '5', '9', 'Ф37', 'M81.25', '200 300', 'SM10C SUS304', 'SPC(2.5T) SUS304(2.5T)', '니켈도금', '포리싱(PL)'],
                    ['P-8 PS-8', '80', '94', '5', '9', 'Ф37', 'M81.25', '200 300', 'SM10C SUS304', 'SPC(2.5T) SUS304(2.5T)', '니켈도금', '포리싱(PL)'],
                    ['P-10 PS-10', '60', '80', '7', '13', 'Ф55', 'M101.5', '300 600', 'SM10C SUS304', 'SPC(2.5T) SUS304(2.5T)', '니켈도금', '포리싱(PL)'],
                    ['P-10 PS-10', '100', '120', '7', '13', 'Ф55', 'M101.5', '300 600', 'SM10C SUS304', 'SPC(3T) SUS304(3T)', '니켈도금', '포리싱(PL)'],
                    ['P-12 PS-12', '60', '81', '8', '13', 'Ф55', 'M121.75', '500 800', 'SM10C SUS304', 'SPC(3T) SUS304(3T)', '니켈도금', '포리싱(PL)'],
                    ['P-12 PS-12', '90', '111', '8', '13', 'Ф55', 'M121.75', '500 800', 'SM10C SUS304', 'SPC(3T) SUS304(3T)', '니켈도금', '포리싱(PL)'],
                    ['P-12 PS-12', '120', '141', '8', '13', 'Ф55', 'M121.75', '500 800', 'SM10C SUS304', 'SPC(3T) SUS304(3T)', '니켈도금', '포리싱(PL)'],
                    ['P-12 PS-12', '150', '171', '8', '13', 'Ф55', 'M121.75', '500 800', 'SM10C SUS304', 'SPC(3T) SUS304(3T)', '니켈도금', '포리싱(PL)'],
                    ['P-12 PS-12', '200', '221', '8', '13', 'Ф55', 'M121.75', '500 800', 'SM10C SUS304', 'SPC(3T) SUS304(3T)', '니켈도금', '포리싱(PL)'],
                    ['P-14 PS-14', '110', '132', '9', '13', 'Ф55', 'M142.0', '800 1100', 'SM10C SUS304', 'SPC(3T) SUS304(3T)', '니켈도금', '포리싱(PL)'],
                    ['P-14 PS-14', '110', '137', '9', '18', 'Ф75', 'M142.0', '800 1100', 'SM10C SUS304', 'SPC(3T) SUS304(3T)', '니켈도금', '포리싱(PL)'],
                    ['P-16 PS-16', '30', '53', '10', '13', 'Ф55', 'M162.0', '800 1200', 'SM10C SUS304', 'SPC(3T) SUS304(3T)', '니켈도금', '포리싱(PL)'],
                    ['P-16 PS-16', '30', '58', '10', '13', 'Ф55', 'M162.0', '800 1200', 'SM10C SUS304', 'SPC(3T) SUS304(3T)', '니켈도금', '포리싱(PL)'],
                    ['P-16 PS-16', '50', '73', '10', '13', 'Ф55', 'M162.0', '800 1200', 'SM10C SUS304', 'SPC(3T) SUS304(3T)', 'ps1', 'ps2'],
                    ['P-16 PS-16', '50', '78', '10', '13', 'Ф55', 'M162.0', '800 1200', 'SM10C SUS304', 'SPC(3T) SUS304(3T)', 'ps1', 'ps2'],
                    ['P-16 PS-16', '70', '93', '10', '13', 'Ф55', 'M162.0', '800 1200', 'SM10C SUS304', 'SPC(3T) SUS304(3T)', 'ps1', 'ps2'],
                    ['P-16 PS-16', '70', '98', '10', '13', 'Ф55', 'M162.0', '800 1200', 'SM10C SUS304', 'SPC(3T) SUS304(3T)', 'ps1', 'ps2'],
                    ['P-16 PS-16', '80', '103', '10', '13', 'Ф55', 'M162.0', '800 1200', 'SM10C SUS304', 'SPC(3T) SUS304(3T)', 'ps1', 'ps2'],
                    ['P-16 PS-16', '80', '108', '10', '13', 'Ф55', 'M162.0', '800 1200', 'SM10C SUS304', 'SPC(3T) SUS304(3T)', 'ps1', 'ps2'],
                    ['P-16 PS-16', '100', '128', '10', '13', 'Ф55', 'M162.0', '800 1200', 'SM10C SUS304', 'SPC(3T) SUS304(3T)', 'ps1', 'ps2'],
                    ['P-16 PS-16', '120', '143', '10', '13', 'Ф55', 'M162.0', '800 1200', 'SM10C SUS304', 'SPC(3T) SUS304(3T)', 'ps1', 'ps2'],
                    ['P-16 PS-16', '100', '123', '10', '13', 'Ф55', 'M162.0', '800 1200', 'SM10C SUS304', 'SPC(3T) SUS304(3T)', 'ps1', 'ps2'],
                    ['P-16 PS-16', '130', '153', '10', '18', 'Ф75', 'M162.0', '800 1200', 'SM10C SUS304', 'SPC(3T) SUS304(3T)', 'ps1', 'ps2'],
                    ['P-16 PS-16', '130', '158', '10', '18', 'Ф75', 'M162.0', '800 1200', 'SM10C SUS304', 'SPC(3T) SUS304(3T)', 'ps1', 'ps2'],
                    ['P-16 PS-16', '120', '148', '10', '18', 'Ф75', 'M162.0', '800 1200', 'SM10C SUS304', 'SPC(3T) SUS304(3T)', 'ps1', 'ps2'],
                    ['P-16 PS-16', '150', '173', '10', '18', 'Ф75', 'M162.0', '800 1200', 'SM10C SUS304', 'SPC(3T) SUS304(3T)', 'ps1', 'ps2'],
                    ['P-16 PS-16', '150', '178', '10', '18', 'Ф75', 'M162.0', '800 1200', 'SM10C SUS304', 'SPC(3T) SUS304(3T)', 'ps1', 'ps2'],
                    ['P-16 PS-16', '180', '203', '10', '18', 'Ф75', 'M162.0', '800 1200', 'SM10C SUS304', 'SPC(3T) SUS304(3T)', 'ps1', 'ps2'],
                    ['P-16 PS-16', '180', '208', '10', '18', 'Ф75', 'M162.0', '800 1200', 'SM10C SUS304', 'SPC(3T) SUS304(3T)', 'ps1', 'ps2'],
                    ['P-16 PS-16', '200', '223', '10', '18', 'Ф75', 'M162.0', '800 1200', 'SM10C SUS304', 'SPC(3T) SUS304(3T)', 'ps1', 'ps2'],
                    ['P-16 PS-16', '200', '228', '10', '18', 'Ф75', 'M162.0', '800 1200', 'SM10C SUS304', 'SPC(3T) SUS304(3T)', 'ps1', 'ps2'],
                    ['P-16 PS-16', '250', '273', '10', '18', 'Ф75', 'M162.0', '800 1200', 'SM10C SUS304', 'SPC(3T) SUS304(3T)', 'ps1', 'ps2'],
                    ['P-16 PS-16', '250', '278', '10', '18', 'Ф75', 'M162.0', '800 1200', 'SM10C SUS304', 'SPC(3T) SUS304(3T)', 'ps1', 'ps2'],
                    ['P-16 PS-16', '300', '323', '10', '18', 'Ф75', 'M162.0', '800 1200', 'SM10C SUS304', 'SPC(3T) SUS304(3T)', 'ps1', 'ps2'],
                    ['P-16 PS-16', '300', '328', '10', '18', 'Ф75', 'M162.0', '800 1200', 'SM10C SUS304', 'SPC(3T) SUS304(3T)', 'ps1', 'ps2'],
                ],
            },

        },
    },
];
export const TabItem_Product = [
    {
        label: '경하중용캐스터',
        labelDesc: 'Light-Duty Caster',
        value: 'Light-Duty',
        content: (
            <TabItem label={'경하중용캐스터'} labelDesc={'Light-Duty Caster'} DATA={Light_Duty_Caster_DATA} />
        ),
    },
    {
        label: '중간하중용 캐스터',
        labelDesc: 'Medium-Duty Caster',
        value: 'Medium-Duty',
        content: <TabItem label={'중간하중용 캐스터'} labelDesc={'Medium-Duty Caster'} DATA={Medium_Duty_Caster_DATA}/>,
    },
    {
        label: '중하중용 캐스터',
        labelDesc: 'Heavy-Duty Caster',
        value: 'Heavy-Duty',
        content: <TabItem label={'중하중용 캐스터'} labelDesc={'Heavy-Duty Caster'} DATA={Heavy_Duty_Caster_DATA}/>,
    },
    {
        label: '고하중용 캐스터',
        labelDesc: 'Super Heavy-Duty Caster',
        value: 'Super-Heavy-Duty',
        content: <TabItem label={'고하중용 캐스터'} labelDesc={'Super Heavy-Duty Caster'} DATA={Super_Heavy_Duty_Caster_DATA}/>,
    },
    {
        label: '스테인리스 캐스터',
        labelDesc: 'Stainless Steel Caster',
        value: 'StainlessiSteel',
        content: <TabItem label="스테인리스 캐스터" labelDesc="Stainless Steel Caster" DATA={Stainless_Steel_Caster_DATA}/>,
    },
    {
        label: '내열성/내한성 캐스터',
        labelDesc: 'Heat-Resisting/Low Temperature Caster',
        value: 'Heat-Resisting',
        content: (
            <TabItem
                label="내열성/내한성 캐스터"
                labelDesc="Heat-Resisting/Low Temperature Caster"
            DATA={Heat_ResistingLow_Temperature_Caster_DATA}/>
        ),
    },
    {
        label: '의료용 캐스터',
        labelDesc: 'Medical Equipment Caster',
        value: 'Medical-Equipment',
        content: <TabItem label="의료용 캐스터" labelDesc="Medical Equipment Caster" DATA={Medical_Equipment_Caster_DATA}/>,
    },
    {
        label: '저소음 캐스터',
        labelDesc: 'Low Noise Caster',
        value: 'Low-Noise',
        content: <TabItem label="저소음 캐스터" labelDesc="Low Noise Caster" DATA={LowNoise_Caster_DATA}/>,
    },
    {
        label: '특수 목적용 캐스터',
        labelDesc: 'Special Caster',
        value: 'Special-Caster',
        content: <TabItem label="특수 목적용 캐스터" labelDesc="Special Caster" DATA={Special_Caster_DATA}/>,
    },
    {
        label: '높낮이조절 캐스터',
        labelDesc: 'Leveling Caster',
        value: 'Leveling-Caster',
        content: <TabItem label="높낮이조절 캐스터" labelDesc="Leveling Caster" DATA={Leveling_Caster_DATA}/>,
    },
    {
        label: '높낮이 조절자',
        labelDesc: 'Leveling Foot',
        value: 'Leveling-Foot',
        content: <TabItem label="높낮이 조절자" labelDesc="Leveling Foot" DATA={Leveling_Foot_DATA}/>,
    },
]
// ! Customer
export const CustomerListMenuItems = [
    {
        title: '온라인견적문의',
        description: 'Inquiry',
        value: 'inquiry',
        to: '/customer/inquiry',
    },
    {
        title: '공지사항',
        description: 'notice',
        value: 'notice',
        to: '/customer/notice',
    },
    {
        title: 'News',
        description: 'News',
        value: 'News',
        to: '/customer/News',
    },
    {
        title: 'Q&A',
        description: 'Q&A',
        value: 'Q&A',
        to: '/customer/Q&A',
    },
];
