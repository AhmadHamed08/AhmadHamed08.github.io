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
        { id: "id_1", img: "coffee.jpg", text: "Premium kaffe från småskaliga rosterier", price: "50 kr", description: "Ett fylligt kaffe med mjuka chokladtoner och en rund eftersmak. Perfekt för både espresso och bryggkaffe." },
        { id: "id_2", img: "headphones.jpg", text: "Trådlösa hörlurar med brusreducering", price: "1000 kr", description: "Njut av kristallklart ljud och effektiv brusreducering med lång batteritid och bekväm passform." },
        { id: "id_3", img: "backpack.jpg", text: "Stilren ryggsäck för vardag och resa", price: "400 kr", description: "Rymlig och modern ryggsäck med flera fack som passar perfekt för skola, jobb eller resor." },
        { id: "id_4", img: "watch.jpg", text: "Minimalistisk klocka i rostfritt stål", price: "4000 kr", description: "Elegant design med slitstarkt rostfritt stål och tidlös känsla som passar alla tillfällen." },
        { id: "id_5", img: "shoes.jpg", text: "Bekväma sneakers för alla tillfällen", price: "250 kr", description: "Lätta och bekväma sneakers med modern design och mjuk sula för maximal komfort hela dagen." },
        { id: "id_6", img: "lamp.jpg", text: "Modern bordslampa med varm belysning", price: "200 kr", description: "Stilren bordslampa som skapar en varm och mysig atmosfär i både vardagsrum och sovrum." },
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
            <div className="header">

                <button className="menuButton" onClick={() => setMenuOpen(!menuOpen)}>&equiv;</button>
                <div className={menuOpen ? "hidden" : "nav"}>

                    <a href="#" className={menuOpen ? "" : "show"} onClick={() => setPage("home")} >HOME</a>
                    <a href="#" className={menuOpen ? "" : "show"} onClick={() => setPage("about")} >ABOUT</a>
                    <a href="#contact" className={menuOpen ? "" : "show"}>CONTACT</a>

                </div>
            </div>

            {page == "home" ? <Main></Main> : ""}
            {page == "about" ? <About></About> : ""}
        </>
    )
}

function Card({ product }) {

    const [more, setMore] = React.useState(false);

    function showMore() {
        setMore(prev => !prev)
    }

    return (
        <>
            <div onClick={showMore} className="card" id={product.id}>
                <div className="imgBox">
                    <img src={product.img} alt="" />
                </div>
                <h3>{product.text}</h3>
                <h2>{product.price}</h2>

            </div>

            {more ? <More product={product} showMore={showMore} /> : ""}
        </>
    )
}


function More({product, showMore}) {
    return (
        <div className="more">
            <div className="card" id={product.id}>
                <button onClick={showMore}>X</button>
                <div className="imgBox">
                    <img src={product.img} alt="" />
                </div>
                <h2>{product.text}</h2>
                <h3>{product.description}</h3>
                <h1>{product.price}</h1>
            </div>
        </div>
    )
}

const el = document.querySelector("#root");
ReactDOM.createRoot(el).render(<App></App>)