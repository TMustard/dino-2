import React, { Component } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Profile from "./components/profile";
import SkillList from "./components/skillList";

// A deployed website
// Built using a front end framework
// All DOM manipulation is handled by front end framework
// Makes a request to an api and renders a list with the results
// Shows and hides skills list when the profile header is clicked.
// Renders the skills array in a list for each profile
// Has a component for the header
// Has a component for the profiles
// Has a component for the skill list
// Has a component for the footer
// Has the same look as the original page
// All tests pass

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
    // console.log(dinosaurs);
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
    // const names = dinosaurs.map((dinosaur, iterator) => {
    //   return;
    // });

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

// const itemOne = (
//   <li>
//     <div className="profile-card">
//       <header className="profile-header">
//         <img src="./assets/dino-1.png" />
//         {profileHeaders[0]}
//       </header>
//       {profiles[0]}
//     </div>
//   </li>
// );
// const itemTwo = (
//   <li>
//     {profileHeaders[1]}
//     {profiles[1]}
//   </li>
// );
// const itemThree = (
//   <li>
//     {profileHeaders[2]}
//     {profiles[2]}
//   </li>
// );
// var combined = [];
// for (var i = 0; i < 3; i++) {
//   combined.push(profileHeaders[i]);
//   // combined.push(profileHeaders[i].dinoPic);
//   combined.push(profiles[i]);
// }
// console.log(combined);
