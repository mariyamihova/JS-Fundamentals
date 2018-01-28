function findVars(text) {
    let vars = text.match(/\b_[A-Za-z0-9]+\b/g);
    let value = '';
    let result = [];
    for (let item of vars) {
        if (item.startsWith("_")) {
            value = item.replace("_", '');
        }
        result.push(value.trim());
    }
    console.log(result.join(","));
}
findVars('__invalidVariable _evenMoreInvalidVariable_ _validVariable');
