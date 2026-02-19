const express = require('express');
const path = require('path');
const { CAR_BRANDS, PARTS_CATEGORIES, PARTS_DATABASE } = require('./src/data/brands');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Helper: normalize string for search
function normalize(str) {
  return String(str || '').toLowerCase().replace(/[\s\-_]/g, '');
}

// API: Get all brands
app.get('/api/brands', (req, res) => {
  res.json(CAR_BRANDS);
});

// API: Get all categories
app.get('/api/categories', (req, res) => {
  res.json(PARTS_CATEGORIES);
});

// API: Search parts
app.get('/api/search', (req, res) => {
  const { q, brand, category, model, year } = req.query;
  let results = [...PARTS_DATABASE];

  if (q && q.trim()) {
    const query = normalize(q.trim());
    results = results.filter(part => {
      const matchPart = normalize(part.partNumber).includes(query);
      const matchName = normalize(part.name.en).includes(query) ||
                        normalize(part.name.zh).includes(query) ||
                        normalize(part.name.ko).includes(query);
      const matchBrand = normalize(part.brand).includes(query);
      const matchOE = part.oeNumbers.some(oe => normalize(oe).includes(query));
      const matchCross = part.crossReferences.some(cr => 
        normalize(cr.number).includes(query) || normalize(cr.brand).includes(query)
      );
      const matchModel = part.models.some(m => normalize(m.model).includes(query));
      return matchPart || matchName || matchBrand || matchOE || matchCross || matchModel;
    });
  }

  if (brand && brand !== 'all') {
    results = results.filter(part => part.brandId === brand || 
      normalize(part.brand) === normalize(brand));
  }

  if (category && category !== 'all') {
    results = results.filter(part => part.category === category);
  }

  if (model && model !== 'all') {
    results = results.filter(part => 
      part.models.some(m => normalize(m.model).includes(normalize(model)))
    );
  }

  if (year) {
    const y = parseInt(year);
    results = results.filter(part => 
      part.models.some(m => {
        const [start, end] = m.years.split('-').map(Number);
        return y >= start && y <= end;
      })
    );
  }

  res.json({
    total: results.length,
    results: results
  });
});

// API: Get part by ID
app.get('/api/part/:id', (req, res) => {
  const part = PARTS_DATABASE.find(p => p.id === req.params.id || p.partNumber === req.params.id);
  if (!part) return res.status(404).json({ error: 'Part not found' });
  res.json(part);
});

// API: Get models for a brand
app.get('/api/models/:brandId', (req, res) => {
  const { brandId } = req.params;
  let models = [];
  Object.values(CAR_BRANDS).forEach(region => {
    region.brands.forEach(brand => {
      if (brand.id === brandId) models = brand.models;
    });
  });
  res.json(models);
});

// API: Statistics
app.get('/api/stats', (req, res) => {
  const totalBrands = Object.values(CAR_BRANDS).reduce((acc, r) => acc + r.brands.length, 0);
  const totalModels = Object.values(CAR_BRANDS).reduce((acc, r) => 
    acc + r.brands.reduce((a, b) => a + b.models.length, 0), 0);
  const totalOE = PARTS_DATABASE.reduce((acc, p) => acc + p.oeNumbers.length, 0);
  const totalCross = PARTS_DATABASE.reduce((acc, p) => acc + p.crossReferences.length, 0);
  res.json({
    totalParts: PARTS_DATABASE.length,
    totalBrands,
    totalModels,
    totalOE,
    totalCrossRefs: totalCross
  });
});

// Serve main HTML for all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚗 AutoParts Search Engine running on http://0.0.0.0:${PORT}`);
});
