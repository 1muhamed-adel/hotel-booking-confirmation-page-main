
const copyButton = document.getElementById('copyBtn');
copyButton.addEventListener('click', async () => {
  
  try {
    await navigator.clipboard.writeText('soleil-2026');
    copyButton.textContent = 'Copied!';
    
    setTimeout(() => {
      copyButton.textContent = 'Copy';
    }, 2000);
  } catch (err) {
    alert('Failed to copy text.');
  }
});
