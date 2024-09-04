import React from 'react';

function Banner(){
    return <section id="banner">
        <div className="container">
            <div className="row">

                <div className="col-lg-6">
                    <h1>Desenvolvimento de aplicativos mobile para sua empresa.</h1>
                    <h4>Criamos o app ideal para sua empresa.</h4>
                </div>

                <div className="col-lg-6">
                    <img src="Images/screenshot-crm.png" alt="99 CRM" />                        
                </div>
       
            </div>
        </div>
    </section>;
  }

export default Banner;