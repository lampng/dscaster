import TabProduct from '../../components/Tabs/TabProduct';
import { TabIntroduction } from '../../constants';
function introduction() {
    const res3xl = `3xl:px-[425px]`;
    const res2xl = `2xl:px-[225px]`;
    const resxl = `xl:px-[125px]`;
    const reslg = `lg:px-[0px]`;
    const resmd = `md:px-[0px]`;
    const ressm = `sm:px-[0px]`;
    return (
        <body className={`flex h-auto ${res3xl} ${res2xl} ${resxl} ${reslg} ${resmd} ${ressm}`}>
            <TabProduct
                data={TabIntroduction}
                dfTab={TabIntroduction[0].value}
                site="회사소개"
                siteDesc="Company Introduction"
                href="introduction"
                paramsId="introductionId"
            />
        </body>
    );
}
export default introduction;
