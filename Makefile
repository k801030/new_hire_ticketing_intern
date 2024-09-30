publish:
	mkdir -p dist
	rm dist/ticketing_intern.zip
	zip -r dist/ticketing_intern.zip . -x "dest/*" -x ".idea/*" -x ".**/*" -x ".*" -x Makefile