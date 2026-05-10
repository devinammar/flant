import { Area1 } from '../components/home/area1'
import { Area2 } from '../components/home/area2'
import { Area3 } from '../components/home/area3'
import { Area4 } from '../components/home/area4'
import { Area5 } from '../components/home/area5'
import { Sidebar } from '../components/sidebar'

export const Home = () => {
    return (
        <div className='grid'>
        <Area1 />
        <Area2 />
        <Area3 />
        <Area4 />
        <Area5 />
        <Sidebar />
        </div>
    );
};