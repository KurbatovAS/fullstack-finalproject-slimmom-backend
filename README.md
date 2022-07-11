## REST API SlimMom

### Команди:

- `npm start` &mdash; старт сервера в режимі production
- `npm run start:dev` &mdash; старт сервера в режимі розробки (development)
- `npm run lint` &mdash; запустити виконання перевірки коду з eslint, необхідно виконувати перед кожним PR та виправляти всі помилки лінтера
- `npm lint:fix` &mdash; та ж перевірка лінтера, але з автоматичними виправленнями простих помилок

### Імпровізований Swagger:

---

- POST api/users/register - зареєструвати нового користувача
  No parameters
  Request.body required application/json
  Example:
  {
  "name": "Adrian Cross",
  "email": "across@mail.com",
  "password": "examplEPassword123"
  }

Responses:

201 - користувача створено
409 - користувач з таким email в БД вже існує
400 - помилка при реєстрації користувача (дивись конкретний message помилки, що присилає бекенд)

---

- POST api/users/login - Залогініти користувача
  No parameters
  Request.body required application/json
  Example:
  {
  "email": "string",
  "password": "string"
  }

Responses:

200 - користувача залогінено
401 - помилка під час логіну, невірний логін або пароль

---

- GET api/users/logout - розлогінити користувача
  Parameters:
  Authorization (header): Bearer token
  No body

Responses:

204 - користувача разлогінено
401 - відсутній заголовок з токеном авторизації
500 - помилка серверу

---

- GET api/users/current - отримати інформацію про поточного користувача
  Parameters:
  Authorization (header): Bearer token
  No body

Responses:

200 - інформацію знайдено
401 - відсутній заголовок з токеном авторизації

---

- GET api/products/search?product=Абрикосова кісточка - отримати інформацію по продутку

  Parameters:
  No body

Responses:

200 - інформацію знайдено

---

- POST /api/users/public - отримання денної норми ккал та списку нерекомендованих продуктів

  No parameters

  Request.body required application/json

  Example:
  {
  "height": number,
  "age": number,
  "currentWeight": number,
  "desiredWeight": number,
  "bloodType": "string"
  }

Responses:

200 - інформацію знайдено
Example:
{
"kcal": 1622,
"productsNotRecommended": [
"Азу",
"Антрекот",
"Антрекот з яловичини",
"Антрекот зі свинини",
"Аньолотті",
"Арахіс",
"Арахіс Джаз смажений солоний",
...,
]
}

---

- POST /api/users/private - отримання денної норми ккал та списку нерекомендованих продуктів, записати надану/отриману інформацію у БД

  Parameters:
  Authorization (header): Bearer token

  Request.body required application/json

  Example:
  {
  "height": number,
  "age": number,
  "currentWeight": number,
  "desiredWeight": number,
  "bloodType": "string"
  }

Responses:

200 - інформацію знайдено
Example:
{
"kcal": 1622,
"productsNotRecommended": [
"Абрикосова кісточка",
"Азу",
"Антрекот",
"Антрекот з яловичини",
"Антрекот зі свинини",
"Аньолотті",
"Арахіс",
"Арахіс Джаз смажений солоний",
...,
]
}
