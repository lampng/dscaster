import { Card, Typography } from '@material-tailwind/react';
function TableHistory() {
    const TABLE_ROWS = [
        { YEAR: '1989', TEXT: '대신 공업사 설립' },
        { YEAR: '1990', TEXT: '경기도 고양시 신축 확장 이전' },
        { YEAR: '2003', TEXT: '대신캐스터로 상호 변경' },
        { YEAR: '2005', TEXT: 'ISO 9001 / 14001 인증 획득' },
        { YEAR: '2008', TEXT: '경기도 파주시 신축 확장 이전' },
        { YEAR: '2009', TEXT: 'CE MARK 획득' },
        { YEAR: '2011', TEXT: '(주) 대신캐스터 법인 설립베트남 지사 설립' },
        { YEAR: '2012', TEXT: '기술혁신형 중소기업(INNO-BIZ) 인증획득연구개발전담부서 인가' },
        { YEAR: '2014', TEXT: '(주) 대신캐스터 제2공장(휠 전문제조) 설립' },
    ];
    return (
        <Card className="bg-clip-border rounded-none bg-white text-gray-700 shadow-none">
            <table className="w-full table-auto text-left">
                <tbody>
                    {TABLE_ROWS.map(({ YEAR, TEXT }, index) => {
                        const isLast = index === TABLE_ROWS.length - 1;
                        const classes = isLast ? 'p-2  select-none' : 'p-2 border-b border-blue-red-50  select-none';
                        const classess = isLast ? 'p-2  select-none' : 'p-2 border-b border-red-700  select-none';

                        return (
                            <tr key={YEAR}>
                                <td className={classess}>
                                    <Typography color="blue-gray" className="text-2xl select-none">
                                        {YEAR}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Typography variant="small" color="blue-gray" className="font-normal !text-wrap">
                                        {TEXT}
                                    </Typography>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </Card>
    );
}

export default TableHistory;
