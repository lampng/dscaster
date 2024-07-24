import React from 'react';

function TableCasterSpecification({ headers, rows, commonPCS }) {
    const pcsIndex = headers.findIndex((header) => header.unit === 'PCS');

    const lineBreakColumns = ['MODEL', '허용하중', 'BOLT&NUT', '하부', '표면처리'];

    const shouldLineBreak = (headerText) => lineBreakColumns.includes(headerText);
    return (
        <table className="min-w-full divide-y divide-gray-200 border border-t-2 border-t-red-900">
            <thead className="bg-gray-100">
                <tr className=''>
                    {headers.map((header, index) => (
                        <th
                            key={index}
                            className="px-2 py-1 text-center text-[12px] font-bold text-gray-800 border relative group"
                        >
                            {typeof header === 'string' ? (
                                header
                            ) : (
                                <div className="select-none">
                                    <div className="flex flex-col items-center">
                                        <span>{header.text}</span>
                                        {header.unit && <span className="text-xs">{header.unit}</span>}
                                    </div>

                                    <div className="absolute invisible top-[-4.5rem] -translate-x-1/2 left-1/2 group-hover:top-[-5rem] group-hover:visible transition-all ease-in-out duration-75 select-none">
                                        {header.image && (
                                            <img
                                                src={header.image}
                                                alt=""
                                                className="w-16 h-16 border-2 object-fill border-black"
                                            />
                                        )}
                                    </div>
                                </div>
                            )}
                        </th>
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
    );
}

export default TableCasterSpecification;
