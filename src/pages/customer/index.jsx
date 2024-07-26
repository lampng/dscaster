import React, { lazy, Suspense } from 'react';
const Tabs = lazy(() => import('../../components/Tabs/Tabs'));
import { TabCustomer } from '../../constants';

function index() {
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
                    data={TabCustomer}
                    dfTab={TabCustomer[0].value}
                    site="고객센터"
                    siteDesc="Customer Center"
                    href="customer"
                    paramsId="customerId"
                />
            </Suspense>
        </body>
  )
}

export default index