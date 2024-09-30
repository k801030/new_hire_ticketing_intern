publish:
	mkdir -p dist
	rm dist/ticketing_intern.zip
	zip -r dist/ticketing_intern.zip . -x "dist/*" -x ".idea/*" -x ".**/*" -x ".*" -x Makefile