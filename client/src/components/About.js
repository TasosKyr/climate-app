import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div className="container page-container" id='container'>
        <h1>ClimAct</h1>
        <h4>Climate change is the most important global political topic at the moment. Many people are aware that we need to make big personal and societal changes in order to tackle this problem. On a personal level many of us struggle to find the ways to do more than just abandon the use of plastic straws (we don’t dispute that they should be abandoned). We acknowledge that the changes needed to fight climate change have to be on a systemic level – this means political changes on a national as well as a global level. </h4>
        <hr />
        <h2>The Problem We Want to Solve</h2>
        <p>Climate change is an imminent threat to the whole world, but what can I do as one person, except from changing my own consumption behavior? I want to change the whole system! </p>
        <hr />
        <h2>The Solution we want to provide</h2>
        <p>Politics change the world on a systemic level so we wanted to create an app that helps the user engage in fighting climate change on a political level. </p>
        <div className='about-list'>
          <ul>
            <li> <h4> Understanding</h4></li>
            <ul><li>In order to understand climate change you might need to see how it affects us – this is why we created a data page to visualize climate change data.</li></ul>
            <li> <h4> Engagement </h4></li>
            <ul><li>Power relies in the masses – therefore we created the action page for the user to engage with others through events and to sign petitions for decision makers.</li></ul>
            <li> <h4>Access to Decision Makers </h4></li>
            <ul><li>Democracy is great as it gives us access to power – on the politics page we wanted to diplay all the parties and  politicians  from the EU so that the suer can engaged and demand change directly from the decision makers.</li></ul>
          </ul>
        </div>
        <hr />
        <h4>About The Team</h4>
        <p>This project was made as part of the Ironhack Web Development bootcamp in Berlin by Antoni, Tasos, and Helleke. The aim of the project was to build our full-stack MERN web application. This was our final project during the bootcamp and the development time was one week. You can check out the Github repo here.</p>
        <hr />
        <h4>Execution</h4>
        <p>The tech stack we used was HTML/CSS, JavaScript, NodeJS,MongoDB, Express, React.
          We also used several APIs to gather data: Meetup, European Environment Agency API, …
          To get all info we wanted to display we also used puppeteer for scraping.
          Additional libraries we used: bootstrap, react-bootstrap, puppeteer, ChartJS </p>
        <hr />
        <h4>Further Development</h4>
        <p>This is the first MVP of the page, as there is a limited set of features that you can include in just one week, but of course we have lots of ideas for further iteration and improvement.  Some ideas include interactive voting, more implemented data sources as well as visualization and adding of social interaction to the app. </p>
        <hr />
        <h4>Credits</h4>
        <p>We used some images that were freely available on the internet – thanks to all providers of free resources!</p>
        <div>Favicon Icon made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
      </div>
    )
  }
}
