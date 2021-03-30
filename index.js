const query = document.querySelector("#query");
const searchButton = document.querySelector("#searchButton");

function doSearchHandler() {
    const queryKey = query.value;
    if (queryKey != null && queryKey.length > 0) {
        const search = "https://www.baidu.com/s?ie=UTF-8&wd=";
        location.href = search + queryKey;
    }
}

// 搜索按钮点击事件
searchButton.addEventListener("click", (e) => doSearchHandler());

// 输入框回车事件
query.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
        doSearchHandler();
    }
});