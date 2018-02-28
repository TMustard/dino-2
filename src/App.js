import React, { Component } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Profile from "./components/profile";
import SkillList from "./components/skillList";

class App extends Component {
  state = { dinosaurs: [] };

  componentDidMount() {
    this.getDinosaurs();
  }

  getDinosaurs = () => {
    return fetch("./dinosaurs.json")
      .then(response => response.json())
      .then(dinosaurs => {
        this.setState({ dinosaurs });
      });
  };

  render() {
    const { dinosaurs } = this.state;
    const profiles = dinosaurs.map((dinosaur, iterator) => {
      return (
        <Profile
          key={iterator}
          dinoName={dinosaur.name}
          skillSet={dinosaur.skills}
          dinoPic={dinosaur.image}
        />
      );
    });

    return (
      <main>
        <Header />
        <section id="profiles-container">
          <h2>Profiles</h2>
          <ul id="profiles">{profiles}</ul>
        </section>
        <Footer />
      </main>
    );
  }
}

export default App;
