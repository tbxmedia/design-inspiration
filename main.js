document.addEventListener("DOMContentLoaded", () => {
    const newsCarousel = document.querySelector(".news-carousel");

    const latestNews = [
        { title: "Breaking: Youth Voter Turnout Hits Record High", link: "#" },
        { title: "How Teens Are Changing the Climate Conversation", link: "#" },
        { title: "The Power of Local Politics for Young Leaders", link: "#" },
        { title: "Five Steps to Organizing a Successful Rally", link: "#" },
    ];

    latestNews.forEach(news => {
        const newsItem = document.createElement("div");
        newsItem.innerHTML = `<h3>${news.title}</h3><a href="${news.link}">Read More</a>`;
        newsCarousel.appendChild(newsItem);
    });
});
