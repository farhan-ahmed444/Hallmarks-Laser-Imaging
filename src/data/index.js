import { HiOutlineSparkles, HiOutlineTag, HiOutlineShieldCheck, HiOutlineClipboardList, HiOutlineCog, HiOutlineCube } from 'react-icons/hi';

export const servicesData = [
  {
    id: 'laser-engraving',
    title: 'Laser Marking & Engraving',
    description: 'High-precision laser marking and engraving solutions for industrial applications. Permanent, high-contrast marks on metals, plastics, and composites.',
    icon: HiOutlineSparkles,
    features: ['Permanent marking', 'High contrast', 'Non-contact process', 'Micro-precision'],
    materials: ['Steel', 'Aluminum', 'Titanium', 'Plastic', 'Ceramics', 'Composites'],
  },
  {
    id: 'nameplates',
    title: 'Nameplates & Data Plates',
    description: 'Custom engineered nameplates and data plates built to your exact specifications. ANSI, ISO, and military standard compliant.',
    icon: HiOutlineTag,
    features: ['Custom specifications', 'Multiple materials', 'Weather resistant', 'Bar code integration'],
    materials: ['Stainless Steel', 'Brass', 'Aluminum', 'Polyester', 'Lamicoid'],
  },
  {
    id: 'asset-tags',
    title: 'Asset Tags & Barcode Labels',
    description: 'Durable asset tracking solutions with integrated barcode, QR code, and RFID capabilities for comprehensive inventory management.',
    icon: HiOutlineShieldCheck,
    features: ['Barcode integration', 'RFID ready', 'Durable construction', 'Custom sequences'],
    materials: ['Metal', 'Polyester', 'Vinyl', 'Tamper-proof', 'High-temp'],
  },
  {
    id: 'industrial-labels',
    title: 'Industrial Signage',
    description: 'Heavy-duty industrial signage and identification systems designed for harsh environments, extreme temperatures, and demanding conditions.',
    icon: HiOutlineClipboardList,
    features: ['Heavy duty', 'Weatherproof', 'UV resistant', 'Chemical resistant'],
    materials: ['Aluminum', 'Stainless Steel', 'Polycarbonate', 'Acrylic'],
  },
  {
    id: 'control-panels',
    title: 'Control Panels & Overlays',
    description: 'Precision engineered control panel overlays, membrane switches, and graphic panels with tactile feedback and backlighting options.',
    icon: HiOutlineCog,
    features: ['Tactile feedback', 'Backlight options', 'Custom graphics', 'EMI shielding'],
    materials: ['Polyester', 'Polycarbonate', 'Silicone rubber', 'Metal dome'],
  },
  {
    id: 'custom-manufacturing',
    title: 'Custom Manufacturing Solutions',
    description: 'End-to-end custom manufacturing solutions from concept to production. Engineering support, prototyping, and volume production.',
    icon: HiOutlineCube,
    features: ['Engineering support', 'Rapid prototyping', 'Volume production', 'Quality testing'],
    materials: ['All materials', 'Custom alloys', 'Engineered plastics', 'Composites'],
  },
];

export const productsData = [
  { id: 'metal-nameplates', title: 'Metal Nameplates', category: 'Nameplates', image: 'metal-nameplate.jpg', description: 'Premium metal nameplates laser engraved for permanent identification.' },
  { id: 'asset-tags', title: 'Asset Tags', category: 'Tags', image: 'asset-tag.jpg', description: 'Durable asset tags with barcode and serial number capabilities.' },
  { id: 'barcode-labels', title: 'Barcode Labels', category: 'Labels', image: 'barcode-label.jpg', description: 'Industrial grade barcode labels for tracking and inventory.' },
  { id: 'equipment-labels', title: 'Equipment Labels', category: 'Labels', image: 'equipment-label.jpg', description: 'Heavy-duty equipment labels for harsh industrial environments.' },
  { id: 'control-panels', title: 'Control Panels', category: 'Panels', image: 'control-panel.jpg', description: 'Custom control panel overlays and membrane switches.' },
  { id: 'engraved-components', title: 'Engraved Components', category: 'Nameplates', image: 'engraved-component.jpg', description: 'Precision engraved components for aerospace and defense.' },
];

export const industriesData = [
  { id: 'manufacturing', title: 'Manufacturing', description: 'Comprehensive identification solutions for manufacturing operations, production lines, and inventory management.', image: 'manufacturing.jpg' },
  { id: 'aerospace', title: 'Aerospace', description: 'MIL-SPEC compliant identification for aerospace components, assemblies, and maintenance tracking.', image: 'aerospace.jpg' },
  { id: 'defense', title: 'Defense', description: 'Secure durable marking solutions for defense equipment weapon systems and logistics.', image: 'defense.jpg' },
  { id: 'medical', title: 'Medical', description: 'FDA compliant identification for medical devices instruments and equipment.', image: 'medical.jpg' },
  { id: 'energy', title: 'Energy', description: 'Extreme environment identification solutions for oil gas power and renewable energy.', image: 'energy.jpg' },
  { id: 'commercial-equipment', title: 'Commercial Equipment', description: 'Branding compliance and tracking solutions for commercial equipment manufacturers.', image: 'commercial.jpg' },
];

export const teamData = [
  { name: 'John Hallmark', role: 'CEO & Founder', image: '/team/team-1.jpg', bio: '40+ years in industrial manufacturing and identification solutions.' },
  { name: 'Sarah Mitchell', role: 'VP of Operations', image: '/team/team-2.jpg', bio: 'Operations expert with 20+ years in precision manufacturing.' },
  { name: 'David Chen', role: 'Technical Director', image: '/team/team-3.jpg', bio: 'Laser technology specialist with extensive R&D experience.' },
  { name: 'Maria Rodriguez', role: 'Quality Assurance Manager', image: '/team/team-4.jpg', bio: 'ISO certified quality professional ensuring top-tier standards.' },
];

export const statsData = [
  { value: 40, suffix: '+', label: 'Years Experience' },
  { value: 10000, suffix: '+', label: 'Projects Completed' },
  { value: 100, suffix: '%', label: 'Custom Solutions' },
  { value: 98, suffix: '%', label: 'Client Retention' },
];

export const galleryData = [
  { id: 1, image: '/gallery/gallery-1.jpg', category: 'Laser Marking', title: 'Precision Laser Engraving' },
  { id: 2, image: '/gallery/gallery-2.jpg', category: 'Nameplates', title: 'Industrial Nameplates' },
  { id: 3, image: '/gallery/gallery-3.jpg', category: 'Tags', title: 'Asset Tracking Tags' },
  { id: 4, image: '/gallery/gallery-4.jpg', category: 'Labels', title: 'Barcode Labels' },
  { id: 5, image: '/gallery/gallery-5.jpg', category: 'Signage', title: 'Industrial Signage' },
  { id: 6, image: '/gallery/gallery-6.jpg', category: 'Laser Marking', title: 'Aerospace Components' },
  { id: 7, image: '/gallery/gallery-7.jpg', category: 'Nameplates', title: 'Custom Data Plates' },
  { id: 8, image: '/gallery/gallery-8.jpg', category: 'Tags', title: 'RFID Asset Tags' },
];

export const testimonialsData = [
  { name: 'Robert Kline', company: 'Aerospace Dynamics Corp', image: '/testimonials/client-1.jpg', quote: 'Hallmarks Laser Imaging has been our trusted partner for identification solutions for over 15 years. Their precision and quality are unmatched in the industry.' },
  { name: 'Jennifer Walsh', company: 'Precision Manufacturing Inc', image: '/testimonials/client-2.jpg', quote: 'The level of detail and customization they provide is exceptional. Our asset tracking has improved dramatically since switching to Hallmarks.' },
  { name: 'Michael Torres', company: 'Defense Systems International', image: '/testimonials/client-3.jpg', quote: 'When you need MIL-SPEC compliance and absolute durability, Hallmarks delivers every time. Their laser marking technology is world-class.' },
  { name: 'Lisa Chang', company: 'MedTech Innovations', image: '/testimonials/client-4.jpg', quote: 'FDA compliance is critical for us. Hallmarks understands medical device requirements and delivers consistently perfect results.' },
];

export const capabilitiesData = [
  { title: 'Laser Engraving', description: 'High-precision CO2 and fiber laser engraving systems' },
  { title: 'Fiber Laser Marking', description: 'Deep engraving and high-contrast marking on metals' },
  { title: 'Barcode Systems', description: 'Custom barcode, QR code and data matrix integration' },
  { title: 'Metal Fabrication', description: 'Precision cutting, forming and finishing capabilities' },
  { title: 'Custom Identification', description: 'End-to-end custom identification product manufacturing' },
  { title: 'Industrial Label Production', description: 'High-volume industrial label manufacturing' },
];

export const processSteps = [
  { step: '01', title: 'Consultation', description: 'We discuss your requirements, specifications, and application needs in detail.' },
  { step: '02', title: 'Design & Approval', description: 'Our engineers create detailed designs and samples for your approval.' },
  { step: '03', title: 'Production', description: 'Precision manufacturing using advanced laser technology and quality control.' },
  { step: '04', title: 'Delivery', description: 'Carefully packaged and shipped with full documentation and support.' },
];

export const whyChooseUsData = [
  { title: 'Precision Manufacturing', description: 'Advanced laser systems with micron-level accuracy for every project.' },
  { title: 'Custom Engineering', description: 'Dedicated engineering team creating tailored identification solutions.' },
  { title: 'Durable Materials', description: 'Industrial-grade materials engineered for extreme environments.' },
  { title: 'Fast Lead Times', description: 'Streamlined production processes ensuring rapid turnaround.' },
  { title: 'Quality Assurance', description: 'ISO-compliant quality control at every production stage.' },
  { title: 'Technical Expertise', description: '40+ years of specialized knowledge in identification technology.' },
];

export const trustBarData = [
  { icon: 'precision', label: 'Precision Manufacturing' },
  { icon: 'speed', label: 'Fast Lead Times' },
  { icon: 'custom', label: 'Custom Solutions' },
  { icon: 'durable', label: 'Durable Materials' },
  { icon: 'expertise', label: 'Industry Expertise' },
  { icon: 'quality', label: 'Quality Control' },
];
