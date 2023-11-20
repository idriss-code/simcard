FROM jelastic/maven:3.9.5-openjdk-21

WORKDIR /app
COPY . .
RUN mvn clean install

CMD sleep 30 && mvn spring-boot:run