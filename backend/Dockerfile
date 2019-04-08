FROM node:10
WORKDIR /srv/app
COPY . . 
RUN rm -rf node_modules
RUN npm install
EXPOSE 3306
CMD npm run dev