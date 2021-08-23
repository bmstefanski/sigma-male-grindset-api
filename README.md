<div align="center">
  <h1>Sigma male API</h1>
  <p>#up your grindset</p>
  <p>Production build: https://sigma-male-grindset-api.vercel.app/api</p>
  <br />
</div>

## Developing

```
$ yarn && yarn dev
```

## Endpoints

Videos: https://sigma-male-grindset-api.vercel.app/api/videos

```json
$ url -s -X GET "http://localhost:3000/api/videos"
=> {"url":"https://www.youtube.com/watch?v=bWvVVLFk1G0"}
```

Quotes: https://sigma-male-grindset-api.vercel.app/api/quotes

```json
$ curl -s -X GET "http://localhost:3000/api/quotes"
=> {"quote":"Don't think outside the box, buy the box", "author":"Quintillionare Sigma Male"}
```
