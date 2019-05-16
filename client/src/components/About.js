import React, { Component } from 'react'
import PageHeader from "./PageHeader"
import about from './../images/about.jpg'

export default class About extends Component {
  render() {
    return (
      <>
        <PageHeader image={about} />

        <div className="container page-container" id='container'>

          <div className="intro-text-container">
            <h1>ClimAct</h1>
            <p>Your platform to engage with global climate politics – everyone can change the world! </p>
            <hr />
          </div>

          <h2>The Problem</h2>
          <p>Climate change is an imminent threat to the whole world, but what can I do as one person, except from changing my own consumption behavior? I want to change the whole system! </p>
          <hr />

          <h2>The Solution </h2>
          <p>Politics change the world on a systemic level so we wanted to create an app that helps the user engage in fighting climate change on a political level. </p>
          <hr />

          <div className="card-container">

            <div className="card about">
              <h4> Engagement </h4>
              <p>Power relies in the masses – therefore we created the action page for the user to engage with others through events and to sign petitions for decision makers.</p>
            </div>

            <div className="card about">
              <h4> Access to Power </h4>
              <p>Democracy is great as it gives us access to power – on the politics page we wanted to display all the parties and  politicians  from the EU so that the user can engaged and demand change directly from the decision makers. </p>

            </div>

            <div className="card about">
              <h4> Understanding</h4>
              <p>In order to understand climate change you might need to see how it affects us – this is why we created a data page to visualize climate change data.</p>
            </div>

          </div>

          <hr />

          <h4>About The Team</h4>
          <p>This project was made as part of the Ironhack Web Development bootcamp in Berlin by <a href="https://www.linkedin.com/in/antoni-morawski-51467286/">Antoni Morawski
  </a>, <a href="https://www.linkedin.com/in/helleke/">Helleke Heikkinen</a>, and <a href="https://www.linkedin.com/in/anastasioskyrtsis/">Anastasios Kyrtsis</a>. The aim of the project was to build our full-stack MERN web application. This was our final project during the bootcamp and the development time was one week. You can check out the Github repo <a href="https://github.com/amrwski/climate-app"> here</a>.</p>
          <hr />

          <h4>Execution</h4>
          <p>The tech stack we used was the MERN stack: HTML/CSS, JavaScript, NodeJS,MongoDB, Express, and React.
            We also used several data sources and additional libraries.
            The data we have comes from the <a href="https://www.meetup.com/meetup_api/">Meetup API</a>, <a href="https://developer.twitter.com/content/developer-twitter/en.html">Twitter API</a>, <a href="http://data.europa.eu/euodp/data/dataset/rc2ELCDeTGfxdpE27gyzow">Eurostat Dataset (Greenhouse gas emissions per capita)</a>,
            and the <a href="https://app.climate.azavea.com/">Azavea’s Climate Application</a> .  </p>
          <hr />

          <h4>Further Development</h4>
          <p>This is the first MVP of the page, as there is a limited set of features that you can include in just one week, but of course we have lots of ideas for further iteration and improvement.  Some ideas include interactive voting, more implemented data sources as well as visualization and adding of social interaction to the app. </p>
          <hr />

          <h4>Credits</h4>
          <p>We used some images that were freely available on the internet – thanks to all providers of free resources!</p>
          <div>Favicon Icon made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
          <br />
        </div>

      </>
    )
  }
}
