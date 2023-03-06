# Random JSON generator

It's based on the [dummy-json npm package](https://github.com/webroo/dummy-json) and is straightforward to extend.  
Simply install in the usual way with `npm i` and run with `npm start`.

To dockerize use something like

```
docker build -t datagen .
```

and run with 
```
docker run --name datagen -d -p 80:3000 datagen
```