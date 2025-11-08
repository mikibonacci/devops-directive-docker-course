```
npm create vite@latest
```

```
nvm ls
nvm use node 19.4
npm install
npm run dev
```

if your postgres works badly, i.e. cannot find like users, roles...
maybe you have other postgres running on the same exposed port. 
You should check it: 

```shell
lsof -i :5432

brew services stop postgresql
```