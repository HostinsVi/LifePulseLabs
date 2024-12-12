LifePulseLabs é um site baseado na astética Cyberpunk, onde os humanos vivem uma vida extremamente tecnológica porém extremamente miserável.  
Dada a astética, muitos dos elementos em Cyberpunk extrapolam os limites do ético e moral, você compra produtos das megacorporações, e elas, por sua vez,
te transformam no produto. O governo não é controlado pelo candidado mais votado, e sim pelas corporações, que possuem dinheiro o suficiente pra comprar o Estado.


Com isso em mente, a ideia é ser um site de venda de Cyberware, que é qualquer produto tecnológico com o intuito de aprimorar o corpo humano, sejam braços biônicos 
ou chips neurais, o site venderá quaisquer produtos, patrocinados por megacorporações ou não.  
Na Página principal, um Slide com alguns dos itens que pretendia colocar. Dado o tempo, acabei por ficar com apenas 5 itens no slide. Cada item tem a logo da empresa, uma imagem do item, uma descrição e um botão de compra.  

No Header, ao clicar na logo, você será redirecionado à página principal. Ao clicar no Carrinho, será redirecionado à seu carrinho de compras. Em "Cyberware", apenas o primeiro item está implementado, "Biotech". Em "About", será redirecionado ao GitHub da LifePulse Labs e por último, em "Trace Ripper", seria onde eu implementaria uma opção de solicitação de consulta para determinados "RippersDocs" (a tradução direta seria um Doutor Estripador, que tem como profissão
estripar peças do seu corpo e trocar por novas, orgânicas ou não.), a ideia era ter emails personalizados que iriam alternar entre alguns presets discutindo sobre o item comprado.  

Na página Biotech, há um template de como deve ser o restante dos itens a serem adicionados. Todos os items Tem Nome, Espaço de RAM a ser utilizado (alguns
itens obrigam o portador a ter um NeuroChip, por isso o uso de RAM), preço, um botão pra compra do item e uma descrição. Abaixo sempre terá um Advertisement diferente (Deixei todas as imagens em /public/assets), de preferência ocupando
boa parte da página, já que dada a astética, qualquer sentido de intrusão é desconsiderado, pois todos os humanos são apenas produtos ao ver de qualquer corporação. 
E logo abaixo, haverão produtos comprados frequentemente em conjunto, com preços e opção de compra direta.  

No Carrinho, você pode adicionar e remover itens, alternar a quantia (Esta nunca indo abaixo de 1) e comprar o item de fato através do Stripe, ao comprar um item,
você recebe uma notificação na tela dizendo "Compra bem sucedida!". Para testar, coloque qualquer email contendo "@" e ".com" (ex.: asdas@dasdas.com), no cartão de 
credíto, coloque "4242 4242 4242 4242", para data de expiração, qualquer data no futuro (ex.:12/25) e para CVC, coloque "123".  

  Pra rodar o servidor, abra a pasta no VsCode e rode no terminal "node server.js"  
  Espero que goste professor, tive que procurar bastante coisa pra fazer isso funcionar, vou deixar aqui os itens que lembro de ter usado pra isso dar certo:  

  -HTML  
  -CSS  
  -JS  
  -Node  
  -JSON  
  -Express  
  -EJS  
  -GIT  
  -Stripe  
  -ChatGPT (No CSS pois havia esquecido muitas tags, e no JS pra compreendimento de erros.)
