import ListNoticia from './ListarNoticias';
import './Main.css';

function Noticias(){
    const newsData = [
        {
            id: '1',
            titulo: 'BYD Sea Lion 7 é o SUV do Seal e chega ao Brasil no 1º semestre de 2025',
            descricao: 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker..',
            link: 'https://www.uol.com.br/carros/colunas/jorge-moraes/2024/10/15/byd-sea-lion-7-e-o-suv-do-seal-e-chega-ao-brasil-no-1-semestre-de-2025.htm?cmpid=copiaecola',
            imagem: 'https://conteudo.imguol.com.br/c/entretenimento/03/2024/10/15/byd-sea-lion-1728975263099_v2_900x506.jpg.webp', // URL de exemplo
          },
          {
            id: '2',
            titulo: 'BYD Sea Lion 7 é o SUV do Seal e chega ao Brasil no 1º semestre de 2025',
            descricao: 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.',
            link: 'https://www.uol.com.br/carros/colunas/jorge-moraes/2024/10/15/byd-sea-lion-7-e-o-suv-do-seal-e-chega-ao-brasil-no-1-semestre-de-2025.htm?cmpid=copiaecola',
            imagem: 'https://conteudo.imguol.com.br/c/entretenimento/03/2024/10/15/byd-sea-lion-1728975263099_v2_900x506.jpg.webp', // URL de exemplo
          },
          {
            id: '3',
            titulo: 'BYD Sea Lion 7 é o SUV do Seal e chega ao Brasil no 1º semestre de 2025',
            descricao: 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.',
            link: 'https://www.uol.com.br/carros/colunas/jorge-moraes/2024/10/15/byd-sea-lion-7-e-o-suv-do-seal-e-chega-ao-brasil-no-1-semestre-de-2025.htm?cmpid=copiaecola',
            imagem: 'https://conteudo.imguol.com.br/c/entretenimento/03/2024/10/15/byd-sea-lion-1728975263099_v2_900x506.jpg.webp', // URL de exemplo
          },
          {
            id: '4',
            titulo: 'BYD Sea Lion 7 é o SUV do Seal e chega ao Brasil no 1º semestre de 2025',
            descricao: 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.',
            link: 'https://www.uol.com.br/carros/colunas/jorge-moraes/2024/10/15/byd-sea-lion-7-e-o-suv-do-seal-e-chega-ao-brasil-no-1-semestre-de-2025.htm?cmpid=copiaecola',
            imagem: 'https://image1.mobiauto.com.br/images/api/images/v1.0/409032180/transform/fl_progressive,f_webp,q_70,w_600', // URL de exemplo
          },
      ];
    return(
        <div className='Main'>
            <div className="app">
                <h1>Lista de Notícias</h1>
                <ListNoticia news={newsData} />
            </div>
        </div>
    )

}
export default Noticias;