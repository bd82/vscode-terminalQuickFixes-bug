const vscode = require("vscode");

const commandName = "extension.helloWorld";
/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  console.log(
    'Congratulations, your extension "vscode-terminal-api-bug" is now active!',
  );

  context.subscriptions.push(
    vscode.commands.registerCommand(commandName, function (from) {
      vscode.window.showInformationMessage(
        `Hello World from ${from ?? "no arg!"}!`,
      );
    }),
  );

  const providerNoArg = {
    provideTerminalQuickFixes(result) {
      if (!result?.outputMatch) {
        console.log("no output");
        return;
      }
      const actions = [];

      const jouleAction = {
        command: commandName,
        title: "Explain No Args",
      };
      actions.push(jouleAction);

      return actions;
    },
  };

  const providerWithArg = {
    provideTerminalQuickFixes(result) {
      if (!result?.outputMatch) {
        console.log("no output");
        return;
      }
      const actions = [];

      const jouleAction = {
        command: commandName,
        title: "Explain With Args",
        arguments: ["mars"],
      };
      actions.push(jouleAction);

      return actions;
    },
  };

  context.subscriptions.push(
    vscode.window.registerTerminalQuickFixProvider(
      "myquickfixNoArg",
      providerNoArg,
    ),
  );

  context.subscriptions.push(
    vscode.window.registerTerminalQuickFixProvider(
      "myquickfixWithArg",
      providerWithArg,
    ),
  );
}

module.exports = {
  activate,
};
