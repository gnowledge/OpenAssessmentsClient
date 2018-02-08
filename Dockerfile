FROM phusion/baseimage:latest

# File created, modified and maintained by "Mrunal Nachankar<mruanl4888@gmail.com">  
LABEL authors="Mrunal Nachankar<mruanl4888@gmail.com>"

# make directory OpenAssessmentsClient in / 
RUN mkdir /OpenAssessmentsClient /oac /oat

# copy all content from pwd (from where build is triggered) to /OpenAssessmentsClient
COPY . /OpenAssessmentsClient

# change working directory to /OpenAssessmentsClient
WORKDIR /OpenAssessmentsClient

# Add nodejs repo for 9.x version
RUN curl -sL https://deb.nodesource.com/setup_9.x | bash

# install nodejs for yarn and bzip2 and libfontconfig for yarn (phantomjs) building 
RUN apt-get install nodejs bzip2 libfontconfig git -y

# install yarn
RUN npm install -g yarn

# # Exposing required port - 8080
# EXPOSE 8080

# Trigger / start / execute main.py to run the OpenAssessmentsClient service 
#CMD ["/bin/bash", "-c", "yarn   &&   yarn build   &&   rsync  -avPh  /OpenAssessmentsClient/build/prod/*  /oac/   &&   rsync  -avPh  /OpenAssessmentsClient/build/prod/*  /oat/   &&   mv  -v  /oat/author.html  /oat/index.html"]
