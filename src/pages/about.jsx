import { Topbar } from '../components/topbar'
import { Widebox1 } from '../components/widebox1'
import { Sidebar } from '../components/sidebar'

export const About = () => {
    return (
        <div className='grid'>
        <Topbar />
        <Widebox1 background="color1" search="off" cardsearch="off" appearance="off"/>
        <Sidebar />
        </div>
    );
};