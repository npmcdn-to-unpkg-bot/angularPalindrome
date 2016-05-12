# Requirements

``` install docker```

# Run Server (Back End) 
docker build -t leandro/nodeserver server/
docker run -p 3412:3412 -d leandro/nodeserver


# Run Server (Front End) 
docker build -t leandro/nodeapp .
docker run -p 8080:8080 -d leandro/nodeapp

# Ready
http://127.0.0.1:8080/
