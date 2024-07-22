import { Typography } from '@material-tailwind/react';
function Footer() {
    const res3xl= `3xl:px-[425px]`
    const res2xl= `2xl:px-[225px]`
    const resxl = `xl:px-[125px] xl:py-8`;
    const reslg = `lg:px-[5px]`
    const resmd = `md:px-[5px]`
    const ressm  = `sm:px-[5px]`
    return (
        <div className={`px-[425px] flex py-12 bg-gray-900 bg-opacity-10 ${res3xl} ${res2xl} ${resxl} ${reslg} ${resmd} ${ressm} sm:py-5`}>
            <div className="w-1/5 flex items-center xl:w-1/4 sm:justify-center">
                <img src='/src/assets/Footer/footer_logo.png' alt="" className="select-none" />
                <Typography variant="h5" className="opacity-60 font-bold pl-2 sm:hidden">
                    (주)대신캐스터
                </Typography>
            </div>
            <div className="w-4/5 flex flex-wrap gap-1 px-28 xl:w-3/4 xl:px-20 md:px-9 sm:px-0 content-center">
                <Typography className="text-xs font-bold opacity-55 select-none">주소</Typography>
                <Typography className="text-xs opacity-65 select-none">
                    경기도 파주시 법원읍 법원2산단로 38(법원읍 대능리 482)
                </Typography>
                <Typography className="text-xs font-bold opacity-55 select-none">전화_</Typography>
                <Typography className="text-xs opacity-65">031.943.4388~9</Typography>
                <Typography className="text-xs font-bold opacity-55 select-none">팩스_</Typography>
                <Typography className="text-xs opacity-65">031.946.4390</Typography>
                <Typography className="text-xs opacity-65 select-none">COPYRIGHT(C) 2016</Typography>
                <Typography className="text-xs font-bold select-none">Daesin Caster</Typography>
                <Typography className="text-xs opacity-65 select-none">ALL RIGHTS RESERVED.</Typography>
            </div>
            <div></div>
        </div>
    );
}
export default Footer;
