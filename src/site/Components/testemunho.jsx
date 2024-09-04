import React from 'react';

function Testemunho(){
    return <section id="testemunho">
        <div className="container">

        <div id="carouselExampleInterval" className="carousel carousel-dark  slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="5000">
                        <h2>As pessoas estão cada vez mais conectadas e usando os meios digitais para pesquisar sobre produtos, serviços e também realizarem as suas compras. Então, se você quiser conquistar mais clientes e destacar a sua marca, é essencial ter uma loja online.</h2>
                    </div>      

                    <div className="carousel-item" data-bs-interval="5000">
                        <h2>Uma loja virtual requer um investimento inicial muito menor do que uma loja física. Você pode oferecer preços mais competitivos aos seus clientes e ter uma margem de lucro maior.</h2>
                    </div>      

                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        
        </div>
    </section>;
  }

export default Testemunho;