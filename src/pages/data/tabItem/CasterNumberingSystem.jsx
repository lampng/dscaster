import React from 'react';
import { Typography } from '@material-tailwind/react';

import {CasterNumberingSystem_Data} from '/src/constants/index'
function CasterNumberingSystem() {
  return (
    <div className="select-none">
            <div
                alt=""
                className="bg-[url('../CasterData/sub02_img04.png')] bg-no-repeat bg-auto object-contain bg-center h-[160px]  border-4 rounded-lg"
            />
            <div className="flex items-center gap-1 my-2">
                <div className="w-5 h-5 rounded-full bg-white border-4 border-red-900" />
                <Typography variant="h6" className="text-black">
                    캐스터 휠 종류_Caster Wheels
                </Typography>
            </div>
            <div className="">
                <table className="w-full">
                    <tbody className="grid grid-cols-2 w-full row-auto border-t-2 border-t-red-900">
                        {CasterNumberingSystem_Data.map(({ image, CS, CS_des_eng, CS_des_kor }, index) => {
                            const isLast = index === CasterNumberingSystem_Data.length - 1;
                            const isEven = index % 2 === 0;
                            let classes = 'p-2';

                            if (isLast) {
                                if (isEven) {
                                    classes = 'p-2 border-l border-b border-r'; // Even (last item)
                                } else {
                                    classes = 'p-2 border-r border-b'; // Odd (last item)
                                }
                            } else {
                                if (isEven) {
                                    classes = 'p-2 border-l border-b border-r'; // Even
                                } else {
                                    classes = 'p-2 border-r border-b'; // Odd
                                }
                            }

                            return (
                                <tr className="w-full flex">
                                    <img src={image} alt="" className={`${classes} w-2/5 object-contain`} />
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className={`${classes} w-1/5 bg-blue-gray-50/50 font-normal content-center text-center`}
                                    >
                                        {CS}
                                    </Typography>
                                    <td className={`${classes} w-2/5 content-center`}>
                                        <Typography color="blue-gray" className="font-normal text-[12px] w-full">
                                            {CS_des_eng}
                                        </Typography>
                                        <Typography color="blue-gray" className="font-normal text-[12px] w-full">
                                            {CS_des_kor}
                                        </Typography>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
  )
}

export default CasterNumberingSystem