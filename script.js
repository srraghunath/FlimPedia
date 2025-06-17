const form=document.getElementById("form");
const display=document.getElementById("output");
form.addEventListener("submit",function(event){
    event.preventDefault();
    const moviename=form.elements["movie"].value;
    search(moviename);
    form.reset();
})
function search(moviename){
    const details=fetch(`https://www.omdbapi.com/?apikey=7d4c0254&t=${moviename}`);
    details.then((val)=>{
        return val.json();
    }).then((data)=>{
        localStorage.clear();
        localStorage.setItem("data",JSON.stringify(data));
        displays(data);
    })
}
function displays(data){
    const dataa=localStorage.getItem("data");
    display.innerHTML="";
    const sdiv=document.createElement("div");
    console.log(dataa);
    sdiv.innerHTML=`<div id="out">
  <p id="title"><strong>${data.Title} (${data.Year})</strong></p>
  <div class="info-container">
    <img id="poster" src="${data.Poster}" alt="Poster">
    <div class="info-text">
      <p><strong>Rated:</strong> ${data.Rated}</p>
      <p><strong>Released:</strong> ${data.Released}</p>
      <p><strong>Runtime:</strong> ${data.Runtime}</p>
      <p><strong>Genre:</strong> ${data.Genre}</p>
      <p><strong>Director:</strong> ${data.Director}</p>
      <p><strong>Writer:</strong> ${data.Writer}</p>
      <p><strong>Actors:</strong> ${data.Actors}</p>
      <p><strong>Plot:</strong> ${data.Plot}</p>
      <p><strong>Language:</strong> ${data.Language}</p>
      <p><strong>Country:</strong> ${data.Country}</p>
      <p><strong>Awards:</strong> ${data.Awards}</p>
      <p><strong>IMDb Rating:</strong> ${data.imdbRating}</p>
      <p><strong>IMDb Votes:</strong> ${data.imdbVotes}</p>
      <p><strong>Box Office:</strong> ${data.BoxOffice}</p>
    </div>
  </div>
</div>`
          display.appendChild(sdiv);
}
