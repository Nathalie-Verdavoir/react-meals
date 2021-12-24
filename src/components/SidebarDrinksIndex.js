import { Link } from "react-router-dom";

const SidebarDrinksIndex = () => {
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','y','z'];
    const listAlphaWithLinks = () => {
        let list = [];
        alphabet.forEach(letter => {
            list.push(<span key={`IndexOfDrinks/${letter}`}><Link to={`/drinks/${letter}`}>{letter.toUpperCase()}</Link></span>)
            list.push(` - `)
        })
        return list.slice(0,-1);
    }
    return (
        <>
            <aside className="drinks">
                <h4>Index of drinks</h4>
                <>
                    {listAlphaWithLinks()}
                </>
            </aside>
        </>    
    )
}

export default SidebarDrinksIndex;