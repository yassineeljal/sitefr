const fs = require('fs');
let code = fs.readFileSync('src/app/galerie/page.tsx', 'utf8');

code = code.replace(
  'pt-24 pb-10 sm:px-10 sm:pt-32 sm:pb-14',
  'pt-32 pb-10 sm:px-10 sm:pt-40 sm:pb-14'
);

fs.writeFileSync('src/app/galerie/page.tsx', code, 'utf8');
console.log('galerie padding fixed');
