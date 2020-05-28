FROM openjdk:8u151-alpine

RUN mkdir /home/turismo-umss
WORKDIR /home/turismo-umss

ADD target/java-project-template-0.0.1-SNAPSHOT.jar /home/turismo-umss

CMD java -jar /home/turismo-umss/java-project-template-0.0.1-SNAPSHOT.jar