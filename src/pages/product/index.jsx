import React, { lazy, Suspense } from 'react';
const Tabs = lazy(() => import('../../components/Tabs/Tabs'));
import { TabProduct } from '../../constants';

function Product() {
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
                    data={TabProduct}
                    dfTab={TabProduct[0].value}
                    site="회사소개"
                    siteDesc="Products"
                    href="product"
                    paramsId="productId"
                />
            </Suspense>
        </body>
    );
}
export default Product;
