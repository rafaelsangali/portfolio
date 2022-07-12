import TransitionMain from "../../components/TransitionMain";

export default function Home() {
  return (
    <TransitionMain className="flex">
      <div className="grid gap-14 w-screen h-screen ml-[80px] content-center text-center items-center md:flex md:text-left md:m-0 md:justify-center">
        <img
          className="w-52 mx-auto md:m-3 border-2 rounded-full border-cyan-700"
          src="https://github.com/rafaelsangali.png"
          alt="Foto Rafael sangali"
        />
        <div className="grid gap-3 w-fit md:w-[300px] md:text-start md:mr-8">
          <p className="text-cyan-400 text-3xl md:text-4xl">
            <strong>Rafael Sangali</strong>
          </p>
          <p>
            Um <strong>Desenvolvedor Web Front-End </strong>apaixonado por criar
            experiências interativas na web.
          </p>
        </div>
      </div>
    </TransitionMain>
  );
}
