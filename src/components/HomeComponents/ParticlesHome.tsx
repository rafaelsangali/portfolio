import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";

export function Home() {
  async function particlesInit(main: Engine){
    await loadFull(main);
  };
  function particlesLoaded(_container: any) {
  };
  return ( 
    <Particles
    className="w-screen"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: false,
        background: {
          color: {
            value: "#09090A",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#26c6da",
          },
          links: {
            color: "#26c6da",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 0.5,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 3.5,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }} 
    />
)
};