// Aguarda o conteúdo da página ser totalmente carregado
document.addEventListener('DOMContentLoaded', function() {
  // Acessa o objeto global do Telegram Web App
  const tg = window.Telegram.WebApp;

  // Informa ao cliente Telegram que o app está pronto para ser exibido.
  // Isso pode ajustar o tamanho da janela e remover a tela de carregamento.
  tg.ready();

  // Acessa o formulário e o campo de entrada pelo ID
  const form = document.getElementById('nameForm');
  const nameInput = document.getElementById('nameInput');

  // Adiciona um ouvinte de evento para o envio do formulário
  form.addEventListener('submit', function(event) {
    // Previne o comportamento padrão de submissão do formulário (que recarregaria a página)
    event.preventDefault();

    // Obtém o valor do campo de entrada
    const name = nameInput.value.trim();

    // Verifica se o nome não está vazio
    if (name) {
      // Cria um objeto de dados e o converte para uma string JSON
      const data = JSON.stringify({ name: name });

      // O método-chave: envia os dados para o bot.
      // O cliente Telegram recebe esses dados e os encaminha como uma
      // mensagem de serviço para o backend do bot.
      tg.sendData(data);

      // Opcional, mas recomendado: fecha a janela do Mini App após o envio
      // para proporcionar uma transição suave de volta para o chat.
      tg.close();
    }
  });
});