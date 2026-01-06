import './content1.css'

export const Content1 = ({image, icon, tittle, caption }) => {
    return (
        <div id="containercontent1">
            <img src={ image } alt="image" className="imagecontent1"/>
            <img src={ icon } alt="icon" className="iconcontent1"/>
            <h2 className="tittlecontent1">{tittle}</h2>
            <p className="captioncontent1">{caption}</p>
        </div>
    )
}