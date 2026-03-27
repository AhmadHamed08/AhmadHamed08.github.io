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
        {id:"id_3", img:"test.jpg", text:"Detta är produkt 1"},
        {id:"id_4", img:"test.jpg", text:"Detta är produkt 2"},
        {id:"id_55", img:"test.jpg", text:"Detta är produkt 3"},
        {id:"id_77", img:"test.jpg", text:"Detta är produkt 4"},
        {id:"id_9", img:"test.jpg", text:"Detta är produkt 5"},
        {id:"id_3h4", img:"test.jpg", text:"Detta är produkt 6"},
    ];

    return (
        <main className="content" id="home">
            <h3>MAIN</h3>
        
        

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

function Card({img, text}) {

    return (
        <div className="card">
            <div className="imgBox">
                <img src={img} alt="" />
            </div>
            <h3>{text}</h3>
        </div>
    )

}

const el = document.querySelector("#root");
ReactDOM.createRoot(el).render(<App></App>)