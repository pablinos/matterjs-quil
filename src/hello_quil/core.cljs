(ns hello-quil.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [cljsjs.matter]
            ))

(enable-console-print!)

;;Physics stuff
(defn createRectangleBody [x y w h options]
  (let [bodies js/Matter.Bodies
        box (.rectangle bodies x y w h (clj->js options))
        ]
    {:w w :h h :box box})
)

(defn addBoxToWorld! [engine box]
  (.add js/Matter.World (.-world engine) (clj->js [(:box box)]))  
  box
)

(defn spawnBox [engine x y w h]
  (let [boxA (createRectangleBody x y w h {:friction 1 :restitution 0.5 })]
    (addBoxToWorld! engine boxA)
    )
)

;;Quil stuff
(defn setup []
  ; Set frame rate to 30 frames per second.
  (q/frame-rate 60)
  ; Set color mode to HSB (HSV) instead of default RGB.
  (q/color-mode :hsb)
  (q/rect-mode :center)

  (let [ground (createRectangleBody 250 450 500 100 {:isStatic true})
        engine (.create js/Matter.Engine)
        ]
   (addBoxToWorld! engine ground)
  {:engine engine
   :boxes [ground]
   :millis (q/millis)
   :deltaO -1
   }  
    )
  )


(defn update-state [{:keys [engine boxes millis deltaO] :as state} ]
  ; Update sketch state by changing circle color and position.
  (let [curMillis (q/millis)
        deltaT (if (< deltaO 0) 16 (- curMillis millis))
        correction (if (< deltaO 0) 0 (/ deltaT deltaO))]
    ;;(.log js/console (.-timestamp (.-timing engine)))

    ;;Can't get this working! Makes the simulation run stupid fast using a varying delta
    ;;(.update js/Matter.Engine engine deltaT correction)
    (.update js/Matter.Engine engine deltaT correction)
    {:engine engine
     :boxes boxes
     :millis (q/millis)
     :deltaO deltaT
     })
  )

(defn drawBox [{:keys [w h box]}]
  (let [position (.-position box)
        angle (.-angle box)
        ]
    (q/push-matrix)
    (q/translate (.-x position) (.-y position))
    (q/rotate angle)
    (q/rect 0 0 w h)
    (q/pop-matrix)
    )
  )

(defn mouse-dragged [{:keys [boxes engine] :as state} {:keys [x y] :as event}]
  (let [newBox (spawnBox engine x y (q/random 10 40) (q/random 10 40))
        newState (update state :boxes #(conj % newBox))
        ]
    newState
    )
)


(defn draw-state [{:keys [engine boxes millis] :as state}]
                                        ; Clear the sketch by filling it with light-grey color.
  (q/background 240)
                                        ; Set circle color.
  (q/fill 32 255 255)

  (doseq [boxA boxes] 
    (drawBox boxA))
  )

(q/defsketch hello-quil
  :host "hello-quil"
  :size [500 500]
  ; setup function called only once, during sketch initialization.
  :setup setup
  ; update-state is called on each iteration before draw-state.
  :update update-state
  :draw draw-state
  :mouse-dragged mouse-dragged
  ; This sketch uses functional-mode middleware.
  ; Check quil wiki for more info about middlewares and particularly
  ; fun-mode.
  :middleware [m/fun-mode])
