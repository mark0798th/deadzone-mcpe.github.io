const infectedData = [
  {
    name: "Infected Civilian",
    image: "images/icons/civilian.png",
    healthregular: "20-35",
    healthsprinter: "10-15",
    speed: "Regular (Slow)/Sprinter (Fast)",
    damage: "3-5 + infection",
    type: "Male/Female",
    overview: "",
    behavior: "",
    summon: ""
  },
  {
    name: "Infected Commander",
    image: "images/icons/woodland.png",
    healthregular: "20-35",
    healthsprinter: "12-17",
    speed: "Regular/Sprinter",
    damage: "3-5 + infection",
    type: "Male",
    behavior: "",
    summon: "",
    biomes: [
      {
        biome: "overworld, overworld_generation",
        clothes: "Woodland",
        image: "images/icons/woodland.png"
      },
      {
        biome: "desert, mesa",
        clothes: "Desert",
        image: "images/icons/desert.png"
      },
      {
        biome: "ice_plains, frozen",
        clothes: "Tundra",
        image: "images/icons/snow.png"
      }
    ]
  },
  {
    name: "Infected Hazmat",
    image: "images/icons/hazmat.png",
    healthregular: "N/A",
    healthsprinter: "N/A",
    speed: "Regular/Sprinter",
    damage: "N/A",
    type: "Male/Female",
    overview: "",
    behavior: "",
    summon: ""
  }
];

export { infectedData };