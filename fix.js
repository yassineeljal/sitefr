const fs = require('fs');
let code = fs.readFileSync('src/components/idol-gallery-tmp.tsx', 'utf8');

code = code.replace(
  '<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] bg-foreground/10 backdrop-blur-md" onClick={() => setSelectedIdol(null)}>',
  '<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-md flex items-center justify-center p-4 md:p-8" onClick={() => setSelectedIdol(null)}>\n<div className="relative w-full max-w-5xl bg-background border border-border shadow-2xl flex flex-col md:flex-row overflow-hidden max-h-[90vh]">'
);

code = code.replace(
  '<motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} className="relative bg-background border border-border w-full max-w-5xl flex flex-col md:flex-row shadow-2xl" onClick={e => e.stopPropagation()}>',
  '<motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} className="w-full h-full flex flex-col md:flex-row overflow-y-auto overflow-x-hidden" onClick={e => e.stopPropagation()}>'
);

code = code.replace(
  '<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] bg-foreground/10 backdrop-blur-md" onClick={() => setSelectedAvatar(null)}>',
  '<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-md flex items-center justify-center p-4 md:p-8" onClick={() => setSelectedAvatar(null)}>\n<div className="relative w-full max-w-4xl bg-background border border-border shadow-2xl flex flex-col md:flex-row overflow-hidden max-h-[90vh]">'
);

code = code.replace(
  '<motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} className="relative bg-background border border-border w-full max-w-4xl flex flex-col md:flex-row shadow-2xl" onClick={e => e.stopPropagation()}>',
  '<motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} className="w-full h-full flex flex-col md:flex-row overflow-y-auto overflow-x-hidden" onClick={e => e.stopPropagation()}>'
);

// We need to insert </div> before the *first* </motion.div> of every block:
code = code.replace(/<\/motion\.div>\n\s*?<\/motion\.div>\n\s*?\)}/g, '</div>\n</motion.div>\n          </motion.div>\n        )}');


fs.writeFileSync('src/components/idol-gallery.tsx', code, 'utf8');
