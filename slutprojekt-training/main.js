function App(){
    return(
        <div className="app">
            <Header></Header>
            <Router></Router>
            <Main></Main>
            <About></About>
            <Footer></Footer>
        </div>
    )
}

function Header(){
    return(
        <header>
            <nav>
                <a href="#home">HOME</a>
                <a href="#contact">CONTACT</a>
                <a href="#about">ABOUT</a>
            </nav>
        </header>
    )
}

function Main(){
    return(
        <main className="content" id = "home">
            <h3>MAIN</h3>
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
    const [page, setPage] = React.useState("test")
    return(
        <div className="box">

            <button onClick={()=>setPage("home")}>HOME</button>
            <button onClick={()=>setPage("about")}>ABOUT</button>
            <button onClick={()=>setPage("test")}>TEST</button>

            {page == "home" ? <h2>HOME</h2> : ""}
            {page == "about" ? <h2>ABOUT</h2> : ""}
            {page == "test" ? <h2>TEST</h2> : ""}
        
        </div>
    )


}



const el = document.querySelector("#root");
ReactDOM.createRoot(el).render(<App></App>)