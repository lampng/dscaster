import React from 'react';
import TabProduct from '../../components/Tabs/TabProduct';
import { TabData } from '../../constants';

function index() {
    const res3xl = `3xl:px-[425px]`;
    const res2xl = `2xl:px-[225px]`;
    const resxl = `xl:px-[125px]`;
    const reslg = `lg:px-[0px]`;
    const resmd = `md:px-[0px]`;
    const ressm = `sm:px-[0px]`;
    return (
        <body className={`flex h-auto ${res3xl} ${res2xl} ${resxl} ${reslg} ${resmd} ${ressm}`}>
            <TabProduct
                data={TabData}
                dfTab={TabData[0].value}
                site="캐스터자료실"
                siteDesc="Caster Data"
                href="data"
                paramsId="dataId"
            />
        </body>
    );
}

export default index;
