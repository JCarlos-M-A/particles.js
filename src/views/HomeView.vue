<template>
  <q-page>
    <div class="flex flex-center" style="height: 100vh;">
      <Particles id="tsparticles" class="particles" :particlesInit="particlesInit" :particlesLoaded="particlesLoaded"
        :options="options" />
      <div>
        <h1>
          <img src="https://particles.js.org/images/GitHub-Mark-120px-plus.png" alt="">
          VUE-PARTICLES
        </h1>
        <h4>
          Vue.js component for particles backgrounds
        </h4>
      </div>
    </div>
    <div class="blog flex flex-column justify-center">
      <div>
        <h3 class="title text-center">
          How to use
        </h3>

        <div class="card">
          <div class="texto">
            <pre>
npm install vue3-particles tsparticles
</pre>
          </div>
        </div>

        <p class="texto">
          Main.js file
        </p>

        <div class="card">
          <div class="texto">
            <pre>
//use component Particles
import Particles from "vue3-particles";
const app = createApp(App)
app.use(Particles)
</pre>
          </div>
        </div>

        <p class="texto">
          App.vue file - Simple example
        </p>

        <div class="card">
          <div class="texto">
            <pre>
//use
&lt;Particles id="tsparticles" class="particles" 
        :particlesInit="particlesInit" 
        :particlesLoaded="particlesLoaded"
        :options="options" /&gt;
</pre>
          </div>
        </div>

        <p class="texto">
          Codigo
        </p>
        <div class="card">
          <div class="texto">

            <pre>
&lt;script&gt;
import { loadFull } from "tsparticles";
export default {
  data() {
    return {
      sourcecode: "const s = new Date().toString()",
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
&lt;/script&gt;
</pre>
          </div>
        </div>

        <p class="texto">
          Style
        </p>
        <div class="card">
          <div class="texto">
<pre>
&lt;style scoped&gt;  
.particles {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -10;
}
&lt;/style&gt; 
</pre>
          </div>
        </div>

      </div>
    </div>
  </q-page>
</template>

<script>
import { loadFull } from "tsparticles";
export default {
  data() {
    return {
      sourcecode: "const s = new Date().toString()",
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

.blog {
  background-color: #2c3e50;
}

.title {
  font-weight: 100;
  font-size: 2rem;
  color: white;
  font-family: Teko, sans-serif;
}

.card {
  background-color: #292929;
  margin: 2rem 0;
  padding: 2rem;
  width: 50vw;
  box-shadow: 2px 6px 17px rgb(0 0 0 / 39%);
  border-radius: 0.5rem;
}

.texto {
  color: white;
}
</style>

