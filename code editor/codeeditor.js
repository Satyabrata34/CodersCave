const codeInput = document.getElementById("code");
const outputFrame = document.getElementById("output");

codeInput.addEventListener("input", () => {
    const code = codeInput.value;
    const outputDocument = outputFrame.contentDocument;
    outputDocument.open();
    outputDocument.write(code);
    outputDocument.close();
});

// Optional: Set an initial code in the editor
codeInput.value = `<!DOCTYPE html>
<html>
<head>
    <title>My Webpage</title>
</head>
<body>
    <h1>Hello, World!</h1>
</body>
</html>`;