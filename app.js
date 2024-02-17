async function getAnimeQuote() {
  const elementRefs = [
    document.querySelector(".quote"),
    document.querySelector(".character"),
    document.querySelector(".anime"),
  ];
  elementRefs.forEach((el) => {
    el.textContent = "Loading....";
  });
  try {
    const res = await fetch("https://animechan.xyz/api/random");
    if (!res.ok) throw Error(res.status);
    const quote = await res.json();
    elementRefs[0].textContent = `"${quote.quote}"`;
    elementRefs[1].textContent = `-${quote.character}`;
    elementRefs[2].textContent = `${quote.anime}`;
  } catch (err) {
    console.log(err);
    elementRefs[0].textContent = "Try Again Later, An Error Occured";
    elementRefs[1].textContent = "- Someone";
    elementRefs[2].textContent = "";
  }
}

getAnimeQuote();
