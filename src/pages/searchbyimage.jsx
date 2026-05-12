import { Topbar } from '../components/topbar'
import { Widebox1 } from '../components/widebox1'
import { Sidebar } from '../components/sidebar'

export const Searchbyimage = () => {
    return (
        <div className='gridsearchbyimage'>
        <Topbar />
        <Widebox1 background="color2" search="off" appearance="on" configuration="two"/>
        <Sidebar />
        </div>
    );
};