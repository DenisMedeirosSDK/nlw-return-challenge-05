import {
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
  MapPin,
} from 'phosphor-react';
import { Link } from 'react-router-dom';
import biker2Img from '../assets/images/coen-van-de-broek-OFyh9TpMyM8-unsplash.png';
import biker3Img from '../assets/images/fred-pixlab-OD3iQ1S0-nE-unsplash.png';
import bikerImg from '../assets/images/jasper-garratt-e_bZsyAGwQI-unsplash.png';
import { CardService } from '../components/CardService';
import { PrimaryButton } from '../components/PrimaryButton';
import { Widget } from '../components/Widget';

export default function LandingPage() {
  return (
    <>
      <section className="p-6 mx-auto md:max-w-screen-xl">
        <div className="flex flex-col md:flex-row justify-center items-center md:justify-between">
          <div className="md:max-w-xl">
            <header>
              <h4 className="text-center md:text-left text-brand-300 font-bold text-sm tracking-wider">
                BOAS-VINDAS A RIDERS BRASIL
              </h4>
              <h1 className="text-zinc-800 dark:text-zinc-100 text-4xl text-center md:text-left font-bold my-6">
                A maior comunidade de Riders do Brasil
              </h1>
            </header>

            <div className="flex flex-col justify-center items-center md:items-start">
              <p className="text-lg text-zinc-500 dark:text-zinc-400 mb-8">
                A Riders Brasil vai além de apenas uma loja, proporcionamos uma
                experiência única para que você se sinta bem físicamente e
                mentalmente, por isso essa comunidade é tão incrível.
              </p>
              <PrimaryButton />
            </div>
          </div>

          <div className="mx-auto mt-14 md:mt-0 md:mx-0">
            <img
              src={bikerImg}
              alt="Um ciclista com capacete de proteção posando para foto"
              className="w-[260px] h-auto md:h-[585px] md:w-auto object-scale-down"
            />
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-14 w-full bg-white dark:bg-zinc-800 rounded-lg px-auto py-10">
            <div className="flex flex-col items-center gap-1">
              <h3 className="text-5xl font-bold">+20</h3>
              <p className="text-brand-500">Lojas por todo o Brasil</p>
            </div>

            <div className="flex flex-col items-center gap-1">
              <h3 className="text-5xl font-bold">+10.000</h3>
              <p className="text-brand-500">Riders por todo o país</p>
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
              OFÍCIOS
            </h4>
            <h2 className="text-zinc-800 dark:text-zinc-100 text-3xl text-center font-bold my-6">
              Quais os beneficios de se tornar um Rider
            </h2>
          </header>
          <div className="mt-14">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <CardService
                title="Bem-estar mental"
                description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim."
              />
              <CardService
                title="Saúde física"
                description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim."
              />
              <CardService
                title="Comunidade engajada"
                description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim."
              />
              <CardService
                title="Passeios semanais"
                description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim."
              />
              <CardService
                title="Lojas por todo o Brasil"
                description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim."
              />
              <CardService
                title="Especialistas em manutenção"
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
              src={biker2Img}
              alt="Duas ciclistas conversando enquanto pedalam"
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
                  <MapPin size={24} className="text-brand-300" />
                  Sorocaba, SP
                </li>
                <li className="inline-flex gap-2">
                  <EnvelopeSimple size={24} className="text-brand-300" />
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
              src={biker3Img}
              alt="Grupo de ciclistas andando de bicicleta"
              className="w-[320px] h-auto md:w-[480px] object-cover md:h-auto"
            />
          </div>
        </div>
      </section>

      <Widget />

      <footer className="bg-brand-300 px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 items-end mx-auto md:max-w-screen-xl">
          <div className="">
            <Link to="/" className="text-zinc-800 dark:text-zinc-100 text-2xl">
              <strong>Riders</strong> Brasil
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
