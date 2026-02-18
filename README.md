# Car Parts Intelligent Search

🚗 A clean, fast, frontend-only **car parts lookup web app** powered by static data.  
Search by **OEM part number** to instantly get part details, specifications, compatibility, images, supplier prices, and simulated AI confidence scoring.

Currently includes sample data for popular European brands:  
BMW · Mercedes · Audi · Volkswagen · Porsche · Volvo · Land Rover

![Demo screenshot placeholder](https://via.placeholder.com/800x400/667eea/ffffff?text=Car+Parts+Intelligent+Search+Demo)  
*(Replace with real screenshots later)*

## Key Features

- ⚡ **Instant search** by OEM part number (e.g. `11-00-7-566-034`)
- 🏷 **Brand filtering** – All brands or specific: BMW, Mercedes, Audi, VW, Porsche, Volvo, Land Rover
- 📋 **Rich result display**:
  - Part name & category
  - Technical specifications (dimensions, thread, material, etc.)
  - Multiple high-resolution images (currently placeholders)
  - Supplier comparison (OEM + aftermarket: MANN, MAHLE, BOSCH, etc.)
  - Stock status & estimated delivery
  - Compatible vehicle models
  - Simulated AI matching confidence score
- 📱 **Fully responsive** glassmorphism + gradient UI – works great on mobile & desktop
- 🔗 **One-click quick examples** for instant demo

## Live Demo (Quick Start)

No backend or installation required – it's 100% static.

### Option 1: Open locally (fastest – 0 setup)

1. Clone or download the repository
   ```bash
   git clone https://github.com/AutoAIHub-start/auto-parts-search.git
   cd auto-parts-search
   Double-click index.html or open it in any browser

Option 2: Deploy free in 2 minutes (recommended for sharing)
Use Vercel (easiest & fastest):

Fork this repository to your GitHub account
Go to https://vercel.com → New Project → Import Git Repository
Select your forked repo → Deploy
In ~60 seconds you'll get a live URL (e.g. https://auto-parts-search-yourname.vercel.app)

Also works perfectly with Netlify, GitHub Pages, or any static host.
Included Sample Parts
Layer,Technology,Notes
Frontend,HTML + CSS + Vanilla JavaScript,No build tools / frameworks
Styling,"Pure CSS (Glassmorphism, gradients, animations)","Responsive, mobile-first"
Data,Static JavaScript object,europeanPartsDB in index.html
Deployment,Vercel / Netlify / GitHub Pages,Zero-config static hosting
How to Add More Parts
All data lives in index.html inside the europeanPartsDB object.
Example structure:
JavaScript
'NEW-PART-NUMBER': {
    partNumber: 'NEW-PART-NUMBER',
    name: 'Part Name in English / Chinese',
    brand: 'bmw',           // lowercase
    category: 'engine',
    oemNumber: 'optional',
    specifications: {
        'Outer Diameter': '76mm',
        // ...
    },
    compatibility: ['BMW 3 Series F30', 'BMW X5 F15'],
    images: [
        'https://via.placeholder.com/...',
        // real image URLs later
    ],
    suppliers: [
        { name: 'OEM', price: 168, stock: 'In Stock', delivery: '1 day' },
        { name: 'MANN', price: 95, stock: 'In Stock', delivery: '1-2 days' },
        // ...
    ]
}
After editing → save → refresh browser → search the new number.
Future plans: move data to separate .json file, add search API, real images via CDN, dynamic price fetching.
Limitations & Roadmap

Images are currently placeholders → replace with real URLs (Imgur, Cloudinary, GitHub raw, etc.)
Prices & stock are demo values → in production connect to real supplier APIs
AI confidence is simulated → can be replaced with real LLM calls later
Only European brands & few parts so far → community contributions welcome!

Planned features:

Separate JSON / database
More brands (Japanese, American…)
Real image gallery + zoom
Export / share result
Dark mode toggle
PWA support
Contributing
Pull requests are welcome!
Especially appreciated:

Adding real part data & images
Better styling tweaks
Connecting to actual price/stock APIs
Translation improvements

License
MIT License
⭐ If this project helps you, please give it a star!
Questions or ideas? Open an Issue.
text

**操作建议**（防止出错）：
1. 打开你的 GitHub 仓库 → 点右上角的 “Add file” → “Create new file”
2. 文件名填：`README.md`
3. 把上面全部内容粘贴进去
4. 下面 Commit new file → 直接点绿色按钮 “Commit new file”

这样就完成了，不会乱序。

如果你后续想改成中文版、加真实 Demo 链接、换截图，都可以随时告诉我，我再给你调整好的版本。祝项目顺利上线！








































Part NumberBrandDescriptionExample Use Case11-00-7-566-034BMWEngine Oil Filter3 Series F30, 5 Series F10A166-885-01-50MercedesAir FilterGLC, C-Class W205, E-Class06E-115-562-BAudiFuel FilterCommon 2.0 TFSI engines958-355-559-00PorscheBrake PadsCayenne / Macan307-906-08-01VolvoWiper BladeXC60 / S90LR-071-234Land RoverFilter (example)Range Rover / Discovery
