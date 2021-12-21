const form = document.getElementById("myForm");

form.addEventListener("submit", (e) => {

    const siteName = document.getElementById("sitename").value;
    const siteUrl = document.getElementById("siteUrl").value;
    if (!siteName || !siteUrl) {
        alert("Please enter the form");
        return false;
    }
    const bookmark = {
        name: siteName,
        url: siteUrl,
    };
    if (localStorage.getItem("bookmarks") == null) {
        let bookmarks = [];
        bookmarks.push(bookmark);
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    } else {
        let bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
        bookmarks.push(bookmark);
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    }
    fetchBookmarks();
    e.preventDefault();
});

const fetchBookmarks = () => {
    let getbookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    const bookmarksResult = document.getElementById("bookmarksResult");
    bookmarksResult.innerHTML = "";

    getbookmarks.map((mark) => {
        bookmarksResult.innerHTML += `
  <div class="card my-5 shadow mb-5 bg-body rounded">
  <div class="card-body">
    <div class="d-grid gap-4 d-md-flex justify-content-md-start">
      <h3>${mark.name}</h3>
      <a class="btn btn-outline-warning" href="${mark.url}" class="pe-10">Visit</a>
      <a class="btn btn-outline-danger" onclick="deleteBookmark('${mark.url}')"  href='#'>Delete</a>
    </div>
  </div>
</div>
 `;
    })
}


const deleteBookmark = (url) => {
    console.log(url)
    let bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    for (let i in bookmarks) {
        if (bookmarks[i].url == url) {
            bookmarks.splice(i, 1)
        }
    }
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    fetchBookmarks();

}