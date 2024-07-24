import React from 'react';
import { Typography } from '@material-tailwind/react';
import DrawerProduct from '/src/components/DrawerProduct';
function LowNoise_Caster({ label, labelDesc, DATA }) {
  return (
<div>
            <div className="flex items-center gap-1 my-2">
                <div className="w-5 h-5 rounded-full bg-white border-4 border-red-900" />
                <Typography variant="h6" className="text-black">
                    {label} <span className="font-black text-xs text-gray-600">{labelDesc}</span>
                </Typography>
            </div>
            <div className="w-full justify-start grid 3xl:grid-cols-3 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2">
                {DATA.map(({ image, id, des }) => {
                    return (
                        <div className="p-4">
                            <div className="w-full border">
                                <DrawerProduct image={image} id={id} des={des} label={label} labelDesc={labelDesc} />
                            </div>
                            <div className="bg-gray-100 py-5 px-4 text-[12px] h-[100px]  font-bold">{id}</div>
                        </div>
                    );
                })}
            </div>
        </div>  )
}

export default LowNoise_Caster