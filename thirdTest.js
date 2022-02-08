const path = "/users/download/index.html"

const isHtml = (args) => {
    return args.endsWith(".html")
}

console.log(isHtml(path))