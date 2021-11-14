To run the project, the server and the client should be started in two separate terminal windows.

Server:
  ```
  cd server
  npm i
  npm start
  ```
  
Client:
  ```
  cd client
  npm i
  npm start
  ```

"Kérlek, írd össze, hogy mit változtatnál a fentiekhez képest, ha egy skálázható, több szerveres környezetben kellene üzemeltetni a kódot, akár több ezer felhasználóval."

- Első lépésként mindenképpen adatbázist használnék file-ba írás helyett. Mivel a feladatban csak egy darab adatot tárolunk és írunk felül, ezért itt nehéz további konkrétumot írni, de egy adatbázis technológia kiválasztásánál nagy vonalakban az alábbi elveket szoktam követni:
    - Ha sok relációból áll az adathalmazom, és előreláthatólag viszonlyag ritkán változik a strukturája, akkor egy SQL adatbázist használnék, a Node backenden sequelize libraryvel. Manapság joggal nagyon népszerű a PostgreSQL, úgyhogy én is emelett döntenék, de tapasztalataim szerint az esetek túlnyomó többségében nincs nagy jelentősége, hogy a népszerű SQL adatbázisok közül melyiket választjuk.
    - Ha az adatstruktúra gyakran változhat, vagy ha sok és nagy méretű adat lekérésre számítunk, akkor érdemes lehet egy file alapú, NoSQL adatbázis mellett dönteni. Ezesetben a legnépszerűbb általános megoldás a MongoDB, ha pedig a cloud szolgáltatónk rendelkezik saját NoSQL megoldással, azt is érdemes lehet választani.
- Az alkalmazásban használt statikus tartalmakat egy CDN-en cache-elném, ezáltal gyorsítva az alkalmazás betöltési sebességét.
- A szerveren beiktatnék egy reverse proxyt és egy szoftveres load balancert. Ez biztosítani tudja, hogy egy server instance ne kapjon egyszerre túl nagy terhelést, és megkönnyíti a deployment folyamatot is.
