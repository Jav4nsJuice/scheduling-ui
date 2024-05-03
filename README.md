# Scheduling UI

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites

- ### For MacOS Users

First we will download [Homebrew](https://docs.brew.sh/Installation).
Homebrew installatoin verification:

```sh
$ brew -v
```

Then, we will download nvm using homebrew:

```sh
$ brew install nvm
```

Installation verification:

```sh
$ nvm version
```

Your terminal will show None if your installation is ok.

**Node.js v18.18.0+**, **npm 9.8.1+** and **Angular/Cli v17.2.3** . NPM comes in bundle with Node.js

Use nvm to install Node.js and Angular/Cli version.

```sh
$ nvm install 18.18.0
```

Installation verification:

```sh
$ nvm use 18.18.0
$ node --version
$ npm --version
```

Angular v17.2.3 installation

```sh
$ npm install -g @angular/cli@17.2.3
```

Installation verification:

```sh
$ ng version
```

### Packages

Download the True Rewards project from GitLab and install the necessary dependencies by running:

```sh
$ git clone https://github.com/Jav4nsJuice/scheduling-ui.git
$ cd scheduling-ui
$ git checkout develop
$ nvm use 18.18.0
$ npm install
```

### Run the project

- **For develop environments**, start the server by running:

```sh
$ nvm use 18.18.0
$ npm start
```

The Project runs by default in port: 3005
To view web page: http://localhost:3005/tx-scheduling/