"use client";

import { useEffect, useMemo, useState } from "react";

import { Box } from "@mui/joy";

import type { IOptions, RecursivePartial } from "@tsparticles/engine";
import { loadStarsPreset } from "@tsparticles/preset-stars";
import Particles, { initParticlesEngine } from "@tsparticles/react";

export function StarParticles() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadStarsPreset(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo<RecursivePartial<IOptions>>(
    () => ({
      preset: "stars",
      particles: {
        number: {
          value: 200,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        opacity: {
          value: 0.3,
          random: true,
          anim: {
            enable: true,
            speed: 0.05,
            opacity_min: 0,
            sync: false,
          },
        },
        size: {
          value: 1,
          random: true,
          anim: {
            enable: true,
            speed: 4,
            size_min: 0.3,
            sync: false,
          },
        },
        move: {
          enable: true,
          speed: 0.2,
          direction: "none",
          random: true,
          out_mode: "bounce",
          bounce: true,
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
          onClick: {
            enable: true,
            mode: "push",
          },
        },
        modes: {
          repulse: {
            distance: 20,
            duration: 0.8,
          },
          push: {
            particles_nb: 4,
          },
        },
      },
      retina_detect: true,
    }),
    []
  );

  if (init) {
    return (
      <Box
        component="section"
        sx={{
          zIndex: -1,
          backgroundColor: "transparent",
        }}
      >
        <Particles id="stars" options={options} />
      </Box>
    );
  }

  return <></>;
}
