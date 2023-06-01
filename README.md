# eslint-config-javascript-style
This package provides .eslintrc as an extensible shared config.
This is an extension based on the [Airbnb Base JavaScript Style Guide](https://github.com/airbnb/javascript).

## Usage
To start using ESLint, check out the [Getting started](http://eslint.org/docs/user-guide/getting-started) section on [ESLint.org](http://eslint.org/).

We export several ESLint configurations for your usage. Including some extra optional configurations for tests. Configurations exported are as follows:

* base: base set of rules
* react: base set of rules plus react rules
* test: base set of rules plus test rules
* test-react: react rules plus test rules plus test-react rules

### eslint-config-javascript-style
The default export contains all the basic ESLint rules for ES6.

This uses all the rules as mentioned in the Airbnb base style guide except the following rules:

* `indent` is set to 4 spaces instead of 2.
* `comma-dangle` is set to error. So commas cannot be left dangling.
* `no-trailing-spaces` is set to error, with comments excluded.
* `max-len` is disabled. You are responsible yourself to keep the code short and concise.
* `spaced-comment` is set to always, balanced. So in a block comment you must have a space after `/*` and before `*/`.
* `func-names` is disabled. You are not required to name all of the functions.
* `no-underscore-dangle` is disabled.
* `radix` is disabled. If you need to enforce a radix param in your `parseInt` calls you will have to enforce this yourself.
* `no-prototype-builtins` is disabled. You must make sure yourself that don't overwrite the builtins.
* `arrow-parens` is set to `as-needed`. Parens are required if there are multiple arguments to the function, and required to be omitted otherwise.
* `arrow-body-style` is disabled. This rule does not accommodate usage of returning arrow functions in useEffect hooks.
* `no-void` is disabled. If you need an easy and unchangeable way to get `undefined`, use `void 0`
* `no-continue` is disabled. You can use the `continue` keyword if you need to.
* `no-plusplus` is disabled. This is actually the fastest way to increment a variable.
* `class-methods-use-this` is disabled. If you can, always abstract functions that don't need to be in a class, but it's not horrible if they are.
* `no-mixed-operators` You cannot used mixed operators.
* `import/no-dynamic-require` is disabled. Sometimes you need to do dynamic requires.
* `prefer-promise-reject-errors` is disabled. You can pass something other than an Error object to a promise reject function.
* `operator-linebreak` is set to `after`. Line breaks can happen after operators but not before.
* `function-paren-newline` is disabled. Newlines between function parens is allowed.
* `no-restricted-globals` is disabled. Global variables can be referenced.
* `default-param-last` is disabled. Params with default values are allowed in other positions.
* `consistent-return` is disabled. You can return multiple types of values and undefined from a function. It is up to you to document the behavior so that it is clear.
* `import/prefer-default-export` is disabled. You don't need to use default export even if there is only one export.
* `no-unused-expressions` is set to `allowShortCircuit`. So you cannot just have an expression like `a + 3` with no assignment, but you can do `isActive && doSomething()`.
* `no-async-promise-executor` is disabled. Async functions are allowed as an executor function of a promise. Will eventually be enabled.
* `max-classes-per-file` is disabled. You can define multiple classes in one file.
* `prefer-destructuring` is disabled. You can assign specific elements of an array or properties of an object to a variable instead of using destructuring.
* `no-self-assign` is disabled. You can assign a variable to itself. Will eventually be enabled
* `no-return-assign` is set to `except parens`, so a function can return an assignment if the assignment is inside parentheses.
* `no-param-reassign` is disabled. You can assign a new value to a parameter passed into a function. May eventually be enabled.
* `import/no-cycle` is disabled. We can have cyclical dependencies. Will eventually be enabled.
* `import/no-import-module-exports` is disabled. You can use in import statement in a file with module.exports.
* `import/no-unresolved` is disabled. Eslint is not able to account for dependency hoisting which yarn does and complains that a module cannot be resolved.

### javascript-style/react
Lints ES5/6 and also React. It requires the `eslint` and `eslint-plugin-react` packages.

This uses all the rules as mentioned in the [Airbnb style guide with React](https://github.com/airbnb/javascript/tree/master/react)
except the following rules:

* `react/jsx-indent-props` is set to 4 spaces instead of 2, so it's the same as the regular indent setting.
* `react/jsx-indent` is set to 4 spaces instead of 2, so it's the same as the regular indent setting.
* `react/forbid-prop-types` is set to 0. You can use any prop types you want. You need to make sure yourself that you use the proper ones.
* `react/no-danger` is set to 0. This allows you to use `dangerouslySetInnerHTML`. Only use if you have to!
* `react/no-unescaped-entities` is set to 0. This doesn't work properly sometimes
* `react/no-array-index-key` is set to 0. Sometimes you just don't have more than the index key
* `react/no-find-dom-node` is set to 0. Sometimes you just need to find the DOM node for more complex plugins.
* `react/button-has-type` is disabled. Button elements can be used without specifying a type.
* `react/destructuring-assignment` is disabled. Will eventually be enabled.
* `react/function-component-definition` is ['function-declaration', 'arrow-function']. Function components must be defined as either a function declaration or an arrow function.
* `react/require-default-props` is disabled. You do not have to define a defaultProps value for non-required props.
* `react/no-unknown-property` is set to ignore properties `actionKey`, `actionkey`, and `inhand`.
* `react/jsx-no-bind` is disabled. You can use bind in react components.
* `react/jsx-filename-extension` is disabled. You can have JSX in a file named .js.
* `react/jsx-one-expressino-per-line` is disabled. You can have multiple JSX expressions on one line.
* `react/jsx-props-no-spreading` is disabled. You can use spread when passing props to a JSX element.
* `react/jsx-no-useless-fragment` You cannot create a fragment with only one element inside.
* `react/prefer-stateless-function` is disabled. You can create class-based React components.

Furthermore, the Object rest/spread is enabled by default.

## Testing Usage
The test configuration disables the following rules to make writing tests easier:

* `no-unused-expressions` is set to 0. This is so you can easily test if something throws an error without assigning it.
* `no-new` is set to 0. This is so you can call `new` without assigning it.

### Test runner specific configuration
We also export several test runner specific configurations which will make it easier to write tests for your specific test runner.

This will make sure that ESLint will not throw errors when functions are not using pascalCase and will disable the requirement to name functions.

#### Mocha
This will simply set the Mocha env to `true`.
