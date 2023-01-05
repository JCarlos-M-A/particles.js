<template>
  <q-page>
    <div class="flex flex-center text-white" style="height: 100vh;">
      <Particles id="tsparticles" class="particles" :particlesInit="particlesInit" :particlesLoaded="particlesLoaded"
        :options="options" />
      <div>
        <h1>
          <img style="filter: invert(100%);" src="https://particles.js.org/images/GitHub-Mark-120px-plus.png" alt="">
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

        <p class="texto title">
          Main.js file
        </p>

        <div class="card">
          <div class="texto">
            <pre>
<span class="string">//use component Particles</span>
<span class="keyword">import</span> <span class="value">Particles</span> <span class="keyword">from</span> <span class="string">"vue3-particles"</span>;
<span class="keyword">const</span> <span class="tag">app</span> = createApp(<span class="tag">App</span>)
<span class="tag">app</span>.use(<span class="value">Particles</span>)
</pre>
          </div>
        </div>

        <p class="texto title">
          App.vue file - Simple example
        </p>

        <div class="card">
          <div class="texto">
            <pre>
<span class="string">//use</span>             
&lt;<span class="tag">Particles</span> <span class="string">id</span>="<span class="value">tsparticles</span>" <span class="string">class</span>="<span class="value">particles</span>" 
        <span class="string">:particlesInit</span>="<span class="value">:particlesInit</span>" 
        <span class="string">:particlesLoaded</span>="<span class="value">:particlesLoaded</span>"
        <span class="string">:options</span>="<span class="value">:options</span>" /&gt;
</pre>
          </div>
        </div>

        <p class="texto title">
          Codigo
        </p>
        <div class="card">
          <div class="texto">

            <pre id="replace">
<span class="keyword">&lt;script&gt;</span>
<span class="tag">import</span> { <span class="keyword">loadFull</span> } <span class="tag">from</span> <span class="value">"tsparticles"</span>;
<span class="tag">export default</span> {
<span class="value">data</span><span class="tag">()</span> {
  <span class="tag">return</span> {
      <span class="keyword">sourcecode:</span> <span class="value">"const s = new Date().toString()"</span>,
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

        <p class="texto title">
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
            value: '#292929'
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
      //console.log("Particles container loaded", container);
    };
  },
  mounted(){
    //
  }
}
</script>

<style scoped>
.keyword {
  color: #66d9ef;
}

.string{
  color: #a6e22e
}

.tag{
  color: #f92672;
}

.value{
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

