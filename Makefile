push:
	npm version patch && npm publish

link:
	rm -rf dist && yarn build && cd dist  && yarn link && cd ../ && yarn link "crypto-token-icon"