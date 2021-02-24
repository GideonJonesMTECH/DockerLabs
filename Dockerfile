FROM node

LABEL author="Gideon Jones (gideon.w.jones@gmail.com)"
#Description:: A simple Pug website I made back in January that I added Docker to!
#Cohort:: 11
#Animal:: Dragon!

# To Create nodejsapp directory
WORKDIR /nodejsapp

# To Install All dependencies

COPY . .

RUN npm install

# Expose port 3000 and Run the app.js file to start node js application
EXPOSE 3000
CMD [ "node", "app.js" ]