const fs = require('fs');
let code = fs.readFileSync('src/components/navbar.tsx', 'utf8');

code = code.replace(
  /\/\/ Ne s'affiche que si le quiz est pass.*?retour/,
  '// Navbar is global'
);
code = code.replace(
  /if \(\!quizPassed && pathname !== "\/"\) return null;/,
  '// Accessible from everywhere'
);

code = code.replace(
  /className="hidden sm:flex gap-8"/g,
  'className="flex items-center gap-8 text-xs font-mono"'
);

fs.writeFileSync('src/components/navbar.tsx', code, 'utf8');
console.log('navbar fixed');
