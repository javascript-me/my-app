
TODO
=====

1. (Done) Use router.
2. Ensure Unit Test is 100% coverage.
3. Add ESLint checking.
4. 应该把+Specify Resources和对应的flyout放到同一个小组件当中，
这样window的click事件就能够区分出e.target是来自于小组件内还是来自于小组件外。
5. 进行服务器端的React编程。
6. 在React中使用D3。
7. 使用Browserify来进行编译。
8. 定义自己的Express。
9. 做一做展开语法{...this.props}。
10. 无状态的函数式组件。P40。
11. 高阶组件。

有趣的组件
=====
表格
auto complete

理念
=====
做到自带光环。耀眼的那种。

Steps
=====

Install dependencies. Please ensure you have latest node [e.g. https://nodejs.org/dist/v6.10.1/] installed in your machine.

```
npm install
```

Run unit test.

```
npm test
```

Run application: http://localhost:3000. Changes in JS file will automatically trigger browser refresh. 

```
npm start
```

Compile CSS

```
npm run css
```

Run coverage, then see unit test coverage report here: my-app/coverage/lcov-report/index.html

```
npm run coverage
```

Build to single optimized files and run. (http://localhost:5000)

```
npm run build
npm install -g serve
npm run server
```

