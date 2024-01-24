#### Install nextjs app on current folder

```sh
npx create-next-app@latest
```

#### router.push vs redirect()

- outer.push() can only be used on the client
- redirect can be used on the client and server
- only router.push() pushes a new entry into the history stack so on back navigation the user will return to where they previously were

use throw to send something to catch block
