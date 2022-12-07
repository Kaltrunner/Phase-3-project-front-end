
function Sidebar( {notes, onAddNote, onDeleteNote, activeNote, setActiveNote} ) {

    const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);

    return (
    <div className="app-sidebar">
        <div className="app-sidebar-header">
            <button className="home-button" >Home</button>
            <h1>Notes</h1>
            <button onClick={onAddNote}>ADD</button> 
        </div>
        <div className="app-sidebar-notes" >
            {sortedNotes.map((note) => (
            <div className={`app-sidebar-note ${note.id === activeNote && "active"} `} onClick={() => setActiveNote(note.id)} >
                <div className="sidebar-note-title" >
                    <strong>{note.title}</strong>
                    <button onClick={() => onDeleteNote(note.id)} >-X-</button>
                    {/* <img src="data:image/svg+xml;base64,PHN2ZyBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjIiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMTIgMTAuOTMgNS43MTktNS43MmMuMTQ2LS4xNDYuMzM5LS4yMTkuNTMxLS4yMTkuNDA0IDAgLjc1LjMyNC43NS43NDkgMCAuMTkzLS4wNzMuMzg1LS4yMTkuNTMybC01LjcyIDUuNzE5IDUuNzE5IDUuNzE5Yy4xNDcuMTQ3LjIyLjMzOS4yMi41MzEgMCAuNDI3LS4zNDkuNzUtLjc1Ljc1LS4xOTIgMC0uMzg1LS4wNzMtLjUzMS0uMjE5bC01LjcxOS01LjcxOS01LjcxOSA1LjcxOWMtLjE0Ni4xNDYtLjMzOS4yMTktLjUzMS4yMTktLjQwMSAwLS43NS0uMzIzLS43NS0uNzUgMC0uMTkyLjA3My0uMzg0LjIyLS41MzFsNS43MTktNS43MTktNS43Mi01LjcxOWMtLjE0Ni0uMTQ3LS4yMTktLjMzOS0uMjE5LS41MzIgMC0uNDI1LjM0Ni0uNzQ5Ljc1LS43NDkuMTkyIDAgLjM4NS4wNzMuNTMxLjIxOXoiLz48L3N2Zz4="/> */}
                    
                </div>
                <p>{note.body && note.body.substr(0, 100) + "..." }</p>
                <small className="note-meta" >Last modified:{" "} {new Date(note.lastModified).toLocaleDateString( "en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                } )}</small>
            </div>
            ))}
        </div>
    </div>
    )
}
 
export default Sidebar;