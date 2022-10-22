# Autenticação-Passport-de-Usuário-com-Facebook-ou-Google-em-Node.js

<center><img src="https://i.ibb.co/M24mKXZ/Untitled-8.png" width="500" height=""473></center>

 <h3>Autenticação de usuário por meio do Facebook ou Google</h3> 

Todos nós devemos ter construído um sistema de autenticação simples usando nome de usuário e senha convencionais em nosso aplicativo Node.js. Fornecer aos usuários apenas uma opção para fazer login pode tirar a facilidade de uso de seus usuários. Vamos todos concordar que tendemos a usar recursos (se disponíveis) como “Login com Facebook”, “Login com Google” em vez de se inscrever e gerar um novo nome de usuário/senha. O processo repetitivo e a configuração de seu perfil para vários aplicativos são demorados, irritantes e frustrantes; além disso, lembrar de nomes de usuário e senhas para todos esses aplicativos torna-se difícil.

Para evitar tal caos, deve-se incluir logins sociais em seus aplicativos. Por causa do OAuth, podemos usar facilmente mídias sociais como Facebook, Twitter e Google para autenticação de usuários.

<h3>Dependências</h3>

```bash
npm install express
npm install passport 
npm install passport-facebook
npm install passport-google-oauth2
```

<h3>Configurações</h3>

```bash
/config/passport.js
```

<h3>Passport GoogleStrategy</h3>

```bash
passport.use(new GoogleStrategy({
    clientID:"YOUR-GOOGLE-ID-API", // ID do cliente da API
    clientSecret:"YOUR-SECRET", //Chave Secreta da API
    callbackURL:"http://localhost:3000/google/callback",
    passReqToCallback:true
  },
  function(request, accessToken, refreshToken, profile, done) {
    return done(null, profile);
  }
));
``` 
<h3>Passport FacebookStrategy</h3>

```bash
passport.use(new FacebookStrategy(
  {
    clientID : "YOUR-FACEBOOK-ID-API", // ID do cliente da API
    clientSecret : "YOUR-SECRET-API", //Chave Secreta da API
    callbackURL : "http://localhost:3000/facebook/callback",
    profileFields: ['id', 'emails', 'link', 'locale', 'name',
    'timezone', 'updated_time', 'verified', 'displayName']
  },
``` 

<h3>Para Rodar</h3>

```bash
nodemon app.js
```

O código está em execução na porta 3000.

http://localhost:3000/
