# limber

Limber is a web application aimed at helping people build a productive and personalized yoga practice. Limber facilitates the building of yoga sequences, encourages connection with others as well as the documentation of one's progress and favorite sequences.
### features

1) User Profile -
    all user information is displayed on the users profile page. This includes the sequences they have built and chosen to save, a dashboard presenting some statistics about their progress, and the poses they have placed in the following categories: what they know, and what they are working on.

    the goal of the profile page is to have a centralized place for a user to view their activity on the app.

2) Build -
    users can choose to find a video or build a sequence based on two constraints: length and body parts. The user can choose body parts to focus on by clicking the areas on the diagram, and can choose a length from the dropdown. If the user chooses to build a flow, this information is passed to the back end where a sequence is built based upon the relationships between poses and the relationships between poses & body parts. If a user chooses to find a video, we search youtube for videos matching their criteria and return the results to the user.

    Using the sequence builder users have the option to view a tutorial for each pose, switch out any pose in the sequence for another, and then save the sequence to the database for future use.

3) Connect -
    users can connect with others using this component through live text and video chat. Users can host a class and others can join as they wish.
### getting started

To start using or developing with this app, make a .env file. The file needs the following contents:

  - CLIENT_ID
  - CLIENT_SECRET
  - SESSION_SECRET
  - POSTGRES_USERNAME
  - POSTGRES_PASSWORD
  - AWS_ACCESS_KEY_ID
  - AWS_SECRET_ACCESS_KEY
  - YOUTUBE_API_KEY

- Authentication is handled through Google OAuth2 and Passport
- Have Postgres running on your machine, and create a database called 'limber'
- Pose images are stored in an AWS S3 bucket
- YouTube's V3 API is used to find videos matching a users requests

scripts:

1. npm install
2. npm run build (or npm run build-prod for production)
3. npm start



## Postgres installation for Windows Users:

1. Watch this tutorial for installation instructions(17:00): https://fulcrum.rocks/blog/why-use-postgresql-database/

or

1. Navigate to this link: https://www.postgresql.org/download/windows/
2. click on 'Download this installer' link: https://www.enterprisedb.com/downloads/postgres-postgresql-downloads
3. After installation is complete, open PG Admin14 or psql terminal to access postgres database features.
4. Access postgres documentation for unique command line prompts.
    * Note: postgres--show tables command === \dt; There are several divergent commands from mySql


## Husky and EsLint

To reduce errors and enforce code consistency amongst the developers we installed Husky and configured EsLint with standard ES6 code features and capabilities. Access to the rules governing these standards can be found in the .eslintrc.js file. In addition, changes to how Husky handles Git commits can be altered within the root directory of the package.json.

Connect:

-Connect uses the http.createServer() method to create a server a Server object from express.
-Socket.io uses this server to communicate with other sockets in real time.
-Every user is assigned a socket.id when logging into the Connect Chat feature.
-Socket.io will start listing when you start your server and generate a socket.id for the user.
-Username is the full name of the user stored in the database from Google Auth.
-Chat messages are stored in state and reset when the user leaves the chat.