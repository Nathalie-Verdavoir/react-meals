const Header = ({categories}) => {
    categories=categories.slice(0,3);
return (
    <header>
        <ul>
        {categories ?
            <> 
            {categories.map(category => {
                return(
                    <li key={category.idCategory}>
                        <p>{category.strCategory}</p>
                    </li>
                )
            })
            } 
            </>
            : 
            (
                <p>pas de categories</p>
            )
        }    
        </ul>
    </header>
)
}

export default Header;