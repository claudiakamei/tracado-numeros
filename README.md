# Traçado de Números 1 ~ 10

Treino de traçado dos números de 1 a 10 para tablet com caneta. O sistema mostra o caminho certo (da bolinha para a estrelinha) e avisa quando o aluno faz o traço no sentido errado. Sair da linha não é erro.

- **Treino:** um número grande por vez, com exemplo animado.
- **Folha 1 ao 10:** sempre liberada (quando o aluno treina todos os números, o aplicativo passa sozinho para ela); os 10 números pequenos lado a lado, como a folha de papel, sem exemplo. O aluno escolhe a ordem (começa a traçar no número que quiser); a folha fica completa quando os 10 estão feitos.
- **Novo aluno:** zera as estrelinhas do tablet (o progresso fica guardado no próprio aparelho).

Endereço: https://tracado.kameiflow.com

- `index.html`: o aplicativo inteiro (desenhos dos números, conferência do sentido e a tela).
- `sw.js`: guarda o aplicativo no tablet para funcionar sem internet. Ao publicar uma mudança, aumente `VERSAO`.
- `manifest.webmanifest` e `icons/`: nome e ícone para "Adicionar à tela inicial".
- `CNAME`: o endereço próprio usado pelo GitHub Pages.

Publicação: GitHub Pages, a partir da branch `main`. Tudo que entra na `main` vai para o ar em cerca de um minuto.
