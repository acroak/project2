<h1>Folium</h1>
<hr/>
<br/>
<h2>Concept</h2>
<p>Folium is to be a website containing basic house plant and kitchen herb care tips. This website as it is now allows for pre-populated Administrator users to create, edit, and delete new plants. They can also create new admins as well. Going forward I would like to open this functionality to standard users for comment posting privileges.</p>
<hr/>
<br/>
<h2>Technologies</h2>
<ul>
  <li>Node.js</li>
  <li>Mongoose</li>
  <li>Express</li>
  <li>EJS</li>
  <li>MVC File Structure</li>
  <li>7 RESTful routes and full CRUD.</li>
  <li>Partials</li>
  <li>Bootstrap</li>
  <li>Sign in/ Bcrypt encryption</li>
</ul>
<hr/>
<br/>
<h2>Timeline</h2>
<p>First came a few basic wireframe models,</p>
<p>To start I first created the basic routes of the website (index, individual item pages, edit, create, delete). I then created the models and seed databases. After the databases were seeding properly I made the secondary specific tag pages (partial shade, easy to grow, etc) along side the navigation bar.</p>
<p>Once the basics were set up I started on the login capability with bcrypt encryption. Upon its completion I started on styling.</p>
<hr/>
<br/>
<h2>User Stories</h2>
<p>A person can choose a specific plant and receive care information.</p>
<p> A person can choose from some of the navigation option menus to sort plants by ease of care pr how much sun they need</p>
<p>An Administrator can add more plants and their info, as well as delete them, and edit previously existing entries</p>
<hr/>
<br/>
<h3>Return Visit / Struggles</h3>
<p>I would have liked to have a MongoDB $text search that pulls user search queries via a search input bar. Or potentially an email address gather-er for a 'newsletter' that stores the emails in a separate collection from users and plants. Or a comments section for each individual plant page allowing users to leave questions/comments</p>
<p>While I am happy with the styling, I would have liked to use more bootstrap and fewer css workarounds due to my unfamiliarity of BootStrap. All considering I think It looks good for a third attempt with BootStrap</p>
<hr/>
<br/>
<h2>Links</h2>
  <ul>
    <li><a href="https://serene-mountain-45563.herokuapp.com/plants">Folium</a></li>
    <li><a href="https://www.linkedin.com/in/andreacroak/">LinkedIn</a></li>
    <li><a href="https://github.com/acroak">GitHub</a></li>
  </ul>
