const xhr = new XMLHttpRequest();

const divArticles = document.getElementById("articles");
const title = document.getElementsByTagName("h1")[0];
const subtitle = document.createElement("h3");
const articlesURL = "./news_article.json";

const genLink = (article) => {
    const div = document.createElement("div");
    const span = document.createElement("span");
    const link = document.createElement("a");

    span.innerText = "Link: ";

    link.innerText = article.link;
    link.setAttribute("href", article.link);
    link.setAttribute("target", "_blank");

    div.appendChild(span);
    div.appendChild(link);

    return div;
};

const genDetails = (article) => {
    const ul = document.createElement("ul");

    article.details.forEach((d) => {
        const li = document.createElement("li");
        li.innerText = d;
        ul.appendChild(li);
    });
    return ul;
};

const addArticle = (article) => {
    const wrapper = document.createElement("div");

    const title = document.createElement("h3");
    title.innerText = article.title;

    const description = document.createElement("p");
    description.innerText = article.description;

    const details = genDetails(article);

    const link = genLink(article);

    wrapper.appendChild(title);
    wrapper.appendChild(description);
    wrapper.appendChild(details);
    wrapper.appendChild(link);

    divArticles.appendChild(wrapper);
};

document.addEventListener("DOMContentLoaded", () => {
    subtitle.innerText = `The Best 80's Synth Band`;

    title.after(subtitle);

    xhr.responseType = "json";
    xhr.onload = function () {
        this.response.articles.forEach((article) => {
            addArticle(article);
        });
    };
    xhr.open("GET", articlesURL);
    xhr.send();
});
