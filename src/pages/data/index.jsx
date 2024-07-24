import React, { lazy, Suspense } from 'react';
const Tabs = lazy(() => import('../../components/Tabs/Tabs'));
import { TabData } from '../../constants';
function Data() {
    const res3xl = `3xl:px-[425px]`;
    const res2xl = `2xl:px-[225px]`;
    const resxl = `xl:px-[125px]`;
    const reslg = `lg:px-[0px]`;
    const resmd = `md:px-[0px]`;
    const ressm = `sm:px-[0px]`;
    return (
        <body className={`flex h-auto ${res3xl} ${res2xl} ${resxl} ${reslg} ${resmd} ${ressm}`}>
            <Suspense fallback={<div>Loading...</div>}>
                <Tabs
                    data={TabData}
                    dfTab={TabData[0].value}
                    site="캐스터자료실"
                    siteDesc="Caster Data"
                    href="data"
                    paramsId="dataId"
                />
            </Suspense>
        </body>
    );
}

export default Data;
