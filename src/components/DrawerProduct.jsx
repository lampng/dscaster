import { Dialog } from '@headlessui/react';
import { useState, useEffect } from 'react';
import TableCasterSpecification from './TableCasterSpecification';
import { Typography } from '@material-tailwind/react';
function DrawerProduct({ image, id, des, label, labelDesc }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(image);
    const [selectedType, setSelectedType] = useState('');

    useEffect(() => {
        if (des && des.imageProduct && des.imageProduct.length > 0) {
            setSelectedImage(des.imageProduct[0].image);
            setSelectedType(des.imageProduct[0].type);
        }
    }, [des]);
    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
        if (des && des.imageProduct && des.imageProduct.length > 0) {
            setSelectedImage(des.imageProduct[0].image);
            setSelectedType(des.imageProduct[0].type);
        } else {
            setSelectedImage(image);
            setSelectedType('');
        }
    }

    const handleImageClick = (img, type) => {
        setSelectedImage(img);
        setSelectedType(type);
    };

    return (
        <>
            <img onClick={openModal} className="h-[250px] 3xl:h-[250px] 2xl:h-[250px] xl:h-[250px] lg:h-[250px] md:h-[150px] sm:h-[150px] w-full object-contain cursor-pointer" src={image} alt="" />
            <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
                {/* The backdrop, rendered as a fixed sibling to the panel container */}
                <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

                {/* Full-screen scrollable container */}
                <div className="fixed inset-0 w-screen overflow-y-auto">
                    {/* Container to center the panel */}
                    <div className="flex min-h-full items-center justify-center p-4">
                        {/* The actual dialog panel */}
                        <Dialog.Panel className="mx-auto w-full max-w-5xl rounded bg-white p-6 shadow-xl transition-all">
                            <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                <div>
                                    <div className="flex justify-between">
                                        <div className="flex items-center gap-1 my-2">
                                            <div className="w-5 h-5 rounded-full bg-white border-4 border-red-900" />
                                            <Typography variant="h6" className="text-black gap-2">
                                                {label}
                                                <span className=" pl-1 font-black text-xs text-gray-600">
                                                    {labelDesc}
                                                </span>
                                            </Typography>
                                        </div>
                                        <div>
                                            <button onClick={closeModal}>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    class="size-6"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                                                        clip-rule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex gap-2 relative">
                                        <div className="absolute select-none bottom-[3px] w-[7px] h-[14px] bg-black"></div>
                                        <div className="text-[15px] pl-4 text-red-900 font-bold">{id}</div>
                                    </div>
                                </div>
                            </Dialog.Title>
                            <div className="mt-4 flex select-none">
                                <div className="flex-1 flex flex-col justify-center items-center">
                                    <img
                                        src={selectedImage}
                                        alt="Selected"
                                        className="w-[470px] h-[400px] object-contain border select-none"
                                    />
                                    <p className="mt-2 text-center text-gray-700">{selectedType}</p>
                                </div>
                                <div className="grid grid-cols-2 content-start items-start gap-2 overflow-y-auto h-[400px]">
                                    {des &&
                                        des.imageProduct &&
                                        des.imageProduct.map((item, index) => (
                                            <img
                                                key={index}
                                                src={item.image}
                                                alt={`Des image ${index + 1}`}
                                                className={`w-[100px] h-[100px] object-contain cursor-pointer border  ${
                                                    selectedImage === item.image ? 'border-black' : 'hover:border-black'
                                                }`}
                                                onClick={() => handleImageClick(item.image, item.type)}
                                            />
                                        ))}
                                </div>
                            </div>
                            {/* //! Additional Information */}
                            <div className="mt-4">
                                <div className="flex gap-2 relative mt-14 mb-4">
                                    <div className="absolute select-none bottom-[3px] w-[7px] h-[14px] bg-red-900"></div>
                                    <div className="text-[15px] pl-4 text-black font-bold">캐스터사양</div>
                                </div>

                                <TableCasterSpecification
                                    headers={des.CasterSpecification.headers}
                                    rows={des.CasterSpecification.rows.map((row) => {
                                        if (row.length === des.CasterSpecification.headers.length - 1) {
                                            return [...row, des.CasterSpecification.commonPCS];
                                        }
                                        return row;
                                    })}
                                    commonPCS={des.CasterSpecification.commonPCS}
                                />
                            </div>
                            {/* //! Spec Image */}
                            {des.spec && (
                                <div className="mt-4">
                                    <div className="flex gap-2 relative mt-10 mb-4">
                                        <div className="absolute select-none bottom-[3px] w-[7px] h-[14px] bg-red-900"></div>
                                        <div className="text-[15px] pl-4 text-black font-bold">제원</div>
                                    </div>
                                    {des &&
                                        des.spec &&
                                        des.spec.map((item, index) => (
                                            <img
                                                key={index}
                                                src={item.image}
                                                alt={`spec image ${index + 1}`}
                                                className={`max-w-[700px] h-auto object-contain`}
                                            />
                                        ))}
                                </div>
                            )}

                            {/* //! Test Report Image */}
                            {des.testReport && (
                                <div className="mt-4">
                                    <div className="flex gap-2 relative mt-10 mb-4">
                                        <div className="absolute select-none bottom-[3px] w-[7px] h-[14px] bg-red-900"></div>
                                        <div className="text-[15px] pl-4 text-black font-bold">시험성적서</div>
                                    </div>
                                    <div className="flex gap-2 flex-wrap justify-start">
                                        {des &&
                                            des.testReport &&
                                            des.testReport.map((item, index) => (
                                                <img
                                                    key={index}
                                                    src={item.image}
                                                    alt={`testReport image ${index + 1}`}
                                                    className={`h-[400px] object-contain cursor-pointer border `}
                                                />
                                            ))}
                                    </div>
                                </div>
                            )}
                        </Dialog.Panel>
                    </div>
                </div>
            </Dialog>
        </>
    );
}

export default DrawerProduct;
