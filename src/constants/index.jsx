// ! Introduction
import Message from '/src/pages/introduction/tabItem/Message';
import History from '/src/pages/introduction/tabItem/History'
import Certification from '/src/pages/introduction/tabItem/Certification'
import Location from '/src/pages/introduction/tabItem/Location'
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
// ! Product
export const ProductListMenuItems = [
  {
      title: '경하중용캐스터',
      description: 'Light-Duty Caster',
      value: 'Light-Duty',
      to: '/products/Light-Duty',
  },
  {
      title: '중간하중용 캐스터',
      description: 'Medium-Duty Caster',
      value: 'Medium-Duty',
      to: '/products/Medium-Duty',
  },
  {
      title: '중하중용 캐스터',
      description: 'Heavy-Duty Caster',
      value: 'Heavy-Duty',
      to: '/products/Heavy-Duty',
  },
  {
      title: '스테인리스 캐스터',
      description: 'Super Heavy-Duty Caster',
      value: 'Super-Heavy-Duty',
      to: '/products/Super-Heavy-Duty',
  },
  {
      title: '고하중용 캐스터',
      description: 'Stainless Steel Caster',
      value: 'StainlessiSteel',
      to: '/products/StainlessiSteel',
  },
  {
      title: '내열성/내한성 캐스터',
      description: 'Heat-Resisting/Low Temperature Caster',
      value: 'Heat-Resisting',
      to: '/products/Heat-Resisting',
  },
  {
      title: '의료용 캐스터',
      description: 'Medical Equipment Caster',
      value: 'Medical-Equipment',
      to: '/products/Medical-Equipment',
  },
  {
      title: '저소음 캐스터',
      description: 'Low Noise Caster',
      value: 'Low-Noise',
      to: '/products/Low-Noise',
  },
  {
      title: '특수 목적용 캐스터',
      description: 'Special Caster',
      value: 'Special-Caster',
      to: '/products/Special-Caster',
  },
  {
      title: '높낮이조절 캐스터',
      description: 'Leveling Caster',
      value: 'Leveling-Caster',
      to: '/products/Leveling-Caster',
  },
  {
      title: '높낮이 조절자',
      description: 'Leveling Foot',
      value: 'Leveling-Foot',
      to: '/products/Leveling-Foot',
  },
  {
      title: '운반 기구',
      description: 'Trolley',
      to: '/products/Trolley',
      value: 'Trolley',
  },
  {
      title: '기타',
      description: 'etc',
      to: '/products/etc',
      value: 'etc',
  },
];
// ! Customer
export const CustomerListMenuItems = [
  {
      title: '온라인견적문의',
      description: 'Inquiry',
      value: 'inquiry',
      to: '/customer-center/inquiry',
  },
  {
      title: '공지사항',
      description: 'notice',
      value: 'notice',
      to: '/customer-center/notice',
  },
  {
      title: 'News',
      description: 'News',
      value: 'News',
      to: '/customer-center/News',
  },
  {
      title: 'Q&A',
      description: 'Q&A',
      value: 'Q&A',
      to: '/customer-center/Q&A',
  },
];

// ! Item Introduction
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
// ! Product Introduction
