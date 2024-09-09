# app-loja-back-end

comandos:

npx prisma generate
npx prisma migrate dev --name repopulando banco
cd .\prisma\
node populate
cd ..
npm run dev