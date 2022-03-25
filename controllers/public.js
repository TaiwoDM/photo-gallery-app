exports.index = (req, res, next) => {
    res.render("public/index", {
        title: "home page",
        url: "",
    });
}

exports.blog = (req, res, next) => {
    res.render("public/blog", {
        title: "News and Upcomings",
        url: "/blogs",
    });
}

// exports.index = (req, res, next) => {
//     res.render("public/index", {
//         title: "home page",
//         url: "",
//     });
// }