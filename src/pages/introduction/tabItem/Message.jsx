import { Typography } from '@material-tailwind/react';
import React from 'react';

function Message() {
    return (
        <div className="3xl:pt-0 2xl:pt-0 xl:pt-0 lg:pt-0 md:pt-6 sm:pt-4">
            <img src="../introduction/message/sub01_img.jpg" alt="" className="3xl:h-[300px] 2xl:h-[300px] xl:h-[300px] lg:h-[300px] w-full select-none md:h-[150px] sm:h-[100px]" />
            <div className="*:pt-4">
                <Typography variant="paragraph" className="!text-sm">
                    1989년 경량용 캐스터 제조업으로 창립되어, 오늘날 최고의 기술로 연구 개발에 힘쓴 결과 산업용 캐스터의
                    최고품질 전문 브랜드로 캐스터 시장을 이끌고 있습니다.
                </Typography>
                <Typography variant="paragraph" className="!text-sm">
                    철저한 품질관리, 정확한 물품배송, 경쟁력 있는 가격을 바탕으로 최선을 다하고 있으며, 더 나아가
                    끊임없는 연구 개발로 고객 여러분의 이상적인 파트너가 되겠습니다.
                </Typography>
                <Typography variant="h6">“ 대신캐스터는 고객의 만족을 최우선시 합니다."</Typography>
            </div>
        </div>
    );
}

export default Message;
