import { GithubLogo, LinkedinLogo } from 'phosphor-react';
import { Link } from 'react-router-dom';
import doctorImg from '../assets/images/doutor-feliz-segurando-prancheta-com-pacientes.png';
import manImg from '../assets/images/homem-negro-com-moletom-bege-mexendo-no-celular.png';
import womanImg from '../assets/images/mulher-negra-com-moleton-verde-com-as-duas-maos-no-peito.png';
import { CardService } from '../components/CardService';
import { PrimaryButton } from '../components/PrimaryButton';
import { Widget } from '../components/Widget';
export default function DoctorCare() {
  return (
    <>
      <section className="p-6 mx-auto md:max-w-screen-xl">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div>
            <header>
              <h4 className="text-center md:text-left text-brand-300 font-bold text-sm tracking-wider">
                BOAS-VINDAS A DOCTORCARE
              </h4>
              <h1 className="text-zinc-800 dark:text-zinc-100 text-4xl text-center md:text-left font-bold my-6">
                Assistência médica simplificada para todos
              </h1>
            </header>

            <div className="flex flex-col justify-center items-center md:items-start">
              <p className="text-lg text-zinc-500 dark:text-zinc-400 mb-8">
                Os médicos da DoctorCare vão além dos sintomas para tratar a
                causa raiz de sua doença e proporcionar uma cura a longo prazo.
              </p>
              <PrimaryButton />
            </div>
          </div>

          <div className="mx-auto mt-14 md:mt-0 md:mx-0">
            <img
              src={womanImg}
              alt="Mulher negra vestindo moletom verde com as duas mãos no peito e sorrindo"
              className="w-[260px] h-auto md:w-full md:h-full"
            />
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-14 w-full bg-white dark:bg-zinc-800 rounded-lg px-auto py-10">
            <div className="flex flex-col items-center gap-1">
              <h3 className="text-5xl font-bold">+3.500</h3>
              <p className="text-brand-500">Pacientes atendidos</p>
            </div>

            <div className="flex flex-col items-center gap-1">
              <h3 className="text-5xl font-bold">+15</h3>
              <p className="text-brand-500">Especialistas disponíveis</p>
            </div>

            <div className="flex flex-col items-center gap-1">
              <h3 className="text-5xl font-bold">+10</h3>
              <p className="text-brand-500">Anos no mercado</p>
            </div>
          </div>
        </div>
      </section>

      <section className="p-6 mx-auto md:max-w-screen-xl md:mt-40">
        <div>
          <header>
            <h4 className="text-center text-brand-300 font-bold text-sm tracking-wider">
              SERVIÇOS
            </h4>
            <h2 className="text-zinc-800 dark:text-zinc-100 text-3xl text-center font-bold my-6">
              Como podemos ajudá-lo a se sentir melhor?
            </h2>
          </header>
          <div className="mt-14">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <CardService
                title="Problemas digestivos"
                description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim."
              />
              <CardService
                title="Bem-estar mental"
                description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim."
              />
              <CardService
                title="Cuidados Pediátricos"
                description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim."
              />
              <CardService
                title="Autoimune e Inflamação"
                description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim."
              />
              <CardService
                title="Saúde do Coração"
                description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim."
              />
              <CardService
                title="Saúde Hormonal"
                description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim."
              />
            </div>
          </div>
        </div>
      </section>
      <section className="p-6 mx-auto md:max-w-screen-xl md:my-40">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center">
          <div className="md:order-2">
            <header>
              <h4 className="text-brand-300 font-bold tracking-wider">
                SOBRE NÓS
              </h4>
              <h2 className="text-zinc-800 dark:text-zinc-100 text-3xl font-bold mt-4 mb-6">
                Entenda quem somos e por que existimos
              </h2>
            </header>
            <div>
              <p className="text-zinc-500 dark:text-zinc-400">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim. Amet minim mollit
                non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                officia consequat duis enim. Amet minim mollit non deserunt
                ullamco est sit aliqua dolor do amet sint. Velit officia
                consequat duis enim. Amet minim mollit non deserunt ullamco est
                sit aliqua dolor do amet sint. Velit officia consequat duis
                enim. Amet minim mollit non deserunt ullamco est sit aliqua
                dolor do amet sint.
              </p>
            </div>
          </div>
          <div className="mt-14 md:mt-0 md:mr-16 md:md:order-1">
            <img
              src={doctorImg}
              alt="Doutor feliz segurando prancheta com pacientes"
              className="w-[320px] h-auto md:w-[480px] md:h-auto"
            />
          </div>
        </div>
      </section>
      <section className="p-6 mx-auto md:max-w-screen-xl md:mb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 items-stretch">
          <div>
            <header>
              <h2 className="text-zinc-800 dark:text-zinc-100 text-3xl font-bold mt-4 mb-6">
                Entre em contato com a gente!
              </h2>
            </header>
            <div className="mt-8">
              <ul className="flex flex-col gap-4">
                <li className="inline-flex gap-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
                      stroke="#8257e6"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                      stroke="#8257e6"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Sorocaba, SP
                </li>
                <li className="inline-flex gap-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                      stroke="#8257e6"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M22 6L12 13L2 6"
                      stroke="#8257e6"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  contato.denismedeiros@hotmail.com
                </li>
              </ul>
              <div className="mt-8 mb-16">
                <PrimaryButton />
              </div>
            </div>
          </div>
          <div className="md:mt-0 md:ml-auto">
            <img
              src={manImg}
              alt="Homem negro com moletom bege mexendo no celular e sorrindo"
              className="w-[320px] h-auto md:w-[480px] md:h-auto"
            />
          </div>
        </div>
      </section>

      <Widget />

      <footer className="bg-brand-300 px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 items-end">
          <div className="">
            <Link to="/">
              <svg
                width="133"
                height="18"
                viewBox="0 0 133 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 17.088V0.287999H5.16C8.12 0.287999 10.296 1.04 11.688 2.544C13.096 4.048 13.8 6.112 13.8 8.736C13.8 11.312 13.096 13.352 11.688 14.856C10.296 16.344 8.12 17.088 5.16 17.088H0ZM2.016 15.408H5.112C6.744 15.408 8.04 15.144 9 14.616C9.976 14.072 10.672 13.304 11.088 12.312C11.504 11.304 11.712 10.112 11.712 8.736C11.712 7.328 11.504 6.12 11.088 5.112C10.672 4.104 9.976 3.328 9 2.784C8.04 2.24 6.744 1.968 5.112 1.968H2.016V15.408Z"
                  fill="#FFF"
                />
                <path
                  d="M22.4949 17.376C21.3749 17.376 20.3669 17.12 19.4709 16.608C18.5749 16.096 17.8629 15.376 17.3349 14.448C16.8229 13.504 16.5669 12.4 16.5669 11.136C16.5669 9.872 16.8309 8.776 17.3589 7.848C17.8869 6.904 18.5989 6.176 19.4949 5.664C20.4069 5.152 21.4229 4.896 22.5429 4.896C23.6629 4.896 24.6709 5.152 25.5669 5.664C26.4629 6.176 27.1669 6.904 27.6789 7.848C28.2069 8.776 28.4709 9.872 28.4709 11.136C28.4709 12.4 28.2069 13.504 27.6789 14.448C27.1509 15.376 26.4309 16.096 25.5189 16.608C24.6229 17.12 23.6149 17.376 22.4949 17.376ZM22.4949 15.648C23.1829 15.648 23.8229 15.48 24.4149 15.144C25.0069 14.808 25.4869 14.304 25.8549 13.632C26.2229 12.96 26.4069 12.128 26.4069 11.136C26.4069 10.144 26.2229 9.312 25.8549 8.64C25.5029 7.968 25.0309 7.464 24.4389 7.128C23.8469 6.792 23.2149 6.624 22.5429 6.624C21.8549 6.624 21.2149 6.792 20.6229 7.128C20.0309 7.464 19.5509 7.968 19.1829 8.64C18.8149 9.312 18.6309 10.144 18.6309 11.136C18.6309 12.128 18.8149 12.96 19.1829 13.632C19.5509 14.304 20.0229 14.808 20.5989 15.144C21.1909 15.48 21.8229 15.648 22.4949 15.648Z"
                  fill="#FFF"
                />
                <path
                  d="M37.2261 17.376C36.0901 17.376 35.0661 17.12 34.1541 16.608C33.2581 16.08 32.5461 15.352 32.0181 14.424C31.5061 13.48 31.2501 12.384 31.2501 11.136C31.2501 9.888 31.5061 8.8 32.0181 7.872C32.5461 6.928 33.2581 6.2 34.1541 5.688C35.0661 5.16 36.0901 4.896 37.2261 4.896C38.6341 4.896 39.8181 5.264 40.7781 6C41.7541 6.736 42.3701 7.72 42.6261 8.952H40.5621C40.4021 8.216 40.0101 7.648 39.3861 7.248C38.7621 6.832 38.0341 6.624 37.2021 6.624C36.5301 6.624 35.8981 6.792 35.3061 7.128C34.7141 7.464 34.2341 7.968 33.8661 8.64C33.4981 9.312 33.3141 10.144 33.3141 11.136C33.3141 12.128 33.4981 12.96 33.8661 13.632C34.2341 14.304 34.7141 14.816 35.3061 15.168C35.8981 15.504 36.5301 15.672 37.2021 15.672C38.0341 15.672 38.7621 15.472 39.3861 15.072C40.0101 14.656 40.4021 14.072 40.5621 13.32H42.6261C42.3861 14.52 41.7781 15.496 40.8021 16.248C39.8261 17 38.6341 17.376 37.2261 17.376Z"
                  fill="#FFF"
                />
                <path
                  d="M50.2974 17.088C49.2094 17.088 48.3534 16.824 47.7294 16.296C47.1054 15.768 46.7934 14.816 46.7934 13.44V6.888H44.7294V5.184H46.7934L47.0574 2.328H48.8094V5.184H52.3134V6.888H48.8094V13.44C48.8094 14.192 48.9614 14.704 49.2654 14.976C49.5694 15.232 50.1054 15.36 50.8734 15.36H52.1214V17.088H50.2974Z"
                  fill="#FFF"
                />
                <path
                  d="M60.4506 17.376C59.3306 17.376 58.3226 17.12 57.4266 16.608C56.5306 16.096 55.8186 15.376 55.2906 14.448C54.7786 13.504 54.5226 12.4 54.5226 11.136C54.5226 9.872 54.7866 8.776 55.3146 7.848C55.8426 6.904 56.5546 6.176 57.4506 5.664C58.3626 5.152 59.3786 4.896 60.4986 4.896C61.6186 4.896 62.6266 5.152 63.5226 5.664C64.4186 6.176 65.1226 6.904 65.6346 7.848C66.1626 8.776 66.4266 9.872 66.4266 11.136C66.4266 12.4 66.1626 13.504 65.6346 14.448C65.1066 15.376 64.3866 16.096 63.4746 16.608C62.5786 17.12 61.5706 17.376 60.4506 17.376ZM60.4506 15.648C61.1386 15.648 61.7786 15.48 62.3706 15.144C62.9626 14.808 63.4426 14.304 63.8106 13.632C64.1786 12.96 64.3626 12.128 64.3626 11.136C64.3626 10.144 64.1786 9.312 63.8106 8.64C63.4586 7.968 62.9866 7.464 62.3946 7.128C61.8026 6.792 61.1706 6.624 60.4986 6.624C59.8106 6.624 59.1706 6.792 58.5786 7.128C57.9866 7.464 57.5066 7.968 57.1386 8.64C56.7706 9.312 56.5866 10.144 56.5866 11.136C56.5866 12.128 56.7706 12.96 57.1386 13.632C57.5066 14.304 57.9786 14.808 58.5546 15.144C59.1466 15.48 59.7786 15.648 60.4506 15.648Z"
                  fill="#FFF"
                />
                <path
                  d="M69.7097 17.088V5.184H71.5337L71.7017 7.464C72.0697 6.68 72.6297 6.056 73.3817 5.592C74.1337 5.128 75.0617 4.896 76.1657 4.896V7.008H75.6137C74.9097 7.008 74.2617 7.136 73.6697 7.392C73.0777 7.632 72.6057 8.048 72.2537 8.64C71.9017 9.232 71.7257 10.048 71.7257 11.088V17.088H69.7097Z"
                  fill="#FFF"
                />
                <path
                  d="M86.4924 17.376C84.7964 17.376 83.3404 17.016 82.1244 16.296C80.9084 15.56 79.9724 14.544 79.3164 13.248C78.6604 11.936 78.3324 10.424 78.3324 8.712C78.3324 7 78.6604 5.488 79.3164 4.176C79.9724 2.864 80.9084 1.84 82.1244 1.104C83.3404 0.368 84.7964 0 86.4924 0C88.5084 0 90.1564 0.504 91.4364 1.512C92.7324 2.504 93.5404 3.904 93.8604 5.712H90.4764C90.2684 4.8 89.8204 4.088 89.1324 3.576C88.4604 3.048 87.5644 2.784 86.4444 2.784C84.8924 2.784 83.6764 3.312 82.7964 4.368C81.9164 5.424 81.4764 6.872 81.4764 8.712C81.4764 10.552 81.9164 12 82.7964 13.056C83.6764 14.096 84.8924 14.616 86.4444 14.616C87.5644 14.616 88.4604 14.376 89.1324 13.896C89.8204 13.4 90.2684 12.72 90.4764 11.856H93.8604C93.5404 13.584 92.7324 14.936 91.4364 15.912C90.1564 16.888 88.5084 17.376 86.4924 17.376Z"
                  fill="#FFF"
                />
                <path
                  d="M101.092 17.376C100.068 17.376 99.2278 17.216 98.5718 16.896C97.9158 16.56 97.4277 16.12 97.1077 15.576C96.7878 15.032 96.6278 14.432 96.6278 13.776C96.6278 12.672 97.0598 11.776 97.9238 11.088C98.7878 10.4 100.084 10.056 101.812 10.056H104.836V9.768C104.836 8.952 104.604 8.352 104.14 7.968C103.676 7.584 103.1 7.392 102.412 7.392C101.788 7.392 101.244 7.544 100.78 7.848C100.316 8.136 100.028 8.568 99.9157 9.144H96.9157C96.9958 8.28 97.2837 7.528 97.7797 6.888C98.2917 6.248 98.9477 5.76 99.7477 5.424C100.548 5.072 101.444 4.896 102.436 4.896C104.132 4.896 105.468 5.32 106.444 6.168C107.42 7.016 107.908 8.216 107.908 9.768V17.088H105.292L105.004 15.168C104.652 15.808 104.156 16.336 103.516 16.752C102.892 17.168 102.084 17.376 101.092 17.376ZM101.788 14.976C102.668 14.976 103.348 14.688 103.828 14.112C104.324 13.536 104.636 12.824 104.764 11.976H102.148C101.332 11.976 100.748 12.128 100.396 12.432C100.044 12.72 99.8678 13.08 99.8678 13.512C99.8678 13.976 100.044 14.336 100.396 14.592C100.748 14.848 101.212 14.976 101.788 14.976Z"
                  fill="#FFF"
                />
                <path
                  d="M111.319 17.088V5.184H114.055L114.343 7.416C114.775 6.648 115.359 6.04 116.095 5.592C116.847 5.128 117.727 4.896 118.735 4.896V8.136H117.871C117.199 8.136 116.599 8.24 116.071 8.448C115.543 8.656 115.127 9.016 114.823 9.528C114.535 10.04 114.391 10.752 114.391 11.664V17.088H111.319Z"
                  fill="#FFF"
                />
                <path
                  d="M126.888 17.376C125.688 17.376 124.624 17.12 123.696 16.608C122.768 16.096 122.04 15.376 121.512 14.448C120.984 13.52 120.72 12.448 120.72 11.232C120.72 10 120.976 8.904 121.488 7.944C122.016 6.984 122.736 6.24 123.648 5.712C124.576 5.168 125.664 4.896 126.912 4.896C128.08 4.896 129.112 5.152 130.008 5.664C130.904 6.176 131.6 6.88 132.096 7.776C132.608 8.656 132.864 9.64 132.864 10.728C132.864 10.904 132.856 11.088 132.84 11.28C132.84 11.472 132.832 11.672 132.816 11.88H123.768C123.832 12.808 124.152 13.536 124.728 14.064C125.32 14.592 126.032 14.856 126.864 14.856C127.488 14.856 128.008 14.72 128.424 14.448C128.856 14.16 129.176 13.792 129.384 13.344H132.504C132.28 14.096 131.904 14.784 131.376 15.408C130.864 16.016 130.224 16.496 129.456 16.848C128.704 17.2 127.848 17.376 126.888 17.376ZM126.912 7.392C126.16 7.392 125.496 7.608 124.92 8.04C124.344 8.456 123.976 9.096 123.816 9.96H129.744C129.696 9.176 129.408 8.552 128.88 8.088C128.352 7.624 127.696 7.392 126.912 7.392Z"
                  fill="#FFF"
                />
              </svg>
            </Link>
            <p className="text-white my-6 md:mb-0">
              ©2022 Denis Medeiros. <br />
              Todos os direitos reservados.
            </p>
          </div>
          <div className="md:ml-auto mr-28">
            <ul className="flex flex-row gap-8">
              <li>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/denis-medeiros/"
                >
                  <LinkedinLogo size={32} color="#FFF" />
                </a>
              </li>
              <li>
                <a target="_blank" href="https://github.com/DenisMedeirosSDK">
                  <GithubLogo size={32} color="#FFF" />
                </a>
              </li>
              <li>
                <a target="_blank" href="https://denismedeirossdk.github.io">
                  <img
                    src="https://github.com/DenisMedeirosSDK.png"
                    alt="Foto de perfil, Um robo"
                    className="w-8 h-8 rounded-full"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}