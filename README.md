# vscode-terminal-api-bug


## Problem

When using `registerTerminalQuickFixProvider` to register a provider which returns a `Command` reference with **arguments**.
The command quick-fix terminal icon would fail launching the command with an error:
- ![image](https://github.com/user-attachments/assets/7c89f437-b786-44bf-b16b-e2c0e92643b2)

This only happens when the command refernece includes an `arguments` property, e.g:

```javascript
 const action = {
        command: commandName,
        title: "Explain With Args",
        arguments: ["mars"],
      };
```

## How to reproduce

1. clone this repo.
2. `npm install`
3. Open the root of this repo in VSCode Insiders (I Used `Version: 1.99.0-insider`)
4. `Run and Debug` tab --> `Run Extension`
5. Open Terminal in the `Extension Dev Host` newly opened VSCode window.
6. Use a command that fails (e.g `foo`)
7. Click on the quick-fix lightbulb in the terminal gutter.
   - ![image](https://github.com/user-attachments/assets/3232c659-bc3d-41e8-a00f-8e1f09aafc52)
8. Try both suggested quickfixs (with/without args).

## Results:  

1. The option "without args" will activate the Hello World demo command.
2. The option "WithArgs" will do nothing.
   - In the extension host's output channel you will see:
   - ![image](https://github.com/user-attachments/assets/49785f72-2b79-4aa0-b52e-3b09b1c6a0c9)
 

