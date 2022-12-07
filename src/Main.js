import ReactMarkdown from "react-markdown";

function Main({ activeNote, onUpdateNote }) {

    const onEditField = (field, value) => {
        onUpdateNote({
            ...activeNote,
            [field]: value,
            lastModified: Date.now(),
        })
    }

    if(!activeNote) return <div className="no-active-note">Click "ADD" to create and start editing your note or click "Home" to go back.</div>;

    return (
        <div className="app-main" >
            <div className="app-main-note-edit" >

                <input 
                type="text"
                id="title" 
                placeholder="Title..." 
                value={activeNote.title} 
                onChange={(e) => onEditField("title", e.target.value)} 
                autoFocus 
                />

                <textarea 
                id="body" 
                placeholder="type a note..." 
                value={activeNote.body} 
                onChange={(e) => onEditField("body", e.target.value)} 
                />

            </div>
            <div className="app-main-note-preview">

                 <h1 className="preview-title">{activeNote.title}</h1>

                 <ReactMarkdown className="markdown-preview">{activeNote.body}</ReactMarkdown>

            </div>
        </div>
    )

}

export default Main;