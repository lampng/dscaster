import { useMotionValue, motion, useSpring, useTransform } from 'framer-motion';
import React, { useRef, useState } from 'react';

function TableCasterSpecification({ headers, rows, commonPCS }) {
    const pcsIndex = headers.findIndex((header) => header.unit === 'PCS');

    const lineBreakColumns = ['MODEL', '허용하중', 'BOLT&NUT', '하부', '표면처리'];

    const shouldLineBreak = (headerText) => lineBreakColumns.includes(headerText);

    const ref = useRef(null);

    const [hoveredHeader, setHoveredHeader] = useState(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const top = useTransform(mouseYSpring, (value) => `${value * 100 + 50}%`);
    const left = useTransform(mouseXSpring, (value) => `${value * 100 + 50}%`);

    const handleMouseMove = (e) => {
        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    return (
        <div ref={ref} onMouseMove={handleMouseMove} className="relative">
            <table className="min-w-full divide-y divide-gray-200 border border-t-2 border-t-red-900">
                <thead className="bg-gray-100">
                    <tr>
                        {headers.map((header, index) => (
                            <motion.th
                                key={index}
                                onMouseEnter={() => setHoveredHeader(index)}
                                onMouseLeave={() => setHoveredHeader(null)}
                                className="group relative px-2 py-1 text-center text-[12px] font-bold text-gray-800 border"
                            >
                                {typeof header === 'string' ? (
                                    header
                                ) : (
                                    <div className="select-none">
                                        <div className="flex flex-col items-center">
                                            <span>{header.text}</span>
                                            {header.unit && <span className="text-xs">{header.unit}</span>}
                                        </div>

                                        {hoveredHeader === index && header.image && (
                                            <motion.div
                                                className="fixed pointer-events-none"
                                                initial={{ opacity: 0 }}
                                                animate={{
                                                    opacity: 1,
                                                    translateX: '50%',
                                                    translateY: '50%',
                                                    width: 500,
                                                    height: 500,
                                                }}
                                                style={{
                                                    top,
                                                    left,
                                                    translateX: '50%',
                                                    translateY: '50%',
                                                }}
                                                transition={{ duration: 0 }}
                                            >
                                                <motion.img
                                                    src={header.image}
                                                    className="absolute z-10 border-2 object-cover border-black"
                                                    alt={header.text}
                                                />
                                            </motion.div>
                                        )}
                                    </div>
                                )}
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
