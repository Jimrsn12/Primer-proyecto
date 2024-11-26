import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section className="hero">
          <h1>Bienvenido a mi página web profesional</h1>
          <p>Una introducción a mi trabajo y proyectos.</p>
        </section>
        <section className="about">
          <h2>Sobre mí</h2>
          <p>
            Soy un desarrollador web con experiencia en React, JavaScript, y otras tecnologías web. Aquí podrás conocer más sobre mis proyectos y habilidades.
          </p>
        </section>
        <section className="projects">
          <h2>Proyectos</h2>
          <ul>
            <li>Proyecto 1: Descripción del proyecto</li>
            <li>Proyecto 2: Descripción del proyecto</li>
            <li>Proyecto 3: Descripción del proyecto</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
