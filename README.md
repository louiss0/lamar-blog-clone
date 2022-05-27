# Lamar Blog Clone

This is the clone of a blog site from webflow that i have implemented.
The main colors that are used are just gray.

To start up the server use the following command.

```bash
docker-compose up -d server
```

To download packages use this one

```bash
docker-compose run --rm npm install
```

The npm service is a _utility container_ that is used to access the node package manager called npm.

- The config file for vite looks like this

```javascript
export default defineConfig({
	server: {
		host: "0.0.0.0",

		port: 3000,

		watch: {
			usePolling: true,
		},
		plugins: [pugPlugin(), WindiCSS()],
	},
});
```

- Windi css config

```js
import { defineConfig } from "windicss/helpers";

export default defineConfig({
	attributify: {
		prefix: "w",
	},
});
```

## Folders and Files

| Folder  | Files                                                         |
| ------- | ------------------------------------------------------------- |
| app     | package.json, package-lock.json, tsconfig.json vite.config.ts |
| layouts | main.pug, home.pug                                            |
| mixins  | navbar.pug, container.pug                                     |
| src     | main.ts, style.css                                            |
| pages   | about.html, contact.html, posts.html                          |
