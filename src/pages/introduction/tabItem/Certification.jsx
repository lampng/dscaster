import React from 'react'
import ImgWithCaption from '../../../components/ImgWithCaption'
function Certification() {
  return (
    <div className="grid 3xl:grid-cols-3 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 justify-center gap-20 md:mt-3 sm:mt-3">
            <ImgWithCaption image={'../introduction/certification/certifi_s_01.jpg'} caption={'CE마크'} />
            <ImgWithCaption image={'../introduction/certification/certifi_s_02.jpg'} caption={'ISO 9001 영문'} />
            <ImgWithCaption image={'../introduction/certification/certifi_s_03.jpg'} caption={'ISO 9001'} />
            <ImgWithCaption image={'../introduction/certification/certifi_s_04.jpg'} caption={'ISO 14001 영문'} />
            <ImgWithCaption image={'../introduction/certification/certifi_s_05.jpg'} caption={'ISO 14001'} />
            <ImgWithCaption image={'../introduction/certification/certifi_s_06.jpg'} caption={'디자인등록증1'} />
            <ImgWithCaption image={'../introduction/certification/certifi_s_07.jpg'} caption={'디자인등록증2'} />
            <ImgWithCaption image={'../introduction/certification/certifi_s_08.jpg'} caption={'디자인등록증3'} />
            <ImgWithCaption image={'../introduction/certification/certifi_s_09.jpg'} caption={'벤처기업확인서'} />
            <ImgWithCaption image={'../introduction/certification/certifi_s_10.jpg'} caption={'연구전담부서'} />
            <ImgWithCaption image={'../introduction/certification/certifi_s_11.jpg'} caption={'특허증'} />
        </div>
  )
}

export default Certification