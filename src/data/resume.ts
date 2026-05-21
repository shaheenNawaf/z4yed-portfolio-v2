export type Category = 'software' | 'marketing';

export interface Project {
  id: string;
  category: Category;
  results?: string;
  deliverables?: string[];
  gallery?: string[];
  title: string;
  date: string;
  role: string;
  color: string;
  tags?: readonly string[];
  description: string;
  media?: { type: 'video' | 'image'; url: string; thumbnail?: string};
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
export const shortBio = "Full-stack Software Engineer & Digital Growth Marketer";



export const softwareSummary = "Computer Science graduate at Ateneo de Davao. I build full-stack applications with a focus on performance and real-world utility. My background in marketing taught me to build systems that don't just work, but actually drive business results.";

export const marketingSummary = "In 4 months, I took a market's monthly transaction volume from under $4K to $355K. That's the short version. The longer one: 4+ years of growth marketing, 20+ structured creator partnerships, a 4:1 ROAS across every influencer I've onboarded, and a habit of building the systems behind the results — not just running the plays.";

export const contact = {
  email: "contact.shaheenaladwani@gmail.com",
  phone: "+63 917 786 5315",
  location: "Davao, Philippines",
  linkedin: "linkedin.com/in/aladwani",
  profileImage: "/og-image.jpg",
};

export const softwareSkills = [
  'Java & Spring Boot (Back-end)',
  'JavaScript & TypeScript',
  'Next.js (Web Framework)',
  'Flutter & Dart (Mobile Dev)',
  'PostgreSQL & Supabase (Databases)',
  'AWS & Docker (Cloud & DevOps)',
  'Bubble.io (No-Code Development)',
  'Wordpress and PHP (Customized Websites)',
  'Agile/Scrum (Scrum Master)',
  'Cisco Networking (CCNA & CCSA)',
  'Figma (UI/UX Design)',
  'Python (Data Pipelines)',
  'Astro (Framework)',
  'Postman (API Testing)',
];

export const marketingSkills = [
  'Influencer & KOL Marketing',
  'Creator Lifecycle Management',
  'Performance Marketing (ROAS)',
  'Hybrid CPA & Rev-Share Models',
  'Contract Negotiation',
  'Growth Strategy & UA',
  'Lifecycle Campaign Management (Email, SMS, Push)',
  'KPI Reporting & Dashboard Building',
  'Partner Onboarding & Automation',
  'SEA & Philippine Market Expertise',
  'Content Strategy & Briefing',
  'Community Building',
  'Campaign Analytics',
];


export const toolStack = {
  technical: ['Cursor', 'VS Code', 'Postman', 'Android Studio', 'Firebase', 'Supabase', 'Docker', 'Bubble.IO', 'GoHighLevel', 'Wordpress'],
  marketing: ['Meta Business Suite', 'Telegram', 'Figma', 'Canva', 'Notion', 'Airtable', 'HubSpot', 'Google Workspace', 'Viber'],
  ai: ['Claude', 'ChatGPT', 'Gemini', 'Grok', 'n8n', 'Prompt Engineering'],
};


export const projects: Project[] = [
  {
    id: 'campaign-rivalry-tribe-main',
    category: 'marketing',
    title: 'Rivalry Tribe: The Gated D2C Powerhouse',
    date: '2021 - 2024',
    role: 'Community Marketing Specialist',
    color: '#3b82f6',
    results: '83% Peak DAU | 100% KYC-Verified',
    deliverables: [
      'KYC-Gated Onboarding Funnel',
      'Community Resilience Strategy',
      'D2C Retention Architecture',
      'High-Intent Audience Filtering'
    ],
    description: "Architected and scaled 'Rivalry Tribe', a private D2C community gated by a strict manual KYC-verification funnel. By requiring active User IDs for entry, I built a 100% qualified audience of 22,000 members with a 68% Daily Active User (DAU) rate. Following a platform strike, I engineered a rapid recovery strategy, rebuilding to 12,000 members while optimizing engagement density to a peak 83% DAU—turning the community into Rivalry's most efficient retention and support channel.",
    media: { type: 'image', url: '/rivalry/new-tribe.jpg' },
    gallery: [

    ],
  },
  {
    id: 'campaign-rivalry-evergreen',
    category: 'marketing',
    title: 'Tribe Evergreen: KYC & Education Infrastructure',
    date: '2023 - 2024',
    role: 'Community Marketing Specialist',
    color: '#10b981',
    results: '60% Reg-to-KYC Conversion',
    deliverables: [
      'Responsible Gambling Framework',
      'Product Education Infographics',
      'CS Load Reduction Strategy',
      'User Security Training'
    ],
    description: 'Developed a permanent educational content infrastructure to optimize the user lifecycle. By deploying strategic infographics on account security and withdrawal workflows, I achieved a 60% conversion rate from registration to KYC-verified status. This "first line of defense" strategy significantly reduced Customer Support ticket volume while ensuring that 100% of verified community members remained active, high-intent users.',
    media: { type: 'image', url: '/rivalry/guide.jpg' },
    gallery: [
      '/rivalry/viber-announcement.png',
      '/rivalry/info-tribe-1.png',
      '/rivalry/info-tribe-2.png',
      '/rivalry/tribe-4.png',
      '/rivalry/tribe-3.png',
      '/rivalry/matchups.jpg',
      '/rivalry/bbc.jpg',
      '/rivalry/guide.jpg',
      '/rivalry/tribe-5.png',
      '/rivalry/tribe-6.png',
      '/rivalry/tribe-7.jpg',
      '/rivalry/tribe-8.png',
      '/rivalry/tt.jpg',
    ]
  },
  {
    id: 'campaign-slamdunk-slips',
    category: 'marketing',
    title: 'Slamdunk Slips: NBA Seasonal Scale',
    date: 'NBA Season 2023-24',
    role: 'Marketing & Influencer Specialist',
    color: '#f59e0b',
    results: '+$7.5K Daily Profit | +15% Daily NGR',
    deliverables: [
      'Copy-Bet Workflow Optimization',
      'Influencer Content Calendar',
      'Market-Specific Activation',
      'ROI Tracking'
    ],
    description: 'Capitalized on the high-volume NBA market by launching "Slamdunk Slips," a campaign centered on "copy-bet" mechanics. I managed a calendar of influencer posts where creators shared exclusive NBA SGC bets via direct URLs. This streamlined user journey led to a sustained 15% increase in daily average NGR throughout the season, translating to an additional $5,000 - $7,500 in daily profit.',
    media: { type: 'image', url: '/rivalry/sgc-announcement.jpg' },
    gallery: [
      '/rivalry/sgc-420.png',
      '/rivalry/sgc-tribe-giveaway.png',
      '/rivalry/sgc-mus.jpg',

    ],
  },
  
  {
    id: 'campaign-kuyanic-ti',
    category: 'marketing',
    title: 'Rivalry x KuyaNic: O2O Watch Party',
    date: 'The International (TI) 11 - 2022',
    role: 'Campaigns & Affiliate Specialist',
    color: '#6366f1',
    results: '1,000+ New Verified Users in 5 Days',
    deliverables: [
      'O2O (Offline-to-Online) Strategy',
      'Experiential Booth Design',
      'High-Barrier UA Funnel',
      'B2B Partnership Management'
    ],
    description: 'Orchestrated an Offline-to-Online (O2O) acquisition strategy during the KuyaNic TI Watch Party. I designed a high-barrier entry funnel where attendees could only access Rivalry perks by joining the Tribe and completing a 300PHP deposit. This experiential activation resulted in 1,000+ new high-value, verified users within a 5-day window. I also managed the on-site influencer meet-and-greets and designed all physical brand assets.',
    media: {
      type: 'video',
      url: "https://res.cloudinary.com/dvjnueacb/video/upload/q_auto/f_auto/v1778967295/AQOQnj--KjMtP0_opa50TV397WOlJ2f3JPLZ1XnkuRzH9XPvHHi-c2iwg9QGWYfExp0fKZGXd5-JwCYObWXQ0J2T-DE3MtwILRfz14cL2B5vsw_itgrfd.mp4",
      thumbnail: '/rivalry/watchparty-cover.jpg',
    },
    
    gallery: [
      '/rivalry/watchparty-1.jpg',
      '/rivalry/watchparty-2.jpg',
      '/rivalry/watchparty-3.jpg',
      '/rivalry/watchparty-4.jpg',
      '/rivalry/watchparty-5.jpg',
      '/rivalry/watchparty-cover.jpg',
      '/rivalry/watchparty-cover-1.jpg',
    ]
  },
  {
    id: 'campaign-sgc-launch',
    category: 'marketing',
    title: 'Same Game Combos: Feature GTM Strategy',
    date: 'Feature Launch',
    role: 'Marketing & Influencer Specialist',
    color: '#ef4444',
    results: '+20% MoM Volume | +5% NGR',
    deliverables: [
      'Go-To-Market (GTM) Strategy',
      'Viral Content Engineering',
      'Influencer Education Briefs',
      'Cross-Channel Feature Promotion'
    ],
    description: "Spearheaded the regional launch of 'Same Game Combos' (SGC), Rivalry's proprietary parlay feature. I engineered a viral educational campaign across Facebook and Telegram, leveraging influencers to explain the high-upside potential of the product. The campaign resulted in a 20% Month-over-Month increase in transaction volume and a 5% boost in Net Gaming Revenue (NGR), maintaining the Philippines as Rivalry's #1 global region.",
    media: { type: 'image', url: '/rivalry/sgc-cover.png' },
    gallery: [
      
      '/rivalry/sgc-cover.png',
      '/rivalry/sgc-1.png',
      '/rivalry/sgc-2.png',
      '/rivalry/sgc-3.png',
      '/rivalry/sgc-4.png',
      '/rivalry/sgc-420.png',
      '/rivalry/sgc-tribe-giveaway.png',
      '/rivalry/bbc.jpg',
    ],
  },
  {
    id: 'campaign-rampage-report',
    category: 'marketing',
    title: 'Rampage Report: Dota 2 Market Stimulation',
    date: 'Weekly Series',
    role: 'Community Marketing Specialist',
    color: '#ef4444',
    results: '+15% Market Activity | 900 Peak CCV',
    deliverables: [
      'Livestream Programming',
      'Influencer Briefing & Spiels',
      'Real-time Market Activation',
      'Interactive Code Drops'
    ],
    description: 'Produced and managed a weekly community livestream show featuring top-tier Dota 2 influencers. The program focused on live product demonstrations where influencers shared bet-slips and predictions in real-time. This interactive format drove a consistent 10-15% surge in Dota 2 market activity during broadcasts and reached peak concurrent viewership of 900+ high-intent bettors.',
    media: { type: 'image', url: '/rivalry/rr-3.png' },
    gallery: [
      '/rivalry/rr.jpg',
      '/rivalry/rr-2.jpg',
      '/rivalry/rr.png',
      '/rivalry/rr-3.png',
      '/rivalry/rr-4.png',
    ],
  },
  {
    id: 'campaign-valentines-parlay',
    category: 'marketing',
    title: 'The Parlay That Got Away: Seasonal Activation',
    date: 'Feb 2024',
    role: 'Marketing & Influencer Specialist',
    color: '#ec4899',
    results: '+$1K Daily NGR | +150 Verified Members',
    deliverables: [
      'Influencer Talent Management',
      'Seasonal Giveaway Architecture',
      'SGC Feature Integration',
      'Rapid Community Growth'
    ],
    description: "Executed a high-impact 3-day Valentine's Day activation featuring influencer Kayla Heredia. By gating giveaway entry behind the use of the Same Game Combo feature, the campaign drove a 3% increase in daily NGR and acquired 150+ new KYC-verified members for the Rivalry Tribe community in just 72 hours.",
    media: { type: 'image', url: '/rivalry/parlay-1.png' },
    gallery: [
      '/rivalry/thread.png',
      '/rivalry/thread-2.png', 
      '/rivalry/thread-3.jpg', 
    ]
  },
  {
    id: 'proj-gymeasy',
    category: 'software',
    title: 'GymEasy - SaaS Gym Management Platform',
    date: 'June 2025 -',
    role: 'Founder · Project Manager, Back-end Developer',
    color: '#3b82f6',
    results: '67% Staff Reduction',
    tags: ['Next.js', 'Spring Boot', 'PostgreSQL', 'AWS'],
    description: 'A full end-to-end SaaS gym management system currently live in paid beta with active users. Automates complete front-desk workflows including QR-based attendance, digitalized POS, coach-client pipelines, and scheduling, delivering a 67% reduction in required front-desk workforce through platform automation.',
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
    id: 'proj-friendslop',
    category: 'software',
    title: 'Friendslop - Game Discovery App',
    date: 'March 2026 -',
    role: 'Developer',
    color: '#6366f1',
    tags: ['Next.js', 'Steam API', 'Google Drive'],
    description: "Building a TikTok-style game discovery platform for Steam users, surfacing personalized game recommendations based on existing library data and integrating Steam login to filter already-owned games from the discovery feed without third-party data sharing.",
    media: {
      type: 'image' as const,
      url: '/friendslop/cover.png',
    },
    liveUrl: '',
    repoUrl: '',
  },
  {
    id: 'proj-JCSD',
    category: 'software',
    title: 'JCSD Booking Website - Computer Shop Booking & Management App',
    date: 'March 2025',
    role: 'Developer',
    color: '#ec4899',
    tags: ['Flutter', 'Supabase', 'Full-Stack'],
    description: 'A full end-to-end booking and management application built for a computer service and repair shop. Features customer-facing maintenance booking, serialized inventory tracking with stock in/out monitoring, and automated HR functionality covering payroll, leave, and absence management.',
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
    id: 'exp-gymeasy-dev',
    category: 'software',
    title: 'Project Manager & Back-end Developer',
    company: 'GymEasy',
    date: 'June 2025 - Present',
    location: 'Davao, Philippines',
    color: '#3b82f6',
    description: 'Leading back-end architecture and project coordination for a full-service gym management SaaS targeting MSME gym owners.',
    details: [
      'Architected the Spring Boot back-end and database schema, handling member management, attendance tracking, and billing workflows.',
      'Coordinated a cross-functional team using Agile sprints, maintaining a staging deployment at gymeasy.app throughout active development.',
      'Integrated REST APIs between the Next.js front-end and Spring Boot services, with Supabase handling real-time data sync.',
    ],
  },
  {
    id: 'exp-jairosoft-intern',
    category: 'software',
    title: 'Bubble.io Web Developer - Internship',
    company: 'JairoSoft',
    date: 'May 2025 - June 2025',
    location: 'Davao, Philippines (On-site)',
    color: '#10b981',
    description: 'Developed core pages and corrected structural database design flaws within JairoSoft Institutes Learning Management System.',
    details: [
      'Developed 6 core pages for JairoSoft Institute of Technology\'s LMS, including Faculty, Course Edit/Add, and Admin Dashboards.',
      'Built reusable, high-performance UI components including an image carousel with dynamic link structures.',
      'Restructured and corrected the platform\'s relational database ERD after identifying critical design flaws from previous development cycles.',
      'Completed all software deliverables within 200 hours while serving as Scrum Master for 100 hours of the internship period.',
    ],
  },
  {
    id: 'exp-addu-cs',
    category: 'software',
    title: 'B.S. Computer Science — Dean\'s List',
    company: 'Ateneo de Davao University',
    date: '2021 - 2026',
    location: 'Davao, Philippines',
    color: '#6366f1',
    description: 'Graduating Computer Science student with a focus on full-stack development, AI systems, and software engineering methodology.',
    details: [
      'Completed major projects in Flutter (mobile/web), Python data pipelines, and RAG-based AI systems — all deployed to production or staging.',
      'Dean\'s List recognition (2021-2022) reflecting consistent academic performance alongside active industry work.',
      'Applied Systems Analysis & Design and Agile methodology across team capstone projects, including GymEasy.',
    ],
  },
  {
    id: 'exp-yohoho-lead',
    category: 'marketing',
    title: 'Philippines Team Lead',
    company: 'Yohoho.bet',
    date: 'June 2025 - October 2025',
    location: 'Remote',
    color: '#f97316',
    description: 'Kept running costs down while ensuring a strict-4:1 ROAS.',
    details: [
      'Deployed a rapid-scale multi-channel campaign playbook across email, SMS, push notiﬁcations, and community platforms, driving $355K in transaction volume and $100K in user acquisition revenue while building a Telegram retention channel from 0 to 1,000 members in 2 weeks.',
      'Rapidly identified and responded to an emerging market risk by shifting campaign focus from acquisition to retention, recovering monthly transaction volume to $95K with minimal revenue disruption',
      'Coordinated campaign asset delivery, payment scheduling, and KPI milestone tracking across macro-creator partnerships (1M+ followers), maintaining predictable spend and a 4:1 campaign ROAS throughout.',
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
    date: 'June 2025 - October 2025',
    location: 'Remote',
    color: '#B5F916',
    description: 'Directed rapid-scale influencer recruitment and social expansion, driving $355K in bet volume.',
    details: [
      'Audited and restructured 23 campaign partnerships into performance-based models, reallocating spend toward conversion-focused creators and capping costs at 25% of revenue per partner while sustaining a 4:1 ROAS.',
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
      'Built and scaled two Facebook communities using the same content playbook after the ﬁrst 22,000-member group was shut down by Meta, rebuilding to 12,000 members and sustaining 30 to 40% active engagement across both.',
      'Planned and executed weekly campaign activations tied to key cultural moments, coordinating content scheduling, audience targeting, and engagement tracking — pushing platform activity from 2% to 20% during peak events.',
      'Managed lifecycle engagement campaigns, including exclusive offer drops and re-engagement sequences across Viber (1,200 members), driving repeat user activation.',
      'Launched "Bring Me" activations that accelerated KYC completion through recurring content formats.',
    ],
    gallery: [
      '/rivalry/new-tribe.jpg',
      '/rivalry/viber.jpg',
      '/rivalry/bbc.jpg',
      '/rivalry/nsns.jpg',
      '/rivalry/tt.jpg',
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