# setup 
- node installed
- python3.7 installed
## vscode setting
```
"emmet.syntaxProfiles": {
    "html": {
        "attr_quotes": "single"
    },
    "jsx": {
        "self_closing_tag": true
    }
}
```
## react setup
### npm install
```
$ npm install
```

### test run server 
```
$ npm run build 
```

## flask setup
### pipenv install
```
pipenv --python 3.7
pipenv shell
pipenv install
```
### create .env file
```
FLASK_APP=run.py
```

### test run

```

```

# reference
- https://medium.com/@jeffrey.allen.lewis/the-ultimate-2018-webpack-4-and-babel-setup-guide-npm-yarn-dependencies-compared-entry-points-866b577da6a
https://reactjs.org/tutorial/tutorial.html

# TODO
- make webpack-dev-server work
    - done with gulp 
- move html file to from client to app when build
