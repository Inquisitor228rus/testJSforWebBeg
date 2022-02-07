const path = "/users/download/index.html"

isHtml = (args) => {
    return args.endsWith(".html")
}

console.log(isHtml(path))