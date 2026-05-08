import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const InfiniteTunnel = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = {
    fpsLimit: 120,
    background: {
      color: "#020617", // Dark background from your video
    },
    particles: {
      number: {
        value: 160,
        density: { enable: true, area: 800 },
      },
      color: {
        value: ["#00f0ff", "#a855f7", "#3b82f6"], // Cyan and Purple from video
      },
      shape: { type: "circle" },
      opacity: {
        value: { min: 0.1, max: 0.6 },
        animation: { enable: true, speed: 1, sync: false },
      },
      size: {
        value: { min: 1, max: 3 },
      },
      links: {
        enable: true,
        distance: 120,
        color: "random",
        opacity: 0.4,
        width: 1,
        triangles: {
          enable: true,
          opacity: 0.05, // Subtle mesh fill
        }
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        outModes: "out",
        // 'Attract' logic creates the tunnel-like pulling effect
        attract: {
          enable: true,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab", // Link to mouse
        },
      },
      modes: {
        grab: { distance: 200, links: { opacity: 0.8 } },
      },
    },
    detectRetina: true,
  };

  if (init) {
    return (
      <div className="fixed inset-0 -z-10">
        <Particles id="tsparticles" options={options as any} />
      </div>
    );
  }

  return null;
};

export default InfiniteTunnel;