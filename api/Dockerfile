jelastic/maven:3.9.5-openjdk-21

WORKDIR /bezkoder-app
COPY . .
RUN mvn clean install

CMD mvn spring-boot:run