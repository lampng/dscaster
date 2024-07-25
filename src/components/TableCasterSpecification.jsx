import { useMotionValue, motion, useSpring, useTransform } from 'framer-motion';
import React, { useRef, useState } from 'react';
import Link from './Link';

function TableCasterSpecification({ headers, rows, commonPCS }) {
    const pcsIndex = headers.findIndex((header) => header.unit === 'PCS');

    const lineBreakColumns = ['MODEL', '허용하중', 'BOLT&NUT', '하부', '표면처리'];

    const shouldLineBreak = (headerText) => lineBreakColumns.includes(headerText);
    return (
        <div className="relative">
            <table className="min-w-full divide-y divide-gray-200 border border-t-2 border-t-red-900">
                <thead className="bg-gray-100">
                    <tr>
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
