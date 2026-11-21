async function check(url, label) {
  const res = await fetch("http://localhost:3000" + url, {
    headers: { Host: "www.privatemoroccotransfers.com" },
  });
  const html = await res.text();
  console.log(`\n=== ${label} (${url}) ===`);
  console.log("Status:", res.status);
  
  const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  console.log("H1:", h1Match ? h1Match[1].replace(/<[^>]+>/g, "").trim() : "NOT FOUND");
  
  const dirMatch = html.match(/dir=["'](rtl|ltr)["']/i);
  console.log("Direction dir:", dirMatch ? dirMatch[1] : "NOT FOUND");
  
  const faqSchema = html.includes("FAQPage");
  console.log("FAQPage Schema Present:", faqSchema);
  
  const hasRawPlaceholders = /{price_[a-z_]+}/.test(html);
  console.log("Raw un-interpolated placeholders remaining:", hasRawPlaceholders ? "YES (ERROR)" : "NO (CLEAN)");
  
  const priceMatches = html.match(/€\d+/g);
  console.log("Sample EUR prices found:", priceMatches ? [...new Set(priceMatches)].slice(0, 5).join(", ") : "NONE");
  
  const madMatches = html.match(/\d+\s*MAD/g);
  console.log("Sample MAD prices found:", madMatches ? [...new Set(madMatches)].slice(0, 5).join(", ") : "NONE");
}

async function run() {
  await check("/transfers/marrakech-to-essaouira", "EN");
  await check("/fr/transfers/marrakech-to-essaouira", "FR");
  await check("/de/transfers/marrakech-to-essaouira", "DE");
  await check("/ar/transfers/marrakech-to-essaouira", "AR");
}

run();
