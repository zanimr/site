import React from 'react';

function Footer(){
  var ano = new Date().getFullYear(); 

    return <section id="footer">    
      <div>
            <ul className="list-unstyled list-inline social text-center">
                <li className="list-inline-item"><a href="https://wa.me/17991849186?text=Olá, quero saber mais"><i className="fa fa-whatsapp fa-4x"></i></a></li>
                <li className="list-inline-item"><a href="https://www.instagram.com/nhsoftware/"><i className="fa fa-instagram fa-4x"></i></a></li>						
                <li className="list-inline-item"><a href="mailto:contato.nhsoftware@gmail.com" target="_blank"><i className="fa fa-envelope fa-4x"></i></a></li>
            </ul>
	    </div>
      <a href="mailto:contato.nhsoftware@gmail.com">contato.nhsoftware@gmail.com</a>
      <p>WhatsApp (17) 99184-9186</p>
      <p>Desenvolvido por nhsoftware - {ano}</p>

    </section>;
  }

export default Footer;