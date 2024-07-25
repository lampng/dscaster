import { useMotionValue, motion, useSpring, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
// import Link from './Link';
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
        const mouseY = e.clientY - rect.top;

        x.set(mouseX);
        y.set(mouseY - 70);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            initial="initial"
            whileHover="whileHover"
            className="group flex items-center justify-center *:h-full"
        >
            <div className="flex flex-col items-center">
                <motion.span>{header.text}</motion.span>
                {header.unit && <motion.span className="text-xs">{header.unit}</motion.span>}
            </div>
            {header.image && (
                <motion.div className="w-[100px] h-[50px] absolute pointer-events-none">
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
                            initial: { scale: 0, rotate: "0deg" },
                            whileHover: { scale: 1, rotate: '0deg' },
                        }}
                        transition={{ duration: 0 }}
                        src={header.image}
                        
                        className="absolute z-0 object-cover border-2 border-black"
                        alt={``}
                    />
                </motion.div>
            )}
        </motion.div>
    );
}
function TableCasterSpecification({ headers, rows, commonPCS }) {
    const pcsIndex = headers.findIndex((header) => header.unit === 'PCS');

    const lineBreakColumns = ['MODEL', '허용하중', 'BOLT&NUT', '하부', '표면처리'];

    const shouldLineBreak = (headerText) => lineBreakColumns.includes(headerText);
    return (
        <div className="relative">
            <table className="min-w-full divide-y divide-gray-200 border border-t-2 border-t-red-900">
                <thead className="bg-gray-100">
                    <tr className=''>
                        {headers.map((header, index) => (
                            <motion.th
                                key={index}
                                className="group relative px-2 py-1 text-center text-[12px] font-bold text-gray-800 border"
                            >
                                {typeof header === 'string' ? header : <Link header={header} />}
                            </motion.th>
                        ))}
                    </tr>
                </thead>
                <tbody className="bg-white divide-y text-[12px] divide-gray-200 text-center">
                    {rows.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, cellIndex) => {
                                const headerText = headers[cellIndex]?.text;
                                if (cellIndex === pcsIndex) {
                                    if (commonPCS) {
                                        const formattedPCS = commonPCS.split(' ').map((part, index) => (
                                            <React.Fragment key={index}>
                                                {index > 0 && <br />} {part}
                                            </React.Fragment>
                                        ));
                                        return rowIndex === 0 ? (
                                            <td key={cellIndex} className="border px-2 py-2" rowSpan={rows.length}>
                                                {formattedPCS}
                                            </td>
                                        ) : null;
                                    } else {
                                        if (typeof cell === 'string' && cell.includes(' ')) {
                                            const parts = cell.split(' ');
                                            return (
                                                <td key={cellIndex} className="border px-2 py-2">
                                                    {parts.map((part, index) => (
                                                        <React.Fragment key={index}>
                                                            {index > 0 && <br />} {part.trim()}
                                                        </React.Fragment>
                                                    ))}
                                                </td>
                                            );
                                        } else {
                                            return (
                                                <td key={cellIndex} className="border px-2 py-2">
                                                    {cell}
                                                </td>
                                            );
                                        }
                                    }
                                } else {
                                    // Xử lý xuống dòng cho các cột cần thiết
                                    if (shouldLineBreak(headerText) && typeof cell === 'string' && cell.includes(' ')) {
                                        const parts = cell.split(' ');
                                        return (
                                            <td key={cellIndex} className="border px-2 py-2">
                                                {parts.map((part, index) => (
                                                    <React.Fragment key={index}>
                                                        {index > 0 && <br />} {part.trim()}
                                                    </React.Fragment>
                                                ))}
                                            </td>
                                        );
                                    } else {
                                        return (
                                            <td key={cellIndex} className="border px-2 py-2">
                                                {cell}
                                            </td>
                                        );
                                    }
                                }
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TableCasterSpecification;
