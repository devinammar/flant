import "./searchbar.css"

export const Searchbar = () => {
    return (
        <div id="searchbarcontainer">
            <input type="text" placeholder="Search..." id="searchbar"/>
            <button id="buttonsearch">
                <img src="/public/searchicon3.png" />
            </button>
        </div>
    )
}