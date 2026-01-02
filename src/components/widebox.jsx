import './widebox.css'

export const Widebox = ({ widepic }) => {
    return (
        <div className="containerwidebox">
            <img id="wideboximage" src={ widepic } alt="Banner" />
        </div>
    )
}