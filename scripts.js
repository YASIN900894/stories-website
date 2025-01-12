// عرض قصة قصيرة
document.getElementById('short-btn').addEventListener('click', () => {
    const shortStory = "هذه قصة قصيرة مثيرة وممتعة!";
    document.getElementById('short-story').innerText = shortStory;
});

// عرض قصة طويلة
document.getElementById('long-btn').addEventListener('click', () => {
    const longStory = "هذه قصة طويلة تأخذك في رحلة مليئة بالتشويق والغموض.";
    document.getElementById('long-story').innerText = longStory;
});

// عرض جزء من قصة
document.getElementById('series-btn').addEventListener('click', () => {
    const seriesStory = "الجزء الأول من القصة يبدأ بتشابك الأحداث والحوارات المثيرة...";
    document.getElementById('series-story').innerText = seriesStory;
});
