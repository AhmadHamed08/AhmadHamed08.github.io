function App() {
    return (
        <div className="app">
            <Router></Router>
            <Footer></Footer>
        </div>
    )
}

function Main() {


    const products = [
        { id: "id_1", img: "coffee.jpg", text: "Premium kaffe från småskaliga rosterier" },
        { id: "id_2", img: "headphones.jpg", text: "Trådlösa hörlurar med brusreducering" },
        { id: "id_3", img: "backpack.jpg", text: "Stilren ryggsäck för vardag och resa" },
        { id: "id_4", img: "watch.jpg", text: "Minimalistisk klocka i rostfritt stål" },
        { id: "id_5", img: "shoes.jpg", text: "Bekväma sneakers för alla tillfällen" },
        { id: "id_6", img: "lamp.jpg", text: "Modern bordslampa med varm belysning" },
    ];

    return (
        <main className="content" id="home">

            {products.map(p => (
                <Card product={p} ></Card>
            ))}

        </main>
    )
}
function About() {
    return (
        <main className="content" id="about">
            <h3>ABOUT</h3>
        </main>
    )
}

function Footer() {
    return (
        <footer>
            <div id="contact">
                <h3>CONTACT</h3>
            </div>
        </footer>
    )
}


function Router() {
    const [page, setPage] = React.useState("home")
    const [menuOpen, setMenuOpen] = React.useState(false)

    return (
        <>
            <div className="box">
                
                <button class="menuButton" onClick={() => setMenuOpen(!menuOpen)}>&equiv;</button>
                <div className="nav">
                    
                    <a href="#" className={menuOpen ? "show" : ""} onClick={() => setPage("home")} >HOME</a>
                    <a href="#" className={menuOpen ? "show" : ""} onClick={() => setPage("about")} >ABOUT</a>
                    <a href="#contact" className={menuOpen ? "show" : ""}>CONTACT</a>

                </div>
            </div>

            {page == "home" ? <Main></Main> : ""} 
            {page == "about" ? <About></About> : ""}
        </>
    )
}

function Card({ product }) {

    return (
            <div className="card" id={product.id}>
                <div className="imgBox">
                    <img src={product.img} alt="" />
                </div>
                <h3>{product.text}</h3>
            </div>
       
    )

}

const el = document.querySelector("#root");
ReactDOM.createRoot(el).render(<App></App>)