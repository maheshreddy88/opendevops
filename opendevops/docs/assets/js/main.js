// Function to add 'Copy to Clipboard' functionality to code blocks
document.addEventListener('DOMContentLoaded', function () {
    const codeBlocks = document.querySelectorAll('pre');

    codeBlocks.forEach(block => {
        // Create a 'copy' button
        const button = document.createElement('button');
        button.innerText = 'Copy';
        button.classList.add('copy-btn');

        // Append the button to each code block
        block.appendChild(button);

        button.addEventListener('click', () => {
            // Copy code to clipboard
            const code = block.querySelector('code').innerText;
            navigator.clipboard.writeText(code).then(() => {
                button.innerText = 'Copied!';
                setTimeout(() => {
                    button.innerText = 'Copy';
                }, 2000);
            });
        });
    });
});
