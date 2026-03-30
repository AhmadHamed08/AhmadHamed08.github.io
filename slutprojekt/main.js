function App() {
    return (
        <div className="app">
            <Router></Router>
            <Footer></Footer>
        </div>
    )
}

function Main() {


    const products =[
        {id:"id_1", img:"test.jpg", text:"Detta är produkt 1"},
        {id:"id_2", img:"test.jpg", text:"Detta är produkt 2"},
        {id:"id_3", img:"test.jpg", text:"Detta är produkt 3"},
        {id:"id_4", img:"test.jpg", text:"Detta är produkt 4"},
        {id:"id_5", img:"test.jpg", text:"Detta är produkt 5"},
        {id:"id_6", img:"test.jpg", text:"Detta är produkt 6"},
    ];

    return (
        <main className="content" id="home">
            
            {products.map(p=>(
                <Card product = {p} ></Card>
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
    return (
        <div className="box">

            <div className="nav">
                <a href="#" onClick={() => setPage("home")} >HOME</a>
                <a href="#" onClick={() => setPage("about")} >ABOUT</a>
                <a href="#contact">CONTACT</a>
            </div>

            {page == "home" ? <Main></Main> : ""}
            {page == "about" ? <About></About> : ""}

        </div>
    )


}

function Card({product}) {

    return (
        <div id={product.id}>

            <div className="card">
                <div className="imgBox">
                    <img src={product.img} alt="" />
                </div>
                <h3>{product.text}</h3>
            </div>

        </div>
    )

}

const el = document.querySelector("#root");
ReactDOM.createRoot(el).render(<App></App>)