const fs = require('fs');
let code = fs.readFileSync('src/components/idol-gallery.tsx', 'utf8');

code = code.replace(
  'import { useState, useEffect } from "react";',
  'import { useState, useEffect } from "react";\nimport { createPortal } from "react-dom";'
);

code = code.replace(
  '  const [selectedAvatar, setSelectedAvatar] = useState<any | null>(null);',
  '  const [selectedAvatar, setSelectedAvatar] = useState<any | null>(null);\n  const [mounted, setMounted] = useState(false);\n  useEffect(() => { setMounted(true); }, []);'
);

code = code.replace(
  /<AnimatePresence>([\s\S]*?\{selectedIdol && \([\s\S]*?\}\)[\s\S]*?)<\/AnimatePresence>/,
  '{mounted && createPortal(<AnimatePresence></AnimatePresence>, document.body)}'
);

code = code.replace(
  /<AnimatePresence>([\s\S]*?\{selectedAvatar && \([\s\S]*?\}\)[\s\S]*?)<\/AnimatePresence>/,
  '{mounted && createPortal(<AnimatePresence></AnimatePresence>, document.body)}'
);

code = code.replace(/rounded-md|rounded-lg|rounded-xl|rounded-2xl/g, 'rounded-none');
code = code.replace(/object-contain/g, 'object-cover');

fs.writeFileSync('src/components/idol-gallery.tsx', code, 'utf8');
console.log('modal fixed with portal');
