import { Area1 } from '../components/home/area1'
import { Area2 } from '../components/home/area2'
import { Area4 } from '../components/home/area4'

export const Home = () => {
    return (
        <div className='grid'>
        <Area1 />
        <Area2 />
        <Area4 />
        </div>
    );
};