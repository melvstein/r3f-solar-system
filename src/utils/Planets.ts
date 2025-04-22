const planets = [
    {
      name: "Mercury",
      radius: 0.5,
      distance: 10,
      speed: 0.017,
      ring: null,
      moons: [],
    },
    {
      name: "Venus",
      radius: 0.9,
      distance: 18,
      speed: 0.012,
      ring: null,
      moons: [],
    },
    {
      name: "Earth",
      radius: 1,
      distance: 26,
      speed: 0.01,
      ring: null,
      moons: [
        {
          name: "Moon",
          radius: 0.27,
          distance: 3,
          speed: 0.03,
        },
      ],
    },
    {
      name: "Mars",
      radius: 0.8,
      distance: 34,
      speed: 0.008,
      ring: null,
      moons: [
        {
          name: "Phobos",
          radius: 0.1,
          distance: 2,
          speed: 0.04,
        },
        {
          name: "Deimos",
          radius: 0.08,
          distance: 3,
          speed: 0.02,
        },
      ],
    },
    {
      name: "Jupiter",
      radius: 2.5,
      distance: 50,
      speed: 0.006,
      ring: {
        color: 0xaaaaaa, // light gray
        innerRadius: 2.6,
        outerRadius: 2.8,
        tilt: Math.PI / 2 - 0.054, // ~3.1°
        opacity: 0.2,
      },
      moons: [
        {
          name: "Io",
          radius: 0.2,
          distance: 2.5,
          speed: 0.04,
        },
        {
          name: "Europa",
          radius: 0.18,
          distance: 3,
          speed: 0.035,
        },
        {
          name: "Ganymede",
          radius: 0.3,
          distance: 3.5,
          speed: 0.03,
        },
        {
          name: "Callisto",
          radius: 0.25,
          distance: 4,
          speed: 0.025,
        },
      ],
    },
    {
      name: "Saturn",
      radius: 2,
      distance: 65,
      speed: 0.005,
      ring: {
        color: 0xb1976b,
        innerRadius: 2.2,
        outerRadius: 3.5,
        tilt: Math.PI / 2 - 0.466, // ~26.7°
        opacity: 0.6,
      },
      moons: [
        {
          name: "Titan",
          radius: 0.25,
          distance: 3.5,
          speed: 0.025,
        },
        {
          name: "Enceladus",
          radius: 0.1,
          distance: 2.8,
          speed: 0.03,
        },
      ],
    },
    {
      name: "Uranus",
      radius: 1.5,
      distance: 80,
      speed: 0.003,
      ring: {
        color: 0xb5e0ff, // icy blue
        innerRadius: 1.6,
        outerRadius: 1.8,
        tilt: -Math.PI / 2, // ~97.8°, basically sideways
        opacity: 0.15,
      },
      moons: [
        {
          name: "Miranda",
          radius: 0.1,
          distance: 2.5,
          speed: 0.035,
        },
        {
          name: "Ariel",
          radius: 0.12,
          distance: 3,
          speed: 0.03,
        },
      ],
    },
    {
      name: "Neptune",
      radius: 1.4,
      distance: 95,
      speed: 0.002,
      ring: {
        color: 0x8888ff, // soft bluish-purple
        innerRadius: 1.5,
        outerRadius: 1.7,
        tilt: Math.PI / 2 - 0.494, // ~28.3°
        opacity: 0.1,
      },
      moons: [
        {
          name: "Triton",
          radius: 0.2,
          distance: 3.5,
          speed: 0.03,
        },
      ],
    },
];

export default planets;