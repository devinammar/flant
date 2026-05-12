import { Topbar } from '../components/topbar'
import { Widebox1 } from '../components/widebox1'
import { Sidebar } from '../components/sidebar'

export const Search = () => {
    return (
        <div className='grid'>
        <Topbar />
        <Widebox1 background="color1" search="on" appearance="off" configuration="one"/>
        <Sidebar />
        </div>
    );
};