export type Category = 'software' | 'marketing';

export interface Project {
  id: string;
  category: Category;
  results?: string;
  deliverables?: string[];
  title: string;
  date: string;
  role: string;
  color: string;
  tags?: readonly string[];
  description: string;
  media?: { type: 'video' | 'image'; url: string };
  liveUrl?: string;
  repoUrl?: string;
}

export interface Experience {
  id: string;
  category: Category;
  title: string;
  company: string;
  date: string;
  location: string;
  color: string;
  description: string;
  details: readonly string[];
  gallery?: readonly string[];
  video?: string;
}

export interface CreativeAsset {
  id: string;
  title: string;
  category: 'Graphic' | 'Brief' | 'Video Edit';
  imageUrl: string;
}

export const name = "Shaheen Al Adwani";
export const pronouns = "he/him";
export const shortBio = "Full-stack Software Engineer & Creator Partnerships Specialist";

// export const introParagraph = "I'm a Product Engineer and Marketing Specialist based in Davao, Philippines. I bridge the gap between technical infrastructure and high-scale digital advertising. With four years of experience in the creator economy, I've managed B2B relationships and scaled creator contracts that delivered $355K in transaction volume. Currently pursuing a B.S. in Computer Science at Ateneo de Davao University, I focus on building the systems that drive measurable user acquisition.";

export const softwareSummary = "Computer Science graduate at Ateneo de Davao. I build full-stack applications with a focus on performance and real-world utility. My background in marketing taught me to build systems that don't just work, but actually drive business results.";

export const marketingSummary = "Growth Marketer with 4 years of experience. I've managed $355K in transaction volume and structured 20+ high-performance creator deals. I combine data-driven strategy with technical automation to scale influencer networks and businesses.";

export const contact = {
  email: "contact.shaheenaladwani@gmail.com",
  phone: "+63 917 786 5315",
  location: "Davao, Philippines",
  linkedin: "linkedin.com/in/aladwani",
  profileImage: "/og-image.jpg",
};

export const softwareSkills = [
  'Astra (Framework)',
  'Flutter & Dart (Advanced)',
  'Python (Data Pipelines)',
  'JavaScript & TypeScript',
  'RAG Pipelines & LLM Integration',
  'REST API Integration',
  'Supabase & Firebase',
  'SaaS Product Development',
  'Systems Analysis & Design',
  'Agile & Scrum Methodology',
  'Git & Version Control'
];

export const marketingSkills = [
  'Influencer & KOL Marketing',
  'Creator Lifecycle Management',
  'Performance Marketing (ROAS)',
  'Hybrid CPA & Rev-Share Models',
  'Contract Negotiation',
  'Growth Strategy & UA',
  'SEA & Philippine Market Expertise',
  'Content Strategy & Briefing',
  'Community Building',
  'Campaign Analytics'
];

export const toolStack = {
  technical: ['VS Code', 'Cursor', 'Postman', 'Android Studio', 'Firebase', 'Docker', 'Wordpress', 'Bubble.IO', 'Wix','GoHighLevel'],
  marketing: ['Meta Business Suite', 'Figma', 'Canva', 'Notion', 'Airtable', 'HubSpot', 'Google Workspace'],
  ai: ['ChatGPT', 'Claude', 'Gemini', 'Grok', 'n8n', 'Prompt Engineering']
};

export const projects: Project[] = [
  {
    id: 'campaign-esports-2024',
    category: 'marketing', 
    title: 'Esports World Cup: PH Creator Activation',
    date: 'July 2024',
    role: 'Lead Campaign Strategist',
    color: '#f97316', 
    results: '12% FTD Conversion | 3.2M Reach',
    deliverables: [
      'Influencer Briefing', 
      'Creative Direction', 
      'Media Buying', 
      'Performance Tracking'
    ], 
    description: 'Engineered a multi-channel activation for the Esports World Cup targeting the Philippine market. I managed a roster of 15 tier-2 creators, providing them with data-backed content briefs that prioritized user registration. By implementing a hybrid CPA model, we reduced the Customer Acquisition Cost (CAC) by 22% compared to previous flat-fee campaigns.',
    media: {
      type: 'image', // or 'video'
      url: '/projects/ewc-campaign.jpg', // Path to your image in public/projects/
    },
  },
  {
    id: 'proj-gymeasy',
    category: 'software',
    title: 'GymEasy: A Full-Service Gym Management Software',
    date: '2025-',
    role: 'Back-End Developer & Project Manager',
    color: '#3b82f6',
    tags: ['Next.JS', 'Spring Boot', 'Desktop/Mobile'],
    description: 'A Full-Service Gym Management Software that provides MSME Gym Owners complete control of the business without breaking the bank',
    media: {
      type: 'image' as const,
      url: '/gymeasy/attend1.png',
    },
    liveUrl: 'https://staging.gymeasy.app',
    repoUrl: '',
  },
  {
    id: 'proj-agripinoy',
    category: 'software',
    title: 'Agri-Pinoy: RAG-Powered Philippine Agri-Chatbot',
    date: 'Feb 2026',
    role: 'Lead Front-End Developer',
    color: '#3b82f6',
    tags: ['Flutter', 'Dart', 'Mobile'],
    description: 'A Flutter-based AI chatbot that helps Filipino farmers with practical advice on growing common Pinoy crops. Built with a RAG (Retrieval-Augmented Generation) backend, real-time evaluation pipeline, and Supabase data logging.',
    media: {
      type: 'image' as const,
      url: '/agripinoy/desk.png',
    },
    liveUrl: 'https://agri-pinoy-web.netlify.app/',
    repoUrl: 'https://github.com/shaheenNawaf/chatbot_ui_agribot',
  },
  {
    id: 'proj-staysafe',
    category: 'software',
    title: 'SafeStay: AirBNB Clone via Flutter',
    date: 'Dec 2024',
    role: 'Full Stack Developer',
    color: '#ec4899',
    tags: ['Flutter', 'UI/UX', 'Full-Stack'],
    description: 'A Full end-to-end clone of AirBNB done natively via Flutter.',
    media: {
      type: 'image' as const,
      url: '/staysafe/home.png',
    },
    liveUrl: 'https://safe-stay-exer.netlify.app/',
    repoUrl: 'https://github.com/shaheenNawaf/StaySafe',
  },
  {
    id: 'proj-JCSD',
    category: 'software',
    title: 'JCSD: A Full-Service Booking Management System',
    date: 'Aug 2024',
    role: 'Full Stack Developer',
    color: '#ec4899',
    tags: ['Flutter', 'UI/UX', 'Full-Stack'],
    description: 'A Full-service booking management application completely done via Flutter',
    media: {
      type: 'image' as const,
      url: '/jcsd/dash.png',
    },
    liveUrl: '',
    repoUrl: 'https://github.com/shaheenNawaf/JCSD_Flutter',
  },
]

export const experiences: Experience[] = [
  {
    id: 'exp-yohoho-lead',
    category: 'marketing',
    title: 'Philippines Team Lead',
    company: 'Yohoho.bet',
    date: 'June 2025 - Oct 2025',
    location: 'Remote',
    color: '#f97316',
    description: 'Kept running costs down while ensuring a strict-4:1 ROAS.',
    details: [
      'Built a Telegram community from 0 to 1,000 active members in 2 weeks as a retention channel.',
      'Navigated CICC regulatory changes by pivoting strategy from acquisition to community-building.',
      'Structured macro-influencer contracts with milestone-based payments, maintaining a 4:1 ROAS. (Pictured below)',
    ],
    gallery: [
      '/yohoho/initial-contracts.jpg',
    ], 
    video: '',
  },
  {
    id: 'exp-yohoho-influ',
    category: 'marketing',
    title: 'Influencer Specialist',
    company: 'Yohoho.bet',
    date: 'June 2025 - Oct 2025',
    location: 'Remote',
    color: '#B5F916',
    description: 'Directed rapid-scale influencer recruitment and social expansion, driving $355K in bet volume.',
    details: [
      'Applied a strict kill-or-scale framework to audit the existing portfolio, cutting underperforming flat-fee partners and restructuring 23 partnerships (8M+ followers) into hybrid CPA deals. This reallocated spend to pure conversion-focused creators, capping costs at 25% of revenue per partner and sustaining a validated 4:1 ROAS.',
      'Drove a record $133K transaction volume and $46K deposit volume in a single month (September 2025) by launching a Partner Referral Program, scaling the network to 10+ CPA-only micro-influencers to drive down overall Customer Acquisition Cost (CAC).',
      'Engineered an automated onboarding pipeline and centralized document tracking system using templated workflows, cutting administrative bottlenecks and reducing partner activation time from 14 days to 3 days (a 78% reduction).',
    ],
    gallery: [
      '/yohoho/yohoho-1.png'
    ], 
    video: '',
  },
  {
    id: 'exp-rivalry-partnerships',
    category: 'marketing',
    title: 'Partnerships & Influencer Specialist',
    company: 'Rivalry.com',
    date: 'Sept 2021 - July 2024',
    location: 'Remote',
    color: '#ef4444',
    description: 'Managed end-to-end lifecycle influencer marketing campaigns and management for 10 VIP influencers (total 37M+ followers) bringing in 10M USD in Monthly Deposits.',
    details: [
      'Spearheaded the B2B pitch for the Tier One Entertainment deal, birthing the "Blacklist Rivalry" Dota 2 team.',
      'Achieved 40% growth in affiliate-driven revenue and 15-20% QoQ growth in FTDs.',
      'Coordinated co-branded activations with agencies like CBZN, achieving 60-70% conversion rates.',
      'Crafted 40+ Content Briefs and Managed day-to-day executions of creator campaigns which covers postings, video content, livestreams, and client-produced content (e.g. PighaTI - our DOTA TI Companion series last 2022; linked below).',
    ],
    gallery: [
      '/rivalry/rivalry-tribe.jpg',
      '/rivalry/pindabali.jpg',
      '/rivalry/bali-1.jpg',
    ], 
    video: 
        'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D483447207175593&show_text=0',
  },
  {
    id: 'exp-rivalry-community',
    category: 'marketing',
    title: 'Community Marketing Specialist',
    company: 'Rivalry.com',
    date: 'June 2023 - July 2024',
    location: 'Remote',
    color: '#3b82f6',
    description: 'Scaled direct-to-consumer marketing communities through Facebook and Viber',
    details: [
      'Rebuilt a 12,000-member Facebook community with 30-40% active engagement after platform strikes.',
      'Produced weekly tournament shows that pushed betting activity from 2% to 20% during peak LCK/Worlds events.',
      'Launched "Bring Me" activations that accelerated KYC completion through recurring content formats.',
    ],
    gallery: [
      '/rivalry/new-tribe.jpg',
      '/rivalry/viber.jpg',
      '/rivalry/bbc.jpg',
      '/rivalry/nsns.jpg',
      '/rivalry/ttkover.jpg',
    ], 
    video: 'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fkuyanicwxc%2Fvideos%2F1425324814659531&show_text=0',
  },
  {
    id: 'exp-rivalry-campaigns',
    category: 'marketing',
    title: 'Campaign and Affiliates Specialist',
    company: 'Rivalry.com',
    date: 'Sept 2021 - Aug 2022',
    location: 'Remote',
    color: '#643BF6',
    description: "Created a proper lead-generating and end-to-end management pipeline for Rivalry's initial PH Affiliate Network.",
    details: [
      "Built Rivalry's initial Philippine affiliate and micro-influencer network from scratch (20+ partners across Valorant, Dota 2, CS2, and League of Legends), establishing the early-stage user acquisition foundation that subsequent campaigns were layered on top of.",
      'Introduced a CAC-obsessed, performance-based spend allocation model against First-Time Depositor (FTD) and revenue data from the outset, setting the data-first marketing culture that contributed to 15-20% QoQ FTD growth.',
      'Created and ran Rivalry Philippines initial campaigns (e.g. giveaways, local tournaments, livestream events) that bolstered the brands visibility across key influencers and micro-influencers communities. (Pictured below)',
    ],
    gallery: [
      '/rivalry/initial-edits.jpg',
      '/rivalry/initial-campaign.jpg',
      '/rivalry/initial-campaign-2.jpg',
      '/rivalry/initial-affiliates.jpg',
    ], 
    video: '',
  },
]

export const creativeGallery: CreativeAsset[] = [
  {
    id: 'gfx-1',
    title: 'Rivalry Bali Major Campaign Overlay',
    category: 'Graphic',
    imageUrl: '/rivalry/bali-1.jpg',
  },
  {
    id: 'gfx-2',
    title: 'Yohoho Influencer Onboarding Flow',
    category: 'Brief',
    imageUrl: '/yohoho/yohoho-1.png',
  },
];