function receivesAFunction(func) {
    func()
}

function returnsANamedFunction() {
    return function namedFunc() {

    }
}

function returnsAnAnonymousFunction() {
    return (function() {

    });
}