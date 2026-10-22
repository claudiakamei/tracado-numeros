# Traçado de Números e Letras

Treino de traçado dos números de 1 a 10 e das letras minúsculas (a a z) e maiúsculas (A a Z), para tablet com caneta. O sistema mostra o caminho certo (da bolinha para a estrelinha), avisa quando o aluno faz o traço no sentido errado ou fora da ordem dos traços, e fala o nome do número ou da letra. Sair da linha não é erro.

Endereço: https://tracado.kameiflow.com

- **123 / abc / ABC:** botão no alto troca o conjunto (números, minúsculas, maiúsculas); o tablet lembra o último usado.
- **Voz:** fala o nome em português ou em inglês (botão "Voz"); usa a voz instalada no aparelho.
- **Treino:** um número ou letra grande por vez, com exemplo animado e o nome falado (botão "Ouvir").
- **Folha:** todos pequenos lado a lado, como a folha de papel, sem exemplo. Cada um é livre: o aluno faz só um, vários ou repete o mesmo (encostar num pronto apaga e recomeça); quando todos ficam feitos, aparece a comemoração. "Apagar a folha" limpa tudo.
- **Novo aluno:** zera as estrelinhas do tablet (o progresso fica guardado no próprio aparelho).

Letras: o desenho cinza é a fonte Comic Neue (versão livre no estilo Comic Sans, Google Fonts). Os caminhos de cada letra (`LETTER_PATHS` em `index.html`) seguem o meio do traço da fonte, na ordem escolar da letra bastão; o i e o j têm o pingo como último traço (basta encostar). Nas letras a, b, d, g, h, m, n, p, q, r e u o aluno pode fazer tudo sem tirar a caneta, voltando pela linha até a bolinha do próximo traço (`CONTINUOUS`); nas maiúsculas, em B, D, M, N, P e R (`CONTINUOUS_CAPS`). Depois de chegar na estrelinha, rabiscar sem tirar a caneta não conta como erro.

Arquivos:
- `index.html`: o aplicativo inteiro (desenhos, conferência do sentido e da ordem, tela).
- `sw.js`: guarda o aplicativo no tablet para funcionar sem internet. Ao publicar uma mudança, aumente `VERSAO`.
- `manifest.webmanifest` e `icons/`: nome e ícone para "Adicionar à tela inicial".
- `CNAME`: o endereço próprio usado pelo GitHub Pages.

Publicação: GitHub Pages, a partir da branch `main`. Tudo que entra na `main` vai para o ar em cerca de um minuto.
