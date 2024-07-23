import { Typography } from '@material-tailwind/react';
function ImgWithCaption({ image, caption }) {
    return (
        <div className='select-none'>
            <figure className="h-auto  mx-auto w-max shadow-xl">
                <img
                    className="3xl:w-[200px] 2xl::w-[200px] xl::w-[200px] lg::w-[200px] md:w-[150px] sm:w-[150px] object-cover object-center bg-center bg-cover select-none"
                    src={image}
                    alt="nature image"
                />
            </figure>
            <Typography as="caption" variant="small" className="mt-2 text-center font-normal select-none">
                {caption}
            </Typography>
        </div>
    );
}

export default ImgWithCaption;
