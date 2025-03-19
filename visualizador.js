

//função que foi chamada no html, e que é chamada quando o usuário clicar em "Carregar"

//funcao loadFile()
function loadFile() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    if (!file) {
        alert('Por favor, selecione um arquivo.');
        return;
    }

    const reader = new FileReader();

    reader.onload = function(e) {
        const content = e.target.result;
        const fileContentDiv = document.getElementById('fileConteudo');
        fileContentDiv.innerHTML = '';  // Limpar qualquer conteúdo anterior

        if (file.name.endsWith('.html')) {
            // Criar um iframe para isolar o conteúdo do HTML
            const iframe = document.createElement('iframe');
            iframe.style.width = '100%';
            iframe.style.height = '500px';  // Ajuste conforme necessário
            fileContentDiv.appendChild(iframe);

            const doc = iframe.contentDocument || iframe.contentWindow.document;
            doc.open();
            doc.write(content);
            doc.close();

        } else if (file.name.endsWith('.css')) {
            const style = document.createElement('style');
            style.textContent = content;
            document.head.appendChild(style);

        } else if (file.name.endsWith('.js')) {
            const script = document.createElement('script');
            script.textContent = content;
            document.body.appendChild(script);
        }
    };

    reader.readAsText(file);
}


