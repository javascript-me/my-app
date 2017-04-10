
TODO
=====

1. Use router.
2. Ensure Unit Test is 100% coverage.
3. Add ESLint checking.
4. 应该把+Specify Resources和对应的flyout放到同一个小组件当中，
这样window的click事件就能够区分出e.target是来自于小组件内还是来自于小组件外。


Step
=====

Install dependencies. Please ensure you have latest node [e.g. https://nodejs.org/dist/v6.10.1/] installed in your machine.

```
npm install
```

Run unit test.

```
npm test
```

Run application.

```
npm start
```

Run coverage

```
npm run coverage
```

See unit test coverage report here:

```
my-app/coverage/lcov-report/index.html
```


(Optional) Build to single optimized files and run.

```
npm run build
npm install -g serve
npm run server
```

