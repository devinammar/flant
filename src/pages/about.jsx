import { Topbar } from '../components/topbar'
import { Widebox1 } from '../components/widebox1'

export const About = () => {
    return (
        <div className='grid'>
        <Topbar />
        <Widebox1 background="color" search="off" />
        </div>
    );
};