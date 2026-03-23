function App(){
    return(
        <div className="app">
            <Router></Router>
            <Footer></Footer>
        </div>
    )
}

function Main(){
    return(
        <main className="content" id = "home">
            <h3>MAIN</h3>

            <div className="card">
                <div className="imgBox">
                    <img src="test.jpg" alt="" />
                </div>
                <h3>Testing....</h3>
            </div>
        </main>
    )
}
function About(){
    return(
        <main className="content" id = "about">
            <h3>ABOUT</h3>
        </main>
    )
}

function Footer(){
    return(
        <footer>
            <div id="contact">
                <h3>CONTACT</h3>
            </div>
        </footer>
    )
}


function Router(){
    const [page, setPage] = React.useState("home")
    return(
        <div className="box">

            <div className="nav">
                <a href = "#" onClick={()=>setPage("home")} >HOME</a>
                <a href = "#" onClick={()=>setPage("about")} >ABOUT</a>
                <a href="#contact">CONTACT</a>
            </div>

            {page == "home" ? <Main></Main> : ""}
            {page == "about" ? <About></About> : ""}
        
        </div>
    )


}

const el = document.querySelector("#root");
ReactDOM.createRoot(el).render(<App></App>)