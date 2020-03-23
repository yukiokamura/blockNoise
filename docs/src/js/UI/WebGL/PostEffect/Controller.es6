import Base from "../../Base/Controller.es6";

import glitch from "./Shader/glitch.frag";

import gsap from "gsap";
export default class Controller extends Base {
  constructor() {
    super();
  }

  init() {
    this.name = "PostEffect";

    const glitchParam = {
      fragmentShader: glitch,
      uniforms: {
        time: {
          value: 0,
          type: "f"
        },
        resolution: {
          value: new THREE.Vector2(window.innerWidth, window.innerHeight),
          type: "v2"
        },
        blockSize: {
          type: "f",
          value: 1
        },
        threshold: {
          type: "f",
          value: 1
        },
        slideWidth: {
          type: "f",
          value: 0.5
        },
        opacity: {
          type: "f",
          value: 1
        }
      }
    };

    this.postParams = [glitchParam];
  }

  setEvent() {
    super.__setUpdateFlag(true);
  }

  show() {
    const p = this.postParams[0].uniforms;
    const tl = gsap.timeline();
    tl.to(
      p.time,
      {
        value: 1,
        duration: 1,
        ease: "none"
      },
      0
    )
      .to(
        p.slideWidth,
        {
          value: 0,
          duration: 1,
          ease: "expo.out"
        },
        0
      )
      .to(
        p.blockSize,
        {
          value: 10,
          duration: 1,
          ease: "expo.inout"
        },
        0
      )
      .to(
        p.threshold,
        {
          value: 0.5,
          duration: 1,
          ease: "expo.inout"
        },
        0
      )
      .to(
        p.time,
        {
          value: 0,
          duration: 0.3,
          ease: "expo.inout",
          onStart: e => {
            p.slideWidth.value = 0.01;
          },
          onComplete: e => {
            p.slideWidth.value = 0;
          }
        },
        2
      )
      .add(e => {
        this.hide();
      }, 4);
  }

  hide() {
    const p = this.postParams[0].uniforms;
    const tl = gsap.timeline();

    tl.set(p.slideWidth, {
      value: 0.1
    })
      .to(p.time, {
        value: 1,
        duration: 0.05,
        ease: "expo.in"
      })
      .to(
        p.time,
        {
          value: 0,
          duration: 0.05,
          ease: "expo.out"
        },
        0.05
      )
      .to(
        p.blockSize,
        {
          duration: 0.1,
          ease: "expo.out",
          value: 10
        },
        0
      )
      .to(
        p.threshold,
        {
          value: 1,
          duration: 0.1,
          ease: "expo.in"
        },
        0
      )
      .set(p.opacity, {
        value: 0
      });
  }

  reset() {}

  update() {}
}
