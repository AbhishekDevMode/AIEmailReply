# Step 1: Build stage (Fixed the Maven image tag)
FROM maven:3.9.6-eclipse-temurin-21 AS build
WORKDIR /app
COPY . .
RUN mvn clean package -DskipTests

# Step 2: Runtime stage
FROM eclipse-temurin:21-jdk-jammy
WORKDIR /app
# Copies the jar from the /app/target/ directory of the build stage
COPY --from=build /app/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]