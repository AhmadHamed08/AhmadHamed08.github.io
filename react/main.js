function App(){
    return(
        <div className ="app">
            <Header></Header>
            <h2>REACT</h2>

            <Students></Students>

            <Footer></Footer>

            <Ahmad></Ahmad>

        </div>

    )
}

function Header(){
    return(
        <header>
            <nav>
                <a href="/">HOME</a>
                <a href="#contact">CONTACT</a>
            </nav>
        </header>
    )
}

function Ahmad(){
    return(

        <h2>Ahmad</h2>

    )
}

function Footer(){
    return(
        <footer>
            <h3>This is the end of the page</h3>
        </footer>
    )
}

function Students(){
    const stud = ["Dennis", "Mahmoud", "Maheen"];

    return(
        <div className="students">
            {stud.map(s=>(
                <h4>{s}</h4>
            ))}
        </div>
    )
}



const el = document.querySelector("#root");
ReactDOM.createRoot(el).render(App())