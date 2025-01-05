Vue.config.devtools = true;

Vue.component('card', {
  template: `
    <div class="card-wrap"
      @mousemove="handleMouseMove"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      ref="card">
      <div class="card" :style="cardStyle">
        <div class="card-bg" :style="[cardBgTransform, cardBgImage]"></div>
        <div class="card-info">
          <slot name="header"></slot>
          <slot name="content"></slot>
        </div>
      </div>
    </div>
  `,
  mounted() {
    // Calcola la larghezza e l'altezza del componente dopo il montaggio
    this.width = this.$refs.card.offsetWidth;
    this.height = this.$refs.card.offsetHeight;
  },
  props: {
    dataImage: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      width: 0,
      height: 0,
      mouseX: 0,
      mouseY: 0,
      mouseLeaveDelay: null
    };
  },
  computed: {
    mousePX() {
      return this.mouseX / this.width;
    },
    mousePY() {
      return this.mouseY / this.height;
    },
    cardStyle() {
      const rX = this.mousePX * 30; // Rotazione sull'asse Y
      const rY = this.mousePY * -30; // Rotazione sull'asse X
      return {
        transform: `rotateY(${rX}deg) rotateX(${rY}deg)`,
        transition: this.mouseLeaveDelay ? "transform 1s ease" : "none"
      };
    },
    cardBgTransform() {
      const tX = this.mousePX * -40; // Traslazione sull'asse X
      const tY = this.mousePY * -40; // Traslazione sull'asse Y
      return {
        transform: `translateX(${tX}px) translateY(${tY}px)`,
        transition: this.mouseLeaveDelay ? "transform 1s ease" : "none"
      };
    },
    cardBgImage() {
      return {
        backgroundImage: `url(${this.dataImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      };
    }
  },
  methods: {
    handleMouseMove(e) {
      // Calcola le coordinate del mouse relative al componente
      const rect = this.$refs.card.getBoundingClientRect();
      this.mouseX = e.clientX - rect.left - this.width / 2;
      this.mouseY = e.clientY - rect.top - this.height / 2;
    },
    handleMouseEnter() {
      clearTimeout(this.mouseLeaveDelay); // Cancella il timeout quando il mouse entra
      this.mouseLeaveDelay = null;
    },
    handleMouseLeave() {
      this.mouseLeaveDelay = setTimeout(() => {
        this.mouseX = 0;
        this.mouseY = 0;
      }, 1000); // Reset dopo 1 secondo
    }
  }
});

const app = new Vue({
  el: '#app'
});
