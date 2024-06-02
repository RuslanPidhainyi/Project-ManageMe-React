// import express from 'express' //популярний бібліотека Express  для створення веб-серверу  Node.js.
// import jwt from 'jsonwebtoken' //jsonwebtoken - бібліотека для роботи з JWT (JSON Web Token).
// import 'dotenv/config' //dotenv/config - для завантаження змінних оточення з .env файлу. що дозволяє зберігати конфіденційні дані поза кодом.
// import cors from 'cors' //cors - для налаштування CORS (Cross-Origin Resource Sharing).  що дозволяє веб-додаткам на різних доменах взаємодіяти з вашим сервером.

// //Ініціалізація додатку
// const app = express() //Створює новий екземпляр додатку Express.
// const port = 3000 //Встановлює порт, на якому буде працювати сервер (3000).


// //Зміна оточення
// const tokenSecret = process.env.TOKEN_SECRET as string //змінна, яка зберігає секретний ключ для підпису JWT. Він зчитується з змінних оточення
// let refreshToken: string //Змінна для зберігання рефреш-токену, який використовується для оновлення JWT

// //Налаштування middleware
// app.use(cors()) //Вмикає CORS, дозволяючи додаткам на інших доменах робити запити до цього сервера
// app.use(express.json()) //Дозволяє серверу автоматично парсити JSON з тіла запитів


// //Routing - Маршрути

// //Головний маршрут
// //Відповідає на GET-запити до кореневого URL (/) з повідомленням "Hello World - simple api with JWT!".
// app.get('/', (req, res) => {
//   res.send('Hello World - simple api with JWT!') 
// })

// //Створення токену
// app.post( "/token", function (req, res) //Отримує POST-запити на /token.
//    {
//     const expTime = req.body.exp || 60 //expTime: Час життя токену, вказаний у тілі запиту (або 60 секунд за замовчуванням).
//     const token = generateToken(+expTime) //token: Генерує JWT з вказаним часом життя.
//     refreshToken = generateToken(60 * 60) //refreshToken: Генерує рефреш-токен з часом життя 1 година. //60min razy 60sek = 1 godzinna
//     res.status(200).send({ token, refreshToken }) //Відправляє клієнту обидва токени у відповіді.
//   }
// )

// //Оновлення токену
// app.post("/refreshToken", function (req, res) //Отримує POST-запити на /refreshToken.
// {
//     const refreshTokenFromPost = req.body.refreshToken //refreshTokenFromPost: Рефреш-токен, отриманий з тіла запиту.
//     if (refreshToken !== refreshTokenFromPost) //Якщо отриманий рефреш-токен не збігається з збереженим, повертає помилку 400.
//     {
//       res.status(400).send('Bad refresh token!')
//     }
//     const expTime = req.headers.exp || 60 //expTime: Час життя нового токену з заголовків запиту (або 60 секунд за замовчуванням).
//     const token = generateToken(+expTime)//token: Генерує новий JWT з вказаним часом життя.
//     refreshToken = generateToken(60 * 60)//refreshToken: Генерує новий рефреш-токен з часом життя 1 година.
    
//     //Відправляє клієнту нові токени після затримки у 3 секунди.
//     setTimeout(() => {
//       res.status(200).send({ token, refreshToken })
//     }, 3000)
//   }
// )

// //Захищений маршрут
// app.get("/protected/:id/:delay?", //Отримує GET-запити на /protected/:id/:delay?.
//  verifyToken, (req, res) =>  //Використовує verifyToken middleware для перевірки токену перед обробкою запиту.
//   {
//     const id = req.params.id //id: Параметр URL.
//     const delay = req.params.delay ? +req.params.delay : 1000 //delay: Параметр URL, який вказує затримку перед відповіддю (або 1000 мс за замовчуванням).
    
//     //Повертає відповідь з затримкою, що містить повідомлення з id.
//     setTimeout(() => {
//       res.status(200).send(`{"message": "protected endpoint ${id}"}`)
//     }, delay)
//   }
// )




// //Запуск сервера

// //Запускає сервер на вказаному порту (3000) і виводить повідомлення в консоль.
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })


// //Допоміжні функції - Генерація токену
// function generateToken(expirationInSeconds: number) //expirationInSeconds: Час життя токену в секундах.
//  {
//   const exp = Math.floor(Date.now() / 1000) + expirationInSeconds //exp: Час закінчення дії токену в UNIX-форматі.
//   const token = jwt.sign({ exp, foo: 'bar' }, tokenSecret, { algorithm: 'HS256' }) //token: Підписаний JWT з полями exp та foo.
//   return token
// }


// //Допоміжні функції - Перевірка токену
// function verifyToken(req: any, res: any, next: any) //verifyToken: Middleware для перевірки JWT у заголовку запиту.
//  {
//   const authHeader = req.headers['authorization'] //authHeader: Заголовок авторизації з запиту.
//   const token = authHeader?.split(' ')[1] //token: JWT, витягнутий з заголовка.

//   if (!token) return res.sendStatus(403) //Якщо токен відсутній або невірний, повертає статус 403 або 401 відповідно.

//   //Якщо токен валідний, зберігає користувача у req.user та передає запит далі.
//   jwt.verify(token, tokenSecret, (err: any, user: any) => {
//     if (err) {
//       console.log(err)
//       return res.status(401).send(err.message)
//     }
//     req.user = user
//     next()
//   })
// }


// /*
// Таким чином, цей код забезпечує створення та перевірку JWT для автентифікації користувачів,
//  дозволяючи захищати маршрути та оновлювати токени за допомогою рефреш-токенів.
//  */

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { UserType } from '../Type/User.type';
import { Role } from '../Enum/Role';

const app = express();
const port = 3000;
const SECRET_KEY = 'your_secret_key'; // Змініть на ваш секретний ключ

app.use(cors());
app.use(bodyParser.json());

const users = new Map<string, UserType>();

app.get('/', (req, res) => {
  res.send('Hello World - simple api with JWT!') 
});

app.post('/register', async (req, res) => {
  const { email, password, name, role } = req.body;
  if (!email || !password || !name || !role) {
    return res.status(400).send('All fields are required');
  }
  if (!Object.values(Role).includes(role)) {
    return res.status(400).send('Invalid role');
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const id = uuidv4();
  users.set(id, { id, email, password: hashedPassword, name, role });
  res.status(201).send({ id, email, name, role });
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = Array.from(users.values()).find(user => user.email === email);
  if (!user) {
    return res.status(401).send('Invalid email or password');
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).send('Invalid email or password');
  }
  const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, { expiresIn: '1h' });
  res.status(200).send({ token, email: user.email, name: user.name, role: user.role });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
