function flattenArticle(article) {
  return article[0] + article[1] + article[2];
}

function searchTerm(term, sections) {
  const reg = new RegExp(term.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"), "gi");
  const output = {};
  for (const [sectionName, section] of Object.entries(sections)) {
    const sectionOutput = output[sectionName] = [];
    for (const article of section.file || []) {
      sectionOutput.push((flattenArticle(article).match(reg) || []).join('').length);
    }
  }
  return output;
}

export default function search(query="", sections) {
  const terms = query.split(' ');
  const out = {};
  for (const [sectionName, section] of Object.entries(sections)) {
    out[sectionName] = [];
    for (const article of section.file || []) {
      out[sectionName].push(0);
    }
  }
  for (const term of terms) {
    if (term === '' || term === ' ') continue;
    const result = searchTerm(term, sections);
    for (const [sectionName, results] of Object.entries(result)) {
      out[sectionName] = out[sectionName].map((v, i) => v + results[i]);
    }
  }
  for (const [sectionName, resultSet] of Object.entries(out)) {
    const newSet = {};
    let temp = [];
    for (const [index, score] of Object.entries(resultSet)) {
      if (score === 0) continue;
      temp.push([Number(index), score]);
    }
    temp = temp.sort((a, b) => b[1] - a[1]);
    out[sectionName] = temp;
  }
  console.log(out);
  return out;
};
