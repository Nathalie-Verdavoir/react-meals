import { Link } from "react-router-dom";

const SidebarMeals = () => {
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','y','z'];
    const listAlphaWithLinks = () => {
        let list = [];
        alphabet.forEach(letter => {
            list.push(<span key={`IndexOfMeals/${letter}`}><Link to={`/meals/${letter}`}>{letter.toUpperCase()}</Link></span>)
            list.push(<i> - </i>)
        })
        return list.slice(0,-1);
    }
    return (
        <>
            <aside className="meals">
                <h3>Index of meals</h3>
                <>
                    {listAlphaWithLinks()}
                </>
            </aside>
        </>    
    )
}

export default SidebarMeals;