<template>
  <q-page>
    <div class="flex flex-center" style="height: 100vh;">
      <Particles id="tsparticles" class="particles" :particlesInit="particlesInit" :particlesLoaded="particlesLoaded"
        :options="options" />

      <img class="img-fluid" id="gh-mark" src="https://particles.js.org/images/GitHub-Mark-120px-plus.png" alt="">
      <div>
        <h1>
          VUE-PARTICLES
        </h1>
        <h4>
          Vue.js component for particles backgrounds
        </h4>
      </div>
    </div>
    <div class="blog">
      How to use
    </div>
  </q-page>
</template>

<script>
import { loadFull } from "tsparticles";
export default {
  data() {
    return {
      options: {
        background: {
          color: {
            value: '#b61924'
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'push'
            },
            onHover: {
              enable: true,
              mode: 'repulse'
            },
            resize: true
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40
            },
            push: {
              quantity: 4
            },
            repulse: {
              distance: 200,
              duration: 0.4
            }
          }
        },
        particles: {
          color: {
            value: '#ffffff'
          },
          links: {
            color: '#ffffff',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1
          },
          collisions: {
            enable: true
          },
          move: {
            direction: 'none',
            enable: true,
            outMode: 'bounce',
            random: false,
            speed: 0.6,
            straight: false
          },
          number: {
            density: {
              enable: true,
              area: 800
            },
            value: 80
          },
          opacity: {
            value: 0.5
          },
          shape: {
            type: 'circle'
          },
          size: {
            random: true,
            value: 5
          }
        },
        fullScreen: {
          enable: false,
        },
        detectRetina: true
      },
      particlesInit: "",
      particlesLoaded: "",
    }
  },
  beforeMount() {
    this.particlesInit = async engine => {
      await loadFull(engine);
    };

    this.particlesLoaded = async container => {
      console.log("Particles container loaded", container);
    };

  }
}
</script>

<style scoped>
.particles {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -10;
}

.blog{
  height: 100vh;
  width: 100vw;
  background-color: darkblue;
}
</style>

