# backend/Dockerfile
# ───────────────────────────────────────────────────────────────────────
# Build stage – compile the Spring Boot application with Maven
# ───────────────────────────────────────────────────────────────────────
FROM eclipse-temurin:17-jdk-alpine AS build
WORKDIR /app

# Install Maven
RUN apk add --no-cache maven

# Copy pom.xml from the backend directory
COPY backend/pom.xml .

# Download dependencies (offline mode)
RUN mvn -B -DskipTests dependency:go-offline

# Copy the rest of the source code from backend/src
COPY backend/src ./src

# Build the project (skip tests – you can enable them if you prefer)
RUN mvn -B -DskipTests package

# ───────────────────────────────────────────────────────────────────────
# Runtime stage – minimal image that contains only the compiled jar
# ───────────────────────────────────────────────────────────────────────
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app

# Copy the executable jar from the build stage
COPY --from=build /app/target/*.jar app.jar

# Expose the default Spring Boot port
EXPOSE 8080

# Run the application
ENTRYPOINT ["java", "-jar", "/app/app.jar"]

