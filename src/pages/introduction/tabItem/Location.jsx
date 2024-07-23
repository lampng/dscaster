import { Typography } from '@material-tailwind/react';

function Location() {
    return (
        <div className="">
            <div className="flex items-center gap-1">
                <div className="w-5 h-5 rounded-full bg-white border-4 border-red-900" />
                <Typography variant="h6" className="text-black">
                    (주)대신캐스터
                </Typography>
            </div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1487454235034!2d106.60428187469752!3d10.799917489350316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752bf35e56a44b%3A0x3f237fab4bcf854a!2zMTY0IMSQLiAyNi8zLCBCw6xuaCBIxrBuZyBIb8OgLCBCw6xuaCBUw6JuLCBI4buTIENow60gTWluaCwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1720936824282!5m2!1sen!2s"
                width={600}
                height={450}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="my-3 3xl:w-[600px] 2xl:w-[600px] xl:w-[600px] lg:w-full md:w-full sm:w-full"
            />
            <li className="font-bold">Địa chỉ: 164 Đ. 26/3, Bình Hưng Hoà, Bình Tân, Hồ Chí Minh</li>
        </div>
    );
}

export default Location;
