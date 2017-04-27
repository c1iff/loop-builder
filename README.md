# Sitecast Builder App

Use this app to build UI blocks for the Sitecast platform.

## Getting Started

1. At the command prompt, clone the starter repository:

        $ git clone https://github.com/sitecast/builder

2. Change directory to `builder`, and install dependencies:

        $ cd starter
        $ npm install

3. Start the web server:

        $ npm run start

4. In a browser, go to `http://localhost:8080` and you'll see:

        Welcome

5. Start developing your application. Checkout this link for more information:

    * [Sitecast Getting Started](http://sitecast.com)


## Use Docker

To use Docker, follow these commands:

```
docker-compose build

docker-compose up
```

## Creating Custom Blocks

** work in progress


## Adding Additional Dependencies

1. Make sure you are in the project directory:

        $ cd [project-name]

2. Install the dependency via npm:

        $ npm install [dependency name] --save-dev

3. Import needed module into main.js

        go to './src/scripts/main.js'
        add import statement e.g. import Chart from 'chart.js';

4. Bundle your your code via webpack

        $ nmp run build

## Contributing

For guidlines on contributing to the starter app, please check out the
[Sitecast contribution guide](http://sitecast.com)

## More information

[Guides](http://sitecast.com)

## License

MIT License

Copyright (c) 2017 Sitecast

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
