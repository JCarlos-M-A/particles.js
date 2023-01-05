<template>
  <q-page>
    <div class="flex flex-center text-white" style="height: 100vh;">
      <Particles id="tsparticles" class="particles" :particlesInit="particlesInit" :particlesLoaded="particlesLoaded"
        :options="options" />
      <div>
        <h1>
          <img style="filter: invert(100%);" src="https://particles.js.org/images/GitHub-Mark-120px-plus.png" alt="">
          VUE3-PARTICLES
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
          <div class="texto flex justify-between">
            <pre id="install">
npm install vue3-particles tsparticles
</pre>
            <div class="flex">
              <div v-show="install" class="q-mr-md">
                copy¡¡
              </div>
              <q-icon name="content_copy" class="icono" size="1.5rem" color="white"
                @click="copyCode('install'), install = true" />
            </div>
          </div>
        </div>

        <p class="texto title">
          Main.js file
        </p>

        <div class="card">
          <div class="texto flex justify-between">
            <pre id="config">
<span class="string">//use component Particles</span>
<span class="keyword">import</span> <span class="value">Particles</span> <span class="keyword">from</span> <span class="string">"vue3-particles"</span>;
<span class="keyword">const</span> <span class="tag">app</span> = createApp(<span class="tag">App</span>)
<span class="tag">app</span>.use(<span class="value">Particles</span>)
</pre>
            <div class="flex">
              <div v-show="config" class="q-mr-md">
                copy¡¡
              </div>
              <q-icon name="content_copy" class="icono" size="1.5rem" color="white"
                @click="copyCode('config'), config = true" />
            </div>
          </div>
        </div>

        <p class="texto title">
          App.vue file - Simple example
        </p>

        <div class="card">
          <div class="texto flex justify-between">
            <pre id="html">
<span class="string">//use</span>             
&lt;<span class="tag">Particles</span> <span class="string">id</span>="<span class="value">tsparticles</span>" <span class="string">class</span>="<span class="value">particles</span>" 
        <span class="string">:particlesInit</span>="<span class="value">:particlesInit</span>" 
        <span class="string">:particlesLoaded</span>="<span class="value">:particlesLoaded</span>"
        <span class="string">:options</span>="<span class="value">:options</span>" /&gt;
</pre>
            <div class="flex">
              <div v-show="html" class="q-mr-md">
                copy¡¡
              </div>
              <q-icon name="content_copy" class="icono" size="1.5rem" color="white"
                @click="copyCode('html'), html = true" />
            </div>
          </div>
        </div>

        <p class="texto title">
          Code
        </p>
        <div class="card">
          <div class="texto flex justify-between">

            <pre id="js">
<span class="nameTag">&lt;script&gt;</span>
<span class="tag">import</span> { <span class="keyword">loadFull</span> } <span class="tag">from</span> <span class="value">"tsparticles"</span>;
<span class="tag">export default</span> {
<span class="value">data</span>() {
  <span class="tag">return</span> {
      <span class="keyword">options:</span> {
        <span class="keyword">background:</span> {
          <span class="keyword">color:</span> {
            <span class="keyword">value:</span> <span class="value">'#b61924'</span>
          },
        },
        <span class="keyword">fpsLimit:</span> <span class="value">60</span>,
        <span class="keyword">interactivity:</span> {
          <span class="keyword">events:</span> {
            <span class="keyword">onClick:</span> {
              <span class="keyword">enable:</span> <span class="value">true</span>,
              <span class="keyword">mode:</span> <span class="value">'push'</span>
            },
            <span class="keyword">onHover:</span> {
              <span class="keyword">enable:</span> <span class="value">true</span>,
              <span class="keyword">mode:</span> <span class="value">'repulse'</span>,
            },
            <span class="keyword">resize:</span> <span class="value">true</span>
          },
          <span class="keyword">modes:</span> {
            <span class="keyword">bubble:</span> {
              <span class="keyword">distance:</span> <span class="value">400</span>,
              <span class="keyword">duration:</span> <span class="value">2</span>,
              <span class="keyword">opacity:</span> <span class="value">0.8</span>,
              <span class="keyword">size:</span> <span class="value">40</span>,
            },
            <span class="keyword">push:</span> {
              <span class="keyword">quantity:</span> <span class="value">4</span>
            },
            <span class="keyword">repulse:</span> {
              <span class="keyword">distance:</span> <span class="value">200</span>,
              <span class="keyword">duration:</span> <span class="value">0.4</span>
            }
          }
        },
        <span class="keyword">particles:</span> {
          <span class="keyword">color:</span> {
            <span class="keyword">value:</span> <span class="value">'#ffffff'</span>
          },
          <span class="keyword">links:</span> {
            <span class="keyword">color:</span> <span class="value">'#ffffff'</span>,
            <span class="keyword">distance:</span> <span class="value">150</span>,
            <span class="keyword">enable:</span> <span class="value">true</span>,
            <span class="keyword">opacity:</span> <span class="value">0.5</span>,
            <span class="keyword">width:</span> <span class="value">1</span>
          },
          <span class="keyword">collisions:</span> {
            <span class="keyword">enable:</span> <span class="value">true</span>
          },
          <span class="keyword">move:</span> {
            <span class="keyword">direction:</span> <span class="value">'none'</span>,
            <span class="keyword">enable:</span> <span class="value">true</span>,
            <span class="keyword">outMode:</span> <span class="value">'bounce'</span>,
            <span class="keyword">random:</span> <span class="value">false</span>,
            <span class="keyword">speed:</span> <span class="value">0.6</span>,
            <span class="keyword">straight:</span> <span class="value">false</span>,
          },
          <span class="keyword">number:</span> {
            <span class="keyword">density:</span> {
              <span class="keyword">enable:</span> <span class="value">true</span>,
              <span class="keyword">area:</span> <span class="value">800</span>
            },
            <span class="keyword">value:</span> <span class="value">80</span>
          },
          <span class="keyword">opacity:</span> {
            <span class="keyword">value:</span> <span class="value">0.5</span>
          },
          <span class="keyword">shape:</span> {
            <span class="keyword">type:</span> <span class="value">'circle'</span>
          },
          <span class="keyword">size:</span> {
            <span class="keyword">random:</span> <span class="value">true</span>,
            <span class="keyword">value:</span> <span class="value">5</span>
          }
        },
        <span class="keyword">fullScreen:</span> {
          <span class="keyword">enable:</span> <span class="value">false</span>
        },
        <span class="keyword">detectRetina:</span> <span class="value">true</span>
      },
      <span class="keyword">particlesInit:</span> <span class="value">""</span>,
      <span class="keyword">particlesLoaded:</span> <span class="value">""</span>
    }
  },
  <span class="tag">beforeMount</span>() {
    <span class="keyword">this</span>.particlesInit = <span class="keyword">async</span> engine => {
      <span class="tag">await</span> loadFull(engine);
    };

    <span class="keyword">this</span>.particlesLoaded = <span class="keyword">async</span> container => {
      <span class="tag">console</span>.log("Particles container loaded", container);
    };
  }
}
<span class="nameTag">&lt;/script&gt;</span>
</pre>
            <div class="flex">
              <div v-show="js" class="q-mr-md">
                copy¡¡
              </div>
              <q-icon name="content_copy" class="icono" size="1.5rem" color="white"
                @click="copyCode('js'), js = true" />
            </div>
          </div>
        </div>

        <p class="texto title">
          Style
        </p>
        <div class="card">
          <div class="texto flex justify-between">
            <pre id="css">
<span class="nameTag">&lt;style <span class="keyword">scoped</span>&gt;</span>
<span class="value">.particles</span>
 {
  <span class="keyword">width:</span> <span class="value">100vw</span>;
  <span class="keyword">height:</span> <span class="value">100vh</span>;
  <span class="keyword">position:</span> <span class="value">fixed</span>;
  <span class="keyword">top:</span> <span class="value">0</span>;
  <span class="keyword">left:</span> <span class="value">0</span>;
  <span class="keyword">z-index:</span> <span class="value">-10</span>;
}
<span class="nameTag">&lt;/style&gt;</span> 
</pre>
            <div class="flex">
              <div v-show="css" class="q-mr-md">
                copy¡¡
              </div>
              <q-icon name="content_copy" class="icono" size="1.5rem" color="white"
                @click="copyCode('css'), css = true" />
            </div>
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
      install: false,
      config: false,
      html: false,
      js: false,
      css: false,
      options: {
        background: {
          color: {
            value: '#292929'
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              //enable: true,
              //mode: 'push'
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
      //console.log("Particles container loaded", container);
    };
  },
  methods: {
    copyCode(val) {
      // Get the text field
      var copyText = document.getElementById(val);
      // Copy the text inside the text field
      navigator.clipboard.writeText(copyText.innerText);
    }
  },
  computed: {
    //
  }
}
</script>

<style scoped>
.icono:hover {
  cursor: pointer;
}

.nameTag {
  color: #0270ff;
}

.keyword {
  color: #66d9ef;
}

.string {
  color: #a6e22e
}

.tag {
  color: #f92672;
}

.value {
  color: #e6db74;
}

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
  font-weight: 200;
  font-size: 2rem;
  color: white;
  font-family: Teko, sans-serif;
}

.card {
  background-color: #292929;
  margin: 2rem 0;
  padding: 2rem;
  width: 60vw;
  box-shadow: 2px 6px 17px rgb(0 0 0 / 39%);
  border-radius: 0.5rem;
}

.texto {
  color: white;
}
</style>

