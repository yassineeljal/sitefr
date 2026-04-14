const fs = require('fs');
let content = fs.readFileSync('src/app/creation/page.tsx', 'utf8');

// Fix encoding issues
content = content.replace(/Entitï¿½/g, 'Entité');
content = content.replace(/Entitè/g, 'Entité');
content = content.replace(/Entit/g, 'Entité');
content = content.replace(/Lumiï¿½re/g, 'Lumière');
content = content.replace(/Lumire/g, 'Lumière');
content = content.replace(/Lumire/g, 'Lumière');
content = content.replace(/Rï¿½solution/g, 'Résolution');
content = content.replace(/Rsolution/g, 'Résolution');
content = content.replace(/Rsolution/g, 'Résolution');
content = content.replace(/ï¿½ternitï¿½/g, 'Éternité');
content = content.replace(/ternit/g, 'Éternité');
content = content.replace(/ternit/g, 'Éternité');
content = content.replace(/Revï¿½tement/g, 'Revêtement');
content = content.replace(/Revtement/g, 'Revêtement');
content = content.replace(/Revtement/g, 'Revêtement');
content = content.replace(/CONFIRMï¿½E/g, 'CONFIRMÉE');
content = content.replace(/CONFIRME/g, 'CONFIRMÉE');
content = content.replace(/CONFIRME/g, 'CONFIRMÉE');
content = content.replace(/Gï¿½Nï¿½RER/g, 'GÉNÉRER');
content = content.replace(/GNRER/g, 'GÉNÉRER');
content = content.replace(/GNRER/g, 'GÉNÉRER');
content = content.replace(/Synthï¿½se/g, 'Synthèse');
content = content.replace(/Synthse/g, 'Synthèse');
content = content.replace(/Synthse/g, 'Synthèse');
content = content.replace(/DÃ©marrage/g, 'Démarrage');
content = content.replace(/Ã‰limination/g, 'Élimination');
content = content.replace(/DensitÃ©/g, 'Densité');

// Add Image import
if (!content.includes('import Image from "next/image"')) {
    content = content.replace('import { useRouter } from "next/navigation";', 'import { useRouter } from "next/navigation";\nimport Image from "next/image";');
}

// Remove previously added duplicate variables and functions if any
const getTextureImageScript = `  const getTextureImage = (texture: string) => {
    switch (texture) {
      case "Marbre poli": return "/assets/image_avatar_marbre.png";
      case "Lumière pure": return "/assets/image_avatar_lumiere.png";
      case "Pixels": return "/assets/image_avatar_pixel.png";
      default: return "/assets/image_avatar_marbre.png";
    }
  };`

if (!content.includes('const getTextureImage =')) {
    content = content.replace('const [isCompiling, setIsCompiling] = useState(false);', 'const [isCompiling, setIsCompiling] = useState(false);\n\n' + getTextureImageScript + '\n');
}

const previewHtml = `            <div className="mb-6 flex justify-center">
              <div className="relative aspect-square w-32 md:w-48 overflow-hidden bg-zinc-900 border border-border">
                <Image src={getTextureImage(texture)} alt={texture} fill className="object-cover grayscale" />
              </div>
            </div>`;

if (!content.includes('className="mb-6 flex justify-center"')) {
    content = content.replace(/<form id="avatar-form" onSubmit={handleGenerate} className="space-y-6">/, '<form id="avatar-form" onSubmit={handleGenerate} className="space-y-6">\n' + previewHtml);
}

fs.writeFileSync('src/app/creation/page.tsx', content, 'utf8');
console.log('Fixed page.tsx');
