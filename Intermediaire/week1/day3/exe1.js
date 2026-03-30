function ajouterProduit(catalogue, product) {
  let maxId = 0;

  for (const p of catalogue) {
    if (p.id > maxId) {
      maxId = p.id;
    }
  }

  const nouveauProduit = { ...product, id: maxId + 1 };

  return [...catalogue, nouveauProduit];
}

function mettreAJour(catalogue, id, modifications) {
  const result = [];

  for (const p of catalogue) {
    if (p.id === id) {
      result.push({ ...p, ...modifications });
    } else {
      result.push(p);
    }
  }

  return result;
}

function supprimerProduit(catalogue, id) {
  const result = [];

  for (const p of catalogue) {
    if (p.id !== id) {
      result.push(p);
    }
  }

  return result;
}

function getProduitById(catalogue, id) {
  for (const p of catalogue) {
    if (p.id === id) {
      return p;
    }
  }
  return null;
}


const c1 = ajouterProduit(catalogue, {
  nom: "pen",
  cat: "school",
  prix: 1.10,
  stock: 200,
  note: 4.0
});

console.log(c1.length);
console.log(c1[c1.length - 1].id);

const c2 = mettreAJour(catalogue, 2, { stock: 50 });

console.log(c2.find(p => p.id === 2).stock);
console.log(catalogue.find(p => p.id === 2).stock);