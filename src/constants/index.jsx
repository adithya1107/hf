import aero from "../assets/subsystem/aero.png"
import avionics from "../assets/subsystem/avionics.png"
import management from "../assets/subsystem/management.png"
import payload from "../assets/subsystem/payload.png"
import propulsion from "../assets/subsystem/propulsion.png"
import structures from "../assets/subsystem/structures.png"


// export const navItems = [
//   { label: "Home", href: "#" },
//   { label: "About", href: "#about" },
//   { label: "Subsystem", href: "#subsystem" },
//   { label: "Projects", href: "#" },
//   { label: "Sponsors", href: "#" },
//   { label: "Team", href: "#" },
//   { label: "Alumni", href: "#" },
//   { label: "Media", href: "#" },
//   { label: "Contact Us", href: "#" },

// ];

export const subsystem=[
  {
    id: "0",
    title: "Aerodynamics",
    text: "The Aerodynamics Subsystem ensures the rocket follows its correct trajectory and achieves optimal efficiency. This involves designing components like fins and the nose cone, and using CFD simulations to analyze aerodynamic forces and stability. Key projects include supersonic simulations, air brakes, and active control surfaces.",
    image: aero,
  },
  {
    id: "1",
    title: "Avionics",
    text: "The Avionics Subsystem designs the rocket’s flight computer and programs sensors to track real-time data. We also develop systems like air brakes and reaction control. Additionally, we’re exploring data compression, video telemetry, and an autonomous antenna tracker for in-flight rocket tracking.",
    image: avionics,
  },
  {
    id: "2",
    title: "Management",
    text: "“The Management Subsystem ensures the smooth operation of the team, overseeing the budget and executing effective sponsorship strategies. We handle procurement of necessary materials, as well as manage the team’s website and social media presence.",
    image: management,
  },
  {
    id: "3",
    title: "Payload",
    text: "“The Payload and Research Subsystem is an interdisciplinary team focused on developing innovative payloads and advancing research in various areas of rocketry and beyond. Our ongoing projects include the radial deployment of payloads, supersonic aerodynamic profiles, CFD optimization using deep learning, and the enhancement of apogee prediction algorithms with machine learning.",
    image: payload,
  },
  {
    id: "4",
    title: "Propulsion",
    text: "The Propulsion Subsystem is dedicated to the development of our rocket engine, with the goal of creating India’s first student-designed Liquid Rocket Engine. Ongoing research includes solid rocket fuel, ignitors, design optimization, thrust vector control, and reaction control system design.",
    image: propulsion,
  },
  {
    id: "5",
    title: "Structures",
    text: "The Structures Subsystem is responsible for designing both the exterior and interior of the rocket. This involves performing composite and structural simulations of the airframe and internal components to ensure stability and safety. Additionally, we are developing a static motor ground testing rig to further validate our designs.",
    image: structures,
  }
]


export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
