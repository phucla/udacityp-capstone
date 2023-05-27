FROM node:16.20-alpine3.16 as build

## Step 1:
# Create a working directory
WORKDIR /app

## Step 2:
# Copy source code to working directory
COPY app .

## Step 3:
RUN yarn install
RUN yarn build

CMD [ "yarn", "start" ]
# ## Step 4:
FROM nginx:1.25.0-alpine
# Copy config nginx
COPY --from=build /app/build /usr/share/nginx/html
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]