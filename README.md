# storybook-example

This repo has the basic setup for storybook that is a amazing tool for less error prone apps with react-native. I decided to create it so I can reuse it later in future projects. 


My code following the guide by Spencer Carli.

Link to the guide: https://www.reactnativeschool.com/building-a-component-library/configure-storybook


## Add Dependency

After basic react-native app setup you need the storybook lib:

```
npx -p @storybook/cli sb init 
```

This will install and init storybook with its standard boilerplate code.

After that export a component from your app to storybook, i.e the App.js:

```
export default from '../storybook';
```

## Running first time

Probably now you have a new folder with some sample code for storybook. Time for running!
Now run the command to start storybook: 

```
yarn storybook
```

This will start a local server in http://localhost:7007,  after running your app check this,
will probably have a button as an example.


## Autoloading stories

Install react-native-storybook-loader for autoloading:

```
yarn react-native-storybook-loader -D
```

Add to your package.json the following setup:

1) Add a script with:

```
"prestorybook": "rnstl"
```

And a configuration where the stories folder is where ROOT_DIR is the root path
to the folder where the stories folder is located.
```
 "config": {
    "react-native-storybook-loader": {
      "searchDir":  [
        "./$ROOT_DIR"
      ],
      "pattern": "**/*.stories.js"
    }
  }
```

The index of your storybook folder need to look like these:

```
import { AppRegistry } from 'react-native';
import { getStorybookUI, configure } from '@storybook/react-native';
import { loadStories } from './storyLoader';
import './rn-addons';

// import stories
configure(() => {
  // Loading stories HERE!!
  loadStories();
}, module);

const StorybookUIRoot = getStorybookUI({});

AppRegistry.registerComponent('%APP_NAME%', () => StorybookUIRoot);

export default StorybookUIRoot;
```


