function App(){
    return(

        <div className="app">
            <Header></Header>
            <Footer></Footer>
            
        
        
        </div>
        
    )
}

function Header(){
    return(
        <header>
            <nav>
                <a href="/">HOME </a>
                <a href="#contact">CONTACT</a>
            </nav>
        </header>
    )
}



function Footer(){
    return(
        <footer>
            <div id="contact">
                <h3>You can contact us here</h3>
            </div>
        </footer>
    )
}








const el = document.querySelector("#root");
ReactDOM.createRoot(el).render(App())