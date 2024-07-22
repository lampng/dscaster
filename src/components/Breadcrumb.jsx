import { Breadcrumbs } from '@material-tailwind/react';

function Breadcrumb({ Site, Item }) {
    return (
        <Breadcrumbs fullWidth className="text-black p-0 bg-white">
            <a href="/" className="opacity-60 text-black hover:text-red-900">
                Home
            </a>
            <a href="#" className="opacity-60 text-black hover:text-red-900">
                {Site}
            </a>
            <a className="text-black hover:text-red-900 select-none">{Item}</a>
        </Breadcrumbs>
    );
}

export default Breadcrumb;
