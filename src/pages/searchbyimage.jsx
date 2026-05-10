import { Topbar } from '../components/topbar'
import { Widebox1 } from '../components/widebox1'
import { Sidebar } from '../components/sidebar'

export const Searchbyimage = () => {
    return (
        <div className='grid'>
        <Topbar />
        <Widebox1 background="color2" search="off" appearance="on"/>
        <Sidebar />
        </div>
    );
};