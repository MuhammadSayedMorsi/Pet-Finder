# 1- install prettier => npm install -D prettiter
 to keep high code quality, -D refer to developer dependecies that i  don't want prettier go to production just for development.

# 2- inside package.json in script {} we should add prettier formate
  "formate": "prettier \"src/**/*.{js, html}\" --write"
  1- install prettier, in setting search about require config and mark on the input..
  2- create a .prettierrc file with empty {} just tell prettier to give me the default settings.

# 3- yarn add --save-dev eslint-config-prettier ? so what actually eslint do?
  eslint => code linter, prettier is only concern about space here is a return here how this file start how this formated but doesn't care about code actually does && eslint is much more concern about style what method you are using are you being accessible friendly etc..
        -- open the file and just pass this settings
                {
                  "extends": ["eslint:recommended", "prettier", "prettier/react"],
                  "plugins": [],
                  "parserOptions": {
                    "ecmaVersion": 2018,
                    "sourceType": "module",
                    "ecmaFeatures": {
                      "jsx": true
                    }
                  },
                  "env": {
                    "es6": true,
                    "browser": true,
                    "node": true

                  }
                }
# 4- inside package.json file and under formate put this
      {
        "lint": "eslint \"src/**/*.{js,jsx}\" --quiet",
      }

      *** [i get Error when try to implement yarn lint,, will look at this issues later]



 # [Only when create a porject from scratch.] install parcel why? webback is greate tool ant it's hard to configure it so parcel is greate because it do all thins for me out of bxo.
  - yarn  add --dev parcel-bundler
  - ** to make it work i should watch the tutorial on front end masters about parcel, and whe i try it now it did not work on create react app project, i think it will work on project that built from ground.


# BASIS___HOOKS

# 1- useState =>
  - allow us to make our components stateful,whereas this previously required using a class component, hooks give us the ability to write it using just function, it allow us to have more flexible components.

# 2- useEffect =>
  - effects are how you create [componentDidMount, componentDidUpdate, componentDidUnmount] from React, inside useEffect, you can do any sort of side-effect. type action that you would have previously done in one of React's lifecycle method. you can do things like fire Ajax Requests, integrate with third party libraries(like jquery plugin) fire off some telemetry, or anything else that you need to happen on the side of your component.

# 3- useContext =>
  -




# configure Eslint to use React Hooks
  - yarn add --dev eslint-plugin-react-hooks
    this is officullay rules from react team about writing hooks
      ** i have to copy the setting inside eslint file in Pet-Finder app in github
      *****it did not work when i try to setup inside careate-react-app,, maybe it will work inside an app that built from scratch.





# Create Custom Hook