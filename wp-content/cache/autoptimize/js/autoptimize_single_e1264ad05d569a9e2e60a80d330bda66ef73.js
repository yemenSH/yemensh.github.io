!(function () {
  "use strict";
  var t = {
      634: function (t, e, i) {
        i.d(e, {
          tm: function () {
            return s;
          },
        });
        var a = i(567);
        const o = (t, e) => {
            let i = e.getImages();
            t && "image" == t.item.type && (i[t.item.id] = t.result);
          },
          n = () => window.matchMedia("screen and (max-width: 768px)").matches;
        function s() {
          if (!a("#coder-container").length) return;
          if (n()) return;
          let t, e, i, s, r, h, A;
          !(function (t, a) {
            let o,
              n = {},
              s = {},
              r = {};
            function h() {
              let t = this._cloneProps(
                new this.constructor(
                  this.mode,
                  this.startPosition,
                  this.loop,
                  this.reversed
                )
              );
              return (
                t.gotoAndStop(this.currentFrame),
                (t.paused = this.paused),
                (t.framerate = this.framerate),
                t
              );
            }
            function A(e, i, a) {
              let o = t.extend(e, t.MovieClip);
              return (
                (o.clone = h), (o.nominalBounds = i), (o.frameBounds = a), o
              );
            }
            (n.ssMetadata = [
              {
                name: "coder_atlas_1",
                frames: [
                  [1402, 0, 140, 238],
                  [1402, 240, 138, 162],
                  [0, 0, 1400, 1334],
                ],
              },
            ]),
              ((n.AnMovieClip = function () {
                (this.actionFrames = []),
                  (this.ignorePause = !1),
                  (this.gotoAndPlay = function (e) {
                    t.MovieClip.prototype.gotoAndPlay.call(this, e);
                  }),
                  (this.play = function () {
                    t.MovieClip.prototype.play.call(this);
                  }),
                  (this.gotoAndStop = function (e) {
                    t.MovieClip.prototype.gotoAndStop.call(this, e);
                  }),
                  (this.stop = function () {
                    t.MovieClip.prototype.stop.call(this);
                  });
              }).prototype = o =
                new t.MovieClip()),
              ((n.CachedBmp_2 = function () {
                this.initialize(s.coder_atlas_1), this.gotoAndStop(0);
              }).prototype = o =
                new t.Sprite()),
              ((n.CachedBmp_1 = function () {
                this.initialize(s.coder_atlas_1), this.gotoAndStop(1);
              }).prototype = o =
                new t.Sprite()),
              ((n.coderwoman = function () {
                this.initialize(s.coder_atlas_1), this.gotoAndStop(2);
              }).prototype = o =
                new t.Sprite()),
              ((n.Símbolo18 = function (e, i, a, o) {
                null == a && (a = !0), null == o && (o = !1);
                let n = new Object();
                (n.mode = e),
                  (n.startPosition = i),
                  (n.labels = {}),
                  (n.loop = a),
                  (n.reversed = o),
                  t.MovieClip.apply(this, [n]),
                  (this.shape = new t.Shape()),
                  this.shape.graphics
                    .lf(
                      [
                        "rgba(255,255,255,0)",
                        "#FFFFFF",
                        "rgba(255,255,255,0.82)",
                        "rgba(255,255,255,0.208)",
                      ],
                      [0.012, 0.29, 0.733, 1],
                      -0.1,
                      -48.8,
                      -1.7,
                      53.5
                    )
                    .s()
                    .p("AggoyIBBAAIgoRlg"),
                  this.shape.setTransform(3.3, 56.3),
                  this.timeline.addTween(t.Tween.get(this.shape).wait(1)),
                  this._renderFirstFrame();
              }).prototype = A(
                n.Símbolo18,
                new t.Rectangle(0, 0, 6.6, 112.6),
                null
              )),
              ((n.Símbolo16 = function (e, i, a, o) {
                null == a && (a = !0), null == o && (o = !1);
                let n = new Object();
                (n.mode = e),
                  (n.startPosition = i),
                  (n.labels = {}),
                  (n.loop = a),
                  (n.reversed = o),
                  t.MovieClip.apply(this, [n]),
                  (this.shape = new t.Shape()),
                  this.shape.graphics
                    .lf(
                      [
                        "rgba(24,148,234,0)",
                        "#3B26DE",
                        "rgba(59,38,222,0.82)",
                        "rgba(24,148,234,0.208)",
                      ],
                      [0.012, 0.29, 0.733, 1],
                      0,
                      -48.9,
                      -1.6,
                      53.4
                    )
                    .s()
                    .p("AggoyIBBAAIgoRlg"),
                  this.shape.setTransform(3.275, 56.3),
                  this.timeline.addTween(t.Tween.get(this.shape).wait(1)),
                  this._renderFirstFrame();
              }).prototype = A(
                n.Símbolo16,
                new t.Rectangle(0, 0, 6.6, 112.6),
                null
              )),
              ((n.Símbolo13 = function (e, i, a, o) {
                null == a && (a = !0), null == o && (o = !1);
                let n = new Object();
                (n.mode = e),
                  (n.startPosition = i),
                  (n.labels = {}),
                  (n.loop = a),
                  (n.reversed = o),
                  t.MovieClip.apply(this, [n]),
                  (this.shape = new t.Shape()),
                  this.shape.graphics
                    .lf(
                      [
                        "rgba(255,0,0,0)",
                        "#FF6600",
                        "rgba(255,102,0,0.82)",
                        "rgba(255,0,0,0.208)",
                      ],
                      [0.012, 0.29, 0.733, 1],
                      0,
                      -33.6,
                      -2.1,
                      36.7
                    )
                    .s()
                    .p("AgpmCIBTAAIgzMFg"),
                  this.shape.setTransform(3.2658, 56.28, 0.7872, 1.4545),
                  this.timeline.addTween(t.Tween.get(this.shape).wait(1)),
                  this._renderFirstFrame();
              }).prototype = A(
                n.Símbolo13,
                new t.Rectangle(0, 0, 6.6, 112.6),
                null
              )),
              ((n.Símbolo10 = function (e, i, a, o) {
                null == a && (a = !0), null == o && (o = !1);
                let n = new Object();
                (n.mode = e),
                  (n.startPosition = i),
                  (n.labels = {}),
                  (n.loop = a),
                  (n.reversed = o),
                  t.MovieClip.apply(this, [n]),
                  (this.shape = new t.Shape()),
                  this.shape.graphics
                    .f("#957795")
                    .s()
                    .p("AAAAFIAAgCIAAgHQACADgCAGg"),
                  this.shape.setTransform(61.4194, 78.875),
                  (this.shape_1 = new t.Shape()),
                  this.shape_1.graphics
                    .f("#736AE1")
                    .s()
                    .p("AgCgCQALgHgJAMIgCACQgCAAACgHg"),
                  this.shape_1.setTransform(41.7367, 90.1366),
                  (this.shape_2 = new t.Shape()),
                  this.shape_2.graphics
                    .f("#F2BE96")
                    .s()
                    .p(
                      "AgCAGIAAgHIAAgCQADAAACgCIAAAAIAAAHIAAABIAAABQgBACgDAAIgBAAg"
                    ),
                  this.shape_2.setTransform(45.625, 87.875),
                  (this.shape_3 = new t.Shape()),
                  this.shape_3.graphics
                    .f("#675FD2")
                    .s()
                    .p("AAAgEIAAAAIABAHIABAAIAAABQgEgBACgHg"),
                  this.shape_3.setTransform(47.1942, 78.7),
                  (this.shape_4 = new t.Shape()),
                  this.shape_4.graphics
                    .f("#756CE4")
                    .s()
                    .p("AgDgCQAMgHgJAMIgCACQgCAAABgHg"),
                  this.shape_4.setTransform(57.118, 75.075),
                  (this.shape_5 = new t.Shape()),
                  this.shape_5.graphics
                    .f("#997A96")
                    .s()
                    .p("AAAgDIAAAAIABAGIABAAIAAACQgEgCACgGg"),
                  this.shape_5.setTransform(60.6313, 79.25),
                  (this.shape_6 = new t.Shape()),
                  this.shape_6.graphics
                    .f("#F6C096")
                    .s()
                    .p("AgCAGIAAgHIAAgBQACgBADgCIABAAIAAAHIAAACIgBAAIgEACg"),
                  this.shape_6.setTransform(61, 79),
                  (this.shape_7 = new t.Shape()),
                  this.shape_7.graphics
                    .f("#746BE2")
                    .s()
                    .p("AgCgCQALgHgJAMIgCACQgCAAACgHg"),
                  this.shape_7.setTransform(41.7367, 67.9866),
                  (this.shape_8 = new t.Shape()),
                  this.shape_8.graphics
                    .f("#9C7C96")
                    .s()
                    .p(
                      "AAABqIABAAIAAAIIABABIAAAAQgEgBACgIgAAAhyIABAAIAAAIIABAAIAAABQgEgBACgIg"
                    ),
                  this.shape_8.setTransform(45.2442, 77.025),
                  (this.shape_9 = new t.Shape()),
                  this.shape_9.graphics
                    .f("#746BE3")
                    .s()
                    .p(
                      "AgCBsQALgHgJANIgCACQgCAAACgIgAgChxQALgHgJANIgCADQgCAAACgJg"
                    ),
                  this.shape_9.setTransform(41.7367, 77),
                  (this.shape_10 = new t.Shape()),
                  this.shape_10.graphics
                    .f("#776FE7")
                    .s()
                    .p(
                      "AgBBzIgBAAIgBgIQALgEgGAMIgCABIgBgBgAgBhpIgBAAIgBgIQALgFgGAMIgCABIgBAAg"
                    ),
                  this.shape_10.setTransform(47.5779, 67.5336),
                  (this.shape_11 = new t.Shape()),
                  this.shape_11.graphics
                    .f("#675FD3")
                    .s()
                    .p("AAAgEIAAAAIABAHIABAAIAAABQgEAAACgIg"),
                  this.shape_11.setTransform(47.1942, 56.55),
                  (this.shape_12 = new t.Shape()),
                  this.shape_12.graphics
                    .f("#746CE3")
                    .s()
                    .p("AgDgCQAMgHgJAMIgCACQgCAAABgHg"),
                  this.shape_12.setTransform(57.118, 52.8866),
                  (this.shape_13 = new t.Shape()),
                  this.shape_13.graphics
                    .f("rgba(13,11,37,0.255)")
                    .s()
                    .p("AAABmIAAgBIAAjIIAAgCIABAAIAADKIAAABIgBAAg"),
                  this.shape_13.setTransform(64.175, 73.025),
                  (this.shape_14 = new t.Shape()),
                  this.shape_14.graphics
                    .f("rgba(1,1,4,0.035)")
                    .s()
                    .p(
                      "AAHAJIgBAAQgHgEgGgFQAHgCAGgFIABgBIABAAIAAAQIAAABIgBAAg"
                    ),
                  this.shape_14.setTransform(63.425, 61.95),
                  (this.shape_15 = new t.Shape()),
                  this.shape_15.graphics
                    .f("#9A7B96")
                    .s()
                    .p("AAAgEIAAAAIABAHIABAAIAAABQgEgBACgHg"),
                  this.shape_15.setTransform(60.6313, 57.1),
                  (this.shape_16 = new t.Shape()),
                  this.shape_16.graphics
                    .f("#977895")
                    .s()
                    .p(
                      "AhNCgIAAgCIAAgIQADAEgCAGgAhNg8IAAgCIAAgIQADADgCAHgABMiWIAAgJQADAEgCAFIgBABIAAgBg"
                    ),
                  this.shape_16.setTransform(53.7194, 72.2),
                  (this.shape_17 = new t.Shape()),
                  this.shape_17.graphics
                    .f("#F5C096")
                    .s()
                    .p(
                      "AiACqQANgHgJANIgDADQgCAAABgJgAgehNIgBgIIAGgEIABAAIAAAIIAAACIgBAAQgBADgEAAIAAgBgAB6ilIAAgIIAAgCQAEAAACgCIABgBIAAAJIAAABIgBAAQgCACgDABg"
                    ),
                  this.shape_17.setTransform(48.4577, 74.0839),
                  (this.shape_18 = new t.Shape()),
                  this.shape_18.graphics
                    .f("#EBB996")
                    .s()
                    .p("AgDgCQAMgHgJAMIgCACQgCAAABgHg"),
                  this.shape_18.setTransform(39.818, 82.9727),
                  (this.shape_19 = new t.Shape()),
                  this.shape_19.graphics
                    .f("#9792F8")
                    .s()
                    .p("AAAAGQgFgCACgKQALADgGAKg"),
                  this.shape_19.setTransform(11.0142, 76.025),
                  (this.shape_20 = new t.Shape()),
                  this.shape_20.graphics
                    .f("#E2B4E9")
                    .s()
                    .p("AgBAFIgBgBQgCgDABgFIACAAQAKAEgIAFg"),
                  this.shape_20.setTransform(18.239, 80.125),
                  (this.shape_21 = new t.Shape()),
                  this.shape_21.graphics
                    .f("#8F7FE9")
                    .s()
                    .p("AABAFQgCgDABgHIABABIABAAIgCAAQAAAGABACIABACIgBgBg"),
                  this.shape_21.setTransform(17.8375, 80.05),
                  (this.shape_22 = new t.Shape()),
                  this.shape_22.graphics
                    .f("rgba(96,92,218,0.996)")
                    .s()
                    .p(
                      "ACcDAIidhbIidhcIAAgBIAAjIICeBaICdBcIACABIAADJIAAABIgDgBgABPgJQAOANAQAFIACAAQgBBKACBEIADgBQALgGgCgUQgCgfAAgeIAAg8QgBgDgEgBIgQgKQgFgEgFAAQgGAAgGAGgAArgeIAAABQALAKAPAHIABAAQAHABAGgFIABgBQgGgGgMgJQgGgEgFAAQgGAAgGAGgAASgRIABABIADAAQAJgGgMgEIAAgBIgDAAQgBAHADADgAAHgzIAAABQALAKAPAHIABAAQAHACAGgGIABgBQgGgGgMgIQgGgEgFAAQgGAAgGAFgAgOgkIACABQAIgKgPgDQgCAKAHACgAgchIIAAABQALALAPAGIABAAQAGACAGgGIABgBQgGgGgLgIQgFgEgGAAQgGAAgGAFgAgxg4IABABQAHgLgMgDQgCALAGACgAg1hiIgLAHIAAABQAMAIAOAIIABAAQAIABAGgGIABAAQgLgJgTgKIgBAAgAhZh2IgLAGIAAABQAOAJAPAIIAAABIAOgGIAAAAQgOgLgRgJIgBABgAh5hhIABAAQAJgKgOgDQgCAKAGADgAh8iLIgMAGIAAABQAOAKAPAHIAAABIAOgGIAAAAQgOgLgRgJIAAABg"
                    ),
                  this.shape_22.setTransform(16.075, 82.325),
                  (this.shape_23 = new t.Shape()),
                  this.shape_23.graphics
                    .f("rgba(34,27,114,0.988)")
                    .s()
                    .p(
                      "AAADHIAAgBIAAgBIAAjKIgCgBIidhbIifhaIAADHIAAABIgCAAIAAgBIAAjJQAJgEAHgEIAAgBICdBbQBKArBKApICehbICThUQAGAFAHAEIABAAIAAACIgDACIieBcIieBZIAADJIAAABIAAABIgBAAg"
                    ),
                  this.shape_23.setTransform(32.05, 81.85),
                  (this.shape_24 = new t.Shape()),
                  this.shape_24.graphics
                    .f("rgba(2,2,6,0.039)")
                    .s()
                    .p("AgHAIIAAgQIACAAIAMAIIABAAIAAABQgHAEgIAEIAAgBg"),
                  this.shape_24.setTransform(0.75, 61.95),
                  (this.shape_25 = new t.Shape()),
                  this.shape_25.graphics
                    .f("#8F7EE9")
                    .s()
                    .p("AABAFQgCgDABgHIABABIABAAIgCAAQAAAGABACIABABIgBAAg"),
                  this.shape_25.setTransform(17.8375, 57.9),
                  (this.shape_26 = new t.Shape()),
                  this.shape_26.graphics
                    .f("#E0B3E9")
                    .s()
                    .p("AgCAFIAAgCQgCgCABgFIABAAQAMAEgKAFg"),
                  this.shape_26.setTransform(18.2556, 57.975),
                  (this.shape_27 = new t.Shape()),
                  this.shape_27.graphics
                    .f("#908BF6")
                    .s()
                    .p(
                      "AA1CUQgGgCACgKQAPADgIAJgAg1BXQgGgDACgLQAPAEgJAKgAA1hJQgGgBACgLQAPAEgIAJgAg1iGQgGgDACgLQAOAFgIAJIgBABIgBgBg"
                    ),
                  this.shape_27.setTransform(9.2375, 63.85),
                  (this.shape_28 = new t.Shape()),
                  this.shape_28.graphics
                    .f("#9691F8")
                    .s()
                    .p("AAAAGQgEgDABgIQAMAEgHAIg"),
                  this.shape_28.setTransform(11.0449, 53.8),
                  (this.shape_29 = new t.Shape()),
                  this.shape_29.graphics
                    .f("#F4BF96")
                    .s()
                    .p(
                      "ABTBsQANgHgJANIgDACQgCAAABgIgAhZAHQANgHgKANIgCACQgCAAABgIgABThxQANgHgJANIgDADQgCAAABgJg"
                    ),
                  this.shape_29.setTransform(44.6168, 68.2864),
                  (this.shape_30 = new t.Shape()),
                  this.shape_30.graphics
                    .f("#EEBA96")
                    .s()
                    .p("AgCAEIgBgHQAMgFgJAMIgBABIgBgBg"),
                  this.shape_30.setTransform(39.8341, 60.8854),
                  (this.shape_31 = new t.Shape()),
                  this.shape_31.graphics
                    .f("#F7C196")
                    .s()
                    .p("AgCgCQALgGgJALIgCACQgCAAACgHg"),
                  this.shape_31.setTransform(37.8867, 48.048),
                  (this.shape_32 = new t.Shape()),
                  this.shape_32.graphics
                    .f("#F8D2EA")
                    .s()
                    .p("AACAGIgFgEIAAgBIAAgGQADAAADADIAAABIAAAGIAAABIgBAAg"),
                  this.shape_32.setTransform(21.8, 38.025),
                  (this.shape_33 = new t.Shape()),
                  this.shape_33.graphics
                    .f("#B49FEA")
                    .s()
                    .p(
                      "AADAFIAAgGQADABgCAGIgBAAIAAgBgAgDACQgBgDAAgEIABAAIAAAGIAAABg"
                    ),
                  this.shape_33.setTransform(21.8198, 38.025),
                  (this.shape_34 = new t.Shape()),
                  this.shape_34.graphics
                    .f("#362E94")
                    .s()
                    .p(
                      "AgGCZIAJgFIABAAIAAA7QAAAfACAeQACAVgKAGIgCAAQgDhEABhKgAgGhDIAJgFIABgBIAAA8QAAAdACAfQACAUgKAGIgBACQgEhFABhJgAgGkhIAJgFIABAAIAAA7QAAAfADAeQABAVgKAGIgBABQgEhFABhKg"
                    ),
                  this.shape_34.setTransform(27.8197, 67.875),
                  (this.shape_35 = new t.Shape()),
                  this.shape_35.graphics
                    .f("#29237E")
                    .s()
                    .p("AAEAGIgKgGIANgFIAAAAIAAABQABAHgDADIgBAAg"),
                  this.shape_35.setTransform(23.5643, 27.45),
                  (this.shape_36 = new t.Shape()),
                  this.shape_36.graphics
                    .f("#7D7AF8")
                    .s()
                    .p(
                      "AB1C5QgQgEgPgPQALgKAMAIIAQAKQADACACAEIgBABIgKAEIgCAAgABOCjIgBAAQgPgGgLgLIgBgBQAMgJAMAIQALAJAHAFIgBACQgFAEgFAAIgDgBgAAqCPIgBAAQgPgHgLgKIgBgBQAMgKAMAJQALAHAHAHIgBAAQgFAFgFAAIgDAAgAAGB6IgBAAQgOgHgLgKIgBgBQAMgJALAHQALAJAHAGIgBABQgFAFgFAAIgDgBgAgdBlIgBAAQgOgHgMgJIgBgBIAMgGIABgBQATAKALAKIgBAAQgFAFgGAAIgDgBgAhABSQgOgIgOgJIgBgBIAMgHIABAAQAQAJAPAKIAAAAIgPAHgAhkA9QgOgHgOgKIgBgBIAMgGIABgBQAQAJAPAKIAAAAIgPAHgAB1gjQgQgFgPgOQALgLAMAJIAQAKQADACACADIgBABIgKAFIgCAAgABNg5IAAAAQgPgHgLgKIgBgBQAMgKAMAIQAKAHAHAJIgCAAQgDAFgHAAIgCgBgAAphNIAAgBQgPgHgLgKIgBgBQAMgKAMAJQAKAGAHAJIgCAAQgDAFgIAAIgBAAgAAFhiQgNgIgMgIIgBgBQAHgDADgFIABAAQAPAJAOALIAAABQgGAEgIAAgAgdh3IgBgBQgOgGgMgJIgBgBIALgGIAAgBQAUAJAMALIgBAAQgFAEgGAAIgDAAgAhAiLQgOgHgOgKIgBgBIALgGIAAAAQATAIAOALIAAAAIgPAGgAhkigQgOgHgOgKIgBgBIAMgGIABgBQAQAKAPAKIAAAAIgPAGg"
                    ),
                  this.shape_36.setTransform(15.3, 64.65),
                  (this.shape_37 = new t.Shape()),
                  this.shape_37.graphics
                    .f("rgba(96,92,217,0.996)")
                    .s()
                    .p(
                      "AALBtIichcIgBAAIgNgIIAAgBIAAjIICfBaICcBbIAEADIAADIIAAABQhLgphKgrgABOgJQAOANARAFIABAAQgBBKADBFIACgCQALgGgCgUQgCgfAAgeIAAg8QgBgDgDgBIgRgKQgFgEgFAAQgGAAgGAGgAAqgeIABABQAKAKAQAHIAAAAQAIABAEgFIABAAQgHgJgKgHQgFgEgFAAQgHAAgGAGgAASgRIABABIACAAQAKgFgMgFIgBgBIgCAAQgBAHADADgAAGgzIABABQAKAKAQAHIAAABQAIAAAEgFIABAAQgHgJgKgHQgFgDgFAAQgHAAgGAFgAgPgkIACABQAJgKgPgDQgCAKAGACgAgThOQgDAFgHADIABABQAMAIAOAHIAAABQAGAAAGgEIAAgBQgNgLgPgKIgBABgAgzg5IACABQAIgJgNgEQgBAJAEADgAg2hhIgLAGIABABQAMAIAOAHIABABQAHABAGgGIABAAQgLgKgUgJgAhah2IgLAGIABABQANAJAPAIIAAABIAOgGIAAAAQgOgLgSgJgAh7hhQABAAAAABQAAAAAAAAQABAAAAAAQAAgBAAAAQAJgKgOgEQgCALAFADgAh9iLIgMAGIABABQANAKAPAHIAAABIAOgGIAAAAQgOgLgRgJIAAABg"
                    ),
                  this.shape_37.setTransform(16.15, 60.175),
                  (this.shape_38 = new t.Shape()),
                  this.shape_38.graphics
                    .f("rgba(2,1,5,0.031)")
                    .s()
                    .p("AgHAIIAAgQIACAAQAFAFAHADIABAAIAAABQgHAEgIAEIAAgBg"),
                  this.shape_38.setTransform(0.75, 39.8),
                  (this.shape_39 = new t.Shape()),
                  this.shape_39.graphics
                    .f("#F6D0EA")
                    .s()
                    .p("AABAFQgFgCABgIQALACgFAJg"),
                  this.shape_39.setTransform(7.4464, 29.675),
                  (this.shape_40 = new t.Shape()),
                  this.shape_40.graphics
                    .f("#F3CFEA")
                    .s()
                    .p("AAAAFQgEgCABgIQALADgGAHg"),
                  this.shape_40.setTransform(18.2188, 35.85),
                  (this.shape_41 = new t.Shape()),
                  this.shape_41.graphics
                    .f("#6D69EA")
                    .s()
                    .p(
                      "ABWCAQAAg9ACg8QABgQgGgHIgBgBIgBAAQgBBIgCBFIgBAAIgbgQQAAg9ACg8QABgRgGgHIgBgBIgBAAQAABIgDBFIgBAAIgbgQQAAg9ACg8QABgRgGgHIgBAAIgBgBQAABIgDBGIgBgBIgagQQAAg9ACg8QABgQgGgHIgBgBIgBgBQAABJgDBFIgBAAIgbgRQABg2ABg3QABgVgFgOIgBgBQgBBJgDBFQgPgIgMgJQAAg4ACg4QABgVgHgMIgBgBQgBBJgDBFQgPgIgOgJIAAgCIAAiNIAMgGIABAAQBOAqBPAuQAtAbAsAcIgBAAIgKAEIgBAAQAABKgDBGQgPgIgOgKgAA9gEIAAAAIAGAEIABAAIABAAQACgFgDgDIAAgBQgDgCgEgBIgBAAQAAAEABAEgAAdgWIACAAQAGgJgMgCQAAAJAEACgAhNhUIACABQAFgKgMgCQgBAJAGACg"
                    ),
                  this.shape_41.setTransform(15.3, 38.675),
                  (this.shape_42 = new t.Shape()),
                  this.shape_42.graphics
                    .f("rgba(85,81,203,0.996)")
                    .s()
                    .p(
                      "AALBtIichcIgBAAQgIgEgFgEIAAgCIAAjHICfBaICcBbIAEADIAADIIAAABQhLgphKgrgABJgKIABAAQAHAHgBAQQgCA9AAA9QANAJAQAIQAChGAAhJIABAAQgBBKADBEIACgBQALgGgBgUQgDgfAAgeIAAg8QgrgbgugaQhOguhPgqIAAAAIgMAFIAACOIAAABQANAJAQAIQADhFAAhIIABABQAHALgBAWQgBA4AAA3QAMAKAPAHQADhFAAhIIABAAQAFAOAAAVQgCA3AAA3IAbAQIABAAQAChEAAhJIABAAIABABQAHAHgBARQgCA8AAA9IAbAQIABAAQABhFAAhIIABAAIABABQAHAHgBARQgCA7AAA9IAbARIABAAQAChGAAhIIABABIABABQAHAHgBAQQgCA8AAA9IAbAQIABABQAChGAAhIg"
                    ),
                  this.shape_42.setTransform(16.15, 38.025),
                  (this.shape_43 = new t.Shape()),
                  this.shape_43.graphics
                    .f("rgba(64,61,153,0.753)")
                    .s()
                    .p("AAABmIAAgCIAAjJIABAAIAAACIAADHIAAACIgBAAg"),
                  this.shape_43.setTransform(0.075, 28.725),
                  (this.shape_44 = new t.Shape()),
                  this.shape_44.graphics
                    .f("#261F78")
                    .s()
                    .p("AAFAGQgFgDgFgEIAKgEIABgBIAAAMIAAABIgBgBg"),
                  this.shape_44.setTransform(32.475, 22.3),
                  (this.shape_45 = new t.Shape()),
                  this.shape_45.graphics
                    .f("#28217C")
                    .s()
                    .p("AAFAHQgGgDgEgEIAKgGIABAAIAAAMIAAABIgBAAg"),
                  this.shape_45.setTransform(38.575, 18.825),
                  (this.shape_46 = new t.Shape()),
                  this.shape_46.graphics
                    .f("#28217B")
                    .s()
                    .p("AADAHQgFgDgDgFIALgFIAAABIAAACQABAGgCAEIgCAAg"),
                  this.shape_46.setTransform(29.5893, 24),
                  (this.shape_47 = new t.Shape()),
                  this.shape_47.graphics
                    .f("rgba(12,10,36,0.251)")
                    .s()
                    .p("AAABmIAAgBIAAjIIAAgCIABAAIAADKIAAABIgBAAg"),
                  this.shape_47.setTransform(64.175, 50.875),
                  (this.shape_48 = new t.Shape()),
                  this.shape_48.graphics
                    .f("rgba(33,26,113,0.992)")
                    .s()
                    .p(
                      "AlABqIAAgBIAAjJQAJgEAHgEIAAgBICdBcQBKApBKApICehZICThVIANAJIABAAIAAACIgDACIieBbIieBZIgDgCIidhaIifhaIAADHIAAABIgCAAg"
                    ),
                  this.shape_48.setTransform(32.05, 50.4),
                  (this.shape_49 = new t.Shape()),
                  this.shape_49.graphics
                    .f("rgba(1,1,3,0.031)")
                    .s()
                    .p("AAHAJIgBAAIgNgJIAOgHIAAgBIABAAIAAAQIAAABIgBAAg"),
                  this.shape_49.setTransform(63.425, 39.8),
                  (this.shape_50 = new t.Shape()),
                  this.shape_50.graphics
                    .f("#827AED")
                    .s()
                    .p("AgDgCQAMgHgJAMIgCADQgBAAAAgIg"),
                  this.shape_50.setTransform(49.3758, 39.3614),
                  (this.shape_51 = new t.Shape()),
                  this.shape_51.graphics
                    .f("#D59694")
                    .s()
                    .p("AgCgCQALgHgJAMIgCADQgBAAABgIg"),
                  this.shape_51.setTransform(47.4461, 44.6114),
                  (this.shape_52 = new t.Shape()),
                  this.shape_52.graphics
                    .f("#DB9A94")
                    .s()
                    .p("AgCAFIAAgGIAAgBIAEgDIABAAIAAAGIAAABIAAABIgFADIAAgBg"),
                  this.shape_52.setTransform(43.7, 36.475),
                  (this.shape_53 = new t.Shape()),
                  this.shape_53.graphics
                    .f("#413CAC")
                    .s()
                    .p(
                      "AgFA3IgCAAIhYg0IAAgBQAHgCAEgDIABAAIBZA1IgBABQgFAFgEAAIgBgBgABSADIgBgBIhWgxIAAgBIAKgGIABgBQAvAbArAbIgBABIAAAAQgFADgEAAIgEAAg"
                    ),
                  this.shape_53.setTransform(35.525, 25.3577),
                  (this.shape_54 = new t.Shape()),
                  this.shape_54.graphics
                    .f("#D79894")
                    .s()
                    .p("AgDAEIAAgGIAAgBQANgGgKAMIgDADIAAgCg"),
                  this.shape_54.setTransform(59.092, 29.7553),
                  (this.shape_55 = new t.Shape()),
                  this.shape_55.graphics
                    .f("#8D6794")
                    .s()
                    .p(
                      "AhMAmIAAgIIABAAIAAAHIAAABgAhEAiIAAgCIAAgHQACADgCAGgABNgdIgBgIIABAAIAAAHIAAABIAAAAg"
                    ),
                  this.shape_55.setTransform(50.95, 33.3),
                  (this.shape_56 = new t.Shape()),
                  this.shape_56.graphics
                    .f("#6058C5")
                    .s()
                    .p(
                      "AgDAGIgBgHIACAAIAAAGIAAABgAAEABIAAgGQACACgCAFIAAAAIAAgBg"
                    ),
                  this.shape_56.setTransform(60.9944, 26.525),
                  (this.shape_57 = new t.Shape()),
                  this.shape_57.graphics
                    .f("#877FF3")
                    .s()
                    .p(
                      "AgpAzQANgHgJAMIgDADQgCAAABgIgAAkgvIAAgHIAAgBIAFgDIACAAIAAAHIAAACIgBAAIgGAEIAAgCg"
                    ),
                  this.shape_57.setTransform(57.0983, 31.7756),
                  (this.shape_58 = new t.Shape()),
                  this.shape_58.graphics
                    .f("#413DAC")
                    .s()
                    .p(
                      "AAWAnQgqgbgtgYIAAgBIALgHIABAAIBaA1IgBACQgHADgFABIgCAAgAA2AVIgBAAIhXgzIgBgBIALgGIAAgBQAuAaAsAdIgCAAQgDAEgEAAIgDAAg"
                    ),
                  this.shape_58.setTransform(47.4625, 18.425),
                  (this.shape_59 = new t.Shape()),
                  this.shape_59.graphics
                    .f("#433FB0")
                    .s()
                    .p(
                      "AikA2QACgEgBgHIAAgCIABABIBWAwIABABQAEADgGADIgEgBIgCABQgrgSgmgZgAgXBAQgrgUgngZQADgEgBgHIAAgBIABAAIBWAwIAAABQAEAEgIAEIgBAAIgCAAgAACAvIgBAAIhKgsIgBAAIAAgCIAAgLQAxAYAnAcIABABQgGAEgFAAIgCAAgAA+AMIhLgqIAAgBIAAgBIAAgNQAtAaArAbQAAABAAAAQAAAAAAAAQAAAAgBAAQAAAAgBgBQgEAFgHAAgACcgoQgpgSgpgaQADgDgBgIIAAgBIABAAQArAYApAaIACAAQAFACgHADIgDABIgCAAg"
                    ),
                  this.shape_59.setTransform(40.6087, 22.725),
                  (this.shape_60 = new t.Shape()),
                  this.shape_60.graphics
                    .f("#29227D")
                    .s()
                    .p("AAEAGIgKgGIANgFIAAAAIAAABQABAHgDADIgBAAg"),
                  this.shape_60.setTransform(47.5143, 13.6),
                  (this.shape_61 = new t.Shape()),
                  this.shape_61.graphics
                    .f("rgba(56,48,153,0.996)")
                    .s()
                    .p(
                      "AifGdIAAjJICfhZICchcIAEgDIAADJIAAABIgEACIicBcQhPAuhQAtIAAgCgAh8E1QgCAOAFgIQAGgIgDAAIgGACgAhCEpQgCANAFgIQAGgIgDAAIgGADgAhCEUQgCANAFgHQAGgIgDAAIgGACgAgaEcIAAgBQAEAAABgCIAAgBIABAAQACgGgDgDIAAAAQgCACgEAAIAAACIgCAAQgCAIAFABgAhWDhQgBANAFgHQAGgIgDAAIgHACgAAwC9QgCANAGgHQAGgJgEAAIgGADgAB/DDIAAgBIAEgCIABAAIABAAQACgHgDgDIgBAAQgCADgEAAIAAABIgBAAQgCAIAFABgAgHC+IAAgBQABAAABAAQAAAAABAAQAAAAABAAQAAAAAAgBQAFgMgKAFIgBAAQgCAIAEABgABWCSQgBANAFgHQAGgIgDAAIgHACgAifDAIAAjIICehbICdhbIAEgCIAADIIAAABIgBAAQgGAGgIACIiSBVIieBbIAAgBgAh8BYQgCANAFgHQAGgJgDAAIgGADgAhCBLQgCANAFgHQAGgIgDAAIgGACgAhCA3QgCAMAFgHQAGgIgDAAIgGADgAgaA+IAAAAQAEAAABgDIAAAAIABAAQACgHgDgDIgBAAIgFAEIgCAAQgCAIAFABgAhWADIABAIQAAABABAAQAAAAAAAAQABAAAAAAQABAAAAgBQAHgJgFAAIgGABgAAwggQgCAOAGgIQAGgIgEAAIgGACgAB/gZIAAgBQACgBACgCIABAAIABAAQACgGgDgEIgBABQgCACgEAAIAAACIgBAAQgCAIAFABgAgHgfIAAgBQABAAABABQAAAAABAAQAAAAABgBQAAAAAAAAQAFgMgKAEIgBAAQgCAIAEABgABWhLQgBANAFgHQAGgIgDAAIgHACgAifgdIAAjJICehbICdhcIAEgBIAADJIAAABIAAABIgPAIIiRBWIifBaIAAgCgAhph7QgCANAGgIQAGgIgEAAIgGADgAgJieQgCAOAFgIQAGgIgDAAIgGACgAAJjSQgBANAFgHQAGgJgEAAIgGADgAAwjoQgCAMAFgHQAGgIgDAAIgGADgAgwjmIABAAIAHgDIAAgBIABAAQABgGgCgCIgBAAIgGADIAAABIgBAAIAAAIgABpkqIABABIADgDQALgNgOAGIAAABIgCAAIABAIgAB9lJIAAAAIAHgEIAAAAIABgBQACgFgDgDIgBAAIgGADIAAABIgBAAIABAJg"
                    ),
                  this.shape_61.setTransform(48.125, 60.175),
                  (this.shape_62 = new t.Shape()),
                  this.shape_62.graphics
                    .f("rgba(127,124,250,0.996)")
                    .s()
                    .p(
                      "AgCC2IiehbIifhaIAAgBICehbICehcIADgBICeBbICeBbIAEACIAAABIgEABIieBbIieBcIgCgDgAhcBYIALAHIACAAQAmAZAqASIACgBIAEABQAGgDgEgDIgBgBIhVgwIgBgBIAAAAIgOAGgAg9BGIAAABIBXA0IACAAQAFABAGgGIABAAIhZg3IgBAAQgEAFgHACgAgfA0QADAGAHACIABAAQAmAZArAUIADAAQAIgEgEgEIAAgBIhVgwIgBAAIAAgBIgNAFgAAJAeIgLAFQAEAFAGADIACABIABAAIBLAsIABAAQAGABAHgFIgBgBQgogcgxgZIgBAAgAAnAMIgLAHIAAABIBXAyIABAAQAHACAGgFIAAgBIABAAQgrgcgvgaIgBAAgAA6ABQAEAFAHADIACAAIAAABIBMArIAAABQAHAAAEgFQAAABABAAQAAAAABAAQAAAAAAAAQAAAAAAgBQgrgcgugZIgCAAIgLAFgABXgPIABABQAtAYArAbIABAAQAFgBAIgDIAAgCIhag1IgBAAIgMAHgACAgnIgKAGIAAABIBYAzIACAAQAFACAEgGIACAAQgsgdgugaIgBABgACTgyIALAHIABAAQApAaApARQACABADgBQAHgDgFgCIgCAAQgpgagrgYIgBAAIAAgBIgOAGg"
                    ),
                  this.shape_62.setTransform(32.125, 18.625),
                  (this.shape_63 = new t.Shape()),
                  this.shape_63.graphics
                    .f("rgba(13,11,37,0.251)")
                    .s()
                    .p("AAABmIAAgCIAAjHIAAgCIABAAIAADJIAAACIgBAAg"),
                  this.shape_63.setTransform(64.175, 28.725),
                  this.timeline.addTween(
                    t.Tween.get({})
                      .to({
                        state: [
                          { t: this.shape_63 },
                          { t: this.shape_62 },
                          { t: this.shape_61 },
                          { t: this.shape_60 },
                          { t: this.shape_59 },
                          { t: this.shape_58 },
                          { t: this.shape_57 },
                          { t: this.shape_56 },
                          { t: this.shape_55 },
                          { t: this.shape_54 },
                          { t: this.shape_53 },
                          { t: this.shape_52 },
                          { t: this.shape_51 },
                          { t: this.shape_50 },
                          { t: this.shape_49 },
                          { t: this.shape_48 },
                          { t: this.shape_47 },
                          { t: this.shape_46 },
                          { t: this.shape_45 },
                          { t: this.shape_44 },
                          { t: this.shape_43 },
                          { t: this.shape_42 },
                          { t: this.shape_41 },
                          { t: this.shape_40 },
                          { t: this.shape_39 },
                          { t: this.shape_38 },
                          { t: this.shape_37 },
                          { t: this.shape_36 },
                          { t: this.shape_35 },
                          { t: this.shape_34 },
                          { t: this.shape_33 },
                          { t: this.shape_32 },
                          { t: this.shape_31 },
                          { t: this.shape_30 },
                          { t: this.shape_29 },
                          { t: this.shape_28 },
                          { t: this.shape_27 },
                          { t: this.shape_26 },
                          { t: this.shape_25 },
                          { t: this.shape_24 },
                          { t: this.shape_23 },
                          { t: this.shape_22 },
                          { t: this.shape_21 },
                          { t: this.shape_20 },
                          { t: this.shape_19 },
                          { t: this.shape_18 },
                          { t: this.shape_17 },
                          { t: this.shape_16 },
                          { t: this.shape_15 },
                          { t: this.shape_14 },
                          { t: this.shape_13 },
                          { t: this.shape_12 },
                          { t: this.shape_11 },
                          { t: this.shape_10 },
                          { t: this.shape_9 },
                          { t: this.shape_8 },
                          { t: this.shape_7 },
                          { t: this.shape_6 },
                          { t: this.shape_5 },
                          { t: this.shape_4 },
                          { t: this.shape_3 },
                          { t: this.shape_2 },
                          { t: this.shape_1 },
                          { t: this.shape },
                        ],
                      })
                      .wait(1)
                  ),
                  this._renderFirstFrame();
              }).prototype = A(
                n.Símbolo10,
                new t.Rectangle(0, 0.2, 64.3, 101.6),
                null
              )),
              ((n.Símbolo2 = function (e, i, a, o) {
                null == a && (a = !0), null == o && (o = !1);
                let n = new Object();
                (n.mode = e),
                  (n.startPosition = i),
                  (n.labels = {}),
                  (n.loop = a),
                  (n.reversed = o),
                  t.MovieClip.apply(this, [n]),
                  (this.shape = new t.Shape()),
                  this.shape.graphics
                    .f("#FF9900")
                    .s()
                    .p(
                      "EgfGBi7IAAoIMBmNAAAIAAIIgEhHGA9aIAAoIMAhIAAAIAAIIgEgfGAv/IAAoIMBmNAAAIAAIIgEhHGAKeIAAoIMAhIAAAIAAIIgA/GioIAAoIMBmNAAAIAAIIgEhHGgoJIAAoJMAhIAAAIAAIJgEgfGg1RIAAoIMBmNAAAIAAIIgEhHGhayIAAoJMAhIAAAIAAIJg"
                    ),
                  this.shape.setTransform(455.125, 633.15),
                  (this.shape_1 = new t.Shape()),
                  this.shape_1.graphics
                    .f("#CCCCCC")
                    .s()
                    .p(
                      "EgZeBQLIAAoIMAy8AAAIAAIIgA5edPIAAoJMAy8AAAIAAIJgA5e1ZIAAoIMAy8AAAIAAIIgEgZehICIAAoIMAy8AAAIAAIIg"
                    ),
                  this.shape_1.setTransform(163.05, 593.15),
                  (this.shape_2 = new t.Shape()),
                  this.shape_2.graphics
                    .f("#FF3366")
                    .s()
                    .p(
                      "Egg+BcrIAAoIMBB9AAAIAAIIgEAHCBDrIAAoIIZ9AAIAAIIgEgg+ApvIAAoIMBB9AAAIAAIIgAHCQuIAAoIIZ9AAIAAIIgEgg+gI5IAAoIMBB9AAAIAAIIgEAHCgh5IAAoIIZ9AAIAAIIgEgg+g7iIAAoIMBB9AAAIAAIIgEAHChUiIAAoIIZ9AAIAAIIg"
                    ),
                  this.shape_2.setTransform(211.05, 593.125),
                  (this.shape_3 = new t.Shape()),
                  this.shape_3.graphics
                    .f("#33CCFF")
                    .s()
                    .p(
                      "EhHGBi7IAAoIMAisAAAIABIIgEAC+BWbIAAoIMApRAAAIAAIIgEAC+A9aIAAoIMBEJAAAIAAIIgEhHGAv/IAAoIMAisAAAIABIIgEAC+AjfIAAoIMApRAAAIAAIIgAC+KeIAAoIMBEJAAAIAAIIgEhHGgCoIAAoIMAisAAAIABIIgAC+vJIAAoIMApRAAAIAAIIgEAC+goJIAAoJMBEJAAAIAAIJgEhHGg1RIAAoIMAisAAAIABIIgEAC+hByIAAoIMApRAAAIAAIIgEAC+hayIAAoJMBEJAAAIAAIJg"
                    ),
                  this.shape_3.setTransform(455.125, 633.15),
                  this.timeline.addTween(
                    t.Tween.get({})
                      .to({
                        state: [
                          { t: this.shape_3 },
                          { t: this.shape_2 },
                          { t: this.shape_1 },
                          { t: this.shape },
                        ],
                      })
                      .wait(1)
                  ),
                  this._renderFirstFrame();
              }).prototype = A(
                n.Símbolo2,
                new t.Rectangle(0, 0, 910.3, 1266.3),
                null
              )),
              ((n.Símbolo17 = function (e, i, a, o) {
                null == a && (a = !0), null == o && (o = !1);
                let s = new Object();
                (s.mode = e),
                  (s.startPosition = i),
                  (s.labels = {}),
                  (s.loop = a),
                  (s.reversed = o),
                  t.MovieClip.apply(this, [s]),
                  (this.instance = new n.Símbolo18()),
                  this.instance.setTransform(
                    24.9,
                    89.75,
                    1,
                    1,
                    0,
                    0,
                    0,
                    3.3,
                    56.3
                  ),
                  (this.instance.alpha = 0.6289),
                  (this.instance_1 = new n.CachedBmp_2()),
                  this.instance_1.setTransform(0, -41.95, 0.3333, 0.3333),
                  this.timeline.addTween(
                    t.Tween.get({})
                      .to({
                        state: [{ t: this.instance_1 }, { t: this.instance }],
                      })
                      .wait(1)
                  ),
                  this._renderFirstFrame();
              }).prototype = A(
                n.Símbolo17,
                new t.Rectangle(0, -41.9, 46.7, 188),
                null
              )),
              ((n.Símbolo15 = function (e, i, a, o) {
                null == a && (a = !0), null == o && (o = !1);
                let s = new Object();
                (s.mode = e),
                  (s.startPosition = i),
                  (s.labels = {}),
                  (s.loop = a),
                  (s.reversed = o),
                  t.MovieClip.apply(this, [s]),
                  (this.instance = new n.Símbolo16()),
                  this.instance.setTransform(
                    25.9,
                    137.55,
                    1,
                    1,
                    0,
                    0,
                    0,
                    3.2,
                    56.3
                  ),
                  (this.instance.alpha = 0.6289),
                  (this.instance_1 = new n.Símbolo10()),
                  this.instance_1.setTransform(
                    26.55,
                    42.2,
                    0.8271,
                    0.8271,
                    0,
                    0,
                    0,
                    32.1,
                    51
                  ),
                  (this.instance_1.filters = [
                    new t.ColorMatrixFilter(new t.ColorMatrix(0, 0, 24, 2)),
                  ]),
                  this.instance_1.cache(-2, -2, 68, 106),
                  this.timeline.addTween(
                    t.Tween.get({})
                      .to({
                        state: [{ t: this.instance_1 }, { t: this.instance }],
                      })
                      .wait(1)
                  ),
                  this._renderFirstFrame();
              }).prototype = A(
                n.Símbolo15,
                new t.Rectangle(0, 0.1, 57, 193.8),
                null
              )),
              ((n.Símbolo14 = function (e, i, a, o) {
                null == a && (a = !0), null == o && (o = !1);
                let s = new Object();
                (s.mode = e),
                  (s.startPosition = i),
                  (s.labels = {}),
                  (s.loop = a),
                  (s.reversed = o),
                  t.MovieClip.apply(this, [s]),
                  (this.instance = new n.Símbolo13()),
                  this.instance.setTransform(
                    21.55,
                    103.85,
                    1,
                    1,
                    0,
                    0,
                    0,
                    3.2,
                    56.2
                  ),
                  (this.instance.alpha = 0.4688),
                  (this.instance_1 = new n.CachedBmp_1()),
                  this.instance_1.setTransform(0, 0, 0.3333, 0.3333),
                  this.timeline.addTween(
                    t.Tween.get({})
                      .to({
                        state: [{ t: this.instance_1 }, { t: this.instance }],
                      })
                      .wait(1)
                  ),
                  this._renderFirstFrame();
              }).prototype = A(
                n.Símbolo14,
                new t.Rectangle(0, 0, 46, 160.2),
                null
              )),
              ((n.Interpolación1 = function (e, i, a, o) {
                null == a && (a = !0), null == o && (o = !1);
                let s = new Object();
                (s.mode = e),
                  (s.startPosition = i),
                  (s.labels = {}),
                  (s.loop = a),
                  (s.reversed = o),
                  t.MovieClip.apply(this, [s]),
                  (this.instance = new n.Símbolo2()),
                  this.instance.setTransform(
                    0.05,
                    493.1,
                    1,
                    1.0003,
                    0,
                    1.3077,
                    0,
                    455.1,
                    633.1
                  ),
                  this.timeline.addTween(t.Tween.get(this.instance).wait(1)),
                  this._renderFirstFrame();
              }).prototype = o =
                new t.MovieClip()),
              (o.nominalBounds = new t.Rectangle(-469.5, -140, 939.2, 1266.3)),
              ((n.Símbolo20 = function (e, i, a, o) {
                null == a && (a = !0), null == o && (o = !1);
                let s = new Object();
                (s.mode = e),
                  (s.startPosition = i),
                  (s.labels = {}),
                  (s.loop = a),
                  (s.reversed = o),
                  t.MovieClip.apply(this, [s]),
                  (this.instance = new n.Interpolación1("synched", 0)),
                  this.instance.setTransform(
                    23.4,
                    54.8,
                    0.0142,
                    0.0178,
                    0,
                    0.7848,
                    173.7686,
                    -7.4,
                    14.7
                  ),
                  (this.instance_1 = new n.Interpolación1("synched", 0)),
                  this.instance_1.setTransform(
                    23.4,
                    31.55,
                    0.0142,
                    0.0178,
                    0,
                    0.7848,
                    173.7686,
                    -7.3,
                    11.8
                  ),
                  (this.instance_2 = new n.Interpolación1("synched", 0)),
                  this.instance_2.setTransform(
                    23.45,
                    8.05,
                    0.0142,
                    0.0178,
                    0,
                    0.7848,
                    173.7686,
                    -10.8,
                    12.2
                  ),
                  (this.instance_3 = new n.Interpolación1("synched", 0)),
                  this.instance_3.setTransform(
                    7.15,
                    52.65,
                    0.0166,
                    0.0208,
                    0,
                    0.7992,
                    173.8639,
                    -12.5,
                    17.9
                  ),
                  (this.instance_4 = new n.Interpolación1("synched", 0)),
                  this.instance_4.setTransform(
                    7.15,
                    25.45,
                    0.0166,
                    0.0208,
                    0,
                    0.7992,
                    173.8639,
                    -12.3,
                    10.7
                  ),
                  (this.instance_5 = new n.Interpolación1("synched", 0)),
                  this.instance_5.setTransform(
                    7.25,
                    -1.85,
                    0.0166,
                    0.0208,
                    0,
                    0.7992,
                    173.8639,
                    -18.4,
                    11.2
                  ),
                  this.timeline.addTween(
                    t.Tween.get({})
                      .to({
                        state: [
                          { t: this.instance_5 },
                          { t: this.instance_4 },
                          { t: this.instance_3 },
                          { t: this.instance_2 },
                          { t: this.instance_1 },
                          { t: this.instance },
                        ],
                      })
                      .wait(1)
                  ),
                  this._renderFirstFrame();
              }).prototype = A(
                n.Símbolo20,
                new t.Rectangle(-0.8, -5.7, 30.5, 82.2),
                null
              )),
              ((n.Interpolación4 = function (e, i, a, o) {
                null == a && (a = !0), null == o && (o = !1);
                let s = new Object();
                (s.mode = e),
                  (s.startPosition = i),
                  (s.labels = {}),
                  (s.loop = a),
                  (s.reversed = o),
                  t.MovieClip.apply(this, [s]),
                  (this.instance = new n.Símbolo20()),
                  this.instance.setTransform(0, -0.1, 1, 1, 0, 0, 0, 15, 37.7),
                  (this.instance.alpha = 0.5898),
                  this.timeline.addTween(t.Tween.get(this.instance).wait(1)),
                  this._renderFirstFrame();
              }).prototype = o =
                new t.MovieClip()),
              (o.nominalBounds = new t.Rectangle(-15.7, -43.5, 30.4, 82.2)),
              ((n.Interpolación3 = function (e, i, a, o) {
                null == a && (a = !0), null == o && (o = !1);
                let s = new Object();
                (s.mode = e),
                  (s.startPosition = i),
                  (s.labels = {}),
                  (s.loop = a),
                  (s.reversed = o),
                  t.MovieClip.apply(this, [s]),
                  (this.instance = new n.Interpolación1("synched", 0)),
                  this.instance.setTransform(
                    22.25,
                    183.35,
                    0.1051,
                    0.1276,
                    0,
                    1.1036,
                    163.7471,
                    -0.5,
                    0.1
                  ),
                  (this.instance_1 = new n.Interpolación1("synched", 0)),
                  this.instance_1.setTransform(
                    22.2,
                    19.3,
                    0.1051,
                    0.1276,
                    0,
                    1.1036,
                    163.7471,
                    -0.5,
                    0.1
                  ),
                  (this.instance_2 = new n.Interpolación1("synched", 0)),
                  this.instance_2.setTransform(
                    22.1,
                    -145.45,
                    0.1051,
                    0.1276,
                    0,
                    1.1036,
                    163.7495,
                    -0.5,
                    0.9
                  ),
                  this.timeline.addTween(
                    t.Tween.get({})
                      .to({
                        state: [
                          { t: this.instance_2 },
                          { t: this.instance_1 },
                          { t: this.instance },
                        ],
                      })
                      .wait(1)
                  ),
                  this._renderFirstFrame();
              }).prototype = o =
                new t.MovieClip()),
              (o.nominalBounds = new t.Rectangle(-25.2, -176.3, 92.2, 516.2)),
              ((n.coder = function (e, i, a, o) {
                null == a && (a = !0), null == o && (o = !1);
                let s = new Object();
                (s.mode = e),
                  (s.startPosition = i),
                  (s.labels = {}),
                  (s.loop = a),
                  (s.reversed = o),
                  t.MovieClip.apply(this, [s]),
                  (this.instance = new n.Símbolo17()),
                  this.instance.setTransform(
                    293.75,
                    406,
                    1,
                    1,
                    0,
                    0,
                    0,
                    23.9,
                    73
                  ),
                  (this.instance.alpha = 0),
                  (this.instance._off = !0),
                  this.timeline.addTween(
                    t.Tween.get(this.instance)
                      .wait(138)
                      .to({ _off: !1 }, 0)
                      .wait(1)
                      .to(
                        {
                          regX: 23.3,
                          regY: 52.1,
                          x: 293.15,
                          y: 378.65,
                          alpha: 0.0717,
                        },
                        0
                      )
                      .wait(1)
                      .to({ y: 372.2, alpha: 0.144 }, 0)
                      .wait(1)
                      .to({ y: 365.7, alpha: 0.2167 }, 0)
                      .wait(1)
                      .to({ y: 359.15, alpha: 0.2897 }, 0)
                      .wait(1)
                      .to({ y: 352.65, alpha: 0.3628 }, 0)
                      .wait(1)
                      .to({ y: 346.1, alpha: 0.4358 }, 0)
                      .wait(1)
                      .to({ y: 339.6, alpha: 0.5086 }, 0)
                      .wait(1)
                      .to({ y: 333.1, alpha: 0.5811 }, 0)
                      .wait(1)
                      .to({ y: 326.65, alpha: 0.653 }, 0)
                      .wait(1)
                      .to({ y: 320.3, alpha: 0.7243 }, 0)
                      .wait(1)
                      .to({ y: 314, alpha: 0.7948 }, 0)
                      .wait(1)
                      .to({ y: 307.75, alpha: 0.8643 }, 0)
                      .wait(1)
                      .to({ y: 301.65, alpha: 0.9327 }, 0)
                      .wait(1)
                      .to(
                        {
                          regX: 23.9,
                          regY: 73,
                          x: 293.75,
                          y: 316.55,
                          alpha: 1,
                        },
                        0
                      )
                      .wait(1)
                      .to({ regX: 23.3, regY: 52.1, x: 293.15, y: 291.85 }, 0)
                      .wait(1)
                      .to({ y: 288.1 }, 0)
                      .wait(1)
                      .to({ y: 284.4 }, 0)
                      .wait(1)
                      .to({ y: 280.75 }, 0)
                      .wait(1)
                      .to({ y: 277.15 }, 0)
                      .wait(1)
                      .to({ y: 273.6 }, 0)
                      .wait(1)
                      .to({ y: 270.1 }, 0)
                      .wait(1)
                      .to({ y: 266.65 }, 0)
                      .wait(1)
                      .to({ y: 263.3 }, 0)
                      .wait(1)
                      .to({ y: 259.95 }, 0)
                      .wait(1)
                      .to({ y: 256.7 }, 0)
                      .wait(1)
                      .to({ y: 253.5 }, 0)
                      .wait(1)
                      .to({ y: 250.35 }, 0)
                      .wait(1)
                      .to({ y: 247.25 }, 0)
                      .wait(1)
                      .to({ y: 244.25 }, 0)
                      .wait(1)
                      .to({ y: 241.25 }, 0)
                      .wait(1)
                      .to({ y: 238.35 }, 0)
                      .wait(1)
                      .to({ y: 235.5 }, 0)
                      .wait(1)
                      .to({ y: 232.7 }, 0)
                      .wait(1)
                      .to({ y: 230 }, 0)
                      .wait(1)
                      .to({ y: 227.3 }, 0)
                      .wait(1)
                      .to({ y: 224.7 }, 0)
                      .wait(1)
                      .to({ y: 222.15 }, 0)
                      .wait(1)
                      .to({ y: 219.65 }, 0)
                      .wait(1)
                      .to({ y: 217.2 }, 0)
                      .wait(1)
                      .to({ y: 214.8 }, 0)
                      .wait(1)
                      .to({ y: 212.45 }, 0)
                      .wait(1)
                      .to({ y: 210.15 }, 0)
                      .wait(1)
                      .to({ y: 207.95 }, 0)
                      .wait(1)
                      .to({ y: 205.75 }, 0)
                      .wait(1)
                      .to({ y: 203.65 }, 0)
                      .wait(1)
                      .to({ y: 201.55 }, 0)
                      .wait(1)
                      .to({ y: 199.55 }, 0)
                      .wait(1)
                      .to({ y: 197.55 }, 0)
                      .wait(1)
                      .to({ y: 195.65 }, 0)
                      .wait(1)
                      .to({ y: 193.75 }, 0)
                      .wait(1)
                      .to({ y: 191.95 }, 0)
                      .wait(1)
                      .to({ y: 190.15 }, 0)
                      .wait(1)
                      .to({ y: 188.45 }, 0)
                      .wait(1)
                      .to({ y: 186.75 }, 0)
                      .wait(1)
                      .to({ y: 185.1 }, 0)
                      .wait(1)
                      .to({ y: 183.5 }, 0)
                      .wait(1)
                      .to({ y: 181.95 }, 0)
                      .wait(1)
                      .to({ y: 180.45 }, 0)
                      .wait(1)
                      .to({ y: 178.95 }, 0)
                      .wait(1)
                      .to({ y: 177.55 }, 0)
                      .wait(1)
                      .to({ y: 176.15 }, 0)
                      .wait(1)
                      .to({ y: 174.8 }, 0)
                      .wait(1)
                      .to({ y: 173.45 }, 0)
                      .wait(1)
                      .to({ y: 172.2 }, 0)
                      .wait(1)
                      .to({ y: 170.95 }, 0)
                      .wait(1)
                      .to({ y: 169.75 }, 0)
                      .wait(1)
                      .to({ y: 168.6 }, 0)
                      .wait(1)
                      .to({ y: 167.45 }, 0)
                      .wait(1)
                      .to({ y: 166.4 }, 0)
                      .wait(1)
                      .to({ y: 165.35 }, 0)
                      .wait(1)
                      .to({ y: 164.3 }, 0)
                      .wait(1)
                      .to({ y: 163.3 }, 0)
                      .wait(1)
                      .to({ y: 162.35 }, 0)
                      .wait(1)
                      .to({ y: 161.45 }, 0)
                      .wait(1)
                      .to({ y: 160.55 }, 0)
                      .wait(1)
                      .to({ y: 159.65 }, 0)
                      .wait(1)
                      .to({ y: 158.85 }, 0)
                      .wait(1)
                      .to({ y: 158.05 }, 0)
                      .wait(1)
                      .to({ y: 157.25 }, 0)
                      .wait(1)
                      .to({ regX: 23.9, regY: 73, x: 293.75, y: 177.45 }, 0)
                      .wait(1)
                      .to(
                        {
                          regX: 23.3,
                          regY: 52.1,
                          x: 293.15,
                          y: 155.8,
                          alpha: 0.9244,
                        },
                        0
                      )
                      .wait(1)
                      .to({ y: 155.1, alpha: 0.8518 }, 0)
                      .wait(1)
                      .to({ y: 154.45, alpha: 0.782 }, 0)
                      .wait(1)
                      .to({ y: 153.85, alpha: 0.7152 }, 0)
                      .wait(1)
                      .to({ y: 153.25, alpha: 0.6512 }, 0)
                      .wait(1)
                      .to({ y: 152.65, alpha: 0.5899 }, 0)
                      .wait(1)
                      .to({ y: 152.1, alpha: 0.5314 }, 0)
                      .wait(1)
                      .to({ y: 151.55, alpha: 0.4756 }, 0)
                      .wait(1)
                      .to({ y: 151.05, alpha: 0.4224 }, 0)
                      .wait(1)
                      .to({ y: 150.6, alpha: 0.3718 }, 0)
                      .wait(1)
                      .to({ y: 150.15, alpha: 0.3238 }, 0)
                      .wait(1)
                      .to({ y: 149.7, alpha: 0.2782 }, 0)
                      .wait(1)
                      .to({ y: 149.3, alpha: 0.2352 }, 0)
                      .wait(1)
                      .to({ y: 148.9, alpha: 0.1946 }, 0)
                      .wait(1)
                      .to({ y: 148.55, alpha: 0.1564 }, 0)
                      .wait(1)
                      .to({ y: 148.2, alpha: 0.1205 }, 0)
                      .wait(1)
                      .to({ y: 147.9, alpha: 0.087 }, 0)
                      .wait(1)
                      .to({ y: 147.6, alpha: 0.0558 }, 0)
                      .wait(1)
                      .to({ y: 147.35, alpha: 0.0268 }, 0)
                      .wait(1)
                      .to(
                        { regX: 23.9, regY: 73, x: 293.75, y: 168, alpha: 0 },
                        0
                      )
                      .wait(1)
                  ),
                  (this.instance_1 = new n.Símbolo15()),
                  this.instance_1.setTransform(
                    358.65,
                    329.7,
                    1,
                    1,
                    0,
                    0,
                    0,
                    26.6,
                    96.9
                  ),
                  (this.instance_1.alpha = 0),
                  (this.instance_1._off = !0),
                  this.timeline.addTween(
                    t.Tween.get(this.instance_1)
                      .wait(78)
                      .to({ _off: !1 }, 0)
                      .wait(1)
                      .to({ regY: 97, y: 326.8, alpha: 0.0704 }, 0)
                      .wait(1)
                      .to({ y: 323.75, alpha: 0.1411 }, 0)
                      .wait(1)
                      .to({ y: 320.75, alpha: 0.212 }, 0)
                      .wait(1)
                      .to({ y: 317.7, alpha: 0.2833 }, 0)
                      .wait(1)
                      .to({ y: 314.65, alpha: 0.3547 }, 0)
                      .wait(1)
                      .to({ y: 311.6, alpha: 0.4263 }, 0)
                      .wait(1)
                      .to({ y: 308.55, alpha: 0.498 }, 0)
                      .wait(1)
                      .to({ y: 305.5, alpha: 0.5698 }, 0)
                      .wait(1)
                      .to({ y: 302.45, alpha: 0.6417 }, 0)
                      .wait(1)
                      .to({ y: 299.4, alpha: 0.7135 }, 0)
                      .wait(1)
                      .to({ y: 296.3, alpha: 0.7853 }, 0)
                      .wait(1)
                      .to({ y: 293.25, alpha: 0.857 }, 0)
                      .wait(1)
                      .to({ y: 290.2, alpha: 0.9286 }, 0)
                      .wait(1)
                      .to({ regY: 96.9, y: 287.1, alpha: 1 }, 0)
                      .wait(1)
                      .to({ regY: 97, y: 283.95 }, 0)
                      .wait(1)
                      .to({ y: 280.8 }, 0)
                      .wait(1)
                      .to({ y: 277.6 }, 0)
                      .wait(1)
                      .to({ y: 274.45 }, 0)
                      .wait(1)
                      .to({ y: 271.3 }, 0)
                      .wait(1)
                      .to({ y: 268.2 }, 0)
                      .wait(1)
                      .to({ y: 265.1 }, 0)
                      .wait(1)
                      .to({ y: 262 }, 0)
                      .wait(1)
                      .to({ y: 258.95 }, 0)
                      .wait(1)
                      .to({ y: 255.95 }, 0)
                      .wait(1)
                      .to({ y: 252.95 }, 0)
                      .wait(1)
                      .to({ y: 250 }, 0)
                      .wait(1)
                      .to({ y: 247.05 }, 0)
                      .wait(1)
                      .to({ y: 244.15 }, 0)
                      .wait(1)
                      .to({ y: 241.3 }, 0)
                      .wait(1)
                      .to({ y: 238.45 }, 0)
                      .wait(1)
                      .to({ y: 235.7 }, 0)
                      .wait(1)
                      .to({ y: 232.9 }, 0)
                      .wait(1)
                      .to({ y: 230.2 }, 0)
                      .wait(1)
                      .to({ y: 227.55 }, 0)
                      .wait(1)
                      .to({ y: 224.9 }, 0)
                      .wait(1)
                      .to({ y: 222.3 }, 0)
                      .wait(1)
                      .to({ y: 219.7 }, 0)
                      .wait(1)
                      .to({ y: 217.2 }, 0)
                      .wait(1)
                      .to({ y: 214.7 }, 0)
                      .wait(1)
                      .to({ y: 212.3 }, 0)
                      .wait(1)
                      .to({ y: 209.9 }, 0)
                      .wait(1)
                      .to({ y: 207.5 }, 0)
                      .wait(1)
                      .to({ y: 205.2 }, 0)
                      .wait(1)
                      .to({ y: 202.9 }, 0)
                      .wait(1)
                      .to({ y: 200.7 }, 0)
                      .wait(1)
                      .to({ y: 198.5 }, 0)
                      .wait(1)
                      .to({ y: 196.35 }, 0)
                      .wait(1)
                      .to({ y: 194.25 }, 0)
                      .wait(1)
                      .to({ y: 192.15 }, 0)
                      .wait(1)
                      .to({ y: 190.1 }, 0)
                      .wait(1)
                      .to({ y: 188.15 }, 0)
                      .wait(1)
                      .to({ y: 186.15 }, 0)
                      .wait(1)
                      .to({ y: 184.25 }, 0)
                      .wait(1)
                      .to({ y: 182.4 }, 0)
                      .wait(1)
                      .to({ y: 180.55 }, 0)
                      .wait(1)
                      .to({ y: 178.75 }, 0)
                      .wait(1)
                      .to({ y: 177 }, 0)
                      .wait(1)
                      .to({ y: 175.25 }, 0)
                      .wait(1)
                      .to({ y: 173.55 }, 0)
                      .wait(1)
                      .to({ y: 171.9 }, 0)
                      .wait(1)
                      .to({ y: 170.3 }, 0)
                      .wait(1)
                      .to({ y: 168.75 }, 0)
                      .wait(1)
                      .to({ y: 167.2 }, 0)
                      .wait(1)
                      .to({ y: 165.7 }, 0)
                      .wait(1)
                      .to({ y: 164.2 }, 0)
                      .wait(1)
                      .to({ y: 162.75 }, 0)
                      .wait(1)
                      .to({ y: 161.35 }, 0)
                      .wait(1)
                      .to({ y: 159.95 }, 0)
                      .wait(1)
                      .to({ y: 158.65 }, 0)
                      .wait(1)
                      .to({ y: 157.3 }, 0)
                      .wait(1)
                      .to({ y: 156.05 }, 0)
                      .wait(1)
                      .to({ y: 154.8 }, 0)
                      .wait(1)
                      .to({ y: 153.55 }, 0)
                      .wait(1)
                      .to({ y: 152.35 }, 0)
                      .wait(1)
                      .to({ y: 151.2 }, 0)
                      .wait(1)
                      .to({ y: 150.1 }, 0)
                      .wait(1)
                      .to({ y: 149 }, 0)
                      .wait(1)
                      .to({ y: 147.9 }, 0)
                      .wait(1)
                      .to({ y: 146.85 }, 0)
                      .wait(1)
                      .to({ y: 145.85 }, 0)
                      .wait(1)
                      .to({ y: 144.85 }, 0)
                      .wait(1)
                      .to({ y: 143.85 }, 0)
                      .wait(1)
                      .to({ y: 142.95 }, 0)
                      .wait(1)
                      .to({ y: 142 }, 0)
                      .wait(1)
                      .to({ regY: 96.9, y: 141.05 }, 0)
                      .wait(1)
                      .to({ regY: 97, y: 140.25, alpha: 0.9397 }, 0)
                      .wait(1)
                      .to({ y: 139.4, alpha: 0.8812 }, 0)
                      .wait(1)
                      .to({ y: 138.6, alpha: 0.8243 }, 0)
                      .wait(1)
                      .to({ y: 137.8, alpha: 0.769 }, 0)
                      .wait(1)
                      .to({ y: 137.05, alpha: 0.7154 }, 0)
                      .wait(1)
                      .to({ y: 136.3, alpha: 0.6633 }, 0)
                      .wait(1)
                      .to({ y: 135.55, alpha: 0.6129 }, 0)
                      .wait(1)
                      .to({ y: 134.85, alpha: 0.5639 }, 0)
                      .wait(1)
                      .to({ y: 134.2, alpha: 0.5165 }, 0)
                      .wait(1)
                      .to({ y: 133.55, alpha: 0.4706 }, 0)
                      .wait(1)
                      .to({ y: 132.9, alpha: 0.4262 }, 0)
                      .wait(1)
                      .to({ y: 132.25, alpha: 0.3832 }, 0)
                      .wait(1)
                      .to({ y: 131.7, alpha: 0.3416 }, 0)
                      .wait(1)
                      .to({ y: 131.1, alpha: 0.3015 }, 0)
                      .wait(1)
                      .to({ y: 130.55, alpha: 0.2627 }, 0)
                      .wait(1)
                      .to({ y: 130, alpha: 0.2253 }, 0)
                      .wait(1)
                      .to({ y: 129.5, alpha: 0.1892 }, 0)
                      .wait(1)
                      .to({ y: 129, alpha: 0.1545 }, 0)
                      .wait(1)
                      .to({ y: 128.5, alpha: 0.1211 }, 0)
                      .wait(1)
                      .to({ y: 128.05, alpha: 0.0889 }, 0)
                      .wait(1)
                      .to({ y: 127.6, alpha: 0.058 }, 0)
                      .wait(1)
                      .to({ y: 127.2, alpha: 0.0284 }, 0)
                      .wait(1)
                      .to({ regY: 96.9, y: 126.7, alpha: 0 }, 0)
                      .to({ _off: !0 }, 49)
                      .wait(4)
                  ),
                  (this.instance_2 = new n.Símbolo14()),
                  this.instance_2.setTransform(
                    309.05,
                    335,
                    1,
                    1,
                    0,
                    0,
                    0,
                    22.9,
                    80.1
                  ),
                  (this.instance_2.alpha = 0),
                  this.timeline.addTween(
                    t.Tween.get(this.instance_2)
                      .wait(1)
                      .to({ regX: 23, x: 309.15, y: 331.85, alpha: 0.0704 }, 0)
                      .wait(1)
                      .to({ y: 328.7, alpha: 0.1411 }, 0)
                      .wait(1)
                      .to({ y: 325.6, alpha: 0.2121 }, 0)
                      .wait(1)
                      .to({ y: 322.4, alpha: 0.2834 }, 0)
                      .wait(1)
                      .to({ y: 319.25, alpha: 0.3549 }, 0)
                      .wait(1)
                      .to({ y: 316.1, alpha: 0.4266 }, 0)
                      .wait(1)
                      .to({ y: 312.9, alpha: 0.4984 }, 0)
                      .wait(1)
                      .to({ y: 309.7, alpha: 0.5702 }, 0)
                      .wait(1)
                      .to({ y: 306.55, alpha: 0.6421 }, 0)
                      .wait(1)
                      .to({ y: 303.35, alpha: 0.7139 }, 0)
                      .wait(1)
                      .to({ y: 300.15, alpha: 0.7857 }, 0)
                      .wait(1)
                      .to({ y: 297, alpha: 0.8573 }, 0)
                      .wait(1)
                      .to({ y: 293.85, alpha: 0.9288 }, 0)
                      .wait(1)
                      .to({ regX: 22.9, x: 309.05, y: 290.7, alpha: 1 }, 0)
                      .wait(1)
                      .to({ regX: 23, x: 309.15, y: 287.35 }, 0)
                      .wait(1)
                      .to({ y: 284.05 }, 0)
                      .wait(1)
                      .to({ y: 280.8 }, 0)
                      .wait(1)
                      .to({ y: 277.5 }, 0)
                      .wait(1)
                      .to({ y: 274.3 }, 0)
                      .wait(1)
                      .to({ y: 271.05 }, 0)
                      .wait(1)
                      .to({ y: 267.9 }, 0)
                      .wait(1)
                      .to({ y: 264.7 }, 0)
                      .wait(1)
                      .to({ y: 261.6 }, 0)
                      .wait(1)
                      .to({ y: 258.5 }, 0)
                      .wait(1)
                      .to({ y: 255.45 }, 0)
                      .wait(1)
                      .to({ y: 252.4 }, 0)
                      .wait(1)
                      .to({ y: 249.4 }, 0)
                      .wait(1)
                      .to({ y: 246.45 }, 0)
                      .wait(1)
                      .to({ y: 243.55 }, 0)
                      .wait(1)
                      .to({ y: 240.65 }, 0)
                      .wait(1)
                      .to({ y: 237.85 }, 0)
                      .wait(1)
                      .to({ y: 235.05 }, 0)
                      .wait(1)
                      .to({ y: 232.3 }, 0)
                      .wait(1)
                      .to({ y: 229.55 }, 0)
                      .wait(1)
                      .to({ y: 226.9 }, 0)
                      .wait(1)
                      .to({ y: 224.3 }, 0)
                      .wait(1)
                      .to({ y: 221.7 }, 0)
                      .wait(1)
                      .to({ y: 219.15 }, 0)
                      .wait(1)
                      .to({ y: 216.65 }, 0)
                      .wait(1)
                      .to({ y: 214.25 }, 0)
                      .wait(1)
                      .to({ y: 211.85 }, 0)
                      .wait(1)
                      .to({ y: 209.45 }, 0)
                      .wait(1)
                      .to({ y: 207.15 }, 0)
                      .wait(1)
                      .to({ y: 204.9 }, 0)
                      .wait(1)
                      .to({ y: 202.65 }, 0)
                      .wait(1)
                      .to({ y: 200.5 }, 0)
                      .wait(1)
                      .to({ y: 198.35 }, 0)
                      .wait(1)
                      .to({ y: 196.25 }, 0)
                      .wait(1)
                      .to({ y: 194.2 }, 0)
                      .wait(1)
                      .to({ y: 192.2 }, 0)
                      .wait(1)
                      .to({ y: 190.25 }, 0)
                      .wait(1)
                      .to({ y: 188.35 }, 0)
                      .wait(1)
                      .to({ y: 186.45 }, 0)
                      .wait(1)
                      .to({ y: 184.6 }, 0)
                      .wait(1)
                      .to({ y: 182.85 }, 0)
                      .wait(1)
                      .to({ y: 181.05 }, 0)
                      .wait(1)
                      .to({ y: 179.35 }, 0)
                      .wait(1)
                      .to({ y: 177.7 }, 0)
                      .wait(1)
                      .to({ y: 176.05 }, 0)
                      .wait(1)
                      .to({ y: 174.45 }, 0)
                      .wait(1)
                      .to({ y: 172.9 }, 0)
                      .wait(1)
                      .to({ y: 171.35 }, 0)
                      .wait(1)
                      .to({ y: 169.85 }, 0)
                      .wait(1)
                      .to({ y: 168.4 }, 0)
                      .wait(1)
                      .to({ y: 167 }, 0)
                      .wait(1)
                      .to({ y: 165.6 }, 0)
                      .wait(1)
                      .to({ y: 164.25 }, 0)
                      .wait(1)
                      .to({ y: 162.95 }, 0)
                      .wait(1)
                      .to({ y: 161.65 }, 0)
                      .wait(1)
                      .to({ y: 160.4 }, 0)
                      .wait(1)
                      .to({ y: 159.2 }, 0)
                      .wait(1)
                      .to({ y: 158 }, 0)
                      .wait(1)
                      .to({ y: 156.85 }, 0)
                      .wait(1)
                      .to({ y: 155.75 }, 0)
                      .wait(1)
                      .to({ y: 154.65 }, 0)
                      .wait(1)
                      .to({ y: 153.6 }, 0)
                      .wait(1)
                      .to({ y: 152.55 }, 0)
                      .wait(1)
                      .to({ y: 151.55 }, 0)
                      .wait(1)
                      .to({ y: 150.55 }, 0)
                      .wait(1)
                      .to({ y: 149.6 }, 0)
                      .wait(1)
                      .to({ y: 148.7 }, 0)
                      .wait(1)
                      .to({ y: 147.8 }, 0)
                      .wait(1)
                      .to({ y: 146.95 }, 0)
                      .wait(1)
                      .to({ y: 146.1 }, 0)
                      .wait(1)
                      .to({ y: 145.3 }, 0)
                      .wait(1)
                      .to({ y: 144.5 }, 0)
                      .wait(1)
                      .to({ regX: 22.9, x: 309.05, y: 143.75 }, 0)
                      .wait(1)
                      .to({ regX: 23, x: 309.15, y: 143, alpha: 0.9155 }, 0)
                      .wait(1)
                      .to({ y: 142.25, alpha: 0.8337 }, 0)
                      .wait(1)
                      .to({ y: 141.6, alpha: 0.7545 }, 0)
                      .wait(1)
                      .to({ y: 140.9, alpha: 0.6781 }, 0)
                      .wait(1)
                      .to({ y: 140.25, alpha: 0.6042 }, 0)
                      .wait(1)
                      .to({ y: 139.65, alpha: 0.5329 }, 0)
                      .wait(1)
                      .to({ y: 139.05, alpha: 0.4641 }, 0)
                      .wait(1)
                      .to({ y: 138.45, alpha: 0.3978 }, 0)
                      .wait(1)
                      .to({ y: 137.9, alpha: 0.334 }, 0)
                      .wait(1)
                      .to({ y: 137.35, alpha: 0.2725 }, 0)
                      .wait(1)
                      .to({ y: 136.85, alpha: 0.2134 }, 0)
                      .wait(1)
                      .to({ y: 136.35, alpha: 0.1567 }, 0)
                      .wait(1)
                      .to({ y: 135.85, alpha: 0.1022 }, 0)
                      .wait(1)
                      .to({ y: 135.4, alpha: 0.05 }, 0)
                      .wait(1)
                      .to({ regX: 22.9, x: 309.05, y: 135, alpha: 0 }, 0)
                      .wait(137)
                  ),
                  (this.shape = new t.Shape()),
                  this.shape.graphics
                    .f("#FF3366")
                    .s()
                    .p(
                      "ApcQMIJ2i6IgCBPIp2C6gApYMYID5hJIgCBPIj4BJgApTIbIJ2i5IgBBPIp2C5gApOEnID4hJIgBBQIj5BJgAgYCBIABgxIAAAAIBAgTII2imIgCBPIo2CmIhAATgApKAuIJ2i5IgBBPIp2C5gApFigIAGgCIABglIDyhHIgCBPIj4BJgACnwRID4hJIgBBPIj5BJg"
                    ),
                  this.shape.setTransform(527.275, 250.425),
                  (this.shape_1 = new t.Shape()),
                  this.shape_1.graphics
                    .f("#CCCCCC")
                    .s()
                    .p(
                      "Ag2LWIABgnIHmiQIgBBQImABxIhmAegAmvHQIHmiPIgBBPInmCPgAmlgcIHmiPIgBBOInnCPgAjwpoIAAgGIE7hdICsgyIgCBOInmCQg"
                    ),
                  this.shape_1.setTransform(525.45, 241.5),
                  (this.shape_2 = new t.Shape()),
                  this.shape_2.graphics
                    .f("#33CCFF")
                    .s()
                    .p(
                      "ALMQ8IFMhhIgCBPIlMBhgAnlQXIGKh0IgCBPImKB0gAriNuIKLi/IgBBPIqMDAgAncImIGLh0IgCBPImKB0gAEjG9IFMhhIgBBPIlMBhgArZF+IKMjAIgBBQIqNC/gAwWBsIKNi+IgCBPIqMC/gAnTA5IGLhzIgCBOImKB0gAEtgvIFMhiIgBBPIhBATIAAAAIkMBOgAnJm0IGKh0IgCBPImKB0gAE2odIFMhiIgBBQIlNBhgAtwvLIKMi/IgCBPIqLC/g"
                    ),
                  this.shape_2.setTransform(468.2, 263.225),
                  (this.shape_3 = new t.Shape()),
                  this.shape_3.graphics
                    .f("#FF9900")
                    .s()
                    .p(
                      "ABJSSIPSkgIgCBPIvSEggAwYN4IPSkfIgCBPIvSEfgAGIFIIDVg/IAAApIBngfIgBAnIk9BdgAp/ALIPRkfIgBBPIvSEfgAGRioID8hKIAAAeIBAgTIgBAyIk8BdgAtplFIPRkgIgBAqIAAAmIgHACIvLEdgAGaqVIE9hdIgBBPIk9BdgAGjyDIE9hdIgBBIIk8BdIAAAHIgBAAg"
                    ),
                  this.shape_3.setTransform(459.45, 287.575),
                  (this.shape_4 = new t.Shape()),
                  this.shape_4.graphics
                    .f("#33CCFF")
                    .s()
                    .p(
                      "ALMRMIFMhhIgCBPIlMBhgAnlQnIGKh0IgCBPImKB0gAriN+IKLi/IgBBPIqMDAgAndJmIGKh0IAAAfImKB0gAEjHNIFMhhIgBBPIlMBhgAwWB8IKNi+IgCBOIqMDAgAnTBJIGLhzIgCBOImKB0gAEtgfIFMhiIgBBPIhBATIAAAAIkMBOgAvhhgIKMi/IgBBPIqNDAgAnJmkIGKh0IgCBPImKB0gAE2oNIFMhiIgBBQIlNBhgAqEvbIKMi/IgCBPIqLC/g"
                    ),
                  this.shape_4.setTransform(468.2, 261.625),
                  (this.shape_5 = new t.Shape()),
                  this.shape_5.graphics
                    .f("#FF3366")
                    .s()
                    .p(
                      "ApcTXIJ2i6IgCBQIp2C5gApYPjID5hJIgCBPIj4BKgApUMWIAMgDIABgwIJqi2IgBBPIp2C5gApOHzID4hKIgBBQIj5BJgApKD5IJ2i6IgBBPIp2C6gApFArIAGgCIABgmIDyhGIgCBOIj4BKgAAbmsID5hJIgCBPIj4BJgAgXxsIJ2i5IgCBPIp2C5g"
                    ),
                  this.shape_5.setTransform(527.275, 230.1),
                  (this.shape_6 = new t.Shape()),
                  this.shape_6.graphics
                    .f("#FF9900")
                    .s()
                    .p(
                      "AjJSSIPRkfIgCBPIvREggADNMkIPSkgIgBBPIvSEggAyFGmIPSkgIgBAfIgBAwIgMADIhNAXImLB0InuCSgAB0FIIDWg+IgBAoIBogeIgBAnIk9BdgAB+inID8hKIgBAeIBBgTIgBAyIk9BcgACHqVIE9hdIgBBQIk9BdgAydvBIPSkgIgBBQIvSEggACQyCIE9hdIgBBIIk8BdIAAAGIgBABg"
                    ),
                  this.shape_6.setTransform(486.975, 287.5),
                  (this.shape_7 = new t.Shape()),
                  this.shape_7.graphics
                    .f("#CCCCCC")
                    .s()
                    .p(
                      "Ag1SeIHmiQIgBBQInmCPgAmvgeIHmiPIgBBPInmCOgAmloLIHmiPIgBBOInnCQgAjwxXIAAgGIE7hdICsgyIgCBOInmCQg"
                    ),
                  this.shape_7.setTransform(525.45, 291),
                  (this.shape_8 = new t.Shape()),
                  this.shape_8.graphics
                    .f("#FF0066")
                    .s()
                    .p(
                      "AgrUIIPRkfIgCBPIvREggAyNPvIPSkfIgCBPIvSEfgAKvO/IFMhhIgCBPIlMBhgAoDOaIGKh0IgBBPImLB0gAgrMPIJ2i6IgBBQIp3C5gAsALyIKMjAIgCBPIqLDAgAgnIbID4hJIgBBPIj4BKgAETG+IDVg+IABgnIHniQIgBBQImABxIgBAnIk9BdgAn6GpIGLh0IgBBPImLB1gAEGFAIFMhhIgCBPIlMBhgAghEfIJ2i6IgCBPIp2C5gAr3EBIKNjAIgCBQIqMC/gAr0CBIPRkeIgBBPIvSEegABvB6IHniOIgBBOInnCPgAgdArID4hJIgCBPIj4BJgAwzgQIKMi/IgCBQIqLC+gAEcgxID8hKIABgwIkLBOIAChPIFMhhIgCBOII2inIgCBQIo2CmIgBAyIk8BbgAnxhDIGLh0IgBBPImLBzgAgYjOIJ2i6IgCBPIp2C6gAvejOIPSkgIgBAqIDxhHIgBBPIj4BKIABgqIvMEdgAB5lyIHniPIgBBOInoCQgAElofIE9hdIgBBQIk9BdgAnnoxIGKhzIgBBOImLB0gAEZqaIFMhhIgCBPIlMBigAEuu+IgBABIABhPIE9hdIgBBIICsgyIgCBOInnCQgAuOxHIKNjAIgCBPIqMDAgALY0OID4hIIgBBPIj5BJg"
                    ),
                  this.shape_8.setTransform(471.15, 275.7),
                  this.timeline.addTween(
                    t.Tween.get({})
                      .to({ state: [] })
                      .to(
                        {
                          state: [
                            { t: this.shape_3 },
                            { t: this.shape_2 },
                            { t: this.shape_1 },
                            { t: this.shape },
                          ],
                        },
                        35
                      )
                      .to(
                        {
                          state: [
                            { t: this.shape_7 },
                            { t: this.shape_6 },
                            { t: this.shape_5 },
                            { t: this.shape_4 },
                          ],
                        },
                        3
                      )
                      .to({ state: [] }, 2)
                      .to(
                        {
                          state: [
                            { t: this.shape_7 },
                            { t: this.shape_6 },
                            { t: this.shape_5 },
                            { t: this.shape_4 },
                          ],
                        },
                        161
                      )
                      .to({ state: [{ t: this.shape_8 }] }, 3)
                      .to({ state: [] }, 3)
                      .wait(32)
                  );
                let r = new t.Shape();
                (r._off = !0),
                  r.graphics.p(
                    "AjIBNIAAiVQAYgoA0gKIBYAAQAnAGAOAwQANCLhfAxQgSADgQAAQg7AAgqgugABQgBQgOhRBCgPQBCgPADBAQgUCPgmASg"
                  ),
                  r.setTransform(227.65, 136.5945),
                  (this.instance_3 = new n.Interpolación4("synched", 0)),
                  this.instance_3.setTransform(229.85, 176.4, 1.4545, 1.4545);
                let h = [this.instance_3];
                for (let t = 0; t < h.length; t++) h[t].mask = r;
                this.timeline.addTween(
                  t.Tween.get(this.instance_3).to({ y: 108.2 }, 238).wait(1)
                );
                let A = new t.Shape();
                (A._off = !0),
                  A.graphics.p("Aq52AIVymbMAAAAyQI1yGng"),
                  A.setTransform(486.55, 256.35),
                  (this.instance_4 = new n.Interpolación3()),
                  this.instance_4.setTransform(455.65, 336.65, 1.4545, 1.4545);
                let g = new t.ColorFilter(1, 1, 1, 1, 0, 0, 0, 0);
                (this.instance_4.filters = [g]),
                  this.instance_4.cache(-27, -178, 96, 520),
                  (h = [this.instance_4]);
                for (let t = 0; t < h.length; t++) h[t].mask = A;
                this.timeline.addTween(
                  t.Tween.get(this.instance_4)
                    .to(
                      { x: 455.6, y: 302.3, mode: "synched", startPosition: 0 },
                      34
                    )
                    .to({ regX: 0.1, regY: 0.1, x: 447.6, y: 300.45 }, 2)
                    .to(
                      { scaleX: 1.4544, scaleY: 1.4544, x: 470.45, y: 311.65 },
                      2
                    )
                    .to({ x: 455.7, y: 296.4 }, 2)
                    .to(
                      {
                        regX: 0.2,
                        scaleX: 1.4545,
                        scaleY: 1.4545,
                        x: 455.75,
                        y: 133.75,
                      },
                      161
                    )
                    .to(
                      { scaleX: 1.4544, scaleY: 1.4544, x: 466.4, y: 131.7 },
                      2
                    )
                    .to({ regX: 0.3, regY: 0.2, x: 447.9, y: 145.9 }, 2)
                    .to({ x: 455.8, y: 127.8 }, 2)
                    .to(
                      {
                        regX: 0,
                        regY: 0,
                        scaleX: 1.4545,
                        scaleY: 1.4545,
                        x: 455.65,
                        y: 96.45,
                      },
                      31
                    )
                    .wait(1)
                ),
                  this.timeline.addTween(
                    t.Tween.get(g)
                      .wait(34)
                      .to(new t.ColorFilter(0, 0, 0, 1, 102, 0, 255, 0), 2)
                      .to(new t.ColorFilter(0, 0, 0, 1, 255, 153, 0, 0), 2)
                      .to(new t.ColorFilter(1, 1, 1, 1, 0, 0, 0, 0), 2)
                      .wait(161)
                      .to(new t.ColorFilter(0, 0, 0, 1, 0, 255, 255, 0), 2)
                      .to(new t.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0), 2)
                      .to(new t.ColorFilter(1, 1, 1, 1, 0, 0, 0, 0), 2)
                      .wait(32)
                  ),
                  (this.shape_9 = new t.Shape()),
                  this.shape_9.graphics
                    .lf(
                      ["rgba(18,18,18,0)", "#121212"],
                      [0, 0.698],
                      -0.2,
                      14.7,
                      1,
                      -70.4
                    )
                    .s()
                    .p(
                      "EhRFAMdIj6gDIrtgMIgBAAIlogHIAA48MDMrAAAIAAY8UglVAAbghGAAMIrvADIj6ABInsACQrAACqgAAUglUAAAge3gAZg"
                    ),
                  this.shape_9.setTransform(532.9, 80.7238),
                  (this.shape_10 = new t.Shape()),
                  this.shape_10.graphics
                    .lf(
                      ["rgba(18,18,18,0)", "#121212"],
                      [0, 0.698],
                      -0.2,
                      -14.7,
                      1,
                      70.4
                    )
                    .s()
                    .p(
                      "EhmVAM2IAA49IFogGIAAAAILugLID6gEUAnigAgAyJAAJIHsACID6ABILuADIABAAUAhGAAMAlVAAaIAAY9g"
                    ),
                  this.shape_10.setTransform(532.9, 504.0262),
                  this.timeline.addTween(
                    t.Tween.get({})
                      .to({
                        state: [{ t: this.shape_10 }, { t: this.shape_9 }],
                      })
                      .wait(239)
                  ),
                  (this.instance_5 = new n.Interpolación3("synched", 0)),
                  this.instance_5.setTransform(427.95, 342.45, 1.7074, 1.7074),
                  (this.instance_5.alpha = 0.6016);
                let l = new t.ColorFilter(0, 0, 0, 1, 51, 51, 51, 0);
                (this.instance_5.filters = [l]),
                  this.instance_5.cache(-27, -178, 96, 520),
                  this.timeline.addTween(
                    t.Tween.get(this.instance_5)
                      .to({ x: 428.2, y: -12.1 }, 238)
                      .wait(1)
                  ),
                  this.timeline.addTween(t.Tween.get(l).wait(239)),
                  (this.instance_6 = new n.coderwoman()),
                  this.instance_6.setTransform(-44, -4, 0.3897, 0.3897),
                  this.timeline.addTween(
                    t.Tween.get(this.instance_6).wait(239)
                  ),
                  (this.filterCacheList = []),
                  this.filterCacheList.push({
                    instance: this.instance_4,
                    startFrame: 35,
                    endFrame: 36,
                    x: -27,
                    y: -178,
                    w: 96,
                    h: 520,
                  }),
                  this.filterCacheList.push({
                    instance: this.instance_4,
                    startFrame: 37,
                    endFrame: 38,
                    x: -27,
                    y: -178,
                    w: 96,
                    h: 520,
                  }),
                  this.filterCacheList.push({
                    instance: this.instance_4,
                    startFrame: 39,
                    endFrame: 40,
                    x: -27,
                    y: -178,
                    w: 96,
                    h: 520,
                  }),
                  this.filterCacheList.push({
                    instance: this.instance_4,
                    startFrame: 202,
                    endFrame: 203,
                    x: -27,
                    y: -178,
                    w: 96,
                    h: 520,
                  }),
                  this.filterCacheList.push({
                    instance: this.instance_4,
                    startFrame: 204,
                    endFrame: 205,
                    x: -27,
                    y: -178,
                    w: 96,
                    h: 520,
                  }),
                  this.filterCacheList.push({
                    instance: this.instance_4,
                    startFrame: 206,
                    endFrame: 207,
                    x: -27,
                    y: -178,
                    w: 96,
                    h: 520,
                  }),
                  this._renderFirstFrame();
              }).prototype = o =
                new n.AnMovieClip()),
              (o.nominalBounds = new t.Rectangle(203.4, -22.2, 984.6, 945)),
              (n.properties = {
                id: "B3DCA18F55A842DE9A4FE04B3E70EEE3",
                width: 651,
                height: 582,
                fps: 40,
                color: "#121212",
                opacity: 1,
                manifest: [
                  {
                    // src: "https://yps.agency/images/coder_atlas_1.png?1678549027512?1678549027530",
                    src: "https://stacktec.net/test/Stacktec/en/imges/muath.png?1678549027512?1678549027530",
                    id: "coder_atlas_1",
                  },
                ],
                preloads: [],
              }),
              ((n.Stage = function (t) {
                createjs.Stage.call(this, t);
              }).prototype = o =
                new createjs.Stage()),
              (o.setAutoPlay = function (t) {
                this.tickEnabled = t;
              }),
              (o.play = function () {
                (this.tickEnabled = !0),
                  this.getChildAt(0).gotoAndPlay(this.getTimelinePosition());
              }),
              (o.stop = function (t) {
                t && this.seek(t), (this.tickEnabled = !1);
              }),
              (o.seek = function (t) {
                (this.tickEnabled = !0),
                  this.getChildAt(0).gotoAndStop((n.properties.fps * t) / 1e3);
              }),
              (o.getDuration = function () {
                return (
                  (this.getChildAt(0).totalFrames / n.properties.fps) * 1e3
                );
              }),
              (o.getTimelinePosition = function () {
                return (
                  (this.getChildAt(0).currentFrame / n.properties.fps) * 1e3
                );
              }),
              (a.bootcompsLoaded = a.bootcompsLoaded || []),
              a.bootstrapListeners || (a.bootstrapListeners = []),
              (a.bootstrapCallback = function (t) {
                if (
                  (a.bootstrapListeners.push(t), a.bootcompsLoaded.length > 0)
                )
                  for (let e = 0; e < a.bootcompsLoaded.length; ++e)
                    t(a.bootcompsLoaded[e]);
              }),
              (a.compositions = a.compositions || {}),
              (a.compositions.B3DCA18F55A842DE9A4FE04B3E70EEE3 = {
                getStage: function () {
                  return i.stage;
                },
                getLibrary: function () {
                  return n;
                },
                getSpriteSheet: function () {
                  return s;
                },
                getImages: function () {
                  return r;
                },
              }),
              (a.compositionLoaded = function (t) {
                a.bootcompsLoaded.push(t);
                for (let e = 0; e < a.bootstrapListeners.length; e++)
                  a.bootstrapListeners[e](t);
              }),
              (a.getComposition = function (t) {
                return a.compositions[t];
              }),
              (a.makeResponsive = function (t, i, a, o, s) {
                let r,
                  h,
                  A = 1;
                function g() {
                  let g = n.properties.width,
                    l = n.properties.height,
                    p = window.innerWidth,
                    w = window.innerHeight,
                    y = window.devicePixelRatio || 1,
                    c = p / g,
                    x = w / l,
                    u = 1;
                  t &&
                    (("width" == i && r == p) || ("height" == i && h == w)
                      ? (u = A)
                      : a
                      ? 1 == o
                        ? (u = Math.min(c, x))
                        : 2 == o && (u = Math.max(c, x))
                      : (p < g || w < l) && (u = Math.min(c, x))),
                    (s[0].width = g * y * u),
                    (s[0].height = l * y * u),
                    s.forEach(function (t) {
                      (t.style.width = g * u + "px"),
                        (t.style.height = l * u + "px");
                    }),
                    (e.scaleX = y * u),
                    (e.scaleY = y * u),
                    (r = p),
                    (h = w),
                    (A = u),
                    (e.tickOnUpdate = !1),
                    e.update(),
                    (e.tickOnUpdate = !0);
                }
                window.addEventListener("resize", g), g();
              }),
              (a.handleSoundStreamOnTick = function (t) {
                if (!t.paused) {
                  let t = e.getChildAt(0);
                  (t.paused && !t.ignorePause) || t.syncStreamSounds();
                }
              }),
              (a.handleFilterCache = function (t) {
                if (!t.paused) {
                  let e = t.target;
                  if (e && e.filterCacheList)
                    for (let t = 0; t < e.filterCacheList.length; t++) {
                      let i = e.filterCacheList[t];
                      i.startFrame <= e.currentFrame &&
                        e.currentFrame <= i.endFrame &&
                        i.instance.cache(i.x, i.y, i.w, i.h);
                    }
                }
              });

          })((createjs = createjs || {}), (A = A || {})),
            a("#coder-container").append(
              '<div id="coder"><div id="coder-animation_container" style="background-color:rgba(21, 21, 21, 1.00); width:900px; height:506px">\n        <canvas id="coder-canvas" width="900" height="506" style="position: absolute; display: block; background-color:rgba(21, 21, 21, 1.00);"></canvas>\n        <div id="coder-dom_overlay_container" style="pointer-events:none; overflow:hidden; width:900px; height:506px; position: absolute; left: 0px; top: 0px; display: block;">\n        </div>\n    </div></div>'
            ),
            (function () {
              (t = document.getElementById("coder-canvas")),
                (s = document.getElementById("coder-animation_container")),
                (r = document.getElementById("coder-dom_overlay_container"));
              let a = A.getComposition("B3DCA18F55A842DE9A4FE04B3E70EEE3"),
                n = a.getLibrary(),
                g = new createjs.LoadQueue(!1);
              g.addEventListener("fileload", function (t) {
                o(t, a);
              }),
                g.addEventListener("complete", function (o) {
                  !(function (a, o) {
                    let n = o.getLibrary(),
                      g = o.getSpriteSheet(),
                      l = a.target,
                      p = n.ssMetadata;
                    for (let t = 0; t < p.length; t++)
                      g[p[t].name] = new createjs.SpriteSheet({
                        images: [l.getResult(p[t].name)],
                        frames: p[t].frames,
                      });
                    (i = new n.coder()),
                      (e = new n.Stage(t)),
                      (h = function () {
                        e.addChild(i),
                          (createjs.Ticker.framerate = n.properties.fps),
                          createjs.Ticker.addEventListener("tick", e);
                      }),
                      A.makeResponsive(!1, "both", !1, 1, [t, s, r]),
                      A.compositionLoaded(n.properties.id),
                      h();
                    window.innerWidth < 768 &&
                      createjs.Ticker.removeEventListener("tick", e);
                  })(o, a);
                }),
                (n = a.getLibrary()),
                g.loadManifest(n.properties.manifest);
            })();
        }
      },
      228: function (t, e, i) {
        i.d(e, {
          F: function () {
            return s;
          },
        });
        var a = i(567);
        const o = (t, e) => {
            let i = e.getImages();
            t && "image" == t.item.type && (i[t.item.id] = t.result);
          },
          n = () => window.matchMedia("screen and (max-width: 768px)").matches;
        function s() {
          if (0 === a("#home-hero").length) return;
          if (n())
            return void a("#home-hero").append(
              '<div id="home-hero-background" class="fade-in-scale"><div id="home-hero-animation_container" style="background-color: #121212; width:900px; height:506px; background-image: url(https://yps.agency/wp-content/themes/yps-agency/img/yps-tech-translation-min.webp); background-size: cover; background-repeat: no-repeat; background-position: center;"></div></div>'
            );
          let t, e, i, s, r, h, A;
          !(function (t, a) {
            let o,
              n = {},
              s = {},
              r = {};
            function h() {
              let t = this._cloneProps(
                new this.constructor(
                  this.mode,
                  this.startPosition,
                  this.loop,
                  this.reversed
                )
              );
              return (
                t.gotoAndStop(this.currentFrame),
                (t.paused = this.paused),
                (t.framerate = this.framerate),
                t
              );
            }
            function A(e, i, a) {
              let o = t.extend(e, t.MovieClip);
              return (
                (o.clone = h), (o.nominalBounds = i), (o.frameBounds = a), o
              );
            }
            (n.ssMetadata = []),
              ((n.AnMovieClip = function () {
                (this.actionFrames = []),
                  (this.ignorePause = !1),
                  (this.gotoAndPlay = function (e) {
                    t.MovieClip.prototype.gotoAndPlay.call(this, e);
                  }),
                  (this.play = function () {
                    t.MovieClip.prototype.play.call(this);
                  }),
                  (this.gotoAndStop = function (e) {
                    t.MovieClip.prototype.gotoAndStop.call(this, e);
                  }),
                  (this.stop = function () {
                    t.MovieClip.prototype.stop.call(this);
                  });
              }).prototype = o =
                new t.MovieClip()),
              ((n.CachedBmp_1 = function () {
                this.initialize(r.CachedBmp_1);
              }).prototype = o =
                new t.Bitmap()),
              (o.nominalBounds = new t.Rectangle(0, 0, 1949, 3518)),
              ((n.Símbolo5 = function (e, i, a, o) {
                null == a && (a = !0), null == o && (o = !1);
                let s = new Object();
                (s.mode = e),
                  (s.startPosition = i),
                  (s.labels = {}),
                  (s.loop = a),
                  (s.reversed = o),
                  t.MovieClip.apply(this, [s]),
                  (this.instance = new n.CachedBmp_1()),
                  this.instance.setTransform(0, 0, 0.5, 0.5),
                  this.timeline.addTween(t.Tween.get(this.instance).wait(1)),
                  this._renderFirstFrame();
              }).prototype = A(
                n.Símbolo5,
                new t.Rectangle(0, 0, 974.5, 1759),
                null
              )),
              ((n.Símbolo2 = function (e, i, a, o) {
                null == a && (a = !0), null == o && (o = !1);
                let n = new Object();
                (n.mode = e),
                  (n.startPosition = i),
                  (n.labels = {}),
                  (n.loop = a),
                  (n.reversed = o),
                  t.MovieClip.apply(this, [n]),
                  (this.shape = new t.Shape()),
                  this.shape.graphics
                    .f("#FF9900")
                    .s()
                    .p(
                      "EgfGBi7IAAoIMBmNAAAIAAIIgEhHGA9aIAAoIMAhIAAAIAAIIgEgfGAv/IAAoIMBmNAAAIAAIIgEhHGAKeIAAoIMAhIAAAIAAIIgA/GioIAAoIMBmNAAAIAAIIgEhHGgoJIAAoJMAhIAAAIAAIJgEgfGg1RIAAoIMBmNAAAIAAIIgEhHGhayIAAoJMAhIAAAIAAIJg"
                    ),
                  this.shape.setTransform(455.125, 633.15),
                  (this.shape_1 = new t.Shape()),
                  this.shape_1.graphics
                    .f("#CCCCCC")
                    .s()
                    .p(
                      "EgZeBQLIAAoIMAy8AAAIAAIIgA5edPIAAoJMAy8AAAIAAIJgA5e1ZIAAoIMAy8AAAIAAIIgEgZehICIAAoIMAy8AAAIAAIIg"
                    ),
                  this.shape_1.setTransform(163.05, 593.15),
                  (this.shape_2 = new t.Shape()),
                  this.shape_2.graphics
                    .f("#FF3366")
                    .s()
                    .p(
                      "Egg+BcrIAAoIMBB9AAAIAAIIgEAHCBDrIAAoIIZ9AAIAAIIgEgg+ApvIAAoIMBB9AAAIAAIIgAHCQuIAAoIIZ9AAIAAIIgEgg+gI5IAAoIMBB9AAAIAAIIgEAHCgh5IAAoIIZ9AAIAAIIgEgg+g7iIAAoIMBB9AAAIAAIIgEAHChUiIAAoIIZ9AAIAAIIg"
                    ),
                  this.shape_2.setTransform(211.05, 593.125),
                  (this.shape_3 = new t.Shape()),
                  this.shape_3.graphics
                    .f("#33CCFF")
                    .s()
                    .p(
                      "EhHGBi7IAAoIMAisAAAIABIIgEAC+BWbIAAoIMApRAAAIAAIIgEAC+A9aIAAoIMBEJAAAIAAIIgEhHGAv/IAAoIMAisAAAIABIIgEAC+AjfIAAoIMApRAAAIAAIIgAC+KeIAAoIMBEJAAAIAAIIgEhHGgCoIAAoIMAisAAAIABIIgAC+vJIAAoIMApRAAAIAAIIgEAC+goJIAAoJMBEJAAAIAAIJgEhHGg1RIAAoIMAisAAAIABIIgEAC+hByIAAoIMApRAAAIAAIIgEAC+hayIAAoJMBEJAAAIAAIJg"
                    ),
                  this.shape_3.setTransform(455.125, 633.15),
                  this.timeline.addTween(
                    t.Tween.get({})
                      .to({
                        state: [
                          { t: this.shape_3 },
                          { t: this.shape_2 },
                          { t: this.shape_1 },
                          { t: this.shape },
                        ],
                      })
                      .wait(1)
                  ),
                  this._renderFirstFrame();
              }).prototype = A(
                n.Símbolo2,
                new t.Rectangle(0, 0, 910.3, 1266.3),
                null
              )),
              ((n.Símbolo3 = function (e, i, a, o) {
                null == a && (a = !0), null == o && (o = !1);
                let s = new Object();
                (s.mode = e),
                  (s.startPosition = i),
                  (s.labels = {}),
                  (s.loop = a),
                  (s.reversed = o),
                  t.MovieClip.apply(this, [s]),
                  (this.instance = new n.Símbolo5()),
                  this.instance.setTransform(
                    905.65,
                    915.6,
                    1,
                    1,
                    0,
                    0,
                    0,
                    487.4,
                    879.6
                  ),
                  (this.instance.shadow = new t.Shadow(
                    "rgba(102,102,102,1)",
                    0,
                    0,
                    20
                  )),
                  this.timeline.addTween(t.Tween.get(this.instance).wait(1)),
                  this._renderFirstFrame();
              }).prototype = A(
                n.Símbolo3,
                new t.Rectangle(397.3, 15, 1020, 1805),
                null
              )),
              ((n.Interpolación1 = function (e, i, a, o) {
                null == a && (a = !0), null == o && (o = !1);
                let s = new Object();
                (s.mode = e),
                  (s.startPosition = i),
                  (s.labels = {}),
                  (s.loop = a),
                  (s.reversed = o),
                  t.MovieClip.apply(this, [s]),
                  (this.instance = new n.Símbolo2()),
                  this.instance.setTransform(
                    0,
                    493.1,
                    1,
                    1,
                    0,
                    0,
                    0,
                    455.1,
                    633.1
                  ),
                  this.timeline.addTween(t.Tween.get(this.instance).wait(1)),
                  this._renderFirstFrame();
              }).prototype = o =
                new t.MovieClip()),
              (o.nominalBounds = new t.Rectangle(-455.1, -140, 910.3, 1266.3)),
              ((n.Símbolo4 = function (e, i, a, o) {
                null == a && (a = !0), null == o && (o = !1);
                let s = new Object();
                (s.mode = e),
                  (s.startPosition = i),
                  (s.labels = {}),
                  (s.loop = a),
                  (s.reversed = o),
                  t.MovieClip.apply(this, [s]),
                  (this.instance = new n.Interpolación1("synched", 0)),
                  this.instance.setTransform(455.1, 140),
                  this.timeline.addTween(t.Tween.get(this.instance).wait(1)),
                  this._renderFirstFrame();
              }).prototype = A(
                n.Símbolo4,
                new t.Rectangle(0, 0, 910.3, 1266.3),
                null
              )),
              ((n.Símbolo1 = function (e, i, a, o) {
                null == a && (a = !0), null == o && (o = !1);
                let s = new Object();
                (s.mode = e),
                  (s.startPosition = i),
                  (s.labels = {}),
                  (s.loop = a),
                  (s.reversed = o),
                  t.MovieClip.apply(this, [s]),
                  (this.instance = new n.Símbolo4()),
                  this.instance.setTransform(
                    483.85,
                    1690.85,
                    0.7656,
                    0.8769,
                    0,
                    0,
                    0,
                    455.1,
                    633.2
                  ),
                  (this.instance.filters = [new t.BlurFilter(10, 10, 3)]),
                  this.instance.cache(-2, -2, 914, 1270),
                  (this.instance_1 = new n.Símbolo4()),
                  this.instance_1.setTransform(
                    481.8,
                    555.25,
                    0.7656,
                    0.8769,
                    0,
                    0,
                    0,
                    455.1,
                    633.2
                  ),
                  (this.instance_1.filters = [new t.BlurFilter(10, 10, 3)]),
                  this.instance_1.cache(-2, -2, 914, 1270),
                  this.timeline.addTween(
                    t.Tween.get({})
                      .to({
                        state: [{ t: this.instance_1 }, { t: this.instance }],
                      })
                      .wait(1)
                  ),
                  this._renderFirstFrame();
              }).prototype = A(
                n.Símbolo1,
                new t.Rectangle(119.4, -14, 731, 2277.6),
                null
              )),
              ((n.codeflow2canvas = function (e, i, a, o) {
                null == a && (a = !0), null == o && (o = !1);
                let s = new Object();
                (s.mode = e),
                  (s.startPosition = i),
                  (s.labels = {}),
                  (s.loop = a),
                  (s.reversed = o),
                  t.MovieClip.apply(this, [s]),
                  (this.shape = new t.Shape()),
                  this.shape.graphics
                    .lf(
                      ["rgba(18,18,18,0)", "#121212"],
                      [0, 0.698],
                      -0.2,
                      -26.1,
                      0.7,
                      103.8
                    )
                    .s()
                    .p("EhGXATCMAAAgmDMCMvAAAMAAAAmDg"),
                  this.shape.setTransform(450.35, 386.2),
                  (this.shape_1 = new t.Shape()),
                  this.shape_1.graphics
                    .lf(
                      ["rgba(18,18,18,0)", "#121212"],
                      [0, 0.698],
                      -0.2,
                      22.6,
                      0.7,
                      -107.3
                    )
                    .s()
                    .p(
                      "EhGXASfMAAAgmDMCMuAAAMAAAAmDUgi6AA4gdjAAMQnWACnBAAUgjHAAAgazgBGg"
                    ),
                  this.shape_1.setTransform(449.2, 123.3417),
                  this.timeline.addTween(
                    t.Tween.get({})
                      .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
                      .wait(400)
                  );
                let r = new t.Shape();
                (r._off = !0),
                  r.graphics.p(
                    "ArtLtQk2k2AAm3QAAm2E2k2QE3k3G2AAQG3AAE2E3QE3E2AAG2QAAG3k3E2Qk2E3m3AAQm2AAk3k3g"
                  ),
                  r.setTransform(465.6, 256.9),
                  (this.instance = new n.Símbolo3()),
                  this.instance.setTransform(
                    477.85,
                    395.2,
                    0.4685,
                    0.4685,
                    0,
                    0,
                    0,
                    866.4,
                    552
                  );
                let h = [this.instance];
                for (let t = 0; t < h.length; t++) h[t].mask = r;
                this.timeline.addTween(
                  t.Tween.get(this.instance)
                    .to({ regY: 551.9, y: 188.65 }, 399)
                    .wait(1)
                ),
                  (this.shape_2 = new t.Shape()),
                  this.shape_2.graphics
                    .f("rgba(0,0,0,0.839)")
                    .s()
                    .p(
                      "A2sWtQpapaAAtTQAAtSJapaQJapaNSAAQNTAAJaJaQJaJaAANSQAANTpaJaQpaJatTAAQtSAApapag"
                    ),
                  this.shape_2.setTransform(468.875, 261.25),
                  (h = [this.shape_2]);
                for (let t = 0; t < h.length; t++) h[t].mask = r;
                this.timeline.addTween(t.Tween.get(this.shape_2).wait(400)),
                  (this.shape_3 = new t.Shape()),
                  this.shape_3.graphics
                    .f("rgba(0,0,0,0.459)")
                    .s()
                    .p(
                      "AwvQwQm9m7AAp1QAApzG9m9QG8m8JzABQJ0gBG8G8QG9G9AAJzQAAJ1m9G7Qm8G8p0ABQpzgBm8m8g"
                    ),
                  this.shape_3.setTransform(466.975, 257.65),
                  this.timeline.addTween(t.Tween.get(this.shape_3).wait(400)),
                  (this.shape_4 = new t.Shape()),
                  this.shape_4.graphics
                    .f("rgba(0,0,0,0.376)")
                    .s()
                    .p(
                      "A2sWtQpapaAAtTQAAtSJapaQJapaNSAAQNTAAJaJaQJaJaAANSQAANTpaJaQpaJatTAAQtSAApapag"
                    ),
                  this.shape_4.setTransform(466.95, 257.625),
                  this.timeline.addTween(t.Tween.get(this.shape_4).wait(400)),
                  (this.instance_1 = new n.Símbolo1()),
                  this.instance_1.setTransform(
                    451,
                    69.2,
                    0.4685,
                    0.4685,
                    0,
                    0,
                    0,
                    455.2,
                    146.1
                  ),
                  this.timeline.addTween(
                    t.Tween.get(this.instance_1)
                      .to({ regY: 146, y: -196.85 }, 399)
                      .wait(1)
                  ),
                  (this.instance_2 = new n.Símbolo1()),
                  this.instance_2.setTransform(
                    439.8,
                    37.45,
                    0.7183,
                    0.7183,
                    0,
                    0,
                    0,
                    455.2,
                    146
                  ),
                  (this.instance_2.alpha = 0.3516);
                let A = new t.ColorFilter(0, 0, 0, 1, 51, 51, 51, 0);
                (this.instance_2.filters = [A]),
                  this.instance_2.cache(117, -16, 735, 2282),
                  this.timeline.addTween(
                    t.Tween.get(this.instance_2)
                      .to({ x: 442.75, y: -167.65 }, 399)
                      .wait(1)
                  ),
                  this.timeline.addTween(t.Tween.get(A).wait(400)),
                  this._renderFirstFrame();
              }).prototype = o =
                new n.AnMovieClip()),
              (o.nominalBounds = new t.Rectangle(
                448.9,
                -33.4,
                451.80000000000007,
                1597.1000000000001
              )),
              (n.properties = {
                id: "A0A3D9B511A9470B80444BB83E23608B",
                width: 900,
                height: 506,
                fps: 40,
                color: "#121212",
                opacity: 1,
                manifest: [
                  {
                    // src: "https://yps.agency/images/CachedBmp_1.png?1679410725100",
                    src: "https://www.stacktec.net/test/Stacktec/en/imges/CachedBmp_1.png?1679410725100",

                    id: "CachedBmp_1",
                  },
                ],
                preloads: [],
              }),
              ((n.Stage = function (t) {
                createjs.Stage.call(this, t);
              }).prototype = o =
                new createjs.Stage()),
              (o.setAutoPlay = function (t) {
                this.tickEnabled = t;
              }),
              (o.play = function () {
                (this.tickEnabled = !0),
                  this.getChildAt(0).gotoAndPlay(this.getTimelinePosition());
              }),
              (o.stop = function (t) {
                t && this.seek(t), (this.tickEnabled = !1);
              }),
              (o.seek = function (t) {
                (this.tickEnabled = !0),
                  this.getChildAt(0).gotoAndStop((n.properties.fps * t) / 1e3);
              }),
              (o.getDuration = function () {
                return (
                  (this.getChildAt(0).totalFrames / n.properties.fps) * 1e3
                );
              }),
              (o.getTimelinePosition = function () {
                return (
                  (this.getChildAt(0).currentFrame / n.properties.fps) * 1e3
                );
              }),
              (a.bootcompsLoaded = a.bootcompsLoaded || []),
              a.bootstrapListeners || (a.bootstrapListeners = []),
              (a.bootstrapCallback = function (t) {
                if (
                  (a.bootstrapListeners.push(t), a.bootcompsLoaded.length > 0)
                )
                  for (let e = 0; e < a.bootcompsLoaded.length; ++e)
                    t(a.bootcompsLoaded[e]);
              }),
              (a.compositions = a.compositions || {}),
              (a.compositions.A0A3D9B511A9470B80444BB83E23608B = {
                getStage: function () {
                  return i.stage;
                },
                getLibrary: function () {
                  return n;
                },
                getSpriteSheet: function () {
                  return s;
                },
                getImages: function () {
                  return r;
                },
              }),
              (a.compositionLoaded = function (t) {
                a.bootcompsLoaded.push(t);
                for (let e = 0; e < a.bootstrapListeners.length; e++)
                  a.bootstrapListeners[e](t);
              }),
              (a.getComposition = function (t) {
                return a.compositions[t];
              }),
              (a.makeResponsive = function (t, i, a, o, s) {
                let r,
                  h,
                  A = 1;
                function g() {
                  let g = n.properties.width,
                    l = n.properties.height,
                    p = window.innerWidth,
                    w = window.innerHeight,
                    y = window.devicePixelRatio || 1,
                    c = p / g,
                    x = w / l,
                    u = 1;
                  t &&
                    (("width" == i && r == p) || ("height" == i && h == w)
                      ? (u = A)
                      : a
                      ? 1 == o
                        ? (u = Math.min(c, x))
                        : 2 == o && (u = Math.max(c, x))
                      : (p < g || w < l) && (u = Math.min(c, x))),
                    (s[0].width = g * y * u),
                    (s[0].height = l * y * u),
                    s.forEach(function (t) {
                      (t.style.width = g * u + "px"),
                        (t.style.height = l * u + "px");
                    }),
                    (e.scaleX = y * u),
                    (e.scaleY = y * u),
                    (r = p),
                    (h = w),
                    (A = u),
                    (e.tickOnUpdate = !1),
                    e.update(),
                    (e.tickOnUpdate = !0);
                }
                window.addEventListener("resize", g), g();
              }),
              (a.handleSoundStreamOnTick = function (t) {
                if (!t.paused) {
                  let t = e.getChildAt(0);
                  (t.paused && !t.ignorePause) || t.syncStreamSounds();
                }
              }),
              (a.handleFilterCache = function (t) {
                if (!t.paused) {
                  let e = t.target;
                  if (e && e.filterCacheList)
                    for (let t = 0; t < e.filterCacheList.length; t++) {
                      let i = e.filterCacheList[t];
                      i.startFrame <= e.currentFrame &&
                        e.currentFrame <= i.endFrame &&
                        i.instance.cache(i.x, i.y, i.w, i.h);
                    }
                }
              });
          })((createjs = createjs || {}), (A = A || {})),
            a(function () {
              g(),
                (function () {
                  (t = document.getElementById("home-hero-canvas")),
                    (s = document.getElementById(
                      "home-hero-animation_container"
                    )),
                    (r = document.getElementById(
                      "home-hero-dom_overlay_container"
                    ));
                  let a = A.getComposition("A0A3D9B511A9470B80444BB83E23608B"),
                    n = a.getLibrary(),
                    g = new createjs.LoadQueue(!1);
                  g.addEventListener("fileload", function (t) {
                    o(t, a);
                  }),
                    g.addEventListener("complete", function (o) {
                      !(function (a, o) {
                        let n = o.getLibrary(),
                          g = o.getSpriteSheet(),
                          l = a.target,
                          p = n.ssMetadata;
                        for (let t = 0; t < p.length; t++)
                          g[p[t].name] = new createjs.SpriteSheet({
                            images: [l.getResult(p[t].name)],
                            frames: p[t].frames,
                          });
                        (i = new n.codeflow2canvas()),
                          i.addEventListener("tick", A.handleFilterCache),
                          (e = new n.Stage(t));
                        const w = function () {
                          e.update();
                        };
                        (h = function () {
                          e.addChild(i),
                            (createjs.Ticker.framerate = n.properties.fps),
                            createjs.Ticker.addEventListener("tick", w),
                            document
                              .getElementById("home-hero-background")
                              .classList.add("show");
                        }),
                          A.makeResponsive(!0, "both", !0, 1, [t, s, r]),
                          A.compositionLoaded(n.properties.id),
                          h(),
                          window.innerWidth < 768 &&
                            createjs.Ticker.removeEventListener("tick", w);
                      })(o, a);
                    }),
                    (n = a.getLibrary()),
                    g.loadManifest(n.properties.manifest);
                })();
            });
          const g = () => {
            a("#home-hero").length &&
              a("#home-hero").append(
                '<div id="home-hero-background"><div id="home-hero-animation_container" style="background-color: #121212; width:900px; height:506px">\n        <canvas id="home-hero-canvas" width="900" height="506" style="position: absolute; display: block; background-color:#121212" loading=”eager”></canvas>\n        <div id="home-hero-dom_overlay_container" style="pointer-events:none; overflow:hidden; width:900px; height:506px; position: absolute; left: 0px; top: 0px; display: block;">\n        </div>\n    </div></div>'
              );
          };
        }
      },
      284: function (t, e, i) {
        i.d(e, {
          Ao: function () {
            return o;
          },
        });
        var a = i(567);
        const o = () => {
          if (!a("#about-us-hero").length) return;
          if (window.matchMedia("screen and (max-width: 768px)").matches)
            return void a("#about-us-hero").append(
              '<div id="vertical-lines-background" class="fade-in-scale"><div id="vertical-lines-animation_container" style="background-color:rgba(21, 21, 21, 1.00); width:900px; height:506px; background-image: url(https://yps.agency/wp-content/themes/yps-agency/img/yps-flowing-lines.webp); background-size: cover; background-repeat: no-repeat; background-position: center;"></div></div>'
            );
          let t, e, i, o, n, s;
          !(function (t, i) {
            let a,
              o = {},
              n = {},
              s = {};
            (o.ssMetadata = []),
              ((o.AnMovieClip = function () {
                (this.actionFrames = []),
                  (this.ignorePause = !1),
                  (this.gotoAndPlay = function (e) {
                    t.MovieClip.prototype.gotoAndPlay.call(this, e);
                  }),
                  (this.play = function () {
                    t.MovieClip.prototype.play.call(this);
                  }),
                  (this.gotoAndStop = function (e) {
                    t.MovieClip.prototype.gotoAndStop.call(this, e);
                  }),
                  (this.stop = function () {
                    t.MovieClip.prototype.stop.call(this);
                  });
              }).prototype = a =
                new t.MovieClip()),
              ((o.columnsyps = function (e, i, a, o) {
                null == a && (a = !0), null == o && (o = !1);
                let n = new Object();
                (n.mode = e),
                  (n.startPosition = i),
                  (n.labels = {}),
                  (n.loop = a),
                  (n.reversed = o),
                  t.MovieClip.apply(this, [n]),
                  (this.shape = new t.Shape()),
                  this.shape.graphics
                    .f("#FF991B")
                    .s()
                    .p("AsMPmIAA/MIYZAAIAAfMg"),
                  this.shape.setTransform(-723.225, 355.3),
                  (this.shape_1 = new t.Shape()),
                  this.shape_1.graphics
                    .f("#34CCFE")
                    .s()
                    .p(
                      "Egn1AXxIAA9qIeDAAIAAjZIj9AAIAAueMA1lAAAIAAdNMgrYAAAIAASUg"
                    ),
                  this.shape_1.setTransform(-431.9, 520.175),
                  (this.shape_2 = new t.Shape()),
                  this.shape_2.graphics
                    .f("#FF3366")
                    .s()
                    .p("AnySBMAAAgkBIPlAAMAAAAkBg"),
                  this.shape_2.setTransform(-580.725, 147.525),
                  this.timeline.addTween(
                    t.Tween.get({})
                      .to({
                        state: [
                          { t: this.shape_2 },
                          { t: this.shape_1 },
                          { t: this.shape },
                        ],
                      })
                      .wait(399)
                  ),
                  (this.shape_3 = new t.Shape()),
                  this.shape_3.graphics
                    .lf(
                      ["#121212", "rgba(18,18,18,0)"],
                      [0, 1],
                      1,
                      -155.9,
                      -0.7,
                      117.5
                    )
                    .s()
                    .p("EhucAbqMAAAg3TMDc5AAAMAAAA3Tg"),
                  this.shape_3.setTransform(627.5, 176.975),
                  (this.shape_4 = new t.Shape()),
                  this.shape_4.graphics
                    .lf(
                      ["#121212", "rgba(18,18,18,0)"],
                      [0, 1],
                      1,
                      151.9,
                      -0.7,
                      -121.5
                    )
                    .s()
                    .p("EhucAbCMAAAg2DMDc5AAAMAAAA2Dg"),
                  this.shape_4.setTransform(627.5, 526.975),
                  this.timeline.addTween(
                    t.Tween.get({})
                      .to({ state: [{ t: this.shape_4 }, { t: this.shape_3 }] })
                      .wait(399)
                  );
                let s = new t.Shape();
                (s._off = !0),
                  s.graphics.p(
                    "EgcwBTIMAs+gxZQFLlQAbmzMAAAhozIG9AAMAAABozQgRD6hVDAQhVDAiCDqMgamAv4g"
                  ),
                  s.setTransform(338, 219.55),
                  (this.shape_5 = new t.Shape()),
                  this.shape_5.graphics
                    .f("#34CCFE")
                    .s()
                    .p("EhjkARjMAAAgjFMDHJAAAMAAAAjFg"),
                  this.shape_5.setTransform(445.875, 508.375);
                let r = [this.shape_5];
                for (let t = 0; t < r.length; t++) r[t].mask = s;
                this.timeline.addTween(
                  t.Tween.get(this.shape_5)
                    .wait(1)
                    .to({ x: 446.275, y: 500.925 }, 0)
                    .wait(1)
                    .to({ x: 446.675, y: 493.475 }, 0)
                    .wait(1)
                    .to({ x: 447.125, y: 486.075 }, 0)
                    .wait(1)
                    .to({ x: 447.525, y: 478.625 }, 0)
                    .wait(1)
                    .to({ x: 447.925, y: 471.175 }, 0)
                    .wait(1)
                    .to({ x: 448.325, y: 463.725 }, 0)
                    .wait(1)
                    .to({ x: 448.725, y: 456.325 }, 0)
                    .wait(1)
                    .to({ x: 449.125, y: 448.875 }, 0)
                    .wait(1)
                    .to({ x: 449.575, y: 441.425 }, 0)
                    .wait(1)
                    .to({ x: 449.975, y: 433.975 }, 0)
                    .wait(1)
                    .to({ x: 450.375, y: 426.525 }, 0)
                    .wait(1)
                    .to({ x: 450.775, y: 419.075 }, 0)
                    .wait(1)
                    .to({ x: 451.175, y: 411.675 }, 0)
                    .wait(1)
                    .to({ x: 451.575, y: 404.225 }, 0)
                    .wait(1)
                    .to({ x: 452.025, y: 396.775 }, 0)
                    .wait(1)
                    .to({ x: 452.425, y: 389.325 }, 0)
                    .wait(1)
                    .to({ x: 452.825, y: 381.925 }, 0)
                    .wait(1)
                    .to({ x: 453.225, y: 374.475 }, 0)
                    .wait(1)
                    .to({ x: 453.625, y: 367.025 }, 0)
                    .wait(1)
                    .to({ x: 454.075, y: 359.575 }, 0)
                    .wait(1)
                    .to({ x: 454.475, y: 352.175 }, 0)
                    .wait(1)
                    .to({ x: 454.875, y: 344.725 }, 0)
                    .wait(1)
                    .to({ x: 455.275, y: 337.275 }, 0)
                    .wait(1)
                    .to({ x: 455.675, y: 329.825 }, 0)
                    .wait(1)
                    .to({ x: 456.075, y: 322.375 }, 0)
                    .wait(1)
                    .to({ x: 456.525, y: 314.975 }, 0)
                    .wait(1)
                    .to({ x: 456.925, y: 307.525 }, 0)
                    .wait(1)
                    .to({ x: 457.325, y: 300.075 }, 0)
                    .wait(1)
                    .to({ x: 457.725, y: 292.625 }, 0)
                    .wait(1)
                    .to({ x: 458.125, y: 285.175 }, 0)
                    .wait(1)
                    .to({ x: 458.525, y: 277.775 }, 0)
                    .wait(1)
                    .to({ x: 458.975, y: 270.325 }, 0)
                    .wait(1)
                    .to({ x: 459.375, y: 262.875 }, 0)
                    .wait(1)
                    .to({ x: 459.775, y: 255.425 }, 0)
                    .wait(1)
                    .to({ x: 460.175, y: 248.025 }, 0)
                    .wait(1)
                    .to({ x: 460.575, y: 240.575 }, 0)
                    .wait(1)
                    .to({ x: 460.975, y: 233.125 }, 0)
                    .wait(1)
                    .to({ x: 461.425, y: 225.675 }, 0)
                    .wait(1)
                    .to({ x: 461.825, y: 218.225 }, 0)
                    .wait(1)
                    .to({ x: 462.225, y: 210.825 }, 0)
                    .wait(1)
                    .to({ x: 462.625, y: 203.375 }, 0)
                    .wait(1)
                    .to({ x: 463.025, y: 195.925 }, 0)
                    .wait(1)
                    .to({ x: 463.475, y: 188.475 }, 0)
                    .wait(1)
                    .to({ x: 463.875, y: 181.025 }, 0)
                    .wait(1)
                    .to({ x: 464.275, y: 173.625 }, 0)
                    .wait(1)
                    .to({ x: 464.675, y: 166.175 }, 0)
                    .wait(1)
                    .to({ x: 465.075, y: 158.725 }, 0)
                    .wait(1)
                    .to({ x: 465.475, y: 151.275 }, 0)
                    .wait(1)
                    .to({ x: 465.925, y: 143.875 }, 0)
                    .wait(1)
                    .to({ x: 466.325, y: 136.425 }, 0)
                    .wait(1)
                    .to({ x: 466.725, y: 128.975 }, 0)
                    .wait(1)
                    .to({ x: 467.125, y: 121.525 }, 0)
                    .wait(1)
                    .to({ x: 467.525, y: 114.125 }, 0)
                    .wait(1)
                    .to({ x: 467.925, y: 106.675 }, 0)
                    .wait(1)
                    .to({ x: 468.375, y: 99.225 }, 0)
                    .wait(1)
                    .to({ x: 468.775, y: 91.775 }, 0)
                    .wait(1)
                    .to({ x: 469.175, y: 84.325 }, 0)
                    .wait(1)
                    .to({ x: 469.575, y: 76.925 }, 0)
                    .wait(1)
                    .to({ x: 469.975, y: 69.475 }, 0)
                    .wait(1)
                    .to({ x: 470.425, y: 62.025 }, 0)
                    .wait(1)
                    .to({ x: 470.825, y: 54.575 }, 0)
                    .wait(1)
                    .to({ x: 471.225, y: 47.125 }, 0)
                    .wait(1)
                    .to({ x: 471.625, y: 39.725 }, 0)
                    .wait(1)
                    .to({ x: 472.025, y: 32.275 }, 0)
                    .wait(1)
                    .to({ x: 472.425, y: 24.825 }, 0)
                    .wait(1)
                    .to({ x: 472.875, y: 17.375 }, 0)
                    .wait(1)
                    .to({ x: 473.275, y: 9.975 }, 0)
                    .wait(1)
                    .to({ x: 473.675, y: 2.525 }, 0)
                    .wait(1)
                    .to({ x: 474.075, y: -4.925 }, 0)
                    .wait(1)
                    .to({ x: 474.475, y: -12.375 }, 0)
                    .wait(1)
                    .to({ x: 474.875, y: -19.825 }, 0)
                    .wait(1)
                    .to({ x: 475.325, y: -27.225 }, 0)
                    .wait(1)
                    .to({ x: 475.725, y: -34.675 }, 0)
                    .wait(1)
                    .to({ x: 476.125, y: -42.125 }, 0)
                    .wait(1)
                    .to({ x: 476.525, y: -49.575 }, 0)
                    .wait(1)
                    .to({ x: 476.925, y: -57.025 }, 0)
                    .wait(1)
                    .to({ x: 477.325, y: -64.425 }, 0)
                    .wait(1)
                    .to({ x: 477.775, y: -71.875 }, 0)
                    .wait(1)
                    .to({ x: 478.175, y: -79.325 }, 0)
                    .wait(1)
                    .to({ x: 478.575, y: -86.775 }, 0)
                    .wait(1)
                    .to({ x: 478.975, y: -94.175 }, 0)
                    .wait(1)
                    .to({ x: 479.375, y: -101.625 }, 0)
                    .wait(1)
                    .to({ x: 479.825, y: -109.075 }, 0)
                    .wait(1)
                    .to({ x: 480.225, y: -116.525 }, 0)
                    .wait(1)
                    .to({ x: 480.625, y: -123.925 }, 0)
                    .wait(1)
                    .to({ x: 481.025, y: -131.375 }, 0)
                    .wait(1)
                    .to({ x: 481.425, y: -138.825 }, 0)
                    .wait(1)
                    .to({ x: 481.825, y: -146.275 }, 0)
                    .wait(1)
                    .to({ x: 482.275, y: -153.725 }, 0)
                    .wait(1)
                    .to({ x: 482.675, y: -161.175 }, 0)
                    .wait(1)
                    .to({ x: 483.075, y: -168.575 }, 0)
                    .wait(1)
                    .to({ x: 483.475, y: -176.025 }, 0)
                    .wait(1)
                    .to({ x: 483.875, y: -183.475 }, 0)
                    .wait(1)
                    .to({ x: 484.275, y: -190.925 }, 0)
                    .wait(1)
                    .to({ x: 484.725, y: -198.325 }, 0)
                    .wait(1)
                    .to({ x: 485.125, y: -205.775 }, 0)
                    .wait(1)
                    .to({ x: 485.525, y: -213.225 }, 0)
                    .to({ _off: !0 }, 1)
                    .wait(301)
                ),
                  (this.shape_6 = new t.Shape()),
                  this.shape_6.graphics
                    .f("#FF3366")
                    .s()
                    .p("EhjkARjMAAAgjFMDHJAAAMAAAAjFg"),
                  this.shape_6.setTransform(422.875, 926.925),
                  (this.shape_6._off = !0),
                  (r = [this.shape_6]);
                for (let t = 0; t < r.length; t++) r[t].mask = s;
                this.timeline.addTween(
                  t.Tween.get(this.shape_6)
                    .wait(36)
                    .to({ _off: !1 }, 0)
                    .wait(1)
                    .to({ x: 423.175, y: 921.675 }, 0)
                    .wait(1)
                    .to({ x: 423.475, y: 916.375 }, 0)
                    .wait(1)
                    .to({ x: 423.725, y: 911.075 }, 0)
                    .wait(1)
                    .to({ x: 424.025, y: 905.825 }, 0)
                    .wait(1)
                    .to({ x: 424.325, y: 900.525 }, 0)
                    .wait(1)
                    .to({ x: 424.625, y: 895.275 }, 0)
                    .wait(1)
                    .to({ x: 424.925, y: 889.975 }, 0)
                    .wait(1)
                    .to({ x: 425.175, y: 884.725 }, 0)
                    .wait(1)
                    .to({ x: 425.475, y: 879.425 }, 0)
                    .wait(1)
                    .to({ x: 425.775, y: 874.125 }, 0)
                    .wait(1)
                    .to({ x: 426.075, y: 868.875 }, 0)
                    .wait(1)
                    .to({ x: 426.375, y: 863.575 }, 0)
                    .wait(1)
                    .to({ x: 426.625, y: 858.325 }, 0)
                    .wait(1)
                    .to({ x: 426.925, y: 853.025 }, 0)
                    .wait(1)
                    .to({ x: 427.225, y: 847.725 }, 0)
                    .wait(1)
                    .to({ x: 427.525, y: 842.475 }, 0)
                    .wait(1)
                    .to({ x: 427.825, y: 837.175 }, 0)
                    .wait(1)
                    .to({ x: 428.075, y: 831.925 }, 0)
                    .wait(1)
                    .to({ x: 428.375, y: 826.625 }, 0)
                    .wait(1)
                    .to({ x: 428.675, y: 821.375 }, 0)
                    .wait(1)
                    .to({ x: 428.975, y: 816.075 }, 0)
                    .wait(1)
                    .to({ x: 429.275, y: 810.775 }, 0)
                    .wait(1)
                    .to({ x: 429.525, y: 805.525 }, 0)
                    .wait(1)
                    .to({ x: 429.825, y: 800.225 }, 0)
                    .wait(1)
                    .to({ x: 430.125, y: 794.975 }, 0)
                    .wait(1)
                    .to({ x: 430.425, y: 789.675 }, 0)
                    .wait(1)
                    .to({ x: 430.725, y: 784.425 }, 0)
                    .wait(1)
                    .to({ x: 430.975, y: 779.125 }, 0)
                    .wait(1)
                    .to({ x: 431.275, y: 773.825 }, 0)
                    .wait(1)
                    .to({ x: 431.575, y: 768.575 }, 0)
                    .wait(1)
                    .to({ x: 431.875, y: 763.275 }, 0)
                    .wait(1)
                    .to({ x: 432.175, y: 758.025 }, 0)
                    .wait(1)
                    .to({ x: 432.425, y: 752.725 }, 0)
                    .wait(1)
                    .to({ x: 432.725, y: 747.475 }, 0)
                    .wait(1)
                    .to({ x: 433.025, y: 742.175 }, 0)
                    .wait(1)
                    .to({ x: 433.325, y: 736.875 }, 0)
                    .wait(1)
                    .to({ x: 433.625, y: 731.625 }, 0)
                    .wait(1)
                    .to({ x: 433.875, y: 726.375 }, 0)
                    .wait(1)
                    .to({ x: 434.175, y: 721.075 }, 0)
                    .wait(1)
                    .to({ x: 434.475, y: 715.775 }, 0)
                    .wait(1)
                    .to({ x: 434.775, y: 710.525 }, 0)
                    .wait(1)
                    .to({ x: 435.075, y: 705.225 }, 0)
                    .wait(1)
                    .to({ x: 435.325, y: 699.925 }, 0)
                    .wait(1)
                    .to({ x: 435.625, y: 694.675 }, 0)
                    .wait(1)
                    .to({ x: 435.925, y: 689.375 }, 0)
                    .wait(1)
                    .to({ x: 436.225, y: 684.125 }, 0)
                    .wait(1)
                    .to({ x: 436.525, y: 678.825 }, 0)
                    .wait(1)
                    .to({ x: 436.775, y: 673.575 }, 0)
                    .wait(1)
                    .to({ x: 437.075, y: 668.275 }, 0)
                    .wait(1)
                    .to({ x: 437.375, y: 663.025 }, 0)
                    .wait(1)
                    .to({ x: 437.675, y: 657.725 }, 0)
                    .wait(1)
                    .to({ x: 437.975, y: 652.425 }, 0)
                    .wait(1)
                    .to({ x: 438.225, y: 647.175 }, 0)
                    .wait(1)
                    .to({ x: 438.525, y: 641.875 }, 0)
                    .wait(1)
                    .to({ x: 438.825, y: 636.625 }, 0)
                    .wait(1)
                    .to({ x: 439.125, y: 631.325 }, 0)
                    .wait(1)
                    .to({ x: 439.425, y: 626.075 }, 0)
                    .wait(1)
                    .to({ x: 439.675, y: 620.775 }, 0)
                    .wait(1)
                    .to({ x: 439.975, y: 615.475 }, 0)
                    .wait(1)
                    .to({ x: 440.275, y: 610.225 }, 0)
                    .wait(1)
                    .to({ x: 440.575, y: 604.925 }, 0)
                    .wait(1)
                    .to({ x: 440.875, y: 599.675 }, 0)
                    .wait(1)
                    .to({ x: 441.125, y: 594.375 }, 0)
                    .wait(1)
                    .to({ x: 441.425, y: 589.125 }, 0)
                    .wait(1)
                    .to({ x: 441.725, y: 583.825 }, 0)
                    .wait(1)
                    .to({ x: 442.025, y: 578.525 }, 0)
                    .wait(1)
                    .to({ x: 442.325, y: 573.275 }, 0)
                    .wait(1)
                    .to({ x: 442.575, y: 567.975 }, 0)
                    .wait(1)
                    .to({ x: 442.875, y: 562.725 }, 0)
                    .wait(1)
                    .to({ x: 443.175, y: 557.425 }, 0)
                    .wait(1)
                    .to({ x: 443.475, y: 552.175 }, 0)
                    .wait(1)
                    .to({ x: 443.775, y: 546.875 }, 0)
                    .wait(1)
                    .to({ x: 444.025, y: 541.575 }, 0)
                    .wait(1)
                    .to({ x: 444.325, y: 536.325 }, 0)
                    .wait(1)
                    .to({ x: 444.625, y: 531.025 }, 0)
                    .wait(1)
                    .to({ x: 444.925, y: 525.775 }, 0)
                    .wait(1)
                    .to({ x: 445.225, y: 520.475 }, 0)
                    .wait(1)
                    .to({ x: 445.475, y: 515.225 }, 0)
                    .wait(1)
                    .to({ x: 445.775, y: 509.925 }, 0)
                    .wait(1)
                    .to({ x: 446.075, y: 504.625 }, 0)
                    .wait(1)
                    .to({ x: 446.375, y: 499.375 }, 0)
                    .wait(1)
                    .to({ x: 446.675, y: 494.075 }, 0)
                    .wait(1)
                    .to({ x: 446.925, y: 488.825 }, 0)
                    .wait(1)
                    .to({ x: 447.225, y: 483.525 }, 0)
                    .wait(1)
                    .to({ x: 447.525, y: 478.225 }, 0)
                    .wait(1)
                    .to({ x: 447.825, y: 472.975 }, 0)
                    .wait(1)
                    .to({ x: 448.125, y: 467.725 }, 0)
                    .wait(1)
                    .to({ x: 448.375, y: 462.425 }, 0)
                    .wait(1)
                    .to({ x: 448.675, y: 457.125 }, 0)
                    .wait(1)
                    .to({ x: 448.975, y: 451.875 }, 0)
                    .wait(1)
                    .to({ x: 449.275, y: 446.575 }, 0)
                    .wait(1)
                    .to({ x: 449.575, y: 441.325 }, 0)
                    .wait(1)
                    .to({ x: 449.825, y: 436.025 }, 0)
                    .wait(1)
                    .to({ x: 450.125, y: 430.775 }, 0)
                    .wait(1)
                    .to({ x: 450.425, y: 425.475 }, 0)
                    .wait(1)
                    .to({ x: 450.725, y: 420.175 }, 0)
                    .wait(1)
                    .to({ x: 451.025, y: 414.925 }, 0)
                    .wait(1)
                    .to({ x: 451.275, y: 409.625 }, 0)
                    .wait(1)
                    .to({ x: 451.575, y: 404.375 }, 0)
                    .wait(1)
                    .to({ x: 451.875, y: 399.075 }, 0)
                    .wait(1)
                    .to({ x: 452.175, y: 393.825 }, 0)
                    .wait(1)
                    .to({ x: 452.475, y: 388.525 }, 0)
                    .wait(1)
                    .to({ x: 452.725, y: 383.225 }, 0)
                    .wait(1)
                    .to({ x: 453.025, y: 377.975 }, 0)
                    .wait(1)
                    .to({ x: 453.325, y: 372.675 }, 0)
                    .wait(1)
                    .to({ x: 453.625, y: 367.425 }, 0)
                    .wait(1)
                    .to({ x: 453.925, y: 362.125 }, 0)
                    .wait(1)
                    .to({ x: 454.225, y: 356.875 }, 0)
                    .wait(1)
                    .to({ x: 454.475, y: 351.575 }, 0)
                    .wait(1)
                    .to({ x: 454.775, y: 346.275 }, 0)
                    .wait(1)
                    .to({ x: 455.075, y: 341.025 }, 0)
                    .wait(1)
                    .to({ x: 455.375, y: 335.725 }, 0)
                    .wait(1)
                    .to({ x: 455.675, y: 330.475 }, 0)
                    .wait(1)
                    .to({ x: 455.925, y: 325.175 }, 0)
                    .wait(1)
                    .to({ x: 456.225, y: 319.875 }, 0)
                    .wait(1)
                    .to({ x: 456.525, y: 314.625 }, 0)
                    .wait(1)
                    .to({ x: 456.825, y: 309.325 }, 0)
                    .wait(1)
                    .to({ x: 457.125, y: 304.075 }, 0)
                    .wait(1)
                    .to({ x: 457.375, y: 298.775 }, 0)
                    .wait(1)
                    .to({ x: 457.675, y: 293.525 }, 0)
                    .wait(1)
                    .to({ x: 457.975, y: 288.225 }, 0)
                    .wait(1)
                    .to({ x: 458.275, y: 282.925 }, 0)
                    .wait(1)
                    .to({ x: 458.575, y: 277.675 }, 0)
                    .wait(1)
                    .to({ x: 458.825, y: 272.375 }, 0)
                    .wait(1)
                    .to({ x: 459.125, y: 267.125 }, 0)
                    .wait(1)
                    .to({ x: 459.425, y: 261.825 }, 0)
                    .wait(1)
                    .to({ x: 459.725, y: 256.575 }, 0)
                    .wait(1)
                    .to({ x: 460.025, y: 251.275 }, 0)
                    .wait(1)
                    .to({ x: 460.275, y: 245.975 }, 0)
                    .wait(1)
                    .to({ x: 460.575, y: 240.725 }, 0)
                    .wait(1)
                    .to({ x: 460.875, y: 235.475 }, 0)
                    .wait(1)
                    .to({ x: 461.175, y: 230.175 }, 0)
                    .wait(1)
                    .to({ x: 461.475, y: 224.875 }, 0)
                    .wait(1)
                    .to({ x: 461.725, y: 219.625 }, 0)
                    .wait(1)
                    .to({ x: 462.025, y: 214.325 }, 0)
                    .wait(1)
                    .to({ x: 462.325, y: 209.075 }, 0)
                    .wait(1)
                    .to({ x: 462.625, y: 203.775 }, 0)
                    .wait(1)
                    .to({ x: 462.925, y: 198.475 }, 0)
                    .wait(1)
                    .to({ x: 463.175, y: 193.225 }, 0)
                    .wait(1)
                    .to({ x: 463.475, y: 187.925 }, 0)
                    .wait(1)
                    .to({ x: 463.775, y: 182.675 }, 0)
                    .wait(1)
                    .to({ x: 464.075, y: 177.375 }, 0)
                    .wait(1)
                    .to({ x: 464.375, y: 172.125 }, 0)
                    .wait(1)
                    .to({ x: 464.625, y: 166.825 }, 0)
                    .wait(1)
                    .to({ x: 464.925, y: 161.525 }, 0)
                    .wait(1)
                    .to({ x: 465.225, y: 156.275 }, 0)
                    .wait(1)
                    .to({ x: 465.525, y: 150.975 }, 0)
                    .wait(1)
                    .to({ x: 465.825, y: 145.725 }, 0)
                    .wait(1)
                    .to({ x: 466.075, y: 140.425 }, 0)
                    .wait(1)
                    .to({ x: 466.375, y: 135.175 }, 0)
                    .wait(1)
                    .to({ x: 466.675, y: 129.875 }, 0)
                    .wait(1)
                    .to({ x: 466.975, y: 124.575 }, 0)
                    .wait(1)
                    .to({ x: 467.275, y: 119.325 }, 0)
                    .wait(1)
                    .to({ x: 467.525, y: 114.025 }, 0)
                    .wait(1)
                    .to({ x: 467.825, y: 108.775 }, 0)
                    .wait(1)
                    .to({ x: 468.125, y: 103.475 }, 0)
                    .wait(1)
                    .to({ x: 468.425, y: 98.225 }, 0)
                    .wait(1)
                    .to({ x: 468.725, y: 92.925 }, 0)
                    .wait(1)
                    .to({ x: 468.975, y: 87.625 }, 0)
                    .wait(1)
                    .to({ x: 469.275, y: 82.375 }, 0)
                    .wait(1)
                    .to({ x: 469.575, y: 77.075 }, 0)
                    .wait(1)
                    .to({ x: 469.875, y: 71.825 }, 0)
                    .wait(1)
                    .to({ x: 470.175, y: 66.525 }, 0)
                    .wait(1)
                    .to({ x: 470.425, y: 61.275 }, 0)
                    .wait(1)
                    .to({ x: 470.725, y: 55.975 }, 0)
                    .wait(1)
                    .to({ x: 471.025, y: 50.675 }, 0)
                    .wait(1)
                    .to({ x: 471.325, y: 45.425 }, 0)
                    .wait(1)
                    .to({ x: 471.625, y: 40.125 }, 0)
                    .wait(1)
                    .to({ x: 471.875, y: 34.875 }, 0)
                    .wait(1)
                    .to({ x: 472.175, y: 29.575 }, 0)
                    .wait(1)
                    .to({ x: 472.475, y: 24.325 }, 0)
                    .wait(1)
                    .to({ x: 472.775, y: 19.025 }, 0)
                    .wait(1)
                    .to({ x: 473.075, y: 13.775 }, 0)
                    .wait(1)
                    .to({ x: 473.325, y: 8.475 }, 0)
                    .wait(1)
                    .to({ x: 473.625, y: 3.175 }, 0)
                    .wait(1)
                    .to({ x: 473.925, y: -2.075 }, 0)
                    .wait(1)
                    .to({ x: 474.225, y: -7.375 }, 0)
                    .wait(1)
                    .to({ x: 474.525, y: -12.675 }, 0)
                    .wait(1)
                    .to({ x: 474.775, y: -17.925 }, 0)
                    .wait(1)
                    .to({ x: 475.075, y: -23.175 }, 0)
                    .wait(1)
                    .to({ x: 475.375, y: -28.475 }, 0)
                    .wait(1)
                    .to({ x: 475.675, y: -33.775 }, 0)
                    .wait(1)
                    .to({ x: 475.975, y: -39.025 }, 0)
                    .wait(1)
                    .to({ x: 476.225, y: -44.325 }, 0)
                    .wait(1)
                    .to({ x: 476.525, y: -49.575 }, 0)
                    .wait(1)
                    .to({ x: 476.825, y: -54.875 }, 0)
                    .wait(1)
                    .to({ x: 477.125, y: -60.125 }, 0)
                    .wait(1)
                    .to({ x: 477.425, y: -65.425 }, 0)
                    .wait(1)
                    .to({ x: 477.675, y: -70.725 }, 0)
                    .wait(1)
                    .to({ x: 477.975, y: -75.975 }, 0)
                    .wait(1)
                    .to({ x: 478.275, y: -81.275 }, 0)
                    .wait(1)
                    .to({ x: 478.575, y: -86.525 }, 0)
                    .wait(1)
                    .to({ x: 478.875, y: -91.825 }, 0)
                    .wait(1)
                    .to({ x: 479.125, y: -97.075 }, 0)
                    .wait(1)
                    .to({ x: 479.425, y: -102.375 }, 0)
                    .wait(1)
                    .to({ x: 479.725, y: -107.675 }, 0)
                    .wait(1)
                    .to({ x: 480.025, y: -112.925 }, 0)
                    .wait(1)
                    .to({ x: 480.325, y: -118.225 }, 0)
                    .wait(1)
                    .to({ x: 480.575, y: -123.475 }, 0)
                    .wait(1)
                    .to({ x: 480.875, y: -128.775 }, 0)
                    .wait(1)
                    .to({ x: 481.175, y: -134.025 }, 0)
                    .wait(1)
                    .to({ x: 481.475, y: -139.325 }, 0)
                    .wait(1)
                    .to({ x: 481.775, y: -144.625 }, 0)
                    .wait(1)
                    .to({ x: 482.025, y: -149.875 }, 0)
                    .wait(1)
                    .to({ x: 482.325, y: -155.175 }, 0)
                    .wait(1)
                    .to({ x: 482.625, y: -160.425 }, 0)
                    .wait(1)
                    .to({ x: 482.925, y: -165.725 }, 0)
                    .wait(1)
                    .to({ x: 483.225, y: -171.025 }, 0)
                    .wait(1)
                    .to({ x: 483.475, y: -176.275 }, 0)
                    .wait(1)
                    .to({ x: 483.775, y: -181.575 }, 0)
                    .wait(1)
                    .to({ x: 484.075, y: -186.825 }, 0)
                    .wait(1)
                    .to({ x: 484.375, y: -192.125 }, 0)
                    .wait(1)
                    .to({ x: 484.675, y: -197.375 }, 0)
                    .wait(1)
                    .to({ x: 484.925, y: -202.675 }, 0)
                    .wait(1)
                    .to({ x: 485.225, y: -207.975 }, 0)
                    .wait(1)
                    .to({ x: 485.525, y: -213.225 }, 0)
                    .wait(1)
                    .to({ _off: !0 }, 1)
                    .wait(145)
                ),
                  (this.shape_7 = new t.Shape()),
                  this.shape_7.graphics
                    .f("#FF991B")
                    .s()
                    .p("EhjkARjMAAAgjFMDHJAAAMAAAAjFg"),
                  this.shape_7.setTransform(422.875, 926.925),
                  (this.shape_7._off = !0),
                  (r = [this.shape_7]);
                for (let t = 0; t < r.length; t++) r[t].mask = s;
                this.timeline.addTween(
                  t.Tween.get(this.shape_7)
                    .wait(250)
                    .to({ _off: !1 }, 0)
                    .wait(1)
                    .to({ x: 423.325, y: 919.075 }, 0)
                    .wait(1)
                    .to({ x: 423.725, y: 911.175 }, 0)
                    .wait(1)
                    .to({ x: 424.175, y: 903.325 }, 0)
                    .wait(1)
                    .to({ x: 424.625, y: 895.475 }, 0)
                    .wait(1)
                    .to({ x: 425.025, y: 887.625 }, 0)
                    .wait(1)
                    .to({ x: 425.475, y: 879.725 }, 0)
                    .wait(1)
                    .to({ x: 425.875, y: 871.875 }, 0)
                    .wait(1)
                    .to({ x: 426.325, y: 864.025 }, 0)
                    .wait(1)
                    .to({ x: 426.775, y: 856.175 }, 0)
                    .wait(1)
                    .to({ x: 427.175, y: 848.275 }, 0)
                    .wait(1)
                    .to({ x: 427.625, y: 840.425 }, 0)
                    .wait(1)
                    .to({ x: 428.075, y: 832.575 }, 0)
                    .wait(1)
                    .to({ x: 428.475, y: 824.675 }, 0)
                    .wait(1)
                    .to({ x: 428.925, y: 816.825 }, 0)
                    .wait(1)
                    .to({ x: 429.375, y: 808.975 }, 0)
                    .wait(1)
                    .to({ x: 429.775, y: 801.125 }, 0)
                    .wait(1)
                    .to({ x: 430.225, y: 793.225 }, 0)
                    .wait(1)
                    .to({ x: 430.675, y: 785.375 }, 0)
                    .wait(1)
                    .to({ x: 431.075, y: 777.525 }, 0)
                    .wait(1)
                    .to({ x: 431.525, y: 769.675 }, 0)
                    .wait(1)
                    .to({ x: 431.925, y: 761.825 }, 0)
                    .wait(1)
                    .to({ x: 432.375, y: 753.925 }, 0)
                    .wait(1)
                    .to({ x: 432.825, y: 746.075 }, 0)
                    .wait(1)
                    .to({ x: 433.225, y: 738.225 }, 0)
                    .wait(1)
                    .to({ x: 433.675, y: 730.375 }, 0)
                    .wait(1)
                    .to({ x: 434.125, y: 722.475 }, 0)
                    .wait(1)
                    .to({ x: 434.525, y: 714.625 }, 0)
                    .wait(1)
                    .to({ x: 434.975, y: 706.775 }, 0)
                    .wait(1)
                    .to({ x: 435.425, y: 698.875 }, 0)
                    .wait(1)
                    .to({ x: 435.825, y: 691.025 }, 0)
                    .wait(1)
                    .to({ x: 436.275, y: 683.175 }, 0)
                    .wait(1)
                    .to({ x: 436.725, y: 675.325 }, 0)
                    .wait(1)
                    .to({ x: 437.125, y: 667.425 }, 0)
                    .wait(1)
                    .to({ x: 437.575, y: 659.575 }, 0)
                    .wait(1)
                    .to({ x: 437.975, y: 651.725 }, 0)
                    .wait(1)
                    .to({ x: 438.425, y: 643.875 }, 0)
                    .wait(1)
                    .to({ x: 438.875, y: 635.975 }, 0)
                    .wait(1)
                    .to({ x: 439.275, y: 628.125 }, 0)
                    .wait(1)
                    .to({ x: 439.725, y: 620.275 }, 0)
                    .wait(1)
                    .to({ x: 440.175, y: 612.375 }, 0)
                    .wait(1)
                    .to({ x: 440.575, y: 604.525 }, 0)
                    .wait(1)
                    .to({ x: 441.025, y: 596.675 }, 0)
                    .wait(1)
                    .to({ x: 441.475, y: 588.825 }, 0)
                    .wait(1)
                    .to({ x: 441.875, y: 580.925 }, 0)
                    .wait(1)
                    .to({ x: 442.325, y: 573.075 }, 0)
                    .wait(1)
                    .to({ x: 442.775, y: 565.225 }, 0)
                    .wait(1)
                    .to({ x: 443.175, y: 557.375 }, 0)
                    .wait(1)
                    .to({ x: 443.625, y: 549.475 }, 0)
                    .wait(1)
                    .to({ x: 444.025, y: 541.625 }, 0)
                    .wait(1)
                    .to({ x: 444.475, y: 533.775 }, 0)
                    .wait(1)
                    .to({ x: 444.925, y: 525.875 }, 0)
                    .wait(1)
                    .to({ x: 445.325, y: 518.025 }, 0)
                    .wait(1)
                    .to({ x: 445.775, y: 510.175 }, 0)
                    .wait(1)
                    .to({ x: 446.225, y: 502.325 }, 0)
                    .wait(1)
                    .to({ x: 446.625, y: 494.475 }, 0)
                    .wait(1)
                    .to({ x: 447.075, y: 486.575 }, 0)
                    .wait(1)
                    .to({ x: 447.525, y: 478.725 }, 0)
                    .wait(1)
                    .to({ x: 447.925, y: 470.875 }, 0)
                    .wait(1)
                    .to({ x: 448.375, y: 463.025 }, 0)
                    .wait(1)
                    .to({ x: 448.775, y: 455.125 }, 0)
                    .wait(1)
                    .to({ x: 449.225, y: 447.275 }, 0)
                    .wait(1)
                    .to({ x: 449.675, y: 439.425 }, 0)
                    .wait(1)
                    .to({ x: 450.075, y: 431.575 }, 0)
                    .wait(1)
                    .to({ x: 450.525, y: 423.675 }, 0)
                    .wait(1)
                    .to({ x: 450.975, y: 415.825 }, 0)
                    .wait(1)
                    .to({ x: 451.375, y: 407.975 }, 0)
                    .wait(1)
                    .to({ x: 451.825, y: 400.075 }, 0)
                    .wait(1)
                    .to({ x: 452.275, y: 392.225 }, 0)
                    .wait(1)
                    .to({ x: 452.675, y: 384.375 }, 0)
                    .wait(1)
                    .to({ x: 453.125, y: 376.525 }, 0)
                    .wait(1)
                    .to({ x: 453.575, y: 368.625 }, 0)
                    .wait(1)
                    .to({ x: 453.975, y: 360.775 }, 0)
                    .wait(1)
                    .to({ x: 454.425, y: 352.925 }, 0)
                    .wait(1)
                    .to({ x: 454.825, y: 345.075 }, 0)
                    .wait(1)
                    .to({ x: 455.275, y: 337.175 }, 0)
                    .wait(1)
                    .to({ x: 455.725, y: 329.325 }, 0)
                    .wait(1)
                    .to({ x: 456.125, y: 321.475 }, 0)
                    .wait(1)
                    .to({ x: 456.575, y: 313.625 }, 0)
                    .wait(1)
                    .to({ x: 457.025, y: 305.725 }, 0)
                    .wait(1)
                    .to({ x: 457.425, y: 297.875 }, 0)
                    .wait(1)
                    .to({ x: 457.875, y: 290.025 }, 0)
                    .wait(1)
                    .to({ x: 458.325, y: 282.125 }, 0)
                    .wait(1)
                    .to({ x: 458.725, y: 274.275 }, 0)
                    .wait(1)
                    .to({ x: 459.175, y: 266.425 }, 0)
                    .wait(1)
                    .to({ x: 459.625, y: 258.575 }, 0)
                    .wait(1)
                    .to({ x: 460.025, y: 250.675 }, 0)
                    .wait(1)
                    .to({ x: 460.475, y: 242.825 }, 0)
                    .wait(1)
                    .to({ x: 460.875, y: 234.975 }, 0)
                    .wait(1)
                    .to({ x: 461.325, y: 227.125 }, 0)
                    .wait(1)
                    .to({ x: 461.775, y: 219.225 }, 0)
                    .wait(1)
                    .to({ x: 462.175, y: 211.375 }, 0)
                    .wait(1)
                    .to({ x: 462.625, y: 203.525 }, 0)
                    .wait(1)
                    .to({ x: 463.075, y: 195.675 }, 0)
                    .wait(1)
                    .to({ x: 463.475, y: 187.825 }, 0)
                    .wait(1)
                    .to({ x: 463.925, y: 179.925 }, 0)
                    .wait(1)
                    .to({ x: 464.375, y: 172.075 }, 0)
                    .wait(1)
                    .to({ x: 464.775, y: 164.225 }, 0)
                    .wait(1)
                    .to({ x: 465.225, y: 156.325 }, 0)
                    .wait(1)
                    .to({ x: 465.625, y: 148.475 }, 0)
                    .wait(1)
                    .to({ x: 466.075, y: 140.625 }, 0)
                    .wait(1)
                    .to({ x: 466.525, y: 132.775 }, 0)
                    .wait(1)
                    .to({ x: 466.925, y: 124.875 }, 0)
                    .wait(1)
                    .to({ x: 467.375, y: 117.025 }, 0)
                    .wait(1)
                    .to({ x: 467.825, y: 109.175 }, 0)
                    .wait(1)
                    .to({ x: 468.225, y: 101.325 }, 0)
                    .wait(1)
                    .to({ x: 468.675, y: 93.425 }, 0)
                    .wait(1)
                    .to({ x: 469.125, y: 85.575 }, 0)
                    .wait(1)
                    .to({ x: 469.525, y: 77.725 }, 0)
                    .wait(1)
                    .to({ x: 469.975, y: 69.825 }, 0)
                    .wait(1)
                    .to({ x: 470.425, y: 61.975 }, 0)
                    .wait(1)
                    .to({ x: 470.825, y: 54.125 }, 0)
                    .wait(1)
                    .to({ x: 471.275, y: 46.275 }, 0)
                    .wait(1)
                    .to({ x: 471.675, y: 38.375 }, 0)
                    .wait(1)
                    .to({ x: 472.125, y: 30.525 }, 0)
                    .wait(1)
                    .to({ x: 472.575, y: 22.675 }, 0)
                    .wait(1)
                    .to({ x: 472.975, y: 14.825 }, 0)
                    .wait(1)
                    .to({ x: 473.425, y: 6.925 }, 0)
                    .wait(1)
                    .to({ x: 473.875, y: -0.925 }, 0)
                    .wait(1)
                    .to({ x: 474.275, y: -8.775 }, 0)
                    .wait(1)
                    .to({ x: 474.725, y: -16.675 }, 0)
                    .wait(1)
                    .to({ x: 475.175, y: -24.525 }, 0)
                    .wait(1)
                    .to({ x: 475.575, y: -32.375 }, 0)
                    .wait(1)
                    .to({ x: 476.025, y: -40.225 }, 0)
                    .wait(1)
                    .to({ x: 476.475, y: -48.125 }, 0)
                    .wait(1)
                    .to({ x: 476.875, y: -55.975 }, 0)
                    .wait(1)
                    .to({ x: 477.325, y: -63.825 }, 0)
                    .wait(1)
                    .to({ x: 477.725, y: -71.675 }, 0)
                    .wait(1)
                    .to({ x: 478.175, y: -79.525 }, 0)
                    .wait(1)
                    .to({ x: 478.625, y: -87.425 }, 0)
                    .wait(1)
                    .to({ x: 479.025, y: -95.275 }, 0)
                    .wait(1)
                    .to({ x: 479.475, y: -103.125 }, 0)
                    .wait(1)
                    .to({ x: 479.925, y: -110.975 }, 0)
                    .wait(1)
                    .to({ x: 480.325, y: -118.875 }, 0)
                    .wait(1)
                    .to({ x: 480.775, y: -126.725 }, 0)
                    .wait(1)
                    .to({ x: 481.225, y: -134.575 }, 0)
                    .wait(1)
                    .to({ x: 481.625, y: -142.475 }, 0)
                    .wait(1)
                    .to({ x: 482.075, y: -150.325 }, 0)
                    .wait(1)
                    .to({ x: 482.525, y: -158.175 }, 0)
                    .wait(1)
                    .to({ x: 482.925, y: -166.025 }, 0)
                    .wait(1)
                    .to({ x: 483.375, y: -173.925 }, 0)
                    .wait(1)
                    .to({ x: 483.775, y: -181.775 }, 0)
                    .wait(1)
                    .to({ x: 484.225, y: -189.625 }, 0)
                    .wait(1)
                    .to({ x: 484.675, y: -197.475 }, 0)
                    .wait(1)
                    .to({ x: 485.075, y: -205.375 }, 0)
                    .wait(1)
                    .to({ x: 485.525, y: -213.225 }, 0)
                    .wait(1)
                    .to({ _off: !0 }, 1)
                    .wait(2)
                ),
                  (this.shape_8 = new t.Shape()),
                  this.shape_8.graphics
                    .f("#32CAFC")
                    .s()
                    .p("EhjkARjMAAAgjFMDHJAAAMAAAAjFg"),
                  this.shape_8.setTransform(422.875, 926.925),
                  (this.shape_8._off = !0),
                  (this.shape_9 = new t.Shape()),
                  this.shape_9.graphics
                    .f("#33CBFD")
                    .s()
                    .p("EhjkARjMAAAgjFMDHJAAAMAAAAjFg"),
                  this.shape_9.setTransform(428.975, 819.925),
                  (this.shape_9._off = !0),
                  (this.shape_10 = new t.Shape()),
                  this.shape_10.graphics
                    .f("#34CCFE")
                    .s()
                    .p("EhjkARjMAAAgjFMDHJAAAMAAAAjFg"),
                  this.shape_10.setTransform(441.125, 605.975),
                  (this.shape_10._off = !0),
                  (r = [this.shape_8, this.shape_9, this.shape_10]);
                for (let t = 0; t < r.length; t++) r[t].mask = s;
                this.timeline.addTween(
                  t.Tween.get(this.shape_8)
                    .wait(351)
                    .to({ _off: !1 }, 0)
                    .wait(1)
                    .to({ x: 423.375, y: 918.025 }, 0)
                    .wait(1)
                    .to({ x: 423.875, y: 909.075 }, 0)
                    .wait(1)
                    .to({ x: 424.375, y: 900.175 }, 0)
                    .wait(1)
                    .to({ x: 424.925, y: 891.275 }, 0)
                    .wait(1)
                    .to({ x: 425.425, y: 882.325 }, 0)
                    .wait(1)
                    .to({ x: 425.925, y: 873.425 }, 0)
                    .wait(1)
                    .to({ x: 426.425, y: 864.525 }, 0)
                    .wait(1)
                    .to({ x: 426.925, y: 855.625 }, 0)
                    .wait(1)
                    .to({ x: 427.425, y: 846.675 }, 0)
                    .wait(1)
                    .to({ x: 427.925, y: 837.775 }, 0)
                    .wait(1)
                    .to({ x: 428.425, y: 828.875 }, 0)
                    .to({ _off: !0 }, 1)
                    .wait(36)
                ),
                  this.timeline.addTween(
                    t.Tween.get(this.shape_9)
                      .wait(363)
                      .to({ _off: !1 }, 0)
                      .wait(1)
                      .to({ x: 429.475, y: 811.025 }, 0)
                      .wait(1)
                      .to({ x: 429.975, y: 802.125 }, 0)
                      .wait(1)
                      .to({ x: 430.475, y: 793.175 }, 0)
                      .wait(1)
                      .to({ x: 430.975, y: 784.275 }, 0)
                      .wait(1)
                      .to({ x: 431.475, y: 775.375 }, 0)
                      .wait(1)
                      .to({ x: 431.975, y: 766.475 }, 0)
                      .wait(1)
                      .to({ x: 432.475, y: 757.525 }, 0)
                      .wait(1)
                      .to({ x: 433.025, y: 748.625 }, 0)
                      .wait(1)
                      .to({ x: 433.525, y: 739.725 }, 0)
                      .wait(1)
                      .to({ x: 434.025, y: 730.825 }, 0)
                      .wait(1)
                      .to({ x: 434.525, y: 721.875 }, 0)
                      .wait(1)
                      .to({ x: 435.025, y: 712.975 }, 0)
                      .wait(1)
                      .to({ x: 435.525, y: 704.025 }, 0)
                      .wait(1)
                      .to({ x: 436.025, y: 695.125 }, 0)
                      .wait(1)
                      .to({ x: 436.525, y: 686.225 }, 0)
                      .wait(1)
                      .to({ x: 437.075, y: 677.325 }, 0)
                      .wait(1)
                      .to({ x: 437.575, y: 668.375 }, 0)
                      .wait(1)
                      .to({ x: 438.075, y: 659.475 }, 0)
                      .wait(1)
                      .to({ x: 438.575, y: 650.575 }, 0)
                      .wait(1)
                      .to({ x: 439.075, y: 641.675 }, 0)
                      .wait(1)
                      .to({ x: 439.575, y: 632.725 }, 0)
                      .wait(1)
                      .to({ x: 440.075, y: 623.825 }, 0)
                      .wait(1)
                      .to({ x: 440.575, y: 614.925 }, 0)
                      .to({ _off: !0 }, 1)
                      .wait(12)
                  ),
                  this.timeline.addTween(
                    t.Tween.get(this.shape_10)
                      .wait(387)
                      .to({ _off: !1 }, 0)
                      .wait(1)
                      .to({ x: 441.625, y: 597.075 }, 0)
                      .wait(1)
                      .to({ x: 442.125, y: 588.175 }, 0)
                      .wait(1)
                      .to({ x: 442.625, y: 579.225 }, 0)
                      .wait(1)
                      .to({ x: 443.125, y: 570.325 }, 0)
                      .wait(1)
                      .to({ x: 443.625, y: 561.425 }, 0)
                      .wait(1)
                      .to({ x: 444.125, y: 552.525 }, 0)
                      .wait(1)
                      .to({ x: 444.625, y: 543.575 }, 0)
                      .wait(1)
                      .to({ x: 445.175, y: 534.675 }, 0)
                      .wait(1)
                      .to({ x: 445.675, y: 525.775 }, 0)
                      .wait(1)
                      .to({ x: 446.175, y: 516.825 }, 0)
                      .wait(1)
                      .to({ x: 446.675, y: 507.925 }, 0)
                      .wait(1)
                  );
                let h = new t.Shape();
                (h._off = !0),
                  h.graphics.p(
                    "EgROBTIMALbgy/QBJlYgElFMAAAhozIG8AAMAAABozQAXHwBrFGMAM/Awmg"
                  ),
                  h.setTransform(606.7, 219.55),
                  (this.shape_11 = new t.Shape()),
                  this.shape_11.graphics
                    .f("#FF3366")
                    .s()
                    .p("EhjkARjMAAAgjFMDHJAAAMAAAAjFg"),
                  this.shape_11.setTransform(454.875, 344.575),
                  (r = [this.shape_11]);
                for (let t = 0; t < r.length; t++) r[t].mask = h;
                this.timeline.addTween(
                  t.Tween.get(this.shape_11)
                    .wait(1)
                    .to({ x: 455.175, y: 338.825 }, 0)
                    .wait(1)
                    .to({ x: 455.525, y: 333.075 }, 0)
                    .wait(1)
                    .to({ x: 455.825, y: 327.325 }, 0)
                    .wait(1)
                    .to({ x: 456.125, y: 321.575 }, 0)
                    .wait(1)
                    .to({ x: 456.475, y: 315.825 }, 0)
                    .wait(1)
                    .to({ x: 456.775, y: 310.075 }, 0)
                    .wait(1)
                    .to({ x: 457.075, y: 304.325 }, 0)
                    .wait(1)
                    .to({ x: 457.425, y: 298.575 }, 0)
                    .wait(1)
                    .to({ x: 457.725, y: 292.825 }, 0)
                    .wait(1)
                    .to({ x: 458.025, y: 287.075 }, 0)
                    .wait(1)
                    .to({ x: 458.375, y: 281.325 }, 0)
                    .wait(1)
                    .to({ x: 458.675, y: 275.575 }, 0)
                    .wait(1)
                    .to({ x: 458.975, y: 269.825 }, 0)
                    .wait(1)
                    .to({ x: 459.275, y: 264.075 }, 0)
                    .wait(1)
                    .to({ x: 459.625, y: 258.325 }, 0)
                    .wait(1)
                    .to({ x: 459.925, y: 252.575 }, 0)
                    .wait(1)
                    .to({ x: 460.225, y: 246.825 }, 0)
                    .wait(1)
                    .to({ x: 460.575, y: 241.075 }, 0)
                    .wait(1)
                    .to({ x: 460.875, y: 235.325 }, 0)
                    .wait(1)
                    .to({ x: 461.175, y: 229.575 }, 0)
                    .wait(1)
                    .to({ x: 461.525, y: 223.825 }, 0)
                    .wait(1)
                    .to({ x: 461.825, y: 218.075 }, 0)
                    .wait(1)
                    .to({ x: 462.125, y: 212.325 }, 0)
                    .wait(1)
                    .to({ x: 462.475, y: 206.575 }, 0)
                    .wait(1)
                    .to({ x: 462.775, y: 200.825 }, 0)
                    .wait(1)
                    .to({ x: 463.075, y: 195.075 }, 0)
                    .wait(1)
                    .to({ x: 463.425, y: 189.325 }, 0)
                    .wait(1)
                    .to({ x: 463.725, y: 183.575 }, 0)
                    .wait(1)
                    .to({ x: 464.025, y: 177.825 }, 0)
                    .wait(1)
                    .to({ x: 464.375, y: 172.075 }, 0)
                    .wait(1)
                    .to({ x: 464.675, y: 166.325 }, 0)
                    .wait(1)
                    .to({ x: 464.975, y: 160.575 }, 0)
                    .wait(1)
                    .to({ x: 465.325, y: 154.825 }, 0)
                    .wait(1)
                    .to({ x: 465.625, y: 149.075 }, 0)
                    .wait(1)
                    .to({ x: 465.925, y: 143.325 }, 0)
                    .wait(1)
                    .to({ x: 466.275, y: 137.575 }, 0)
                    .wait(1)
                    .to({ x: 466.575, y: 131.825 }, 0)
                    .wait(1)
                    .to({ x: 466.875, y: 126.075 }, 0)
                    .wait(1)
                    .to({ x: 467.175, y: 120.325 }, 0)
                    .wait(1)
                    .to({ x: 467.525, y: 114.575 }, 0)
                    .wait(1)
                    .to({ x: 467.825, y: 108.825 }, 0)
                    .wait(1)
                    .to({ x: 468.125, y: 103.075 }, 0)
                    .wait(1)
                    .to({ x: 468.475, y: 97.325 }, 0)
                    .wait(1)
                    .to({ x: 468.775, y: 91.525 }, 0)
                    .wait(1)
                    .to({ x: 469.075, y: 85.825 }, 0)
                    .wait(1)
                    .to({ x: 469.425, y: 80.075 }, 0)
                    .wait(1)
                    .to({ x: 469.725, y: 74.275 }, 0)
                    .wait(1)
                    .to({ x: 470.025, y: 68.575 }, 0)
                    .wait(1)
                    .to({ x: 470.375, y: 62.775 }, 0)
                    .wait(1)
                    .to({ x: 470.675, y: 57.075 }, 0)
                    .wait(1)
                    .to({ x: 470.975, y: 51.275 }, 0)
                    .wait(1)
                    .to({ x: 471.325, y: 45.525 }, 0)
                    .wait(1)
                    .to({ x: 471.625, y: 39.825 }, 0)
                    .wait(1)
                    .to({ x: 471.925, y: 34.025 }, 0)
                    .wait(1)
                    .to({ x: 472.275, y: 28.275 }, 0)
                    .wait(1)
                    .to({ x: 472.575, y: 22.525 }, 0)
                    .wait(1)
                    .to({ x: 472.875, y: 16.775 }, 0)
                    .wait(1)
                    .to({ x: 473.225, y: 11.025 }, 0)
                    .wait(1)
                    .to({ x: 473.525, y: 5.275 }, 0)
                    .wait(1)
                    .to({ x: 473.825, y: -0.475 }, 0)
                    .wait(1)
                    .to({ x: 474.125, y: -6.225 }, 0)
                    .wait(1)
                    .to({ x: 474.475, y: -11.975 }, 0)
                    .wait(1)
                    .to({ x: 474.775, y: -17.725 }, 0)
                    .wait(1)
                    .to({ x: 475.075, y: -23.475 }, 0)
                    .wait(1)
                    .to({ x: 475.425, y: -29.225 }, 0)
                    .wait(1)
                    .to({ x: 475.725, y: -34.975 }, 0)
                    .wait(1)
                    .to({ x: 476.025, y: -40.725 }, 0)
                    .wait(1)
                    .to({ x: 476.375, y: -46.475 }, 0)
                    .wait(1)
                    .to({ x: 476.675, y: -52.225 }, 0)
                    .wait(1)
                    .to({ x: 476.975, y: -57.975 }, 0)
                    .wait(1)
                    .to({ x: 477.325, y: -63.725 }, 0)
                    .wait(1)
                    .to({ x: 477.625, y: -69.475 }, 0)
                    .wait(1)
                    .to({ x: 477.925, y: -75.225 }, 0)
                    .wait(1)
                    .to({ x: 478.275, y: -80.975 }, 0)
                    .wait(1)
                    .to({ x: 478.575, y: -86.725 }, 0)
                    .wait(1)
                    .to({ x: 478.875, y: -92.475 }, 0)
                    .wait(1)
                    .to({ x: 479.225, y: -98.225 }, 0)
                    .wait(1)
                    .to({ x: 479.525, y: -103.975 }, 0)
                    .wait(1)
                    .to({ x: 479.825, y: -109.725 }, 0)
                    .wait(1)
                    .to({ x: 480.175, y: -115.475 }, 0)
                    .wait(1)
                    .to({ x: 480.475, y: -121.225 }, 0)
                    .wait(1)
                    .to({ x: 480.775, y: -126.975 }, 0)
                    .wait(1)
                    .to({ x: 481.125, y: -132.725 }, 0)
                    .wait(1)
                    .to({ x: 481.425, y: -138.475 }, 0)
                    .wait(1)
                    .to({ x: 481.725, y: -144.225 }, 0)
                    .wait(1)
                    .to({ x: 482.025, y: -149.975 }, 0)
                    .wait(1)
                    .to({ x: 482.375, y: -155.725 }, 0)
                    .wait(1)
                    .to({ x: 482.675, y: -161.475 }, 0)
                    .wait(1)
                    .to({ x: 482.975, y: -167.225 }, 0)
                    .wait(1)
                    .to({ x: 483.325, y: -172.975 }, 0)
                    .wait(1)
                    .to({ x: 483.625, y: -178.725 }, 0)
                    .wait(1)
                    .to({ x: 483.925, y: -184.475 }, 0)
                    .wait(1)
                    .to({ x: 484.275, y: -190.225 }, 0)
                    .wait(1)
                    .to({ x: 484.575, y: -195.975 }, 0)
                    .wait(1)
                    .to({ x: 484.875, y: -201.725 }, 0)
                    .wait(1)
                    .to({ x: 485.225, y: -207.475 }, 0)
                    .wait(1)
                    .to({ x: 485.525, y: -213.225 }, 0)
                    .to({ _off: !0 }, 1)
                    .wait(301)
                ),
                  (this.shape_12 = new t.Shape()),
                  this.shape_12.graphics
                    .f("#FF3366")
                    .s()
                    .p("EhjkARjMAAAgjFMDHJAAAMAAAAjFg"),
                  this.shape_12.setTransform(422.875, 926.925),
                  (this.shape_12._off = !0),
                  (r = [this.shape_12]);
                for (let t = 0; t < r.length; t++) r[t].mask = h;
                this.timeline.addTween(
                  t.Tween.get(this.shape_12)
                    .wait(201)
                    .to({ _off: !1 }, 0)
                    .wait(1)
                    .to({ x: 423.225, y: 920.825 }, 0)
                    .wait(1)
                    .to({ x: 423.525, y: 914.725 }, 0)
                    .wait(1)
                    .to({ x: 423.875, y: 908.625 }, 0)
                    .wait(1)
                    .to({ x: 424.225, y: 902.525 }, 0)
                    .wait(1)
                    .to({ x: 424.525, y: 896.425 }, 0)
                    .wait(1)
                    .to({ x: 424.875, y: 890.325 }, 0)
                    .wait(1)
                    .to({ x: 425.225, y: 884.225 }, 0)
                    .wait(1)
                    .to({ x: 425.575, y: 878.125 }, 0)
                    .wait(1)
                    .to({ x: 425.875, y: 872.075 }, 0)
                    .wait(1)
                    .to({ x: 426.225, y: 865.925 }, 0)
                    .wait(1)
                    .to({ x: 426.575, y: 859.875 }, 0)
                    .wait(1)
                    .to({ x: 426.875, y: 853.775 }, 0)
                    .wait(1)
                    .to({ x: 427.225, y: 847.675 }, 0)
                    .wait(1)
                    .to({ x: 427.575, y: 841.575 }, 0)
                    .wait(1)
                    .to({ x: 427.925, y: 835.475 }, 0)
                    .wait(1)
                    .to({ x: 428.225, y: 829.375 }, 0)
                    .wait(1)
                    .to({ x: 428.575, y: 823.275 }, 0)
                    .wait(1)
                    .to({ x: 428.925, y: 817.175 }, 0)
                    .wait(1)
                    .to({ x: 429.225, y: 811.075 }, 0)
                    .wait(1)
                    .to({ x: 429.575, y: 804.975 }, 0)
                    .wait(1)
                    .to({ x: 429.925, y: 798.875 }, 0)
                    .wait(1)
                    .to({ x: 430.225, y: 792.775 }, 0)
                    .wait(1)
                    .to({ x: 430.575, y: 786.675 }, 0)
                    .wait(1)
                    .to({ x: 430.925, y: 780.575 }, 0)
                    .wait(1)
                    .to({ x: 431.275, y: 774.525 }, 0)
                    .wait(1)
                    .to({ x: 431.575, y: 768.425 }, 0)
                    .wait(1)
                    .to({ x: 431.925, y: 762.325 }, 0)
                    .wait(1)
                    .to({ x: 432.275, y: 756.225 }, 0)
                    .wait(1)
                    .to({ x: 432.575, y: 750.125 }, 0)
                    .wait(1)
                    .to({ x: 432.925, y: 744.025 }, 0)
                    .wait(1)
                    .to({ x: 433.275, y: 737.925 }, 0)
                    .wait(1)
                    .to({ x: 433.575, y: 731.825 }, 0)
                    .wait(1)
                    .to({ x: 433.925, y: 725.725 }, 0)
                    .wait(1)
                    .to({ x: 434.275, y: 719.625 }, 0)
                    .wait(1)
                    .to({ x: 434.625, y: 713.525 }, 0)
                    .wait(1)
                    .to({ x: 434.925, y: 707.425 }, 0)
                    .wait(1)
                    .to({ x: 435.275, y: 701.325 }, 0)
                    .wait(1)
                    .to({ x: 435.625, y: 695.225 }, 0)
                    .wait(1)
                    .to({ x: 435.925, y: 689.125 }, 0)
                    .wait(1)
                    .to({ x: 436.275, y: 683.025 }, 0)
                    .wait(1)
                    .to({ x: 436.625, y: 676.925 }, 0)
                    .wait(1)
                    .to({ x: 436.925, y: 670.875 }, 0)
                    .wait(1)
                    .to({ x: 437.275, y: 664.725 }, 0)
                    .wait(1)
                    .to({ x: 437.625, y: 658.675 }, 0)
                    .wait(1)
                    .to({ x: 437.975, y: 652.575 }, 0)
                    .wait(1)
                    .to({ x: 438.275, y: 646.475 }, 0)
                    .wait(1)
                    .to({ x: 438.625, y: 640.375 }, 0)
                    .wait(1)
                    .to({ x: 438.975, y: 634.275 }, 0)
                    .wait(1)
                    .to({ x: 439.275, y: 628.175 }, 0)
                    .wait(1)
                    .to({ x: 439.625, y: 622.075 }, 0)
                    .wait(1)
                    .to({ x: 439.975, y: 615.975 }, 0)
                    .wait(1)
                    .to({ x: 440.275, y: 609.875 }, 0)
                    .wait(1)
                    .to({ x: 440.625, y: 603.775 }, 0)
                    .wait(1)
                    .to({ x: 440.975, y: 597.675 }, 0)
                    .wait(1)
                    .to({ x: 441.325, y: 591.575 }, 0)
                    .wait(1)
                    .to({ x: 441.625, y: 585.475 }, 0)
                    .wait(1)
                    .to({ x: 441.975, y: 579.375 }, 0)
                    .wait(1)
                    .to({ x: 442.325, y: 573.275 }, 0)
                    .wait(1)
                    .to({ x: 442.625, y: 567.225 }, 0)
                    .wait(1)
                    .to({ x: 442.975, y: 561.075 }, 0)
                    .wait(1)
                    .to({ x: 443.325, y: 555.025 }, 0)
                    .wait(1)
                    .to({ x: 443.625, y: 548.875 }, 0)
                    .wait(1)
                    .to({ x: 443.975, y: 542.825 }, 0)
                    .wait(1)
                    .to({ x: 444.325, y: 536.725 }, 0)
                    .wait(1)
                    .to({ x: 444.675, y: 530.625 }, 0)
                    .wait(1)
                    .to({ x: 444.975, y: 524.525 }, 0)
                    .wait(1)
                    .to({ x: 445.325, y: 518.425 }, 0)
                    .wait(1)
                    .to({ x: 445.675, y: 512.325 }, 0)
                    .wait(1)
                    .to({ x: 445.975, y: 506.225 }, 0)
                    .wait(1)
                    .to({ x: 446.325, y: 500.125 }, 0)
                    .wait(1)
                    .to({ x: 446.675, y: 494.025 }, 0)
                    .wait(1)
                    .to({ x: 446.975, y: 487.925 }, 0)
                    .wait(1)
                    .to({ x: 447.325, y: 481.825 }, 0)
                    .wait(1)
                    .to({ x: 447.675, y: 475.725 }, 0)
                    .wait(1)
                    .to({ x: 448.025, y: 469.675 }, 0)
                    .wait(1)
                    .to({ x: 448.325, y: 463.525 }, 0)
                    .wait(1)
                    .to({ x: 448.675, y: 457.475 }, 0)
                    .wait(1)
                    .to({ x: 449.025, y: 451.375 }, 0)
                    .wait(1)
                    .to({ x: 449.325, y: 445.275 }, 0)
                    .wait(1)
                    .to({ x: 449.675, y: 439.175 }, 0)
                    .wait(1)
                    .to({ x: 450.025, y: 433.075 }, 0)
                    .wait(1)
                    .to({ x: 450.325, y: 426.975 }, 0)
                    .wait(1)
                    .to({ x: 450.675, y: 420.875 }, 0)
                    .wait(1)
                    .to({ x: 451.025, y: 414.775 }, 0)
                    .wait(1)
                    .to({ x: 451.375, y: 408.675 }, 0)
                    .wait(1)
                    .to({ x: 451.675, y: 402.575 }, 0)
                    .wait(1)
                    .to({ x: 452.025, y: 396.475 }, 0)
                    .wait(1)
                    .to({ x: 452.375, y: 390.375 }, 0)
                    .wait(1)
                    .to({ x: 452.675, y: 384.275 }, 0)
                    .wait(1)
                    .to({ x: 453.025, y: 378.175 }, 0)
                    .wait(1)
                    .to({ x: 453.375, y: 372.075 }, 0)
                    .wait(1)
                    .to({ x: 453.675, y: 366.025 }, 0)
                    .wait(1)
                    .to({ x: 454.025, y: 359.875 }, 0)
                    .wait(1)
                    .to({ x: 454.375, y: 353.825 }, 0)
                    .wait(1)
                    .to({ x: 454.725, y: 347.675 }, 0)
                    .wait(1)
                    .to({ x: 455.025, y: 341.625 }, 0)
                    .wait(1)
                    .to({ x: 455.375, y: 335.525 }, 0)
                    .wait(1)
                    .to({ x: 455.725, y: 329.425 }, 0)
                    .wait(1)
                    .to({ x: 456.025, y: 323.325 }, 0)
                    .wait(1)
                    .to({ x: 456.375, y: 317.225 }, 0)
                    .wait(1)
                    .to({ x: 456.725, y: 311.125 }, 0)
                    .wait(1)
                    .to({ x: 457.025, y: 305.025 }, 0)
                    .wait(1)
                    .to({ x: 457.375, y: 298.925 }, 0)
                    .wait(1)
                    .to({ x: 457.725, y: 292.825 }, 0)
                    .wait(1)
                    .to({ x: 458.075, y: 286.725 }, 0)
                    .wait(1)
                    .to({ x: 458.375, y: 280.625 }, 0)
                    .wait(1)
                    .to({ x: 458.725, y: 274.525 }, 0)
                    .wait(1)
                    .to({ x: 459.075, y: 268.425 }, 0)
                    .wait(1)
                    .to({ x: 459.375, y: 262.325 }, 0)
                    .wait(1)
                    .to({ x: 459.725, y: 256.225 }, 0)
                    .wait(1)
                    .to({ x: 460.075, y: 250.175 }, 0)
                    .wait(1)
                    .to({ x: 460.375, y: 244.025 }, 0)
                    .wait(1)
                    .to({ x: 460.725, y: 237.975 }, 0)
                    .wait(1)
                    .to({ x: 461.075, y: 231.875 }, 0)
                    .wait(1)
                    .to({ x: 461.425, y: 225.775 }, 0)
                    .wait(1)
                    .to({ x: 461.725, y: 219.675 }, 0)
                    .wait(1)
                    .to({ x: 462.075, y: 213.575 }, 0)
                    .wait(1)
                    .to({ x: 462.425, y: 207.475 }, 0)
                    .wait(1)
                    .to({ x: 462.725, y: 201.375 }, 0)
                    .wait(1)
                    .to({ x: 463.075, y: 195.275 }, 0)
                    .wait(1)
                    .to({ x: 463.425, y: 189.175 }, 0)
                    .wait(1)
                    .to({ x: 463.725, y: 183.075 }, 0)
                    .wait(1)
                    .to({ x: 464.075, y: 176.975 }, 0)
                    .wait(1)
                    .to({ x: 464.425, y: 170.875 }, 0)
                    .wait(1)
                    .to({ x: 464.775, y: 164.825 }, 0)
                    .wait(1)
                    .to({ x: 465.075, y: 158.675 }, 0)
                    .wait(1)
                    .to({ x: 465.425, y: 152.625 }, 0)
                    .wait(1)
                    .to({ x: 465.775, y: 146.475 }, 0)
                    .wait(1)
                    .to({ x: 466.075, y: 140.425 }, 0)
                    .wait(1)
                    .to({ x: 466.425, y: 134.325 }, 0)
                    .wait(1)
                    .to({ x: 466.775, y: 128.225 }, 0)
                    .wait(1)
                    .to({ x: 467.075, y: 122.125 }, 0)
                    .wait(1)
                    .to({ x: 467.425, y: 116.025 }, 0)
                    .wait(1)
                    .to({ x: 467.775, y: 109.925 }, 0)
                    .wait(1)
                    .to({ x: 468.125, y: 103.825 }, 0)
                    .wait(1)
                    .to({ x: 468.425, y: 97.725 }, 0)
                    .wait(1)
                    .to({ x: 468.775, y: 91.625 }, 0)
                    .wait(1)
                    .to({ x: 469.125, y: 85.525 }, 0)
                    .wait(1)
                    .to({ x: 469.425, y: 79.425 }, 0)
                    .wait(1)
                    .to({ x: 469.775, y: 73.325 }, 0)
                    .wait(1)
                    .to({ x: 470.125, y: 67.225 }, 0)
                    .wait(1)
                    .to({ x: 470.425, y: 61.125 }, 0)
                    .wait(1)
                    .to({ x: 470.775, y: 55.025 }, 0)
                    .wait(1)
                    .to({ x: 471.125, y: 48.975 }, 0)
                    .wait(1)
                    .to({ x: 471.475, y: 42.825 }, 0)
                    .wait(1)
                    .to({ x: 471.775, y: 36.775 }, 0)
                    .wait(1)
                    .to({ x: 472.125, y: 30.675 }, 0)
                    .wait(1)
                    .to({ x: 472.475, y: 24.575 }, 0)
                    .wait(1)
                    .to({ x: 472.775, y: 18.475 }, 0)
                    .wait(1)
                    .to({ x: 473.125, y: 12.375 }, 0)
                    .wait(1)
                    .to({ x: 473.475, y: 6.275 }, 0)
                    .wait(1)
                    .to({ x: 473.775, y: 0.175 }, 0)
                    .wait(1)
                    .to({ x: 474.125, y: -5.925 }, 0)
                    .wait(1)
                    .to({ x: 474.475, y: -12.025 }, 0)
                    .wait(1)
                    .to({ x: 474.825, y: -18.125 }, 0)
                    .wait(1)
                    .to({ x: 475.125, y: -24.225 }, 0)
                    .wait(1)
                    .to({ x: 475.475, y: -30.325 }, 0)
                    .wait(1)
                    .to({ x: 475.825, y: -36.425 }, 0)
                    .wait(1)
                    .to({ x: 476.125, y: -42.525 }, 0)
                    .wait(1)
                    .to({ x: 476.475, y: -48.625 }, 0)
                    .wait(1)
                    .to({ x: 476.825, y: -54.725 }, 0)
                    .wait(1)
                    .to({ x: 477.125, y: -60.825 }, 0)
                    .wait(1)
                    .to({ x: 477.475, y: -66.875 }, 0)
                    .wait(1)
                    .to({ x: 477.825, y: -72.975 }, 0)
                    .wait(1)
                    .to({ x: 478.175, y: -79.075 }, 0)
                    .wait(1)
                    .to({ x: 478.475, y: -85.175 }, 0)
                    .wait(1)
                    .to({ x: 478.825, y: -91.275 }, 0)
                    .wait(1)
                    .to({ x: 479.175, y: -97.375 }, 0)
                    .wait(1)
                    .to({ x: 479.475, y: -103.475 }, 0)
                    .wait(1)
                    .to({ x: 479.825, y: -109.575 }, 0)
                    .wait(1)
                    .to({ x: 480.175, y: -115.675 }, 0)
                    .wait(1)
                    .to({ x: 480.475, y: -121.775 }, 0)
                    .wait(1)
                    .to({ x: 480.825, y: -127.875 }, 0)
                    .wait(1)
                    .to({ x: 481.175, y: -133.975 }, 0)
                    .wait(1)
                    .to({ x: 481.525, y: -140.075 }, 0)
                    .wait(1)
                    .to({ x: 481.825, y: -146.175 }, 0)
                    .wait(1)
                    .to({ x: 482.175, y: -152.225 }, 0)
                    .wait(1)
                    .to({ x: 482.525, y: -158.375 }, 0)
                    .wait(1)
                    .to({ x: 482.825, y: -164.425 }, 0)
                    .wait(1)
                    .to({ x: 483.175, y: -170.525 }, 0)
                    .wait(1)
                    .to({ x: 483.525, y: -176.625 }, 0)
                    .wait(1)
                    .to({ x: 483.875, y: -182.725 }, 0)
                    .wait(1)
                    .to({ x: 484.175, y: -188.825 }, 0)
                    .wait(1)
                    .to({ x: 484.525, y: -194.925 }, 0)
                    .wait(1)
                    .to({ x: 484.875, y: -201.025 }, 0)
                    .wait(1)
                    .to({ x: 485.175, y: -207.125 }, 0)
                    .wait(1)
                    .to({ x: 485.525, y: -213.225 }, 0)
                    .wait(1)
                    .to({ _off: !0 }, 1)
                    .wait(9)
                ),
                  (this.shape_13 = new t.Shape()),
                  this.shape_13.graphics
                    .f("#FF991B")
                    .s()
                    .p("EhjkARjMAAAgjFMDHJAAAMAAAAjFg"),
                  this.shape_13.setTransform(422.875, 926.925),
                  (this.shape_13._off = !0),
                  (r = [this.shape_13]);
                for (let t = 0; t < r.length; t++) r[t].mask = h;
                this.timeline.addTween(
                  t.Tween.get(this.shape_13)
                    .wait(48)
                    .to({ _off: !1 }, 0)
                    .wait(1)
                    .to({ x: 423.325, y: 919.075 }, 0)
                    .wait(1)
                    .to({ x: 423.725, y: 911.175 }, 0)
                    .wait(1)
                    .to({ x: 424.175, y: 903.325 }, 0)
                    .wait(1)
                    .to({ x: 424.625, y: 895.475 }, 0)
                    .wait(1)
                    .to({ x: 425.025, y: 887.625 }, 0)
                    .wait(1)
                    .to({ x: 425.475, y: 879.725 }, 0)
                    .wait(1)
                    .to({ x: 425.875, y: 871.875 }, 0)
                    .wait(1)
                    .to({ x: 426.325, y: 864.025 }, 0)
                    .wait(1)
                    .to({ x: 426.775, y: 856.175 }, 0)
                    .wait(1)
                    .to({ x: 427.175, y: 848.275 }, 0)
                    .wait(1)
                    .to({ x: 427.625, y: 840.425 }, 0)
                    .wait(1)
                    .to({ x: 428.075, y: 832.575 }, 0)
                    .wait(1)
                    .to({ x: 428.475, y: 824.675 }, 0)
                    .wait(1)
                    .to({ x: 428.925, y: 816.825 }, 0)
                    .wait(1)
                    .to({ x: 429.375, y: 808.975 }, 0)
                    .wait(1)
                    .to({ x: 429.775, y: 801.125 }, 0)
                    .wait(1)
                    .to({ x: 430.225, y: 793.225 }, 0)
                    .wait(1)
                    .to({ x: 430.675, y: 785.375 }, 0)
                    .wait(1)
                    .to({ x: 431.075, y: 777.525 }, 0)
                    .wait(1)
                    .to({ x: 431.525, y: 769.675 }, 0)
                    .wait(1)
                    .to({ x: 431.925, y: 761.825 }, 0)
                    .wait(1)
                    .to({ x: 432.375, y: 753.925 }, 0)
                    .wait(1)
                    .to({ x: 432.825, y: 746.075 }, 0)
                    .wait(1)
                    .to({ x: 433.225, y: 738.225 }, 0)
                    .wait(1)
                    .to({ x: 433.675, y: 730.375 }, 0)
                    .wait(1)
                    .to({ x: 434.125, y: 722.475 }, 0)
                    .wait(1)
                    .to({ x: 434.525, y: 714.625 }, 0)
                    .wait(1)
                    .to({ x: 434.975, y: 706.775 }, 0)
                    .wait(1)
                    .to({ x: 435.425, y: 698.875 }, 0)
                    .wait(1)
                    .to({ x: 435.825, y: 691.025 }, 0)
                    .wait(1)
                    .to({ x: 436.275, y: 683.175 }, 0)
                    .wait(1)
                    .to({ x: 436.725, y: 675.325 }, 0)
                    .wait(1)
                    .to({ x: 437.125, y: 667.425 }, 0)
                    .wait(1)
                    .to({ x: 437.575, y: 659.575 }, 0)
                    .wait(1)
                    .to({ x: 437.975, y: 651.725 }, 0)
                    .wait(1)
                    .to({ x: 438.425, y: 643.875 }, 0)
                    .wait(1)
                    .to({ x: 438.875, y: 635.975 }, 0)
                    .wait(1)
                    .to({ x: 439.275, y: 628.125 }, 0)
                    .wait(1)
                    .to({ x: 439.725, y: 620.275 }, 0)
                    .wait(1)
                    .to({ x: 440.175, y: 612.375 }, 0)
                    .wait(1)
                    .to({ x: 440.575, y: 604.525 }, 0)
                    .wait(1)
                    .to({ x: 441.025, y: 596.675 }, 0)
                    .wait(1)
                    .to({ x: 441.475, y: 588.825 }, 0)
                    .wait(1)
                    .to({ x: 441.875, y: 580.925 }, 0)
                    .wait(1)
                    .to({ x: 442.325, y: 573.075 }, 0)
                    .wait(1)
                    .to({ x: 442.775, y: 565.225 }, 0)
                    .wait(1)
                    .to({ x: 443.175, y: 557.375 }, 0)
                    .wait(1)
                    .to({ x: 443.625, y: 549.475 }, 0)
                    .wait(1)
                    .to({ x: 444.025, y: 541.625 }, 0)
                    .wait(1)
                    .to({ x: 444.475, y: 533.775 }, 0)
                    .wait(1)
                    .to({ x: 444.925, y: 525.875 }, 0)
                    .wait(1)
                    .to({ x: 445.325, y: 518.025 }, 0)
                    .wait(1)
                    .to({ x: 445.775, y: 510.175 }, 0)
                    .wait(1)
                    .to({ x: 446.225, y: 502.325 }, 0)
                    .wait(1)
                    .to({ x: 446.625, y: 494.475 }, 0)
                    .wait(1)
                    .to({ x: 447.075, y: 486.575 }, 0)
                    .wait(1)
                    .to({ x: 447.525, y: 478.725 }, 0)
                    .wait(1)
                    .to({ x: 447.925, y: 470.875 }, 0)
                    .wait(1)
                    .to({ x: 448.375, y: 463.025 }, 0)
                    .wait(1)
                    .to({ x: 448.775, y: 455.125 }, 0)
                    .wait(1)
                    .to({ x: 449.225, y: 447.275 }, 0)
                    .wait(1)
                    .to({ x: 449.675, y: 439.425 }, 0)
                    .wait(1)
                    .to({ x: 450.075, y: 431.575 }, 0)
                    .wait(1)
                    .to({ x: 450.525, y: 423.675 }, 0)
                    .wait(1)
                    .to({ x: 450.975, y: 415.825 }, 0)
                    .wait(1)
                    .to({ x: 451.375, y: 407.975 }, 0)
                    .wait(1)
                    .to({ x: 451.825, y: 400.075 }, 0)
                    .wait(1)
                    .to({ x: 452.275, y: 392.225 }, 0)
                    .wait(1)
                    .to({ x: 452.675, y: 384.375 }, 0)
                    .wait(1)
                    .to({ x: 453.125, y: 376.525 }, 0)
                    .wait(1)
                    .to({ x: 453.575, y: 368.625 }, 0)
                    .wait(1)
                    .to({ x: 453.975, y: 360.775 }, 0)
                    .wait(1)
                    .to({ x: 454.425, y: 352.925 }, 0)
                    .wait(1)
                    .to({ x: 454.825, y: 345.075 }, 0)
                    .wait(1)
                    .to({ x: 455.275, y: 337.175 }, 0)
                    .wait(1)
                    .to({ x: 455.725, y: 329.325 }, 0)
                    .wait(1)
                    .to({ x: 456.125, y: 321.475 }, 0)
                    .wait(1)
                    .to({ x: 456.575, y: 313.625 }, 0)
                    .wait(1)
                    .to({ x: 457.025, y: 305.725 }, 0)
                    .wait(1)
                    .to({ x: 457.425, y: 297.875 }, 0)
                    .wait(1)
                    .to({ x: 457.875, y: 290.025 }, 0)
                    .wait(1)
                    .to({ x: 458.325, y: 282.125 }, 0)
                    .wait(1)
                    .to({ x: 458.725, y: 274.275 }, 0)
                    .wait(1)
                    .to({ x: 459.175, y: 266.425 }, 0)
                    .wait(1)
                    .to({ x: 459.625, y: 258.575 }, 0)
                    .wait(1)
                    .to({ x: 460.025, y: 250.675 }, 0)
                    .wait(1)
                    .to({ x: 460.475, y: 242.825 }, 0)
                    .wait(1)
                    .to({ x: 460.875, y: 234.975 }, 0)
                    .wait(1)
                    .to({ x: 461.325, y: 227.125 }, 0)
                    .wait(1)
                    .to({ x: 461.775, y: 219.225 }, 0)
                    .wait(1)
                    .to({ x: 462.175, y: 211.375 }, 0)
                    .wait(1)
                    .to({ x: 462.625, y: 203.525 }, 0)
                    .wait(1)
                    .to({ x: 463.075, y: 195.675 }, 0)
                    .wait(1)
                    .to({ x: 463.475, y: 187.825 }, 0)
                    .wait(1)
                    .to({ x: 463.925, y: 179.925 }, 0)
                    .wait(1)
                    .to({ x: 464.375, y: 172.075 }, 0)
                    .wait(1)
                    .to({ x: 464.775, y: 164.225 }, 0)
                    .wait(1)
                    .to({ x: 465.225, y: 156.325 }, 0)
                    .wait(1)
                    .to({ x: 465.625, y: 148.475 }, 0)
                    .wait(1)
                    .to({ x: 466.075, y: 140.625 }, 0)
                    .wait(1)
                    .to({ x: 466.525, y: 132.775 }, 0)
                    .wait(1)
                    .to({ x: 466.925, y: 124.875 }, 0)
                    .wait(1)
                    .to({ x: 467.375, y: 117.025 }, 0)
                    .wait(1)
                    .to({ x: 467.825, y: 109.175 }, 0)
                    .wait(1)
                    .to({ x: 468.225, y: 101.325 }, 0)
                    .wait(1)
                    .to({ x: 468.675, y: 93.425 }, 0)
                    .wait(1)
                    .to({ x: 469.125, y: 85.575 }, 0)
                    .wait(1)
                    .to({ x: 469.525, y: 77.725 }, 0)
                    .wait(1)
                    .to({ x: 469.975, y: 69.825 }, 0)
                    .wait(1)
                    .to({ x: 470.425, y: 61.975 }, 0)
                    .wait(1)
                    .to({ x: 470.825, y: 54.125 }, 0)
                    .wait(1)
                    .to({ x: 471.275, y: 46.275 }, 0)
                    .wait(1)
                    .to({ x: 471.675, y: 38.375 }, 0)
                    .wait(1)
                    .to({ x: 472.125, y: 30.525 }, 0)
                    .wait(1)
                    .to({ x: 472.575, y: 22.675 }, 0)
                    .wait(1)
                    .to({ x: 472.975, y: 14.825 }, 0)
                    .wait(1)
                    .to({ x: 473.425, y: 6.925 }, 0)
                    .wait(1)
                    .to({ x: 473.875, y: -0.925 }, 0)
                    .wait(1)
                    .to({ x: 474.275, y: -8.775 }, 0)
                    .wait(1)
                    .to({ x: 474.725, y: -16.675 }, 0)
                    .wait(1)
                    .to({ x: 475.175, y: -24.525 }, 0)
                    .wait(1)
                    .to({ x: 475.575, y: -32.375 }, 0)
                    .wait(1)
                    .to({ x: 476.025, y: -40.225 }, 0)
                    .wait(1)
                    .to({ x: 476.475, y: -48.125 }, 0)
                    .wait(1)
                    .to({ x: 476.875, y: -55.975 }, 0)
                    .wait(1)
                    .to({ x: 477.325, y: -63.825 }, 0)
                    .wait(1)
                    .to({ x: 477.725, y: -71.675 }, 0)
                    .wait(1)
                    .to({ x: 478.175, y: -79.525 }, 0)
                    .wait(1)
                    .to({ x: 478.625, y: -87.425 }, 0)
                    .wait(1)
                    .to({ x: 479.025, y: -95.275 }, 0)
                    .wait(1)
                    .to({ x: 479.475, y: -103.125 }, 0)
                    .wait(1)
                    .to({ x: 479.925, y: -110.975 }, 0)
                    .wait(1)
                    .to({ x: 480.325, y: -118.875 }, 0)
                    .wait(1)
                    .to({ x: 480.775, y: -126.725 }, 0)
                    .wait(1)
                    .to({ x: 481.225, y: -134.575 }, 0)
                    .wait(1)
                    .to({ x: 481.625, y: -142.475 }, 0)
                    .wait(1)
                    .to({ x: 482.075, y: -150.325 }, 0)
                    .wait(1)
                    .to({ x: 482.525, y: -158.175 }, 0)
                    .wait(1)
                    .to({ x: 482.925, y: -166.025 }, 0)
                    .wait(1)
                    .to({ x: 483.375, y: -173.925 }, 0)
                    .wait(1)
                    .to({ x: 483.775, y: -181.775 }, 0)
                    .wait(1)
                    .to({ x: 484.225, y: -189.625 }, 0)
                    .wait(1)
                    .to({ x: 484.675, y: -197.475 }, 0)
                    .wait(1)
                    .to({ x: 485.075, y: -205.375 }, 0)
                    .wait(1)
                    .to({ x: 485.525, y: -213.225 }, 0)
                    .wait(1)
                    .to({ _off: !0 }, 1)
                    .wait(204)
                ),
                  (this.shape_14 = new t.Shape()),
                  this.shape_14.graphics
                    .f("#34CCFE")
                    .s()
                    .p("EhjkARjMAAAgjFMDHJAAAMAAAAjFg"),
                  this.shape_14.setTransform(422.875, 926.925),
                  (this.shape_14._off = !0),
                  (r = [this.shape_14]);
                for (let t = 0; t < r.length; t++) r[t].mask = h;
                this.timeline.addTween(
                  t.Tween.get(this.shape_14)
                    .wait(123)
                    .to({ _off: !1 }, 0)
                    .wait(1)
                    .to({ x: 423.225, y: 920.625 }, 0)
                    .wait(1)
                    .to({ x: 423.575, y: 914.325 }, 0)
                    .wait(1)
                    .to({ x: 423.925, y: 908.025 }, 0)
                    .wait(1)
                    .to({ x: 424.275, y: 901.725 }, 0)
                    .wait(1)
                    .to({ x: 424.625, y: 895.425 }, 0)
                    .wait(1)
                    .to({ x: 424.975, y: 889.125 }, 0)
                    .wait(1)
                    .to({ x: 425.275, y: 882.825 }, 0)
                    .wait(1)
                    .to({ x: 425.625, y: 876.525 }, 0)
                    .wait(1)
                    .to({ x: 425.975, y: 870.225 }, 0)
                    .wait(1)
                    .to({ x: 426.325, y: 863.925 }, 0)
                    .wait(1)
                    .to({ x: 426.675, y: 857.625 }, 0)
                    .wait(1)
                    .to({ x: 427.025, y: 851.325 }, 0)
                    .wait(1)
                    .to({ x: 427.375, y: 845.025 }, 0)
                    .wait(1)
                    .to({ x: 427.725, y: 838.725 }, 0)
                    .wait(1)
                    .to({ x: 428.075, y: 832.425 }, 0)
                    .wait(1)
                    .to({ x: 428.425, y: 826.125 }, 0)
                    .wait(1)
                    .to({ x: 428.775, y: 819.825 }, 0)
                    .wait(1)
                    .to({ x: 429.125, y: 813.525 }, 0)
                    .wait(1)
                    .to({ x: 429.475, y: 807.225 }, 0)
                    .wait(1)
                    .to({ x: 429.775, y: 800.925 }, 0)
                    .wait(1)
                    .to({ x: 430.125, y: 794.625 }, 0)
                    .wait(1)
                    .to({ x: 430.475, y: 788.325 }, 0)
                    .wait(1)
                    .to({ x: 430.825, y: 782.025 }, 0)
                    .wait(1)
                    .to({ x: 431.175, y: 775.725 }, 0)
                    .wait(1)
                    .to({ x: 431.525, y: 769.425 }, 0)
                    .wait(1)
                    .to({ x: 431.875, y: 763.125 }, 0)
                    .wait(1)
                    .to({ x: 432.225, y: 756.825 }, 0)
                    .wait(1)
                    .to({ x: 432.575, y: 750.575 }, 0)
                    .wait(1)
                    .to({ x: 432.925, y: 744.275 }, 0)
                    .wait(1)
                    .to({ x: 433.275, y: 737.975 }, 0)
                    .wait(1)
                    .to({ x: 433.625, y: 731.675 }, 0)
                    .wait(1)
                    .to({ x: 433.975, y: 725.375 }, 0)
                    .wait(1)
                    .to({ x: 434.275, y: 719.025 }, 0)
                    .wait(1)
                    .to({ x: 434.625, y: 712.725 }, 0)
                    .wait(1)
                    .to({ x: 434.975, y: 706.425 }, 0)
                    .wait(1)
                    .to({ x: 435.325, y: 700.175 }, 0)
                    .wait(1)
                    .to({ x: 435.675, y: 693.875 }, 0)
                    .wait(1)
                    .to({ x: 436.025, y: 687.575 }, 0)
                    .wait(1)
                    .to({ x: 436.375, y: 681.275 }, 0)
                    .wait(1)
                    .to({ x: 436.725, y: 674.975 }, 0)
                    .wait(1)
                    .to({ x: 437.075, y: 668.675 }, 0)
                    .wait(1)
                    .to({ x: 437.425, y: 662.375 }, 0)
                    .wait(1)
                    .to({ x: 437.775, y: 656.075 }, 0)
                    .wait(1)
                    .to({ x: 438.125, y: 649.775 }, 0)
                    .wait(1)
                    .to({ x: 438.475, y: 643.475 }, 0)
                    .wait(1)
                    .to({ x: 438.775, y: 637.175 }, 0)
                    .wait(1)
                    .to({ x: 439.125, y: 630.875 }, 0)
                    .wait(1)
                    .to({ x: 439.475, y: 624.575 }, 0)
                    .wait(1)
                    .to({ x: 439.825, y: 618.275 }, 0)
                    .wait(1)
                    .to({ x: 440.175, y: 611.975 }, 0)
                    .wait(1)
                    .to({ x: 440.525, y: 605.675 }, 0)
                    .wait(1)
                    .to({ x: 440.875, y: 599.375 }, 0)
                    .wait(1)
                    .to({ x: 441.225, y: 593.075 }, 0)
                    .wait(1)
                    .to({ x: 441.575, y: 586.775 }, 0)
                    .wait(1)
                    .to({ x: 441.925, y: 580.475 }, 0)
                    .wait(1)
                    .to({ x: 442.275, y: 574.175 }, 0)
                    .wait(1)
                    .to({ x: 442.625, y: 567.875 }, 0)
                    .wait(1)
                    .to({ x: 442.975, y: 561.575 }, 0)
                    .wait(1)
                    .to({ x: 443.275, y: 555.275 }, 0)
                    .wait(1)
                    .to({ x: 443.625, y: 548.975 }, 0)
                    .wait(1)
                    .to({ x: 443.975, y: 542.675 }, 0)
                    .wait(1)
                    .to({ x: 444.325, y: 536.375 }, 0)
                    .wait(1)
                    .to({ x: 444.675, y: 530.075 }, 0)
                    .wait(1)
                    .to({ x: 445.025, y: 523.775 }, 0)
                    .wait(1)
                    .to({ x: 445.375, y: 517.475 }, 0)
                    .wait(1)
                    .to({ x: 445.725, y: 511.175 }, 0)
                    .wait(1)
                    .to({ x: 446.075, y: 504.875 }, 0)
                    .wait(1)
                    .to({ x: 446.425, y: 498.575 }, 0)
                    .wait(1)
                    .to({ x: 446.775, y: 492.275 }, 0)
                    .wait(1)
                    .to({ x: 447.125, y: 485.975 }, 0)
                    .wait(1)
                    .to({ x: 447.425, y: 479.675 }, 0)
                    .wait(1)
                    .to({ x: 447.775, y: 473.375 }, 0)
                    .wait(1)
                    .to({ x: 448.125, y: 467.075 }, 0)
                    .wait(1)
                    .to({ x: 448.475, y: 460.775 }, 0)
                    .wait(1)
                    .to({ x: 448.825, y: 454.475 }, 0)
                    .wait(1)
                    .to({ x: 449.175, y: 448.175 }, 0)
                    .wait(1)
                    .to({ x: 449.525, y: 441.875 }, 0)
                    .wait(1)
                    .to({ x: 449.875, y: 435.575 }, 0)
                    .wait(1)
                    .to({ x: 450.225, y: 429.275 }, 0)
                    .wait(1)
                    .to({ x: 450.575, y: 422.975 }, 0)
                    .wait(1)
                    .to({ x: 450.925, y: 416.675 }, 0)
                    .wait(1)
                    .to({ x: 451.275, y: 410.375 }, 0)
                    .wait(1)
                    .to({ x: 451.625, y: 404.125 }, 0)
                    .wait(1)
                    .to({ x: 451.925, y: 397.825 }, 0)
                    .wait(1)
                    .to({ x: 452.275, y: 391.475 }, 0)
                    .wait(1)
                    .to({ x: 452.625, y: 385.175 }, 0)
                    .wait(1)
                    .to({ x: 452.975, y: 378.875 }, 0)
                    .wait(1)
                    .to({ x: 453.325, y: 372.575 }, 0)
                    .wait(1)
                    .to({ x: 453.675, y: 366.275 }, 0)
                    .wait(1)
                    .to({ x: 454.025, y: 359.975 }, 0)
                    .wait(1)
                    .to({ x: 454.375, y: 353.725 }, 0)
                    .wait(1)
                    .to({ x: 454.725, y: 347.425 }, 0)
                    .wait(1)
                    .to({ x: 455.075, y: 341.125 }, 0)
                    .wait(1)
                    .to({ x: 455.425, y: 334.825 }, 0)
                    .wait(1)
                    .to({ x: 455.775, y: 328.525 }, 0)
                    .wait(1)
                    .to({ x: 456.125, y: 322.225 }, 0)
                    .wait(1)
                    .to({ x: 456.475, y: 315.875 }, 0)
                    .wait(1)
                    .to({ x: 456.775, y: 309.575 }, 0)
                    .wait(1)
                    .to({ x: 457.125, y: 303.325 }, 0)
                    .wait(1)
                    .to({ x: 457.475, y: 297.025 }, 0)
                    .wait(1)
                    .to({ x: 457.825, y: 290.725 }, 0)
                    .wait(1)
                    .to({ x: 458.175, y: 284.425 }, 0)
                    .wait(1)
                    .to({ x: 458.525, y: 278.125 }, 0)
                    .wait(1)
                    .to({ x: 458.875, y: 271.825 }, 0)
                    .wait(1)
                    .to({ x: 459.225, y: 265.525 }, 0)
                    .wait(1)
                    .to({ x: 459.575, y: 259.225 }, 0)
                    .wait(1)
                    .to({ x: 459.925, y: 252.925 }, 0)
                    .wait(1)
                    .to({ x: 460.275, y: 246.625 }, 0)
                    .wait(1)
                    .to({ x: 460.625, y: 240.325 }, 0)
                    .wait(1)
                    .to({ x: 460.975, y: 234.025 }, 0)
                    .wait(1)
                    .to({ x: 461.275, y: 227.725 }, 0)
                    .wait(1)
                    .to({ x: 461.625, y: 221.425 }, 0)
                    .wait(1)
                    .to({ x: 461.975, y: 215.125 }, 0)
                    .wait(1)
                    .to({ x: 462.325, y: 208.825 }, 0)
                    .wait(1)
                    .to({ x: 462.675, y: 202.525 }, 0)
                    .wait(1)
                    .to({ x: 463.025, y: 196.225 }, 0)
                    .wait(1)
                    .to({ x: 463.375, y: 189.925 }, 0)
                    .wait(1)
                    .to({ x: 463.725, y: 183.625 }, 0)
                    .wait(1)
                    .to({ x: 464.075, y: 177.325 }, 0)
                    .wait(1)
                    .to({ x: 464.425, y: 171.025 }, 0)
                    .wait(1)
                    .to({ x: 464.775, y: 164.725 }, 0)
                    .wait(1)
                    .to({ x: 465.125, y: 158.425 }, 0)
                    .wait(1)
                    .to({ x: 465.425, y: 152.125 }, 0)
                    .wait(1)
                    .to({ x: 465.775, y: 145.825 }, 0)
                    .wait(1)
                    .to({ x: 466.125, y: 139.525 }, 0)
                    .wait(1)
                    .to({ x: 466.475, y: 133.225 }, 0)
                    .wait(1)
                    .to({ x: 466.825, y: 126.925 }, 0)
                    .wait(1)
                    .to({ x: 467.175, y: 120.625 }, 0)
                    .wait(1)
                    .to({ x: 467.525, y: 114.325 }, 0)
                    .wait(1)
                    .to({ x: 467.875, y: 108.025 }, 0)
                    .wait(1)
                    .to({ x: 468.225, y: 101.725 }, 0)
                    .wait(1)
                    .to({ x: 468.575, y: 95.425 }, 0)
                    .wait(1)
                    .to({ x: 468.925, y: 89.125 }, 0)
                    .wait(1)
                    .to({ x: 469.275, y: 82.825 }, 0)
                    .wait(1)
                    .to({ x: 469.625, y: 76.525 }, 0)
                    .wait(1)
                    .to({ x: 469.925, y: 70.225 }, 0)
                    .wait(1)
                    .to({ x: 470.275, y: 63.925 }, 0)
                    .wait(1)
                    .to({ x: 470.625, y: 57.625 }, 0)
                    .wait(1)
                    .to({ x: 470.975, y: 51.325 }, 0)
                    .wait(1)
                    .to({ x: 471.325, y: 45.025 }, 0)
                    .wait(1)
                    .to({ x: 471.675, y: 38.725 }, 0)
                    .wait(1)
                    .to({ x: 472.025, y: 32.425 }, 0)
                    .wait(1)
                    .to({ x: 472.375, y: 26.125 }, 0)
                    .wait(1)
                    .to({ x: 472.725, y: 19.825 }, 0)
                    .wait(1)
                    .to({ x: 473.075, y: 13.525 }, 0)
                    .wait(1)
                    .to({ x: 473.425, y: 7.275 }, 0)
                    .wait(1)
                    .to({ x: 473.775, y: 0.975 }, 0)
                    .wait(1)
                    .to({ x: 474.125, y: -5.325 }, 0)
                    .wait(1)
                    .to({ x: 474.425, y: -11.675 }, 0)
                    .wait(1)
                    .to({ x: 474.775, y: -17.975 }, 0)
                    .wait(1)
                    .to({ x: 475.125, y: -24.275 }, 0)
                    .wait(1)
                    .to({ x: 475.475, y: -30.575 }, 0)
                    .wait(1)
                    .to({ x: 475.825, y: -36.875 }, 0)
                    .wait(1)
                    .to({ x: 476.175, y: -43.125 }, 0)
                    .wait(1)
                    .to({ x: 476.525, y: -49.425 }, 0)
                    .wait(1)
                    .to({ x: 476.875, y: -55.725 }, 0)
                    .wait(1)
                    .to({ x: 477.225, y: -62.025 }, 0)
                    .wait(1)
                    .to({ x: 477.575, y: -68.325 }, 0)
                    .wait(1)
                    .to({ x: 477.925, y: -74.625 }, 0)
                    .wait(1)
                    .to({ x: 478.275, y: -80.925 }, 0)
                    .wait(1)
                    .to({ x: 478.625, y: -87.225 }, 0)
                    .wait(1)
                    .to({ x: 478.925, y: -93.525 }, 0)
                    .wait(1)
                    .to({ x: 479.275, y: -99.825 }, 0)
                    .wait(1)
                    .to({ x: 479.625, y: -106.125 }, 0)
                    .wait(1)
                    .to({ x: 479.975, y: -112.425 }, 0)
                    .wait(1)
                    .to({ x: 480.325, y: -118.725 }, 0)
                    .wait(1)
                    .to({ x: 480.675, y: -125.025 }, 0)
                    .wait(1)
                    .to({ x: 481.025, y: -131.325 }, 0)
                    .wait(1)
                    .to({ x: 481.375, y: -137.625 }, 0)
                    .wait(1)
                    .to({ x: 481.725, y: -143.925 }, 0)
                    .wait(1)
                    .to({ x: 482.075, y: -150.225 }, 0)
                    .wait(1)
                    .to({ x: 482.425, y: -156.525 }, 0)
                    .wait(1)
                    .to({ x: 482.775, y: -162.825 }, 0)
                    .wait(1)
                    .to({ x: 483.125, y: -169.125 }, 0)
                    .wait(1)
                    .to({ x: 483.425, y: -175.425 }, 0)
                    .wait(1)
                    .to({ x: 483.775, y: -181.725 }, 0)
                    .wait(1)
                    .to({ x: 484.125, y: -188.025 }, 0)
                    .wait(1)
                    .to({ x: 484.475, y: -194.325 }, 0)
                    .wait(1)
                    .to({ x: 484.825, y: -200.625 }, 0)
                    .wait(1)
                    .to({ x: 485.175, y: -206.925 }, 0)
                    .wait(1)
                    .to({ x: 485.525, y: -213.225 }, 0)
                    .wait(1)
                    .to({ _off: !0 }, 1)
                    .wait(93)
                ),
                  (this.shape_15 = new t.Shape()),
                  this.shape_15.graphics
                    .f("#FF3366")
                    .s()
                    .p("EhjkARjMAAAgjFMDHJAAAMAAAAjFg"),
                  this.shape_15.setTransform(422.875, 926.925),
                  (this.shape_15._off = !0),
                  (r = [this.shape_15]);
                for (let t = 0; t < r.length; t++) r[t].mask = h;
                this.timeline.addTween(
                  t.Tween.get(this.shape_15)
                    .wait(295)
                    .to({ _off: !1 }, 0)
                    .wait(1)
                    .to({ x: 423.175, y: 921.275 }, 0)
                    .wait(1)
                    .to({ x: 423.475, y: 915.625 }, 0)
                    .wait(1)
                    .to({ x: 423.825, y: 909.975 }, 0)
                    .wait(1)
                    .to({ x: 424.125, y: 904.325 }, 0)
                    .wait(1)
                    .to({ x: 424.425, y: 898.675 }, 0)
                    .wait(1)
                    .to({ x: 424.725, y: 892.975 }, 0)
                    .wait(1)
                    .to({ x: 425.025, y: 887.325 }, 0)
                    .wait(1)
                    .to({ x: 425.375, y: 881.675 }, 0)
                    .wait(1)
                    .to({ x: 425.675, y: 876.025 }, 0)
                    .wait(1)
                    .to({ x: 425.975, y: 870.375 }, 0)
                    .wait(1)
                    .to({ x: 426.275, y: 864.725 }, 0)
                    .wait(1)
                    .to({ x: 426.625, y: 859.075 }, 0)
                    .wait(1)
                    .to({ x: 426.925, y: 853.425 }, 0)
                    .wait(1)
                    .to({ x: 427.225, y: 847.775 }, 0)
                    .wait(1)
                    .to({ x: 427.525, y: 842.125 }, 0)
                    .wait(1)
                    .to({ x: 427.825, y: 836.475 }, 0)
                    .wait(1)
                    .to({ x: 428.175, y: 830.825 }, 0)
                    .wait(1)
                    .to({ x: 428.475, y: 825.175 }, 0)
                    .wait(1)
                    .to({ x: 428.775, y: 819.525 }, 0)
                    .wait(1)
                    .to({ x: 429.075, y: 813.875 }, 0)
                    .wait(1)
                    .to({ x: 429.375, y: 808.175 }, 0)
                    .wait(1)
                    .to({ x: 429.725, y: 802.525 }, 0)
                    .wait(1)
                    .to({ x: 430.025, y: 796.875 }, 0)
                    .wait(1)
                    .to({ x: 430.325, y: 791.225 }, 0)
                    .wait(1)
                    .to({ x: 430.625, y: 785.575 }, 0)
                    .wait(1)
                    .to({ x: 430.975, y: 779.925 }, 0)
                    .wait(1)
                    .to({ x: 431.275, y: 774.275 }, 0)
                    .wait(1)
                    .to({ x: 431.575, y: 768.625 }, 0)
                    .wait(1)
                    .to({ x: 431.875, y: 762.975 }, 0)
                    .wait(1)
                    .to({ x: 432.175, y: 757.325 }, 0)
                    .wait(1)
                    .to({ x: 432.525, y: 751.675 }, 0)
                    .wait(1)
                    .to({ x: 432.825, y: 745.975 }, 0)
                    .wait(1)
                    .to({ x: 433.125, y: 740.325 }, 0)
                    .wait(1)
                    .to({ x: 433.425, y: 734.675 }, 0)
                    .wait(1)
                    .to({ x: 433.725, y: 729.025 }, 0)
                    .wait(1)
                    .to({ x: 434.075, y: 723.375 }, 0)
                    .wait(1)
                    .to({ x: 434.375, y: 717.725 }, 0)
                    .wait(1)
                    .to({ x: 434.675, y: 712.075 }, 0)
                    .wait(1)
                    .to({ x: 434.975, y: 706.425 }, 0)
                    .wait(1)
                    .to({ x: 435.325, y: 700.775 }, 0)
                    .wait(1)
                    .to({ x: 435.625, y: 695.125 }, 0)
                    .wait(1)
                    .to({ x: 435.925, y: 689.475 }, 0)
                    .wait(1)
                    .to({ x: 436.225, y: 683.825 }, 0)
                    .wait(1)
                    .to({ x: 436.525, y: 678.175 }, 0)
                    .wait(1)
                    .to({ x: 436.875, y: 672.525 }, 0)
                    .wait(1)
                    .to({ x: 437.175, y: 666.825 }, 0)
                    .wait(1)
                    .to({ x: 437.475, y: 661.175 }, 0)
                    .wait(1)
                    .to({ x: 437.775, y: 655.525 }, 0)
                    .wait(1)
                    .to({ x: 438.075, y: 649.875 }, 0)
                    .wait(1)
                    .to({ x: 438.425, y: 644.225 }, 0)
                    .wait(1)
                    .to({ x: 438.725, y: 638.575 }, 0)
                    .wait(1)
                    .to({ x: 439.025, y: 632.925 }, 0)
                    .wait(1)
                    .to({ x: 439.325, y: 627.275 }, 0)
                    .wait(1)
                    .to({ x: 439.675, y: 621.625 }, 0)
                    .wait(1)
                    .to({ x: 439.975, y: 615.975 }, 0)
                    .wait(1)
                    .to({ x: 440.275, y: 610.325 }, 0)
                    .wait(1)
                    .to({ x: 440.575, y: 604.675 }, 0)
                    .wait(1)
                    .to({ x: 440.875, y: 598.975 }, 0)
                    .wait(1)
                    .to({ x: 441.225, y: 593.325 }, 0)
                    .wait(1)
                    .to({ x: 441.525, y: 587.675 }, 0)
                    .wait(1)
                    .to({ x: 441.825, y: 582.025 }, 0)
                    .wait(1)
                    .to({ x: 442.125, y: 576.375 }, 0)
                    .wait(1)
                    .to({ x: 442.425, y: 570.725 }, 0)
                    .wait(1)
                    .to({ x: 442.775, y: 565.075 }, 0)
                    .wait(1)
                    .to({ x: 443.075, y: 559.425 }, 0)
                    .wait(1)
                    .to({ x: 443.375, y: 553.775 }, 0)
                    .wait(1)
                    .to({ x: 443.675, y: 548.125 }, 0)
                    .wait(1)
                    .to({ x: 444.025, y: 542.475 }, 0)
                    .wait(1)
                    .to({ x: 444.325, y: 536.825 }, 0)
                    .wait(1)
                    .to({ x: 444.625, y: 531.175 }, 0)
                    .wait(1)
                    .to({ x: 444.925, y: 525.525 }, 0)
                    .wait(1)
                    .to({ x: 445.225, y: 519.825 }, 0)
                    .wait(1)
                    .to({ x: 445.575, y: 514.175 }, 0)
                    .wait(1)
                    .to({ x: 445.875, y: 508.525 }, 0)
                    .wait(1)
                    .to({ x: 446.175, y: 502.875 }, 0)
                    .wait(1)
                    .to({ x: 446.475, y: 497.225 }, 0)
                    .wait(1)
                    .to({ x: 446.775, y: 491.575 }, 0)
                    .wait(1)
                    .to({ x: 447.125, y: 485.925 }, 0)
                    .wait(1)
                    .to({ x: 447.425, y: 480.275 }, 0)
                    .wait(1)
                    .to({ x: 447.725, y: 474.625 }, 0)
                    .wait(1)
                    .to({ x: 448.025, y: 468.975 }, 0)
                    .wait(1)
                    .to({ x: 448.375, y: 463.325 }, 0)
                    .wait(1)
                    .to({ x: 448.675, y: 457.625 }, 0)
                    .wait(1)
                    .to({ x: 448.975, y: 451.975 }, 0)
                    .wait(1)
                    .to({ x: 449.275, y: 446.325 }, 0)
                    .wait(1)
                    .to({ x: 449.575, y: 440.675 }, 0)
                    .wait(1)
                    .to({ x: 449.925, y: 435.025 }, 0)
                    .wait(1)
                    .to({ x: 450.225, y: 429.375 }, 0)
                    .wait(1)
                    .to({ x: 450.525, y: 423.725 }, 0)
                    .wait(1)
                    .to({ x: 450.825, y: 418.075 }, 0)
                    .wait(1)
                    .to({ x: 451.125, y: 412.425 }, 0)
                    .wait(1)
                    .to({ x: 451.475, y: 406.775 }, 0)
                    .wait(1)
                    .to({ x: 451.775, y: 401.125 }, 0)
                    .wait(1)
                    .to({ x: 452.075, y: 395.475 }, 0)
                    .wait(1)
                    .to({ x: 452.375, y: 389.825 }, 0)
                    .wait(1)
                    .to({ x: 452.725, y: 384.175 }, 0)
                    .wait(1)
                    .to({ x: 453.025, y: 378.525 }, 0)
                    .wait(1)
                    .to({ x: 453.325, y: 372.825 }, 0)
                    .wait(1)
                    .to({ x: 453.625, y: 367.175 }, 0)
                    .wait(1)
                    .to({ x: 453.925, y: 361.525 }, 0)
                    .wait(1)
                    .to({ x: 454.275, y: 355.875 }, 0)
                    .wait(1)
                    .to({ x: 454.575, y: 350.225 }, 0)
                    .wait(1)
                    .to({ x: 454.875, y: 344.575 }, 0)
                    .wait(1)
                );
                let A = new t.Shape();
                (A._off = !0),
                  A.graphics.p(
                    "EAB6BTIMga9gv+QiAjkhVjAQhVjAgRj6MAAAhozIG9AAMAAABozQAbGzFLFQMAvaAxZg"
                  ),
                  A.setTransform(868.325, 219.55),
                  (this.shape_16 = new t.Shape()),
                  this.shape_16.graphics
                    .f("#FF991B")
                    .s()
                    .p("EhjkARjMAAAgjFMDHJAAAMAAAAjFg"),
                  this.shape_16.setTransform(468.875, 90.125),
                  (r = [this.shape_16]);
                for (let t = 0; t < r.length; t++) r[t].mask = A;
                this.timeline.addTween(
                  t.Tween.get(this.shape_16)
                    .wait(1)
                    .to({ x: 469.025, y: 86.975 }, 0)
                    .wait(1)
                    .to({ x: 469.225, y: 83.875 }, 0)
                    .wait(1)
                    .to({ x: 469.375, y: 80.725 }, 0)
                    .wait(1)
                    .to({ x: 469.575, y: 77.625 }, 0)
                    .wait(1)
                    .to({ x: 469.725, y: 74.475 }, 0)
                    .wait(1)
                    .to({ x: 469.925, y: 71.375 }, 0)
                    .wait(1)
                    .to({ x: 470.075, y: 68.225 }, 0)
                    .wait(1)
                    .to({ x: 470.225, y: 65.125 }, 0)
                    .wait(1)
                    .to({ x: 470.425, y: 61.975 }, 0)
                    .wait(1)
                    .to({ x: 470.575, y: 58.875 }, 0)
                    .wait(1)
                    .to({ x: 470.775, y: 55.725 }, 0)
                    .wait(1)
                    .to({ x: 470.925, y: 52.575 }, 0)
                    .wait(1)
                    .to({ x: 471.125, y: 49.475 }, 0)
                    .wait(1)
                    .to({ x: 471.275, y: 46.325 }, 0)
                    .wait(1)
                    .to({ x: 471.425, y: 43.225 }, 0)
                    .wait(1)
                    .to({ x: 471.625, y: 40.075 }, 0)
                    .wait(1)
                    .to({ x: 471.775, y: 36.975 }, 0)
                    .wait(1)
                    .to({ x: 471.975, y: 33.825 }, 0)
                    .wait(1)
                    .to({ x: 472.125, y: 30.725 }, 0)
                    .wait(1)
                    .to({ x: 472.325, y: 27.575 }, 0)
                    .wait(1)
                    .to({ x: 472.475, y: 24.475 }, 0)
                    .wait(1)
                    .to({ x: 472.675, y: 21.325 }, 0)
                    .wait(1)
                    .to({ x: 472.825, y: 18.175 }, 0)
                    .wait(1)
                    .to({ x: 472.975, y: 15.075 }, 0)
                    .wait(1)
                    .to({ x: 473.175, y: 11.925 }, 0)
                    .wait(1)
                    .to({ x: 473.325, y: 8.825 }, 0)
                    .wait(1)
                    .to({ x: 473.525, y: 5.675 }, 0)
                    .wait(1)
                    .to({ x: 473.675, y: 2.575 }, 0)
                    .wait(1)
                    .to({ x: 473.875, y: -0.575 }, 0)
                    .wait(1)
                    .to({ x: 474.025, y: -3.675 }, 0)
                    .wait(1)
                    .to({ x: 474.175, y: -6.825 }, 0)
                    .wait(1)
                    .to({ x: 474.375, y: -9.925 }, 0)
                    .wait(1)
                    .to({ x: 474.525, y: -13.075 }, 0)
                    .wait(1)
                    .to({ x: 474.725, y: -16.225 }, 0)
                    .wait(1)
                    .to({ x: 474.875, y: -19.325 }, 0)
                    .wait(1)
                    .to({ x: 475.075, y: -22.475 }, 0)
                    .wait(1)
                    .to({ x: 475.225, y: -25.575 }, 0)
                    .wait(1)
                    .to({ x: 475.375, y: -28.725 }, 0)
                    .wait(1)
                    .to({ x: 475.575, y: -31.825 }, 0)
                    .wait(1)
                    .to({ x: 475.725, y: -34.975 }, 0)
                    .wait(1)
                    .to({ x: 475.925, y: -38.075 }, 0)
                    .wait(1)
                    .to({ x: 476.075, y: -41.225 }, 0)
                    .wait(1)
                    .to({ x: 476.275, y: -44.325 }, 0)
                    .wait(1)
                    .to({ x: 476.425, y: -47.475 }, 0)
                    .wait(1)
                    .to({ x: 476.575, y: -50.625 }, 0)
                    .wait(1)
                    .to({ x: 476.775, y: -53.725 }, 0)
                    .wait(1)
                    .to({ x: 476.925, y: -56.875 }, 0)
                    .wait(1)
                    .to({ x: 477.125, y: -59.975 }, 0)
                    .wait(1)
                    .to({ x: 477.275, y: -63.125 }, 0)
                    .wait(1)
                    .to({ x: 477.475, y: -66.225 }, 0)
                    .wait(1)
                    .to({ x: 477.625, y: -69.375 }, 0)
                    .wait(1)
                    .to({ x: 477.825, y: -72.475 }, 0)
                    .wait(1)
                    .to({ x: 477.975, y: -75.625 }, 0)
                    .wait(1)
                    .to({ x: 478.125, y: -78.775 }, 0)
                    .wait(1)
                    .to({ x: 478.325, y: -81.875 }, 0)
                    .wait(1)
                    .to({ x: 478.475, y: -85.025 }, 0)
                    .wait(1)
                    .to({ x: 478.675, y: -88.125 }, 0)
                    .wait(1)
                    .to({ x: 478.825, y: -91.275 }, 0)
                    .wait(1)
                    .to({ x: 479.025, y: -94.375 }, 0)
                    .wait(1)
                    .to({ x: 479.175, y: -97.525 }, 0)
                    .wait(1)
                    .to({ x: 479.325, y: -100.625 }, 0)
                    .wait(1)
                    .to({ x: 479.525, y: -103.775 }, 0)
                    .wait(1)
                    .to({ x: 479.675, y: -106.875 }, 0)
                    .wait(1)
                    .to({ x: 479.875, y: -110.025 }, 0)
                    .wait(1)
                    .to({ x: 480.025, y: -113.175 }, 0)
                    .wait(1)
                    .to({ x: 480.225, y: -116.275 }, 0)
                    .wait(1)
                    .to({ x: 480.375, y: -119.425 }, 0)
                    .wait(1)
                    .to({ x: 480.525, y: -122.525 }, 0)
                    .wait(1)
                    .to({ x: 480.725, y: -125.675 }, 0)
                    .wait(1)
                    .to({ x: 480.875, y: -128.775 }, 0)
                    .wait(1)
                    .to({ x: 481.075, y: -131.925 }, 0)
                    .wait(1)
                    .to({ x: 481.225, y: -135.025 }, 0)
                    .wait(1)
                    .to({ x: 481.425, y: -138.175 }, 0)
                    .wait(1)
                    .to({ x: 481.575, y: -141.275 }, 0)
                    .wait(1)
                    .to({ x: 481.725, y: -144.425 }, 0)
                    .wait(1)
                    .to({ x: 481.925, y: -147.575 }, 0)
                    .wait(1)
                    .to({ x: 482.075, y: -150.675 }, 0)
                    .wait(1)
                    .to({ x: 482.275, y: -153.825 }, 0)
                    .wait(1)
                    .to({ x: 482.425, y: -156.925 }, 0)
                    .wait(1)
                    .to({ x: 482.625, y: -160.075 }, 0)
                    .wait(1)
                    .to({ x: 482.775, y: -163.175 }, 0)
                    .wait(1)
                    .to({ x: 482.975, y: -166.325 }, 0)
                    .wait(1)
                    .to({ x: 483.125, y: -169.425 }, 0)
                    .wait(1)
                    .to({ x: 483.275, y: -172.575 }, 0)
                    .wait(1)
                    .to({ x: 483.475, y: -175.675 }, 0)
                    .wait(1)
                    .to({ x: 483.625, y: -178.825 }, 0)
                    .wait(1)
                    .to({ x: 483.825, y: -181.975 }, 0)
                    .wait(1)
                    .to({ x: 483.975, y: -185.075 }, 0)
                    .wait(1)
                    .to({ x: 484.175, y: -188.225 }, 0)
                    .wait(1)
                    .to({ x: 484.325, y: -191.325 }, 0)
                    .wait(1)
                    .to({ x: 484.475, y: -194.475 }, 0)
                    .wait(1)
                    .to({ x: 484.675, y: -197.575 }, 0)
                    .wait(1)
                    .to({ x: 484.825, y: -200.725 }, 0)
                    .wait(1)
                    .to({ x: 485.025, y: -203.825 }, 0)
                    .wait(1)
                    .to({ x: 485.175, y: -206.975 }, 0)
                    .wait(1)
                    .to({ x: 485.375, y: -210.075 }, 0)
                    .wait(1)
                    .to({ x: 485.525, y: -213.225 }, 0)
                    .to({ _off: !0 }, 1)
                    .wait(301)
                ),
                  (this.shape_17 = new t.Shape()),
                  this.shape_17.graphics
                    .f("#FF3366")
                    .s()
                    .p("EhjkARjMAAAgjFMDHJAAAMAAAAjFg"),
                  this.shape_17.setTransform(422.875, 926.925),
                  (this.shape_17._off = !0),
                  (r = [this.shape_17]);
                for (let t = 0; t < r.length; t++) r[t].mask = A;
                this.timeline.addTween(
                  t.Tween.get(this.shape_17)
                    .wait(237)
                    .to({ _off: !1 }, 0)
                    .wait(1)
                    .to({ x: 423.375, y: 918.075 }, 0)
                    .wait(1)
                    .to({ x: 423.825, y: 909.225 }, 0)
                    .wait(1)
                    .to({ x: 424.325, y: 900.425 }, 0)
                    .wait(1)
                    .to({ x: 424.825, y: 891.575 }, 0)
                    .wait(1)
                    .to({ x: 425.325, y: 882.725 }, 0)
                    .wait(1)
                    .to({ x: 425.775, y: 873.875 }, 0)
                    .wait(1)
                    .to({ x: 426.275, y: 865.075 }, 0)
                    .wait(1)
                    .to({ x: 426.775, y: 856.225 }, 0)
                    .wait(1)
                    .to({ x: 427.225, y: 847.375 }, 0)
                    .wait(1)
                    .to({ x: 427.725, y: 838.525 }, 0)
                    .wait(1)
                    .to({ x: 428.225, y: 829.725 }, 0)
                    .wait(1)
                    .to({ x: 428.725, y: 820.875 }, 0)
                    .wait(1)
                    .to({ x: 429.175, y: 812.025 }, 0)
                    .wait(1)
                    .to({ x: 429.675, y: 803.175 }, 0)
                    .wait(1)
                    .to({ x: 430.175, y: 794.375 }, 0)
                    .wait(1)
                    .to({ x: 430.625, y: 785.525 }, 0)
                    .wait(1)
                    .to({ x: 431.125, y: 776.675 }, 0)
                    .wait(1)
                    .to({ x: 431.625, y: 767.825 }, 0)
                    .wait(1)
                    .to({ x: 432.125, y: 758.975 }, 0)
                    .wait(1)
                    .to({ x: 432.575, y: 750.175 }, 0)
                    .wait(1)
                    .to({ x: 433.075, y: 741.325 }, 0)
                    .wait(1)
                    .to({ x: 433.575, y: 732.475 }, 0)
                    .wait(1)
                    .to({ x: 434.025, y: 723.625 }, 0)
                    .wait(1)
                    .to({ x: 434.525, y: 714.775 }, 0)
                    .wait(1)
                    .to({ x: 435.025, y: 705.975 }, 0)
                    .wait(1)
                    .to({ x: 435.525, y: 697.125 }, 0)
                    .wait(1)
                    .to({ x: 435.975, y: 688.275 }, 0)
                    .wait(1)
                    .to({ x: 436.475, y: 679.425 }, 0)
                    .wait(1)
                    .to({ x: 436.975, y: 670.625 }, 0)
                    .wait(1)
                    .to({ x: 437.425, y: 661.775 }, 0)
                    .wait(1)
                    .to({ x: 437.925, y: 652.925 }, 0)
                    .wait(1)
                    .to({ x: 438.425, y: 644.075 }, 0)
                    .wait(1)
                    .to({ x: 438.925, y: 635.275 }, 0)
                    .wait(1)
                    .to({ x: 439.375, y: 626.425 }, 0)
                    .wait(1)
                    .to({ x: 439.875, y: 617.575 }, 0)
                    .wait(1)
                    .to({ x: 440.375, y: 608.725 }, 0)
                    .wait(1)
                    .to({ x: 440.825, y: 599.925 }, 0)
                    .wait(1)
                    .to({ x: 441.325, y: 591.075 }, 0)
                    .wait(1)
                    .to({ x: 441.825, y: 582.225 }, 0)
                    .wait(1)
                    .to({ x: 442.325, y: 573.375 }, 0)
                    .wait(1)
                    .to({ x: 442.775, y: 564.575 }, 0)
                    .wait(1)
                    .to({ x: 443.275, y: 555.725 }, 0)
                    .wait(1)
                    .to({ x: 443.775, y: 546.875 }, 0)
                    .wait(1)
                    .to({ x: 444.225, y: 538.025 }, 0)
                    .wait(1)
                    .to({ x: 444.725, y: 529.225 }, 0)
                    .wait(1)
                    .to({ x: 445.225, y: 520.375 }, 0)
                    .wait(1)
                    .to({ x: 445.725, y: 511.525 }, 0)
                    .wait(1)
                    .to({ x: 446.175, y: 502.675 }, 0)
                    .wait(1)
                    .to({ x: 446.675, y: 493.825 }, 0)
                    .wait(1)
                    .to({ x: 447.175, y: 484.975 }, 0)
                    .wait(1)
                    .to({ x: 447.625, y: 476.175 }, 0)
                    .wait(1)
                    .to({ x: 448.125, y: 467.325 }, 0)
                    .wait(1)
                    .to({ x: 448.625, y: 458.475 }, 0)
                    .wait(1)
                    .to({ x: 449.125, y: 449.625 }, 0)
                    .wait(1)
                    .to({ x: 449.575, y: 440.825 }, 0)
                    .wait(1)
                    .to({ x: 450.075, y: 431.975 }, 0)
                    .wait(1)
                    .to({ x: 450.575, y: 423.125 }, 0)
                    .wait(1)
                    .to({ x: 451.025, y: 414.275 }, 0)
                    .wait(1)
                    .to({ x: 451.525, y: 405.475 }, 0)
                    .wait(1)
                    .to({ x: 452.025, y: 396.625 }, 0)
                    .wait(1)
                    .to({ x: 452.525, y: 387.775 }, 0)
                    .wait(1)
                    .to({ x: 452.975, y: 378.925 }, 0)
                    .wait(1)
                    .to({ x: 453.475, y: 370.125 }, 0)
                    .wait(1)
                    .to({ x: 453.975, y: 361.275 }, 0)
                    .wait(1)
                    .to({ x: 454.425, y: 352.425 }, 0)
                    .wait(1)
                    .to({ x: 454.925, y: 343.575 }, 0)
                    .wait(1)
                    .to({ x: 455.425, y: 334.775 }, 0)
                    .wait(1)
                    .to({ x: 455.875, y: 325.925 }, 0)
                    .wait(1)
                    .to({ x: 456.375, y: 317.075 }, 0)
                    .wait(1)
                    .to({ x: 456.875, y: 308.225 }, 0)
                    .wait(1)
                    .to({ x: 457.375, y: 299.425 }, 0)
                    .wait(1)
                    .to({ x: 457.825, y: 290.575 }, 0)
                    .wait(1)
                    .to({ x: 458.325, y: 281.725 }, 0)
                    .wait(1)
                    .to({ x: 458.825, y: 272.875 }, 0)
                    .wait(1)
                    .to({ x: 459.275, y: 264.075 }, 0)
                    .wait(1)
                    .to({ x: 459.775, y: 255.225 }, 0)
                    .wait(1)
                    .to({ x: 460.275, y: 246.375 }, 0)
                    .wait(1)
                    .to({ x: 460.775, y: 237.525 }, 0)
                    .wait(1)
                    .to({ x: 461.225, y: 228.725 }, 0)
                    .wait(1)
                    .to({ x: 461.725, y: 219.875 }, 0)
                    .wait(1)
                    .to({ x: 462.225, y: 211.025 }, 0)
                    .wait(1)
                    .to({ x: 462.675, y: 202.175 }, 0)
                    .wait(1)
                    .to({ x: 463.175, y: 193.325 }, 0)
                    .wait(1)
                    .to({ x: 463.675, y: 184.475 }, 0)
                    .wait(1)
                    .to({ x: 464.175, y: 175.675 }, 0)
                    .wait(1)
                    .to({ x: 464.625, y: 166.825 }, 0)
                    .wait(1)
                    .to({ x: 465.125, y: 157.975 }, 0)
                    .wait(1)
                    .to({ x: 465.625, y: 149.125 }, 0)
                    .wait(1)
                    .to({ x: 466.075, y: 140.325 }, 0)
                    .wait(1)
                    .to({ x: 466.575, y: 131.475 }, 0)
                    .wait(1)
                    .to({ x: 467.075, y: 122.625 }, 0)
                    .wait(1)
                    .to({ x: 467.575, y: 113.775 }, 0)
                    .wait(1)
                    .to({ x: 468.025, y: 104.975 }, 0)
                    .wait(1)
                    .to({ x: 468.525, y: 96.125 }, 0)
                    .wait(1)
                    .to({ x: 469.025, y: 87.275 }, 0)
                    .wait(1)
                    .to({ x: 469.475, y: 78.425 }, 0)
                    .wait(1)
                    .to({ x: 469.975, y: 69.625 }, 0)
                    .wait(1)
                    .to({ x: 470.475, y: 60.775 }, 0)
                    .wait(1)
                    .to({ x: 470.975, y: 51.925 }, 0)
                    .wait(1)
                    .to({ x: 471.425, y: 43.075 }, 0)
                    .wait(1)
                    .to({ x: 471.925, y: 34.275 }, 0)
                    .wait(1)
                    .to({ x: 472.425, y: 25.425 }, 0)
                    .wait(1)
                    .to({ x: 472.875, y: 16.575 }, 0)
                    .wait(1)
                    .to({ x: 473.375, y: 7.725 }, 0)
                    .wait(1)
                    .to({ x: 473.875, y: -1.075 }, 0)
                    .wait(1)
                    .to({ x: 474.375, y: -9.925 }, 0)
                    .wait(1)
                    .to({ x: 474.825, y: -18.775 }, 0)
                    .wait(1)
                    .to({ x: 475.325, y: -27.625 }, 0)
                    .wait(1)
                    .to({ x: 475.825, y: -36.475 }, 0)
                    .wait(1)
                    .to({ x: 476.275, y: -45.275 }, 0)
                    .wait(1)
                    .to({ x: 476.775, y: -54.125 }, 0)
                    .wait(1)
                    .to({ x: 477.275, y: -62.975 }, 0)
                    .wait(1)
                    .to({ x: 477.775, y: -71.825 }, 0)
                    .wait(1)
                    .to({ x: 478.225, y: -80.675 }, 0)
                    .wait(1)
                    .to({ x: 478.725, y: -89.475 }, 0)
                    .wait(1)
                    .to({ x: 479.225, y: -98.325 }, 0)
                    .wait(1)
                    .to({ x: 479.675, y: -107.175 }, 0)
                    .wait(1)
                    .to({ x: 480.175, y: -116.025 }, 0)
                    .wait(1)
                    .to({ x: 480.675, y: -124.825 }, 0)
                    .wait(1)
                    .to({ x: 481.175, y: -133.675 }, 0)
                    .wait(1)
                    .to({ x: 481.625, y: -142.525 }, 0)
                    .wait(1)
                    .to({ x: 482.125, y: -151.375 }, 0)
                    .wait(1)
                    .to({ x: 482.625, y: -160.175 }, 0)
                    .wait(1)
                    .to({ x: 483.075, y: -169.025 }, 0)
                    .wait(1)
                    .to({ x: 483.575, y: -177.875 }, 0)
                    .wait(1)
                    .to({ x: 484.075, y: -186.725 }, 0)
                    .wait(1)
                    .to({ x: 484.575, y: -195.525 }, 0)
                    .wait(1)
                    .to({ x: 485.025, y: -204.375 }, 0)
                    .wait(1)
                    .to({ x: 485.525, y: -213.225 }, 0)
                    .wait(1)
                    .to({ _off: !0 }, 1)
                    .wait(31)
                ),
                  (this.shape_18 = new t.Shape()),
                  this.shape_18.graphics
                    .f("#34CCFE")
                    .s()
                    .p("EhjkARjMAAAgjFMDHJAAAMAAAAjFg"),
                  this.shape_18.setTransform(422.875, 833.675),
                  (this.shape_18._off = !0),
                  (r = [this.shape_18]);
                for (let t = 0; t < r.length; t++) r[t].mask = A;
                this.timeline.addTween(
                  t.Tween.get(this.shape_18)
                    .wait(97)
                    .to({ _off: !1 }, 0)
                    .wait(1)
                    .to({ x: 423.175, y: 828.275 }, 0)
                    .wait(1)
                    .to({ x: 423.525, y: 822.875 }, 0)
                    .wait(1)
                    .to({ x: 423.825, y: 817.475 }, 0)
                    .wait(1)
                    .to({ x: 424.175, y: 812.075 }, 0)
                    .wait(1)
                    .to({ x: 424.475, y: 806.675 }, 0)
                    .wait(1)
                    .to({ x: 424.825, y: 801.275 }, 0)
                    .wait(1)
                    .to({ x: 425.125, y: 795.875 }, 0)
                    .wait(1)
                    .to({ x: 425.475, y: 790.475 }, 0)
                    .wait(1)
                    .to({ x: 425.775, y: 785.125 }, 0)
                    .wait(1)
                    .to({ x: 426.125, y: 779.725 }, 0)
                    .wait(1)
                    .to({ x: 426.425, y: 774.325 }, 0)
                    .wait(1)
                    .to({ x: 426.775, y: 768.925 }, 0)
                    .wait(1)
                    .to({ x: 427.075, y: 763.525 }, 0)
                    .wait(1)
                    .to({ x: 427.375, y: 758.125 }, 0)
                    .wait(1)
                    .to({ x: 427.725, y: 752.725 }, 0)
                    .wait(1)
                    .to({ x: 428.025, y: 747.325 }, 0)
                    .wait(1)
                    .to({ x: 428.375, y: 741.925 }, 0)
                    .wait(1)
                    .to({ x: 428.675, y: 736.525 }, 0)
                    .wait(1)
                    .to({ x: 429.025, y: 731.175 }, 0)
                    .wait(1)
                    .to({ x: 429.325, y: 725.775 }, 0)
                    .wait(1)
                    .to({ x: 429.675, y: 720.375 }, 0)
                    .wait(1)
                    .to({ x: 429.975, y: 714.975 }, 0)
                    .wait(1)
                    .to({ x: 430.325, y: 709.575 }, 0)
                    .wait(1)
                    .to({ x: 430.625, y: 704.175 }, 0)
                    .wait(1)
                    .to({ x: 430.925, y: 698.775 }, 0)
                    .wait(1)
                    .to({ x: 431.275, y: 693.375 }, 0)
                    .wait(1)
                    .to({ x: 431.575, y: 687.975 }, 0)
                    .wait(1)
                    .to({ x: 431.925, y: 682.575 }, 0)
                    .wait(1)
                    .to({ x: 432.225, y: 677.175 }, 0)
                    .wait(1)
                    .to({ x: 432.575, y: 671.775 }, 0)
                    .wait(1)
                    .to({ x: 432.875, y: 666.375 }, 0)
                    .wait(1)
                    .to({ x: 433.225, y: 660.975 }, 0)
                    .wait(1)
                    .to({ x: 433.525, y: 655.575 }, 0)
                    .wait(1)
                    .to({ x: 433.875, y: 650.175 }, 0)
                    .wait(1)
                    .to({ x: 434.175, y: 644.775 }, 0)
                    .wait(1)
                    .to({ x: 434.525, y: 639.425 }, 0)
                    .wait(1)
                    .to({ x: 434.825, y: 634.025 }, 0)
                    .wait(1)
                    .to({ x: 435.125, y: 628.625 }, 0)
                    .wait(1)
                    .to({ x: 435.475, y: 623.225 }, 0)
                    .wait(1)
                    .to({ x: 435.775, y: 617.825 }, 0)
                    .wait(1)
                    .to({ x: 436.125, y: 612.425 }, 0)
                    .wait(1)
                    .to({ x: 436.425, y: 607.025 }, 0)
                    .wait(1)
                    .to({ x: 436.775, y: 601.625 }, 0)
                    .wait(1)
                    .to({ x: 437.075, y: 596.225 }, 0)
                    .wait(1)
                    .to({ x: 437.425, y: 590.825 }, 0)
                    .wait(1)
                    .to({ x: 437.725, y: 585.425 }, 0)
                    .wait(1)
                    .to({ x: 438.075, y: 580.025 }, 0)
                    .wait(1)
                    .to({ x: 438.375, y: 574.625 }, 0)
                    .wait(1)
                    .to({ x: 438.675, y: 569.275 }, 0)
                    .wait(1)
                    .to({ x: 439.025, y: 563.875 }, 0)
                    .wait(1)
                    .to({ x: 439.325, y: 558.475 }, 0)
                    .wait(1)
                    .to({ x: 439.675, y: 553.075 }, 0)
                    .wait(1)
                    .to({ x: 439.975, y: 547.675 }, 0)
                    .wait(1)
                    .to({ x: 440.325, y: 542.275 }, 0)
                    .wait(1)
                    .to({ x: 440.625, y: 536.875 }, 0)
                    .wait(1)
                    .to({ x: 440.975, y: 531.475 }, 0)
                    .wait(1)
                    .to({ x: 441.275, y: 526.075 }, 0)
                    .wait(1)
                    .to({ x: 441.625, y: 520.675 }, 0)
                    .wait(1)
                    .to({ x: 441.925, y: 515.275 }, 0)
                    .wait(1)
                    .to({ x: 442.275, y: 509.875 }, 0)
                    .wait(1)
                    .to({ x: 442.575, y: 504.475 }, 0)
                    .wait(1)
                    .to({ x: 442.875, y: 499.125 }, 0)
                    .wait(1)
                    .to({ x: 443.225, y: 493.725 }, 0)
                    .wait(1)
                    .to({ x: 443.525, y: 488.325 }, 0)
                    .wait(1)
                    .to({ x: 443.875, y: 482.925 }, 0)
                    .wait(1)
                    .to({ x: 444.175, y: 477.525 }, 0)
                    .wait(1)
                    .to({ x: 444.525, y: 472.125 }, 0)
                    .wait(1)
                    .to({ x: 444.825, y: 466.725 }, 0)
                    .wait(1)
                    .to({ x: 445.175, y: 461.325 }, 0)
                    .wait(1)
                    .to({ x: 445.475, y: 455.925 }, 0)
                    .wait(1)
                    .to({ x: 445.825, y: 450.525 }, 0)
                    .wait(1)
                    .to({ x: 446.125, y: 445.125 }, 0)
                    .wait(1)
                    .to({ x: 446.425, y: 439.725 }, 0)
                    .wait(1)
                    .to({ x: 446.775, y: 434.325 }, 0)
                    .wait(1)
                    .to({ x: 447.075, y: 428.925 }, 0)
                    .wait(1)
                    .to({ x: 447.425, y: 423.525 }, 0)
                    .wait(1)
                    .to({ x: 447.725, y: 418.125 }, 0)
                    .wait(1)
                    .to({ x: 448.075, y: 412.725 }, 0)
                    .wait(1)
                    .to({ x: 448.375, y: 407.375 }, 0)
                    .wait(1)
                    .to({ x: 448.725, y: 401.975 }, 0)
                    .wait(1)
                    .to({ x: 449.025, y: 396.575 }, 0)
                    .wait(1)
                    .to({ x: 449.375, y: 391.175 }, 0)
                    .wait(1)
                    .to({ x: 449.675, y: 385.775 }, 0)
                    .wait(1)
                    .to({ x: 450.025, y: 380.375 }, 0)
                    .wait(1)
                    .to({ x: 450.325, y: 374.975 }, 0)
                    .wait(1)
                    .to({ x: 450.625, y: 369.575 }, 0)
                    .wait(1)
                    .to({ x: 450.975, y: 364.175 }, 0)
                    .wait(1)
                    .to({ x: 451.275, y: 358.775 }, 0)
                    .wait(1)
                    .to({ x: 451.625, y: 353.425 }, 0)
                    .wait(1)
                    .to({ x: 451.925, y: 348.025 }, 0)
                    .wait(1)
                    .to({ x: 452.275, y: 342.625 }, 0)
                    .wait(1)
                    .to({ x: 452.575, y: 337.225 }, 0)
                    .wait(1)
                    .to({ x: 452.925, y: 331.825 }, 0)
                    .wait(1)
                    .to({ x: 453.225, y: 326.425 }, 0)
                    .wait(1)
                    .to({ x: 453.575, y: 321.025 }, 0)
                    .wait(1)
                    .to({ x: 453.875, y: 315.625 }, 0)
                    .wait(1)
                    .to({ x: 454.225, y: 310.225 }, 0)
                    .wait(1)
                    .to({ x: 454.525, y: 304.825 }, 0)
                    .wait(1)
                    .to({ x: 454.825, y: 299.425 }, 0)
                    .wait(1)
                    .to({ x: 455.175, y: 294.025 }, 0)
                    .wait(1)
                    .to({ x: 455.475, y: 288.625 }, 0)
                    .wait(1)
                    .to({ x: 455.825, y: 283.225 }, 0)
                    .wait(1)
                    .to({ x: 456.125, y: 277.825 }, 0)
                    .wait(1)
                    .to({ x: 456.475, y: 272.425 }, 0)
                    .wait(1)
                    .to({ x: 456.775, y: 267.025 }, 0)
                    .wait(1)
                    .to({ x: 457.125, y: 261.675 }, 0)
                    .wait(1)
                    .to({ x: 457.425, y: 256.275 }, 0)
                    .wait(1)
                    .to({ x: 457.775, y: 250.875 }, 0)
                    .wait(1)
                    .to({ x: 458.075, y: 245.475 }, 0)
                    .wait(1)
                    .to({ x: 458.375, y: 240.075 }, 0)
                    .wait(1)
                    .to({ x: 458.725, y: 234.675 }, 0)
                    .wait(1)
                    .to({ x: 459.025, y: 229.275 }, 0)
                    .wait(1)
                    .to({ x: 459.375, y: 223.875 }, 0)
                    .wait(1)
                    .to({ x: 459.675, y: 218.475 }, 0)
                    .wait(1)
                    .to({ x: 460.025, y: 213.075 }, 0)
                    .wait(1)
                    .to({ x: 460.325, y: 207.725 }, 0)
                    .wait(1)
                    .to({ x: 460.675, y: 202.325 }, 0)
                    .wait(1)
                    .to({ x: 460.975, y: 196.925 }, 0)
                    .wait(1)
                    .to({ x: 461.325, y: 191.525 }, 0)
                    .wait(1)
                    .to({ x: 461.625, y: 186.125 }, 0)
                    .wait(1)
                    .to({ x: 461.975, y: 180.725 }, 0)
                    .wait(1)
                    .to({ x: 462.275, y: 175.325 }, 0)
                    .wait(1)
                    .to({ x: 462.575, y: 169.925 }, 0)
                    .wait(1)
                    .to({ x: 462.925, y: 164.525 }, 0)
                    .wait(1)
                    .to({ x: 463.225, y: 159.125 }, 0)
                    .wait(1)
                    .to({ x: 463.575, y: 153.725 }, 0)
                    .wait(1)
                    .to({ x: 463.875, y: 148.325 }, 0)
                    .wait(1)
                    .to({ x: 464.225, y: 142.925 }, 0)
                    .wait(1)
                    .to({ x: 464.525, y: 137.525 }, 0)
                    .wait(1)
                    .to({ x: 464.875, y: 132.125 }, 0)
                    .wait(1)
                    .to({ x: 465.175, y: 126.725 }, 0)
                    .wait(1)
                    .to({ x: 465.525, y: 121.325 }, 0)
                    .wait(1)
                    .to({ x: 465.825, y: 115.975 }, 0)
                    .wait(1)
                    .to({ x: 466.125, y: 110.575 }, 0)
                    .wait(1)
                    .to({ x: 466.475, y: 105.175 }, 0)
                    .wait(1)
                    .to({ x: 466.775, y: 99.775 }, 0)
                    .wait(1)
                    .to({ x: 467.125, y: 94.375 }, 0)
                    .wait(1)
                    .to({ x: 467.425, y: 88.975 }, 0)
                    .wait(1)
                    .to({ x: 467.775, y: 83.575 }, 0)
                    .wait(1)
                    .to({ x: 468.075, y: 78.175 }, 0)
                    .wait(1)
                    .to({ x: 468.425, y: 72.775 }, 0)
                    .wait(1)
                    .to({ x: 468.725, y: 67.375 }, 0)
                    .wait(1)
                    .to({ x: 469.075, y: 61.975 }, 0)
                    .wait(1)
                    .to({ x: 469.375, y: 56.575 }, 0)
                    .wait(1)
                    .to({ x: 469.725, y: 51.175 }, 0)
                    .wait(1)
                    .to({ x: 470.025, y: 45.825 }, 0)
                    .wait(1)
                    .to({ x: 470.325, y: 40.425 }, 0)
                    .wait(1)
                    .to({ x: 470.675, y: 35.025 }, 0)
                    .wait(1)
                    .to({ x: 470.975, y: 29.625 }, 0)
                    .wait(1)
                    .to({ x: 471.325, y: 24.225 }, 0)
                    .wait(1)
                    .to({ x: 471.625, y: 18.825 }, 0)
                    .wait(1)
                    .to({ x: 471.975, y: 13.425 }, 0)
                    .wait(1)
                    .to({ x: 472.275, y: 8.025 }, 0)
                    .wait(1)
                    .to({ x: 472.625, y: 2.625 }, 0)
                    .wait(1)
                    .to({ x: 472.925, y: -2.775 }, 0)
                    .wait(1)
                    .to({ x: 473.275, y: -8.175 }, 0)
                    .wait(1)
                    .to({ x: 473.575, y: -13.575 }, 0)
                    .wait(1)
                    .to({ x: 473.875, y: -18.975 }, 0)
                    .wait(1)
                    .to({ x: 474.225, y: -24.325 }, 0)
                    .wait(1)
                    .to({ x: 474.525, y: -29.725 }, 0)
                    .wait(1)
                    .to({ x: 474.875, y: -35.125 }, 0)
                    .wait(1)
                    .to({ x: 475.175, y: -40.525 }, 0)
                    .wait(1)
                    .to({ x: 475.525, y: -45.925 }, 0)
                    .wait(1)
                    .to({ x: 475.825, y: -51.325 }, 0)
                    .wait(1)
                    .to({ x: 476.175, y: -56.725 }, 0)
                    .wait(1)
                    .to({ x: 476.475, y: -62.125 }, 0)
                    .wait(1)
                    .to({ x: 476.825, y: -67.525 }, 0)
                    .wait(1)
                    .to({ x: 477.125, y: -72.925 }, 0)
                    .wait(1)
                    .to({ x: 477.475, y: -78.325 }, 0)
                    .wait(1)
                    .to({ x: 477.775, y: -83.725 }, 0)
                    .wait(1)
                    .to({ x: 478.075, y: -89.125 }, 0)
                    .wait(1)
                    .to({ x: 478.425, y: -94.525 }, 0)
                    .wait(1)
                    .to({ x: 478.725, y: -99.925 }, 0)
                    .wait(1)
                    .to({ x: 479.075, y: -105.325 }, 0)
                    .wait(1)
                    .to({ x: 479.375, y: -110.725 }, 0)
                    .wait(1)
                    .to({ x: 479.725, y: -116.075 }, 0)
                    .wait(1)
                    .to({ x: 480.025, y: -121.475 }, 0)
                    .wait(1)
                    .to({ x: 480.375, y: -126.875 }, 0)
                    .wait(1)
                    .to({ x: 480.675, y: -132.275 }, 0)
                    .wait(1)
                    .to({ x: 481.025, y: -137.675 }, 0)
                    .wait(1)
                    .to({ x: 481.325, y: -143.075 }, 0)
                    .wait(1)
                    .to({ x: 481.625, y: -148.475 }, 0)
                    .wait(1)
                    .to({ x: 481.975, y: -153.875 }, 0)
                    .wait(1)
                    .to({ x: 482.275, y: -159.275 }, 0)
                    .wait(1)
                    .to({ x: 482.625, y: -164.675 }, 0)
                    .wait(1)
                    .to({ x: 482.925, y: -170.025 }, 0)
                    .wait(1)
                    .to({ x: 483.275, y: -175.425 }, 0)
                    .wait(1)
                    .to({ x: 483.575, y: -180.825 }, 0)
                    .wait(1)
                    .to({ x: 483.925, y: -186.225 }, 0)
                    .wait(1)
                    .to({ x: 484.225, y: -191.625 }, 0)
                    .wait(1)
                    .to({ x: 484.575, y: -197.025 }, 0)
                    .wait(1)
                    .to({ x: 484.875, y: -202.425 }, 0)
                    .wait(1)
                    .to({ x: 485.225, y: -207.825 }, 0)
                    .wait(1)
                    .to({ x: 485.525, y: -213.225 }, 0)
                    .wait(1)
                    .to({ _off: !0 }, 1)
                    .wait(106)
                ),
                  (this.shape_19 = new t.Shape()),
                  this.shape_19.graphics
                    .f("#34CCFE")
                    .s()
                    .p("EhjkARjMAAAgjFMDHJAAAMAAAAjFg"),
                  this.shape_19.setTransform(422.875, 833.675),
                  (this.shape_19._off = !0),
                  (r = [this.shape_19]);
                for (let t = 0; t < r.length; t++) r[t].mask = A;
                this.timeline.addTween(
                  t.Tween.get(this.shape_19)
                    .wait(197)
                    .to({ _off: !1 }, 0)
                    .wait(1)
                    .to({ x: 423.325, y: 826.525 }, 0)
                    .wait(1)
                    .to({ x: 423.725, y: 819.325 }, 0)
                    .wait(1)
                    .to({ x: 424.175, y: 812.175 }, 0)
                    .wait(1)
                    .to({ x: 424.575, y: 804.975 }, 0)
                    .wait(1)
                    .to({ x: 425.025, y: 797.825 }, 0)
                    .wait(1)
                    .to({ x: 425.425, y: 790.675 }, 0)
                    .wait(1)
                    .to({ x: 425.875, y: 783.475 }, 0)
                    .wait(1)
                    .to({ x: 426.325, y: 776.325 }, 0)
                    .wait(1)
                    .to({ x: 426.725, y: 769.125 }, 0)
                    .wait(1)
                    .to({ x: 427.175, y: 761.975 }, 0)
                    .wait(1)
                    .to({ x: 427.575, y: 754.775 }, 0)
                    .wait(1)
                    .to({ x: 428.025, y: 747.625 }, 0)
                    .wait(1)
                    .to({ x: 428.475, y: 740.475 }, 0)
                    .wait(1)
                    .to({ x: 428.875, y: 733.275 }, 0)
                    .wait(1)
                    .to({ x: 429.325, y: 726.125 }, 0)
                    .wait(1)
                    .to({ x: 429.725, y: 718.925 }, 0)
                    .wait(1)
                    .to({ x: 430.175, y: 711.775 }, 0)
                    .wait(1)
                    .to({ x: 430.575, y: 704.625 }, 0)
                    .wait(1)
                    .to({ x: 431.025, y: 697.425 }, 0)
                    .wait(1)
                    .to({ x: 431.475, y: 690.275 }, 0)
                    .wait(1)
                    .to({ x: 431.875, y: 683.125 }, 0)
                    .wait(1)
                    .to({ x: 432.325, y: 675.925 }, 0)
                    .wait(1)
                    .to({ x: 432.725, y: 668.775 }, 0)
                    .wait(1)
                    .to({ x: 433.175, y: 661.575 }, 0)
                    .wait(1)
                    .to({ x: 433.625, y: 654.425 }, 0)
                    .wait(1)
                    .to({ x: 434.025, y: 647.225 }, 0)
                    .wait(1)
                    .to({ x: 434.475, y: 640.075 }, 0)
                    .wait(1)
                    .to({ x: 434.875, y: 632.875 }, 0)
                    .wait(1)
                    .to({ x: 435.325, y: 625.725 }, 0)
                    .wait(1)
                    .to({ x: 435.725, y: 618.575 }, 0)
                    .wait(1)
                    .to({ x: 436.175, y: 611.375 }, 0)
                    .wait(1)
                    .to({ x: 436.625, y: 604.225 }, 0)
                    .wait(1)
                    .to({ x: 437.025, y: 597.025 }, 0)
                    .wait(1)
                    .to({ x: 437.475, y: 589.875 }, 0)
                    .wait(1)
                    .to({ x: 437.875, y: 582.725 }, 0)
                    .wait(1)
                    .to({ x: 438.325, y: 575.525 }, 0)
                    .wait(1)
                    .to({ x: 438.775, y: 568.375 }, 0)
                    .wait(1)
                    .to({ x: 439.175, y: 561.175 }, 0)
                    .wait(1)
                    .to({ x: 439.625, y: 554.025 }, 0)
                    .wait(1)
                    .to({ x: 440.025, y: 546.875 }, 0)
                    .wait(1)
                    .to({ x: 440.475, y: 539.675 }, 0)
                    .wait(1)
                    .to({ x: 440.875, y: 532.525 }, 0)
                    .wait(1)
                    .to({ x: 441.325, y: 525.325 }, 0)
                    .wait(1)
                    .to({ x: 441.775, y: 518.175 }, 0)
                    .wait(1)
                    .to({ x: 442.175, y: 511.025 }, 0)
                    .wait(1)
                    .to({ x: 442.625, y: 503.825 }, 0)
                    .wait(1)
                    .to({ x: 443.025, y: 496.675 }, 0)
                    .wait(1)
                    .to({ x: 443.475, y: 489.475 }, 0)
                    .wait(1)
                    .to({ x: 443.925, y: 482.325 }, 0)
                    .wait(1)
                    .to({ x: 444.325, y: 475.125 }, 0)
                    .wait(1)
                    .to({ x: 444.775, y: 467.975 }, 0)
                    .wait(1)
                    .to({ x: 445.175, y: 460.775 }, 0)
                    .wait(1)
                    .to({ x: 445.625, y: 453.625 }, 0)
                    .wait(1)
                    .to({ x: 446.025, y: 446.475 }, 0)
                    .wait(1)
                    .to({ x: 446.475, y: 439.275 }, 0)
                    .wait(1)
                    .to({ x: 446.925, y: 432.125 }, 0)
                    .wait(1)
                    .to({ x: 447.325, y: 424.975 }, 0)
                    .wait(1)
                    .to({ x: 447.775, y: 417.775 }, 0)
                    .wait(1)
                    .to({ x: 448.175, y: 410.625 }, 0)
                    .wait(1)
                    .to({ x: 448.625, y: 403.425 }, 0)
                    .wait(1)
                    .to({ x: 449.075, y: 396.275 }, 0)
                    .wait(1)
                    .to({ x: 449.475, y: 389.125 }, 0)
                    .wait(1)
                    .to({ x: 449.925, y: 381.925 }, 0)
                    .wait(1)
                    .to({ x: 450.325, y: 374.775 }, 0)
                    .wait(1)
                    .to({ x: 450.775, y: 367.575 }, 0)
                    .wait(1)
                    .to({ x: 451.175, y: 360.425 }, 0)
                    .wait(1)
                    .to({ x: 451.625, y: 353.225 }, 0)
                    .wait(1)
                    .to({ x: 452.075, y: 346.075 }, 0)
                    .wait(1)
                    .to({ x: 452.475, y: 338.925 }, 0)
                    .wait(1)
                    .to({ x: 452.925, y: 331.725 }, 0)
                    .wait(1)
                    .to({ x: 453.325, y: 324.575 }, 0)
                    .wait(1)
                    .to({ x: 453.775, y: 317.375 }, 0)
                    .wait(1)
                    .to({ x: 454.225, y: 310.225 }, 0)
                    .wait(1)
                    .to({ x: 454.625, y: 303.075 }, 0)
                    .wait(1)
                    .to({ x: 455.075, y: 295.875 }, 0)
                    .wait(1)
                    .to({ x: 455.475, y: 288.725 }, 0)
                    .wait(1)
                    .to({ x: 455.925, y: 281.525 }, 0)
                    .wait(1)
                    .to({ x: 456.325, y: 274.375 }, 0)
                    .wait(1)
                    .to({ x: 456.775, y: 267.225 }, 0)
                    .wait(1)
                    .to({ x: 457.225, y: 260.025 }, 0)
                    .wait(1)
                    .to({ x: 457.625, y: 252.875 }, 0)
                    .wait(1)
                    .to({ x: 458.075, y: 245.675 }, 0)
                    .wait(1)
                    .to({ x: 458.475, y: 238.525 }, 0)
                    .wait(1)
                    .to({ x: 458.925, y: 231.325 }, 0)
                    .wait(1)
                    .to({ x: 459.325, y: 224.175 }, 0)
                    .wait(1)
                    .to({ x: 459.775, y: 217.025 }, 0)
                    .wait(1)
                    .to({ x: 460.225, y: 209.825 }, 0)
                    .wait(1)
                    .to({ x: 460.625, y: 202.675 }, 0)
                    .wait(1)
                    .to({ x: 461.075, y: 195.475 }, 0)
                    .wait(1)
                    .to({ x: 461.475, y: 188.325 }, 0)
                    .wait(1)
                    .to({ x: 461.925, y: 181.175 }, 0)
                    .wait(1)
                    .to({ x: 462.375, y: 173.975 }, 0)
                    .wait(1)
                    .to({ x: 462.775, y: 166.825 }, 0)
                    .wait(1)
                    .to({ x: 463.225, y: 159.675 }, 0)
                    .wait(1)
                    .to({ x: 463.625, y: 152.475 }, 0)
                    .wait(1)
                    .to({ x: 464.075, y: 145.325 }, 0)
                    .wait(1)
                    .to({ x: 464.475, y: 138.125 }, 0)
                    .wait(1)
                    .to({ x: 464.925, y: 130.975 }, 0)
                    .wait(1)
                    .to({ x: 465.375, y: 123.775 }, 0)
                    .wait(1)
                    .to({ x: 465.775, y: 116.625 }, 0)
                    .wait(1)
                    .to({ x: 466.225, y: 109.425 }, 0)
                    .wait(1)
                    .to({ x: 466.625, y: 102.275 }, 0)
                    .wait(1)
                    .to({ x: 467.075, y: 95.125 }, 0)
                    .wait(1)
                    .to({ x: 467.525, y: 87.925 }, 0)
                    .wait(1)
                    .to({ x: 467.925, y: 80.775 }, 0)
                    .wait(1)
                    .to({ x: 468.375, y: 73.575 }, 0)
                    .wait(1)
                    .to({ x: 468.775, y: 66.425 }, 0)
                    .wait(1)
                    .to({ x: 469.225, y: 59.275 }, 0)
                    .wait(1)
                    .to({ x: 469.625, y: 52.075 }, 0)
                    .wait(1)
                    .to({ x: 470.075, y: 44.925 }, 0)
                    .wait(1)
                    .to({ x: 470.525, y: 37.725 }, 0)
                    .wait(1)
                    .to({ x: 470.925, y: 30.575 }, 0)
                    .wait(1)
                    .to({ x: 471.375, y: 23.425 }, 0)
                    .wait(1)
                    .to({ x: 471.775, y: 16.225 }, 0)
                    .wait(1)
                    .to({ x: 472.225, y: 9.075 }, 0)
                    .wait(1)
                    .to({ x: 472.675, y: 1.875 }, 0)
                    .wait(1)
                    .to({ x: 473.075, y: -5.275 }, 0)
                    .wait(1)
                    .to({ x: 473.525, y: -12.425 }, 0)
                    .wait(1)
                    .to({ x: 473.925, y: -19.625 }, 0)
                    .wait(1)
                    .to({ x: 474.375, y: -26.775 }, 0)
                    .wait(1)
                    .to({ x: 474.775, y: -33.975 }, 0)
                    .wait(1)
                    .to({ x: 475.225, y: -41.125 }, 0)
                    .wait(1)
                    .to({ x: 475.675, y: -48.325 }, 0)
                    .wait(1)
                    .to({ x: 476.075, y: -55.475 }, 0)
                    .wait(1)
                    .to({ x: 476.525, y: -62.675 }, 0)
                    .wait(1)
                    .to({ x: 476.925, y: -69.825 }, 0)
                    .wait(1)
                    .to({ x: 477.375, y: -76.975 }, 0)
                    .wait(1)
                    .to({ x: 477.825, y: -84.175 }, 0)
                    .wait(1)
                    .to({ x: 478.225, y: -91.325 }, 0)
                    .wait(1)
                    .to({ x: 478.675, y: -98.475 }, 0)
                    .wait(1)
                    .to({ x: 479.075, y: -105.675 }, 0)
                    .wait(1)
                    .to({ x: 479.525, y: -112.825 }, 0)
                    .wait(1)
                    .to({ x: 479.925, y: -120.025 }, 0)
                    .wait(1)
                    .to({ x: 480.375, y: -127.175 }, 0)
                    .wait(1)
                    .to({ x: 480.825, y: -134.325 }, 0)
                    .wait(1)
                    .to({ x: 481.225, y: -141.525 }, 0)
                    .wait(1)
                    .to({ x: 481.675, y: -148.675 }, 0)
                    .wait(1)
                    .to({ x: 482.075, y: -155.875 }, 0)
                    .wait(1)
                    .to({ x: 482.525, y: -163.025 }, 0)
                    .wait(1)
                    .to({ x: 482.975, y: -170.225 }, 0)
                    .wait(1)
                    .to({ x: 483.375, y: -177.375 }, 0)
                    .wait(1)
                    .to({ x: 483.825, y: -184.525 }, 0)
                    .wait(1)
                    .to({ x: 484.225, y: -191.725 }, 0)
                    .wait(1)
                    .to({ x: 484.675, y: -198.875 }, 0)
                    .wait(1)
                    .to({ x: 485.075, y: -206.075 }, 0)
                    .wait(1)
                    .to({ x: 485.525, y: -213.225 }, 0)
                    .wait(1)
                    .to({ _off: !0 }, 1)
                    .wait(54)
                ),
                  (this.shape_20 = new t.Shape()),
                  this.shape_20.graphics
                    .f("#FF991B")
                    .s()
                    .p("EhjkARjMAAAgjFMDHJAAAMAAAAjFg"),
                  this.shape_20.setTransform(422.875, 926.925),
                  (this.shape_20._off = !0),
                  (r = [this.shape_20]);
                for (let t = 0; t < r.length; t++) r[t].mask = A;
                this.timeline.addTween(
                  t.Tween.get(this.shape_20)
                    .wait(294)
                    .to({ _off: !1 }, 0)
                    .wait(1)
                    .to({ x: 423.325, y: 918.875 }, 0)
                    .wait(1)
                    .to({ x: 423.775, y: 910.825 }, 0)
                    .wait(1)
                    .to({ x: 424.225, y: 902.775 }, 0)
                    .wait(1)
                    .to({ x: 424.625, y: 894.725 }, 0)
                    .wait(1)
                    .to({ x: 425.075, y: 886.675 }, 0)
                    .wait(1)
                    .to({ x: 425.525, y: 878.625 }, 0)
                    .wait(1)
                    .to({ x: 425.975, y: 870.625 }, 0)
                    .wait(1)
                    .to({ x: 426.425, y: 862.575 }, 0)
                    .wait(1)
                    .to({ x: 426.875, y: 854.525 }, 0)
                    .wait(1)
                    .to({ x: 427.275, y: 846.475 }, 0)
                    .wait(1)
                    .to({ x: 427.725, y: 838.425 }, 0)
                    .wait(1)
                    .to({ x: 428.175, y: 830.375 }, 0)
                    .wait(1)
                    .to({ x: 428.625, y: 822.325 }, 0)
                    .wait(1)
                    .to({ x: 429.075, y: 814.275 }, 0)
                    .wait(1)
                    .to({ x: 429.525, y: 806.225 }, 0)
                    .wait(1)
                    .to({ x: 429.975, y: 798.175 }, 0)
                    .wait(1)
                    .to({ x: 430.375, y: 790.125 }, 0)
                    .wait(1)
                    .to({ x: 430.825, y: 782.075 }, 0)
                    .wait(1)
                    .to({ x: 431.275, y: 774.025 }, 0)
                    .wait(1)
                    .to({ x: 431.725, y: 766.025 }, 0)
                    .wait(1)
                    .to({ x: 432.175, y: 757.975 }, 0)
                    .wait(1)
                    .to({ x: 432.625, y: 749.925 }, 0)
                    .wait(1)
                    .to({ x: 433.025, y: 741.875 }, 0)
                    .wait(1)
                    .to({ x: 433.475, y: 733.825 }, 0)
                    .wait(1)
                    .to({ x: 433.925, y: 725.775 }, 0)
                    .wait(1)
                    .to({ x: 434.375, y: 717.725 }, 0)
                    .wait(1)
                    .to({ x: 434.825, y: 709.675 }, 0)
                    .wait(1)
                    .to({ x: 435.275, y: 701.625 }, 0)
                    .wait(1)
                    .to({ x: 435.725, y: 693.575 }, 0)
                    .wait(1)
                    .to({ x: 436.125, y: 685.525 }, 0)
                    .wait(1)
                    .to({ x: 436.575, y: 677.475 }, 0)
                    .wait(1)
                    .to({ x: 437.025, y: 669.425 }, 0)
                    .wait(1)
                    .to({ x: 437.475, y: 661.425 }, 0)
                    .wait(1)
                    .to({ x: 437.925, y: 653.375 }, 0)
                    .wait(1)
                    .to({ x: 438.375, y: 645.325 }, 0)
                    .wait(1)
                    .to({ x: 438.775, y: 637.275 }, 0)
                    .wait(1)
                    .to({ x: 439.225, y: 629.225 }, 0)
                    .wait(1)
                    .to({ x: 439.675, y: 621.175 }, 0)
                    .wait(1)
                    .to({ x: 440.125, y: 613.125 }, 0)
                    .wait(1)
                    .to({ x: 440.575, y: 605.075 }, 0)
                    .wait(1)
                    .to({ x: 441.025, y: 597.025 }, 0)
                    .wait(1)
                    .to({ x: 441.475, y: 588.975 }, 0)
                    .wait(1)
                    .to({ x: 441.875, y: 580.925 }, 0)
                    .wait(1)
                    .to({ x: 442.325, y: 572.875 }, 0)
                    .wait(1)
                    .to({ x: 442.775, y: 564.825 }, 0)
                    .wait(1)
                    .to({ x: 443.225, y: 556.825 }, 0)
                    .wait(1)
                    .to({ x: 443.675, y: 548.775 }, 0)
                    .wait(1)
                    .to({ x: 444.125, y: 540.725 }, 0)
                    .wait(1)
                    .to({ x: 444.525, y: 532.675 }, 0)
                    .wait(1)
                    .to({ x: 444.975, y: 524.625 }, 0)
                    .wait(1)
                    .to({ x: 445.425, y: 516.575 }, 0)
                    .wait(1)
                    .to({ x: 445.875, y: 508.525 }, 0)
                    .wait(1)
                    .to({ x: 446.325, y: 500.475 }, 0)
                    .wait(1)
                    .to({ x: 446.775, y: 492.425 }, 0)
                    .wait(1)
                    .to({ x: 447.225, y: 484.375 }, 0)
                    .wait(1)
                    .to({ x: 447.625, y: 476.325 }, 0)
                    .wait(1)
                    .to({ x: 448.075, y: 468.275 }, 0)
                    .wait(1)
                    .to({ x: 448.525, y: 460.225 }, 0)
                    .wait(1)
                    .to({ x: 448.975, y: 452.225 }, 0)
                    .wait(1)
                    .to({ x: 449.425, y: 444.175 }, 0)
                    .wait(1)
                    .to({ x: 449.875, y: 436.125 }, 0)
                    .wait(1)
                    .to({ x: 450.275, y: 428.075 }, 0)
                    .wait(1)
                    .to({ x: 450.725, y: 420.025 }, 0)
                    .wait(1)
                    .to({ x: 451.175, y: 411.975 }, 0)
                    .wait(1)
                    .to({ x: 451.625, y: 403.925 }, 0)
                    .wait(1)
                    .to({ x: 452.075, y: 395.875 }, 0)
                    .wait(1)
                    .to({ x: 452.525, y: 387.825 }, 0)
                    .wait(1)
                    .to({ x: 452.975, y: 379.775 }, 0)
                    .wait(1)
                    .to({ x: 453.375, y: 371.725 }, 0)
                    .wait(1)
                    .to({ x: 453.825, y: 363.675 }, 0)
                    .wait(1)
                    .to({ x: 454.275, y: 355.625 }, 0)
                    .wait(1)
                    .to({ x: 454.725, y: 347.625 }, 0)
                    .wait(1)
                    .to({ x: 455.175, y: 339.575 }, 0)
                    .wait(1)
                    .to({ x: 455.625, y: 331.525 }, 0)
                    .wait(1)
                    .to({ x: 456.025, y: 323.475 }, 0)
                    .wait(1)
                    .to({ x: 456.475, y: 315.425 }, 0)
                    .wait(1)
                    .to({ x: 456.925, y: 307.375 }, 0)
                    .wait(1)
                    .to({ x: 457.375, y: 299.325 }, 0)
                    .wait(1)
                    .to({ x: 457.825, y: 291.275 }, 0)
                    .wait(1)
                    .to({ x: 458.275, y: 283.225 }, 0)
                    .wait(1)
                    .to({ x: 458.725, y: 275.175 }, 0)
                    .wait(1)
                    .to({ x: 459.125, y: 267.125 }, 0)
                    .wait(1)
                    .to({ x: 459.575, y: 259.075 }, 0)
                    .wait(1)
                    .to({ x: 460.025, y: 251.025 }, 0)
                    .wait(1)
                    .to({ x: 460.475, y: 243.025 }, 0)
                    .wait(1)
                    .to({ x: 460.925, y: 234.975 }, 0)
                    .wait(1)
                    .to({ x: 461.375, y: 226.925 }, 0)
                    .wait(1)
                    .to({ x: 461.775, y: 218.875 }, 0)
                    .wait(1)
                    .to({ x: 462.225, y: 210.825 }, 0)
                    .wait(1)
                    .to({ x: 462.675, y: 202.775 }, 0)
                    .wait(1)
                    .to({ x: 463.125, y: 194.725 }, 0)
                    .wait(1)
                    .to({ x: 463.575, y: 186.675 }, 0)
                    .wait(1)
                    .to({ x: 464.025, y: 178.625 }, 0)
                    .wait(1)
                    .to({ x: 464.475, y: 170.575 }, 0)
                    .wait(1)
                    .to({ x: 464.875, y: 162.525 }, 0)
                    .wait(1)
                    .to({ x: 465.325, y: 154.475 }, 0)
                    .wait(1)
                    .to({ x: 465.775, y: 146.425 }, 0)
                    .wait(1)
                    .to({ x: 466.225, y: 138.425 }, 0)
                    .wait(1)
                    .to({ x: 466.675, y: 130.375 }, 0)
                    .wait(1)
                    .to({ x: 467.125, y: 122.325 }, 0)
                    .wait(1)
                    .to({ x: 467.525, y: 114.275 }, 0)
                    .wait(1)
                    .to({ x: 467.975, y: 106.225 }, 0)
                    .wait(1)
                    .to({ x: 468.425, y: 98.175 }, 0)
                    .wait(1)
                    .to({ x: 468.875, y: 90.125 }, 0)
                    .wait(1)
                ),
                  (this.shape_21 = new t.Shape()),
                  this.shape_21.graphics
                    .f("#222222")
                    .s()
                    .p(
                      "EAquBTIMga9gv+QiAjkhVjAQhVjAgRj6MAAAhozIG9AAMAAABozQAbGzFLFQMAvaAxZgEgRRBTIMALbgy/QBJlYgFlFMAAAhozIG9AAMAAABozQAXHwBqFGMANAAwmgEhGzBTIMAtAgxZQFLlQAbmzMAAAhozIG8AAMAAABozQgQD6hVDAQhWDAiBDqMganAv4g"
                    ),
                  this.shape_21.setTransform(607.05, 219.55),
                  this.timeline.addTween(t.Tween.get(this.shape_21).wait(399)),
                  (this.shape_22 = new t.Shape()),
                  this.shape_22.graphics
                    .f("#121212")
                    .s()
                    .p("EhgbA6cMAAAh03MDA3AAAMAAAB03g"),
                  this.shape_22.setTransform(590.925, 352.225),
                  this.timeline.addTween(t.Tween.get(this.shape_22).wait(399)),
                  this._renderFirstFrame();
              }).prototype = a =
                new o.AnMovieClip()),
              (a.nominalBounds = new t.Rectangle(-201.3, 37.5, 1535.7, 714.1)),
              (o.properties = {
                id: "AF29CE90051E47F08E21D6A1B44AA1A3",
                width: 1200,
                height: 700,
                fps: 50,
                color: "#121212",
                opacity: 1,
                manifest: [],
                preloads: [],
              }),
              ((o.Stage = function (t) {
                createjs.Stage.call(this, t);
              }).prototype = a =
                new createjs.Stage()),
              (a.setAutoPlay = function (t) {
                this.tickEnabled = t;
              }),
              (a.play = function () {
                (this.tickEnabled = !0),
                  this.getChildAt(0).gotoAndPlay(this.getTimelinePosition());
              }),
              (a.stop = function (t) {
                t && this.seek(t), (this.tickEnabled = !1);
              }),
              (a.seek = function (t) {
                (this.tickEnabled = !0),
                  this.getChildAt(0).gotoAndStop((o.properties.fps * t) / 1e3);
              }),
              (a.getDuration = function () {
                return (
                  (this.getChildAt(0).totalFrames / o.properties.fps) * 1e3
                );
              }),
              (a.getTimelinePosition = function () {
                return (
                  (this.getChildAt(0).currentFrame / o.properties.fps) * 1e3
                );
              }),
              (i.bootcompsLoaded = i.bootcompsLoaded || []),
              i.bootstrapListeners || (i.bootstrapListeners = []),
              (i.bootstrapCallback = function (t) {
                if (
                  (i.bootstrapListeners.push(t), i.bootcompsLoaded.length > 0)
                )
                  for (let e = 0; e < i.bootcompsLoaded.length; ++e)
                    t(i.bootcompsLoaded[e]);
              }),
              (i.compositions = i.compositions || {}),
              (i.compositions.AF29CE90051E47F08E21D6A1B44AA1A3 = {
                getStage: function () {
                  return (void 0).stage;
                },
                getLibrary: function () {
                  return o;
                },
                getSpriteSheet: function () {
                  return n;
                },
                getImages: function () {
                  return s;
                },
              }),
              (i.compositionLoaded = function (t) {
                i.bootcompsLoaded.push(t);
                for (let e = 0; e < i.bootstrapListeners.length; e++)
                  i.bootstrapListeners[e](t);
              }),
              (i.getComposition = function (t) {
                return i.compositions[t];
              }),
              (i.makeResponsive = function (t, i, a, n, s) {
                let r,
                  h,
                  A = 1;
                function g() {
                  let g = o.properties.width,
                    l = o.properties.height,
                    p = window.innerWidth,
                    w = window.innerHeight,
                    y = window.devicePixelRatio || 1,
                    c = p / g,
                    x = w / l,
                    u = 1;
                  t &&
                    (("width" == i && r == p) || ("height" == i && h == w)
                      ? (u = A)
                      : a
                      ? 1 == n
                        ? (u = Math.min(c, x))
                        : 2 == n && (u = Math.max(c, x))
                      : (p < g || w < l) && (u = Math.min(c, x))),
                    (s[0].width = g * y * u),
                    (s[0].height = l * y * u),
                    s.forEach(function (t) {
                      (t.style.width = g * u + "px"),
                        (t.style.height = l * u + "px");
                    }),
                    (e.scaleX = y * u),
                    (e.scaleY = y * u),
                    (r = p),
                    (h = w),
                    (A = u),
                    (e.tickOnUpdate = !1),
                    e.update(),
                    (e.tickOnUpdate = !0);
                }
                window.addEventListener("resize", g), g();
              }),
              (i.handleSoundStreamOnTick = function (t) {
                if (!t.paused) {
                  let t = e.getChildAt(0);
                  (t.paused && !t.ignorePause) || t.syncStreamSounds();
                }
              }),
              (i.handleFilterCache = function (t) {
                if (!t.paused) {
                  let e = t.target;
                  if (e && e.filterCacheList)
                    for (let t = 0; t < e.filterCacheList.length; t++) {
                      let i = e.filterCacheList[t];
                      i.startFrame <= e.currentFrame &&
                        e.currentFrame <= i.endFrame &&
                        i.instance.cache(i.x, i.y, i.w, i.h);
                    }
                }
              });
          })((createjs = createjs || {}), (s = s || {})),
            a("#about-us-hero").append(
              '<div id="vertical-lines-background"><div id="vertical-lines-animation_container" style="background-color:rgba(21, 21, 21, 1.00); width:900px; height:506px">\n        <canvas id="vertical-lines-canvas" width="900" height="506" style="position: absolute; display: block; background-color:rgba(21, 21, 21, 1.00);"></canvas>\n        <div id="vertical-lines-dom_overlay_container" style="pointer-events:none; overflow:hidden; width:900px; height:506px; position: absolute; left: 0px; top: 0px; display: block;">\n        </div>\n    </div></div>'
            ),
            (function () {
              (t = document.getElementById("vertical-lines-canvas")),
                (i = document.getElementById(
                  "vertical-lines-animation_container"
                )),
                (o = document.getElementById(
                  "vertical-lines-dom_overlay_container"
                ));
              let a = s.getComposition("AF29CE90051E47F08E21D6A1B44AA1A3");
              a.getLibrary(),
                (function (a, r) {
                  let h = r.getLibrary(),
                    A = (r.getSpriteSheet(), new h.columnsyps());
                  (e = new h.Stage(t)),
                    (n = function () {
                      e.addChild(A),
                        (createjs.Ticker.framerate = h.properties.fps),
                        createjs.Ticker.addEventListener("tick", e);
                    }),
                    s.makeResponsive(!1, "both", !1, 1, [t, i, o]),
                    s.compositionLoaded(h.properties.id),
                    n();
                })(0, a);
            })();
        };
      },
      975: function (t, e, i) {
        i.d(e, {
          _Z: function () {
            return vt;
          },
        });
        var a,
          o,
          n,
          s,
          r,
          h,
          A,
          g,
          l = i(317),
          p = {},
          w = 180 / Math.PI,
          y = Math.PI / 180,
          c = Math.atan2,
          x = /([A-Z])/g,
          u = /(left|right|width|margin|padding|x)/i,
          d = /[\s,\(]\S/,
          f = {
            autoAlpha: "opacity,visibility",
            scale: "scaleX,scaleY",
            alpha: "opacity",
          },
          m = function (t, e) {
            return e.set(
              e.t,
              e.p,
              Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
              e
            );
          },
          I = function (t, e) {
            return e.set(
              e.t,
              e.p,
              1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
              e
            );
          },
          _ = function (t, e) {
            return e.set(
              e.t,
              e.p,
              t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b,
              e
            );
          },
          B = function (t, e) {
            var i = e.s + e.c * t;
            e.set(e.t, e.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + e.u, e);
          },
          v = function (t, e) {
            return e.set(e.t, e.p, t ? e.e : e.b, e);
          },
          C = function (t, e) {
            return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
          },
          b = function (t, e, i) {
            return (t.style[e] = i);
          },
          T = function (t, e, i) {
            return t.style.setProperty(e, i);
          },
          M = function (t, e, i) {
            return (t._gsap[e] = i);
          },
          E = function (t, e, i) {
            return (t._gsap.scaleX = t._gsap.scaleY = i);
          },
          Q = function (t, e, i, a, o) {
            var n = t._gsap;
            (n.scaleX = n.scaleY = i), n.renderTransform(o, n);
          },
          F = function (t, e, i, a, o) {
            var n = t._gsap;
            (n[e] = i), n.renderTransform(o, n);
          },
          S = "transform",
          D = S + "Origin",
          k = function (t, e) {
            var i = this,
              a = this.target,
              o = a.style;
            if (t in p) {
              if (
                ((this.tfm = this.tfm || {}),
                "transform" !== t &&
                  (~(t = f[t] || t).indexOf(",")
                    ? t.split(",").forEach(function (t) {
                        return (i.tfm[t] = U(a, t));
                      })
                    : (this.tfm[t] = a._gsap.x ? a._gsap[t] : U(a, t))),
                this.props.indexOf(S) >= 0)
              )
                return;
              a._gsap.svg &&
                ((this.svgo = a.getAttribute("data-svg-origin")),
                this.props.push(D, e, "")),
                (t = S);
            }
            (o || e) && this.props.push(t, e, o[t]);
          },
          P = function (t) {
            t.translate &&
              (t.removeProperty("translate"),
              t.removeProperty("scale"),
              t.removeProperty("rotate"));
          },
          G = function () {
            var t,
              e,
              i = this.props,
              a = this.target,
              o = a.style,
              n = a._gsap;
            for (t = 0; t < i.length; t += 3)
              i[t + 1]
                ? (a[i[t]] = i[t + 2])
                : i[t + 2]
                ? (o[i[t]] = i[t + 2])
                : o.removeProperty(i[t].replace(x, "-$1").toLowerCase());
            if (this.tfm) {
              for (e in this.tfm) n[e] = this.tfm[e];
              n.svg &&
                (n.renderTransform(),
                a.setAttribute("data-svg-origin", this.svgo || "")),
                !(t = A()) || t.isStart || o[S] || (P(o), (n.uncache = 1));
            }
          },
          L = function (t, e) {
            var i = { target: t, props: [], revert: G, save: k };
            return (
              e &&
                e.split(",").forEach(function (t) {
                  return i.save(t);
                }),
              i
            );
          },
          O = function (t, e) {
            var i = o.createElementNS
              ? o.createElementNS(
                  (e || "http://www.w3.org/1999/xhtml").replace(
                    /^https/,
                    "http"
                  ),
                  t
                )
              : o.createElement(t);
            return i.style ? i : o.createElement(t);
          },
          H = function t(e, i, a) {
            var o = getComputedStyle(e);
            return (
              o[i] ||
              o.getPropertyValue(i.replace(x, "-$1").toLowerCase()) ||
              o.getPropertyValue(i) ||
              (!a && t(e, J(i) || i, 1)) ||
              ""
            );
          },
          R = "O,Moz,ms,Ms,Webkit".split(","),
          J = function (t, e, i) {
            var a = (e || r).style,
              o = 5;
            if (t in a && !i) return t;
            for (
              t = t.charAt(0).toUpperCase() + t.substr(1);
              o-- && !(R[o] + t in a);

            );
            return o < 0 ? null : (3 === o ? "ms" : o >= 0 ? R[o] : "") + t;
          },
          j = function () {
            "undefined" != typeof window &&
              window.document &&
              ((a = window),
              (o = a.document),
              (n = o.documentElement),
              (r = O("div") || { style: {} }),
              O("div"),
              (S = J(S)),
              (D = S + "Origin"),
              (r.style.cssText =
                "border-width:0;line-height:0;position:absolute;padding:0"),
              (g = !!J("perspective")),
              (A = l.p8.core.reverting),
              (s = 1));
          },
          N = function t(e) {
            var i,
              a = O(
                "svg",
                (this.ownerSVGElement &&
                  this.ownerSVGElement.getAttribute("xmlns")) ||
                  "http://www.w3.org/2000/svg"
              ),
              o = this.parentNode,
              s = this.nextSibling,
              r = this.style.cssText;
            if (
              (n.appendChild(a),
              a.appendChild(this),
              (this.style.display = "block"),
              e)
            )
              try {
                (i = this.getBBox()),
                  (this._gsapBBox = this.getBBox),
                  (this.getBBox = t);
              } catch (t) {}
            else this._gsapBBox && (i = this._gsapBBox());
            return (
              o && (s ? o.insertBefore(this, s) : o.appendChild(this)),
              n.removeChild(a),
              (this.style.cssText = r),
              i
            );
          },
          Y = function (t, e) {
            for (var i = e.length; i--; )
              if (t.hasAttribute(e[i])) return t.getAttribute(e[i]);
          },
          z = function (t) {
            var e;
            try {
              e = t.getBBox();
            } catch (i) {
              e = N.call(t, !0);
            }
            return (
              (e && (e.width || e.height)) ||
                t.getBBox === N ||
                (e = N.call(t, !0)),
              !e || e.width || e.x || e.y
                ? e
                : {
                    x: +Y(t, ["x", "cx", "x1"]) || 0,
                    y: +Y(t, ["y", "cy", "y1"]) || 0,
                    width: 0,
                    height: 0,
                  }
            );
          },
          X = function (t) {
            return !(
              !t.getCTM ||
              (t.parentNode && !t.ownerSVGElement) ||
              !z(t)
            );
          },
          K = function (t, e) {
            if (e) {
              var i = t.style;
              e in p && e !== D && (e = S),
                i.removeProperty
                  ? (("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6)) ||
                      (e = "-" + e),
                    i.removeProperty(e.replace(x, "-$1").toLowerCase()))
                  : i.removeAttribute(e);
            }
          },
          Z = function (t, e, i, a, o, n) {
            var s = new l.Fo(t._pt, e, i, 0, 1, n ? C : v);
            return (t._pt = s), (s.b = a), (s.e = o), t._props.push(i), s;
          },
          V = { deg: 1, rad: 1, turn: 1 },
          W = { grid: 1, flex: 1 },
          q = function t(e, i, a, n) {
            var s,
              h,
              A,
              g,
              w = parseFloat(a) || 0,
              y = (a + "").trim().substr((w + "").length) || "px",
              c = r.style,
              x = u.test(i),
              d = "svg" === e.tagName.toLowerCase(),
              f = (d ? "client" : "offset") + (x ? "Width" : "Height"),
              m = 100,
              I = "px" === n,
              _ = "%" === n;
            return n === y || !w || V[n] || V[y]
              ? w
              : ("px" !== y && !I && (w = t(e, i, a, "px")),
                (g = e.getCTM && X(e)),
                (!_ && "%" !== y) || (!p[i] && !~i.indexOf("adius"))
                  ? ((c[x ? "width" : "height"] = m + (I ? y : n)),
                    (h =
                      ~i.indexOf("adius") || ("em" === n && e.appendChild && !d)
                        ? e
                        : e.parentNode),
                    g && (h = (e.ownerSVGElement || {}).parentNode),
                    (h && h !== o && h.appendChild) || (h = o.body),
                    (A = h._gsap) &&
                    _ &&
                    A.width &&
                    x &&
                    A.time === l.xr.time &&
                    !A.uncache
                      ? (0, l.Pr)((w / A.width) * m)
                      : ((_ || "%" === y) &&
                          !W[H(h, "display")] &&
                          (c.position = H(e, "position")),
                        h === e && (c.position = "static"),
                        h.appendChild(r),
                        (s = r[f]),
                        h.removeChild(r),
                        (c.position = "absolute"),
                        x &&
                          _ &&
                          (((A = (0, l.DY)(h)).time = l.xr.time),
                          (A.width = h[f])),
                        (0, l.Pr)(I ? (s * w) / m : s && w ? (m / s) * w : 0)))
                  : ((s = g ? e.getBBox()[x ? "width" : "height"] : e[f]),
                    (0, l.Pr)(_ ? (w / s) * m : (w / 100) * s)));
          },
          U = function (t, e, i, a) {
            var o;
            return (
              s || j(),
              e in f &&
                "transform" !== e &&
                ~(e = f[e]).indexOf(",") &&
                (e = e.split(",")[0]),
              p[e] && "transform" !== e
                ? ((o = At(t, a)),
                  (o =
                    "transformOrigin" !== e
                      ? o[e]
                      : o.svg
                      ? o.origin
                      : gt(H(t, D)) + " " + o.zOrigin + "px"))
                : (!(o = t.style[e]) ||
                    "auto" === o ||
                    a ||
                    ~(o + "").indexOf("calc(")) &&
                  (o =
                    (it[e] && it[e](t, e, i)) ||
                    H(t, e) ||
                    (0, l.Ok)(t, e) ||
                    ("opacity" === e ? 1 : 0)),
              i && !~(o + "").trim().indexOf(" ") ? q(t, e, o, i) + i : o
            );
          },
          $ = function (t, e, i, a) {
            if (!i || "none" === i) {
              var o = J(e, t, 1),
                n = o && H(t, o, 1);
              n && n !== i
                ? ((e = o), (i = n))
                : "borderColor" === e && (i = H(t, "borderTopColor"));
            }
            var s,
              r,
              h,
              A,
              g,
              p,
              w,
              y,
              c,
              x,
              u,
              d = new l.Fo(this._pt, t.style, e, 0, 1, l.Ks),
              f = 0,
              m = 0;
            if (
              ((d.b = i),
              (d.e = a),
              (i += ""),
              "auto" == (a += "") &&
                ((t.style[e] = a), (a = H(t, e) || a), (t.style[e] = i)),
              (s = [i, a]),
              (0, l.kr)(s),
              (a = s[1]),
              (h = (i = s[0]).match(l.d4) || []),
              (a.match(l.d4) || []).length)
            ) {
              for (; (r = l.d4.exec(a)); )
                (w = r[0]),
                  (c = a.substring(f, r.index)),
                  g
                    ? (g = (g + 1) % 5)
                    : ("rgba(" !== c.substr(-5) && "hsla(" !== c.substr(-5)) ||
                      (g = 1),
                  w !== (p = h[m++] || "") &&
                    ((A = parseFloat(p) || 0),
                    (u = p.substr((A + "").length)),
                    "=" === w.charAt(1) && (w = (0, l.cy)(A, w) + u),
                    (y = parseFloat(w)),
                    (x = w.substr((y + "").length)),
                    (f = l.d4.lastIndex - x.length),
                    x ||
                      ((x = x || l.Fc.units[e] || u),
                      f === a.length && ((a += x), (d.e += x))),
                    u !== x && (A = q(t, e, p, x) || 0),
                    (d._pt = {
                      _next: d._pt,
                      p: c || 1 === m ? c : ",",
                      s: A,
                      c: y - A,
                      m: (g && g < 4) || "zIndex" === e ? Math.round : 0,
                    }));
              d.c = f < a.length ? a.substring(f, a.length) : "";
            } else d.r = "display" === e && "none" === a ? C : v;
            return l.bQ.test(a) && (d.e = 0), (this._pt = d), d;
          },
          tt = {
            top: "0%",
            bottom: "100%",
            left: "0%",
            right: "100%",
            center: "50%",
          },
          et = function (t, e) {
            if (e.tween && e.tween._time === e.tween._dur) {
              var i,
                a,
                o,
                n = e.t,
                s = n.style,
                r = e.u,
                h = n._gsap;
              if ("all" === r || !0 === r) (s.cssText = ""), (a = 1);
              else
                for (o = (r = r.split(",")).length; --o > -1; )
                  (i = r[o]),
                    p[i] && ((a = 1), (i = "transformOrigin" === i ? D : S)),
                    K(n, i);
              a &&
                (K(n, S),
                h &&
                  (h.svg && n.removeAttribute("transform"),
                  At(n, 1),
                  (h.uncache = 1),
                  P(s)));
            }
          },
          it = {
            clearProps: function (t, e, i, a, o) {
              if ("isFromStart" !== o.data) {
                var n = (t._pt = new l.Fo(t._pt, e, i, 0, 0, et));
                return (
                  (n.u = a), (n.pr = -10), (n.tween = o), t._props.push(i), 1
                );
              }
            },
          },
          at = [1, 0, 0, 1, 0, 0],
          ot = {},
          nt = function (t) {
            return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
          },
          st = function (t) {
            var e = H(t, S);
            return nt(e) ? at : e.substr(7).match(l.SI).map(l.Pr);
          },
          rt = function (t, e) {
            var i,
              a,
              o,
              s,
              r = t._gsap || (0, l.DY)(t),
              h = t.style,
              A = st(t);
            return r.svg && t.getAttribute("transform")
              ? "1,0,0,1,0,0" ===
                (A = [
                  (o = t.transform.baseVal.consolidate().matrix).a,
                  o.b,
                  o.c,
                  o.d,
                  o.e,
                  o.f,
                ]).join(",")
                ? at
                : A
              : (A !== at ||
                  t.offsetParent ||
                  t === n ||
                  r.svg ||
                  ((o = h.display),
                  (h.display = "block"),
                  ((i = t.parentNode) && t.offsetParent) ||
                    ((s = 1), (a = t.nextElementSibling), n.appendChild(t)),
                  (A = st(t)),
                  o ? (h.display = o) : K(t, "display"),
                  s &&
                    (a
                      ? i.insertBefore(t, a)
                      : i
                      ? i.appendChild(t)
                      : n.removeChild(t))),
                e && A.length > 6 ? [A[0], A[1], A[4], A[5], A[12], A[13]] : A);
          },
          ht = function (t, e, i, a, o, n) {
            var s,
              r,
              h,
              A = t._gsap,
              g = o || rt(t, !0),
              l = A.xOrigin || 0,
              p = A.yOrigin || 0,
              w = A.xOffset || 0,
              y = A.yOffset || 0,
              c = g[0],
              x = g[1],
              u = g[2],
              d = g[3],
              f = g[4],
              m = g[5],
              I = e.split(" "),
              _ = parseFloat(I[0]) || 0,
              B = parseFloat(I[1]) || 0;
            i
              ? g !== at &&
                (r = c * d - x * u) &&
                ((h = _ * (-x / r) + B * (c / r) - (c * m - x * f) / r),
                (_ = _ * (d / r) + B * (-u / r) + (u * m - d * f) / r),
                (B = h))
              : ((_ =
                  (s = z(t)).x +
                  (~I[0].indexOf("%") ? (_ / 100) * s.width : _)),
                (B =
                  s.y +
                  (~(I[1] || I[0]).indexOf("%") ? (B / 100) * s.height : B))),
              a || (!1 !== a && A.smooth)
                ? ((f = _ - l),
                  (m = B - p),
                  (A.xOffset = w + (f * c + m * u) - f),
                  (A.yOffset = y + (f * x + m * d) - m))
                : (A.xOffset = A.yOffset = 0),
              (A.xOrigin = _),
              (A.yOrigin = B),
              (A.smooth = !!a),
              (A.origin = e),
              (A.originIsAbsolute = !!i),
              (t.style[D] = "0px 0px"),
              n &&
                (Z(n, A, "xOrigin", l, _),
                Z(n, A, "yOrigin", p, B),
                Z(n, A, "xOffset", w, A.xOffset),
                Z(n, A, "yOffset", y, A.yOffset)),
              t.setAttribute("data-svg-origin", _ + " " + B);
          },
          At = function (t, e) {
            var i = t._gsap || new l.l1(t);
            if ("x" in i && !e && !i.uncache) return i;
            var a,
              o,
              n,
              s,
              r,
              h,
              A,
              p,
              x,
              u,
              d,
              f,
              m,
              I,
              _,
              B,
              v,
              C,
              b,
              T,
              M,
              E,
              Q,
              F,
              k,
              P,
              G,
              L,
              O,
              R,
              J,
              j,
              N = t.style,
              Y = i.scaleX < 0,
              z = "px",
              K = "deg",
              Z = getComputedStyle(t),
              V = H(t, D) || "0";
            return (
              (a = o = n = h = A = p = x = u = d = 0),
              (s = r = 1),
              (i.svg = !(!t.getCTM || !X(t))),
              Z.translate &&
                (("none" === Z.translate &&
                  "none" === Z.scale &&
                  "none" === Z.rotate) ||
                  (N[S] =
                    ("none" !== Z.translate
                      ? "translate3d(" +
                        (Z.translate + " 0 0")
                          .split(" ")
                          .slice(0, 3)
                          .join(", ") +
                        ") "
                      : "") +
                    ("none" !== Z.rotate ? "rotate(" + Z.rotate + ") " : "") +
                    ("none" !== Z.scale
                      ? "scale(" + Z.scale.split(" ").join(",") + ") "
                      : "") +
                    ("none" !== Z[S] ? Z[S] : "")),
                (N.scale = N.rotate = N.translate = "none")),
              (I = rt(t, i.svg)),
              i.svg &&
                (i.uncache
                  ? ((k = t.getBBox()),
                    (V = i.xOrigin - k.x + "px " + (i.yOrigin - k.y) + "px"),
                    (F = ""))
                  : (F = !e && t.getAttribute("data-svg-origin")),
                ht(t, F || V, !!F || i.originIsAbsolute, !1 !== i.smooth, I)),
              (f = i.xOrigin || 0),
              (m = i.yOrigin || 0),
              I !== at &&
                ((C = I[0]),
                (b = I[1]),
                (T = I[2]),
                (M = I[3]),
                (a = E = I[4]),
                (o = Q = I[5]),
                6 === I.length
                  ? ((s = Math.sqrt(C * C + b * b)),
                    (r = Math.sqrt(M * M + T * T)),
                    (h = C || b ? c(b, C) * w : 0),
                    (x = T || M ? c(T, M) * w + h : 0) &&
                      (r *= Math.abs(Math.cos(x * y))),
                    i.svg &&
                      ((a -= f - (f * C + m * T)), (o -= m - (f * b + m * M))))
                  : ((j = I[6]),
                    (R = I[7]),
                    (G = I[8]),
                    (L = I[9]),
                    (O = I[10]),
                    (J = I[11]),
                    (a = I[12]),
                    (o = I[13]),
                    (n = I[14]),
                    (A = (_ = c(j, O)) * w),
                    _ &&
                      ((F = E * (B = Math.cos(-_)) + G * (v = Math.sin(-_))),
                      (k = Q * B + L * v),
                      (P = j * B + O * v),
                      (G = E * -v + G * B),
                      (L = Q * -v + L * B),
                      (O = j * -v + O * B),
                      (J = R * -v + J * B),
                      (E = F),
                      (Q = k),
                      (j = P)),
                    (p = (_ = c(-T, O)) * w),
                    _ &&
                      ((B = Math.cos(-_)),
                      (J = M * (v = Math.sin(-_)) + J * B),
                      (C = F = C * B - G * v),
                      (b = k = b * B - L * v),
                      (T = P = T * B - O * v)),
                    (h = (_ = c(b, C)) * w),
                    _ &&
                      ((F = C * (B = Math.cos(_)) + b * (v = Math.sin(_))),
                      (k = E * B + Q * v),
                      (b = b * B - C * v),
                      (Q = Q * B - E * v),
                      (C = F),
                      (E = k)),
                    A &&
                      Math.abs(A) + Math.abs(h) > 359.9 &&
                      ((A = h = 0), (p = 180 - p)),
                    (s = (0, l.Pr)(Math.sqrt(C * C + b * b + T * T))),
                    (r = (0, l.Pr)(Math.sqrt(Q * Q + j * j))),
                    (_ = c(E, Q)),
                    (x = Math.abs(_) > 2e-4 ? _ * w : 0),
                    (d = J ? 1 / (J < 0 ? -J : J) : 0)),
                i.svg &&
                  ((F = t.getAttribute("transform")),
                  (i.forceCSS =
                    t.setAttribute("transform", "") || !nt(H(t, S))),
                  F && t.setAttribute("transform", F))),
              Math.abs(x) > 90 &&
                Math.abs(x) < 270 &&
                (Y
                  ? ((s *= -1),
                    (x += h <= 0 ? 180 : -180),
                    (h += h <= 0 ? 180 : -180))
                  : ((r *= -1), (x += x <= 0 ? 180 : -180))),
              (e = e || i.uncache),
              (i.x =
                a -
                ((i.xPercent =
                  a &&
                  ((!e && i.xPercent) ||
                    (Math.round(t.offsetWidth / 2) === Math.round(-a)
                      ? -50
                      : 0)))
                  ? (t.offsetWidth * i.xPercent) / 100
                  : 0) +
                z),
              (i.y =
                o -
                ((i.yPercent =
                  o &&
                  ((!e && i.yPercent) ||
                    (Math.round(t.offsetHeight / 2) === Math.round(-o)
                      ? -50
                      : 0)))
                  ? (t.offsetHeight * i.yPercent) / 100
                  : 0) +
                z),
              (i.z = n + z),
              (i.scaleX = (0, l.Pr)(s)),
              (i.scaleY = (0, l.Pr)(r)),
              (i.rotation = (0, l.Pr)(h) + K),
              (i.rotationX = (0, l.Pr)(A) + K),
              (i.rotationY = (0, l.Pr)(p) + K),
              (i.skewX = x + K),
              (i.skewY = u + K),
              (i.transformPerspective = d + z),
              (i.zOrigin = parseFloat(V.split(" ")[2]) || 0) && (N[D] = gt(V)),
              (i.xOffset = i.yOffset = 0),
              (i.force3D = l.Fc.force3D),
              (i.renderTransform = i.svg ? ut : g ? xt : pt),
              (i.uncache = 0),
              i
            );
          },
          gt = function (t) {
            return (t = t.split(" "))[0] + " " + t[1];
          },
          lt = function (t, e, i) {
            var a = (0, l.Wy)(e);
            return (
              (0, l.Pr)(parseFloat(e) + parseFloat(q(t, "x", i + "px", a))) + a
            );
          },
          pt = function (t, e) {
            (e.z = "0px"),
              (e.rotationY = e.rotationX = "0deg"),
              (e.force3D = 0),
              xt(t, e);
          },
          wt = "0deg",
          yt = "0px",
          ct = ") ",
          xt = function (t, e) {
            var i = e || this,
              a = i.xPercent,
              o = i.yPercent,
              n = i.x,
              s = i.y,
              r = i.z,
              h = i.rotation,
              A = i.rotationY,
              g = i.rotationX,
              l = i.skewX,
              p = i.skewY,
              w = i.scaleX,
              c = i.scaleY,
              x = i.transformPerspective,
              u = i.force3D,
              d = i.target,
              f = i.zOrigin,
              m = "",
              I = ("auto" === u && t && 1 !== t) || !0 === u;
            if (f && (g !== wt || A !== wt)) {
              var _,
                B = parseFloat(A) * y,
                v = Math.sin(B),
                C = Math.cos(B);
              (B = parseFloat(g) * y),
                (_ = Math.cos(B)),
                (n = lt(d, n, v * _ * -f)),
                (s = lt(d, s, -Math.sin(B) * -f)),
                (r = lt(d, r, C * _ * -f + f));
            }
            x !== yt && (m += "perspective(" + x + ct),
              (a || o) && (m += "translate(" + a + "%, " + o + "%) "),
              (I || n !== yt || s !== yt || r !== yt) &&
                (m +=
                  r !== yt || I
                    ? "translate3d(" + n + ", " + s + ", " + r + ") "
                    : "translate(" + n + ", " + s + ct),
              h !== wt && (m += "rotate(" + h + ct),
              A !== wt && (m += "rotateY(" + A + ct),
              g !== wt && (m += "rotateX(" + g + ct),
              (l === wt && p === wt) || (m += "skew(" + l + ", " + p + ct),
              (1 === w && 1 === c) || (m += "scale(" + w + ", " + c + ct),
              (d.style[S] = m || "translate(0, 0)");
          },
          ut = function (t, e) {
            var i,
              a,
              o,
              n,
              s,
              r = e || this,
              h = r.xPercent,
              A = r.yPercent,
              g = r.x,
              p = r.y,
              w = r.rotation,
              c = r.skewX,
              x = r.skewY,
              u = r.scaleX,
              d = r.scaleY,
              f = r.target,
              m = r.xOrigin,
              I = r.yOrigin,
              _ = r.xOffset,
              B = r.yOffset,
              v = r.forceCSS,
              C = parseFloat(g),
              b = parseFloat(p);
            (w = parseFloat(w)),
              (c = parseFloat(c)),
              (x = parseFloat(x)) && ((c += x = parseFloat(x)), (w += x)),
              w || c
                ? ((w *= y),
                  (c *= y),
                  (i = Math.cos(w) * u),
                  (a = Math.sin(w) * u),
                  (o = Math.sin(w - c) * -d),
                  (n = Math.cos(w - c) * d),
                  c &&
                    ((x *= y),
                    (s = Math.tan(c - x)),
                    (o *= s = Math.sqrt(1 + s * s)),
                    (n *= s),
                    x &&
                      ((s = Math.tan(x)),
                      (i *= s = Math.sqrt(1 + s * s)),
                      (a *= s))),
                  (i = (0, l.Pr)(i)),
                  (a = (0, l.Pr)(a)),
                  (o = (0, l.Pr)(o)),
                  (n = (0, l.Pr)(n)))
                : ((i = u), (n = d), (a = o = 0)),
              ((C && !~(g + "").indexOf("px")) ||
                (b && !~(p + "").indexOf("px"))) &&
                ((C = q(f, "x", g, "px")), (b = q(f, "y", p, "px"))),
              (m || I || _ || B) &&
                ((C = (0, l.Pr)(C + m - (m * i + I * o) + _)),
                (b = (0, l.Pr)(b + I - (m * a + I * n) + B))),
              (h || A) &&
                ((s = f.getBBox()),
                (C = (0, l.Pr)(C + (h / 100) * s.width)),
                (b = (0, l.Pr)(b + (A / 100) * s.height))),
              (s =
                "matrix(" +
                i +
                "," +
                a +
                "," +
                o +
                "," +
                n +
                "," +
                C +
                "," +
                b +
                ")"),
              f.setAttribute("transform", s),
              v && (f.style[S] = s);
          },
          dt = function (t, e, i, a, o) {
            var n,
              s,
              r = 360,
              h = (0, l.r9)(o),
              A = parseFloat(o) * (h && ~o.indexOf("rad") ? w : 1) - a,
              g = a + A + "deg";
            return (
              h &&
                ("short" === (n = o.split("_")[1]) &&
                  (A %= r) != A % 180 &&
                  (A += A < 0 ? r : -360),
                "cw" === n && A < 0
                  ? (A = ((A + 36e9) % r) - ~~(A / r) * r)
                  : "ccw" === n &&
                    A > 0 &&
                    (A = ((A - 36e9) % r) - ~~(A / r) * r)),
              (t._pt = s = new l.Fo(t._pt, e, i, a, A, I)),
              (s.e = g),
              (s.u = "deg"),
              t._props.push(i),
              s
            );
          },
          ft = function (t, e) {
            for (var i in e) t[i] = e[i];
            return t;
          },
          mt = function (t, e, i) {
            var a,
              o,
              n,
              s,
              r,
              h,
              A,
              g = ft({}, i._gsap),
              w = i.style;
            for (o in (g.svg
              ? ((n = i.getAttribute("transform")),
                i.setAttribute("transform", ""),
                (w[S] = e),
                (a = At(i, 1)),
                K(i, S),
                i.setAttribute("transform", n))
              : ((n = getComputedStyle(i)[S]),
                (w[S] = e),
                (a = At(i, 1)),
                (w[S] = n)),
            p))
              (n = g[o]) !== (s = a[o]) &&
                "perspective,force3D,transformOrigin,svgOrigin".indexOf(o) <
                  0 &&
                ((r =
                  (0, l.Wy)(n) !== (A = (0, l.Wy)(s))
                    ? q(i, o, n, A)
                    : parseFloat(n)),
                (h = parseFloat(s)),
                (t._pt = new l.Fo(t._pt, a, o, r, h - r, m)),
                (t._pt.u = A || 0),
                t._props.push(o));
            ft(a, g);
          };
        (0, l.fS)("padding,margin,Width,Radius", function (t, e) {
          var i = "Top",
            a = "Right",
            o = "Bottom",
            n = "Left",
            s = (e < 3 ? [i, a, o, n] : [i + n, i + a, o + a, o + n]).map(
              function (i) {
                return e < 2 ? t + i : "border" + i + t;
              }
            );
          it[e > 1 ? "border" + t : t] = function (t, e, i, a, o) {
            var n, r;
            if (arguments.length < 4)
              return (
                (n = s.map(function (e) {
                  return U(t, e, i);
                })),
                5 === (r = n.join(" ")).split(n[0]).length ? n[0] : r
              );
            (n = (a + "").split(" ")),
              (r = {}),
              s.forEach(function (t, e) {
                return (r[t] = n[e] = n[e] || n[((e - 1) / 2) | 0]);
              }),
              t.init(e, r, o);
          };
        });
        var It,
          _t,
          Bt,
          vt = {
            name: "css",
            register: j,
            targetTest: function (t) {
              return t.style && t.nodeType;
            },
            init: function (t, e, i, a, o) {
              var n,
                r,
                h,
                A,
                g,
                w,
                y,
                c,
                x,
                u,
                I,
                v,
                C,
                b,
                T,
                M,
                E,
                Q,
                F,
                k,
                P = this._props,
                G = t.style,
                O = i.vars.startAt;
              for (y in (s || j(),
              (this.styles = this.styles || L(t)),
              (M = this.styles.props),
              (this.tween = i),
              e))
                if (
                  "autoRound" !== y &&
                  ((r = e[y]), !l.$i[y] || !(0, l.if)(y, e, i, a, t, o))
                )
                  if (
                    ((g = typeof r),
                    (w = it[y]),
                    "function" === g && (g = typeof (r = r.call(i, a, t, o))),
                    "string" === g &&
                      ~r.indexOf("random(") &&
                      (r = (0, l.UI)(r)),
                    w)
                  )
                    w(this, t, y, r, i) && (T = 1);
                  else if ("--" === y.substr(0, 2))
                    (n = (getComputedStyle(t).getPropertyValue(y) + "").trim()),
                      (r += ""),
                      (l.GN.lastIndex = 0),
                      l.GN.test(n) || ((c = (0, l.Wy)(n)), (x = (0, l.Wy)(r))),
                      x ? c !== x && (n = q(t, y, n, x) + x) : c && (r += c),
                      this.add(G, "setProperty", n, r, a, o, 0, 0, y),
                      P.push(y),
                      M.push(y, 0, G[y]);
                  else if ("undefined" !== g) {
                    if (
                      (O && y in O
                        ? ((n =
                            "function" == typeof O[y]
                              ? O[y].call(i, a, t, o)
                              : O[y]),
                          (0, l.r9)(n) &&
                            ~n.indexOf("random(") &&
                            (n = (0, l.UI)(n)),
                          (0, l.Wy)(n + "") ||
                            (n += l.Fc.units[y] || (0, l.Wy)(U(t, y)) || ""),
                          "=" === (n + "").charAt(1) && (n = U(t, y)))
                        : (n = U(t, y)),
                      (A = parseFloat(n)),
                      (u =
                        "string" === g &&
                        "=" === r.charAt(1) &&
                        r.substr(0, 2)) && (r = r.substr(2)),
                      (h = parseFloat(r)),
                      y in f &&
                        ("autoAlpha" === y &&
                          (1 === A &&
                            "hidden" === U(t, "visibility") &&
                            h &&
                            (A = 0),
                          M.push("visibility", 0, G.visibility),
                          Z(
                            this,
                            G,
                            "visibility",
                            A ? "inherit" : "hidden",
                            h ? "inherit" : "hidden",
                            !h
                          )),
                        "scale" !== y &&
                          "transform" !== y &&
                          ~(y = f[y]).indexOf(",") &&
                          (y = y.split(",")[0])),
                      (I = y in p))
                    )
                      if (
                        (this.styles.save(y),
                        v ||
                          (((C = t._gsap).renderTransform &&
                            !e.parseTransform) ||
                            At(t, e.parseTransform),
                          (b = !1 !== e.smoothOrigin && C.smooth),
                          ((v = this._pt =
                            new l.Fo(
                              this._pt,
                              G,
                              S,
                              0,
                              1,
                              C.renderTransform,
                              C,
                              0,
                              -1
                            )).dep = 1)),
                        "scale" === y)
                      )
                        (this._pt = new l.Fo(
                          this._pt,
                          C,
                          "scaleY",
                          C.scaleY,
                          (u ? (0, l.cy)(C.scaleY, u + h) : h) - C.scaleY || 0,
                          m
                        )),
                          (this._pt.u = 0),
                          P.push("scaleY", y),
                          (y += "X");
                      else {
                        if ("transformOrigin" === y) {
                          M.push(D, 0, G[D]),
                            (Q = void 0),
                            (F = void 0),
                            (k = void 0),
                            (F = (Q = (E = r).split(" "))[0]),
                            (k = Q[1] || "50%"),
                            ("top" !== F &&
                              "bottom" !== F &&
                              "left" !== k &&
                              "right" !== k) ||
                              ((E = F), (F = k), (k = E)),
                            (Q[0] = tt[F] || F),
                            (Q[1] = tt[k] || k),
                            (r = Q.join(" ")),
                            C.svg
                              ? ht(t, r, 0, b, 0, this)
                              : ((x = parseFloat(r.split(" ")[2]) || 0) !==
                                  C.zOrigin &&
                                  Z(this, C, "zOrigin", C.zOrigin, x),
                                Z(this, G, y, gt(n), gt(r)));
                          continue;
                        }
                        if ("svgOrigin" === y) {
                          ht(t, r, 1, b, 0, this);
                          continue;
                        }
                        if (y in ot) {
                          dt(this, C, y, A, u ? (0, l.cy)(A, u + r) : r);
                          continue;
                        }
                        if ("smoothOrigin" === y) {
                          Z(this, C, "smooth", C.smooth, r);
                          continue;
                        }
                        if ("force3D" === y) {
                          C[y] = r;
                          continue;
                        }
                        if ("transform" === y) {
                          mt(this, r, t);
                          continue;
                        }
                      }
                    else y in G || (y = J(y) || y);
                    if (
                      I ||
                      ((h || 0 === h) && (A || 0 === A) && !d.test(r) && y in G)
                    )
                      h || (h = 0),
                        (c = (n + "").substr((A + "").length)) !==
                          (x =
                            (0, l.Wy)(r) ||
                            (y in l.Fc.units ? l.Fc.units[y] : c)) &&
                          (A = q(t, y, n, x)),
                        (this._pt = new l.Fo(
                          this._pt,
                          I ? C : G,
                          y,
                          A,
                          (u ? (0, l.cy)(A, u + h) : h) - A,
                          I ||
                          ("px" !== x && "zIndex" !== y) ||
                          !1 === e.autoRound
                            ? m
                            : B
                        )),
                        (this._pt.u = x || 0),
                        c !== x &&
                          "%" !== x &&
                          ((this._pt.b = n), (this._pt.r = _));
                    else if (y in G) $.call(this, t, y, n, u ? u + r : r);
                    else if (y in t)
                      this.add(t, y, n || t[y], u ? u + r : r, a, o);
                    else if ("parseTransform" !== y) {
                      (0, l.lC)(y, r);
                      continue;
                    }
                    I ||
                      (y in G ? M.push(y, 0, G[y]) : M.push(y, 1, n || t[y])),
                      P.push(y);
                  }
              T && (0, l.JV)(this);
            },
            render: function (t, e) {
              if (e.tween._time || !A())
                for (var i = e._pt; i; ) i.r(t, i.d), (i = i._next);
              else e.styles.revert();
            },
            get: U,
            aliases: f,
            getSetter: function (t, e, i) {
              var a = f[e];
              return (
                a && a.indexOf(",") < 0 && (e = a),
                e in p && e !== D && (t._gsap.x || U(t, "x"))
                  ? i && h === i
                    ? "scale" === e
                      ? E
                      : M
                    : (h = i || {}) && ("scale" === e ? Q : F)
                  : t.style && !(0, l.m2)(t.style[e])
                  ? b
                  : ~e.indexOf("-")
                  ? T
                  : (0, l.S5)(t, e)
              );
            },
            core: { _removeProperty: K, _getMatrix: rt },
          };
        (l.p8.utils.checkPrefix = J),
          (l.p8.core.getStyleSaver = L),
          (It = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent"),
          (_t = "rotation,rotationX,rotationY,skewX,skewY"),
          (Bt = (0, l.fS)(
            It +
              "," +
              _t +
              ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
            function (t) {
              p[t] = 1;
            }
          )),
          (0, l.fS)(_t, function (t) {
            (l.Fc.units[t] = "deg"), (ot[t] = 1);
          }),
          (f[Bt[13]] = It + "," + _t),
          (0, l.fS)(
            "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
            function (t) {
              var e = t.split(":");
              f[e[1]] = Bt[e[0]];
            }
          ),
          (0, l.fS)(
            "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
            function (t) {
              l.Fc.units[t] = "px";
            }
          ),
          l.p8.registerPlugin(vt);
      },
      826: function (t, e, i) {
        i.d(e, {
          _: function () {
            return bt;
          },
        });
        var a = i(867);
        function o(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }
        var n,
          s,
          r,
          h,
          A,
          g,
          l,
          p,
          w,
          y,
          c,
          x,
          u,
          d,
          f,
          m,
          I,
          _,
          B,
          v,
          C,
          b = 0,
          T = function () {
            return "undefined" != typeof window;
          },
          M = function () {
            return n || (T() && (n = window.gsap) && n.registerPlugin && n);
          },
          E = function (t) {
            return "function" == typeof t;
          },
          Q = function (t) {
            return "object" == typeof t;
          },
          F = function (t) {
            return void 0 === t;
          },
          S = function () {
            return !1;
          },
          D = "transform",
          k = "transformOrigin",
          P = function (t) {
            return Math.round(1e4 * t) / 1e4;
          },
          G = Array.isArray,
          L = function (t, e) {
            var i = r.createElementNS
              ? r.createElementNS(
                  (e || "http://www.w3.org/1999/xhtml").replace(
                    /^https/,
                    "http"
                  ),
                  t
                )
              : r.createElement(t);
            return i.style ? i : r.createElement(t);
          },
          O = 180 / Math.PI,
          H = 1e20,
          R = new a.G9(),
          J =
            Date.now ||
            function () {
              return new Date().getTime();
            },
          j = [],
          N = {},
          Y = 0,
          z = /^(?:a|input|textarea|button|select)$/i,
          X = 0,
          K = {},
          Z = {},
          V = function (t, e) {
            var i,
              a = {};
            for (i in t) a[i] = e ? t[i] * e : t[i];
            return a;
          },
          W = function t(e, i) {
            for (var a, o = e.length; o--; )
              i
                ? (e[o].style.touchAction = i)
                : e[o].style.removeProperty("touch-action"),
                (a = e[o].children) && a.length && t(a, i);
          },
          q = function () {
            return j.forEach(function (t) {
              return t();
            });
          },
          U = function () {
            return !j.length && n.ticker.remove(q);
          },
          $ = function (t) {
            for (var e = j.length; e--; ) j[e] === t && j.splice(e, 1);
            n.to(U, {
              overwrite: !0,
              delay: 15,
              duration: 0,
              onComplete: U,
              data: "_draggable",
            });
          },
          tt = function (t, e, i, a) {
            if (t.addEventListener) {
              var o = u[e];
              (a = a || (c ? { passive: !1 } : null)),
                t.addEventListener(o || e, i, a),
                o && e !== o && t.addEventListener(e, i, a);
            }
          },
          et = function (t, e, i, a) {
            if (t.removeEventListener) {
              var o = u[e];
              t.removeEventListener(o || e, i, a),
                o && e !== o && t.removeEventListener(e, i, a);
            }
          },
          it = function (t) {
            t.preventDefault && t.preventDefault(),
              t.preventManipulation && t.preventManipulation();
          },
          at = function t(e) {
            (d = e.touches && b < e.touches.length),
              et(e.target, "touchend", t);
          },
          ot = function (t) {
            (d = t.touches && b < t.touches.length),
              tt(t.target, "touchend", at);
          },
          nt = function (t) {
            return (
              s.pageYOffset ||
              t.scrollTop ||
              t.documentElement.scrollTop ||
              t.body.scrollTop ||
              0
            );
          },
          st = function (t) {
            return (
              s.pageXOffset ||
              t.scrollLeft ||
              t.documentElement.scrollLeft ||
              t.body.scrollLeft ||
              0
            );
          },
          rt = function t(e, i) {
            tt(e, "scroll", i), At(e.parentNode) || t(e.parentNode, i);
          },
          ht = function t(e, i) {
            et(e, "scroll", i), At(e.parentNode) || t(e.parentNode, i);
          },
          At = function (t) {
            return !(
              t &&
              t !== h &&
              9 !== t.nodeType &&
              t !== r.body &&
              t !== s &&
              t.nodeType &&
              t.parentNode
            );
          },
          gt = function (t, e) {
            var i = "x" === e ? "Width" : "Height",
              a = "scroll" + i,
              o = "client" + i;
            return Math.max(
              0,
              At(t)
                ? Math.max(h[a], A[a]) - (s["inner" + i] || h[o] || A[o])
                : t[a] - t[o]
            );
          },
          lt = function t(e, i) {
            var a = gt(e, "x"),
              o = gt(e, "y");
            At(e) ? (e = Z) : t(e.parentNode, i),
              (e._gsMaxScrollX = a),
              (e._gsMaxScrollY = o),
              i ||
                ((e._gsScrollX = e.scrollLeft || 0),
                (e._gsScrollY = e.scrollTop || 0));
          },
          pt = function (t, e, i) {
            var a = t.style;
            a &&
              (F(a[e]) && (e = w(e, t) || e),
              null == i
                ? a.removeProperty &&
                  a.removeProperty(e.replace(/([A-Z])/g, "-$1").toLowerCase())
                : (a[e] = i));
          },
          wt = function (t) {
            return s.getComputedStyle(
              t instanceof Element
                ? t
                : t.host || (t.parentNode || {}).host || t
            );
          },
          yt = {},
          ct = function (t) {
            if (t === s)
              return (
                (yt.left = yt.top = 0),
                (yt.width = yt.right =
                  h.clientWidth || t.innerWidth || A.clientWidth || 0),
                (yt.height = yt.bottom =
                  (t.innerHeight || 0) - 20 < h.clientHeight
                    ? h.clientHeight
                    : t.innerHeight || A.clientHeight || 0),
                yt
              );
            var e = t.ownerDocument || r,
              i = F(t.pageX)
                ? t.nodeType || F(t.left) || F(t.top)
                  ? y(t)[0].getBoundingClientRect()
                  : t
                : {
                    left: t.pageX - st(e),
                    top: t.pageY - nt(e),
                    right: t.pageX - st(e) + 1,
                    bottom: t.pageY - nt(e) + 1,
                  };
            return (
              F(i.right) && !F(i.width)
                ? ((i.right = i.left + i.width), (i.bottom = i.top + i.height))
                : F(i.width) &&
                  (i = {
                    width: i.right - i.left,
                    height: i.bottom - i.top,
                    right: i.right,
                    left: i.left,
                    bottom: i.bottom,
                    top: i.top,
                  }),
              i
            );
          },
          xt = function (t, e, i) {
            var a,
              o = t.vars,
              n = o[i],
              s = t._listeners[e];
            return (
              E(n) &&
                (a = n.apply(
                  o.callbackScope || t,
                  o[i + "Params"] || [t.pointerEvent]
                )),
              s && !1 === t.dispatchEvent(e) && (a = !1),
              a
            );
          },
          ut = function (t, e) {
            var i,
              a,
              o,
              n = y(t)[0];
            return n.nodeType || n === s
              ? ft(n, e)
              : F(t.left)
              ? {
                  left: (a = t.min || t.minX || t.minRotation || 0),
                  top: (i = t.min || t.minY || 0),
                  width: (t.max || t.maxX || t.maxRotation || 0) - a,
                  height: (t.max || t.maxY || 0) - i,
                }
              : ((o = { x: 0, y: 0 }),
                {
                  left: t.left - o.x,
                  top: t.top - o.y,
                  width: t.width,
                  height: t.height,
                });
          },
          dt = {},
          ft = function (t, e) {
            e = y(e)[0];
            var i,
              o,
              n,
              h,
              A,
              g,
              l,
              p,
              w,
              c,
              x,
              u,
              d,
              f = t.getBBox && t.ownerSVGElement,
              m = t.ownerDocument || r;
            if (t === s)
              (n = nt(m)),
                (o =
                  (i = st(m)) +
                  (m.documentElement.clientWidth ||
                    t.innerWidth ||
                    m.body.clientWidth ||
                    0)),
                (h =
                  n +
                  ((t.innerHeight || 0) - 20 < m.documentElement.clientHeight
                    ? m.documentElement.clientHeight
                    : t.innerHeight || m.body.clientHeight || 0));
            else {
              if (e === s || F(e)) return t.getBoundingClientRect();
              (i = n = 0),
                f
                  ? ((x = (c = t.getBBox()).width), (u = c.height))
                  : (t.viewBox &&
                      (c = t.viewBox.baseVal) &&
                      ((i = c.x || 0),
                      (n = c.y || 0),
                      (x = c.width),
                      (u = c.height)),
                    x ||
                      ((c = "border-box" === (d = wt(t)).boxSizing),
                      (x =
                        (parseFloat(d.width) || t.clientWidth || 0) +
                        (c
                          ? 0
                          : parseFloat(d.borderLeftWidth) +
                            parseFloat(d.borderRightWidth))),
                      (u =
                        (parseFloat(d.height) || t.clientHeight || 0) +
                        (c
                          ? 0
                          : parseFloat(d.borderTopWidth) +
                            parseFloat(d.borderBottomWidth))))),
                (o = x),
                (h = u);
            }
            return t === e
              ? { left: i, top: n, width: o - i, height: h - n }
              : ((g = (A = (0, a.M9)(e, !0).multiply((0, a.M9)(t))).apply({
                  x: i,
                  y: n,
                })),
                (l = A.apply({ x: o, y: n })),
                (p = A.apply({ x: o, y: h })),
                (w = A.apply({ x: i, y: h })),
                {
                  left: (i = Math.min(g.x, l.x, p.x, w.x)),
                  top: (n = Math.min(g.y, l.y, p.y, w.y)),
                  width: Math.max(g.x, l.x, p.x, w.x) - i,
                  height: Math.max(g.y, l.y, p.y, w.y) - n,
                });
          },
          mt = function (t, e, i, a, o, n) {
            var s,
              r,
              h,
              A = {};
            if (e)
              if (1 !== o && e instanceof Array) {
                if (((A.end = s = []), (h = e.length), Q(e[0])))
                  for (r = 0; r < h; r++) s[r] = V(e[r], o);
                else for (r = 0; r < h; r++) s[r] = e[r] * o;
                (i += 1.1), (a -= 1.1);
              } else
                E(e)
                  ? (A.end = function (i) {
                      var a,
                        n,
                        s = e.call(t, i);
                      if (1 !== o)
                        if (Q(s)) {
                          for (n in ((a = {}), s)) a[n] = s[n] * o;
                          s = a;
                        } else s *= o;
                      return s;
                    })
                  : (A.end = e);
            return (
              (i || 0 === i) && (A.max = i),
              (a || 0 === a) && (A.min = a),
              n && (A.velocity = 0),
              A
            );
          },
          It = function t(e) {
            var i;
            return (
              !(!e || !e.getAttribute || e === A) &&
              (!(
                "true" !== (i = e.getAttribute("data-clickable")) &&
                ("false" === i ||
                  (!e.onclick &&
                    !z.test(e.nodeName + "") &&
                    "true" !== e.getAttribute("contentEditable")))
              ) ||
                t(e.parentNode))
            );
          },
          _t = function (t, e) {
            for (var i, a = t.length; a--; )
              ((i = t[a]).ondragstart = i.onselectstart = e ? null : S),
                n.set(i, { lazy: !0, userSelect: e ? "text" : "none" });
          },
          Bt = function t(e) {
            return (
              "fixed" === wt(e).position ||
              ((e = e.parentNode) && 1 === e.nodeType ? t(e) : void 0)
            );
          },
          vt = function (t, e) {
            (t = n.utils.toArray(t)[0]), (e = e || {});
            var i,
              a,
              o,
              s,
              r,
              h,
              A = document.createElement("div"),
              g = A.style,
              l = t.firstChild,
              p = 0,
              w = 0,
              y = t.scrollTop,
              c = t.scrollLeft,
              x = t.scrollWidth,
              u = t.scrollHeight,
              d = 0,
              f = 0,
              m = 0;
            v && !1 !== e.force3D
              ? ((r = "translate3d("), (h = "px,0px)"))
              : D && ((r = "translate("), (h = "px)")),
              (this.scrollTop = function (t, e) {
                if (!arguments.length) return -this.top();
                this.top(-t, e);
              }),
              (this.scrollLeft = function (t, e) {
                if (!arguments.length) return -this.left();
                this.left(-t, e);
              }),
              (this.left = function (i, a) {
                if (!arguments.length) return -(t.scrollLeft + w);
                var o = t.scrollLeft - c,
                  s = w;
                if ((o > 2 || o < -2) && !a)
                  return (
                    (c = t.scrollLeft),
                    n.killTweensOf(this, { left: 1, scrollLeft: 1 }),
                    this.left(-c),
                    void (e.onKill && e.onKill())
                  );
                (i = -i) < 0
                  ? ((w = (i - 0.5) | 0), (i = 0))
                  : i > f
                  ? ((w = (i - f) | 0), (i = f))
                  : (w = 0),
                  (w || s) &&
                    (this._skip || (g[D] = r + -w + "px," + -p + h),
                    w + d >= 0 && (g.paddingRight = w + d + "px")),
                  (t.scrollLeft = 0 | i),
                  (c = t.scrollLeft);
              }),
              (this.top = function (i, a) {
                if (!arguments.length) return -(t.scrollTop + p);
                var o = t.scrollTop - y,
                  s = p;
                if ((o > 2 || o < -2) && !a)
                  return (
                    (y = t.scrollTop),
                    n.killTweensOf(this, { top: 1, scrollTop: 1 }),
                    this.top(-y),
                    void (e.onKill && e.onKill())
                  );
                (i = -i) < 0
                  ? ((p = (i - 0.5) | 0), (i = 0))
                  : i > m
                  ? ((p = (i - m) | 0), (i = m))
                  : (p = 0),
                  (p || s) && (this._skip || (g[D] = r + -w + "px," + -p + h)),
                  (t.scrollTop = 0 | i),
                  (y = t.scrollTop);
              }),
              (this.maxScrollTop = function () {
                return m;
              }),
              (this.maxScrollLeft = function () {
                return f;
              }),
              (this.disable = function () {
                for (l = A.firstChild; l; )
                  (s = l.nextSibling), t.appendChild(l), (l = s);
                t === A.parentNode && t.removeChild(A);
              }),
              (this.enable = function () {
                if ((l = t.firstChild) !== A) {
                  for (; l; ) (s = l.nextSibling), A.appendChild(l), (l = s);
                  t.appendChild(A), this.calibrate();
                }
              }),
              (this.calibrate = function (e) {
                var n,
                  s,
                  r,
                  h = t.clientWidth === i;
                (y = t.scrollTop),
                  (c = t.scrollLeft),
                  (h &&
                    t.clientHeight === a &&
                    A.offsetHeight === o &&
                    x === t.scrollWidth &&
                    u === t.scrollHeight &&
                    !e) ||
                    ((p || w) &&
                      ((s = this.left()),
                      (r = this.top()),
                      this.left(-t.scrollLeft),
                      this.top(-t.scrollTop)),
                    (n = wt(t)),
                    (h && !e) ||
                      ((g.display = "block"),
                      (g.width = "auto"),
                      (g.paddingRight = "0px"),
                      (d = Math.max(0, t.scrollWidth - t.clientWidth)) &&
                        (d +=
                          parseFloat(n.paddingLeft) +
                          (C ? parseFloat(n.paddingRight) : 0))),
                    (g.display = "inline-block"),
                    (g.position = "relative"),
                    (g.overflow = "visible"),
                    (g.verticalAlign = "top"),
                    (g.boxSizing = "content-box"),
                    (g.width = "100%"),
                    (g.paddingRight = d + "px"),
                    C && (g.paddingBottom = n.paddingBottom),
                    (i = t.clientWidth),
                    (a = t.clientHeight),
                    (x = t.scrollWidth),
                    (u = t.scrollHeight),
                    (f = t.scrollWidth - i),
                    (m = t.scrollHeight - a),
                    (o = A.offsetHeight),
                    (g.display = "block"),
                    (s || r) && (this.left(s), this.top(r)));
              }),
              (this.content = A),
              (this.element = t),
              (this._skip = !1),
              this.enable();
          },
          Ct = function (t) {
            if (T() && document.body) {
              var e = window && window.navigator;
              (s = window),
                (r = document),
                (h = r.documentElement),
                (A = r.body),
                (g = L("div")),
                (_ = !!window.PointerEvent),
                ((l = L("div")).style.cssText =
                  "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab"),
                (I = "grab" === l.style.cursor ? "grab" : "move"),
                (f = e && -1 !== e.userAgent.toLowerCase().indexOf("android")),
                (x =
                  ("ontouchstart" in h && "orientation" in s) ||
                  (e && (e.MaxTouchPoints > 0 || e.msMaxTouchPoints > 0))),
                (a = L("div")),
                (d = (o = L("div")).style),
                (b = A),
                (d.display = "inline-block"),
                (d.position = "relative"),
                (a.style.cssText =
                  "width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden"),
                a.appendChild(o),
                b.appendChild(a),
                (i = o.offsetHeight + 18 > a.scrollHeight),
                b.removeChild(a),
                (C = i),
                (u = (function (t) {
                  for (
                    var e = t.split(","),
                      i = (
                        ("onpointerdown" in g)
                          ? "pointerdown,pointermove,pointerup,pointercancel"
                          : ("onmspointerdown" in g)
                          ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel"
                          : t
                      ).split(","),
                      a = {},
                      o = 4;
                    --o > -1;

                  )
                    (a[e[o]] = i[o]), (a[i[o]] = e[o]);
                  try {
                    h.addEventListener(
                      "test",
                      null,
                      Object.defineProperty({}, "passive", {
                        get: function () {
                          c = 1;
                        },
                      })
                    );
                  } catch (t) {}
                  return a;
                })("touchstart,touchmove,touchend,touchcancel")),
                tt(r, "touchcancel", S),
                tt(s, "touchmove", S),
                A && A.addEventListener("touchstart", S),
                tt(r, "contextmenu", function () {
                  for (var t in N) N[t].isPressed && N[t].endDrag();
                }),
                (n = p = M());
            }
            var i, a, o, d, b;
            n
              ? ((m = n.plugins.inertia),
                (B = n.core.context || function () {}),
                (w = n.utils.checkPrefix),
                (D = w(D)),
                (k = w(k)),
                (y = n.utils.toArray),
                (v = !!w("perspective")))
              : t && console.warn("Please gsap.registerPlugin(Draggable)");
          },
          bt = (function (t) {
            var e, i;
            function A(e, i) {
              var g;
              (g = t.call(this) || this),
                p || Ct(1),
                (e = y(e)[0]),
                m || (m = n.plugins.inertia),
                (g.vars = i = V(i || {})),
                (g.target = e),
                (g.x = g.y = g.rotation = 0),
                (g.dragResistance = parseFloat(i.dragResistance) || 0),
                (g.edgeResistance = isNaN(i.edgeResistance)
                  ? 1
                  : parseFloat(i.edgeResistance) || 0),
                (g.lockAxis = i.lockAxis),
                (g.autoScroll = i.autoScroll || 0),
                (g.lockedAxis = null),
                (g.allowEventDefault = !!i.allowEventDefault),
                n.getProperty(e, "x");
              var w,
                c,
                v,
                C,
                T,
                M,
                S,
                D,
                L,
                z,
                U,
                at,
                gt,
                yt,
                ft,
                bt,
                Tt,
                Mt,
                Et,
                Qt,
                Ft,
                St,
                Dt,
                kt,
                Pt,
                Gt,
                Lt,
                Ot,
                Ht,
                Rt,
                Jt,
                jt,
                Nt,
                Yt = (i.type || "x,y").toLowerCase(),
                zt = ~Yt.indexOf("x") || ~Yt.indexOf("y"),
                Xt = -1 !== Yt.indexOf("rotation"),
                Kt = Xt ? "rotation" : zt ? "x" : "left",
                Zt = zt ? "y" : "top",
                Vt = !(
                  !~Yt.indexOf("x") &&
                  !~Yt.indexOf("left") &&
                  "scroll" !== Yt
                ),
                Wt = !(
                  !~Yt.indexOf("y") &&
                  !~Yt.indexOf("top") &&
                  "scroll" !== Yt
                ),
                qt = i.minimumMovement || 2,
                Ut = o(g),
                $t = y(i.trigger || i.handle || e),
                te = {},
                ee = 0,
                ie = !1,
                ae = i.autoScrollMarginTop || 40,
                oe = i.autoScrollMarginRight || 40,
                ne = i.autoScrollMarginBottom || 40,
                se = i.autoScrollMarginLeft || 40,
                re = i.clickableTest || It,
                he = 0,
                Ae = e._gsap || n.core.getCache(e),
                ge = Bt(e),
                le = function (t, i) {
                  return parseFloat(Ae.get(e, t, i));
                },
                pe = e.ownerDocument || r,
                we = function (t) {
                  return (
                    it(t),
                    t.stopImmediatePropagation && t.stopImmediatePropagation(),
                    !1
                  );
                },
                ye = function t(i) {
                  if (Ut.autoScroll && Ut.isDragging && (ie || Tt)) {
                    var a,
                      o,
                      n,
                      r,
                      A,
                      g,
                      l,
                      p,
                      w = e,
                      y = 15 * Ut.autoScroll;
                    for (
                      ie = !1,
                        Z.scrollTop =
                          null != s.pageYOffset
                            ? s.pageYOffset
                            : null != pe.documentElement.scrollTop
                            ? pe.documentElement.scrollTop
                            : pe.body.scrollTop,
                        Z.scrollLeft =
                          null != s.pageXOffset
                            ? s.pageXOffset
                            : null != pe.documentElement.scrollLeft
                            ? pe.documentElement.scrollLeft
                            : pe.body.scrollLeft,
                        r = Ut.pointerX - Z.scrollLeft,
                        A = Ut.pointerY - Z.scrollTop;
                      w && !o;

                    )
                      (a = (o = At(w.parentNode)) ? Z : w.parentNode),
                        (n = o
                          ? {
                              bottom: Math.max(
                                h.clientHeight,
                                s.innerHeight || 0
                              ),
                              right: Math.max(h.clientWidth, s.innerWidth || 0),
                              left: 0,
                              top: 0,
                            }
                          : a.getBoundingClientRect()),
                        (g = l = 0),
                        Wt &&
                          ((p = a._gsMaxScrollY - a.scrollTop) < 0
                            ? (l = p)
                            : A > n.bottom - ne && p
                            ? ((ie = !0),
                              (l = Math.min(
                                p,
                                (y * (1 - Math.max(0, n.bottom - A) / ne)) | 0
                              )))
                            : A < n.top + ae &&
                              a.scrollTop &&
                              ((ie = !0),
                              (l = -Math.min(
                                a.scrollTop,
                                (y * (1 - Math.max(0, A - n.top) / ae)) | 0
                              ))),
                          l && (a.scrollTop += l)),
                        Vt &&
                          ((p = a._gsMaxScrollX - a.scrollLeft) < 0
                            ? (g = p)
                            : r > n.right - oe && p
                            ? ((ie = !0),
                              (g = Math.min(
                                p,
                                (y * (1 - Math.max(0, n.right - r) / oe)) | 0
                              )))
                            : r < n.left + se &&
                              a.scrollLeft &&
                              ((ie = !0),
                              (g = -Math.min(
                                a.scrollLeft,
                                (y * (1 - Math.max(0, r - n.left) / se)) | 0
                              ))),
                          g && (a.scrollLeft += g)),
                        o &&
                          (g || l) &&
                          (s.scrollTo(a.scrollLeft, a.scrollTop),
                          Te(Ut.pointerX + g, Ut.pointerY + l)),
                        (w = a);
                  }
                  if (Tt) {
                    var x = Ut.x,
                      u = Ut.y;
                    Xt
                      ? ((Ut.deltaX = x - parseFloat(Ae.rotation)),
                        (Ut.rotation = x),
                        (Ae.rotation = x + "deg"),
                        Ae.renderTransform(1, Ae))
                      : c
                      ? (Wt && ((Ut.deltaY = u - c.top()), c.top(u)),
                        Vt && ((Ut.deltaX = x - c.left()), c.left(x)))
                      : zt
                      ? (Wt &&
                          ((Ut.deltaY = u - parseFloat(Ae.y)),
                          (Ae.y = u + "px")),
                        Vt &&
                          ((Ut.deltaX = x - parseFloat(Ae.x)),
                          (Ae.x = x + "px")),
                        Ae.renderTransform(1, Ae))
                      : (Wt &&
                          ((Ut.deltaY = u - parseFloat(e.style.top || 0)),
                          (e.style.top = u + "px")),
                        Vt &&
                          ((Ut.deltaX = x - parseFloat(e.style.left || 0)),
                          (e.style.left = x + "px"))),
                      !D ||
                        i ||
                        Ot ||
                        ((Ot = !0),
                        !1 === xt(Ut, "drag", "onDrag") &&
                          (Vt && (Ut.x -= Ut.deltaX),
                          Wt && (Ut.y -= Ut.deltaY),
                          t(!0)),
                        (Ot = !1));
                  }
                  Tt = !1;
                },
                ce = function (t, i) {
                  var a,
                    o,
                    s = Ut.x,
                    r = Ut.y;
                  e._gsap || (Ae = n.core.getCache(e)),
                    Ae.uncache && n.getProperty(e, "x"),
                    zt
                      ? ((Ut.x = parseFloat(Ae.x)), (Ut.y = parseFloat(Ae.y)))
                      : Xt
                      ? (Ut.x = Ut.rotation = parseFloat(Ae.rotation))
                      : c
                      ? ((Ut.y = c.top()), (Ut.x = c.left()))
                      : ((Ut.y =
                          parseFloat(e.style.top || ((o = wt(e)) && o.top)) ||
                          0),
                        (Ut.x =
                          parseFloat(e.style.left || (o || {}).left) || 0)),
                    (Et || Qt || Ft) &&
                      !i &&
                      (Ut.isDragging || Ut.isThrowing) &&
                      (Ft &&
                        ((K.x = Ut.x),
                        (K.y = Ut.y),
                        (a = Ft(K)).x !== Ut.x && ((Ut.x = a.x), (Tt = !0)),
                        a.y !== Ut.y && ((Ut.y = a.y), (Tt = !0))),
                      Et &&
                        (a = Et(Ut.x)) !== Ut.x &&
                        ((Ut.x = a), Xt && (Ut.rotation = a), (Tt = !0)),
                      Qt && ((a = Qt(Ut.y)) !== Ut.y && (Ut.y = a), (Tt = !0))),
                    Tt && ye(!0),
                    t ||
                      ((Ut.deltaX = Ut.x - s),
                      (Ut.deltaY = Ut.y - r),
                      xt(Ut, "throwupdate", "onThrowUpdate"));
                },
                xe = function (t, e, i, a) {
                  return (
                    null == e && (e = -H),
                    null == i && (i = H),
                    E(t)
                      ? function (o) {
                          var n = Ut.isPressed ? 1 - Ut.edgeResistance : 1;
                          return (
                            t.call(
                              Ut,
                              (o > i
                                ? i + (o - i) * n
                                : o < e
                                ? e + (o - e) * n
                                : o) * a
                            ) * a
                          );
                        }
                      : G(t)
                      ? function (a) {
                          for (var o, n, s = t.length, r = 0, h = H; --s > -1; )
                            (n = (o = t[s]) - a) < 0 && (n = -n),
                              n < h && o >= e && o <= i && ((r = s), (h = n));
                          return t[r];
                        }
                      : isNaN(t)
                      ? function (t) {
                          return t;
                        }
                      : function () {
                          return t * a;
                        }
                  );
                },
                ue = function () {
                  var t, a, o, n;
                  (S = !1),
                    c
                      ? (c.calibrate(),
                        (Ut.minX = U = -c.maxScrollLeft()),
                        (Ut.minY = gt = -c.maxScrollTop()),
                        (Ut.maxX = z = Ut.maxY = at = 0),
                        (S = !0))
                      : i.bounds &&
                        ((t = ut(i.bounds, e.parentNode)),
                        Xt
                          ? ((Ut.minX = U = t.left),
                            (Ut.maxX = z = t.left + t.width),
                            (Ut.minY = gt = Ut.maxY = at = 0))
                          : F(i.bounds.maxX) && F(i.bounds.maxY)
                          ? ((a = ut(e, e.parentNode)),
                            (Ut.minX = U =
                              Math.round(le(Kt, "px") + t.left - a.left)),
                            (Ut.minY = gt =
                              Math.round(le(Zt, "px") + t.top - a.top)),
                            (Ut.maxX = z = Math.round(U + (t.width - a.width))),
                            (Ut.maxY = at =
                              Math.round(gt + (t.height - a.height))))
                          : ((t = i.bounds),
                            (Ut.minX = U = t.minX),
                            (Ut.minY = gt = t.minY),
                            (Ut.maxX = z = t.maxX),
                            (Ut.maxY = at = t.maxY)),
                        U > z &&
                          ((Ut.minX = z), (Ut.maxX = z = U), (U = Ut.minX)),
                        gt > at &&
                          ((Ut.minY = at), (Ut.maxY = at = gt), (gt = Ut.minY)),
                        Xt && ((Ut.minRotation = U), (Ut.maxRotation = z)),
                        (S = !0)),
                    i.liveSnap &&
                      ((o = !0 === i.liveSnap ? i.snap || {} : i.liveSnap),
                      (n = G(o) || E(o)),
                      Xt
                        ? ((Et = xe(n ? o : o.rotation, U, z, 1)), (Qt = null))
                        : o.points
                        ? (Ft = (function (t, e, i, a, o, n, s) {
                            return (
                              (n = n && n < H ? n * n : H),
                              E(t)
                                ? function (r) {
                                    var h,
                                      A,
                                      g,
                                      l = Ut.isPressed
                                        ? 1 - Ut.edgeResistance
                                        : 1,
                                      p = r.x,
                                      w = r.y;
                                    return (
                                      (r.x = p =
                                        p > i
                                          ? i + (p - i) * l
                                          : p < e
                                          ? e + (p - e) * l
                                          : p),
                                      (r.y = w =
                                        w > o
                                          ? o + (w - o) * l
                                          : w < a
                                          ? a + (w - a) * l
                                          : w),
                                      (h = t.call(Ut, r)) !== r &&
                                        ((r.x = h.x), (r.y = h.y)),
                                      1 !== s && ((r.x *= s), (r.y *= s)),
                                      n < H &&
                                        (A = r.x - p) * A + (g = r.y - w) * g >
                                          n &&
                                        ((r.x = p), (r.y = w)),
                                      r
                                    );
                                  }
                                : G(t)
                                ? function (e) {
                                    for (
                                      var i,
                                        a,
                                        o,
                                        s,
                                        r = t.length,
                                        h = 0,
                                        A = H;
                                      --r > -1;

                                    )
                                      (s =
                                        (i = (o = t[r]).x - e.x) * i +
                                        (a = o.y - e.y) * a) < A &&
                                        ((h = r), (A = s));
                                    return A <= n ? t[h] : e;
                                  }
                                : function (t) {
                                    return t;
                                  }
                            );
                          })(
                            n ? o : o.points,
                            U,
                            z,
                            gt,
                            at,
                            o.radius,
                            c ? -1 : 1
                          ))
                        : (Vt &&
                            (Et = xe(
                              n ? o : o.x || o.left || o.scrollLeft,
                              U,
                              z,
                              c ? -1 : 1
                            )),
                          Wt &&
                            (Qt = xe(
                              n ? o : o.y || o.top || o.scrollTop,
                              gt,
                              at,
                              c ? -1 : 1
                            ))));
                },
                de = function () {
                  (Ut.isThrowing = !1),
                    xt(Ut, "throwcomplete", "onThrowComplete");
                },
                fe = function () {
                  Ut.isThrowing = !1;
                },
                me = function (t, a) {
                  var o, s, r, h;
                  t && m
                    ? (!0 === t &&
                        ((o = i.snap || i.liveSnap || {}),
                        (s = G(o) || E(o)),
                        (t = {
                          resistance:
                            (i.throwResistance || i.resistance || 1e3) /
                            (Xt ? 10 : 1),
                        }),
                        Xt
                          ? (t.rotation = mt(
                              Ut,
                              s ? o : o.rotation,
                              z,
                              U,
                              1,
                              a
                            ))
                          : (Vt &&
                              (t[Kt] = mt(
                                Ut,
                                s ? o : o.points || o.x || o.left,
                                z,
                                U,
                                c ? -1 : 1,
                                a || "x" === Ut.lockedAxis
                              )),
                            Wt &&
                              (t[Zt] = mt(
                                Ut,
                                s ? o : o.points || o.y || o.top,
                                at,
                                gt,
                                c ? -1 : 1,
                                a || "y" === Ut.lockedAxis
                              )),
                            (o.points || (G(o) && Q(o[0]))) &&
                              ((t.linkedProps = Kt + "," + Zt),
                              (t.radius = o.radius)))),
                      (Ut.isThrowing = !0),
                      (h = isNaN(i.overshootTolerance)
                        ? 1 === i.edgeResistance
                          ? 0
                          : 1 - Ut.edgeResistance + 0.2
                        : i.overshootTolerance),
                      t.duration ||
                        (t.duration = {
                          max: Math.max(
                            i.minDuration || 0,
                            "maxDuration" in i ? i.maxDuration : 2
                          ),
                          min: isNaN(i.minDuration)
                            ? 0 === h || (Q(t) && t.resistance > 1e3)
                              ? 0
                              : 0.5
                            : i.minDuration,
                          overshoot: h,
                        }),
                      (Ut.tween = r =
                        n.to(c || e, {
                          inertia: t,
                          data: "_draggable",
                          onComplete: de,
                          onInterrupt: fe,
                          onUpdate: i.fastMode ? xt : ce,
                          onUpdateParams: i.fastMode
                            ? [Ut, "onthrowupdate", "onThrowUpdate"]
                            : o && o.radius
                            ? [!1, !0]
                            : [],
                        })),
                      i.fastMode ||
                        (c && (c._skip = !0),
                        r.render(1e9, !0, !0),
                        ce(!0, !0),
                        (Ut.endX = Ut.x),
                        (Ut.endY = Ut.y),
                        Xt && (Ut.endRotation = Ut.x),
                        r.play(0),
                        ce(!0, !0),
                        c && (c._skip = !1)))
                    : S && Ut.applyBounds();
                },
                Ie = function (t) {
                  var i,
                    o = kt;
                  (kt = (0, a.M9)(e.parentNode, !0)),
                    t &&
                      Ut.isPressed &&
                      !kt.equals(o || new a.G9()) &&
                      ((i = o.inverse().apply({ x: v, y: C })),
                      kt.apply(i, i),
                      (v = i.x),
                      (C = i.y)),
                    kt.equals(R) && (kt = null);
                },
                _e = function () {
                  var t,
                    i,
                    o,
                    n = 1 - Ut.edgeResistance,
                    s = ge ? st(pe) : 0,
                    r = ge ? nt(pe) : 0;
                  zt &&
                    ((Ae.x = le(Kt, "px") + "px"),
                    (Ae.y = le(Zt, "px") + "px"),
                    Ae.renderTransform()),
                    Ie(!1),
                    (dt.x = Ut.pointerX - s),
                    (dt.y = Ut.pointerY - r),
                    kt && kt.apply(dt, dt),
                    (v = dt.x),
                    (C = dt.y),
                    Tt && (Te(Ut.pointerX, Ut.pointerY), ye(!0)),
                    (jt = (0, a.M9)(e)),
                    c
                      ? (ue(), (M = c.top()), (T = c.left()))
                      : (Be() ? (ce(!0, !0), ue()) : Ut.applyBounds(),
                        Xt
                          ? ((t = e.ownerSVGElement
                              ? [
                                  Ae.xOrigin - e.getBBox().x,
                                  Ae.yOrigin - e.getBBox().y,
                                ]
                              : (wt(e)[k] || "0 0").split(" ")),
                            (bt = Ut.rotationOrigin =
                              (0, a.M9)(e).apply({
                                x: parseFloat(t[0]) || 0,
                                y: parseFloat(t[1]) || 0,
                              })),
                            ce(!0, !0),
                            (i = Ut.pointerX - bt.x - s),
                            (o = bt.y - Ut.pointerY + r),
                            (T = Ut.x),
                            (M = Ut.y = Math.atan2(o, i) * O))
                          : ((M = le(Zt, "px")), (T = le(Kt, "px")))),
                    S &&
                      n &&
                      (T > z
                        ? (T = z + (T - z) / n)
                        : T < U && (T = U - (U - T) / n),
                      Xt ||
                        (M > at
                          ? (M = at + (M - at) / n)
                          : M < gt && (M = gt - (gt - M) / n))),
                    (Ut.startX = T = P(T)),
                    (Ut.startY = M = P(M));
                },
                Be = function () {
                  return Ut.tween && Ut.tween.isActive();
                },
                ve = function () {
                  !l.parentNode ||
                    Be() ||
                    Ut.isDragging ||
                    l.parentNode.removeChild(l);
                },
                Ce = function (t, a) {
                  var o;
                  if (
                    !w ||
                    Ut.isPressed ||
                    !t ||
                    (!(
                      ("mousedown" !== t.type && "pointerdown" !== t.type) ||
                      a
                    ) &&
                      J() - he < 30 &&
                      u[Ut.pointerEvent.type])
                  )
                    Jt && t && w && it(t);
                  else {
                    if (
                      ((Pt = Be()),
                      (Nt = !1),
                      (Ut.pointerEvent = t),
                      u[t.type]
                        ? ((Dt = ~t.type.indexOf("touch")
                            ? t.currentTarget || t.target
                            : pe),
                          tt(Dt, "touchend", Me),
                          tt(Dt, "touchmove", be),
                          tt(Dt, "touchcancel", Me),
                          tt(pe, "touchstart", ot))
                        : ((Dt = null), tt(pe, "mousemove", be)),
                      (Lt = null),
                      (_ && Dt) ||
                        (tt(pe, "mouseup", Me),
                        t && t.target && tt(t.target, "mouseup", Me)),
                      (St =
                        re.call(Ut, t.target) && !1 === i.dragClickables && !a))
                    )
                      return (
                        tt(t.target, "change", Me),
                        xt(Ut, "pressInit", "onPressInit"),
                        xt(Ut, "press", "onPress"),
                        _t($t, !0),
                        void (Jt = !1)
                      );
                    var r;
                    if (
                      ((Gt =
                        !(
                          !Dt ||
                          Vt === Wt ||
                          !1 === Ut.vars.allowNativeTouchScrolling ||
                          (Ut.vars.allowContextMenu &&
                            t &&
                            (t.ctrlKey || t.which > 2))
                        ) && (Vt ? "y" : "x")),
                      (Jt = !Gt && !Ut.allowEventDefault) &&
                        (it(t), tt(s, "touchforcechange", it)),
                      t.changedTouches
                        ? ((t = yt = t.changedTouches[0]), (ft = t.identifier))
                        : t.pointerId
                        ? (ft = t.pointerId)
                        : (yt = ft = null),
                      b++,
                      (r = ye),
                      j.push(r),
                      1 === j.length && n.ticker.add(q),
                      (C = Ut.pointerY = t.pageY),
                      (v = Ut.pointerX = t.pageX),
                      xt(Ut, "pressInit", "onPressInit"),
                      (Gt || Ut.autoScroll) && lt(e.parentNode),
                      !e.parentNode ||
                        !Ut.autoScroll ||
                        c ||
                        Xt ||
                        !e.parentNode._gsMaxScrollX ||
                        l.parentNode ||
                        e.getBBox ||
                        ((l.style.width = e.parentNode.scrollWidth + "px"),
                        e.parentNode.appendChild(l)),
                      _e(),
                      Ut.tween && Ut.tween.kill(),
                      (Ut.isThrowing = !1),
                      n.killTweensOf(c || e, te, !0),
                      c && n.killTweensOf(e, { scrollTo: 1 }, !0),
                      (Ut.tween = Ut.lockedAxis = null),
                      (i.zIndexBoost || (!Xt && !c && !1 !== i.zIndexBoost)) &&
                        (e.style.zIndex = A.zIndex++),
                      (Ut.isPressed = !0),
                      (D = !(!i.onDrag && !Ut._listeners.drag)),
                      (L = !(!i.onMove && !Ut._listeners.move)),
                      !1 !== i.cursor || i.activeCursor)
                    )
                      for (o = $t.length; --o > -1; )
                        n.set($t[o], {
                          cursor:
                            i.activeCursor ||
                            i.cursor ||
                            ("grab" === I ? "grabbing" : I),
                        });
                    xt(Ut, "press", "onPress");
                  }
                },
                be = function (t) {
                  var i,
                    a,
                    o,
                    n,
                    r,
                    h,
                    A = t;
                  if (w && !d && Ut.isPressed && t) {
                    if (((Ut.pointerEvent = t), (i = t.changedTouches))) {
                      if ((t = i[0]) !== yt && t.identifier !== ft) {
                        for (
                          n = i.length;
                          --n > -1 &&
                          (t = i[n]).identifier !== ft &&
                          t.target !== e;

                        );
                        if (n < 0) return;
                      }
                    } else if (t.pointerId && ft && t.pointerId !== ft) return;
                    Dt &&
                    Gt &&
                    !Lt &&
                    ((dt.x = t.pageX - (ge ? st(pe) : 0)),
                    (dt.y = t.pageY - (ge ? nt(pe) : 0)),
                    kt && kt.apply(dt, dt),
                    (a = dt.x),
                    (o = dt.y),
                    (((r = Math.abs(a - v)) !== (h = Math.abs(o - C)) &&
                      (r > qt || h > qt)) ||
                      (f && Gt === Lt)) &&
                      ((Lt = r > h && Vt ? "x" : "y"),
                      Gt && Lt !== Gt && tt(s, "touchforcechange", it),
                      !1 !== Ut.vars.lockAxisOnTouchScroll &&
                        Vt &&
                        Wt &&
                        ((Ut.lockedAxis = "x" === Lt ? "y" : "x"),
                        E(Ut.vars.onLockAxis) &&
                          Ut.vars.onLockAxis.call(Ut, A)),
                      f && Gt === Lt))
                      ? Me(A)
                      : (Ut.allowEventDefault ||
                        (Gt && (!Lt || Gt === Lt)) ||
                        !1 === A.cancelable
                          ? Jt && (Jt = !1)
                          : (it(A), (Jt = !0)),
                        Ut.autoScroll && (ie = !0),
                        Te(t.pageX, t.pageY, L));
                  } else Jt && t && w && it(t);
                },
                Te = function (t, e, i) {
                  var a,
                    o,
                    n,
                    s,
                    r,
                    h,
                    A = 1 - Ut.dragResistance,
                    g = 1 - Ut.edgeResistance,
                    l = Ut.pointerX,
                    p = Ut.pointerY,
                    w = M,
                    y = Ut.x,
                    c = Ut.y,
                    x = Ut.endX,
                    u = Ut.endY,
                    d = Ut.endRotation,
                    f = Tt;
                  (Ut.pointerX = t),
                    (Ut.pointerY = e),
                    ge && ((t -= st(pe)), (e -= nt(pe))),
                    Xt
                      ? ((s = Math.atan2(bt.y - e, t - bt.x) * O),
                        (r = Ut.y - s) > 180
                          ? ((M -= 360), (Ut.y = s))
                          : r < -180 && ((M += 360), (Ut.y = s)),
                        Ut.x !== T || Math.abs(M - s) > qt
                          ? ((Ut.y = s), (n = T + (M - s) * A))
                          : (n = T))
                      : (kt &&
                          ((h = t * kt.a + e * kt.c + kt.e),
                          (e = t * kt.b + e * kt.d + kt.f),
                          (t = h)),
                        (o = e - C) < qt && o > -qt && (o = 0),
                        (a = t - v) < qt && a > -qt && (a = 0),
                        (Ut.lockAxis || Ut.lockedAxis) &&
                          (a || o) &&
                          ((h = Ut.lockedAxis) ||
                            ((Ut.lockedAxis = h =
                              Vt && Math.abs(a) > Math.abs(o)
                                ? "y"
                                : Wt
                                ? "x"
                                : null),
                            h &&
                              E(Ut.vars.onLockAxis) &&
                              Ut.vars.onLockAxis.call(Ut, Ut.pointerEvent)),
                          "y" === h ? (o = 0) : "x" === h && (a = 0)),
                        (n = P(T + a * A)),
                        (s = P(M + o * A))),
                    (Et || Qt || Ft) &&
                      (Ut.x !== n || (Ut.y !== s && !Xt)) &&
                      (Ft &&
                        ((K.x = n),
                        (K.y = s),
                        (h = Ft(K)),
                        (n = P(h.x)),
                        (s = P(h.y))),
                      Et && (n = P(Et(n))),
                      Qt && (s = P(Qt(s)))),
                    S &&
                      (n > z
                        ? (n = z + Math.round((n - z) * g))
                        : n < U && (n = U + Math.round((n - U) * g)),
                      Xt ||
                        (s > at
                          ? (s = Math.round(at + (s - at) * g))
                          : s < gt && (s = Math.round(gt + (s - gt) * g)))),
                    (Ut.x !== n || (Ut.y !== s && !Xt)) &&
                      (Xt
                        ? ((Ut.endRotation = Ut.x = Ut.endX = n), (Tt = !0))
                        : (Wt && ((Ut.y = Ut.endY = s), (Tt = !0)),
                          Vt && ((Ut.x = Ut.endX = n), (Tt = !0))),
                      i && !1 === xt(Ut, "move", "onMove")
                        ? ((Ut.pointerX = l),
                          (Ut.pointerY = p),
                          (M = w),
                          (Ut.x = y),
                          (Ut.y = c),
                          (Ut.endX = x),
                          (Ut.endY = u),
                          (Ut.endRotation = d),
                          (Tt = f))
                        : !Ut.isDragging &&
                          Ut.isPressed &&
                          ((Ut.isDragging = Nt = !0),
                          xt(Ut, "dragstart", "onDragStart")));
                },
                Me = function t(a, o) {
                  if (
                    w &&
                    Ut.isPressed &&
                    (!a ||
                      null == ft ||
                      o ||
                      !(
                        (a.pointerId && a.pointerId !== ft && a.target !== e) ||
                        (a.changedTouches &&
                          !(function (t, e) {
                            for (var i = t.length; i--; )
                              if (t[i].identifier === e) return !0;
                          })(a.changedTouches, ft))
                      ))
                  ) {
                    Ut.isPressed = !1;
                    var r,
                      h,
                      A,
                      g,
                      l,
                      p = a,
                      y = Ut.isDragging,
                      c =
                        Ut.vars.allowContextMenu &&
                        a &&
                        (a.ctrlKey || a.which > 2),
                      x = n.delayedCall(0.001, ve);
                    if (
                      (Dt
                        ? (et(Dt, "touchend", t),
                          et(Dt, "touchmove", be),
                          et(Dt, "touchcancel", t),
                          et(pe, "touchstart", ot))
                        : et(pe, "mousemove", be),
                      et(s, "touchforcechange", it),
                      (_ && Dt) ||
                        (et(pe, "mouseup", t),
                        a && a.target && et(a.target, "mouseup", t)),
                      (Tt = !1),
                      y && ((ee = X = J()), (Ut.isDragging = !1)),
                      $(ye),
                      St && !c)
                    )
                      return (
                        a && (et(a.target, "change", t), (Ut.pointerEvent = p)),
                        _t($t, !1),
                        xt(Ut, "release", "onRelease"),
                        xt(Ut, "click", "onClick"),
                        void (St = !1)
                      );
                    for (h = $t.length; --h > -1; )
                      pt(
                        $t[h],
                        "cursor",
                        i.cursor || (!1 !== i.cursor ? I : null)
                      );
                    if ((b--, a)) {
                      if (
                        (r = a.changedTouches) &&
                        (a = r[0]) !== yt &&
                        a.identifier !== ft
                      ) {
                        for (
                          h = r.length;
                          --h > -1 &&
                          (a = r[h]).identifier !== ft &&
                          a.target !== e;

                        );
                        if (h < 0 && !o) return;
                      }
                      (Ut.pointerEvent = p),
                        (Ut.pointerX = a.pageX),
                        (Ut.pointerY = a.pageY);
                    }
                    return (
                      c && p
                        ? (it(p), (Jt = !0), xt(Ut, "release", "onRelease"))
                        : p && !y
                        ? ((Jt = !1),
                          Pt &&
                            (i.snap || i.bounds) &&
                            me(i.inertia || i.throwProps),
                          xt(Ut, "release", "onRelease"),
                          (f && "touchmove" === p.type) ||
                            -1 !== p.type.indexOf("cancel") ||
                            (xt(Ut, "click", "onClick"),
                            J() - he < 300 &&
                              xt(Ut, "doubleclick", "onDoubleClick"),
                            (g = p.target || e),
                            (he = J()),
                            (l = function () {
                              he === Ht ||
                                !Ut.enabled() ||
                                Ut.isPressed ||
                                p.defaultPrevented ||
                                (g.click
                                  ? g.click()
                                  : pe.createEvent &&
                                    ((A =
                                      pe.createEvent(
                                        "MouseEvents"
                                      )).initMouseEvent(
                                      "click",
                                      !0,
                                      !0,
                                      s,
                                      1,
                                      Ut.pointerEvent.screenX,
                                      Ut.pointerEvent.screenY,
                                      Ut.pointerX,
                                      Ut.pointerY,
                                      !1,
                                      !1,
                                      !1,
                                      !1,
                                      0,
                                      null
                                    ),
                                    g.dispatchEvent(A)));
                            }),
                            f || p.defaultPrevented || n.delayedCall(0.05, l)))
                        : (me(i.inertia || i.throwProps),
                          Ut.allowEventDefault ||
                          !p ||
                          (!1 === i.dragClickables && re.call(Ut, p.target)) ||
                          !y ||
                          (Gt && (!Lt || Gt !== Lt)) ||
                          !1 === p.cancelable
                            ? (Jt = !1)
                            : ((Jt = !0), it(p)),
                          xt(Ut, "release", "onRelease")),
                      Be() && x.duration(Ut.tween.duration()),
                      y && xt(Ut, "dragend", "onDragEnd"),
                      !0
                    );
                  }
                  Jt && a && w && it(a);
                },
                Ee = function (t) {
                  if (t && Ut.isDragging && !c) {
                    var i = t.target || e.parentNode,
                      a = i.scrollLeft - i._gsScrollX,
                      o = i.scrollTop - i._gsScrollY;
                    (a || o) &&
                      (kt
                        ? ((v -= a * kt.a + o * kt.c),
                          (C -= o * kt.d + a * kt.b))
                        : ((v -= a), (C -= o)),
                      (i._gsScrollX += a),
                      (i._gsScrollY += o),
                      Te(Ut.pointerX, Ut.pointerY));
                  }
                },
                Qe = function (t) {
                  var e = J(),
                    i = e - he < 100,
                    a = e - ee < 50,
                    o = i && Ht === he,
                    n = Ut.pointerEvent && Ut.pointerEvent.defaultPrevented,
                    s = i && Rt === he,
                    r = t.isTrusted || (null == t.isTrusted && i && o);
                  if (
                    ((o || (a && !1 !== Ut.vars.suppressClickOnDrag)) &&
                      t.stopImmediatePropagation &&
                      t.stopImmediatePropagation(),
                    i &&
                      (!Ut.pointerEvent || !Ut.pointerEvent.defaultPrevented) &&
                      (!o || (r && !s)))
                  )
                    return r && o && (Rt = he), void (Ht = he);
                  (Ut.isPressed || a || i) &&
                    ((r && t.detail && i && !n) || it(t)),
                    i ||
                      a ||
                      Nt ||
                      (t && t.target && (Ut.pointerEvent = t),
                      xt(Ut, "click", "onClick"));
                },
                Fe = function (t) {
                  return kt
                    ? {
                        x: t.x * kt.a + t.y * kt.c + kt.e,
                        y: t.x * kt.b + t.y * kt.d + kt.f,
                      }
                    : { x: t.x, y: t.y };
                };
              return (
                (Mt = A.get(e)) && Mt.kill(),
                (g.startDrag = function (t, i) {
                  var a, o, n, s;
                  Ce(t || Ut.pointerEvent, !0),
                    i &&
                      !Ut.hitTest(t || Ut.pointerEvent) &&
                      ((a = ct(t || Ut.pointerEvent)),
                      (o = ct(e)),
                      (n = Fe({
                        x: a.left + a.width / 2,
                        y: a.top + a.height / 2,
                      })),
                      (s = Fe({
                        x: o.left + o.width / 2,
                        y: o.top + o.height / 2,
                      })),
                      (v -= n.x - s.x),
                      (C -= n.y - s.y)),
                    Ut.isDragging ||
                      ((Ut.isDragging = Nt = !0),
                      xt(Ut, "dragstart", "onDragStart"));
                }),
                (g.drag = be),
                (g.endDrag = function (t) {
                  return Me(t || Ut.pointerEvent, !0);
                }),
                (g.timeSinceDrag = function () {
                  return Ut.isDragging ? 0 : (J() - ee) / 1e3;
                }),
                (g.timeSinceClick = function () {
                  return (J() - he) / 1e3;
                }),
                (g.hitTest = function (t, e) {
                  return A.hitTest(Ut.target, t, e);
                }),
                (g.getDirection = function (t, i) {
                  var a,
                    o,
                    n,
                    s,
                    r,
                    h,
                    A =
                      "velocity" === t && m
                        ? t
                        : Q(t) && !Xt
                        ? "element"
                        : "start";
                  return (
                    "element" === A && ((r = ct(Ut.target)), (h = ct(t))),
                    (a =
                      "start" === A
                        ? Ut.x - T
                        : "velocity" === A
                        ? m.getVelocity(e, Kt)
                        : r.left + r.width / 2 - (h.left + h.width / 2)),
                    Xt
                      ? a < 0
                        ? "counter-clockwise"
                        : "clockwise"
                      : ((i = i || 2),
                        (o =
                          "start" === A
                            ? Ut.y - M
                            : "velocity" === A
                            ? m.getVelocity(e, Zt)
                            : r.top + r.height / 2 - (h.top + h.height / 2)),
                        (s =
                          (n = Math.abs(a / o)) < 1 / i
                            ? ""
                            : a < 0
                            ? "left"
                            : "right"),
                        n < i &&
                          ("" !== s && (s += "-"),
                          (s += o < 0 ? "up" : "down")),
                        s)
                  );
                }),
                (g.applyBounds = function (t, a) {
                  var o, n, r, h, A, g;
                  if (t && i.bounds !== t)
                    return (i.bounds = t), Ut.update(!0, a);
                  if ((ce(!0), ue(), S && !Be())) {
                    if (
                      ((o = Ut.x),
                      (n = Ut.y),
                      o > z ? (o = z) : o < U && (o = U),
                      n > at ? (n = at) : n < gt && (n = gt),
                      (Ut.x !== o || Ut.y !== n) &&
                        ((r = !0),
                        (Ut.x = Ut.endX = o),
                        Xt ? (Ut.endRotation = o) : (Ut.y = Ut.endY = n),
                        (Tt = !0),
                        ye(!0),
                        Ut.autoScroll && !Ut.isDragging))
                    )
                      for (
                        lt(e.parentNode),
                          h = e,
                          Z.scrollTop =
                            null != s.pageYOffset
                              ? s.pageYOffset
                              : null != pe.documentElement.scrollTop
                              ? pe.documentElement.scrollTop
                              : pe.body.scrollTop,
                          Z.scrollLeft =
                            null != s.pageXOffset
                              ? s.pageXOffset
                              : null != pe.documentElement.scrollLeft
                              ? pe.documentElement.scrollLeft
                              : pe.body.scrollLeft;
                        h && !g;

                      )
                        (A = (g = At(h.parentNode)) ? Z : h.parentNode),
                          Wt &&
                            A.scrollTop > A._gsMaxScrollY &&
                            (A.scrollTop = A._gsMaxScrollY),
                          Vt &&
                            A.scrollLeft > A._gsMaxScrollX &&
                            (A.scrollLeft = A._gsMaxScrollX),
                          (h = A);
                    Ut.isThrowing &&
                      (r ||
                        Ut.endX > z ||
                        Ut.endX < U ||
                        Ut.endY > at ||
                        Ut.endY < gt) &&
                      me(i.inertia || i.throwProps, r);
                  }
                  return Ut;
                }),
                (g.update = function (t, i, o) {
                  if (i && Ut.isPressed) {
                    var n = (0, a.M9)(e),
                      s = jt.apply({ x: Ut.x - T, y: Ut.y - M }),
                      r = (0, a.M9)(e.parentNode, !0);
                    r.apply({ x: n.e - s.x, y: n.f - s.y }, s),
                      (Ut.x -= s.x - r.e),
                      (Ut.y -= s.y - r.f),
                      ye(!0),
                      _e();
                  }
                  var h = Ut.x,
                    A = Ut.y;
                  return (
                    Ie(!i),
                    t ? Ut.applyBounds() : (Tt && o && ye(!0), ce(!0)),
                    i && (Te(Ut.pointerX, Ut.pointerY), Tt && ye(!0)),
                    Ut.isPressed &&
                      !i &&
                      ((Vt && Math.abs(h - Ut.x) > 0.01) ||
                        (Wt && Math.abs(A - Ut.y) > 0.01 && !Xt)) &&
                      _e(),
                    Ut.autoScroll &&
                      (lt(e.parentNode, Ut.isDragging),
                      (ie = Ut.isDragging),
                      ye(!0),
                      ht(e, Ee),
                      rt(e, Ee)),
                    Ut
                  );
                }),
                (g.enable = function (t) {
                  var a,
                    o,
                    s,
                    r = { lazy: !0 };
                  if (
                    (!1 !== i.cursor && (r.cursor = i.cursor || I),
                    n.utils.checkPrefix("touchCallout") &&
                      (r.touchCallout = "none"),
                    "soft" !== t)
                  ) {
                    for (
                      W(
                        $t,
                        Vt === Wt
                          ? "none"
                          : (i.allowNativeTouchScrolling &&
                              (e.scrollHeight === e.clientHeight) ==
                                (e.scrollWidth === e.clientHeight)) ||
                            i.allowEventDefault
                          ? "manipulation"
                          : Vt
                          ? "pan-y"
                          : "pan-x"
                      ),
                        o = $t.length;
                      --o > -1;

                    )
                      (s = $t[o]),
                        _ || tt(s, "mousedown", Ce),
                        tt(s, "touchstart", Ce),
                        tt(s, "click", Qe, !0),
                        n.set(s, r),
                        s.getBBox &&
                          s.ownerSVGElement &&
                          Vt !== Wt &&
                          n.set(s.ownerSVGElement, {
                            touchAction:
                              i.allowNativeTouchScrolling || i.allowEventDefault
                                ? "manipulation"
                                : Vt
                                ? "pan-y"
                                : "pan-x",
                          }),
                        i.allowContextMenu || tt(s, "contextmenu", we);
                    _t($t, !1);
                  }
                  return (
                    rt(e, Ee),
                    (w = !0),
                    m &&
                      "soft" !== t &&
                      m.track(
                        c || e,
                        zt ? "x,y" : Xt ? "rotation" : "top,left"
                      ),
                    (e._gsDragID = a = "d" + Y++),
                    (N[a] = Ut),
                    c && (c.enable(), (c.element._gsDragID = a)),
                    (i.bounds || Xt) && _e(),
                    i.bounds && Ut.applyBounds(),
                    Ut
                  );
                }),
                (g.disable = function (t) {
                  for (var i, a = Ut.isDragging, o = $t.length; --o > -1; )
                    pt($t[o], "cursor", null);
                  if ("soft" !== t) {
                    for (W($t, null), o = $t.length; --o > -1; )
                      (i = $t[o]),
                        pt(i, "touchCallout", null),
                        et(i, "mousedown", Ce),
                        et(i, "touchstart", Ce),
                        et(i, "click", Qe, !0),
                        et(i, "contextmenu", we);
                    _t($t, !0),
                      Dt &&
                        (et(Dt, "touchcancel", Me),
                        et(Dt, "touchend", Me),
                        et(Dt, "touchmove", be)),
                      et(pe, "mouseup", Me),
                      et(pe, "mousemove", be);
                  }
                  return (
                    ht(e, Ee),
                    (w = !1),
                    m &&
                      "soft" !== t &&
                      m.untrack(
                        c || e,
                        zt ? "x,y" : Xt ? "rotation" : "top,left"
                      ),
                    c && c.disable(),
                    $(ye),
                    (Ut.isDragging = Ut.isPressed = St = !1),
                    a && xt(Ut, "dragend", "onDragEnd"),
                    Ut
                  );
                }),
                (g.enabled = function (t, e) {
                  return arguments.length
                    ? t
                      ? Ut.enable(e)
                      : Ut.disable(e)
                    : w;
                }),
                (g.kill = g.revert =
                  function () {
                    return (
                      (Ut.isThrowing = !1),
                      Ut.tween && Ut.tween.kill(),
                      Ut.disable(),
                      n.set($t, { clearProps: "userSelect" }),
                      delete N[e._gsDragID],
                      Ut
                    );
                  }),
                ~Yt.indexOf("scroll") &&
                  ((c = g.scrollProxy =
                    new vt(
                      e,
                      (function (t, e) {
                        for (var i in e) i in t || (t[i] = e[i]);
                        return t;
                      })(
                        {
                          onKill: function () {
                            Ut.isPressed && Me(null);
                          },
                        },
                        i
                      )
                    )),
                  (e.style.overflowY = Wt && !x ? "auto" : "hidden"),
                  (e.style.overflowX = Vt && !x ? "auto" : "hidden"),
                  (e = c.content)),
                Xt
                  ? (te.rotation = 1)
                  : (Vt && (te[Kt] = 1), Wt && (te[Zt] = 1)),
                (Ae.force3D = !("force3D" in i) || i.force3D),
                B(o(g)),
                g.enable(),
                g
              );
            }
            return (
              (i = t),
              ((e = A).prototype = Object.create(i.prototype)),
              (e.prototype.constructor = e),
              (e.__proto__ = i),
              (A.register = function (t) {
                (n = t), Ct();
              }),
              (A.create = function (t, e) {
                return (
                  p || Ct(!0),
                  y(t).map(function (t) {
                    return new A(t, e);
                  })
                );
              }),
              (A.get = function (t) {
                return N[(y(t)[0] || {})._gsDragID];
              }),
              (A.timeSinceDrag = function () {
                return (J() - X) / 1e3;
              }),
              (A.hitTest = function (t, e, i) {
                if (t === e) return !1;
                var a,
                  o,
                  n,
                  s = ct(t),
                  r = ct(e),
                  h = s.top,
                  A = s.left,
                  g = s.right,
                  l = s.bottom,
                  p = s.width,
                  w = s.height,
                  y = r.left > g || r.right < A || r.top > l || r.bottom < h;
                return y || !i
                  ? !y
                  : ((n = -1 !== (i + "").indexOf("%")),
                    (i = parseFloat(i) || 0),
                    ((a = {
                      left: Math.max(A, r.left),
                      top: Math.max(h, r.top),
                    }).width = Math.min(g, r.right) - a.left),
                    (a.height = Math.min(l, r.bottom) - a.top),
                    !(a.width < 0 || a.height < 0) &&
                      (n
                        ? ((i *= 0.01),
                          (o = a.width * a.height) >= p * w * i ||
                            o >= r.width * r.height * i)
                        : a.width > i && a.height > i));
              }),
              A
            );
          })(
            (function () {
              function t(t) {
                (this._listeners = {}), (this.target = t || this);
              }
              var e = t.prototype;
              return (
                (e.addEventListener = function (t, e) {
                  var i = this._listeners[t] || (this._listeners[t] = []);
                  ~i.indexOf(e) || i.push(e);
                }),
                (e.removeEventListener = function (t, e) {
                  var i = this._listeners[t],
                    a = i && i.indexOf(e);
                  a >= 0 && i.splice(a, 1);
                }),
                (e.dispatchEvent = function (t) {
                  var e,
                    i = this;
                  return (
                    (this._listeners[t] || []).forEach(function (a) {
                      return (
                        !1 === a.call(i, { type: t, target: i.target }) &&
                        (e = !1)
                      );
                    }),
                    e
                  );
                }),
                t
              );
            })()
          );
        !(function (t, e) {
          for (var i in e) i in t || (t[i] = e[i]);
        })(bt.prototype, {
          pointerX: 0,
          pointerY: 0,
          startX: 0,
          startY: 0,
          deltaX: 0,
          deltaY: 0,
          isDragging: !1,
          isPressed: !1,
        }),
          (bt.zIndex = 1e3),
          (bt.version = "3.11.4"),
          M() && n.registerPlugin(bt);
      },
      898: function (t, e, i) {
        i.r(e),
          i.d(e, {
            DrawSVGPlugin: function () {
              return b;
            },
            default: function () {
              return b;
            },
          });
        var a,
          o,
          n,
          s,
          r,
          h,
          A,
          g,
          l = function () {
            return "undefined" != typeof window;
          },
          p = function () {
            return a || (l() && (a = window.gsap) && a.registerPlugin && a);
          },
          w = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
          y = {
            rect: ["width", "height"],
            circle: ["r", "r"],
            ellipse: ["rx", "ry"],
            line: ["x2", "y2"],
          },
          c = function (t) {
            return Math.round(1e4 * t) / 1e4;
          },
          x = function (t) {
            return parseFloat(t) || 0;
          },
          u = function (t, e) {
            var i = x(t);
            return ~t.indexOf("%") ? (i / 100) * e : i;
          },
          d = function (t, e) {
            return x(t.getAttribute(e));
          },
          f = Math.sqrt,
          m = function (t, e, i, a, o, n) {
            return f(
              Math.pow((x(i) - x(t)) * o, 2) + Math.pow((x(a) - x(e)) * n, 2)
            );
          },
          I = function (t) {
            return console.warn(t);
          },
          _ = function (t) {
            return "non-scaling-stroke" === t.getAttribute("vector-effect");
          },
          B = function (t) {
            if (!(t = o(t)[0])) return 0;
            var e,
              i,
              a,
              n,
              s,
              r,
              A,
              g = t.tagName.toLowerCase(),
              l = t.style,
              p = 1,
              x = 1;
            _(t) &&
              ((x = t.getScreenCTM()),
              (p = f(x.a * x.a + x.b * x.b)),
              (x = f(x.d * x.d + x.c * x.c)));
            try {
              i = t.getBBox();
            } catch (t) {
              I(
                "Some browsers won't measure invisible elements (like display:none or masks inside defs)."
              );
            }
            var u = i || { x: 0, y: 0, width: 0, height: 0 },
              B = u.x,
              v = u.y,
              C = u.width,
              b = u.height;
            if (
              ((i && (C || b)) ||
                !y[g] ||
                ((C = d(t, y[g][0])),
                (b = d(t, y[g][1])),
                "rect" !== g && "line" !== g && ((C *= 2), (b *= 2)),
                "line" === g &&
                  ((B = d(t, "x1")),
                  (v = d(t, "y1")),
                  (C = Math.abs(C - B)),
                  (b = Math.abs(b - v)))),
              "path" === g)
            )
              (n = l.strokeDasharray),
                (l.strokeDasharray = "none"),
                (e = t.getTotalLength() || 0),
                c(p) !== c(x) &&
                  !h &&
                  (h = 1) &&
                  I(
                    "Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."
                  ),
                (e *= (p + x) / 2),
                (l.strokeDasharray = n);
            else if ("rect" === g) e = 2 * C * p + 2 * b * x;
            else if ("line" === g) e = m(B, v, B + C, v + b, p, x);
            else if ("polyline" === g || "polygon" === g)
              for (
                a = t.getAttribute("points").match(w) || [],
                  "polygon" === g && a.push(a[0], a[1]),
                  e = 0,
                  s = 2;
                s < a.length;
                s += 2
              )
                e += m(a[s - 2], a[s - 1], a[s], a[s + 1], p, x) || 0;
            else
              ("circle" !== g && "ellipse" !== g) ||
                ((r = (C / 2) * p),
                (A = (b / 2) * x),
                (e = Math.PI * (3 * (r + A) - f((3 * r + A) * (r + 3 * A)))));
            return e || 0;
          },
          v = function (t, e) {
            if (!(t = o(t)[0])) return [0, 0];
            e || (e = B(t) + 1);
            var i = n.getComputedStyle(t),
              a = i.strokeDasharray || "",
              s = x(i.strokeDashoffset),
              r = a.indexOf(",");
            return (
              r < 0 && (r = a.indexOf(" ")),
              (a = r < 0 ? e : x(a.substr(0, r))) > e && (a = e),
              [-s || 0, a - s || 0]
            );
          },
          C = function () {
            l() &&
              (document,
              (n = window),
              (r = a = p()),
              (o = a.utils.toArray),
              (A = a.core.getStyleSaver),
              (g = a.core.reverting || function () {}),
              (s =
                -1 !== ((n.navigator || {}).userAgent || "").indexOf("Edge")));
          },
          b = {
            version: "3.11.4",
            name: "drawSVG",
            register: function (t) {
              (a = t), C();
            },
            init: function (t, e, i, a, o) {
              if (!t.getBBox) return !1;
              r || C();
              var h,
                g,
                l,
                p = B(t);
              return (
                (this.styles =
                  A &&
                  A(t, "strokeDashoffset,strokeDasharray,strokeMiterlimit")),
                (this.tween = i),
                (this._style = t.style),
                (this._target = t),
                e + "" == "true"
                  ? (e = "0 100%")
                  : e
                  ? -1 === (e + "").indexOf(" ") && (e = "0 " + e)
                  : (e = "0 0"),
                (g = (function (t, e, i) {
                  var a,
                    o,
                    n = t.indexOf(" ");
                  return (
                    n < 0
                      ? ((a = void 0 !== i ? i + "" : t), (o = t))
                      : ((a = t.substr(0, n)), (o = t.substr(n + 1))),
                    (a = u(a, e)) > (o = u(o, e)) ? [o, a] : [a, o]
                  );
                })(e, p, (h = v(t, p))[0])),
                (this._length = c(p)),
                (this._dash = c(h[1] - h[0])),
                (this._offset = c(-h[0])),
                (this._dashPT = this.add(
                  this,
                  "_dash",
                  this._dash,
                  c(g[1] - g[0]),
                  0,
                  0,
                  0,
                  0,
                  0,
                  1
                )),
                (this._offsetPT = this.add(
                  this,
                  "_offset",
                  this._offset,
                  c(-g[0]),
                  0,
                  0,
                  0,
                  0,
                  0,
                  1
                )),
                s &&
                  (l = n.getComputedStyle(t)).strokeLinecap !==
                    l.strokeLinejoin &&
                  ((g = x(l.strokeMiterlimit)),
                  this.add(t.style, "strokeMiterlimit", g, g + 0.01)),
                (this._live = _(t) || ~(e + "").indexOf("live")),
                (this._nowrap = ~(e + "").indexOf("nowrap")),
                this._props.push("drawSVG"),
                1
              );
            },
            render: function (t, e) {
              if (e.tween._time || !g()) {
                var i,
                  a,
                  o,
                  n,
                  s = e._pt,
                  r = e._style;
                if (s) {
                  for (
                    e._live &&
                    (i = B(e._target)) !== e._length &&
                    ((a = i / e._length),
                    (e._length = i),
                    e._offsetPT && ((e._offsetPT.s *= a), (e._offsetPT.c *= a)),
                    e._dashPT
                      ? ((e._dashPT.s *= a), (e._dashPT.c *= a))
                      : (e._dash *= a));
                    s;

                  )
                    s.r(t, s.d), (s = s._next);
                  (o = e._dash || (t && 1 !== t && 1e-4) || 0),
                    (i = e._length - o + 0.1),
                    (n = e._offset),
                    o &&
                      n &&
                      o + Math.abs(n % e._length) > e._length - 0.2 &&
                      (n += n < 0 ? 0.1 : -0.1) &&
                      (i += 0.1),
                    (r.strokeDashoffset = o ? n : n + 0.001),
                    (r.strokeDasharray =
                      i < 0.2
                        ? "none"
                        : o
                        ? o + "px," + (e._nowrap ? 999999 : i) + "px"
                        : "0px, 999999px");
                }
              } else e.styles.revert();
            },
            getLength: B,
            getPosition: v,
          };
        p() && a.registerPlugin(b);
      },
      317: function (t, e, i) {
        function a(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }
        function o(t, e) {
          (t.prototype = Object.create(e.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = e);
        }
        i.d(e, {
          $i: function () {
            return st;
          },
          DY: function () {
            return pt;
          },
          Fc: function () {
            return m;
          },
          Fo: function () {
            return Ai;
          },
          GN: function () {
            return me;
          },
          JV: function () {
            return hi;
          },
          Ks: function () {
            return ai;
          },
          Ok: function () {
            return wt;
          },
          Pr: function () {
            return ct;
          },
          S5: function () {
            return ti;
          },
          SI: function () {
            return J;
          },
          UI: function () {
            return Ae;
          },
          Wy: function () {
            return Ut;
          },
          bQ: function () {
            return Y;
          },
          cy: function () {
            return ut;
          },
          d4: function () {
            return j;
          },
          fS: function () {
            return yt;
          },
          if: function () {
            return Ne;
          },
          kr: function () {
            return _e;
          },
          l1: function () {
            return Ge;
          },
          lC: function () {
            return W;
          },
          m2: function () {
            return D;
          },
          p8: function () {
            return Ii;
          },
          r9: function () {
            return Q;
          },
          xr: function () {
            return Be;
          },
        });
        var n,
          s,
          r,
          h,
          A,
          g,
          l,
          p,
          w,
          y,
          c,
          x,
          u,
          d,
          f,
          m = {
            autoSleep: 120,
            force3D: "auto",
            nullTargetWarn: 1,
            units: { lineHeight: "" },
          },
          I = { duration: 0.5, overwrite: !1, delay: 0 },
          _ = 1e8,
          B = 1e-8,
          v = 2 * Math.PI,
          C = v / 4,
          b = 0,
          T = Math.sqrt,
          M = Math.cos,
          E = Math.sin,
          Q = function (t) {
            return "string" == typeof t;
          },
          F = function (t) {
            return "function" == typeof t;
          },
          S = function (t) {
            return "number" == typeof t;
          },
          D = function (t) {
            return void 0 === t;
          },
          k = function (t) {
            return "object" == typeof t;
          },
          P = function (t) {
            return !1 !== t;
          },
          G = function () {
            return "undefined" != typeof window;
          },
          L = function (t) {
            return F(t) || Q(t);
          },
          O =
            ("function" == typeof ArrayBuffer && ArrayBuffer.isView) ||
            function () {},
          H = Array.isArray,
          R = /(?:-?\.?\d|\.)+/gi,
          J = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
          j = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
          N = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
          Y = /[+-]=-?[.\d]+/,
          z = /[^,'"\[\]\s]+/gi,
          X = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
          K = {},
          Z = {},
          V = function (t) {
            return (Z = vt(t, K)) && Ii;
          },
          W = function (t, e) {
            return console.warn(
              "Invalid property",
              t,
              "set to",
              e,
              "Missing plugin? gsap.registerPlugin()"
            );
          },
          q = function (t, e) {
            return !e && console.warn(t);
          },
          U = function (t, e) {
            return (t && (K[t] = e) && Z && (Z[t] = e)) || K;
          },
          $ = function () {
            return 0;
          },
          tt = { suppressEvents: !0, isStart: !0, kill: !1 },
          et = { suppressEvents: !0, kill: !1 },
          it = { suppressEvents: !0 },
          at = {},
          ot = [],
          nt = {},
          st = {},
          rt = {},
          ht = 30,
          At = [],
          gt = "",
          lt = function (t) {
            var e,
              i,
              a = t[0];
            if ((k(a) || F(a) || (t = [t]), !(e = (a._gsap || {}).harness))) {
              for (i = At.length; i-- && !At[i].targetTest(a); );
              e = At[i];
            }
            for (i = t.length; i--; )
              (t[i] && (t[i]._gsap || (t[i]._gsap = new Ge(t[i], e)))) ||
                t.splice(i, 1);
            return t;
          },
          pt = function (t) {
            return t._gsap || lt(ee(t))[0]._gsap;
          },
          wt = function (t, e, i) {
            return (i = t[e]) && F(i)
              ? t[e]()
              : (D(i) && t.getAttribute && t.getAttribute(e)) || i;
          },
          yt = function (t, e) {
            return (t = t.split(",")).forEach(e) || t;
          },
          ct = function (t) {
            return Math.round(1e5 * t) / 1e5 || 0;
          },
          xt = function (t) {
            return Math.round(1e7 * t) / 1e7 || 0;
          },
          ut = function (t, e) {
            var i = e.charAt(0),
              a = parseFloat(e.substr(2));
            return (
              (t = parseFloat(t)),
              "+" === i ? t + a : "-" === i ? t - a : "*" === i ? t * a : t / a
            );
          },
          dt = function (t, e) {
            for (var i = e.length, a = 0; t.indexOf(e[a]) < 0 && ++a < i; );
            return a < i;
          },
          ft = function () {
            var t,
              e,
              i = ot.length,
              a = ot.slice(0);
            for (nt = {}, ot.length = 0, t = 0; t < i; t++)
              (e = a[t]) &&
                e._lazy &&
                (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
          },
          mt = function (t, e, i, a) {
            ot.length && !s && ft(),
              t.render(e, i, a || (s && e < 0 && (t._initted || t._startAt))),
              ot.length && !s && ft();
          },
          It = function (t) {
            var e = parseFloat(t);
            return (e || 0 === e) && (t + "").match(z).length < 2
              ? e
              : Q(t)
              ? t.trim()
              : t;
          },
          _t = function (t) {
            return t;
          },
          Bt = function (t, e) {
            for (var i in e) i in t || (t[i] = e[i]);
            return t;
          },
          vt = function (t, e) {
            for (var i in e) t[i] = e[i];
            return t;
          },
          Ct = function t(e, i) {
            for (var a in i)
              "__proto__" !== a &&
                "constructor" !== a &&
                "prototype" !== a &&
                (e[a] = k(i[a]) ? t(e[a] || (e[a] = {}), i[a]) : i[a]);
            return e;
          },
          bt = function (t, e) {
            var i,
              a = {};
            for (i in t) i in e || (a[i] = t[i]);
            return a;
          },
          Tt = function (t) {
            var e,
              i = t.parent || h,
              a = t.keyframes
                ? ((e = H(t.keyframes)),
                  function (t, i) {
                    for (var a in i)
                      a in t ||
                        ("duration" === a && e) ||
                        "ease" === a ||
                        (t[a] = i[a]);
                  })
                : Bt;
            if (P(t.inherit))
              for (; i; ) a(t, i.vars.defaults), (i = i.parent || i._dp);
            return t;
          },
          Mt = function (t, e, i, a, o) {
            void 0 === i && (i = "_first"), void 0 === a && (a = "_last");
            var n,
              s = t[a];
            if (o) for (n = e[o]; s && s[o] > n; ) s = s._prev;
            return (
              s
                ? ((e._next = s._next), (s._next = e))
                : ((e._next = t[i]), (t[i] = e)),
              e._next ? (e._next._prev = e) : (t[a] = e),
              (e._prev = s),
              (e.parent = e._dp = t),
              e
            );
          },
          Et = function (t, e, i, a) {
            void 0 === i && (i = "_first"), void 0 === a && (a = "_last");
            var o = e._prev,
              n = e._next;
            o ? (o._next = n) : t[i] === e && (t[i] = n),
              n ? (n._prev = o) : t[a] === e && (t[a] = o),
              (e._next = e._prev = e.parent = null);
          },
          Qt = function (t, e) {
            t.parent &&
              (!e || t.parent.autoRemoveChildren) &&
              t.parent.remove(t),
              (t._act = 0);
          },
          Ft = function (t, e) {
            if (t && (!e || e._end > t._dur || e._start < 0))
              for (var i = t; i; ) (i._dirty = 1), (i = i.parent);
            return t;
          },
          St = function (t, e, i, a) {
            return (
              t._startAt &&
              (s
                ? t._startAt.revert(et)
                : (t.vars.immediateRender && !t.vars.autoRevert) ||
                  t._startAt.render(e, !0, a))
            );
          },
          Dt = function t(e) {
            return !e || (e._ts && t(e.parent));
          },
          kt = function (t) {
            return t._repeat
              ? Pt(t._tTime, (t = t.duration() + t._rDelay)) * t
              : 0;
          },
          Pt = function (t, e) {
            var i = Math.floor((t /= e));
            return t && i === t ? i - 1 : i;
          },
          Gt = function (t, e) {
            return (
              (t - e._start) * e._ts +
              (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
            );
          },
          Lt = function (t) {
            return (t._end = xt(
              t._start + (t._tDur / Math.abs(t._ts || t._rts || B) || 0)
            ));
          },
          Ot = function (t, e) {
            var i = t._dp;
            return (
              i &&
                i.smoothChildTiming &&
                t._ts &&
                ((t._start = xt(
                  i._time -
                    (t._ts > 0
                      ? e / t._ts
                      : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)
                )),
                Lt(t),
                i._dirty || Ft(i, t)),
              t
            );
          },
          Ht = function (t, e) {
            var i;
            if (
              ((e._time || (e._initted && !e._dur)) &&
                ((i = Gt(t.rawTime(), e)),
                (!e._dur || qt(0, e.totalDuration(), i) - e._tTime > B) &&
                  e.render(i, !0)),
              Ft(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
            ) {
              if (t._dur < t.duration())
                for (i = t; i._dp; )
                  i.rawTime() >= 0 && i.totalTime(i._tTime), (i = i._dp);
              t._zTime = -1e-8;
            }
          },
          Rt = function (t, e, i, a) {
            return (
              e.parent && Qt(e),
              (e._start = xt(
                (S(i) ? i : i || t !== h ? Zt(t, i, e) : t._time) + e._delay
              )),
              (e._end = xt(
                e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)
              )),
              Mt(t, e, "_first", "_last", t._sort ? "_start" : 0),
              Yt(e) || (t._recent = e),
              a || Ht(t, e),
              t._ts < 0 && Ot(t, t._tTime),
              t
            );
          },
          Jt = function (t, e) {
            return (
              (K.ScrollTrigger || W("scrollTrigger", e)) &&
              K.ScrollTrigger.create(e, t)
            );
          },
          jt = function (t, e, i, a, o) {
            return (
              Ye(t, e, o),
              t._initted
                ? !i &&
                  t._pt &&
                  !s &&
                  ((t._dur && !1 !== t.vars.lazy) ||
                    (!t._dur && t.vars.lazy)) &&
                  w !== Be.frame
                  ? (ot.push(t), (t._lazy = [o, a]), 1)
                  : void 0
                : 1
            );
          },
          Nt = function t(e) {
            var i = e.parent;
            return (
              i && i._ts && i._initted && !i._lock && (i.rawTime() < 0 || t(i))
            );
          },
          Yt = function (t) {
            var e = t.data;
            return "isFromStart" === e || "isStart" === e;
          },
          zt = function (t, e, i, a) {
            var o = t._repeat,
              n = xt(e) || 0,
              s = t._tTime / t._tDur;
            return (
              s && !a && (t._time *= n / t._dur),
              (t._dur = n),
              (t._tDur = o
                ? o < 0
                  ? 1e10
                  : xt(n * (o + 1) + t._rDelay * o)
                : n),
              s > 0 && !a && Ot(t, (t._tTime = t._tDur * s)),
              t.parent && Lt(t),
              i || Ft(t.parent, t),
              t
            );
          },
          Xt = function (t) {
            return t instanceof Oe ? Ft(t) : zt(t, t._dur);
          },
          Kt = { _start: 0, endTime: $, totalDuration: $ },
          Zt = function t(e, i, a) {
            var o,
              n,
              s,
              r = e.labels,
              h = e._recent || Kt,
              A = e.duration() >= _ ? h.endTime(!1) : e._dur;
            return Q(i) && (isNaN(i) || i in r)
              ? ((n = i.charAt(0)),
                (s = "%" === i.substr(-1)),
                (o = i.indexOf("=")),
                "<" === n || ">" === n
                  ? (o >= 0 && (i = i.replace(/=/, "")),
                    ("<" === n ? h._start : h.endTime(h._repeat >= 0)) +
                      (parseFloat(i.substr(1)) || 0) *
                        (s ? (o < 0 ? h : a).totalDuration() / 100 : 1))
                  : o < 0
                  ? (i in r || (r[i] = A), r[i])
                  : ((n = parseFloat(i.charAt(o - 1) + i.substr(o + 1))),
                    s &&
                      a &&
                      (n = (n / 100) * (H(a) ? a[0] : a).totalDuration()),
                    o > 1 ? t(e, i.substr(0, o - 1), a) + n : A + n))
              : null == i
              ? A
              : +i;
          },
          Vt = function (t, e, i) {
            var a,
              o,
              n = S(e[1]),
              s = (n ? 2 : 1) + (t < 2 ? 0 : 1),
              r = e[s];
            if ((n && (r.duration = e[1]), (r.parent = i), t)) {
              for (a = r, o = i; o && !("immediateRender" in a); )
                (a = o.vars.defaults || {}),
                  (o = P(o.vars.inherit) && o.parent);
              (r.immediateRender = P(a.immediateRender)),
                t < 2 ? (r.runBackwards = 1) : (r.startAt = e[s - 1]);
            }
            return new Ve(e[0], r, e[s + 1]);
          },
          Wt = function (t, e) {
            return t || 0 === t ? e(t) : e;
          },
          qt = function (t, e, i) {
            return i < t ? t : i > e ? e : i;
          },
          Ut = function (t, e) {
            return Q(t) && (e = X.exec(t)) ? e[1] : "";
          },
          $t = [].slice,
          te = function (t, e) {
            return (
              t &&
              k(t) &&
              "length" in t &&
              ((!e && !t.length) || (t.length - 1 in t && k(t[0]))) &&
              !t.nodeType &&
              t !== A
            );
          },
          ee = function (t, e, i) {
            return r && !e && r.selector
              ? r.selector(t)
              : !Q(t) || i || (!g && ve())
              ? H(t)
                ? (function (t, e, i) {
                    return (
                      void 0 === i && (i = []),
                      t.forEach(function (t) {
                        var a;
                        return (Q(t) && !e) || te(t, 1)
                          ? (a = i).push.apply(a, ee(t))
                          : i.push(t);
                      }) || i
                    );
                  })(t, i)
                : te(t)
                ? $t.call(t, 0)
                : t
                ? [t]
                : []
              : $t.call((e || l).querySelectorAll(t), 0);
          },
          ie = function (t) {
            return (
              (t = ee(t)[0] || q("Invalid scope") || {}),
              function (e) {
                var i = t.current || t.nativeElement || t;
                return ee(
                  e,
                  i.querySelectorAll
                    ? i
                    : i === t
                    ? q("Invalid scope") || l.createElement("div")
                    : t
                );
              }
            );
          },
          ae = function (t) {
            return t.sort(function () {
              return 0.5 - Math.random();
            });
          },
          oe = function (t) {
            if (F(t)) return t;
            var e = k(t) ? t : { each: t },
              i = Fe(e.ease),
              a = e.from || 0,
              o = parseFloat(e.base) || 0,
              n = {},
              s = a > 0 && a < 1,
              r = isNaN(a) || s,
              h = e.axis,
              A = a,
              g = a;
            return (
              Q(a)
                ? (A = g = { center: 0.5, edges: 0.5, end: 1 }[a] || 0)
                : !s && r && ((A = a[0]), (g = a[1])),
              function (t, s, l) {
                var p,
                  w,
                  y,
                  c,
                  x,
                  u,
                  d,
                  f,
                  m,
                  I = (l || e).length,
                  B = n[I];
                if (!B) {
                  if (!(m = "auto" === e.grid ? 0 : (e.grid || [1, _])[1])) {
                    for (
                      d = -_;
                      d < (d = l[m++].getBoundingClientRect().left) && m < I;

                    );
                    m--;
                  }
                  for (
                    B = n[I] = [],
                      p = r ? Math.min(m, I) * A - 0.5 : a % m,
                      w = m === _ ? 0 : r ? (I * g) / m - 0.5 : (a / m) | 0,
                      d = 0,
                      f = _,
                      u = 0;
                    u < I;
                    u++
                  )
                    (y = (u % m) - p),
                      (c = w - ((u / m) | 0)),
                      (B[u] = x =
                        h ? Math.abs("y" === h ? c : y) : T(y * y + c * c)),
                      x > d && (d = x),
                      x < f && (f = x);
                  "random" === a && ae(B),
                    (B.max = d - f),
                    (B.min = f),
                    (B.v = I =
                      (parseFloat(e.amount) ||
                        parseFloat(e.each) *
                          (m > I
                            ? I - 1
                            : h
                            ? "y" === h
                              ? I / m
                              : m
                            : Math.max(m, I / m)) ||
                        0) * ("edges" === a ? -1 : 1)),
                    (B.b = I < 0 ? o - I : o),
                    (B.u = Ut(e.amount || e.each) || 0),
                    (i = i && I < 0 ? Ee(i) : i);
                }
                return (
                  (I = (B[t] - B.min) / B.max || 0),
                  xt(B.b + (i ? i(I) : I) * B.v) + B.u
                );
              }
            );
          },
          ne = function (t) {
            var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
            return function (i) {
              var a = xt(Math.round(parseFloat(i) / t) * t * e);
              return (a - (a % 1)) / e + (S(i) ? 0 : Ut(i));
            };
          },
          se = function (t, e) {
            var i,
              a,
              o = H(t);
            return (
              !o &&
                k(t) &&
                ((i = o = t.radius || _),
                t.values
                  ? ((t = ee(t.values)), (a = !S(t[0])) && (i *= i))
                  : (t = ne(t.increment))),
              Wt(
                e,
                o
                  ? F(t)
                    ? function (e) {
                        return (a = t(e)), Math.abs(a - e) <= i ? a : e;
                      }
                    : function (e) {
                        for (
                          var o,
                            n,
                            s = parseFloat(a ? e.x : e),
                            r = parseFloat(a ? e.y : 0),
                            h = _,
                            A = 0,
                            g = t.length;
                          g--;

                        )
                          (o = a
                            ? (o = t[g].x - s) * o + (n = t[g].y - r) * n
                            : Math.abs(t[g] - s)) < h && ((h = o), (A = g));
                        return (
                          (A = !i || h <= i ? t[A] : e),
                          a || A === e || S(e) ? A : A + Ut(e)
                        );
                      }
                  : ne(t)
              )
            );
          },
          re = function (t, e, i, a) {
            return Wt(H(t) ? !e : !0 === i ? !!(i = 0) : !a, function () {
              return H(t)
                ? t[~~(Math.random() * t.length)]
                : (i = i || 1e-5) &&
                    (a = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) &&
                    Math.floor(
                      Math.round(
                        (t - i / 2 + Math.random() * (e - t + 0.99 * i)) / i
                      ) *
                        i *
                        a
                    ) / a;
            });
          },
          he = function (t, e, i) {
            return Wt(i, function (i) {
              return t[~~e(i)];
            });
          },
          Ae = function (t) {
            for (
              var e, i, a, o, n = 0, s = "";
              ~(e = t.indexOf("random(", n));

            )
              (a = t.indexOf(")", e)),
                (o = "[" === t.charAt(e + 7)),
                (i = t.substr(e + 7, a - e - 7).match(o ? z : R)),
                (s +=
                  t.substr(n, e - n) +
                  re(o ? i : +i[0], o ? 0 : +i[1], +i[2] || 1e-5)),
                (n = a + 1);
            return s + t.substr(n, t.length - n);
          },
          ge = function (t, e, i, a, o) {
            var n = e - t,
              s = a - i;
            return Wt(o, function (e) {
              return i + (((e - t) / n) * s || 0);
            });
          },
          le = function (t, e, i) {
            var a,
              o,
              n,
              s = t.labels,
              r = _;
            for (a in s)
              (o = s[a] - e) < 0 == !!i &&
                o &&
                r > (o = Math.abs(o)) &&
                ((n = a), (r = o));
            return n;
          },
          pe = function (t, e, i) {
            var a,
              o,
              n,
              s = t.vars,
              h = s[e],
              A = r,
              g = t._ctx;
            if (h)
              return (
                (a = s[e + "Params"]),
                (o = s.callbackScope || t),
                i && ot.length && ft(),
                g && (r = g),
                (n = a ? h.apply(o, a) : h.call(o)),
                (r = A),
                n
              );
          },
          we = function (t) {
            return (
              Qt(t),
              t.scrollTrigger && t.scrollTrigger.kill(!!s),
              t.progress() < 1 && pe(t, "onInterrupt"),
              t
            );
          },
          ye = 255,
          ce = {
            aqua: [0, ye, ye],
            lime: [0, ye, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, ye],
            navy: [0, 0, 128],
            white: [ye, ye, ye],
            olive: [128, 128, 0],
            yellow: [ye, ye, 0],
            orange: [ye, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [ye, 0, 0],
            pink: [ye, 192, 203],
            cyan: [0, ye, ye],
            transparent: [ye, ye, ye, 0],
          },
          xe = function (t, e, i) {
            return (
              ((6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1
                ? e + (i - e) * t * 6
                : t < 0.5
                ? i
                : 3 * t < 2
                ? e + (i - e) * (2 / 3 - t) * 6
                : e) *
                ye +
                0.5) |
              0
            );
          },
          ue = function (t, e, i) {
            var a,
              o,
              n,
              s,
              r,
              h,
              A,
              g,
              l,
              p,
              w = t ? (S(t) ? [t >> 16, (t >> 8) & ye, t & ye] : 0) : ce.black;
            if (!w) {
              if (
                ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), ce[t])
              )
                w = ce[t];
              else if ("#" === t.charAt(0)) {
                if (
                  (t.length < 6 &&
                    ((a = t.charAt(1)),
                    (o = t.charAt(2)),
                    (n = t.charAt(3)),
                    (t =
                      "#" +
                      a +
                      a +
                      o +
                      o +
                      n +
                      n +
                      (5 === t.length ? t.charAt(4) + t.charAt(4) : ""))),
                  9 === t.length)
                )
                  return [
                    (w = parseInt(t.substr(1, 6), 16)) >> 16,
                    (w >> 8) & ye,
                    w & ye,
                    parseInt(t.substr(7), 16) / 255,
                  ];
                w = [
                  (t = parseInt(t.substr(1), 16)) >> 16,
                  (t >> 8) & ye,
                  t & ye,
                ];
              } else if ("hsl" === t.substr(0, 3))
                if (((w = p = t.match(R)), e)) {
                  if (~t.indexOf("="))
                    return (w = t.match(J)), i && w.length < 4 && (w[3] = 1), w;
                } else
                  (s = (+w[0] % 360) / 360),
                    (r = +w[1] / 100),
                    (a =
                      2 * (h = +w[2] / 100) -
                      (o = h <= 0.5 ? h * (r + 1) : h + r - h * r)),
                    w.length > 3 && (w[3] *= 1),
                    (w[0] = xe(s + 1 / 3, a, o)),
                    (w[1] = xe(s, a, o)),
                    (w[2] = xe(s - 1 / 3, a, o));
              else w = t.match(R) || ce.transparent;
              w = w.map(Number);
            }
            return (
              e &&
                !p &&
                ((a = w[0] / ye),
                (o = w[1] / ye),
                (n = w[2] / ye),
                (h = ((A = Math.max(a, o, n)) + (g = Math.min(a, o, n))) / 2),
                A === g
                  ? (s = r = 0)
                  : ((l = A - g),
                    (r = h > 0.5 ? l / (2 - A - g) : l / (A + g)),
                    (s =
                      A === a
                        ? (o - n) / l + (o < n ? 6 : 0)
                        : A === o
                        ? (n - a) / l + 2
                        : (a - o) / l + 4),
                    (s *= 60)),
                (w[0] = ~~(s + 0.5)),
                (w[1] = ~~(100 * r + 0.5)),
                (w[2] = ~~(100 * h + 0.5))),
              i && w.length < 4 && (w[3] = 1),
              w
            );
          },
          de = function (t) {
            var e = [],
              i = [],
              a = -1;
            return (
              t.split(me).forEach(function (t) {
                var o = t.match(j) || [];
                e.push.apply(e, o), i.push((a += o.length + 1));
              }),
              (e.c = i),
              e
            );
          },
          fe = function (t, e, i) {
            var a,
              o,
              n,
              s,
              r = "",
              h = (t + r).match(me),
              A = e ? "hsla(" : "rgba(",
              g = 0;
            if (!h) return t;
            if (
              ((h = h.map(function (t) {
                return (
                  (t = ue(t, e, 1)) &&
                  A +
                    (e
                      ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3]
                      : t.join(",")) +
                    ")"
                );
              })),
              i && ((n = de(t)), (a = i.c).join(r) !== n.c.join(r)))
            )
              for (s = (o = t.replace(me, "1").split(j)).length - 1; g < s; g++)
                r +=
                  o[g] +
                  (~a.indexOf(g)
                    ? h.shift() || A + "0,0,0,0)"
                    : (n.length ? n : h.length ? h : i).shift());
            if (!o)
              for (s = (o = t.split(me)).length - 1; g < s; g++)
                r += o[g] + h[g];
            return r + o[s];
          },
          me = (function () {
            var t,
              e =
                "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
            for (t in ce) e += "|" + t + "\\b";
            return new RegExp(e + ")", "gi");
          })(),
          Ie = /hsl[a]?\(/,
          _e = function (t) {
            var e,
              i = t.join(" ");
            if (((me.lastIndex = 0), me.test(i)))
              return (
                (e = Ie.test(i)),
                (t[1] = fe(t[1], e)),
                (t[0] = fe(t[0], e, de(t[1]))),
                !0
              );
          },
          Be = (function () {
            var t,
              e,
              i,
              a,
              o,
              n,
              s = Date.now,
              r = 500,
              h = 33,
              w = s(),
              y = w,
              x = 1e3 / 240,
              u = x,
              d = [],
              f = function i(A) {
                var g,
                  l,
                  p,
                  c,
                  f = s() - y,
                  m = !0 === A;
                if (
                  (f > r && (w += f - h),
                  ((g = (p = (y += f) - w) - u) > 0 || m) &&
                    ((c = ++a.frame),
                    (o = p - 1e3 * a.time),
                    (a.time = p /= 1e3),
                    (u += g + (g >= x ? 4 : x - g)),
                    (l = 1)),
                  m || (t = e(i)),
                  l)
                )
                  for (n = 0; n < d.length; n++) d[n](p, o, c, A);
              };
            return (a = {
              time: 0,
              frame: 0,
              tick: function () {
                f(!0);
              },
              deltaRatio: function (t) {
                return o / (1e3 / (t || 60));
              },
              wake: function () {
                p &&
                  (!g &&
                    G() &&
                    ((A = g = window),
                    (l = A.document || {}),
                    (K.gsap = Ii),
                    (A.gsapVersions || (A.gsapVersions = [])).push(Ii.version),
                    V(Z || A.GreenSockGlobals || (!A.gsap && A) || {}),
                    (i = A.requestAnimationFrame)),
                  t && a.sleep(),
                  (e =
                    i ||
                    function (t) {
                      return setTimeout(t, (u - 1e3 * a.time + 1) | 0);
                    }),
                  (c = 1),
                  f(2));
              },
              sleep: function () {
                (i ? A.cancelAnimationFrame : clearTimeout)(t),
                  (c = 0),
                  (e = $);
              },
              lagSmoothing: function (t, e) {
                (r = t || 1 / 0), (h = Math.min(e || 33, r));
              },
              fps: function (t) {
                (x = 1e3 / (t || 240)), (u = 1e3 * a.time + x);
              },
              add: function (t, e, i) {
                var o = e
                  ? function (e, i, n, s) {
                      t(e, i, n, s), a.remove(o);
                    }
                  : t;
                return a.remove(t), d[i ? "unshift" : "push"](o), ve(), o;
              },
              remove: function (t, e) {
                ~(e = d.indexOf(t)) && d.splice(e, 1) && n >= e && n--;
              },
              _listeners: d,
            });
          })(),
          ve = function () {
            return !c && Be.wake();
          },
          Ce = {},
          be = /^[\d.\-M][\d.\-,\s]/,
          Te = /["']/g,
          Me = function (t) {
            for (
              var e,
                i,
                a,
                o = {},
                n = t.substr(1, t.length - 3).split(":"),
                s = n[0],
                r = 1,
                h = n.length;
              r < h;
              r++
            )
              (i = n[r]),
                (e = r !== h - 1 ? i.lastIndexOf(",") : i.length),
                (a = i.substr(0, e)),
                (o[s] = isNaN(a) ? a.replace(Te, "").trim() : +a),
                (s = i.substr(e + 1).trim());
            return o;
          },
          Ee = function (t) {
            return function (e) {
              return 1 - t(1 - e);
            };
          },
          Qe = function t(e, i) {
            for (var a, o = e._first; o; )
              o instanceof Oe
                ? t(o, i)
                : !o.vars.yoyoEase ||
                  (o._yoyo && o._repeat) ||
                  o._yoyo === i ||
                  (o.timeline
                    ? t(o.timeline, i)
                    : ((a = o._ease),
                      (o._ease = o._yEase),
                      (o._yEase = a),
                      (o._yoyo = i))),
                (o = o._next);
          },
          Fe = function (t, e) {
            return (
              (t &&
                (F(t)
                  ? t
                  : Ce[t] ||
                    (function (t) {
                      var e,
                        i,
                        a,
                        o,
                        n = (t + "").split("("),
                        s = Ce[n[0]];
                      return s && n.length > 1 && s.config
                        ? s.config.apply(
                            null,
                            ~t.indexOf("{")
                              ? [Me(n[1])]
                              : ((e = t),
                                (i = e.indexOf("(") + 1),
                                (a = e.indexOf(")")),
                                (o = e.indexOf("(", i)),
                                e.substring(
                                  i,
                                  ~o && o < a ? e.indexOf(")", a + 1) : a
                                ))
                                  .split(",")
                                  .map(It)
                          )
                        : Ce._CE && be.test(t)
                        ? Ce._CE("", t)
                        : s;
                    })(t))) ||
              e
            );
          },
          Se = function (t, e, i, a) {
            void 0 === i &&
              (i = function (t) {
                return 1 - e(1 - t);
              }),
              void 0 === a &&
                (a = function (t) {
                  return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
                });
            var o,
              n = { easeIn: e, easeOut: i, easeInOut: a };
            return (
              yt(t, function (t) {
                for (var e in ((Ce[t] = K[t] = n),
                (Ce[(o = t.toLowerCase())] = i),
                n))
                  Ce[
                    o +
                      ("easeIn" === e
                        ? ".in"
                        : "easeOut" === e
                        ? ".out"
                        : ".inOut")
                  ] = Ce[t + "." + e] = n[e];
              }),
              n
            );
          },
          De = function (t) {
            return function (e) {
              return e < 0.5
                ? (1 - t(1 - 2 * e)) / 2
                : 0.5 + t(2 * (e - 0.5)) / 2;
            };
          },
          ke = function t(e, i, a) {
            var o = i >= 1 ? i : 1,
              n = (a || (e ? 0.3 : 0.45)) / (i < 1 ? i : 1),
              s = (n / v) * (Math.asin(1 / o) || 0),
              r = function (t) {
                return 1 === t
                  ? 1
                  : o * Math.pow(2, -10 * t) * E((t - s) * n) + 1;
              },
              h =
                "out" === e
                  ? r
                  : "in" === e
                  ? function (t) {
                      return 1 - r(1 - t);
                    }
                  : De(r);
            return (
              (n = v / n),
              (h.config = function (i, a) {
                return t(e, i, a);
              }),
              h
            );
          },
          Pe = function t(e, i) {
            void 0 === i && (i = 1.70158);
            var a = function (t) {
                return t ? --t * t * ((i + 1) * t + i) + 1 : 0;
              },
              o =
                "out" === e
                  ? a
                  : "in" === e
                  ? function (t) {
                      return 1 - a(1 - t);
                    }
                  : De(a);
            return (
              (o.config = function (i) {
                return t(e, i);
              }),
              o
            );
          };
        yt("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
          var i = e < 5 ? e + 1 : e;
          Se(
            t + ",Power" + (i - 1),
            e
              ? function (t) {
                  return Math.pow(t, i);
                }
              : function (t) {
                  return t;
                },
            function (t) {
              return 1 - Math.pow(1 - t, i);
            },
            function (t) {
              return t < 0.5
                ? Math.pow(2 * t, i) / 2
                : 1 - Math.pow(2 * (1 - t), i) / 2;
            }
          );
        }),
          (Ce.Linear.easeNone = Ce.none = Ce.Linear.easeIn),
          Se("Elastic", ke("in"), ke("out"), ke()),
          (x = 7.5625),
          (d = 1 / (u = 2.75)),
          Se(
            "Bounce",
            function (t) {
              return 1 - f(1 - t);
            },
            (f = function (t) {
              return t < d
                ? x * t * t
                : t < 0.7272727272727273
                ? x * Math.pow(t - 1.5 / u, 2) + 0.75
                : t < 0.9090909090909092
                ? x * (t -= 2.25 / u) * t + 0.9375
                : x * Math.pow(t - 2.625 / u, 2) + 0.984375;
            })
          ),
          Se("Expo", function (t) {
            return t ? Math.pow(2, 10 * (t - 1)) : 0;
          }),
          Se("Circ", function (t) {
            return -(T(1 - t * t) - 1);
          }),
          Se("Sine", function (t) {
            return 1 === t ? 1 : 1 - M(t * C);
          }),
          Se("Back", Pe("in"), Pe("out"), Pe()),
          (Ce.SteppedEase =
            Ce.steps =
            K.SteppedEase =
              {
                config: function (t, e) {
                  void 0 === t && (t = 1);
                  var i = 1 / t,
                    a = t + (e ? 0 : 1),
                    o = e ? 1 : 0;
                  return function (t) {
                    return (((a * qt(0, 0.99999999, t)) | 0) + o) * i;
                  };
                },
              }),
          (I.ease = Ce["quad.out"]),
          yt(
            "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
            function (t) {
              return (gt += t + "," + t + "Params,");
            }
          );
        var Ge = function (t, e) {
            (this.id = b++),
              (t._gsap = this),
              (this.target = t),
              (this.harness = e),
              (this.get = e ? e.get : wt),
              (this.set = e ? e.getSetter : ti);
          },
          Le = (function () {
            function t(t) {
              (this.vars = t),
                (this._delay = +t.delay || 0),
                (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
                  ((this._rDelay = t.repeatDelay || 0),
                  (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
                (this._ts = 1),
                zt(this, +t.duration, 1, 1),
                (this.data = t.data),
                r && ((this._ctx = r), r.data.push(this)),
                c || Be.wake();
            }
            var e = t.prototype;
            return (
              (e.delay = function (t) {
                return t || 0 === t
                  ? (this.parent &&
                      this.parent.smoothChildTiming &&
                      this.startTime(this._start + t - this._delay),
                    (this._delay = t),
                    this)
                  : this._delay;
              }),
              (e.duration = function (t) {
                return arguments.length
                  ? this.totalDuration(
                      this._repeat > 0
                        ? t + (t + this._rDelay) * this._repeat
                        : t
                    )
                  : this.totalDuration() && this._dur;
              }),
              (e.totalDuration = function (t) {
                return arguments.length
                  ? ((this._dirty = 0),
                    zt(
                      this,
                      this._repeat < 0
                        ? t
                        : (t - this._repeat * this._rDelay) / (this._repeat + 1)
                    ))
                  : this._tDur;
              }),
              (e.totalTime = function (t, e) {
                if ((ve(), !arguments.length)) return this._tTime;
                var i = this._dp;
                if (i && i.smoothChildTiming && this._ts) {
                  for (
                    Ot(this, t), !i._dp || i.parent || Ht(i, this);
                    i && i.parent;

                  )
                    i.parent._time !==
                      i._start +
                        (i._ts >= 0
                          ? i._tTime / i._ts
                          : (i.totalDuration() - i._tTime) / -i._ts) &&
                      i.totalTime(i._tTime, !0),
                      (i = i.parent);
                  !this.parent &&
                    this._dp.autoRemoveChildren &&
                    ((this._ts > 0 && t < this._tDur) ||
                      (this._ts < 0 && t > 0) ||
                      (!this._tDur && !t)) &&
                    Rt(this._dp, this, this._start - this._delay);
                }
                return (
                  (this._tTime !== t ||
                    (!this._dur && !e) ||
                    (this._initted && Math.abs(this._zTime) === B) ||
                    (!t && !this._initted && (this.add || this._ptLookup))) &&
                    (this._ts || (this._pTime = t), mt(this, t, e)),
                  this
                );
              }),
              (e.time = function (t, e) {
                return arguments.length
                  ? this.totalTime(
                      Math.min(this.totalDuration(), t + kt(this)) %
                        (this._dur + this._rDelay) || (t ? this._dur : 0),
                      e
                    )
                  : this._time;
              }),
              (e.totalProgress = function (t, e) {
                return arguments.length
                  ? this.totalTime(this.totalDuration() * t, e)
                  : this.totalDuration()
                  ? Math.min(1, this._tTime / this._tDur)
                  : this.ratio;
              }),
              (e.progress = function (t, e) {
                return arguments.length
                  ? this.totalTime(
                      this.duration() *
                        (!this._yoyo || 1 & this.iteration() ? t : 1 - t) +
                        kt(this),
                      e
                    )
                  : this.duration()
                  ? Math.min(1, this._time / this._dur)
                  : this.ratio;
              }),
              (e.iteration = function (t, e) {
                var i = this.duration() + this._rDelay;
                return arguments.length
                  ? this.totalTime(this._time + (t - 1) * i, e)
                  : this._repeat
                  ? Pt(this._tTime, i) + 1
                  : 1;
              }),
              (e.timeScale = function (t) {
                if (!arguments.length)
                  return -1e-8 === this._rts ? 0 : this._rts;
                if (this._rts === t) return this;
                var e =
                  this.parent && this._ts
                    ? Gt(this.parent._time, this)
                    : this._tTime;
                return (
                  (this._rts = +t || 0),
                  (this._ts = this._ps || -1e-8 === t ? 0 : this._rts),
                  this.totalTime(qt(-this._delay, this._tDur, e), !0),
                  Lt(this),
                  (function (t) {
                    for (var e = t.parent; e && e.parent; )
                      (e._dirty = 1), e.totalDuration(), (e = e.parent);
                    return t;
                  })(this)
                );
              }),
              (e.paused = function (t) {
                return arguments.length
                  ? (this._ps !== t &&
                      ((this._ps = t),
                      t
                        ? ((this._pTime =
                            this._tTime ||
                            Math.max(-this._delay, this.rawTime())),
                          (this._ts = this._act = 0))
                        : (ve(),
                          (this._ts = this._rts),
                          this.totalTime(
                            this.parent && !this.parent.smoothChildTiming
                              ? this.rawTime()
                              : this._tTime || this._pTime,
                            1 === this.progress() &&
                              Math.abs(this._zTime) !== B &&
                              (this._tTime -= B)
                          ))),
                    this)
                  : this._ps;
              }),
              (e.startTime = function (t) {
                if (arguments.length) {
                  this._start = t;
                  var e = this.parent || this._dp;
                  return (
                    e &&
                      (e._sort || !this.parent) &&
                      Rt(e, this, t - this._delay),
                    this
                  );
                }
                return this._start;
              }),
              (e.endTime = function (t) {
                return (
                  this._start +
                  (P(t) ? this.totalDuration() : this.duration()) /
                    Math.abs(this._ts || 1)
                );
              }),
              (e.rawTime = function (t) {
                var e = this.parent || this._dp;
                return e
                  ? t &&
                    (!this._ts ||
                      (this._repeat && this._time && this.totalProgress() < 1))
                    ? this._tTime % (this._dur + this._rDelay)
                    : this._ts
                    ? Gt(e.rawTime(t), this)
                    : this._tTime
                  : this._tTime;
              }),
              (e.revert = function (t) {
                void 0 === t && (t = it);
                var e = s;
                return (
                  (s = t),
                  (this._initted || this._startAt) &&
                    (this.timeline && this.timeline.revert(t),
                    this.totalTime(-0.01, t.suppressEvents)),
                  "nested" !== this.data && !1 !== t.kill && this.kill(),
                  (s = e),
                  this
                );
              }),
              (e.globalTime = function (t) {
                for (var e = this, i = arguments.length ? t : e.rawTime(); e; )
                  (i = e._start + i / (e._ts || 1)), (e = e._dp);
                return !this.parent && this._sat
                  ? this._sat.vars.immediateRender
                    ? -1
                    : this._sat.globalTime(t)
                  : i;
              }),
              (e.repeat = function (t) {
                return arguments.length
                  ? ((this._repeat = t === 1 / 0 ? -2 : t), Xt(this))
                  : -2 === this._repeat
                  ? 1 / 0
                  : this._repeat;
              }),
              (e.repeatDelay = function (t) {
                if (arguments.length) {
                  var e = this._time;
                  return (this._rDelay = t), Xt(this), e ? this.time(e) : this;
                }
                return this._rDelay;
              }),
              (e.yoyo = function (t) {
                return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
              }),
              (e.seek = function (t, e) {
                return this.totalTime(Zt(this, t), P(e));
              }),
              (e.restart = function (t, e) {
                return this.play().totalTime(t ? -this._delay : 0, P(e));
              }),
              (e.play = function (t, e) {
                return (
                  null != t && this.seek(t, e), this.reversed(!1).paused(!1)
                );
              }),
              (e.reverse = function (t, e) {
                return (
                  null != t && this.seek(t || this.totalDuration(), e),
                  this.reversed(!0).paused(!1)
                );
              }),
              (e.pause = function (t, e) {
                return null != t && this.seek(t, e), this.paused(!0);
              }),
              (e.resume = function () {
                return this.paused(!1);
              }),
              (e.reversed = function (t) {
                return arguments.length
                  ? (!!t !== this.reversed() &&
                      this.timeScale(-this._rts || (t ? -1e-8 : 0)),
                    this)
                  : this._rts < 0;
              }),
              (e.invalidate = function () {
                return (
                  (this._initted = this._act = 0), (this._zTime = -1e-8), this
                );
              }),
              (e.isActive = function () {
                var t,
                  e = this.parent || this._dp,
                  i = this._start;
                return !(
                  e &&
                  !(
                    this._ts &&
                    this._initted &&
                    e.isActive() &&
                    (t = e.rawTime(!0)) >= i &&
                    t < this.endTime(!0) - B
                  )
                );
              }),
              (e.eventCallback = function (t, e, i) {
                var a = this.vars;
                return arguments.length > 1
                  ? (e
                      ? ((a[t] = e),
                        i && (a[t + "Params"] = i),
                        "onUpdate" === t && (this._onUpdate = e))
                      : delete a[t],
                    this)
                  : a[t];
              }),
              (e.then = function (t) {
                var e = this;
                return new Promise(function (i) {
                  var a = F(t) ? t : _t,
                    o = function () {
                      var t = e.then;
                      (e.then = null),
                        F(a) &&
                          (a = a(e)) &&
                          (a.then || a === e) &&
                          (e.then = t),
                        i(a),
                        (e.then = t);
                    };
                  (e._initted && 1 === e.totalProgress() && e._ts >= 0) ||
                  (!e._tTime && e._ts < 0)
                    ? o()
                    : (e._prom = o);
                });
              }),
              (e.kill = function () {
                we(this);
              }),
              t
            );
          })();
        Bt(Le.prototype, {
          _time: 0,
          _start: 0,
          _end: 0,
          _tTime: 0,
          _tDur: 0,
          _dirty: 0,
          _repeat: 0,
          _yoyo: !1,
          parent: null,
          _initted: !1,
          _rDelay: 0,
          _ts: 1,
          _dp: 0,
          ratio: 0,
          _zTime: -1e-8,
          _prom: 0,
          _ps: !1,
          _rts: 1,
        });
        var Oe = (function (t) {
          function e(e, i) {
            var o;
            return (
              void 0 === e && (e = {}),
              ((o = t.call(this, e) || this).labels = {}),
              (o.smoothChildTiming = !!e.smoothChildTiming),
              (o.autoRemoveChildren = !!e.autoRemoveChildren),
              (o._sort = P(e.sortChildren)),
              h && Rt(e.parent || h, a(o), i),
              e.reversed && o.reverse(),
              e.paused && o.paused(!0),
              e.scrollTrigger && Jt(a(o), e.scrollTrigger),
              o
            );
          }
          o(e, t);
          var i = e.prototype;
          return (
            (i.to = function (t, e, i) {
              return Vt(0, arguments, this), this;
            }),
            (i.from = function (t, e, i) {
              return Vt(1, arguments, this), this;
            }),
            (i.fromTo = function (t, e, i, a) {
              return Vt(2, arguments, this), this;
            }),
            (i.set = function (t, e, i) {
              return (
                (e.duration = 0),
                (e.parent = this),
                Tt(e).repeatDelay || (e.repeat = 0),
                (e.immediateRender = !!e.immediateRender),
                new Ve(t, e, Zt(this, i), 1),
                this
              );
            }),
            (i.call = function (t, e, i) {
              return Rt(this, Ve.delayedCall(0, t, e), i);
            }),
            (i.staggerTo = function (t, e, i, a, o, n, s) {
              return (
                (i.duration = e),
                (i.stagger = i.stagger || a),
                (i.onComplete = n),
                (i.onCompleteParams = s),
                (i.parent = this),
                new Ve(t, i, Zt(this, o)),
                this
              );
            }),
            (i.staggerFrom = function (t, e, i, a, o, n, s) {
              return (
                (i.runBackwards = 1),
                (Tt(i).immediateRender = P(i.immediateRender)),
                this.staggerTo(t, e, i, a, o, n, s)
              );
            }),
            (i.staggerFromTo = function (t, e, i, a, o, n, s, r) {
              return (
                (a.startAt = i),
                (Tt(a).immediateRender = P(a.immediateRender)),
                this.staggerTo(t, e, a, o, n, s, r)
              );
            }),
            (i.render = function (t, e, i) {
              var a,
                o,
                n,
                r,
                A,
                g,
                l,
                p,
                w,
                y,
                c,
                x,
                u = this._time,
                d = this._dirty ? this.totalDuration() : this._tDur,
                f = this._dur,
                m = t <= 0 ? 0 : xt(t),
                I = this._zTime < 0 != t < 0 && (this._initted || !f);
              if (
                (this !== h && m > d && t >= 0 && (m = d),
                m !== this._tTime || i || I)
              ) {
                if (
                  (u !== this._time &&
                    f &&
                    ((m += this._time - u), (t += this._time - u)),
                  (a = m),
                  (w = this._start),
                  (g = !(p = this._ts)),
                  I && (f || (u = this._zTime), (t || !e) && (this._zTime = t)),
                  this._repeat)
                ) {
                  if (
                    ((c = this._yoyo),
                    (A = f + this._rDelay),
                    this._repeat < -1 && t < 0)
                  )
                    return this.totalTime(100 * A + t, e, i);
                  if (
                    ((a = xt(m % A)),
                    m === d
                      ? ((r = this._repeat), (a = f))
                      : ((r = ~~(m / A)) && r === m / A && ((a = f), r--),
                        a > f && (a = f)),
                    (y = Pt(this._tTime, A)),
                    !u && this._tTime && y !== r && (y = r),
                    c && 1 & r && ((a = f - a), (x = 1)),
                    r !== y && !this._lock)
                  ) {
                    var _ = c && 1 & y,
                      v = _ === (c && 1 & r);
                    if (
                      (r < y && (_ = !_),
                      (u = _ ? 0 : f),
                      (this._lock = 1),
                      (this.render(u || (x ? 0 : xt(r * A)), e, !f)._lock = 0),
                      (this._tTime = m),
                      !e && this.parent && pe(this, "onRepeat"),
                      this.vars.repeatRefresh &&
                        !x &&
                        (this.invalidate()._lock = 1),
                      (u && u !== this._time) ||
                        g !== !this._ts ||
                        (this.vars.onRepeat && !this.parent && !this._act))
                    )
                      return this;
                    if (
                      ((f = this._dur),
                      (d = this._tDur),
                      v &&
                        ((this._lock = 2),
                        (u = _ ? f : -1e-4),
                        this.render(u, !0),
                        this.vars.repeatRefresh && !x && this.invalidate()),
                      (this._lock = 0),
                      !this._ts && !g)
                    )
                      return this;
                    Qe(this, x);
                  }
                }
                if (
                  (this._hasPause &&
                    !this._forcing &&
                    this._lock < 2 &&
                    ((l = (function (t, e, i) {
                      var a;
                      if (i > e)
                        for (a = t._first; a && a._start <= i; ) {
                          if ("isPause" === a.data && a._start > e) return a;
                          a = a._next;
                        }
                      else
                        for (a = t._last; a && a._start >= i; ) {
                          if ("isPause" === a.data && a._start < e) return a;
                          a = a._prev;
                        }
                    })(this, xt(u), xt(a))),
                    l && (m -= a - (a = l._start))),
                  (this._tTime = m),
                  (this._time = a),
                  (this._act = !p),
                  this._initted ||
                    ((this._onUpdate = this.vars.onUpdate),
                    (this._initted = 1),
                    (this._zTime = t),
                    (u = 0)),
                  !u && a && !e && (pe(this, "onStart"), this._tTime !== m))
                )
                  return this;
                if (a >= u && t >= 0)
                  for (o = this._first; o; ) {
                    if (
                      ((n = o._next),
                      (o._act || a >= o._start) && o._ts && l !== o)
                    ) {
                      if (o.parent !== this) return this.render(t, e, i);
                      if (
                        (o.render(
                          o._ts > 0
                            ? (a - o._start) * o._ts
                            : (o._dirty ? o.totalDuration() : o._tDur) +
                                (a - o._start) * o._ts,
                          e,
                          i
                        ),
                        a !== this._time || (!this._ts && !g))
                      ) {
                        (l = 0), n && (m += this._zTime = -1e-8);
                        break;
                      }
                    }
                    o = n;
                  }
                else {
                  o = this._last;
                  for (var C = t < 0 ? t : a; o; ) {
                    if (
                      ((n = o._prev),
                      (o._act || C <= o._end) && o._ts && l !== o)
                    ) {
                      if (o.parent !== this) return this.render(t, e, i);
                      if (
                        (o.render(
                          o._ts > 0
                            ? (C - o._start) * o._ts
                            : (o._dirty ? o.totalDuration() : o._tDur) +
                                (C - o._start) * o._ts,
                          e,
                          i || (s && (o._initted || o._startAt))
                        ),
                        a !== this._time || (!this._ts && !g))
                      ) {
                        (l = 0), n && (m += this._zTime = C ? -1e-8 : B);
                        break;
                      }
                    }
                    o = n;
                  }
                }
                if (
                  l &&
                  !e &&
                  (this.pause(),
                  (l.render(a >= u ? 0 : -1e-8)._zTime = a >= u ? 1 : -1),
                  this._ts)
                )
                  return (this._start = w), Lt(this), this.render(t, e, i);
                this._onUpdate && !e && pe(this, "onUpdate", !0),
                  ((m === d && this._tTime >= this.totalDuration()) ||
                    (!m && u)) &&
                    ((w !== this._start &&
                      Math.abs(p) === Math.abs(this._ts)) ||
                      this._lock ||
                      ((t || !f) &&
                        ((m === d && this._ts > 0) || (!m && this._ts < 0)) &&
                        Qt(this, 1),
                      e ||
                        (t < 0 && !u) ||
                        (!m && !u && d) ||
                        (pe(
                          this,
                          m === d && t >= 0
                            ? "onComplete"
                            : "onReverseComplete",
                          !0
                        ),
                        this._prom &&
                          !(m < d && this.timeScale() > 0) &&
                          this._prom())));
              }
              return this;
            }),
            (i.add = function (t, e) {
              var i = this;
              if ((S(e) || (e = Zt(this, e, t)), !(t instanceof Le))) {
                if (H(t))
                  return (
                    t.forEach(function (t) {
                      return i.add(t, e);
                    }),
                    this
                  );
                if (Q(t)) return this.addLabel(t, e);
                if (!F(t)) return this;
                t = Ve.delayedCall(0, t);
              }
              return this !== t ? Rt(this, t, e) : this;
            }),
            (i.getChildren = function (t, e, i, a) {
              void 0 === t && (t = !0),
                void 0 === e && (e = !0),
                void 0 === i && (i = !0),
                void 0 === a && (a = -_);
              for (var o = [], n = this._first; n; )
                n._start >= a &&
                  (n instanceof Ve
                    ? e && o.push(n)
                    : (i && o.push(n),
                      t && o.push.apply(o, n.getChildren(!0, e, i)))),
                  (n = n._next);
              return o;
            }),
            (i.getById = function (t) {
              for (var e = this.getChildren(1, 1, 1), i = e.length; i--; )
                if (e[i].vars.id === t) return e[i];
            }),
            (i.remove = function (t) {
              return Q(t)
                ? this.removeLabel(t)
                : F(t)
                ? this.killTweensOf(t)
                : (Et(this, t),
                  t === this._recent && (this._recent = this._last),
                  Ft(this));
            }),
            (i.totalTime = function (e, i) {
              return arguments.length
                ? ((this._forcing = 1),
                  !this._dp &&
                    this._ts &&
                    (this._start = xt(
                      Be.time -
                        (this._ts > 0
                          ? e / this._ts
                          : (this.totalDuration() - e) / -this._ts)
                    )),
                  t.prototype.totalTime.call(this, e, i),
                  (this._forcing = 0),
                  this)
                : this._tTime;
            }),
            (i.addLabel = function (t, e) {
              return (this.labels[t] = Zt(this, e)), this;
            }),
            (i.removeLabel = function (t) {
              return delete this.labels[t], this;
            }),
            (i.addPause = function (t, e, i) {
              var a = Ve.delayedCall(0, e || $, i);
              return (
                (a.data = "isPause"),
                (this._hasPause = 1),
                Rt(this, a, Zt(this, t))
              );
            }),
            (i.removePause = function (t) {
              var e = this._first;
              for (t = Zt(this, t); e; )
                e._start === t && "isPause" === e.data && Qt(e), (e = e._next);
            }),
            (i.killTweensOf = function (t, e, i) {
              for (var a = this.getTweensOf(t, i), o = a.length; o--; )
                He !== a[o] && a[o].kill(t, e);
              return this;
            }),
            (i.getTweensOf = function (t, e) {
              for (var i, a = [], o = ee(t), n = this._first, s = S(e); n; )
                n instanceof Ve
                  ? dt(n._targets, o) &&
                    (s
                      ? (!He || (n._initted && n._ts)) &&
                        n.globalTime(0) <= e &&
                        n.globalTime(n.totalDuration()) > e
                      : !e || n.isActive()) &&
                    a.push(n)
                  : (i = n.getTweensOf(o, e)).length && a.push.apply(a, i),
                  (n = n._next);
              return a;
            }),
            (i.tweenTo = function (t, e) {
              e = e || {};
              var i,
                a = this,
                o = Zt(a, t),
                n = e,
                s = n.startAt,
                r = n.onStart,
                h = n.onStartParams,
                A = n.immediateRender,
                g = Ve.to(
                  a,
                  Bt(
                    {
                      ease: e.ease || "none",
                      lazy: !1,
                      immediateRender: !1,
                      time: o,
                      overwrite: "auto",
                      duration:
                        e.duration ||
                        Math.abs(
                          (o - (s && "time" in s ? s.time : a._time)) /
                            a.timeScale()
                        ) ||
                        B,
                      onStart: function () {
                        if ((a.pause(), !i)) {
                          var t =
                            e.duration ||
                            Math.abs(
                              (o - (s && "time" in s ? s.time : a._time)) /
                                a.timeScale()
                            );
                          g._dur !== t &&
                            zt(g, t, 0, 1).render(g._time, !0, !0),
                            (i = 1);
                        }
                        r && r.apply(g, h || []);
                      },
                    },
                    e
                  )
                );
              return A ? g.render(0) : g;
            }),
            (i.tweenFromTo = function (t, e, i) {
              return this.tweenTo(e, Bt({ startAt: { time: Zt(this, t) } }, i));
            }),
            (i.recent = function () {
              return this._recent;
            }),
            (i.nextLabel = function (t) {
              return void 0 === t && (t = this._time), le(this, Zt(this, t));
            }),
            (i.previousLabel = function (t) {
              return void 0 === t && (t = this._time), le(this, Zt(this, t), 1);
            }),
            (i.currentLabel = function (t) {
              return arguments.length
                ? this.seek(t, !0)
                : this.previousLabel(this._time + B);
            }),
            (i.shiftChildren = function (t, e, i) {
              void 0 === i && (i = 0);
              for (var a, o = this._first, n = this.labels; o; )
                o._start >= i && ((o._start += t), (o._end += t)),
                  (o = o._next);
              if (e) for (a in n) n[a] >= i && (n[a] += t);
              return Ft(this);
            }),
            (i.invalidate = function (e) {
              var i = this._first;
              for (this._lock = 0; i; ) i.invalidate(e), (i = i._next);
              return t.prototype.invalidate.call(this, e);
            }),
            (i.clear = function (t) {
              void 0 === t && (t = !0);
              for (var e, i = this._first; i; )
                (e = i._next), this.remove(i), (i = e);
              return (
                this._dp && (this._time = this._tTime = this._pTime = 0),
                t && (this.labels = {}),
                Ft(this)
              );
            }),
            (i.totalDuration = function (t) {
              var e,
                i,
                a,
                o = 0,
                n = this,
                s = n._last,
                r = _;
              if (arguments.length)
                return n.timeScale(
                  (n._repeat < 0 ? n.duration() : n.totalDuration()) /
                    (n.reversed() ? -t : t)
                );
              if (n._dirty) {
                for (a = n.parent; s; )
                  (e = s._prev),
                    s._dirty && s.totalDuration(),
                    (i = s._start) > r && n._sort && s._ts && !n._lock
                      ? ((n._lock = 1), (Rt(n, s, i - s._delay, 1)._lock = 0))
                      : (r = i),
                    i < 0 &&
                      s._ts &&
                      ((o -= i),
                      ((!a && !n._dp) || (a && a.smoothChildTiming)) &&
                        ((n._start += i / n._ts),
                        (n._time -= i),
                        (n._tTime -= i)),
                      n.shiftChildren(-i, !1, -Infinity),
                      (r = 0)),
                    s._end > o && s._ts && (o = s._end),
                    (s = e);
                zt(n, n === h && n._time > o ? n._time : o, 1, 1),
                  (n._dirty = 0);
              }
              return n._tDur;
            }),
            (e.updateRoot = function (t) {
              if (
                (h._ts && (mt(h, Gt(t, h)), (w = Be.frame)), Be.frame >= ht)
              ) {
                ht += m.autoSleep || 120;
                var e = h._first;
                if ((!e || !e._ts) && m.autoSleep && Be._listeners.length < 2) {
                  for (; e && !e._ts; ) e = e._next;
                  e || Be.sleep();
                }
              }
            }),
            e
          );
        })(Le);
        Bt(Oe.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
        var He,
          Re,
          Je = function (t, e, i, a, o, n, s) {
            var r,
              h,
              A,
              g,
              l,
              p,
              w,
              y,
              c = new Ai(this._pt, t, e, 0, 1, ai, null, o),
              x = 0,
              u = 0;
            for (
              c.b = i,
                c.e = a,
                i += "",
                (w = ~(a += "").indexOf("random(")) && (a = Ae(a)),
                n && (n((y = [i, a]), t, e), (i = y[0]), (a = y[1])),
                h = i.match(N) || [];
              (r = N.exec(a));

            )
              (g = r[0]),
                (l = a.substring(x, r.index)),
                A ? (A = (A + 1) % 5) : "rgba(" === l.substr(-5) && (A = 1),
                g !== h[u++] &&
                  ((p = parseFloat(h[u - 1]) || 0),
                  (c._pt = {
                    _next: c._pt,
                    p: l || 1 === u ? l : ",",
                    s: p,
                    c: "=" === g.charAt(1) ? ut(p, g) - p : parseFloat(g) - p,
                    m: A && A < 4 ? Math.round : 0,
                  }),
                  (x = N.lastIndex));
            return (
              (c.c = x < a.length ? a.substring(x, a.length) : ""),
              (c.fp = s),
              (Y.test(a) || w) && (c.e = 0),
              (this._pt = c),
              c
            );
          },
          je = function (t, e, i, a, o, n, s, r, h, A) {
            F(a) && (a = a(o || 0, t, n));
            var g,
              l = t[e],
              p =
                "get" !== i
                  ? i
                  : F(l)
                  ? h
                    ? t[
                        e.indexOf("set") || !F(t["get" + e.substr(3)])
                          ? e
                          : "get" + e.substr(3)
                      ](h)
                    : t[e]()
                  : l,
              w = F(l) ? (h ? Ue : qe) : We;
            if (
              (Q(a) &&
                (~a.indexOf("random(") && (a = Ae(a)),
                "=" === a.charAt(1) &&
                  ((g = ut(p, a) + (Ut(p) || 0)) || 0 === g) &&
                  (a = g)),
              !A || p !== a || Re)
            )
              return isNaN(p * a) || "" === a
                ? (!l && !(e in t) && W(e, a),
                  Je.call(this, t, e, p, a, w, r || m.stringFilter, h))
                : ((g = new Ai(
                    this._pt,
                    t,
                    e,
                    +p || 0,
                    a - (p || 0),
                    "boolean" == typeof l ? ii : ei,
                    0,
                    w
                  )),
                  h && (g.fp = h),
                  s && g.modifier(s, this, t),
                  (this._pt = g));
          },
          Ne = function (t, e, i, a, o, n) {
            var s, r, h, A;
            if (
              st[t] &&
              !1 !==
                (s = new st[t]()).init(
                  o,
                  s.rawVars
                    ? e[t]
                    : (function (t, e, i, a, o) {
                        if (
                          (F(t) && (t = Xe(t, o, e, i, a)),
                          !k(t) || (t.style && t.nodeType) || H(t) || O(t))
                        )
                          return Q(t) ? Xe(t, o, e, i, a) : t;
                        var n,
                          s = {};
                        for (n in t) s[n] = Xe(t[n], o, e, i, a);
                        return s;
                      })(e[t], a, o, n, i),
                  i,
                  a,
                  n
                ) &&
              ((i._pt = r =
                new Ai(i._pt, o, t, 0, 1, s.render, s, 0, s.priority)),
              i !== y)
            )
              for (
                h = i._ptLookup[i._targets.indexOf(o)], A = s._props.length;
                A--;

              )
                h[s._props[A]] = r;
            return s;
          },
          Ye = function t(e, i, a) {
            var o,
              r,
              A,
              g,
              l,
              p,
              w,
              y,
              c,
              x,
              u,
              d,
              f,
              m = e.vars,
              v = m.ease,
              C = m.startAt,
              b = m.immediateRender,
              T = m.lazy,
              M = m.onUpdate,
              E = m.onUpdateParams,
              Q = m.callbackScope,
              F = m.runBackwards,
              S = m.yoyoEase,
              D = m.keyframes,
              k = m.autoRevert,
              G = e._dur,
              L = e._startAt,
              O = e._targets,
              H = e.parent,
              R = H && "nested" === H.data ? H.vars.targets : O,
              J = "auto" === e._overwrite && !n,
              j = e.timeline;
            if (
              (j && (!D || !v) && (v = "none"),
              (e._ease = Fe(v, I.ease)),
              (e._yEase = S ? Ee(Fe(!0 === S ? v : S, I.ease)) : 0),
              S &&
                e._yoyo &&
                !e._repeat &&
                ((S = e._yEase), (e._yEase = e._ease), (e._ease = S)),
              (e._from = !j && !!m.runBackwards),
              !j || (D && !m.stagger))
            ) {
              if (
                ((d = (y = O[0] ? pt(O[0]).harness : 0) && m[y.prop]),
                (o = bt(m, at)),
                L &&
                  (L._zTime < 0 && L.progress(1),
                  i < 0 && F && b && !k
                    ? L.render(-1, !0)
                    : L.revert(F && G ? et : tt),
                  (L._lazy = 0)),
                C)
              ) {
                if (
                  (Qt(
                    (e._startAt = Ve.set(
                      O,
                      Bt(
                        {
                          data: "isStart",
                          overwrite: !1,
                          parent: H,
                          immediateRender: !0,
                          lazy: !L && P(T),
                          startAt: null,
                          delay: 0,
                          onUpdate: M,
                          onUpdateParams: E,
                          callbackScope: Q,
                          stagger: 0,
                        },
                        C
                      )
                    ))
                  ),
                  (e._startAt._dp = 0),
                  (e._startAt._sat = e),
                  i < 0 && (s || (!b && !k)) && e._startAt.revert(et),
                  b && G && i <= 0 && a <= 0)
                )
                  return void (i && (e._zTime = i));
              } else if (F && G && !L)
                if (
                  (i && (b = !1),
                  (A = Bt(
                    {
                      overwrite: !1,
                      data: "isFromStart",
                      lazy: b && !L && P(T),
                      immediateRender: b,
                      stagger: 0,
                      parent: H,
                    },
                    o
                  )),
                  d && (A[y.prop] = d),
                  Qt((e._startAt = Ve.set(O, A))),
                  (e._startAt._dp = 0),
                  (e._startAt._sat = e),
                  i < 0 &&
                    (s ? e._startAt.revert(et) : e._startAt.render(-1, !0)),
                  (e._zTime = i),
                  b)
                ) {
                  if (!i) return;
                } else t(e._startAt, B, B);
              for (
                e._pt = e._ptCache = 0, T = (G && P(T)) || (T && !G), r = 0;
                r < O.length;
                r++
              ) {
                if (
                  ((w = (l = O[r])._gsap || lt(O)[r]._gsap),
                  (e._ptLookup[r] = x = {}),
                  nt[w.id] && ot.length && ft(),
                  (u = R === O ? r : R.indexOf(l)),
                  y &&
                    !1 !== (c = new y()).init(l, d || o, e, u, R) &&
                    ((e._pt = g =
                      new Ai(
                        e._pt,
                        l,
                        c.name,
                        0,
                        1,
                        c.render,
                        c,
                        0,
                        c.priority
                      )),
                    c._props.forEach(function (t) {
                      x[t] = g;
                    }),
                    c.priority && (p = 1)),
                  !y || d)
                )
                  for (A in o)
                    st[A] && (c = Ne(A, o, e, u, l, R))
                      ? c.priority && (p = 1)
                      : (x[A] = g =
                          je.call(
                            e,
                            l,
                            A,
                            "get",
                            o[A],
                            u,
                            R,
                            0,
                            m.stringFilter
                          ));
                e._op && e._op[r] && e.kill(l, e._op[r]),
                  J &&
                    e._pt &&
                    ((He = e),
                    h.killTweensOf(l, x, e.globalTime(i)),
                    (f = !e.parent),
                    (He = 0)),
                  e._pt && T && (nt[w.id] = 1);
              }
              p && hi(e), e._onInit && e._onInit(e);
            }
            (e._onUpdate = M),
              (e._initted = (!e._op || e._pt) && !f),
              D && i <= 0 && j.render(_, !0, !0);
          },
          ze = function (t, e, i, a) {
            var o,
              n,
              s = e.ease || a || "power1.inOut";
            if (H(e))
              (n = i[t] || (i[t] = [])),
                e.forEach(function (t, i) {
                  return n.push({ t: (i / (e.length - 1)) * 100, v: t, e: s });
                });
            else
              for (o in e)
                (n = i[o] || (i[o] = [])),
                  "ease" === o || n.push({ t: parseFloat(t), v: e[o], e: s });
          },
          Xe = function (t, e, i, a, o) {
            return F(t)
              ? t.call(e, i, a, o)
              : Q(t) && ~t.indexOf("random(")
              ? Ae(t)
              : t;
          },
          Ke = gt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
          Ze = {};
        yt(
          Ke + ",id,stagger,delay,duration,paused,scrollTrigger",
          function (t) {
            return (Ze[t] = 1);
          }
        );
        var Ve = (function (t) {
          function e(e, i, o, s) {
            var r;
            "number" == typeof i && ((o.duration = i), (i = o), (o = null));
            var A,
              g,
              l,
              p,
              w,
              y,
              c,
              x,
              u = (r = t.call(this, s ? i : Tt(i)) || this).vars,
              d = u.duration,
              f = u.delay,
              I = u.immediateRender,
              _ = u.stagger,
              B = u.overwrite,
              v = u.keyframes,
              C = u.defaults,
              b = u.scrollTrigger,
              T = u.yoyoEase,
              M = i.parent || h,
              E = (H(e) || O(e) ? S(e[0]) : "length" in i) ? [e] : ee(e);
            if (
              ((r._targets = E.length
                ? lt(E)
                : q(
                    "GSAP target " + e + " not found. https://greensock.com",
                    !m.nullTargetWarn
                  ) || []),
              (r._ptLookup = []),
              (r._overwrite = B),
              v || _ || L(d) || L(f))
            ) {
              if (
                ((i = r.vars),
                (A = r.timeline =
                  new Oe({
                    data: "nested",
                    defaults: C || {},
                    targets: M && "nested" === M.data ? M.vars.targets : E,
                  })).kill(),
                (A.parent = A._dp = a(r)),
                (A._start = 0),
                _ || L(d) || L(f))
              ) {
                if (((p = E.length), (c = _ && oe(_)), k(_)))
                  for (w in _) ~Ke.indexOf(w) && (x || (x = {}), (x[w] = _[w]));
                for (g = 0; g < p; g++)
                  ((l = bt(i, Ze)).stagger = 0),
                    T && (l.yoyoEase = T),
                    x && vt(l, x),
                    (y = E[g]),
                    (l.duration = +Xe(d, a(r), g, y, E)),
                    (l.delay = (+Xe(f, a(r), g, y, E) || 0) - r._delay),
                    !_ &&
                      1 === p &&
                      l.delay &&
                      ((r._delay = f = l.delay),
                      (r._start += f),
                      (l.delay = 0)),
                    A.to(y, l, c ? c(g, y, E) : 0),
                    (A._ease = Ce.none);
                A.duration() ? (d = f = 0) : (r.timeline = 0);
              } else if (v) {
                Tt(Bt(A.vars.defaults, { ease: "none" })),
                  (A._ease = Fe(v.ease || i.ease || "none"));
                var Q,
                  F,
                  D,
                  G = 0;
                if (H(v))
                  v.forEach(function (t) {
                    return A.to(E, t, ">");
                  }),
                    A.duration();
                else {
                  for (w in ((l = {}), v))
                    "ease" === w ||
                      "easeEach" === w ||
                      ze(w, v[w], l, v.easeEach);
                  for (w in l)
                    for (
                      Q = l[w].sort(function (t, e) {
                        return t.t - e.t;
                      }),
                        G = 0,
                        g = 0;
                      g < Q.length;
                      g++
                    )
                      ((D = {
                        ease: (F = Q[g]).e,
                        duration: ((F.t - (g ? Q[g - 1].t : 0)) / 100) * d,
                      })[w] = F.v),
                        A.to(E, D, G),
                        (G += D.duration);
                  A.duration() < d && A.to({}, { duration: d - A.duration() });
                }
              }
              d || r.duration((d = A.duration()));
            } else r.timeline = 0;
            return (
              !0 !== B || n || ((He = a(r)), h.killTweensOf(E), (He = 0)),
              Rt(M, a(r), o),
              i.reversed && r.reverse(),
              i.paused && r.paused(!0),
              (I ||
                (!d &&
                  !v &&
                  r._start === xt(M._time) &&
                  P(I) &&
                  Dt(a(r)) &&
                  "nested" !== M.data)) &&
                ((r._tTime = -1e-8), r.render(Math.max(0, -f) || 0)),
              b && Jt(a(r), b),
              r
            );
          }
          o(e, t);
          var i = e.prototype;
          return (
            (i.render = function (t, e, i) {
              var a,
                o,
                n,
                r,
                h,
                A,
                g,
                l,
                p,
                w = this._time,
                y = this._tDur,
                c = this._dur,
                x = t < 0,
                u = t > y - B && !x ? y : t < B ? 0 : t;
              if (c) {
                if (
                  u !== this._tTime ||
                  !t ||
                  i ||
                  (!this._initted && this._tTime) ||
                  (this._startAt && this._zTime < 0 !== x)
                ) {
                  if (((a = u), (l = this.timeline), this._repeat)) {
                    if (((r = c + this._rDelay), this._repeat < -1 && x))
                      return this.totalTime(100 * r + t, e, i);
                    if (
                      ((a = xt(u % r)),
                      u === y
                        ? ((n = this._repeat), (a = c))
                        : ((n = ~~(u / r)) && n === u / r && ((a = c), n--),
                          a > c && (a = c)),
                      (A = this._yoyo && 1 & n) &&
                        ((p = this._yEase), (a = c - a)),
                      (h = Pt(this._tTime, r)),
                      a === w && !i && this._initted)
                    )
                      return (this._tTime = u), this;
                    n !== h &&
                      (l && this._yEase && Qe(l, A),
                      !this.vars.repeatRefresh ||
                        A ||
                        this._lock ||
                        ((this._lock = i = 1),
                        (this.render(xt(r * n), !0).invalidate()._lock = 0)));
                  }
                  if (!this._initted) {
                    if (jt(this, x ? t : a, i, e, u))
                      return (this._tTime = 0), this;
                    if (w !== this._time) return this;
                    if (c !== this._dur) return this.render(t, e, i);
                  }
                  if (
                    ((this._tTime = u),
                    (this._time = a),
                    !this._act &&
                      this._ts &&
                      ((this._act = 1), (this._lazy = 0)),
                    (this.ratio = g = (p || this._ease)(a / c)),
                    this._from && (this.ratio = g = 1 - g),
                    a && !w && !e && (pe(this, "onStart"), this._tTime !== u))
                  )
                    return this;
                  for (o = this._pt; o; ) o.r(g, o.d), (o = o._next);
                  (l &&
                    l.render(
                      t < 0
                        ? t
                        : !a && A
                        ? -1e-8
                        : l._dur * l._ease(a / this._dur),
                      e,
                      i
                    )) ||
                    (this._startAt && (this._zTime = t)),
                    this._onUpdate &&
                      !e &&
                      (x && St(this, t, 0, i), pe(this, "onUpdate")),
                    this._repeat &&
                      n !== h &&
                      this.vars.onRepeat &&
                      !e &&
                      this.parent &&
                      pe(this, "onRepeat"),
                    (u !== this._tDur && u) ||
                      this._tTime !== u ||
                      (x && !this._onUpdate && St(this, t, 0, !0),
                      (t || !c) &&
                        ((u === this._tDur && this._ts > 0) ||
                          (!u && this._ts < 0)) &&
                        Qt(this, 1),
                      e ||
                        (x && !w) ||
                        !(u || w || A) ||
                        (pe(
                          this,
                          u === y ? "onComplete" : "onReverseComplete",
                          !0
                        ),
                        this._prom &&
                          !(u < y && this.timeScale() > 0) &&
                          this._prom()));
                }
              } else
                !(function (t, e, i, a) {
                  var o,
                    n,
                    r,
                    h = t.ratio,
                    A =
                      e < 0 ||
                      (!e &&
                        ((!t._start && Nt(t) && (t._initted || !Yt(t))) ||
                          ((t._ts < 0 || t._dp._ts < 0) && !Yt(t))))
                        ? 0
                        : 1,
                    g = t._rDelay,
                    l = 0;
                  if (
                    (g &&
                      t._repeat &&
                      ((l = qt(0, t._tDur, e)),
                      (n = Pt(l, g)),
                      t._yoyo && 1 & n && (A = 1 - A),
                      n !== Pt(t._tTime, g) &&
                        ((h = 1 - A),
                        t.vars.repeatRefresh && t._initted && t.invalidate())),
                    A !== h || s || a || t._zTime === B || (!e && t._zTime))
                  ) {
                    if (!t._initted && jt(t, e, a, i, l)) return;
                    for (
                      r = t._zTime,
                        t._zTime = e || (i ? B : 0),
                        i || (i = e && !r),
                        t.ratio = A,
                        t._from && (A = 1 - A),
                        t._time = 0,
                        t._tTime = l,
                        o = t._pt;
                      o;

                    )
                      o.r(A, o.d), (o = o._next);
                    e < 0 && St(t, e, 0, !0),
                      t._onUpdate && !i && pe(t, "onUpdate"),
                      l && t._repeat && !i && t.parent && pe(t, "onRepeat"),
                      (e >= t._tDur || e < 0) &&
                        t.ratio === A &&
                        (A && Qt(t, 1),
                        i ||
                          s ||
                          (pe(t, A ? "onComplete" : "onReverseComplete", !0),
                          t._prom && t._prom()));
                  } else t._zTime || (t._zTime = e);
                })(this, t, e, i);
              return this;
            }),
            (i.targets = function () {
              return this._targets;
            }),
            (i.invalidate = function (e) {
              return (
                (!e || !this.vars.runBackwards) && (this._startAt = 0),
                (this._pt =
                  this._op =
                  this._onUpdate =
                  this._lazy =
                  this.ratio =
                    0),
                (this._ptLookup = []),
                this.timeline && this.timeline.invalidate(e),
                t.prototype.invalidate.call(this, e)
              );
            }),
            (i.resetTo = function (t, e, i, a) {
              c || Be.wake(), this._ts || this.play();
              var o = Math.min(
                this._dur,
                (this._dp._time - this._start) * this._ts
              );
              return (
                this._initted || Ye(this, o),
                (function (t, e, i, a, o, n, s) {
                  var r,
                    h,
                    A,
                    g,
                    l = ((t._pt && t._ptCache) || (t._ptCache = {}))[e];
                  if (!l)
                    for (
                      l = t._ptCache[e] = [],
                        A = t._ptLookup,
                        g = t._targets.length;
                      g--;

                    ) {
                      if ((r = A[g][e]) && r.d && r.d._pt)
                        for (r = r.d._pt; r && r.p !== e && r.fp !== e; )
                          r = r._next;
                      if (!r)
                        return (
                          (Re = 1), (t.vars[e] = "+=0"), Ye(t, s), (Re = 0), 1
                        );
                      l.push(r);
                    }
                  for (g = l.length; g--; )
                    ((r = (h = l[g])._pt || h).s =
                      (!a && 0 !== a) || o ? r.s + (a || 0) + n * r.c : a),
                      (r.c = i - r.s),
                      h.e && (h.e = ct(i) + Ut(h.e)),
                      h.b && (h.b = r.s + Ut(h.b));
                })(this, t, e, i, a, this._ease(o / this._dur), o)
                  ? this.resetTo(t, e, i, a)
                  : (Ot(this, 0),
                    this.parent ||
                      Mt(
                        this._dp,
                        this,
                        "_first",
                        "_last",
                        this._dp._sort ? "_start" : 0
                      ),
                    this.render(0))
              );
            }),
            (i.kill = function (t, e) {
              if ((void 0 === e && (e = "all"), !(t || (e && "all" !== e))))
                return (
                  (this._lazy = this._pt = 0), this.parent ? we(this) : this
                );
              if (this.timeline) {
                var i = this.timeline.totalDuration();
                return (
                  this.timeline.killTweensOf(
                    t,
                    e,
                    He && !0 !== He.vars.overwrite
                  )._first || we(this),
                  this.parent &&
                    i !== this.timeline.totalDuration() &&
                    zt(this, (this._dur * this.timeline._tDur) / i, 0, 1),
                  this
                );
              }
              var a,
                o,
                n,
                s,
                r,
                h,
                A,
                g = this._targets,
                l = t ? ee(t) : g,
                p = this._ptLookup,
                w = this._pt;
              if (
                (!e || "all" === e) &&
                (function (t, e) {
                  for (
                    var i = t.length, a = i === e.length;
                    a && i-- && t[i] === e[i];

                  );
                  return i < 0;
                })(g, l)
              )
                return "all" === e && (this._pt = 0), we(this);
              for (
                a = this._op = this._op || [],
                  "all" !== e &&
                    (Q(e) &&
                      ((r = {}),
                      yt(e, function (t) {
                        return (r[t] = 1);
                      }),
                      (e = r)),
                    (e = (function (t, e) {
                      var i,
                        a,
                        o,
                        n,
                        s = t[0] ? pt(t[0]).harness : 0,
                        r = s && s.aliases;
                      if (!r) return e;
                      for (a in ((i = vt({}, e)), r))
                        if ((a in i))
                          for (o = (n = r[a].split(",")).length; o--; )
                            i[n[o]] = i[a];
                      return i;
                    })(g, e))),
                  A = g.length;
                A--;

              )
                if (~l.indexOf(g[A]))
                  for (r in ((o = p[A]),
                  "all" === e
                    ? ((a[A] = e), (s = o), (n = {}))
                    : ((n = a[A] = a[A] || {}), (s = e)),
                  s))
                    (h = o && o[r]) &&
                      (("kill" in h.d && !0 !== h.d.kill(r)) ||
                        Et(this, h, "_pt"),
                      delete o[r]),
                      "all" !== n && (n[r] = 1);
              return this._initted && !this._pt && w && we(this), this;
            }),
            (e.to = function (t, i) {
              return new e(t, i, arguments[2]);
            }),
            (e.from = function (t, e) {
              return Vt(1, arguments);
            }),
            (e.delayedCall = function (t, i, a, o) {
              return new e(i, 0, {
                immediateRender: !1,
                lazy: !1,
                overwrite: !1,
                delay: t,
                onComplete: i,
                onReverseComplete: i,
                onCompleteParams: a,
                onReverseCompleteParams: a,
                callbackScope: o,
              });
            }),
            (e.fromTo = function (t, e, i) {
              return Vt(2, arguments);
            }),
            (e.set = function (t, i) {
              return (
                (i.duration = 0), i.repeatDelay || (i.repeat = 0), new e(t, i)
              );
            }),
            (e.killTweensOf = function (t, e, i) {
              return h.killTweensOf(t, e, i);
            }),
            e
          );
        })(Le);
        Bt(Ve.prototype, {
          _targets: [],
          _lazy: 0,
          _startAt: 0,
          _op: 0,
          _onInit: 0,
        }),
          yt("staggerTo,staggerFrom,staggerFromTo", function (t) {
            Ve[t] = function () {
              var e = new Oe(),
                i = $t.call(arguments, 0);
              return (
                i.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, i)
              );
            };
          });
        var We = function (t, e, i) {
            return (t[e] = i);
          },
          qe = function (t, e, i) {
            return t[e](i);
          },
          Ue = function (t, e, i, a) {
            return t[e](a.fp, i);
          },
          $e = function (t, e, i) {
            return t.setAttribute(e, i);
          },
          ti = function (t, e) {
            return F(t[e]) ? qe : D(t[e]) && t.setAttribute ? $e : We;
          },
          ei = function (t, e) {
            return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e);
          },
          ii = function (t, e) {
            return e.set(e.t, e.p, !!(e.s + e.c * t), e);
          },
          ai = function (t, e) {
            var i = e._pt,
              a = "";
            if (!t && e.b) a = e.b;
            else if (1 === t && e.e) a = e.e;
            else {
              for (; i; )
                (a =
                  i.p +
                  (i.m
                    ? i.m(i.s + i.c * t)
                    : Math.round(1e4 * (i.s + i.c * t)) / 1e4) +
                  a),
                  (i = i._next);
              a += e.c;
            }
            e.set(e.t, e.p, a, e);
          },
          oi = function (t, e) {
            for (var i = e._pt; i; ) i.r(t, i.d), (i = i._next);
          },
          ni = function (t, e, i, a) {
            for (var o, n = this._pt; n; )
              (o = n._next), n.p === a && n.modifier(t, e, i), (n = o);
          },
          si = function (t) {
            for (var e, i, a = this._pt; a; )
              (i = a._next),
                (a.p === t && !a.op) || a.op === t
                  ? Et(this, a, "_pt")
                  : a.dep || (e = 1),
                (a = i);
            return !e;
          },
          ri = function (t, e, i, a) {
            a.mSet(t, e, a.m.call(a.tween, i, a.mt), a);
          },
          hi = function (t) {
            for (var e, i, a, o, n = t._pt; n; ) {
              for (e = n._next, i = a; i && i.pr > n.pr; ) i = i._next;
              (n._prev = i ? i._prev : o) ? (n._prev._next = n) : (a = n),
                (n._next = i) ? (i._prev = n) : (o = n),
                (n = e);
            }
            t._pt = a;
          },
          Ai = (function () {
            function t(t, e, i, a, o, n, s, r, h) {
              (this.t = e),
                (this.s = a),
                (this.c = o),
                (this.p = i),
                (this.r = n || ei),
                (this.d = s || this),
                (this.set = r || We),
                (this.pr = h || 0),
                (this._next = t),
                t && (t._prev = this);
            }
            return (
              (t.prototype.modifier = function (t, e, i) {
                (this.mSet = this.mSet || this.set),
                  (this.set = ri),
                  (this.m = t),
                  (this.mt = i),
                  (this.tween = e);
              }),
              t
            );
          })();
        yt(
          gt +
            "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
          function (t) {
            return (at[t] = 1);
          }
        ),
          (K.TweenMax = K.TweenLite = Ve),
          (K.TimelineLite = K.TimelineMax = Oe),
          (h = new Oe({
            sortChildren: !1,
            defaults: I,
            autoRemoveChildren: !0,
            id: "root",
            smoothChildTiming: !0,
          })),
          (m.stringFilter = _e);
        var gi = [],
          li = {},
          pi = [],
          wi = 0,
          yi = function (t) {
            return (li[t] || pi).map(function (t) {
              return t();
            });
          },
          ci = function () {
            var t = Date.now(),
              e = [];
            t - wi > 2 &&
              (yi("matchMediaInit"),
              gi.forEach(function (t) {
                var i,
                  a,
                  o,
                  n,
                  s = t.queries,
                  r = t.conditions;
                for (a in s)
                  (i = A.matchMedia(s[a]).matches) && (o = 1),
                    i !== r[a] && ((r[a] = i), (n = 1));
                n && (t.revert(), o && e.push(t));
              }),
              yi("matchMediaRevert"),
              e.forEach(function (t) {
                return t.onMatch(t);
              }),
              (wi = t),
              yi("matchMedia"));
          },
          xi = (function () {
            function t(t, e) {
              (this.selector = e && ie(e)),
                (this.data = []),
                (this._r = []),
                (this.isReverted = !1),
                t && this.add(t);
            }
            var e = t.prototype;
            return (
              (e.add = function (t, e, i) {
                F(t) && ((i = e), (e = t), (t = F));
                var a = this,
                  o = function () {
                    var t,
                      o = r,
                      n = a.selector;
                    return (
                      o && o !== a && o.data.push(a),
                      i && (a.selector = ie(i)),
                      (r = a),
                      (t = e.apply(a, arguments)),
                      F(t) && a._r.push(t),
                      (r = o),
                      (a.selector = n),
                      (a.isReverted = !1),
                      t
                    );
                  };
                return (a.last = o), t === F ? o(a) : t ? (a[t] = o) : o;
              }),
              (e.ignore = function (t) {
                var e = r;
                (r = null), t(this), (r = e);
              }),
              (e.getTweens = function () {
                var e = [];
                return (
                  this.data.forEach(function (i) {
                    return i instanceof t
                      ? e.push.apply(e, i.getTweens())
                      : i instanceof Ve &&
                          !(i.parent && "nested" === i.parent.data) &&
                          e.push(i);
                  }),
                  e
                );
              }),
              (e.clear = function () {
                this._r.length = this.data.length = 0;
              }),
              (e.kill = function (t, e) {
                var i = this;
                if (t) {
                  var a = this.getTweens();
                  this.data.forEach(function (t) {
                    "isFlip" === t.data &&
                      (t.revert(),
                      t.getChildren(!0, !0, !1).forEach(function (t) {
                        return a.splice(a.indexOf(t), 1);
                      }));
                  }),
                    a
                      .map(function (t) {
                        return { g: t.globalTime(0), t: t };
                      })
                      .sort(function (t, e) {
                        return e.g - t.g || -1;
                      })
                      .forEach(function (e) {
                        return e.t.revert(t);
                      }),
                    this.data.forEach(function (e) {
                      return !(e instanceof Le) && e.revert && e.revert(t);
                    }),
                    this._r.forEach(function (e) {
                      return e(t, i);
                    }),
                    (this.isReverted = !0);
                } else
                  this.data.forEach(function (t) {
                    return t.kill && t.kill();
                  });
                if ((this.clear(), e)) {
                  var o = gi.indexOf(this);
                  ~o && gi.splice(o, 1);
                }
              }),
              (e.revert = function (t) {
                this.kill(t || {});
              }),
              t
            );
          })(),
          ui = (function () {
            function t(t) {
              (this.contexts = []), (this.scope = t);
            }
            var e = t.prototype;
            return (
              (e.add = function (t, e, i) {
                k(t) || (t = { matches: t });
                var a,
                  o,
                  n,
                  s = new xi(0, i || this.scope),
                  r = (s.conditions = {});
                for (o in (this.contexts.push(s),
                (e = s.add("onMatch", e)),
                (s.queries = t),
                t))
                  "all" === o
                    ? (n = 1)
                    : (a = A.matchMedia(t[o])) &&
                      (gi.indexOf(s) < 0 && gi.push(s),
                      (r[o] = a.matches) && (n = 1),
                      a.addListener
                        ? a.addListener(ci)
                        : a.addEventListener("change", ci));
                return n && e(s), this;
              }),
              (e.revert = function (t) {
                this.kill(t || {});
              }),
              (e.kill = function (t) {
                this.contexts.forEach(function (e) {
                  return e.kill(t, !0);
                });
              }),
              t
            );
          })(),
          di = {
            registerPlugin: function () {
              for (
                var t = arguments.length, e = new Array(t), i = 0;
                i < t;
                i++
              )
                e[i] = arguments[i];
              e.forEach(function (t) {
                return (function (t) {
                  var e = (t = (!t.name && t.default) || t).name,
                    i = F(t),
                    a =
                      e && !i && t.init
                        ? function () {
                            this._props = [];
                          }
                        : t,
                    o = {
                      init: $,
                      render: oi,
                      add: je,
                      kill: si,
                      modifier: ni,
                      rawVars: 0,
                    },
                    n = {
                      targetTest: 0,
                      get: 0,
                      getSetter: ti,
                      aliases: {},
                      register: 0,
                    };
                  if ((ve(), t !== a)) {
                    if (st[e]) return;
                    Bt(a, Bt(bt(t, o), n)),
                      vt(a.prototype, vt(o, bt(t, n))),
                      (st[(a.prop = e)] = a),
                      t.targetTest && (At.push(a), (at[e] = 1)),
                      (e =
                        ("css" === e
                          ? "CSS"
                          : e.charAt(0).toUpperCase() + e.substr(1)) +
                        "Plugin");
                  }
                  U(e, a), t.register && t.register(Ii, a, Ai);
                })(t);
              });
            },
            timeline: function (t) {
              return new Oe(t);
            },
            getTweensOf: function (t, e) {
              return h.getTweensOf(t, e);
            },
            getProperty: function (t, e, i, a) {
              Q(t) && (t = ee(t)[0]);
              var o = pt(t || {}).get,
                n = i ? _t : It;
              return (
                "native" === i && (i = ""),
                t
                  ? e
                    ? n(((st[e] && st[e].get) || o)(t, e, i, a))
                    : function (e, i, a) {
                        return n(((st[e] && st[e].get) || o)(t, e, i, a));
                      }
                  : t
              );
            },
            quickSetter: function (t, e, i) {
              if ((t = ee(t)).length > 1) {
                var a = t.map(function (t) {
                    return Ii.quickSetter(t, e, i);
                  }),
                  o = a.length;
                return function (t) {
                  for (var e = o; e--; ) a[e](t);
                };
              }
              t = t[0] || {};
              var n = st[e],
                s = pt(t),
                r = (s.harness && (s.harness.aliases || {})[e]) || e,
                h = n
                  ? function (e) {
                      var a = new n();
                      (y._pt = 0),
                        a.init(t, i ? e + i : e, y, 0, [t]),
                        a.render(1, a),
                        y._pt && oi(1, y);
                    }
                  : s.set(t, r);
              return n
                ? h
                : function (e) {
                    return h(t, r, i ? e + i : e, s, 1);
                  };
            },
            quickTo: function (t, e, i) {
              var a,
                o = Ii.to(
                  t,
                  vt((((a = {})[e] = "+=0.1"), (a.paused = !0), a), i || {})
                ),
                n = function (t, i, a) {
                  return o.resetTo(e, t, i, a);
                };
              return (n.tween = o), n;
            },
            isTweening: function (t) {
              return h.getTweensOf(t, !0).length > 0;
            },
            defaults: function (t) {
              return (
                t && t.ease && (t.ease = Fe(t.ease, I.ease)), Ct(I, t || {})
              );
            },
            config: function (t) {
              return Ct(m, t || {});
            },
            registerEffect: function (t) {
              var e = t.name,
                i = t.effect,
                a = t.plugins,
                o = t.defaults,
                n = t.extendTimeline;
              (a || "").split(",").forEach(function (t) {
                return (
                  t &&
                  !st[t] &&
                  !K[t] &&
                  q(e + " effect requires " + t + " plugin.")
                );
              }),
                (rt[e] = function (t, e, a) {
                  return i(ee(t), Bt(e || {}, o), a);
                }),
                n &&
                  (Oe.prototype[e] = function (t, i, a) {
                    return this.add(
                      rt[e](t, k(i) ? i : (a = i) && {}, this),
                      a
                    );
                  });
            },
            registerEase: function (t, e) {
              Ce[t] = Fe(e);
            },
            parseEase: function (t, e) {
              return arguments.length ? Fe(t, e) : Ce;
            },
            getById: function (t) {
              return h.getById(t);
            },
            exportRoot: function (t, e) {
              void 0 === t && (t = {});
              var i,
                a,
                o = new Oe(t);
              for (
                o.smoothChildTiming = P(t.smoothChildTiming),
                  h.remove(o),
                  o._dp = 0,
                  o._time = o._tTime = h._time,
                  i = h._first;
                i;

              )
                (a = i._next),
                  (!e &&
                    !i._dur &&
                    i instanceof Ve &&
                    i.vars.onComplete === i._targets[0]) ||
                    Rt(o, i, i._start - i._delay),
                  (i = a);
              return Rt(h, o, 0), o;
            },
            context: function (t, e) {
              return t ? new xi(t, e) : r;
            },
            matchMedia: function (t) {
              return new ui(t);
            },
            matchMediaRefresh: function () {
              return (
                gi.forEach(function (t) {
                  var e,
                    i,
                    a = t.conditions;
                  for (i in a) a[i] && ((a[i] = !1), (e = 1));
                  e && t.revert();
                }) || ci()
              );
            },
            addEventListener: function (t, e) {
              var i = li[t] || (li[t] = []);
              ~i.indexOf(e) || i.push(e);
            },
            removeEventListener: function (t, e) {
              var i = li[t],
                a = i && i.indexOf(e);
              a >= 0 && i.splice(a, 1);
            },
            utils: {
              wrap: function t(e, i, a) {
                var o = i - e;
                return H(e)
                  ? he(e, t(0, e.length), i)
                  : Wt(a, function (t) {
                      return ((o + ((t - e) % o)) % o) + e;
                    });
              },
              wrapYoyo: function t(e, i, a) {
                var o = i - e,
                  n = 2 * o;
                return H(e)
                  ? he(e, t(0, e.length - 1), i)
                  : Wt(a, function (t) {
                      return (
                        e + ((t = (n + ((t - e) % n)) % n || 0) > o ? n - t : t)
                      );
                    });
              },
              distribute: oe,
              random: re,
              snap: se,
              normalize: function (t, e, i) {
                return ge(t, e, 0, 1, i);
              },
              getUnit: Ut,
              clamp: function (t, e, i) {
                return Wt(i, function (i) {
                  return qt(t, e, i);
                });
              },
              splitColor: ue,
              toArray: ee,
              selector: ie,
              mapRange: ge,
              pipe: function () {
                for (
                  var t = arguments.length, e = new Array(t), i = 0;
                  i < t;
                  i++
                )
                  e[i] = arguments[i];
                return function (t) {
                  return e.reduce(function (t, e) {
                    return e(t);
                  }, t);
                };
              },
              unitize: function (t, e) {
                return function (i) {
                  return t(parseFloat(i)) + (e || Ut(i));
                };
              },
              interpolate: function t(e, i, a, o) {
                var n = isNaN(e + i)
                  ? 0
                  : function (t) {
                      return (1 - t) * e + t * i;
                    };
                if (!n) {
                  var s,
                    r,
                    h,
                    A,
                    g,
                    l = Q(e),
                    p = {};
                  if ((!0 === a && (o = 1) && (a = null), l))
                    (e = { p: e }), (i = { p: i });
                  else if (H(e) && !H(i)) {
                    for (h = [], A = e.length, g = A - 2, r = 1; r < A; r++)
                      h.push(t(e[r - 1], e[r]));
                    A--,
                      (n = function (t) {
                        t *= A;
                        var e = Math.min(g, ~~t);
                        return h[e](t - e);
                      }),
                      (a = i);
                  } else o || (e = vt(H(e) ? [] : {}, e));
                  if (!h) {
                    for (s in i) je.call(p, e, s, "get", i[s]);
                    n = function (t) {
                      return oi(t, p) || (l ? e.p : e);
                    };
                  }
                }
                return Wt(a, n);
              },
              shuffle: ae,
            },
            install: V,
            effects: rt,
            ticker: Be,
            updateRoot: Oe.updateRoot,
            plugins: st,
            globalTimeline: h,
            core: {
              PropTween: Ai,
              globals: U,
              Tween: Ve,
              Timeline: Oe,
              Animation: Le,
              getCache: pt,
              _removeLinkedListItem: Et,
              reverting: function () {
                return s;
              },
              context: function (t) {
                return t && r && (r.data.push(t), (t._ctx = r)), r;
              },
              suppressOverwrites: function (t) {
                return (n = t);
              },
            },
          };
        yt("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
          return (di[t] = Ve[t]);
        }),
          Be.add(Oe.updateRoot),
          (y = di.to({}, { duration: 0 }));
        var fi = function (t, e) {
            for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e; )
              i = i._next;
            return i;
          },
          mi = function (t, e) {
            return {
              name: t,
              rawVars: 1,
              init: function (t, i, a) {
                a._onInit = function (t) {
                  var a, o;
                  if (
                    (Q(i) &&
                      ((a = {}),
                      yt(i, function (t) {
                        return (a[t] = 1);
                      }),
                      (i = a)),
                    e)
                  ) {
                    for (o in ((a = {}), i)) a[o] = e(i[o]);
                    i = a;
                  }
                  !(function (t, e) {
                    var i,
                      a,
                      o,
                      n = t._targets;
                    for (i in e)
                      for (a = n.length; a--; )
                        (o = t._ptLookup[a][i]) &&
                          (o = o.d) &&
                          (o._pt && (o = fi(o, i)),
                          o && o.modifier && o.modifier(e[i], t, n[a], i));
                  })(t, i);
                };
              },
            };
          },
          Ii =
            di.registerPlugin(
              {
                name: "attr",
                init: function (t, e, i, a, o) {
                  var n, s, r;
                  for (n in ((this.tween = i), e))
                    (r = t.getAttribute(n) || ""),
                      ((s = this.add(
                        t,
                        "setAttribute",
                        (r || 0) + "",
                        e[n],
                        a,
                        o,
                        0,
                        0,
                        n
                      )).op = n),
                      (s.b = r),
                      this._props.push(n);
                },
                render: function (t, e) {
                  for (var i = e._pt; i; )
                    s ? i.set(i.t, i.p, i.b, i) : i.r(t, i.d), (i = i._next);
                },
              },
              {
                name: "endArray",
                init: function (t, e) {
                  for (var i = e.length; i--; )
                    this.add(t, i, t[i] || 0, e[i], 0, 0, 0, 0, 0, 1);
                },
              },
              mi("roundProps", ne),
              mi("modifiers"),
              mi("snap", se)
            ) || di;
        (Ve.version = Oe.version = Ii.version = "3.11.4"),
          (p = 1),
          G() && ve(),
          Ce.Power0,
          Ce.Power1,
          Ce.Power2,
          Ce.Power3,
          Ce.Power4,
          Ce.Linear,
          Ce.Quad,
          Ce.Cubic,
          Ce.Quart,
          Ce.Quint,
          Ce.Strong,
          Ce.Elastic,
          Ce.Back,
          Ce.SteppedEase,
          Ce.Bounce,
          Ce.Sine,
          Ce.Expo,
          Ce.Circ;
      },
      642: function (t, e, i) {
        i.d(e, {
          ZP: function () {
            return n;
          },
        });
        var a = i(317),
          o = i(975),
          n = a.p8.registerPlugin(o._Z) || a.p8;
        n.core.Tween;
      },
      867: function (t, e, i) {
        i.d(e, {
          G9: function () {
            return C;
          },
          M9: function () {
            return b;
          },
        });
        var a,
          o,
          n,
          s,
          r,
          h,
          A,
          g,
          l,
          p = "transform",
          w = p + "Origin",
          y = function (t) {
            var e = t.ownerDocument || t;
            !(p in t.style) &&
              "msTransform" in t.style &&
              (w = (p = "msTransform") + "Origin");
            for (; e.parentNode && (e = e.parentNode); );
            if (((o = window), (A = new C()), e)) {
              (a = e),
                (n = e.documentElement),
                (s = e.body),
                ((g = a.createElementNS(
                  "http://www.w3.org/2000/svg",
                  "g"
                )).style.transform = "none");
              var i = e.createElement("div"),
                r = e.createElement("div");
              s.appendChild(i),
                i.appendChild(r),
                (i.style.position = "static"),
                (i.style[p] = "translate3d(0,0,1px)"),
                (l = r.offsetParent !== i),
                s.removeChild(i);
            }
            return e;
          },
          c = function (t) {
            for (var e, i; t && t !== s; )
              (i = t._gsap) && i.uncache && i.get(t, "x"),
                i &&
                  !i.scaleX &&
                  !i.scaleY &&
                  i.renderTransform &&
                  ((i.scaleX = i.scaleY = 1e-4),
                  i.renderTransform(1, i),
                  e ? e.push(i) : (e = [i])),
                (t = t.parentNode);
            return e;
          },
          x = [],
          u = [],
          d = function () {
            return (
              o.pageYOffset || a.scrollTop || n.scrollTop || s.scrollTop || 0
            );
          },
          f = function () {
            return (
              o.pageXOffset || a.scrollLeft || n.scrollLeft || s.scrollLeft || 0
            );
          },
          m = function (t) {
            return (
              t.ownerSVGElement ||
              ("svg" === (t.tagName + "").toLowerCase() ? t : null)
            );
          },
          I = function t(e) {
            return (
              "fixed" === o.getComputedStyle(e).position ||
              ((e = e.parentNode) && 1 === e.nodeType ? t(e) : void 0)
            );
          },
          _ = function t(e, i) {
            if (e.parentNode && (a || y(e))) {
              var o = m(e),
                n = o
                  ? o.getAttribute("xmlns") || "http://www.w3.org/2000/svg"
                  : "http://www.w3.org/1999/xhtml",
                s = o ? (i ? "rect" : "g") : "div",
                A = 2 !== i ? 0 : 100,
                g = 3 === i ? 100 : 0,
                l =
                  "position:absolute;display:block;pointer-events:none;margin:0;padding:0;",
                p = a.createElementNS
                  ? a.createElementNS(n.replace(/^https/, "http"), s)
                  : a.createElement(s);
              return (
                i &&
                  (o
                    ? (h || (h = t(e)),
                      p.setAttribute("width", 0.01),
                      p.setAttribute("height", 0.01),
                      p.setAttribute(
                        "transform",
                        "translate(" + A + "," + g + ")"
                      ),
                      h.appendChild(p))
                    : (r || ((r = t(e)).style.cssText = l),
                      (p.style.cssText =
                        l +
                        "width:0.1px;height:0.1px;top:" +
                        g +
                        "px;left:" +
                        A +
                        "px"),
                      r.appendChild(p))),
                p
              );
            }
            throw "Need document and parent.";
          },
          B = function (t, e) {
            var i,
              a,
              n,
              s,
              y,
              c,
              d = m(t),
              f = t === d,
              I = d ? x : u,
              B = t.parentNode;
            if (t === o) return t;
            if (
              (I.length || I.push(_(t, 1), _(t, 2), _(t, 3)),
              (i = d ? h : r),
              d)
            )
              f
                ? ((n = (function (t) {
                    var e,
                      i = t.getCTM();
                    return (
                      i ||
                        ((e = t.style[p]),
                        (t.style[p] = "none"),
                        t.appendChild(g),
                        (i = g.getCTM()),
                        t.removeChild(g),
                        e
                          ? (t.style[p] = e)
                          : t.style.removeProperty(
                              p.replace(/([A-Z])/g, "-$1").toLowerCase()
                            )),
                      i || A.clone()
                    );
                  })(t)),
                  (s = -n.e / n.a),
                  (y = -n.f / n.d),
                  (a = A))
                : t.getBBox
                ? ((n = t.getBBox()),
                  (s =
                    (a = (a = t.transform ? t.transform.baseVal : {})
                      .numberOfItems
                      ? a.numberOfItems > 1
                        ? (function (t) {
                            for (
                              var e = new C(), i = 0;
                              i < t.numberOfItems;
                              i++
                            )
                              e.multiply(t.getItem(i).matrix);
                            return e;
                          })(a)
                        : a.getItem(0).matrix
                      : A).a *
                      n.x +
                    a.c * n.y),
                  (y = a.b * n.x + a.d * n.y))
                : ((a = new C()), (s = y = 0)),
                e && "g" === t.tagName.toLowerCase() && (s = y = 0),
                (f ? d : B).appendChild(i),
                i.setAttribute(
                  "transform",
                  "matrix(" +
                    a.a +
                    "," +
                    a.b +
                    "," +
                    a.c +
                    "," +
                    a.d +
                    "," +
                    (a.e + s) +
                    "," +
                    (a.f + y) +
                    ")"
                );
            else {
              if (((s = y = 0), l))
                for (
                  a = t.offsetParent, n = t;
                  n && (n = n.parentNode) && n !== a && n.parentNode;

                )
                  (o.getComputedStyle(n)[p] + "").length > 4 &&
                    ((s = n.offsetLeft), (y = n.offsetTop), (n = 0));
              if (
                "absolute" !== (c = o.getComputedStyle(t)).position &&
                "fixed" !== c.position
              )
                for (a = t.offsetParent; B && B !== a; )
                  (s += B.scrollLeft || 0),
                    (y += B.scrollTop || 0),
                    (B = B.parentNode);
              ((n = i.style).top = t.offsetTop - y + "px"),
                (n.left = t.offsetLeft - s + "px"),
                (n[p] = c[p]),
                (n[w] = c[w]),
                (n.position = "fixed" === c.position ? "fixed" : "absolute"),
                t.parentNode.appendChild(i);
            }
            return i;
          },
          v = function (t, e, i, a, o, n, s) {
            return (
              (t.a = e),
              (t.b = i),
              (t.c = a),
              (t.d = o),
              (t.e = n),
              (t.f = s),
              t
            );
          },
          C = (function () {
            function t(t, e, i, a, o, n) {
              void 0 === t && (t = 1),
                void 0 === e && (e = 0),
                void 0 === i && (i = 0),
                void 0 === a && (a = 1),
                void 0 === o && (o = 0),
                void 0 === n && (n = 0),
                v(this, t, e, i, a, o, n);
            }
            var e = t.prototype;
            return (
              (e.inverse = function () {
                var t = this.a,
                  e = this.b,
                  i = this.c,
                  a = this.d,
                  o = this.e,
                  n = this.f,
                  s = t * a - e * i || 1e-10;
                return v(
                  this,
                  a / s,
                  -e / s,
                  -i / s,
                  t / s,
                  (i * n - a * o) / s,
                  -(t * n - e * o) / s
                );
              }),
              (e.multiply = function (t) {
                var e = this.a,
                  i = this.b,
                  a = this.c,
                  o = this.d,
                  n = this.e,
                  s = this.f,
                  r = t.a,
                  h = t.c,
                  A = t.b,
                  g = t.d,
                  l = t.e,
                  p = t.f;
                return v(
                  this,
                  r * e + A * a,
                  r * i + A * o,
                  h * e + g * a,
                  h * i + g * o,
                  n + l * e + p * a,
                  s + l * i + p * o
                );
              }),
              (e.clone = function () {
                return new t(this.a, this.b, this.c, this.d, this.e, this.f);
              }),
              (e.equals = function (t) {
                var e = this.a,
                  i = this.b,
                  a = this.c,
                  o = this.d,
                  n = this.e,
                  s = this.f;
                return (
                  e === t.a &&
                  i === t.b &&
                  a === t.c &&
                  o === t.d &&
                  n === t.e &&
                  s === t.f
                );
              }),
              (e.apply = function (t, e) {
                void 0 === e && (e = {});
                var i = t.x,
                  a = t.y,
                  o = this.a,
                  n = this.b,
                  s = this.c,
                  r = this.d,
                  h = this.e,
                  A = this.f;
                return (
                  (e.x = i * o + a * s + h || 0),
                  (e.y = i * n + a * r + A || 0),
                  e
                );
              }),
              t
            );
          })();
        function b(t, e, i, o) {
          if (!t || !t.parentNode || (a || y(t)).documentElement === t)
            return new C();
          var n = c(t),
            s = m(t) ? x : u,
            r = B(t, i),
            h = s[0].getBoundingClientRect(),
            A = s[1].getBoundingClientRect(),
            g = s[2].getBoundingClientRect(),
            l = r.parentNode,
            p = !o && I(t),
            w = new C(
              (A.left - h.left) / 100,
              (A.top - h.top) / 100,
              (g.left - h.left) / 100,
              (g.top - h.top) / 100,
              h.left + (p ? 0 : f()),
              h.top + (p ? 0 : d())
            );
          if ((l.removeChild(r), n))
            for (h = n.length; h--; )
              ((A = n[h]).scaleX = A.scaleY = 0), A.renderTransform(1, A);
          return e ? w.inverse() : w;
        }
      },
      974: function (t, e, i) {
        i.d(e, {
          Z: function () {
            return n;
          },
        });
        var a = i(642),
          o = i(567);
        class n {
          constructor() {
            this.initialization();
          }
          initialization() {
            (this.animateBanner = this.animateBanner.bind(this)),
              (this.resize = this.resize.bind(this)),
              this.resize(),
              window.addEventListener("resize", this.resize);
          }
          animateBanner(t) {
            const e = this.bannerHeight,
              i = this.phrases,
              n = this.wrapHeight;
            a.ZP.to(i, {
              duration: 0.6,
              ease: "power2.inOut",
              y: function (i, o) {
                return Math.round(+a.ZP.getProperty(o, "y") / e) * e + t;
              },
              modifiers: {
                y: function (t, i) {
                  return (
                    (t = a.ZP.utils.wrap(-e, n, parseInt(t))),
                    e > t && t > 0
                      ? o(i).addClass("current")
                      : o(i).removeClass("current"),
                    t + "px"
                  );
                },
              },
            });
          }
          resize() {
            (this.phrases = o(".yps_phrases").find(".phrase")),
              (this.bannerHeight = 0),
              this.phrases.each((t, e) => {
                let i = o(e).height();
                i > this.bannerHeight && (this.bannerHeight = i);
              }),
              (this.wrapHeight = (this.phrases.length - 1) * this.bannerHeight),
              o(".yps_phrases").css("height", this.bannerHeight - 2 + "px"),
              a.ZP.set(this.phrases, { y: (t) => t * this.bannerHeight }),
              clearInterval(this.animation),
              (this.animation = setInterval(() => {
                this.animateBanner(-this.bannerHeight);
              }, 3e3));
          }
        }
      },
      618: function (t, e, i) {
        i.d(e, {
          Z: function () {
            return n;
          },
        });
        var a = i(642),
          o = i(567);
        class n {
          constructor() {
            this.addCenteredLine();
          }
          uuidv4() {
            return new Date().valueOf() + Math.random().toString(16).slice(2);
          }
          animateSVG(t) {
            let e = 0;
            for (let i = 0; i < t.length; i++)
              a.ZP.set(o(t[i]), { drawSVG: "0%" }),
                a.ZP.to(o(t[i]), {
                  duration: "1s",
                  drawSVG: "100%",
                  ease: "power2.inOut",
                  delay: e + "s",
                }),
                (e += 1);
          }
          addCenteredLine() {
            const t = this,
              e = ["#00BCD4", "#E64054", "#F97E44"],
              i = o(".connecting_line-centered"),
              a = o(".connecting_line.centered_line"),
              n = o(".connecting_line-top"),
              s = o(".connecting_line.bottom_line"),
              r = o(".connecting_line.right_line"),
              h = o(".connecting_line.left_frame");
            i.length &&
              i.each(function (t, e) {
                t + 1 === i.length && o(this).addClass("last-child"),
                  o(this).append(
                    '<span class="center_line"><span></span></span>'
                  );
              }),
              a.length &&
                a.each(function (t, e) {
                  t + 1 === a.length && o(this).addClass("last-child"),
                    o(this).append(
                      '<span class="center_line"><span></span></span>'
                    );
                }),
              n.length &&
                n.each(function () {
                  o(this).append(
                    '<span class="top_center_line"><span></span></span>'
                  );
                }),
              r.length &&
                r.each(function (i, a) {
                  const n = t.uuidv4();
                  i + 1 === r.length && o(this).addClass("last-child"),
                    o(this).css("padding-right", "12vw");
                  let s = e[0],
                    h = e[1],
                    A = "start-turquoise",
                    g = "end-orange";
                  0 === i &&
                    ((s = e[1]),
                    (h = e[0]),
                    (A = "start-orange"),
                    (g = "end-red")),
                    1 === i &&
                      ((s = e[2]),
                      (h = e[1]),
                      (A = "start-orange"),
                      (g = "end-red")),
                    i % 2 == 0 &&
                      ((s = e[0]),
                      (h = e[2]),
                      (A = "start-orange"),
                      (g = "end-turquoise")),
                    i % 3 == 0 &&
                      ((s = e[1]),
                      (h = e[0]),
                      (A = "start-turquoise"),
                      (g = "end-red")),
                    o(this).append(
                      `<div class="flow-line ${A} ${g}">\n                    <svg class="vl_0" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none" x="0px" y="0px" width="3px" height="50px" viewBox="0 0 3 50">\n                    <defs>\n                        <linearGradient id="Gradient_${n}" gradientUnits="userSpaceOnUse" x1="0" y1="50" x2="0" y2="1" spreadMethod="pad">\n                            <stop  offset="0%" stop-color="${s}"/>\n                            <stop  offset="100%" stop-color="${h}"/>\n                        </linearGradient>\n                        </defs>\n                    <path stroke="url(#Gradient_${n})" stroke-width="3" stroke-linejoin="round" stroke-linecap="square" fill="none" d="\n                    M 1.4 1.7\n                    L 1.4 48.55"/>\n                    </svg>\n                    </div>`
                    );
                }),
              s.length &&
                s.each(function () {
                  o(this).append(
                    '<div class="flow-line-container fbox fb100">\n                    <div class="h-gradient-line fb100">\n                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none" x="0px" y="0px" width="100px" height="3px" viewBox="0 0 100 3">\n                            <linearGradient id="Gradient_1" gradientUnits="userSpaceOnUse" x1="0" y1="1.9" x2="100.5" y2="1.9" spreadMethod="pad">\n                                <stop  offset="18.823529411764707%" stop-color="#E64054"/>\n                                <stop  offset="100%" stop-color="#00BCD4"/>\n                            </linearGradient>\n                            <path id="Layer0_0_1_STROKES" stroke="url(#Gradient_1)" stroke-width="3" stroke-linejoin="round" stroke-linecap="square" fill="none" d="\n                                        M 1.5 1.9\n                                        L 99 1.9"/>\n                        </svg>\n                    </div>\n                    <div class="fbox fb-col fb-iend">\n                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none" x="0px" y="0px" width="33px" height="100px" viewBox="0 0 33 100">\n                            <path id="Layer0_0_1_STROKES" stroke="#00BCD4" stroke-width="3" stroke-linejoin="round" stroke-linecap="square" fill="none" d="\n                                        M 1.6 1.65\n                                        Q 2.1 1.65 2.6 1.7 14.3 2.05 22.75 10.45 31.55 19.25 31.55 31.65\n                                        L 31.55 98.7"/>\n                        </svg>\n                        <svg class="fb-100" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none" x="0px" y="0px" width="3px" height="50px" viewBox="0 0 3 50">\n                            <path id="Layer0_0_1_STROKES" stroke="#00BCD4" stroke-width="3" stroke-linejoin="round" stroke-linecap="square" fill="none" d="\n                                    M 1.7 0.65\n                                    L 1.7 49.55"/>\n                        </svg>\n                    </div>\n                </div>'
                  );
                }),
              h.length > 0 &&
                h.each(function () {
                  o(this).append(
                    '<div class="flow-line">\n                    <svg id="t_tl" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none" x="0px" y="0px" width="833px" height="3px" viewBox="0 0 833 3">\n                        <linearGradient id="Gradient_Team_Top" gradientUnits="userSpaceOnUse" x1="343.07500000000005" y1="162.25" x2="-30.974999999999994" y2="162.25" spreadMethod="pad">\n                        <stop  offset="0%" stop-color="#E64054"/>\n                        <stop  offset="100%" stop-color="#00BCD4"/>\n                        </linearGradient>\n                        <path stroke="url(#Gradient_Team_Top)" stroke-width="3" stroke-linejoin="round" stroke-linecap="butt" fill="none" d="\n                        M 833.6 1.75\n                        L 0 1.75"/>\n                    </svg>\n                    <svg id="t_ctl" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none" x="0px" y="0px" width="33px" height="100px" viewBox="0 0 33 100">\n                        <path stroke="#00BCD4" stroke-width="3" stroke-linejoin="round" stroke-linecap="square" fill="none" d="\n                        M 31.6 1.75\n                        Q 31.0970703125 1.751171875 30.6 1.775 18.8751953125 2.125 10.45 10.55 1.65 19.35 1.65 31.75\n                        L 1.65 98.8"/>\n                    </svg>\n                    <svg id="t_vl" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none" x="0px" y="0px" width="3px" height="50px" viewBox="0 0 3 50">\n                        <path stroke="#00BCD4" stroke-width="3" stroke-linejoin="round" stroke-linecap="square" fill="none" d="\n                        M 1.4 1.7\n                        L 1.4 48.55"/>\n                        </svg>\n                    <svg id="t_cbl" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none" x="0px" y="0px" width="33px" height="100px" viewBox="0 0 33 100">\n                        <path stroke="#00BCD4" stroke-width="3" stroke-linejoin="round" stroke-linecap="square" fill="none" d="\n                            M 31.6 98.75\n                            Q 31.1 98.75 30.6 98.7 18.9 98.35 10.45 89.95 1.65 81.15 1.65 68.75\n                            L 1.65 1.7"/>\n                    </svg>\n                    <svg id="t_bl" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none" x="0px" y="0px" width="833px" height="3px" viewBox="0 0 833 3">\n                        <linearGradient id="Gradient_Team_Bottom" gradientUnits="userSpaceOnUse" x1="343.07500000000005" y1="162.25" x2="-30.974999999999994" y2="162.25" spreadMethod="pad">\n                        <stop  offset="0%" stop-color="#F97E44"/>\n                        <stop  offset="100%" stop-color="#00BCD4"/>\n                        </linearGradient>\n                        <path stroke="url(#Gradient_Team_Bottom)" stroke-width="3" stroke-linejoin="round" stroke-linecap="butt" fill="none" d="\n                        M 833.6 1.75\n                        L 0 1.75"/>\n                    </svg>\n                </div>'
                  );
                });
          }
        }
      },
      258: function (t, e, i) {
        i.d(e, {
          Z: function () {
            return s;
          },
        });
        var a = i(642),
          o = i(826),
          n = i(567);
        class s {
          constructor() {
            this.initialization();
          }
          initialization() {
            (this.updateDraggable = this.updateDraggable.bind(this)),
              (this.updateProgress = this.updateProgress.bind(this)),
              (this.animateSlides = this.animateSlides.bind(this)),
              (this.autoPlay = this.autoPlay.bind(this)),
              (this.resize = this.resize.bind(this)),
              (this.slideDelay = 8),
              (this.slideDuration = 0.3),
              (this.slides = document.querySelectorAll(".teammate")),
              (this.numSlides = this.slides.length),
              (this.wrapHeight = 0),
              (this.proxy = document.createElement("div")),
              (this.timer = a.ZP.delayedCall(this.slideDelay, this.autoPlay));
            for (let t = 0; t < this.numSlides; t++)
              a.ZP.set(this.slides[t], { xPercent: 100 * t });
            this.updateContainerHeight(),
              a.ZP.set(this.proxy, { x: 0 }),
              (this.slideAnimation = a.ZP.fromTo(
                this.proxy,
                { x: 0, duration: 2 },
                { x: 100 }
              )),
              (this.slideWidth = 0),
              (this.wrapWidth = 0),
              (this.animation = a.ZP.to(this.slides, {
                duration: 1,
                xPercent: "+=" + 100 * this.numSlides,
                ease: "none",
                opacity: 1,
                paused: !0,
                repeat: 0,
                modifiers: {
                  xPercent: a.ZP.utils.wrap(-100, 100 * (this.numSlides - 1)),
                  opacity: (t, e) => {
                    const i = n(window).width(),
                      o = n(e),
                      s = o.width(),
                      r = o.offset(),
                      h = i / 2 - s / 2;
                    if (
                      (r.left < h + s / 2 && r.left > h - s / 2
                        ? o.hasClass("imgloaded") || n(e).addClass("imgloaded")
                        : o.hasClass("imgloaded") &&
                          n(e).removeClass("imgloaded"),
                      i < 728)
                    )
                      return;
                    const A = 1.2 * (1 - (Math.abs(h - r.left) / h) * 0.5);
                    a.ZP.set(n(e).find(".box"), { scale: Math.abs(A) });
                  },
                },
              })),
              (this.draggable = new o._(this.proxy, {
                trigger: ".ctheme_team_showcase",
                throwProps: !0,
                lockAxis: !0,
                type: "x",
                onPress: this.updateDraggable,
                onDrag: this.updateProgress,
                onThrowUpdate: this.updateProgress,
                snap: { x: a.ZP.utils.snap(this.slideWidth) },
              })),
              this.resize(),
              window.addEventListener("resize", this.resize),
              this.openingAnimation(),
              n("#team_next").on("click", () => {
                this.onNext();
              }),
              n("#team_prev").on("click", () => {
                this.onPrev();
              });
          }
          updateContainerHeight() {
            const t = n(".ctheme_team_showcase");
            for (let t = 0; t < this.numSlides; t++)
              this.slides[t].offsetHeight > this.wrapHeight &&
                (this.wrapHeight = 1.2 * this.slides[t].offsetHeight);
            (this.containerWidth = t.width()),
              t.css("height", this.wrapHeight + "px");
          }
          openingAnimation() {
            a.ZP.set(this.slides, {
              transformOrigin: "center center",
              backfaceVisibility: "hidden",
            }),
              a.ZP.fromTo(
                this.slides,
                { y: 200, rotationX: "-180", duration: 2 },
                { y: 0, ease: "power2.inOut", rotationX: "0", stagger: 0.15 }
              ),
              this.animateSlides(-1);
          }
          updateDraggable() {
            this.timer.restart(!0),
              this.slideAnimation.kill(),
              this.draggable.update();
          }
          animateSlides(t) {
            this.timer.restart(!0), this.slideAnimation.kill();
            const e = a.ZP.getProperty(this.proxy, "x");
            this.slideAnimation = a.ZP.to(this.proxy, {
              duration: this.slideDuration,
              x: +e + t * this.slideWidth,
              onUpdate: this.updateProgress,
            });
          }
          autoPlay() {
            window.matchMedia("screen and (max-width: 768px)").matches;
          }
          onNext() {
            this.animateSlides(-1);
          }
          onPrev() {
            this.animateSlides(1);
          }
          updateProgress() {
            const t = a.ZP.getProperty(this.proxy, "x");
            this.animation.progress(a.ZP.utils.wrap(0, 1, t / this.wrapWidth));
          }
          resize() {
            const t = a.ZP.getProperty(this.proxy, "x") / this.wrapWidth || 0;
            (this.slideWidth = this.slides[0].offsetWidth),
              (this.wrapWidth = this.slideWidth * this.numSlides),
              a.ZP.set(this.proxy, { x: t * this.wrapWidth }),
              this.animateSlides(-1);
          }
          snapX(t) {
            return Math.round(t / this.slideWidth) * this.slideWidth;
          }
        }
      },
      567: function (t) {
        t.exports = window.jQuery;
      },
      330: function (t, e, i) {
        i.d(e, {
          Z: function () {
            return r;
          },
        });
        var a = function (t) {
            return Array.prototype.slice.call(t);
          },
          o = function () {
            var t = window.navigator.userAgent,
              e = !!t.match(/iPad/i) || !!t.match(/iPhone/i),
              i = !!t.match(/WebKit/i);
            return e && i && !t.match(/CriOS/i);
          },
          n = {
            scale: 1.5,
            speed: 1.5,
            wrapperClass: null,
            willChange: !1,
            externalRAF: !1,
          },
          s = function (t, e) {
            var i = this;
            if (
              ((this.element = t),
              (this.wrapper = document.createElement("div")),
              (this.options = Object.assign({}, n, e)),
              this.updateOptions(),
              (this.vh = document.documentElement.clientHeight),
              (this.isVisible = !1),
              (this.damp = this.calcDamp(document.documentElement.clientWidth)),
              (this.elementTagName = t.tagName.toLowerCase()),
              "img" === this.elementTagName)
            ) {
              var a = t.getAttribute("src");
              if (!a) return;
              (async function (t) {
                var e = new Image();
                return (e.src = t), await e.decode(), e;
              })(a).then(function () {
                i.createParallax();
              });
            } else this.createParallax();
          };
        (s.prototype.createParallax = function () {
          this.setStyle(!0), this.wrapElement(), o() || this.createObserver();
        }),
          (s.prototype.updateOptions = function () {
            var t = this.element.getAttribute("data-u-scale"),
              e = this.element.getAttribute("data-u-speed"),
              i = this.element.getAttribute("data-u-willchange");
            null !== t && (this.options.scale = Number(t)),
              null !== e && (this.options.speed = Number(e)),
              null !== i && (this.options.willChange = !0);
          }),
          (s.prototype.setStyle = function (t) {
            void 0 === t && (t = !1);
            var e = this.element.clientHeight,
              i = this.element.clientWidth,
              a = window.getComputedStyle(this.element),
              o = "absolute" === a.position,
              n = this.wrapper.style,
              s = this.element.style,
              r = this.options.scale;
            o &&
              "0px" !== a.marginRight &&
              "0px" !== a.marginLeft &&
              a.marginLeft === a.marginRight &&
              (n.margin = "auto"),
              ("0px" === a.marginTop && "0px" === a.marginBottom) ||
                ((n.marginTop = a.marginTop),
                (n.marginBottom = a.marginBottom),
                (s.marginTop = "0"),
                (s.marginBottom = "0")),
              "auto" !== a.inset &&
                ((n.top = a.top),
                (n.right = a.right),
                (n.bottom = a.bottom),
                (n.left = a.left),
                (s.top = "0"),
                (s.right = "0"),
                (s.bottom = "0"),
                (s.left = "0")),
              "none" !== a.transform && (n.transform = a.transform),
              "auto" !== a.zIndex && (n.zIndex = a.zIndex),
              (n.position = o ? "absolute" : "relative"),
              "auto" !== a.gridArea &&
                "auto / auto / auto / auto" !== a.gridArea &&
                ((n.gridArea = a.gridArea), (s.gridArea = "auto")),
              t &&
                ((n.width = "100%"),
                (n.overflow = "hidden"),
                (s.display = "block"),
                (s.overflow = "hidden"),
                (s.backfaceVisibility = "hidden"),
                "0px" !== a.padding && (s.padding = "0"),
                "img" === this.elementTagName
                  ? (s.objectFit = "cover")
                  : "video" !== this.elementTagName &&
                    (s.backgroundPosition = "center")),
              "0px" !== a.borderRadius &&
                ((n.borderRadius = a.borderRadius),
                n.isolation || (n.isolation = "isolate"),
                "0px" !== a.marginLeft &&
                  ((n.marginLeft = a.marginLeft), (s.marginLeft = "0")),
                "0px" !== a.marginRight &&
                  ((n.marginRight = a.marginRight), (s.marginRight = "0")),
                (n.width = i + "px")),
              o && ((n.width = i + "px"), (s.width = "100%")),
              "none" !== a.maxHeight &&
                ((n.maxHeight = a.maxHeight), (s.maxHeight = "none")),
              "0px" !== a.minHeight &&
                ((n.minHeight = a.minHeight), (s.minHeight = "none")),
              (s.width = i + "px"),
              n.setProperty("height", e + "px", "important"),
              s.setProperty("height", e * r + "px", "important"),
              (this.wrapperHeight = e),
              (this.overflow = Math.floor(10 * (e - e * r)) / 10);
          }),
          (s.prototype.wrapElement = function () {
            var t =
              this.element.getAttribute("data-u-wrapper-class") ||
              this.options.wrapperClass;
            t && this.wrapper.classList.add(t);
            var e = this.element.closest("picture"),
              i = null !== e ? e : this.element,
              a = i.parentNode;
            null !== a && a.insertBefore(this.wrapper, i),
              this.wrapper.appendChild(i);
          }),
          (s.prototype.checkVisible = function () {
            var t = this.wrapper.getBoundingClientRect();
            t.bottom > 0 && t.top < window.innerHeight
              ? this.onEnter()
              : this.onLeave();
          }),
          (s.prototype.createObserver = function () {
            var t = this;
            (this.observer = new IntersectionObserver(
              function (e) {
                e[0].isIntersecting ? t.onEnter() : t.onLeave();
              },
              { root: null, rootMargin: "0px", threshold: 0 }
            )),
              this.observer.observe(this.wrapper);
          }),
          (s.prototype.onEnter = function () {
            var t = this.element.style,
              e = "transform";
            this.options.willChange && t.willChange !== e && (t.willChange = e),
              (this.isVisible = !0);
          }),
          (s.prototype.onLeave = function () {
            var t = this.element;
            this.options.willChange &&
              "transform" === t.style.willChange &&
              (t.style.willChange = ""),
              (this.isVisible = !1);
          }),
          (s.prototype.calcTranslateValue = function () {
            var t = window.pageYOffset;
            t < 0 && (t = 0);
            var e = this.wrapper.getBoundingClientRect().top + t,
              i = (t + this.vh - e) / ((this.vh + this.wrapperHeight) / 100),
              a = Math.min(100, Math.max(0, i)) / 100,
              o = this.overflow,
              n = this.options.speed,
              s = (o * n - o) / 2,
              r = o * (1 - a) * n * this.damp - s;
            return Number(r.toFixed(4));
          }),
          (s.prototype.calcDamp = function (t) {
            var e = this.options.scale,
              i = this.options.speed;
            if (!((i >= 1.4 || e >= 1.4) && t <= 1e3)) return 1;
            e < 1 && (e = 1), i < 1 && (i = 1);
            var a = 1.2 - (1 - (t / 1e3 + (3 - (e + i)))),
              o = Math.max(0.5, Math.min(1, a));
            return Math.floor(100 * o) / 100;
          }),
          (s.prototype.applyParallax = function () {
            this.element.style.transform =
              "translate3d(0 , " + this.calcTranslateValue() + "px , 0)";
          }),
          (s.prototype.animate = function () {
            o() && this.checkVisible(),
              window.pageYOffset < 0 ||
                (this.isVisible && this.applyParallax());
          }),
          (s.prototype.reset = function () {
            this.damp = this.calcDamp(window.innerWidth);
            var t = this.wrapper.style,
              e = this.element.style;
            (this.vh = document.documentElement.clientHeight),
              (t.width = ""),
              (t.position = ""),
              (t.height = "100%"),
              (e.width = ""),
              "img" === this.elementTagName &&
                "absolute" === t.position &&
                (t.height = "100%"),
              "" === t.gridArea ? (e.height = "") : (e.height = "100%"),
              "0px" !== t.margin && ((t.margin = ""), (e.margin = "")),
              "auto" !== t.inset &&
                ((t.top = ""),
                (t.right = ""),
                (t.bottom = ""),
                (t.left = ""),
                (e.top = ""),
                (e.right = ""),
                (e.bottom = ""),
                (e.left = "")),
              "none" !== t.transform &&
                ((t.transform = ""), (e.transform = "")),
              "auto" !== t.zIndex && (t.zIndex = ""),
              "0px" !== t.borderRadius &&
                ((t.borderRadius = ""), (t.isolation = "")),
              this.setStyle(),
              this.applyParallax();
          }),
          (s.prototype.destroy = function () {
            var t;
            this.observer && this.observer.disconnect(),
              this.wrapper.removeAttribute("style"),
              this.element.removeAttribute("style"),
              (t = this.wrapper).replaceWith.apply(t, this.wrapper.childNodes);
          });
        var r = function (t, e) {
          if (!t) throw new Error("Argument 'elements' cannot be null.");
          var i, o;
          (this.instances = []),
            (this.externalRAF = (e && e.externalRAF) || !1),
            (this.onResizeEvent = this.resize.bind(this)),
            (i =
              "undefined" != typeof Promise &&
              -1 !== Promise.toString().indexOf("[native code]")),
            (o = "undefined" != typeof Element && Element.prototype.closest),
            i &&
              o &&
              "IntersectionObserver" in window &&
              this.init(
                (function (t) {
                  return Array.isArray(t)
                    ? t
                    : "string" == typeof t
                    ? a(document.querySelectorAll(t))
                    : t instanceof HTMLElement
                    ? [t]
                    : t instanceof NodeList || t instanceof HTMLCollection
                    ? a(t)
                    : [t];
                })(t),
                e
              );
        };
        (r.prototype.init = function (t, e) {
          (this.instances = t.map(function (t) {
            return new s(t, e);
          })),
            this.externalRAF || this.animate(),
            navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)
              ? window.addEventListener("orientationchange", this.onResizeEvent)
              : window.addEventListener("resize", this.onResizeEvent);
        }),
          (r.prototype.animate = function () {
            this.instances.forEach(function (t) {
              t.animate();
            }),
              this.externalRAF ||
                (this.requestId = window.requestAnimationFrame(
                  this.animate.bind(this)
                ));
          }),
          (r.prototype.reset = function () {
            this.instances.forEach(function (t) {
              t.reset();
            });
          }),
          (r.prototype.resize = function () {
            clearTimeout(this.timer),
              (this.timer = window.setTimeout(this.reset.bind(this), 500)),
              this.reset.bind(this);
          }),
          (r.prototype.destroy = function () {
            this.requestId && window.cancelAnimationFrame(this.requestId),
              window.removeEventListener("resize", this.onResizeEvent),
              window.removeEventListener(
                "orientationchange",
                this.onResizeEvent
              ),
              this.instances.forEach(function (t) {
                t.destroy();
              });
          });
      },
    },
    e = {};
  function i(a) {
    var o = e[a];
    if (void 0 !== o) return o.exports;
    var n = (e[a] = { exports: {} });
    return t[a](n, n.exports, i), n.exports;
  }
  (i.n = function (t) {
    var e =
      t && t.__esModule
        ? function () {
            return t.default;
          }
        : function () {
            return t;
          };
    return i.d(e, { a: e }), e;
  }),
    (i.d = function (t, e) {
      for (var a in e)
        i.o(e, a) &&
          !i.o(t, a) &&
          Object.defineProperty(t, a, { enumerable: !0, get: e[a] });
    }),
    (i.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (i.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (function () {
      var t = i(642),
        e = i(898),
        a = i(826),
        o = i(258),
        n = i(618),
        s = i(974),
        r = i(567),
        h = i(634),
        A = i(228),
        g = i(284),
        l = i(330);
      (r.fn.classChange = function (t) {
        return $(this).each((e, i) => {
          new MutationObserver((e) => {
            e.forEach((e) => {
              const i = r(e.target)
                .prop(e.attributeName)
                .split(" ")
                .slice(-1)
                .toString();
              return t && t(e.target, i);
            });
          }).observe(i, { attributes: !0, attributeFilter: ["class"] });
        });
      }),
        r(function () {
          t.ZP.registerPlugin(e),
            t.ZP.registerPlugin(a._),
            w(),
            v(),
            setTimeout(() => {
              r("body").addClass("loaded");
            }, 600),
            b(),
            I(),
            B(),
            (function () {
              const t = window.matchMedia(
                "screen and (max-width: 768px)"
              ).matches;
              return t && console.log("Is mobile"), t;
            })() ||
              (M(),
              $("a").each(function () {
                let t = $(this).attr("cursor"),
                  e = $("#cursor");
                ((t && void 0 !== t) ||
                  $(this).hasClass("wp_aad_menu_title")) &&
                  ($(this).on("mouseenter", function () {
                    ($(this).hasClass("open_bio") ||
                      $(this).hasClass("service_btn")) &&
                      e.addClass("open_bio"),
                      e.addClass("activate");
                  }),
                  $(this).on("mouseleave", function () {
                    ($(this).hasClass("open_bio") ||
                      $(this).hasClass("service_btn")) &&
                      $("#cursor").removeClass("open_bio"),
                      e.removeClass("activate");
                  }));
              }),
              E(),
              Q($("body")),
              u()),
            y();
          const i = new n.Z();
          m(r(".centered_line"), i),
            m(r(".right_line"), i),
            m(r(".left_frame"), i),
            r(".ctheme_team_showcase").length && new o.Z(),
            r(".yps_phrases").length && new s.Z(),
            p(),
            setTimeout(() => {
              C();
            }, 1e3),
            x(),
            console.log(
              "Developed with ♥ by All Around, in Oviedo, Spain. Hello there! Do you like what you see? We are looking for new exciting projects and new talent at https://www.allaround.digital/"
            );
        });
      const p = () => {
          function t(t) {
            var e = setInterval(function () {
              r("body").hasClass("loaded") && (clearInterval(e), t());
            }, 300);
          }
          t(h.tm), t(A.F), t(g.Ao);
        },
        w = () => {
          let t = !1;
          const e = r("#menu_btn"),
            i = r("#responsive_slider_nav");
          e.on("click", function () {
            t
              ? (i.removeClass("open"), e.removeClass("open"))
              : (i.addClass("open"), e.addClass("open")),
              (t = !t);
          }),
            r(window).on("resize", function () {
              i.removeClass("open"), (t = !1);
            });
        },
        y = () => {
          r(".aspam_em").each(function (t, e) {
            const i = r(this)
              .attr("esrc")
              .replace("[*a*]", "@")
              .replace("[*d*]", ".");
            r(this).attr("href", "mailto:" + i), r(this).find("span").text(i);
          }),
            r(".aspam_em_notext").each(function (t, e) {
              const i = r(this)
                .attr("esrc")
                .replace("[*a*]", "@")
                .replace("[*d*]", ".");
              r(this).attr("href", "mailto:" + i);
            });
        };
      function c() {
        return new Date().valueOf() + Math.random().toString(16).slice(2);
      }
      const x = () => {
          r("a").each(function () {
            r(this).attr("href").includes(window.location.origin) &&
              (r(this).attr("href").includes("mailto:") ||
                r(this).on("click", function (t) {
                  t.preventDefault(),
                    r("body").removeClass("loaded"),
                    setTimeout(() => {
                      window.location.href = r(this).attr("href");
                    }, 600);
                }));
          });
        },
        u = () => {
          r(".parallax")
            .find("img")
            .each(function () {
              r(this).addClass("ukiyo");
            }),
            new l.Z(".ukiyo");
        },
        d = (e) => {
          const i = e.text().split(" "),
            a = [],
            o = [],
            n = ["#F97E44", "#00BCD4", "#E64054"];
          e.html(""),
            i.map((t, i) => {
              const s = r("<span />"),
                h = r("<span />").attr("id", c()).text(t),
                A = t.split("");
              if ("_" === A[A.length - 1]) {
                h.text(t.slice(0, -1));
                const e = r("<span />").text("_").addClass("pulsating");
                h.append(e);
              }
              const g = Math.floor(Math.random() * n.length),
                l = r("<span />")
                  .addClass("curtain")
                  .attr("id", c())
                  .css("background-color", n[g]);
              a.push(h), o.push(l), s.append(h), s.append(l), e.append(s);
            }),
            t.ZP.set(a, {
              transformOrigin: "center center -50px",
              backfaceVisibility: "hidden",
              transformStyle: "preserve-3d",
              transformPerspective: 1500,
            }),
            t.ZP.set(o, {
              transformOrigin: "center center -50px",
              backfaceVisibility: "hidden",
              transformStyle: "preserve-3d",
              transformPerspective: 1500,
            }),
            !0 === e.hasClass("do-anim") &&
              (t.ZP.fromTo(
                a,
                { rotationX: "-100" },
                {
                  duration: 2,
                  ease: "power3.inOut",
                  delay: 0.6,
                  rotationX: "0",
                  stagger: 0.15,
                  repeat: 0,
                }
              ),
              t.ZP.fromTo(
                o,
                { rotationX: "-100" },
                {
                  duration: 2.5,
                  ease: "power3.inOut",
                  delay: 0,
                  rotationX: "100",
                  stagger: 0.15,
                  repeat: 0,
                }
              ));
        },
        f = (t, e) => {
          t.each(function (t, i) {
            r(this).classChange((t, i) => {
              i.includes("do-anim") &&
                (e
                  ? setTimeout(() => {
                      d(r(this));
                    }, 1300)
                  : d(r(this)));
            });
          });
        },
        m = (e, i) => {
          e.each(function (e, i) {
            const a = r(this).find(".flow-line").find("path"),
              o = r(this).hasClass("left_frame");
            let n = 1.5,
              s = 0;
            for (let e = 0; e < a.length; e++)
              t.ZP.set(a[e], { drawSVG: "0%" });
            if (r(this).hasClass("do-anim")) {
              if (a.length && !o)
                for (let e = 0; e < a.length; e++)
                  t.ZP.fromTo(
                    a[e],
                    { drawSVG: "0%" },
                    {
                      duration: n,
                      drawSVG: "100%",
                      ease: "none.none",
                      delay: s,
                    }
                  ),
                    (s += n);
              a.length &&
                o &&
                (t.ZP.fromTo(
                  a[0],
                  { drawSVG: "0%" },
                  {
                    duration: 0.5,
                    drawSVG: "100%",
                    ease: "none.none",
                    delay: 0,
                  }
                ),
                t.ZP.fromTo(
                  a[1],
                  { drawSVG: "0%" },
                  {
                    duration: 0.1,
                    drawSVG: "100%",
                    ease: "none.none",
                    delay: 0.5,
                  }
                ),
                t.ZP.fromTo(
                  a[2],
                  { drawSVG: "0%" },
                  {
                    duration: 0.3,
                    drawSVG: "100%",
                    ease: "none.none",
                    delay: 0.6,
                  }
                ),
                t.ZP.fromTo(
                  a[3],
                  { drawSVG: "0% 0%" },
                  {
                    duration: 0.1,
                    drawSVG: "0% 100%",
                    ease: "none.none",
                    delay: 0.9,
                  }
                ),
                t.ZP.fromTo(
                  a[4],
                  { drawSVG: "0% 0%" },
                  {
                    duration: 0.5,
                    drawSVG: "0% 100%",
                    ease: "none.none",
                    delay: 1,
                  }
                ));
            }
            r(this).classChange((e, i) => {
              if (i.includes("do-anim") || "do-anim" === i) {
                if (a.length && !o)
                  for (let e = 0; e < a.length; e++)
                    t.ZP.fromTo(
                      a[e],
                      { drawSVG: "0%" },
                      {
                        duration: n,
                        drawSVG: "100%",
                        ease: "none.none",
                        delay: s,
                      }
                    ),
                      (s += n);
                a.length &&
                  o &&
                  (t.ZP.fromTo(
                    a[0],
                    { drawSVG: "0%" },
                    {
                      duration: 0.5,
                      drawSVG: "100%",
                      ease: "none.none",
                      delay: 0,
                    }
                  ),
                  t.ZP.fromTo(
                    a[1],
                    { drawSVG: "0%" },
                    {
                      duration: 0.1,
                      drawSVG: "100%",
                      ease: "none.none",
                      delay: 0.5,
                    }
                  ),
                  t.ZP.fromTo(
                    a[2],
                    { drawSVG: "0%" },
                    {
                      duration: 0.3,
                      drawSVG: "100%",
                      ease: "none.none",
                      delay: 0.6,
                    }
                  ),
                  t.ZP.fromTo(
                    a[3],
                    { drawSVG: "0% 0%" },
                    {
                      duration: 0.1,
                      drawSVG: "0% 100%",
                      ease: "none.none",
                      delay: 0.9,
                    }
                  ),
                  t.ZP.fromTo(
                    a[4],
                    { drawSVG: "0% 0%" },
                    {
                      duration: 0.5,
                      drawSVG: "0% 100%",
                      ease: "none.none",
                      delay: 1,
                    }
                  ));
              }
            });
          });
        },
        I = () => {
          f(r("h1")), f(r("h2")), f(r("h3"));
        },
        _ = (t, e, i) => {
          t.hasClass("do-anim") ||
            ((r(window).scrollTop() + r(window).height()) * e >
              t.offset().top &&
              (i
                ? setTimeout(() => {
                    t.addClass("do-anim");
                  }, i)
                : t.addClass("do-anim")),
            r(window).on("scroll", function () {
              const a = r(window).scrollTop(),
                o = r(window).height(),
                n = t.offset();
              (a + o) * e > n.top &&
                (i
                  ? setTimeout(() => {
                      t.addClass("do-anim");
                    }, i)
                  : t.addClass("do-anim"));
            }));
        },
        B = () => {
          r("section").each(function (t, e) {
            r(this).hasClass("hero") || "home-hero" === r(this).attr("id")
              ? _(r(this), 0.9, 1200)
              : _(r(this), 0.9);
          }),
            r(".yps_cases_cat_showcase").each(function (t, e) {
              _(r(this), 0.9);
            }),
            r(".hero").each(function (t, e) {
              _(r(this), 0.9);
            }),
            r(".ctheme_team_showcase").each(function (t, e) {
              _(r(this), 0.9);
            }),
            r(".right_line").each(function (t, e) {
              _(r(this), 0.9);
            }),
            r(".case_block").each(function (t, e) {
              _(r(this), 0.9);
            }),
            r("h1").each(function (t, e) {
              _(r(this), 1, 1e3);
            }),
            r("h2").each(function (t, e) {
              _(r(this), 1);
            }),
            r("h3").each(function (t, e) {
              _(r(this), 1);
            }),
            r("p").each(function (t, e) {
              _(r(this), 1);
            }),
            r(".connecting_line-centered").each(function (t, e) {
              _(r(this), 1);
            }),
            r(".connecting_line-top").each(function (t, e) {
              _(r(this), 1);
            });
        },
        v = () => {
          r(".cth_lang_switcher").each(function (t, e) {
            const i = r(this),
              a = i.find(".selector"),
              o = a.find(".container"),
              n = a.find("ul").outerHeight();
            r(this)
              .find(".action")
              .on("click", function () {
                i.hasClass("opened")
                  ? (i.removeClass("opened"), o.css("height", "0"))
                  : (i.addClass("opened"), o.css("height", n + "px"));
              });
          });
        },
        C = () => {
          const e = r("body");
          e.hasClass("home") &&
            e.find("section").each(function (e, i) {
              if (0 === e) {
                const e =
                  '<div class="flow-line">\n\n                    <svg id="hl_1" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none" x="0px" y="0px" width="50px" height="3px" viewBox="0 0 50 3">\n                        <defs>\n                        <linearGradient id="Gradient_1" gradientUnits="userSpaceOnUse" x1="0.04999999999999716" y1="0.95" x2="49.95" y2="0.95" spreadMethod="pad">\n                            <stop  offset="0%" stop-color="#FFFFFF"/>\n                            <stop  offset="100%" stop-color="#00BCD4"/>\n                        </linearGradient>\n                        </defs><path stroke="url(#Gradient_1)" stroke-width="3" stroke-linejoin="round" stroke-linecap="square" fill="none" d="\n                        M 1.05 0.95\n                        L 49.15 0.95"/>\n                    </svg>\n                    <svg id="hl_2" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none" x="0px" y="0px" width="42px" height="42px" viewBox="1 -1 42 42">\n                        <path stroke="#00BCD4" stroke-width="3" stroke-linejoin="round" stroke-linecap="square" fill="none" d="\n                        M 1 1.1\n                        L 11.05 1.1\n                        Q 23.45 1.1 32.25 9.9 41.05 18.7 41.05 31.1\n                        L 41.05 41"/>\n                    </svg>\n                    <svg id="hl_3" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none" x="0px" y="0px" width="3px" height="50px" viewBox="0 0 3 50">\n                        <path stroke="#00BCD4" stroke-width="3" stroke-linejoin="round" stroke-linecap="square" fill="none" d="\n                        M 1.4 1.7\n                        L 1.4 48.55"/>\n                    </svg>\n                    </div>';
                i.insertAdjacentHTML("beforeend", e),
                  t.ZP.fromTo(
                    r("#hl_1 > path"),
                    { drawSVG: "0%" },
                    {
                      drawSVG: "100%",
                      duration: 1,
                      delay: 1,
                      ease: "none.none",
                    }
                  ),
                  t.ZP.fromTo(
                    r("#hl_2 > path"),
                    { drawSVG: "0%" },
                    {
                      drawSVG: "100%",
                      duration: 0.2,
                      delay: 1.9,
                      ease: "none.none",
                    }
                  ),
                  t.ZP.fromTo(
                    r("#hl_3 > path"),
                    { drawSVG: "0%" },
                    {
                      drawSVG: "100%",
                      duration: 1,
                      delay: 2.1,
                      ease: "none.none",
                    }
                  );
              }
            });
        },
        b = () => {
          const t = ["#00BCD4", "#F97E44", "#E64054"];
          let e = 0;
          r("strong").each((i, a) => {
            i % 3 == 0 && (e = 0), (a.style.backgroundColor = t[e]), e++;
          });
        },
        T = () => {
          r(".services_menu")
            .find("li")
            .each(function (e, i) {
              ((e) => {
                const i = r(".services_menu").find(".menu-pointer"),
                  a = i.offset();
                e.on("click", function () {
                  if (e.hasClass("current")) return;
                  const o = e.attr("id"),
                    n = e.offset(),
                    s = e.height(),
                    h = o.split("_")[1],
                    A = r(".services_slides");
                  r(".services_menu li").removeClass("current"),
                    e.addClass("current"),
                    t.ZP.to(i, {
                      y: "+" + (n.top - a.top + s / 2) + "px",
                      ease: "elastic.out(1, 0.3)",
                      duration: 2,
                    }),
                    A.find(".current").addClass("hide").removeClass("current"),
                    A.find(`#service_slide_${h}`).addClass("current"),
                    setTimeout(() => {
                      A.find(".hide").removeClass("hide");
                    }, 1e3);
                });
              })(r(this));
            });
        },
        M = () => {
          const t = r(".services_slides");
          let e = 300;
          t.find(".service").each(function () {
            const t = r(this).outerHeight();
            t > e && (e = t);
          }),
            t.css("height", e + "px"),
            r(".yps_services_showcase").length && T();
        },
        E = () => {
          const t = $(".draggable"),
            e = $("#cursor_follower"),
            i = $("#cursor");
          t.on("mouseover", function (t) {
            e.addClass("dragger"), i.addClass("dragger");
          }),
            t.on("mouseleave", function (t) {
              e.removeClass("dragger"), i.removeClass("dragger");
            });
        },
        Q = (e, i) => {
          i = i || 0;
          let a = $("#cursor"),
            o = $("#cursor_follower"),
            n = e,
            s = 0;
          t.ZP.to(a, 0.4, { scale: 1, autoAlpha: 1 }),
            t.ZP.to(o, 0.6, { scale: 1, autoAlpha: 1 }),
            n.on("mousemove", function (e) {
              a.hasClass("deactive") &&
                (a.removeClass("deactive"),
                o.removeClass("deactive"),
                t.ZP.to(a, 0.4, { scale: 1, autoAlpha: 1 }),
                t.ZP.to(o, 0.4, { scale: 1, autoAlpha: 1 })),
                t.ZP.to(a, 0.3, {
                  css: { left: e.pageX - 15, top: e.pageY - 15 },
                }),
                t.ZP.to(o, 0.5, {
                  css: { left: e.pageX - 10, top: e.pageY - 10 },
                }),
                (s =
                  e.pageX < 100
                    ? e.pageX + a.width() + 20
                    : e.pageX - a.width());
            });
        };
    })();
})();
