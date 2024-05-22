import {
  BatteryCharging,
  BotMessageSquare,
  Fingerprint,
  GlobeLock,
  PlugZap,
  ShieldHalf,
} from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Nouveautés", href: "#" },
  { label: "Nos Activités", href: "#" },
  { label: "Prix", href: "#" },
  { label: "Avis", href: "#" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Solutions Stellaires",
    image: user1,
    text: "Je suis extrêmement satisfait des services fournis. L'équipe a été réactive, professionnelle et a obtenu des résultats au-delà de mes attentes.",
  },
  {
    user: "Jane Smith",
    company: "Technologies de l'Horizon Bleu",
    image: user2,
    text: "Je suis extrêmement satisfait des services fournis. L'équipe a été réactive, professionnelle et a obtenu des résultats au-delà de mes attentes.",
  },
  {
    user: "David Johnson",
    company: "Innovations Quantiques",
    image: user3,
    text: "Je suis extrêmement satisfait des services fournis. L'équipe a été réactive, professionnelle et a obtenu des résultats au-delà de mes attentes.",
  },
  {
    user: "Ronee Brown",
    company: "Dynamique de Fusion",
    image: user4,
    text: "Je suis extrêmement satisfait des services fournis. L'équipe a été réactive, professionnelle et a obtenu des résultats au-delà de mes attentes.",
  },
  {
    user: "Michael Wilson",
    company: "Créations Visionnaires",
    image: user5,
    text: "Je suis extrêmement satisfait des services fournis. L'équipe a été réactive, professionnelle et a obtenu des résultats au-delà de mes attentes.",
  },
  {
    user: "Emily Davis",
    company: "Systèmes de Synergie",
    image: user6,
    text: "Je suis extrêmement satisfait des services fournis. L'équipe a été réactive, professionnelle et a obtenu des résultats au-delà de mes attentes.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Interface drag and drop",
    description:
      "Concevez et organisez facilement vos environnements de réalité virtuelle grâce à une interface conviviale de drag and drop.",
  },
  {
    icon: <Fingerprint />,
    text: "Compatibilité multiplateforme",
    description:
      "Développez des applications de réalité virtuelle qui s'exécutent sans problème sur plusieurs plateformes, y compris les appareils mobiles, les ordinateurs de bureau et les casques de réalité virtuelle.",
  },
  {
    icon: <ShieldHalf />,
    text: "Modèles intégrés",
    description:
      "Lancez rapidement vos projets de réalité virtuelle avec une variété de modèles intégrés pour différents types d'applications et d'environnements.",
  },
  {
    icon: <BatteryCharging />,
    text: "Aperçu en temps réel",
    description:
      "Visualisez votre application de réalité virtuelle en temps réel pendant que vous apportez des modifications, permettant des itérations et des ajustements rapides.",
  },
  {
    icon: <PlugZap />,
    text: "Outils de collaboration",
    description:
      "Travaillez en collaboration avec votre équipe en temps réel sur des projets de réalité virtuelle, facilitant la collaboration et le partage d'idées.",
  },
  {
    icon: <GlobeLock />,
    text: "Tableau de bord d'analyse",
    description:
      "Obtenez des informations précieuses sur les interactions et le comportement des utilisateurs au sein de vos applications de réalité virtuelle grâce à un tableau de bord d'analyse intégré.",
  },
];

export const checklistItems = [
  {
    title: "Fusion de code simplifiée",
    description:
      "Suivez les performances de vos applications de réalité virtuelle et obtenez des informations sur le comportement des utilisateurs.",
  },
  {
    title: "Révision de code sans souci",
    description:
      "Suivez les performances de vos applications de réalité virtuelle et obtenez des informations sur le comportement des utilisateurs.",
  },
  {
    title: "Assistance IA pour réduire le temps",
    description:
      "Suivez les performances de vos applications de réalité virtuelle et obtenez des informations sur le comportement des utilisateurs.",
  },
  {
    title: "Partagez le travail en quelques minutes",
    description:
      "Suivez les performances de vos applications de réalité virtuelle et obtenez des informations sur le comportement des utilisateurs.",
  },
];

export const pricingOptions = [
  {
    title: "Gratuit",
    price: "0€",
    features: [
      "Partage privé de tableau",
      "Stockage de 5 Go",
      "Analytique Web",
      "Mode privé",
    ],
  },
  {
    title: "Pro",
    price: "10€",
    features: [
      "Partage privé de tableau",
      "Stockage de 10 Go",
      "Analytique Web (Avancé)",
      "Mode privé",
    ],
  },
  {
    title: "Entreprise",
    price: "200€",
    features: [
      "Partage privé de tableau",
      "Stockage illimité",
      "Réseau haute performance",
      "Mode privé",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Premiers pas" },
  { href: "#", text: "Documentations" },
  { href: "#", text: "Tutoriels" },
  { href: "#", text: "Référence API" },
  { href: "#", text: "Forums" },
];

export const platformLinks = [
  { href: "#", text: "Nouveautés" },
  { href: "#", text: "Équipement compatible" },
  { href: "#", text: "Configuration requise" },
  { href: "#", text: "Téléchargements" },
  { href: "#", text: "Notes de version" },
];

export const communityLinks = [
  { href: "#", text: "Événements" },
  { href: "#", text: "Rencontres" },
  { href: "#", text: "Conférences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Emplois" },
];
