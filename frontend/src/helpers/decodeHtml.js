const decode = (html) => {
    let text = document.createElement("textarea");
    text.innerHTML = html;
    return text.value;
}

export default decode;