PATH := ./node_modules/.bin:$(PATH)

#Recursive file search
rwildcard=$(wildcard $1$2) $(foreach d,$(wildcard $1*),$(call rwildcard,$d/,$2))

# lib/**/*.styl
STYLUS_FILES := $(call rwildcard,lib/,*.styl)

# public/templates/**/*.jade
DOCS_TEMPLATES := $(call rwildcard,public/templates/,*.jade)



build: all

all: index.html public/css/main.min.css

clean:
	rm index.html
	rm public/css/main.css
	rm public/css/main.min.css

index.html: $(DOCS_TEMPLATES)
	jade -o . -P public/templates/index.jade

public/css/main.min.css: public/css/main.css
	cssmin public/css/main.css > public/css/main.min.css

public/css/main.css: public/styl/main.styl $(STYLUS_FILES)
	stylizer -f public/styl/main.styl -o public/css/main.css
