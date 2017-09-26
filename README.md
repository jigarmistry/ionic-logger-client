# ionic-logger-client
Ionic plugin to log the information. Use it for replacement of `console.log` with some extra features

### Usage
1. Install this plugin using command into the ionic app
    ```shell
    npm install --save https://github.com/jigarmistry/ionic-logger-client
    ```

1. Setup the logging in app.component file
    ```javascript
    import { setupLog } from "ionic-logger-client";
    setupLog({devMode:'1'}); // set devMode='0' if we do not need logging
    setupLog({host:'192.168.2.14'}); // set host of ionic-logger-server
    setupLog({devMode: '1', host:'192.168.2.14'}); // pass two options if needed
    ```

1. Use it when needed
    ```javascript
    import { logIt } from "ionic-logger-client";
    logIt('message', 'Here');
    logIt('object', {data:'data'});
    ```

1. Install `ionic-logger-server` and run the app


### Options

| Config  | Default | Description |
| ------------- | ------------- | --------|
| `devMode`  | "0"  | If "0" then logging will stop |
| `host`  | localhost/ip address of system  | It is possible to set the custom ip or host |