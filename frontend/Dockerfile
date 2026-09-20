# frontend/Dockerfile
# ───────────────────────────────────────────────────────────────────────
# Build stage – compile the Next.js app
# ───────────────────────────────────────────────────────────────────────
FROM node:20-alpine AS build
WORKDIR /app

# Install dependencies (cache this layer)
COPY package.json package-lock.json ./
RUN npm ci

# Copy the rest of the source and build
COPY . .
RUN npm run build

# ───────────────────────────────────────────────────────────────────────
# Runtime stage – run the Next.js production server
# ───────────────────────────────────────────────────────────────────────
FROM node:20-alpine
WORKDIR /app

# Copy only the built files and the runtime dependencies
COPY --from=build /app/package.json /app/package-lock.json ./
COPY --from=build /app/.next ./.next
COPY --from=build /app/node_modules ./node_modules

# Build the production image (no rebuild needed)
RUN npm ci --production

# Expose the default port used by `next start`
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "start"]
