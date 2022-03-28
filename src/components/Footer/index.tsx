import * as C from './styles';

export const Footer = () => {
  return (
    <C.Container>
      <C.Info>
        <C.InfoDev>
          <C.Dev>
            <div className="info">
              <h1>Desenvolvedor: Rodrigo Fortaleza</h1>
            </div>
          </C.Dev>

          <C.Contacts>
            <div className="insta">
              <a href="https://www.instagram.com/edufortaleza/" target="_blank" rel="noreferrer" >
                <img src="/asset/insta.jpg" alt="" />
              </a>
            </div>

            <div className="link">
              <a href="https://www.linkedin.com/in/rodrigo-fortaleza-647b83206/" target="_blank" rel="noreferrer">
                <img src="/asset/link.png" alt="" />
              </a>
            </div>

            <div className="git">
              <a href="https://github.com/RodrigoFortaleza" target="_blank" rel="noreferrer">
                <img src="/asset/git.png" alt="" />
              </a>
            </div>
          </C.Contacts>

        </C.InfoDev>
      </C.Info>
    </C.Container>

  );
}