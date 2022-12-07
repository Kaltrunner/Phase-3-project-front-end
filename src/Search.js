

function Search() {

    <div className="app-searchbar" >
        <div className="app-searchbar-header" >
        <button className="search-button" >Home</button>
            <h1>Search</h1>
        <button >Search</button> 
       
        </div>
        <div className="app-searchbar-edit" >
                <input 
                type="search"
                id="search" 
                placeholder="Search..." 
                // value={activeNote.title} 
                // onChange={(e) => onEditField("title", e.target.value)} 
                autoFocus 
                />
            </div>

    </div>

}

export default Search