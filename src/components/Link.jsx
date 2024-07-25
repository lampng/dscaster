import { useMotionValue, motion, useSpring, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
function Link({ header }) {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const top = useTransform(mouseYSpring, (value) => `${value}px`);
    const left = useTransform(mouseXSpring, (value) => `${value}px`);

    const handleMouseMove = (e) => {
        const rect = ref.current.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top - 70;

        x.set(mouseX);
        y.set(mouseY);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            initial="initial"
            whileHover="whileHover"
            className="group flex items-center  justify-center"
        >
            <div className="flex flex-col items-center">
                <motion.span>{header.text}</motion.span>
                {header.unit && <motion.span className="text-xs">{header.unit}</motion.span>}
            </div>
            {header.image && (
                <div className="w-[100px] h-[50px] absolute">
                    <motion.img
                        style={{
                            top,
                            left,
                            translateX: '-50%',
                            translateY: '-50%',
                        }}
                        width={200}
                        height={200}
                        variants={{
                            whileHover: { scale: 1, rotate: '0deg' },
                        }}
                        transition={{ duration: 0 }}
                        src={header.image}
                        className="absolute z-0 object-cover border-2 border-black"
                        alt={`${header.text} image`}
                    />
                </div>
            )}
        </motion.div>
    );
}

export default Link;
