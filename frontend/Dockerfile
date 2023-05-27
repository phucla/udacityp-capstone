FROM node:16.20-alpine3.16

## Step 1:
# Create a working directory
WORKDIR /app

## Step 2:
# Copy source code to working directory
COPY package.json ./
COPY yarn.lock ./
COPY ./ ./

## Step 3:
RUN yarn install
RUN yarn buid

CMD [ "yarn", "start" ]
# ## Step 4:
FROM nginx:1.25.0-alpine
# Copy config nginx
COPY --from=build /app/.nginx/nginx.conf /etc/nginx/conf.d/default.conf
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*
# Copy static assets from builder stage
COPY --from=build /app/build .
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]