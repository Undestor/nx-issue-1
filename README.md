# nx-issue-1

Repository to reproduce the following nx error using `angularLibraryGenerator` with `prettier` v3

```
TypeError: A dynamic import callback was invoked without --experimental-vm-modules

      at Object.<anonymous> (../node_modules/prettier/index.cjs:593:23)
      ...
```

## How to reproduce?

- Clone repository
- cd angular-monorepo
- npm install
- npx nx test my-plugin

### How to get the test green?

- Change dependency `"prettier": "3.2.5"` to `"prettier": "^2.6.2"`
- npm install
